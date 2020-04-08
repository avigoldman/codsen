/**
 * is-html-attribute-closing
 * Is a character on a given index a closing of an HTML attribute?
 * Version: 1.0.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/is-html-attribute-closing
 */

'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var charSuitableForHTMLAttrName = _interopDefault(require('is-char-suitable-for-html-attr-name'));
var stringMatchLeftRight = require('string-match-left-right');

function isAttrClosing(str, idxOfAttrOpening, isThisClosingIdx) {
  if (typeof str !== "string" || !str.trim().length || !Number.isInteger(idxOfAttrOpening) || !Number.isInteger(isThisClosingIdx) || !str[idxOfAttrOpening] || !str[isThisClosingIdx] || idxOfAttrOpening >= isThisClosingIdx) {
    return false;
  }
  var openingQuote = "'\"".includes(str[idxOfAttrOpening]) ? str[idxOfAttrOpening] : null;
  var oppositeToOpeningQuote = null;
  if (openingQuote) {
    oppositeToOpeningQuote = openingQuote === "\"" ? "'" : "\"";
  }
  var attrStartsAt;
  for (var i = idxOfAttrOpening, len = str.length; i < len; i++) {
    if (i > isThisClosingIdx) {
      if (str[i].trim().length && !attrStartsAt) {
        if (charSuitableForHTMLAttrName(str[i])) {
          attrStartsAt = i;
        }
        else if (str[i] === "/" || str[i] === ">" || str[i] === "<") {
            return true;
          } else if (str[i] !== "=") {
            return false;
          }
      } else if (attrStartsAt && !charSuitableForHTMLAttrName(str[i])) {
        attrStartsAt = null;
      }
      if (openingQuote && str[idxOfAttrOpening] === str[i]) {
        return false;
      }
      if (
      openingQuote &&
      str[isThisClosingIdx] === oppositeToOpeningQuote &&
      str[i] === oppositeToOpeningQuote) {
        return false;
      }
      if (str[i] === "=" && stringMatchLeftRight.matchRight(str, i, ["'", "\""], {
        trimBeforeMatching: true,
        trimCharsBeforeMatching: ["="]
      })) {
        return true;
      }
    } else {
      var firstNonWhitespaceCharOnTheLeft = void 0;
      if (str[i - 1] && str[i - 1].trim().length && str[i - 1] !== "=") {
        firstNonWhitespaceCharOnTheLeft = i - 1;
      } else {
        for (var y = i; y--;) {
          if (str[y].trim().length && str[y] !== "=") {
            firstNonWhitespaceCharOnTheLeft = y;
            break;
          }
        }
      }
      if (str[i] === "=" && stringMatchLeftRight.matchRight(str, i, ["'", "\""], {
        cb: function cb(_char) {
          return !"/>".includes(_char);
        },
        trimBeforeMatching: true,
        trimCharsBeforeMatching: ["="]
      }) &&
      charSuitableForHTMLAttrName(str[firstNonWhitespaceCharOnTheLeft])) {
        return false;
      }
    }
  }
  return false;
}

module.exports = isAttrClosing;
