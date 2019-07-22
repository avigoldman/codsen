'use strict';
const Emittery = require('emittery');
const matcher = require('matcher');
const ContextRef = require('./context-ref');
const createChain = require('./create-chain');
const snapshotManager = require('./snapshot-manager');
const serializeError = require('./serialize-error');
const Runnable = require('./test');

class Runner extends Emittery {
	constructor(options = {}) {
		super();

		this.failFast = options.failFast === true;
		this.failWithoutAssertions = options.failWithoutAssertions !== false;
		this.file = options.file;
		this.match = options.match || [];
		this.projectDir = options.projectDir;
		this.recordNewSnapshots = options.recordNewSnapshots === true;
		this.runOnlyExclusive = options.runOnlyExclusive === true;
		this.serial = options.serial === true;
		this.snapshotDir = options.snapshotDir;
		this.updateSnapshots = options.updateSnapshots;

		this.activeRunnables = new Set();
		this.boundCompareTestSnapshot = this.compareTestSnapshot.bind(this);
		this.interrupted = false;
		this.snapshots = null;
		this.tasks = {
			after: [],
			afterAlways: [],
			afterEach: [],
			afterEachAlways: [],
			before: [],
			beforeEach: [],
			concurrent: [],
			serial: [],
			todo: []
		};

		const uniqueTestTitles = new Set();
		let hasStarted = false;
		let scheduledStart = false;
		const meta = Object.freeze({
			file: options.file
		});
		this.chain = createChain((metadata, args) => { // eslint-disable-line complexity
			if (hasStarted) {
				throw new Error('All tests and hooks must be declared synchronously in your test file, and cannot be nested within other tests or hooks.');
			}

			if (!scheduledStart) {
				scheduledStart = true;
				process.nextTick(() => {
					hasStarted = true;
					this.start();
				});
			}

			const specifiedTitle = typeof args[0] === 'string' ?
				args.shift() :
				undefined;
			const implementations = Array.isArray(args[0]) ?
				args.shift() :
				args.splice(0, 1);

			if (metadata.todo) {
				if (implementations.length > 0) {
					throw new TypeError('`todo` tests are not allowed to have an implementation. Use `test.skip()` for tests with an implementation.');
				}

				if (specifiedTitle === undefined || specifiedTitle === '') {
					throw new TypeError('`todo` tests require a title');
				}

				if (uniqueTestTitles.has(specifiedTitle)) {
					throw new Error(`Duplicate test title: ${specifiedTitle}`);
				} else {
					uniqueTestTitles.add(specifiedTitle);
				}

				if (this.match.length > 0) {
					// --match selects TODO tests.
					if (matcher([specifiedTitle], this.match).length === 1) {
						metadata.exclusive = true;
						this.runOnlyExclusive = true;
					}
				}

				this.tasks.todo.push({title: specifiedTitle, metadata});
				this.emit('stateChange', {
					type: 'declared-test',
					title: specifiedTitle,
					knownFailing: false,
					todo: true
				});
			} else {
				if (implementations.length === 0) {
					throw new TypeError('Expected an implementation. Use `test.todo()` for tests without an implementation.');
				}

				for (const implementation of implementations) {
					let title = implementation.title ?
						implementation.title(specifiedTitle, ...args) :
						specifiedTitle;

					if (title !== undefined && typeof title !== 'string') {
						throw new TypeError('Test & hook titles must be strings');
					}

					if (title === undefined || title === '') {
						if (metadata.type === 'test') {
							throw new TypeError('Tests must have a title');
						} else if (metadata.always) {
							title = `${metadata.type}.always hook`;
						} else {
							title = `${metadata.type} hook`;
						}
					}

					if (metadata.type === 'test') {
						if (uniqueTestTitles.has(title)) {
							throw new Error(`Duplicate test title: ${title}`);
						} else {
							uniqueTestTitles.add(title);
						}
					}

					const task = {
						title,
						implementation,
						args,
						metadata: {...metadata}
					};

					if (metadata.type === 'test') {
						if (this.match.length > 0) {
							// --match overrides .only()
							task.metadata.exclusive = matcher([title], this.match).length === 1;
						}

						if (task.metadata.exclusive) {
							this.runOnlyExclusive = true;
						}

						this.tasks[metadata.serial ? 'serial' : 'concurrent'].push(task);
						this.emit('stateChange', {
							type: 'declared-test',
							title,
							knownFailing: metadata.failing,
							todo: false
						});
					} else if (!metadata.skipped) {
						this.tasks[metadata.type + (metadata.always ? 'Always' : '')].push(task);
					}
				}
			}
		}, {
			serial: false,
			exclusive: false,
			skipped: false,
			todo: false,
			failing: false,
			callback: false,
			always: false
		}, meta);
	}

