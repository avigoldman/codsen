/**
 * is-char-suitable-for-html-attr-name
 * Is given character suitable to be in an HTML attribute's name?
 * Version: 2.0.10
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/is-char-suitable-for-html-attr-name/
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isAttrNameChar(char) {
  return typeof char === "string" && (
  char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123 ||
  char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91 ||
  char.charCodeAt(0) > 47 && char.charCodeAt(0) < 58 || char === ":" || char === "-");
}

exports.isAttrNameChar = isAttrNameChar;
