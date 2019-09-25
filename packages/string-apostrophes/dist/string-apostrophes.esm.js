/**
 * string-apostrophes
 * Comprehensive, HTML-entities-aware tool to typographically-correct the apostrophes and single/double quotes
 * Version: 1.1.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-apostrophes
 */

import rangesApply from 'ranges-apply';

function convertOne(
  str,
  {
    from,
    to,
    value,
    convertEntities = true,
    convertApostrophes = true,
    offsetBy
  }
) {
  if (!Number.isInteger(to)) {
    if (Number.isInteger(from)) {
      to = from + 1;
    } else {
      throw new Error(
        `string-apostrophes: [THROW_ID_01] options objects keys' "to" and "from" values are not integers!`
      );
    }
  }
  const rangesArr = [];
  const leftSingleQuote = "\u2018";
  const rightSingleQuote = "\u2019";
  const leftDoubleQuote = "\u201C";
  const rightDoubleQuote = "\u201D";
  const singlePrime = "\u2032";
  const doublePrime = "\u2033";
  const punctuationChars = [".", ",", ";", "!", "?"];
  function isNumber(str) {
    return (
      typeof str === "string" &&
      str.charCodeAt(0) >= 48 &&
      str.charCodeAt(0) <= 57
    );
  }
  function isLetter(str) {
    return (
      typeof str === "string" &&
      str.length === 1 &&
      str.toUpperCase() !== str.toLowerCase()
    );
  }
  if (value === "'" || (to === from + 1 && str[from] === "'")) {
    if (
      str[from - 1] &&
      str[to] &&
      isNumber(str[from - 1]) &&
      !isLetter(str[to])
    ) {
      if (convertApostrophes) {
        rangesArr.push([from, to, convertEntities ? "&prime;" : singlePrime]);
      }
    } else if (
      str[to] &&
      str[to + 1] &&
      str[to] === "n" &&
      str.slice(from, to) === str.slice(to + 1, to + 1 + (to - from))
    ) {
      if (convertApostrophes) {
        rangesArr.push([
          from,
          to + 2,
          convertEntities ? "&rsquo;n&rsquo;" : "\u2019n\u2019"
        ]);
        if (typeof offsetBy === "function") {
          offsetBy(2);
        }
      }
    } else if (
      (str[to] &&
        str[to].toLowerCase() === "t" &&
        (!str[to + 1] ||
          str[to + 1].trim().length === 0 ||
          str[to + 1].toLowerCase() === "i")) ||
      (str[to] &&
        str[to + 2] &&
        str[to].toLowerCase() === "t" &&
        str[to + 1].toLowerCase() === "w" &&
        (str[to + 2].toLowerCase() === "a" ||
          str[to + 2].toLowerCase() === "e" ||
          str[to + 2].toLowerCase() === "i" ||
          str[to + 2].toLowerCase() === "o")) ||
      (str[to] &&
        str[to + 1] &&
        str[to].toLowerCase() === "e" &&
        str[to + 1].toLowerCase() === "m") ||
      (str[to] &&
        str[to + 4] &&
        str[to].toLowerCase() === "c" &&
        str[to + 1].toLowerCase() === "a" &&
        str[to + 2].toLowerCase() === "u" &&
        str[to + 3].toLowerCase() === "s" &&
        str[to + 4].toLowerCase() === "e") ||
      (str[to] && isNumber(str[to]))
    ) {
      if (convertApostrophes) {
        rangesArr.push([
          from,
          to,
          convertEntities ? "&rsquo;" : rightSingleQuote
        ]);
      }
    } else if (
      str[from - 1] &&
      str[to] &&
      punctuationChars.includes(str[from - 1])
    ) {
      if (str[to].trim().length === 0) {
        if (convertApostrophes) {
          rangesArr.push([
            from,
            to,
            convertEntities ? "&rsquo;" : rightSingleQuote
          ]);
        }
      } else if (
        str[to].charCodeAt(0) === 34 &&
        str[to + 1] &&
        str[to + 1].trim().length === 0
      ) {
        if (convertApostrophes) {
          rangesArr.push([
            from,
            to + 1,
            `${
              convertEntities
                ? "&rsquo;&rdquo;"
                : `${rightSingleQuote}${rightDoubleQuote}`
            }`
          ]);
          if (typeof offsetBy === "function") {
            offsetBy(1);
          }
        }
      }
    } else if (from === 0 && str.slice(to).trim().length) {
      if (convertApostrophes) {
        rangesArr.push([
          from,
          to,
          convertEntities ? "&lsquo;" : leftSingleQuote
        ]);
      }
    } else if (!str[to] && str.slice(0, from).trim().length) {
      if (convertApostrophes) {
        rangesArr.push([
          from,
          to,
          convertEntities ? "&rsquo;" : rightSingleQuote
        ]);
      }
    } else if (
      str[from - 1] &&
      str[to] &&
      (isLetter(str[from - 1]) || isNumber(str[from - 1])) &&
      (isLetter(str[to]) || isNumber(str[to]))
    ) {
      if (convertApostrophes) {
        if (
          (str[to] &&
            str[from - 5] &&
            str[from - 5].toLowerCase() === "h" &&
            str[from - 4].toLowerCase() === "a" &&
            str[from - 3].toLowerCase() === "w" &&
            str[from - 2].toLowerCase() === "a" &&
            str[from - 1].toLowerCase() === "i" &&
            str[to].toLowerCase() === "i") ||
          (str[from - 1] &&
            str[from - 1].toLowerCase() === "o" &&
            str[to + 2] &&
            str[to].toLowerCase() === "a" &&
            str[to + 1].toLowerCase() === "h" &&
            str[to + 2].toLowerCase() === "u")
        ) {
          rangesArr.push([
            from,
            to,
            convertEntities ? "&lsquo;" : leftSingleQuote
          ]);
        } else {
          rangesArr.push([
            from,
            to,
            convertEntities ? "&rsquo;" : rightSingleQuote
          ]);
        }
      }
    } else if (str[to] && (isLetter(str[to]) || isNumber(str[to]))) {
      if (convertApostrophes) {
        rangesArr.push([
          from,
          to,
          convertEntities ? "&lsquo;" : leftSingleQuote
        ]);
      }
    } else if (isLetter(str[from - 1]) || isNumber(str[from - 1])) {
      if (convertApostrophes) {
        rangesArr.push([
          from,
          to,
          convertEntities ? "&rsquo;" : rightSingleQuote
        ]);
      }
    } else if (str[from - 1] && str[from - 1].trim().length === 0) {
      if (convertApostrophes) {
        rangesArr.push([
          from,
          to,
          convertEntities ? "&lsquo;" : leftSingleQuote
        ]);
      }
    } else if (str[to] && str[to].trim().length === 0) {
      if (convertApostrophes) {
        rangesArr.push([
          from,
          to,
          convertEntities ? "&rsquo;" : rightSingleQuote
        ]);
      }
    }
  } else if (value === `"` || (to === from + 1 && str[from] === `"`)) {
    if (convertApostrophes) {
      if (
        str[from - 1] &&
        isNumber(str[from - 1]) &&
        (str[to] &&
          str[to] !== "'" &&
          str[to] !== '"' &&
          str[to] !== rightSingleQuote &&
          str[to] !== rightDoubleQuote &&
          str[to] !== leftSingleQuote &&
          str[to] !== leftDoubleQuote)
      ) {
        rangesArr.push([from, to, convertEntities ? "&Prime;" : doublePrime]);
      } else if (
        str[from - 1] &&
        str[to] &&
        punctuationChars.includes(str[from - 1])
      ) {
        if (str[to].trim().length === 0) {
          rangesArr.push([
            from,
            to,
            convertEntities ? "&rdquo;" : rightDoubleQuote
          ]);
        } else if (
          str[to].charCodeAt(0) === 39 &&
          str[to + 1] &&
          str[to + 1].trim().length === 0
        ) {
          rangesArr.push([
            from,
            to + 1,
            convertEntities
              ? "&rdquo;&rsquo;"
              : `${rightDoubleQuote}${rightSingleQuote}`
          ]);
          if (typeof offsetBy === "function") {
            offsetBy(1);
          }
        }
      } else if (from === 0 && str[to] && str.slice(to).trim().length) {
        rangesArr.push([
          from,
          to,
          convertEntities ? "&ldquo;" : leftDoubleQuote
        ]);
      } else if (!str[to] && str.slice(0, from).trim().length) {
        rangesArr.push([
          from,
          to,
          convertEntities ? "&rdquo;" : rightDoubleQuote
        ]);
      } else if (str[to] && (isLetter(str[to]) || isNumber(str[to]))) {
        rangesArr.push([
          from,
          to,
          convertEntities ? "&ldquo;" : leftDoubleQuote
        ]);
      } else if (
        str[from - 1] &&
        (isLetter(str[from - 1]) || isNumber(str[from - 1]))
      ) {
        rangesArr.push([
          from,
          to,
          convertEntities ? "&rdquo;" : rightDoubleQuote
        ]);
      } else if (str[from - 1] && str[from - 1].trim().length === 0) {
        rangesArr.push([
          from,
          to,
          convertEntities ? "&ldquo;" : leftDoubleQuote
        ]);
      } else if (str[to] && str[to].trim().length === 0) {
        rangesArr.push([
          from,
          to,
          convertEntities ? "&rdquo;" : rightDoubleQuote
        ]);
      }
    }
  }
  return rangesArr;
}
function convertAll(str, opts) {
  let ranges = [];
  const preppedOpts = Object.assign(
    {
      convertApostrophes: true,
      convertEntities: false
    },
    opts
  );
  for (let i = 0, len = str.length; i < len; i++) {
    preppedOpts.from = i;
    preppedOpts.offsetBy = idx => {
      i = i + idx;
    };
    const res = convertOne(str, preppedOpts);
    if (Array.isArray(res) && res.length) {
      ranges = ranges.concat(res);
    }
  }
  return {
    result: rangesApply(str, ranges),
    ranges
  };
}

export { convertAll, convertOne };