	compareTestSnapshot(options) {
		if (!this.snapshots) {
			this.snapshots = snapshotManager.load({
				file: this.file,
				fixedLocation: this.snapshotDir,
				projectDir: this.projectDir,
				recordNewSnapshots: this.recordNewSnapshots,
				updating: this.updateSnapshots
			});
			this.emit('dependency', this.snapshots.snapPath);
		}

		return this.snapshots.compare(options);
	}

	saveSnapshotState() {
		if (this.snapshots) {
			return this.snapshots.save();
		}

		if (this.updateSnapshots) {
			// TODO: There may be unused snapshot files if no test caused the
			// snapshots to be loaded. Prune them. But not if tests (including hooks!)
			// were skipped. Perhaps emit a warning if this occurs?
		}

		return null;
	}

	onRun(runnable) {
		this.activeRunnables.add(runnable);
	}

	onRunComplete(runnable) {
		this.activeRunnables.delete(runnable);
	}

	attributeLeakedError(err) {
		for (const runnable of this.activeRunnables) {
			if (runnable.attributeLeakedError(err)) {
				return true;
			}
		}

		return false;
	}

	beforeExitHandler() {
		for (const runnable of this.activeRunnables) {
			runnable.finishDueToInactivity();
		}
	}

	async runMultiple(runnables) {
		let allPassed = true;
		const storedResults = [];
		const runAndStoreResult = async runnable => {
			const result = await this.runSingle(runnable);
			if (!result.passed) {
				allPassed = false;
			}

			storedResults.push(result);
		};

		let waitForSerial = Promise.resolve();
		await runnables.reduce((prev, runnable) => {
			if (runnable.metadata.serial || this.serial) {
				waitForSerial = prev.then(() => {
					// Serial runnables run as long as there was no previous failure, unless
					// the runnable should always be run.
					return (allPassed || runnable.metadata.always) && runAndStoreResult(runnable);
				});
				return waitForSerial;
			}

			return Promise.all([
				prev,
				waitForSerial.then(() => {
					// Concurrent runnables are kicked off after the previous serial
					// runnables have completed, as long as there was no previous failure
					// (or if the runnable should always be run). One concurrent runnable's
					// failure does not prevent the next runnable from running.
					return (allPassed || runnable.metadata.always) && runAndStoreResult(runnable);
				})
			]);
		}, waitForSerial);

		return {allPassed, storedResults};
	}

	async runSingle(runnable) {
		this.onRun(runnable);
		const result = await runnable.run();
		// If run() throws or rejects then the entire test run crashes, so
		// onRunComplete() doesn't *have* to be inside a finally.
		this.onRunComplete(runnable);
		return result;
	}

	async runHooks(tasks, contextRef, titleSuffix) {
		const hooks = tasks.map(task => new Runnable({
			contextRef,
			failWithoutAssertions: false,
			fn: task.args.length === 0 ?
				task.implementation :
				t => task.implementation.apply(null, [t].concat(task.args)),
			compareTestSnapshot: this.boundCompareTestSnapshot,
			updateSnapshots: this.updateSnapshots,
			metadata: task.metadata,
			title: `${task.title}${titleSuffix || ''}`
		}));
		const outcome = await this.runMultiple(hooks, this.serial);
		for (const result of outcome.storedResults) {
			if (result.passed) {
				this.emit('stateChange', {
					type: 'hook-finished',
					title: result.title,
					duration: result.duration,
					logs: result.logs
				});
			} else {
				this.emit('stateChange', {
					type: 'hook-failed',
					title: result.title,
					err: serializeError('Hook failure', true, result.error),
					duration: result.duration,
					logs: result.logs
				});
			}
		}

		return outcome.allPassed;
	}

