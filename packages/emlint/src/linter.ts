import { TypedEmitter } from "tiny-typed-emitter";
import { fixEnt } from "string-fix-broken-named-entities";
import { traverse } from "ast-monkey-traverse";
import { lineCol, getLineStartIndexes } from "line-column-mini";
import clone from "lodash.clonedeep";
import { cparser } from "codsen-parser";
import { keys } from "ts-transformer-keys";
import matcher from "matcher";
import { get, normaliseRequestedRules } from "./rules";
import {
  isAnEnabledValue,
  isAnEnabledRule,
  astErrMessages,
  isObj,
} from "./util/util";
import {
  Obj,
  ErrorObj,
  Attrib,
  Severity,
  Config,
  MessageObj,
  Ranges,
  RulesObj,
  EventNames,
  RuleObjType,
} from "./util/commonTypes";
interface ErrorObjWithRuleId extends ErrorObj {
  ruleId: string;
}

// disable the max limit of listeners
TypedEmitter.defaultMaxListeners = 0;

/**
 * Pluggable email template code linter
 */
class Linter extends TypedEmitter<RuleObjType> {
  constructor() {
    super();
    this.messages = [];
    this.str = "";
    this.strLineStartIndexes = [];
    this.config = {} as Config;
    this.hasBeenCalledWithKeepSeparateWhenFixing = false;
    this.processedRulesConfig = {} as RulesObj;
  }

  messages: MessageObj[];
  str: string;
  strLineStartIndexes: number[]; // comes from line-column-mini
  config: Config;
  hasBeenCalledWithKeepSeparateWhenFixing: boolean;
  processedRulesConfig: RulesObj;

