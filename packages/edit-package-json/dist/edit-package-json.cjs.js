/**
 * @name edit-package-json
 * @fileoverview Edit package.json without parsing, as string, to keep the formatting intact
 * @version 0.3.13
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/edit-package-json/}
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _typeof = require('@babel/runtime/helpers/typeof');
var stringLeftRight = require('string-left-right');
var rangesApply = require('ranges-apply');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);

var version$1 = "0.3.13";

var version = version$1;
function isStr(something) {
  return typeof something === "string";
}
function stringifyPath(something) {
  if (Array.isArray(something)) {
    return something.join(".");
  }
  if (isStr(something)) {
    return something;
  }
  return String(something);
}
function stringifyAndEscapeValue(something) {
  if (isStr(something) && something.startsWith("\"") && something.endsWith("\"")) {
    return "".concat(JSON.stringify(something.slice(1, something.length - 1), null, 0));
  }
  return JSON.stringify(something, null, 0);
}
/* istanbul ignore next */
function isNotEscape(str, idx) {
  if (str[idx] !== "\\") {
    return true;
  }
  var temp = stringLeftRight.chompLeft(str, idx, {
    mode: 1
  }, "\\");
  if (typeof temp === "number" && (idx - temp) % 2 !== 0) {
    return true;
  }
  return false;
}
function main(_ref) {
  var str = _ref.str,
      path = _ref.path,
      valToInsert = _ref.valToInsert,
      mode = _ref.mode;
  var i = 0;
  function log(something) {
    if (str[i] !== " ") ;
  }
  var len = str.length;
  var ranges = [];
  log();
  var badChars = ["{", "}", "[", "]", ":", ","];
  var calculatedValueToInsert = valToInsert;
  if (isStr(valToInsert) && !valToInsert.startsWith("\"") && !valToInsert.startsWith("{")) {
    calculatedValueToInsert = "\"".concat(valToInsert, "\"");
  }
  var withinObjectIndexes = [];
  var withinArrayIndexes = [];
  var currentlyWithinObject = false;
  var currentlyWithinArray = false;
  var replaceThisValue = false;
  var keyStartedAt = null;
  var keyEndedAt = null;
  var valueStartedAt = null;
  var valueEndedAt = null;
  var keyName = null;
  var keyValue = null;
  var withinQuotesSince;
  var itsTheFirstElem = false;
  var skipUntilTheFollowingIsMet = [];
  function reset() {
    keyStartedAt = null;
    keyEndedAt = null;
    valueStartedAt = null;
    valueEndedAt = null;
    keyName = null;
    keyValue = null;
  }
  reset();
  var currentPath = [];
  for (i = 0; i < len; i++) {
    log("\n\x1B[".concat(36, "m", "===============================", "\x1B[", 39, "m \x1B[", 35, "m", "str[ ".concat(i, " ] = ").concat(str[i] && str[i].trim() ? str[i] : JSON.stringify(str[i], null, 0)), "\x1B[", 39, "m \x1B[", 36, "m", "===============================", "\x1B[", 39, "m\n"));
    if (typeof withinQuotesSince !== "number" && str[i - 1] === "[") {
      currentlyWithinArray = true;
      if (str[i] !== "]") {
        currentlyWithinObject = false;
      }
    }
    if (typeof withinQuotesSince !== "number" && str[i - 1] === "{") {
      currentlyWithinObject = true;
      if (str[i] !== "}") {
        currentlyWithinArray = false;
      }
    }
    if (typeof withinQuotesSince !== "number" && str[i] === "{" && isNotEscape(str, i - 1) && !replaceThisValue) {
      if (currentlyWithinArray) {
        if (!itsTheFirstElem) {
          log("198 ".concat("\x1B[".concat(33, "m", "currentPath", "\x1B[", 39, "m"), " = ", JSON.stringify(currentPath, null, 4)));
          currentPath[currentPath.length - 1] = currentPath[currentPath.length - 1] + 1;
          log();
        }
      }
      withinObjectIndexes.push(i);
      log("215 ".concat("\x1B[".concat(32, "m", "PUSH", "\x1B[", 39, "m"), " ", "\x1B[".concat(33, "m", "withinObjectIndexes", "\x1B[", 39, "m"), " = ", JSON.stringify(withinObjectIndexes, null, 4)));
    }
    if (typeof withinQuotesSince !== "number" && str[i] === "}" && isNotEscape(str, i - 1) && !replaceThisValue) {
      withinObjectIndexes.pop();
      log("231 ".concat("\x1B[".concat(31, "m", "POP", "\x1B[", 39, "m"), " ", "\x1B[".concat(33, "m", "withinObjectIndexes", "\x1B[", 39, "m"), " = ", JSON.stringify(withinObjectIndexes, null, 4)));
    }
    if (typeof withinQuotesSince !== "number" && str[i] === "]" && isNotEscape(str, i - 1) && !replaceThisValue) {
      withinArrayIndexes.pop();
      log("248 ".concat("\x1B[".concat(32, "m", "POP", "\x1B[", 39, "m"), " ", "\x1B[".concat(33, "m", "withinArrayIndexes", "\x1B[", 39, "m"), " = ", JSON.stringify(withinArrayIndexes, null, 4)));
      currentPath.pop();
      log("256 POP path, now = ".concat(JSON.stringify(currentPath, null, 4)));
      log();
      reset();
      if (itsTheFirstElem) {
        itsTheFirstElem = false;
        log();
      }
    }
    if (typeof withinQuotesSince !== "number" && str[i] === "]") {
      if (!withinArrayIndexes.length) {
        currentlyWithinArray = false;
        if (withinObjectIndexes.length && !currentlyWithinObject) {
          currentlyWithinObject = true;
        }
      } else if (withinArrayIndexes.length && (!withinObjectIndexes.length || withinArrayIndexes[withinArrayIndexes.length - 1] > withinObjectIndexes[withinObjectIndexes.length - 1])) {
        currentlyWithinArray = true;
      }
    }
    if (typeof withinQuotesSince !== "number" && str[i] === "}") {
      if (!withinObjectIndexes.length) {
        currentlyWithinObject = false;
      } else if (!withinArrayIndexes.length || withinObjectIndexes[withinObjectIndexes.length - 1] > withinArrayIndexes[withinArrayIndexes.length - 1]) {
        currentlyWithinObject = true;
      }
    }
    if (currentlyWithinArray && stringifyPath(path) === currentPath.join(".") && !replaceThisValue && str[i].trim()
    ) {
        replaceThisValue = true;
        log();
        valueStartedAt = i;
        log();
      }
    if (typeof withinQuotesSince !== "number" && str[i] === "[" && isNotEscape(str, i - 1) && !replaceThisValue) {
      withinArrayIndexes.push(i);
      itsTheFirstElem = true;
      log("348 ".concat("\x1B[".concat(32, "m", "PUSH", "\x1B[", 39, "m"), " ", "\x1B[".concat(33, "m", "withinArrayIndexes", "\x1B[", 39, "m"), " = ", JSON.stringify(withinArrayIndexes, null, 4), "; ", "\x1B[".concat(33, "m", "itsTheFirstElem", "\x1B[", 39, "m"), " = ").concat(itsTheFirstElem));
      currentPath.push(0);
      log("359 ".concat("\x1B[".concat(32, "m", "PUSH", "\x1B[", 39, "m"), " zero to path, now = ", JSON.stringify(currentPath, null, 0)));
    }
    if (currentlyWithinArray && str[i] === "," && itsTheFirstElem && !(typeof valueStartedAt === "number" && valueEndedAt === null)
    ) {
        itsTheFirstElem = false;
        log();
      }
    if (!replaceThisValue && valueStartedAt === null && str[i].trim() && !badChars.includes(str[i]) && (currentlyWithinArray || !currentlyWithinArray && keyName !== null)) {
      log();
      valueStartedAt = i;
      log();
      if (currentlyWithinArray) {
        if (itsTheFirstElem) {
          itsTheFirstElem = false;
          log();
        } else if (typeof currentPath[currentPath.length - 1] === "number") {
          currentPath[currentPath.length - 1] = currentPath[currentPath.length - 1] + 1;
          log();
        }
      }
    }
    if (!replaceThisValue && typeof withinQuotesSince !== "number" && (currentlyWithinArray || !currentlyWithinArray && keyName !== null) && typeof valueStartedAt === "number" && valueStartedAt < i && valueEndedAt === null && (str[valueStartedAt] === "\"" && str[i] === "\"" && str[i - 1] !== "\\" || str[valueStartedAt] !== "\"" && !str[i].trim() || ["}", ","].includes(str[i]))) {
      log();
      keyValue = str.slice(valueStartedAt, str[valueStartedAt] === "\"" ? i + 1 : i);
      log();
      valueEndedAt = i;
      log();
    }
    if (!replaceThisValue && !currentlyWithinArray && str[i] === "\"" && str[i - 1] !== "\\" && keyName === null && keyStartedAt === null && keyEndedAt === null && str[i + 1]) {
      keyStartedAt = i + 1;
      log();
    }
    if (!replaceThisValue && !currentlyWithinArray && str[i] === "\"" && str[i - 1] !== "\\" && keyEndedAt === null && typeof keyStartedAt === "number" && valueStartedAt === null && keyStartedAt < i) {
      keyEndedAt = i + 1;
      keyName = str.slice(keyStartedAt, i);
      log();
      currentPath.push(keyName);
      log("506 PUSH to path, now = ".concat(JSON.stringify(currentPath, null, 4)));
      if (stringifyPath(path) === currentPath.join(".")
      ) {
          replaceThisValue = true;
          log();
        }
    }
    if (!replaceThisValue && typeof withinQuotesSince !== "number" && str[i] === "," && currentlyWithinObject) {
      currentPath.pop();
      log("535 POP(), now ".concat("\x1B[".concat(33, "m", "currentPath", "\x1B[", 39, "m"), " = ", JSON.stringify(currentPath, null, 0)));
    }
    if (!replaceThisValue && (typeof valueEndedAt === "number" && i >= valueEndedAt || ["}", "]"].includes(str[stringLeftRight.left(str, i)]) && ["}", "]"].includes(str[i]) || str[i] === "}" && str[stringLeftRight.left(str, i)] === "{") && str[i].trim()) {
      log();
      if (str[i] === "," && !["}", "]"].includes(str[stringLeftRight.right(str, i)])) {
        log();
        reset();
      } else if (str[i] === "}") {
        log();
        if (valueEndedAt || str[stringLeftRight.left(str, i)] !== "{") {
          currentPath.pop();
          log("569 POP(), now ".concat("\x1B[".concat(33, "m", "currentPath", "\x1B[", 39, "m"), " = ", JSON.stringify(currentPath, null, 0)));
        }
        log();
        log();
        if (withinArrayIndexes.length && withinObjectIndexes.length && withinArrayIndexes[withinArrayIndexes.length - 1] > withinObjectIndexes[withinObjectIndexes.length - 1]) {
          currentlyWithinObject = false;
          currentlyWithinArray = true;
        }
        log();
        reset();
      }
    }
    if (!replaceThisValue && str[i] === "{" && isStr(keyName) && valueStartedAt === null && keyValue === null) {
      log();
      reset();
    }
    if (str[i].trim() && replaceThisValue && valueStartedAt === null && typeof keyEndedAt === "number" && i > keyEndedAt && ![":"].includes(str[i])) {
      valueStartedAt = i;
      log();
    }
    if (str[i] === "\"" && isNotEscape(str, i - 1) && (typeof keyStartedAt === "number" && keyEndedAt === null || typeof valueStartedAt === "number" && valueEndedAt === null) && typeof withinQuotesSince !== "number") {
      withinQuotesSince = i;
      log();
    }
    if (skipUntilTheFollowingIsMet.length && str[i] === skipUntilTheFollowingIsMet[skipUntilTheFollowingIsMet.length - 1] && isNotEscape(str, i - 1)) {
      skipUntilTheFollowingIsMet.pop();
      log("677 ".concat("\x1B[".concat(32, "m", "POP", "\x1B[", 39, "m"), " skipUntilTheFollowingIsMet = ", JSON.stringify(skipUntilTheFollowingIsMet, null, 4)));
    } else if ((typeof withinQuotesSince !== "number" || withinQuotesSince === i) && replaceThisValue && !currentlyWithinArray && typeof valueStartedAt === "number") {
      if (str[i] === "{" && isNotEscape(str, i - 1)) {
        skipUntilTheFollowingIsMet.push("}");
        log("695 ".concat("\x1B[".concat(32, "m", "PUSH", "\x1B[", 39, "m"), " ", "\x1B[".concat(33, "m", "skipUntilTheFollowingIsMet", "\x1B[", 39, "m"), " = ", JSON.stringify(skipUntilTheFollowingIsMet, null, 4)));
      } else if (str[i] === "[" && isNotEscape(str, i - 1)) {
        skipUntilTheFollowingIsMet.push("]");
        log("705 ".concat("\x1B[".concat(32, "m", "PUSH", "\x1B[", 39, "m"), " ", "\x1B[".concat(33, "m", "skipUntilTheFollowingIsMet", "\x1B[", 39, "m"), " = ", JSON.stringify(skipUntilTheFollowingIsMet, null, 4)));
      } else if (str[i] === "\"" && isNotEscape(str, i - 1)) {
        skipUntilTheFollowingIsMet.push("\"");
        log("715 ".concat("\x1B[".concat(32, "m", "PUSH", "\x1B[", 39, "m"), " ", "\x1B[".concat(33, "m", "skipUntilTheFollowingIsMet", "\x1B[", 39, "m"), " = ", JSON.stringify(skipUntilTheFollowingIsMet, null, 4)));
      }
    }
    if (str[i] === "\"" && isNotEscape(str, i - 1) && typeof withinQuotesSince === "number" && withinQuotesSince !== i) {
      withinQuotesSince = undefined;
      log();
    }
    if (replaceThisValue && Array.isArray(skipUntilTheFollowingIsMet) && !skipUntilTheFollowingIsMet.length && typeof valueStartedAt === "number" && i > valueStartedAt) {
      log();
      if (typeof withinQuotesSince !== "number" && (str[valueStartedAt] === "[" && str[i] === "]" || str[valueStartedAt] === "{" && str[i] === "}" || str[valueStartedAt] === "\"" && str[i] === "\"" || !["[", "{", "\""].includes(str[valueStartedAt]) && str[valueStartedAt].trim() && (!str[i].trim() || badChars.includes(str[i]) && isNotEscape(str, i - 1)))
      ) {
          log("780 INSIDE CATCH-END CLAUSES currently ".concat("\x1B[".concat(33, "m", "str[valueStartedAt=".concat(valueStartedAt, "]"), "\x1B[", 39, "m"), " = ", JSON.stringify(str[valueStartedAt], null, 4)));
          if (mode === "set") {
            log();
            var extraLineBreak = "";
            if (str.slice(valueStartedAt, i + (str[i].trim() ? 1 : 0)).includes("\n") && str[i + (str[i].trim() ? 1 : 0)] !== "\n") {
              extraLineBreak = "\n";
            }
            var endingPartsBeginning = i + (str[i].trim() ? 1 : 0);
            if (currentlyWithinArray && !["\"", "[", "{"].includes(str[valueStartedAt]) && str[stringLeftRight.right(str, endingPartsBeginning - 1)] !== "]" || str[endingPartsBeginning - 1] === "," && str[valueStartedAt - 1] !== "\"") {
              endingPartsBeginning -= 1;
            }
            if (currentlyWithinArray && str[valueStartedAt - 1] === "\"") {
              valueStartedAt = valueStartedAt - 1;
            }
            return "".concat(str.slice(0, valueStartedAt)).concat(stringifyAndEscapeValue(calculatedValueToInsert)).concat(extraLineBreak).concat(str.slice(endingPartsBeginning));
          }
          if (mode === "del") {
            log();
            log("851 ".concat("\x1B[".concat(33, "m", "keyStartedAt", "\x1B[", 39, "m"), " = ", JSON.stringify(keyStartedAt, null, 4), "; val = ").concat((currentlyWithinArray ? valueStartedAt : keyStartedAt) - 1));
            var startingPoint = stringLeftRight.left(str, (currentlyWithinArray ? valueStartedAt : keyStartedAt) - 1);
            if (typeof startingPoint === "number") {
              startingPoint++;
            }
            log();
            var endingPoint = i + (str[i].trim() ? 1 : 0);
            if (typeof startingPoint === "number" && str[startingPoint - 1] === "," && ["}", "]"].includes(str[stringLeftRight.right(str, endingPoint - 1)])) {
              startingPoint -= 1;
              log();
            }
            if (str[endingPoint] === ",") {
              endingPoint += 1;
              log();
            }
            log("883 ".concat("\x1B[".concat(33, "m", "startingPoint", "\x1B[", 39, "m"), " = ", JSON.stringify(startingPoint, null, 4), "; ", "\x1B[".concat(33, "m", "endingPoint", "\x1B[", 39, "m"), " = ").concat(JSON.stringify(endingPoint, null, 4), ";"));
            ranges.push([startingPoint, endingPoint]);
            log("896 ".concat("\x1B[".concat(32, "m", "FINAL PUSH", "\x1B[", 39, "m"), " ", "\x1B[".concat(33, "m", "ranges", "\x1B[", 39, "m"), " = ", JSON.stringify(ranges, null, 4)));
            log();
            break;
          }
        }
    }
    log("".concat("\x1B[".concat(withinQuotesSince ? 32 : 31, "m", "withinQuotesSince".concat(typeof withinQuotesSince === "number" ? "=".concat(withinQuotesSince) : ""), "\x1B[", 39, "m"), "; ", "\x1B[".concat(currentlyWithinObject ? 32 : 31, "m", "currentlyWithinObject", "\x1B[", 39, "m"), "; ", "\x1B[".concat(currentlyWithinArray ? 32 : 31, "m", "currentlyWithinArray", "\x1B[", 39, "m"), "; ", "\x1B[".concat(replaceThisValue ? 32 : 31, "m", "replaceThisValue", "\x1B[", 39, "m"), "; ", "\x1B[".concat(itsTheFirstElem ? 32 : 31, "m", "itsTheFirstElem", "\x1B[", 39, "m"), "; ", "\x1B[".concat(skipUntilTheFollowingIsMet.length ? 32 : 31, "m", "skipUntilTheFollowingIsMet".concat(skipUntilTheFollowingIsMet ? ": ".concat(JSON.stringify(skipUntilTheFollowingIsMet, null, 0)) : ""), "\x1B[", 39, "m")));
    log("current path: ".concat(JSON.stringify(currentPath.join("."), null, 0)));
    log();
    log("".concat("\x1B[".concat(33, "m", "withinArrayIndexes", "\x1B[", 39, "m"), " = ", JSON.stringify(withinArrayIndexes, null, 0), "; ", "\x1B[".concat(33, "m", "withinObjectIndexes", "\x1B[", 39, "m"), " = ").concat(JSON.stringify(withinObjectIndexes, null, 0), ";"));
  }
  log();
  log("947 RETURN applied ".concat(JSON.stringify(rangesApply.rApply(str, ranges), null, 4)));
  return rangesApply.rApply(str, ranges);
}
function set(str, path, valToInsert) {
  if (!isStr(str) || !str.length) {
    throw new Error("edit-package-json/set(): [THROW_ID_01] first input argument must be a non-empty string. It was given as ".concat(JSON.stringify(str, null, 4), " (type ").concat(_typeof__default['default'](str), ")"));
  }
  return main({
    str: str,
    path: path,
    valToInsert: valToInsert,
    mode: "set"
  });
}
function del(str, path) {
  if (!isStr(str) || !str.length) {
    throw new Error("edit-package-json/del(): [THROW_ID_02] first input argument must be a non-empty string. It was given as ".concat(JSON.stringify(str, null, 4), " (type ").concat(_typeof__default['default'](str), ")"));
  }
  return main({
    str: str,
    path: path,
    mode: "del"
  });
}

exports.del = del;
exports.set = set;
exports.version = version;
