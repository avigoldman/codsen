# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 3.14.0 (2019-01-20)

- ✨ Various documentation and setup tweaks after we migrated to monorepo
- ✨ Setup refresh: updated dependencies and all config files using automated tools

## 3.10.0 (2018-10-25)

- ✨ Updated all dependencies
- ✨ Restored coveralls.io reporting
- ✨ Restored unit test linting

## 3.9.0 (2018-08-11)

Code refresh:

- ✨ Removed conditional `if(DEBUG)` statements which previously relied on being commented-out
- ✨ Updated all build parts to suit Babel 7
- ✨ Set up comments removal from built files
- ✨ Switched to `rollup-plugin-terser` to finally forget "is it ES or non-ES code" issues
- ✨ Temporaroly removed code coverage, `nyc` because it broke after switching to Babel 7, latest `ava` and `esm` combo

Repo is now living happily in BitBucket; traffic seems to be the same

## 3.8.0 (2018-06-16)

GitHub sold us out. In the meantime, we:

- ✨ Migrated to BitBucket (to host repo + perform CI) and Codacy (for code quality audit)
- ✨ Dropped BitHound (RIP) and Travis

## 3.7.0 (2018-05-26)

- ✨ Wired Rollup to remove comments from non-dev builds. This means we can now leave the `console.log`s in the source code — there's no need to comment-out `console.log` statements or care about them not spilling into production. Now it's done automatically.
- ✨ Unit tests are pointing at ES modules build, which means that code coverage is correct now, without Babel functions being missed. This is important because now code coverage is real again and now there are no excuses not to perfect it.

## 3.6.0 (2018-04-27)

- ✨ Set up [prettier](https://prettier.io) and removed `.editorconfig`
- ✨ Remove `package-lock.json`
- ✨ Made some error messages to display content in colour.

## 3.5.0 (2018-01-22)

- ✨ Improvements to error messages — now reporting index of the heads or tails in question.

## 3.4.0 (2018-01-04)

- ✨ Add `opts.relaxedAPI`

## 3.3.0 (2018-01-04)

- ✨ Improvements to the algorithm. If the situation is vague and there's overlap of tails and heads (tails slightly preceding heads), algorithm will pick heads and ignore tails in front.

## 3.2.0 (2018-01-03)

- ✨ Add `opts.matchHeadsAndTailsStrictlyInPairsByTheirOrder`

## 3.1.0 (2018-01-02)

No new features, only under-bonnet improvements.

- ✨ Pinned all unit tests' throws to exact errors. Practically, this means we test not only does it throw in particular case, but also does it raise the exact error that we intended to raise.

## 3.0.0 (2017-12-28)

### Breaking API changes

- ✨ Moved fourth argument, `fromIndex`, into `opts` because it stood in the way.
- ✨ `opts.throwWhenSomethingWrongIsDetected` – When I tapped this API myself for the first time, I noticed errors with heads and tails should be `throw`n here, at this package, not at its consumers. For example, both heads and tails are found but they're in the opposite order. Now, the default settings will leads to `throw`n error. You can turn it off and make it behave like previous version by setting `opts.throwWhenSomethingWrongIsDetected` to `false`
- ✨ `opts.allowWholeValueToBeOnlyHeadsOrTails` — When processing JSON data structures, it's possible that they will contain their own config. For example, JSON will use heads and tails, but also, there will be fields that DEFINE those heads and tails as well. This is a peculiar case - whole string will be equal to heads or tails. These cases will be recognised and errors won't be `throw`n. Unless you set `opts.allowWholeValueToBeOnlyHeadsOrTails` to `false`.
- ✨ `optssource` - allows to `throw` errors in different name. Useful for parent libraries.

## 2.0.0 (2017-12-27)

Complete rewrite of the API.

- ✨ When I tried to use it, I understood that I didn't like the `v.1` API at all. Reporting only first character indexes of heads and tails was a compromise, done only because the previous API's did the same. However, that is witholding the information - we can and we will give user more: where each heads and tails start and end. Also, we are going to abolish this separation of heads and tails into two arrays. Each heads/tails set will be sitting in a plain object. They are both pieces of a single set. That's why they belong together.

Example result of `v.1` API:

```js
[[3, 15], [9, 21]];
```

now the same example in `v.2` API:

```js
[
  {
    headsStartAt: 3,
    headsEndAt: 6,
    tailsStartAt: 9,
    tailsEndAt: 12
  },
  {
    headsStartAt: 15,
    headsEndAt: 18,
    tailsStartAt: 21,
    tailsEndAt: 24
  }
];
```

## 1.0.0 (2017-12-22)

- ✨ First public release