  verify(str: string, config: Config): ErrorObj[] {
    this.messages = [];
    this.str = str;
    // calculate line start indexes for row/column
    // reporting later, it allows line-column-mini to cut corners
    this.strLineStartIndexes = getLineStartIndexes(str);
    this.config = clone(config);
    this.hasBeenCalledWithKeepSeparateWhenFixing = false;
    this.processedRulesConfig = {};
    const has = Object.prototype.hasOwnProperty;

    console.log(
      `068 ${`\u001b[${31}m${`██`}\u001b[${39}m`}${`\u001b[${33}m${`██`}\u001b[${39}m`} ${`\u001b[${32}m${`linter.js`}\u001b[${39}m`}: verify called for "${str}" and ${JSON.stringify(
        config,
        null,
        4
      )}`
    );

    // VALIDATION FIRST
    if (config) {
      if (typeof config !== "object") {
        throw new Error(
          `emlint/verify(): [THROW_ID_01] second input argument, config is not a plain object but ${typeof config}. It's equal to:\n${JSON.stringify(
            config,
            null,
            4
          )}`
        );
      } else if (!Object.keys(config).length) {
        // empty config => early return
        return [];
      } else if (!config.rules || typeof config.rules !== "object") {
        throw new Error(
          `emlint/verify(): [THROW_ID_02] config contains no rules! It was given as:\n${JSON.stringify(
            config,
            null,
            4
          )}`
        );
      }
    } else {
      // falsey config => early return
      return [];
    }

    // detect the language
    // const lang = detectLanguage(str);

    // filter out all applicable values and make them listen for events that
    // tokenizer emits
    // TODO - rebase, avoid using const, assign directly to "this."
    const processedRulesConfig = normaliseRequestedRules(config.rules);
    console.log(
      `110 ${`\u001b[${33}m${`processedRulesConfig`}\u001b[${39}m`} = ${JSON.stringify(
        processedRulesConfig,
        null,
        4
      )}`
    );
    this.processedRulesConfig = processedRulesConfig;

    Object.keys(processedRulesConfig)
      // filter out the rules coming from external packages - they'll be
      // processed separately, in the callbacks coming out of external packages,
      // see the section "rules coming from standalone packages".
      .filter((ruleName) => get(ruleName))
      // filter out enabled rules:
      .filter((ruleName) => {
        // same config like in ESLint - 0 is off, 1 is warning, 2 is error
        if (typeof processedRulesConfig[ruleName] === "number") {
          return processedRulesConfig[ruleName] > 0;
        }
        if (Array.isArray(processedRulesConfig[ruleName])) {
          console.log(
            `131 ███████████████████████████████████████ ${`\u001b[${33}m${`ruleName`}\u001b[${39}m`} = ${JSON.stringify(
              ruleName,
              null,
              4
            )}`
          );
          return (processedRulesConfig as any)[ruleName][0] > 0;
        }
        return false;
      })
      .forEach((rule) => {
        console.log(
          `143 ${`\u001b[${32}m${`linter.js`}\u001b[${39}m`}: filtering rule ${rule}`
        );
        // extract all the options, second array element onwards - the length is indeterminable
        let rulesFunction: RulesObj;
        if (
          Array.isArray(processedRulesConfig[rule]) &&
          (processedRulesConfig[rule] as any).length > 1
        ) {
          // pass not only "this", the context, but also all the opts, as args
          rulesFunction = get(rule)(
            this,
            ...(processedRulesConfig as any)[rule].slice(1)
          );
        } else {
          // just pass "this", the context
          rulesFunction = get(rule)(this);
        }

        Object.keys(rulesFunction).forEach((consumedNode: string) => {
          this.on(consumedNode as EventNames, (...args: any[]) => {
            // console.log(
            //   `106 ${`\u001b[${32}m${`linter.js`}\u001b[${39}m`}: ${`\u001b[${33}m${`consumedNode`}\u001b[${39}m`} = ${JSON.stringify(
            //     consumedNode,
            //     null,
            //     4
            //   )}`
            // );
            (rulesFunction as Obj)[consumedNode](...args);
          });
        });
      });

    // emlint runs on codsen-parser which in turn runs on codsen-tokenizer.

    // Tokenizer recognises string as various token types and "pings" the
    // callback function given to the tokenizer with those lumps, plain objects.

    // Now, Parser consumes those tokens and assembles a tree, an AST.

    // EMLint is plugin-based. Plugins work on code source - consuming either
    // raw tokens, each token of particular kind, listening to event emitted
    // called after that token type, or plugins consume whole AST, listening
    // to "ast"-type event.

    // Now, the less work done the faster program runs.

    // The quickest way for emlint to obtain tokens is from codsen-parser,
    // to tap them raw, bypassing the AST tree, as they come from tokenizer.

    // But the problem is, this approach does not work with broken code.

    // We can't consume tokenizer's nodes because parser can change the
    // nodes, correcting the errors - it's possible because parser "sees" the
    // whole picture.

    // Therefore, we don't consume tokens from the tokenizer, we consume AST
    // from parser, then we send the monkey (ast-monkey-traverse) to traverse
    // that AST and emit the token events.

    this.emit(
      "ast",
      traverse(
        cparser(str, {
          charCb: (obj) => {
            // We call the character-level callback from raw characters, coming
            // if from parser which comes straight from tokenizer.

            // console.log(
            //   `160 ██ ${`\u001b[${35}m${`linter/charCb():`}\u001b[${39}m`} incoming ${`\u001b[${33}m${`obj`}\u001b[${39}m`} = ${JSON.stringify(
            //     obj,
            //     null,
            //     4
            //   )}`
            // );
            this.emit("character", obj);
          },
          errCb: (obj) => {
            console.log(
              `221 ██ ${`\u001b[${35}m${`linter/errCb():`}\u001b[${39}m`} incoming ${`\u001b[${33}m${`obj`}\u001b[${39}m`} = ${JSON.stringify(
                obj,
                null,
                4
              )}`
            );
            console.log(
              `228 ${`\u001b[${33}m${`config.rules`}\u001b[${39}m`} = ${JSON.stringify(
                config.rules,
                null,
                4
              )}`
            );

            // check, is rule enabled at the first place:
            const currentRulesSeverity: Severity = isAnEnabledRule(
              config.rules,
              obj.ruleId as string
            );
            if (currentRulesSeverity) {
              let message = `Something is wrong.`;

              if (
                isObj(obj) &&
                typeof obj.ruleId === "string" &&
                has.call(astErrMessages, obj.ruleId)
              ) {
                message = (astErrMessages as any)[obj.ruleId];
              }

              console.log(
                `252 ${`\u001b[${32}m${`REPORT`}\u001b[${39}m`} "${message}"`
              );
              this.report({
                message,
                severity: currentRulesSeverity,
                fix: null,
                ...(obj as any),
              });
            }
          },
        }),
        (key, val, innerObj) => {
          const current = val !== undefined ? val : key;
          if (
            isObj(current) &&
            (!innerObj.parentKey || !innerObj.parentKey.startsWith("attrib"))
          ) {
            // console.log(` `);
            // console.log(
            //   `-----------------------------------------------------------------------------`
            // );
            // console.log(` `);
            // console.log(
            //   `275 ${`\u001b[${33}m${`██`}\u001b[${39}m`} ${`\u001b[${33}m${`innerObj`}\u001b[${39}m`} = ${JSON.stringify(
            //     innerObj,
            //     null,
            //     4
            //   )}`
            // );
            // monkey will traverse every key, every string within.
            // We need to pick the objects of a type we need: "tag", "comment" etc.

            // tag-level callback
            // console.log(
            //   `286 ██ ${`\u001b[${35}m${`linter/tagCb():`}\u001b[${39}m`} PING ${
            //     current.type
            //   } - ${`\u001b[${33}m${`current`}\u001b[${39}m`} = ${JSON.stringify(
            //     current,
            //     null,
            //     4
            //   )}`
            // );
            this.emit(current.type, current);
            // plus, for type:html also ping each attribute
            if (
              current.type === "tag" &&
              Array.isArray(current.attribs) &&
              current.attribs.length
            ) {
              current.attribs.forEach((attribObj: Attrib) => {
                console.log(
                  `303 ${`\u001b[${36}m${`██`}\u001b[${39}m`} ping attribute ${JSON.stringify(
                    attribObj,
                    null,
                    4
                  )}`
                );
                this.emit("attribute", {
                  ...attribObj,
                  parent: { ...current },
                });
              });
            }
          }
          return current;
        }
      )
    );
    console.log(` `);
    console.log(
      `-----------------------------------------------------------------------------`
    );
    console.log(` `);

    //
    //
    //
    //
    //
    //
    //                rules coming from standalone packages
    //
    //
    //
    //
    //
    //

    // 1. if any of bad named HTML entity catcher rules is requested, run it
    if (
      Object.keys(config.rules).some(
        (ruleName) =>
          (ruleName === "all" || // group blanket setting
            ruleName === "bad-html-entity" || // group blanket setting
            ruleName.startsWith("bad-html-entity") ||
            ruleName.startsWith("bad-named-html-entity") ||
            matcher.isMatch(
              ["bad-malformed-numeric-character-entity"],
              ruleName
            )) &&
          (isAnEnabledValue(config.rules[ruleName]) ||
            isAnEnabledValue(processedRulesConfig[ruleName]))
      )
    ) {
      console.log(`356 linter.js: call fixEnt()`);
      fixEnt(str, {
        cb: (obj) => {
          console.log(
            `360 ${`\u001b[${32}m${`linter.js`}\u001b[${39}m`}: ${`\u001b[${33}m${`obj`}\u001b[${39}m`} = ${JSON.stringify(
              obj,
              null,
              4
            )}`
          );
          // evaluate, does the config have this emitted rule set and enabled
          let matchedRulesName = "";

          // A severity value can be under array's first element or as digit,
          // plus rule itself might be group rule ("bad-html-entity") or
          // mentioned directly.
          // The plan is to try to extract severity various ways, later if it's
          // set, then report the error.
          let severity;

          // rule is group, blanket rule
          if (Object.keys(config.rules).includes("bad-html-entity")) {
            if (obj.ruleName === "bad-named-html-entity-unrecognised") {
              // unrecongnised named HTML entities might be false positives,
              // mix of ampersand, letters and semicolon, without spaces,
              // so default level is "warning", not "error":
              severity = 1;
            } else if (Array.isArray(config.rules["bad-html-entity"])) {
              severity = config.rules["bad-html-entity"][0];
            } else if (Number.isInteger(config.rules["bad-html-entity"])) {
              severity = config.rules["bad-html-entity"];
            }
          } else if (
            Object.keys(config.rules).some((rulesName) => {
              console.log(
                `${`\u001b[${36}m${`--- rulesName: ${rulesName}`}\u001b[${39}m`}`
              );
              if (matcher.isMatch(obj.ruleName, rulesName)) {
                matchedRulesName = rulesName;
                console.log(
                  `${`\u001b[${36}m${`"${rulesName}" matched!`}\u001b[${39}m`}`
                );

                return true;
              }
              return false;
            })
          ) {
            if (
              obj.ruleName === "bad-named-html-entity-unrecognised" &&
              config.rules["bad-named-html-entity-unrecognised"] === undefined
            ) {
              // unless the rule was requested exactly, severity is 1.
              // This applies to both group blanket rules "bad-html-entity" and
              // any rules achieved by applying wildcards, for example,
              // "bad-named-html-entity-*".
              severity = 1;
            } else if (Array.isArray(config.rules[matchedRulesName])) {
              severity = (config.rules as any)[matchedRulesName][0];
            } else if (Number.isInteger(config.rules[matchedRulesName])) {
              severity = config.rules[matchedRulesName];
            }
          }

          if (Number.isInteger(severity)) {
            let message;
            if (obj.ruleName === "bad-named-html-entity-malformed-nbsp") {
              message = "Malformed NBSP entity.";
            } else if (obj.ruleName === "bad-named-html-entity-unrecognised") {
              message = "Unrecognised named entity.";
            } else if (
              obj.ruleName === "bad-named-html-entity-multiple-encoding"
            ) {
              message = "HTML entity encoding over and over.";
            } else if (
              obj.ruleName === "bad-malformed-numeric-character-entity"
            ) {
              message = "Malformed numeric entity.";
            } else {
              message = `Malformed ${
                obj.entityName ? obj.entityName : "named"
              } entity.`;
            }

            let ranges: Ranges = [
              [
                obj.rangeFrom,
                obj.rangeTo,
                obj.rangeValEncoded ? obj.rangeValEncoded : "",
              ],
            ];
            if (obj.ruleName === "bad-named-html-entity-unrecognised") {
              ranges = [];
            }

            this.report({
              severity,
              ruleId: obj.ruleName,
              message,
              idxFrom: obj.rangeFrom,
              idxTo: obj.rangeTo,
              fix: {
                ranges,
              },
            });
          }
        },
        entityCatcherCb: (from, to) => {
          console.log(
            `465 linter.js: entityCatcher pinging { from: ${from}, to: ${to} }`
          );
          this.emit("entity", { idxFrom: from, idxTo: to });
        },
      });
    }

    // remove all listeners

    // extract all keys from the events interface
    const allEventNames = keys<RuleObjType>();
    allEventNames.forEach((eventName) => {
      this.removeAllListeners(eventName as any);
    });

    console.log(
      `481 ${`\u001b[${32}m${`linter.js`}\u001b[${39}m`}: verify() final return is called;\nthis.messages=${JSON.stringify(
        this.messages,
        null,
        4
      )}`
    );
    return clone(this.messages);
  }

  report(obj: ErrorObjWithRuleId): void {
    console.log(
      `492 ${`\u001b[${32}m${`linter.js/report()`}\u001b[${39}m`}: called with ${JSON.stringify(
        obj,
        null,
        4
      )}; this.hasBeenCalledWithKeepSeparateWhenFixing = ${
        this.hasBeenCalledWithKeepSeparateWhenFixing
      }`
    );

    // fill in other data points:
    const { line, col } = lineCol(
      this.strLineStartIndexes,
      obj.idxFrom,
      true
    ) as Obj;
    let severity: Severity = obj.severity || 0; // rules coming from 3rd party packages will give the severity value
    console.log(
      `509 ${`\u001b[${32}m${`linter.js/report()`}\u001b[${39}m`}: ${`\u001b[${33}m${`this.processedRulesConfig[obj.ruleId]`}\u001b[${39}m`} = ${JSON.stringify(
        this.processedRulesConfig[obj.ruleId],
        null,
        4
      )}`
    );
    if (
      !Number.isInteger(obj.severity) &&
      typeof this.processedRulesConfig[obj.ruleId] === "number"
    ) {
      severity = this.processedRulesConfig[obj.ruleId] as Severity;
    } else if (
      !Number.isInteger(obj.severity) &&
      Array.isArray(this.processedRulesConfig[obj.ruleId])
    ) {
      severity = (this.processedRulesConfig[obj.ruleId] as any[])[0];
    }
    console.log(
      `527 ${`\u001b[${32}m${`linter.js/report()`}\u001b[${39}m`}: line = ${line}; column = ${col}`
    );
    console.log(
      `530 ${`\u001b[${32}m${`linter.js/report()`}\u001b[${39}m`}: ${`\u001b[${33}m${`this.messages`}\u001b[${39}m`} BEFORE: ${JSON.stringify(
        this.messages,
        null,
        4
      )}`
    );

    this.messages.push({
      fix: null,
      keepSeparateWhenFixing: false,
      line,
      column: col,
      severity,
      ...obj,
      ...(this.hasBeenCalledWithKeepSeparateWhenFixing ? { fix: null } : {}),
    });
    console.log(
      `547 ${`\u001b[${32}m${`linter.js/report()`}\u001b[${39}m`}: ${`\u001b[${33}m${`this.messages`}\u001b[${39}m`} AFTER: ${JSON.stringify(
        this.messages,
        null,
        4
      )}`
    );

    // After pushing, let's manage "keepSeparateWhenFixing" messages -
    // make a note of the first incoming message with "keepSeparateWhenFixing"
    // key, in order to remove "fix" values from all other incoming messages
    // with "keepSeparateWhenFixing" key. That's necessary to support certain
    // fixes composition.
    if (
      obj.keepSeparateWhenFixing &&
      !this.hasBeenCalledWithKeepSeparateWhenFixing &&
      obj.fix
    ) {
      this.hasBeenCalledWithKeepSeparateWhenFixing = true;
    }

    console.log(
      `568 ${`\u001b[${32}m${`linter.js/report()`}\u001b[${39}m`}: ENDING this.hasBeenCalledWithKeepSeparateWhenFixing = ${
        this.hasBeenCalledWithKeepSeparateWhenFixing
      }`
    );
  }
}

export { Linter, RuleObjType };
