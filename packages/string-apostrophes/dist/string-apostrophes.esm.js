/**
 * @name string-apostrophes
 * @fileoverview Comprehensive, HTML-entities-aware tool to typographically-correct the apostrophes and single/double quotes
 * @version 2.0.3
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-apostrophes/}
 */

import { rApply } from 'ranges-apply';

var version$1 = "2.0.3";

const version = version$1;
function convertOne(str, {
  from,
  to,
  value,
  convertEntities = true,
  convertApostrophes = true,
  offsetBy
}) {
  if (!Number.isInteger(from) || from < 0) {
    throw new Error(`string-apostrophes: [THROW_ID_01] options objects key "to", a starting string index, is wrong! It was given as ${from} (type ${typeof from})`);
  }
  if (!Number.isInteger(to)) {
    to = from + 1;
  }
  const rangesArr = [];
  const leftSingleQuote = "\u2018";
  const rightSingleQuote = "\u2019";
  const leftDoubleQuote = "\u201C";
  const rightDoubleQuote = "\u201D";
  const singlePrime = "\u2032";
  const doublePrime = "\u2033";
  const punctuationChars = [".", ",", ";", "!", "?"];
  function isDigitStr(str2) {
    return typeof str2 === "string" && str2.charCodeAt(0) >= 48 && str2.charCodeAt(0) <= 57;
  }
  function isLetter(str2) {
    return typeof str2 === "string" && !!str2.length && str2.toUpperCase() !== str2.toLowerCase();
  }
  if (value && [`'`, leftSingleQuote, rightSingleQuote, singlePrime].includes(value) || to === from + 1 && [`'`, leftSingleQuote, rightSingleQuote, singlePrime].includes(str[from])) {
    if (str[from - 1] && str[to] && isDigitStr(str[from - 1]) && !isLetter(str[to])) {
      if (convertApostrophes && str.slice(from, to) !== (convertEntities ? "&prime;" : singlePrime) && value !== (convertEntities ? "&prime;" : singlePrime)) {
        rangesArr.push([from, to, convertEntities ? "&prime;" : singlePrime]);
      } else if (!convertApostrophes && str.slice(from, to) !== `'` && value !== `'`) {
        rangesArr.push([from, to, `'`]);
      }
    } else if (str[to] && str[to + 1] && str[to] === "n" && str.slice(from, to) === str.slice(to + 1, to + 1 + (to - from))
    ) {
      if (convertApostrophes && str.slice(from, to + 2) !== (convertEntities ? "&rsquo;n&rsquo;" : `${rightSingleQuote}n${rightSingleQuote}`) && value !== (convertEntities ? "&rsquo;n&rsquo;" : `${rightSingleQuote}n${rightSingleQuote}`)) {
        rangesArr.push([from, to + 2, convertEntities ? "&rsquo;n&rsquo;" : `${rightSingleQuote}n${rightSingleQuote}`]);
        /* istanbul ignore next */
        if (typeof offsetBy === "function") {
          offsetBy(2);
        }
      } else if (!convertApostrophes && str.slice(from, to + 2) !== "'n'" && value !== "'n'") {
        rangesArr.push([from, to + 2, "'n'"]);
        /* istanbul ignore next */
        if (typeof offsetBy === "function") {
          offsetBy(2);
        }
      }
    } else if (str[to] && str[to].toLowerCase() === "t" && (!str[to + 1] || !str[to + 1].trim() || str[to + 1].toLowerCase() === "i") || str[to] && str[to + 2] && str[to].toLowerCase() === "t" && str[to + 1].toLowerCase() === "w" && (str[to + 2].toLowerCase() === "a" || str[to + 2].toLowerCase() === "e" || str[to + 2].toLowerCase() === "i" || str[to + 2].toLowerCase() === "o") || str[to] && str[to + 1] && str[to].toLowerCase() === "e" && str[to + 1].toLowerCase() === "m" || str[to] && str[to + 4] && str[to].toLowerCase() === "c" && str[to + 1].toLowerCase() === "a" && str[to + 2].toLowerCase() === "u" && str[to + 3].toLowerCase() === "s" && str[to + 4].toLowerCase() === "e" || str[to] && isDigitStr(str[to])) {
      if (convertApostrophes && str.slice(from, to) !== (convertEntities ? "&rsquo;" : rightSingleQuote) && value !== (convertEntities ? "&rsquo;" : rightSingleQuote)) {
        rangesArr.push([from, to, convertEntities ? "&rsquo;" : rightSingleQuote]);
      } else if (!convertApostrophes && str.slice(from, to) !== "'" && value !== "'") {
        rangesArr.push([from, to, "'"]);
      }
    } else if (str[from - 1] && str[to] && punctuationChars.includes(str[from - 1])) {
      if (!str[to].trim()) {
        if (convertApostrophes && str.slice(from, to) !== (convertEntities ? "&rsquo;" : rightSingleQuote) && value !== (convertEntities ? "&rsquo;" : rightSingleQuote)) {
          rangesArr.push([from, to, convertEntities ? "&rsquo;" : rightSingleQuote]);
        } else if (!convertApostrophes && str.slice(from, to) !== "'" && value !== "'") {
          rangesArr.push([from, to, "'"]);
        }
      } else if (str[to] === `"` &&
      str[to + 1] && !str[to + 1].trim()
      ) {
        if (convertApostrophes && str.slice(from, to + 1) !== (convertEntities ? "&rsquo;&rdquo;" : `${rightSingleQuote}${rightDoubleQuote}`) && value !== (convertEntities ? "&rsquo;&rdquo;" : `${rightSingleQuote}${rightDoubleQuote}`)) {
          rangesArr.push([from, to + 1, `${convertEntities ? "&rsquo;&rdquo;" : `${rightSingleQuote}${rightDoubleQuote}`}`]);
          /* istanbul ignore next */
          if (typeof offsetBy === "function") {
            offsetBy(1);
          }
        } else if (!convertApostrophes && str.slice(from, to + 1) !== `'"` && value !== `'"`) {
          rangesArr.push([from, to + 1, `'"`]);
          /* istanbul ignore next */
          if (typeof offsetBy === "function") {
            offsetBy(1);
          }
        }
      }
    } else if (from === 0 && str.slice(to).trim()) {
      if (convertApostrophes && str.slice(from, to) !== (convertEntities ? "&lsquo;" : leftSingleQuote) && value !== (convertEntities ? "&lsquo;" : leftSingleQuote)) {
        rangesArr.push([from, to, convertEntities ? "&lsquo;" : leftSingleQuote]);
      } else if (!convertApostrophes && str.slice(from, to) !== `'` && value !== `'`) {
        rangesArr.push([from, to, `'`]);
      }
    } else if (!str[to] && str.slice(0, from).trim()) {
      if (convertApostrophes && str.slice(from, to) !== (convertEntities ? "&rsquo;" : rightSingleQuote) && value !== (convertEntities ? "&rsquo;" : rightSingleQuote)) {
        rangesArr.push([from, to, convertEntities ? "&rsquo;" : rightSingleQuote]);
      } else if (!convertApostrophes && str.slice(from, to) !== `'` && value !== `'`) {
        rangesArr.push([from, to, `'`]);
      }
    } else if (str[from - 1] && str[to] && (isLetter(str[from - 1]) || isDigitStr(str[from - 1])) && (isLetter(str[to]) || isDigitStr(str[to]))) {
      if (convertApostrophes) {
        if ((str[to] && str[from - 5] && str[from - 5].toLowerCase() === "h" && str[from - 4].toLowerCase() === "a" && str[from - 3].toLowerCase() === "w" && str[from - 2].toLowerCase() === "a" && str[from - 1].toLowerCase() === "i" && str[to].toLowerCase() === "i" || str[from - 1] && str[from - 1].toLowerCase() === "o" && str[to + 2] && str[to].toLowerCase() === "a" && str[to + 1].toLowerCase() === "h" && str[to + 2].toLowerCase() === "u") && str.slice(from, to) !== (convertEntities ? "&lsquo;" : leftSingleQuote) && value !== (convertEntities ? "&lsquo;" : leftSingleQuote)) {
          rangesArr.push([from, to, convertEntities ? "&lsquo;" : leftSingleQuote]);
        } else if (str.slice(from, to) !== (convertEntities ? "&rsquo;" : rightSingleQuote) && value !== (convertEntities ? "&rsquo;" : rightSingleQuote)) {
          rangesArr.push([from, to, convertEntities ? "&rsquo;" : rightSingleQuote]);
        }
      } else if (str.slice(from, to) !== "'" && value !== "'") {
        rangesArr.push([from, to, `'`]);
      }
    } else if (str[to] && (isLetter(str[to]) || isDigitStr(str[to]))) {
      if (convertApostrophes && str.slice(from, to) !== (convertEntities ? "&lsquo;" : leftSingleQuote) && value !== (convertEntities ? "&lsquo;" : leftSingleQuote)) {
        rangesArr.push([from, to, convertEntities ? "&lsquo;" : leftSingleQuote]);
      } else if (!convertApostrophes && str.slice(from, to) !== `'` && value !== `'`) {
        rangesArr.push([from, to, `'`]);
      }
    } else if (isLetter(str[from - 1]) || isDigitStr(str[from - 1])) {
      if (convertApostrophes && str.slice(from, to) !== (convertEntities ? "&rsquo;" : rightSingleQuote) && value !== (convertEntities ? "&rsquo;" : rightSingleQuote)) {
        rangesArr.push([from, to, convertEntities ? "&rsquo;" : rightSingleQuote]);
      } else if (!convertApostrophes && str.slice(from, to) !== `'` && value !== `'`) {
        rangesArr.push([from, to, `'`]);
      }
    } else if (str[from - 1] && !str[from - 1].trim()) {
      if (convertApostrophes && str.slice(from, to) !== (convertEntities ? "&lsquo;" : leftSingleQuote) && value !== (convertEntities ? "&lsquo;" : leftSingleQuote)) {
        rangesArr.push([from, to, convertEntities ? "&lsquo;" : leftSingleQuote]);
      } else if (!convertApostrophes && str.slice(from, to) !== `'` && value !== `'`) {
        rangesArr.push([from, to, `'`]);
      }
    } else if (str[to] && !str[to].trim()) {
      if (convertApostrophes && str.slice(from, to) !== (convertEntities ? "&rsquo;" : rightSingleQuote) && value !== (convertEntities ? "&rsquo;" : rightSingleQuote)) {
        rangesArr.push([from, to, convertEntities ? "&rsquo;" : rightSingleQuote]);
      } else if (!convertApostrophes && str.slice(from, to) !== `'` && value !== `'`) {
        rangesArr.push([from, to, `'`]);
      }
    }
  } else if ([`"`, leftDoubleQuote, rightDoubleQuote, doublePrime].includes(value) || to === from + 1 && [`"`, leftDoubleQuote, rightDoubleQuote, doublePrime].includes(str[from])) {
    if (str[from - 1] && isDigitStr(str[from - 1]) && str[to] && str[to] !== "'" && str[to] !== '"' && str[to] !== rightSingleQuote && str[to] !== rightDoubleQuote && str[to] !== leftSingleQuote && str[to] !== leftDoubleQuote) {
      if (convertApostrophes && str.slice(from, to) !== (convertEntities ? "&Prime;" : doublePrime) && value !== (convertEntities ? "&Prime;" : doublePrime)) {
        rangesArr.push([from, to, convertEntities ? "&Prime;" : doublePrime]);
      } else if (!convertApostrophes && str.slice(from, to) !== `"` && value !== `"`) {
        rangesArr.push([from, to, `"`]);
      }
    } else if (str[from - 1] && str[to] && punctuationChars.includes(str[from - 1])) {
      if (!str[to].trim()) {
        if (convertApostrophes && str.slice(from, to) !== (convertEntities ? "&rdquo;" : rightDoubleQuote) && value !== (convertEntities ? "&rdquo;" : rightDoubleQuote)) {
          rangesArr.push([from, to, convertEntities ? "&rdquo;" : rightDoubleQuote]);
        } else if (!convertApostrophes && str.slice(from, to) !== `"` && value !== `"`) {
          rangesArr.push([from, to, `"`]);
        }
      } else if (str[to] === `'` &&
      str[to + 1] && !str[to + 1].trim()) {
        if (convertApostrophes && str.slice(from, to + 1) !== (convertEntities ? "&rdquo;&rsquo;" : `${rightDoubleQuote}${rightSingleQuote}`) && value !== (convertEntities ? "&rdquo;&rsquo;" : `${rightDoubleQuote}${rightSingleQuote}`)) {
          rangesArr.push([from, to + 1, convertEntities ? "&rdquo;&rsquo;" : `${rightDoubleQuote}${rightSingleQuote}`]);
          /* istanbul ignore next */
          if (typeof offsetBy === "function") {
            offsetBy(1);
          }
        } else if (!convertApostrophes && str.slice(from, to + 1) !== `"'` && value !== `"'`) {
          rangesArr.push([from, to + 1, `"'`]);
          /* istanbul ignore next */
          if (typeof offsetBy === "function") {
            offsetBy(1);
          }
        }
      }
    } else if (from === 0 && str[to] && str.slice(to).trim()) {
      if (convertApostrophes && str.slice(from, to) !== (convertEntities ? "&ldquo;" : leftDoubleQuote) && value !== (convertEntities ? "&ldquo;" : leftDoubleQuote)) {
        rangesArr.push([from, to, convertEntities ? "&ldquo;" : leftDoubleQuote]);
      } else if (!convertApostrophes && str.slice(from, to) !== `"` && value !== `"`) {
        rangesArr.push([from, to, `"`]);
      }
    } else if (!str[to] && str.slice(0, from).trim()) {
      if (convertApostrophes && str.slice(from, to) !== (convertEntities ? "&rdquo;" : rightDoubleQuote) && value !== (convertEntities ? "&rdquo;" : rightDoubleQuote)) {
        rangesArr.push([from, to, convertEntities ? "&rdquo;" : rightDoubleQuote]);
      } else if (!convertApostrophes && str.slice(from, to) !== `"` && value !== `"`) {
        rangesArr.push([from, to, `"`]);
      }
    } else if (str[to] && (isLetter(str[to]) || isDigitStr(str[to]))) {
      if (convertApostrophes && str.slice(from, to) !== (convertEntities ? "&ldquo;" : leftDoubleQuote) && value !== (convertEntities ? "&ldquo;" : leftDoubleQuote)) {
        rangesArr.push([from, to, convertEntities ? "&ldquo;" : leftDoubleQuote]);
      } else if (!convertApostrophes && str.slice(from, to) !== `"` && value !== `"`) {
        rangesArr.push([from, to, `"`]);
      }
    } else if (str[from - 1] && (isLetter(str[from - 1]) || isDigitStr(str[from - 1]))) {
      if (convertApostrophes && str.slice(from, to) !== (convertEntities ? "&rdquo;" : rightDoubleQuote) && value !== (convertEntities ? "&rdquo;" : rightDoubleQuote)) {
        rangesArr.push([from, to, convertEntities ? "&rdquo;" : rightDoubleQuote]);
      } else if (!convertApostrophes && str.slice(from, to) !== `"` && value !== `"`) {
        rangesArr.push([from, to, `"`]);
      }
    } else if (str[from - 1] && !str[from - 1].trim()) {
      if (convertApostrophes && str.slice(from, to) !== (convertEntities ? "&ldquo;" : leftDoubleQuote) && value !== (convertEntities ? "&ldquo;" : leftDoubleQuote)) {
        rangesArr.push([from, to, convertEntities ? "&ldquo;" : leftDoubleQuote]);
      } else if (!convertApostrophes && str.slice(from, to) !== `"` && value !== `"`) {
        rangesArr.push([from, to, `"`]);
      }
    } else if (str[to] && !str[to].trim()) {
      if (convertApostrophes && str.slice(from, to) !== (convertEntities ? "&rdquo;" : rightDoubleQuote) && value !== (convertEntities ? "&rdquo;" : rightDoubleQuote)) {
        rangesArr.push([from, to, convertEntities ? "&rdquo;" : rightDoubleQuote]);
      } else if (!convertApostrophes && str.slice(from, to) !== `"` && value !== `"`) {
        rangesArr.push([from, to, `"`]);
      }
    }
  }
  return rangesArr;
}
function convertAll(str, opts) {
  let ranges = [];
  const preppedOpts = {
    convertApostrophes: true,
    convertEntities: false,
    ...opts
  };
  for (let i = 0, len = str.length; i < len; i++) {
    preppedOpts.from = i;
    preppedOpts.offsetBy = idx => {
      i += idx;
    };
    const res = convertOne(str, preppedOpts);
    if (Array.isArray(res) && res.length) {
      ranges = ranges.concat(res);
    }
  }
  return {
    result: rApply(str, ranges),
    ranges
  };
}

export { convertAll, convertOne, version };