	async runTest(task, contextRef) {
		let hooksAndTestOk = false;

		const hookSuffix = ` for ${task.title}`;
		if (await this.runHooks(this.tasks.beforeEach, contextRef, hookSuffix)) {
			// Only run the test if all `beforeEach` hooks passed.
			const test = new Runnable({
				contextRef,
				failWithoutAssertions: this.failWithoutAssertions,
				fn: task.args.length === 0 ?
					task.implementation :
					t => task.implementation.apply(null, [t].concat(task.args)),
				compareTestSnapshot: this.boundCompareTestSnapshot,
				updateSnapshots: this.updateSnapshots,
				metadata: task.metadata,
				title: task.title
			});

			const result = await this.runSingle(test);
			if (result.passed) {
				this.emit('stateChange', {
					type: 'test-passed',
					title: result.title,
					duration: result.duration,
					knownFailing: result.metadata.failing,
					logs: result.logs
				});
				hooksAndTestOk = await this.runHooks(this.tasks.afterEach, contextRef, hookSuffix);
			} else {
				this.emit('stateChange', {
					type: 'test-failed',
					title: result.title,
					err: serializeError('Test failure', true, result.error),
					duration: result.duration,
					knownFailing: result.metadata.failing,
					logs: result.logs
				});
				// Don't run `afterEach` hooks if the test failed.
			}
		}

		const alwaysOk = await this.runHooks(this.tasks.afterEachAlways, contextRef, hookSuffix);
		return hooksAndTestOk && alwaysOk;
	}

	async start() {
		const concurrentTests = [];
		const serialTests = [];
		for (const task of this.tasks.serial) {
			if (this.runOnlyExclusive && !task.metadata.exclusive) {
				continue;
			}

			this.emit('stateChange', {
				type: 'selected-test',
				title: task.title,
				knownFailing: task.metadata.failing,
				skip: task.metadata.skipped,
				todo: false
			});

			if (!task.metadata.skipped) {
				serialTests.push(task);
			}
		}

		for (const task of this.tasks.concurrent) {
			if (this.runOnlyExclusive && !task.metadata.exclusive) {
				continue;
			}

			this.emit('stateChange', {
				type: 'selected-test',
				title: task.title,
				knownFailing: task.metadata.failing,
				skip: task.metadata.skipped,
				todo: false
			});

			if (!task.metadata.skipped) {
				if (this.serial) {
					serialTests.push(task);
				} else {
					concurrentTests.push(task);
				}
			}
		}

		for (const task of this.tasks.todo) {
			if (this.runOnlyExclusive && !task.metadata.exclusive) {
				continue;
			}

			this.emit('stateChange', {
				type: 'selected-test',
				title: task.title,
				knownFailing: false,
				skip: false,
				todo: true
			});
		}

		if (concurrentTests.length === 0 && serialTests.length === 0) {
			this.emit('finish');
			// Don't run any hooks if there are no tests to run.
			return;
		}

		const contextRef = new ContextRef();

		// Note that the hooks and tests always begin running asynchronously.
		const beforePromise = this.runHooks(this.tasks.before, contextRef);
		const serialPromise = beforePromise.then(beforeHooksOk => { // eslint-disable-line promise/prefer-await-to-then
			// Don't run tests if a `before` hook failed.
			if (!beforeHooksOk) {
				return false;
			}

			return serialTests.reduce(async (prev, task) => {
				const prevOk = await prev;
				// Don't start tests after an interrupt.
				if (this.interrupted) {
					return prevOk;
				}

				// Prevent subsequent tests from running if `failFast` is enabled and
				// the previous test failed.
				if (!prevOk && this.failFast) {
					return false;
				}

				return this.runTest(task, contextRef.copy());
			}, true);
		});
		const concurrentPromise = Promise.all([beforePromise, serialPromise]).then(async ([beforeHooksOk, serialOk]) => { // eslint-disable-line promise/prefer-await-to-then
			// Don't run tests if a `before` hook failed, or if `failFast` is enabled
			// and a previous serial test failed.
			if (!beforeHooksOk || (!serialOk && this.failFast)) {
				return false;
			}

			// Don't start tests after an interrupt.
			if (this.interrupted) {
				return true;
			}

			// If a concurrent test fails, even if `failFast` is enabled it won't
			// stop other concurrent tests from running.
			const allOkays = await Promise.all(concurrentTests.map(task => {
				return this.runTest(task, contextRef.copy());
			}));
			return allOkays.every(ok => ok);
		});

		const beforeExitHandler = this.beforeExitHandler.bind(this);
		process.on('beforeExit', beforeExitHandler);

		try {
			const ok = await concurrentPromise;
			// Only run `after` hooks if all hooks and tests passed.
			if (ok) {
				await this.runHooks(this.tasks.after, contextRef);
			}

			// Always run `after.always` hooks.
			await this.runHooks(this.tasks.afterAlways, contextRef);
			process.removeListener('beforeExit', beforeExitHandler);
			await this.emit('finish');
		} catch (error) {
			await this.emit('error', error);
		}
	}

	interrupt() {
		this.interrupted = true;
	}
}

module.exports = Runner;