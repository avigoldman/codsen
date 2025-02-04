/**
 * @name is-char-suitable-for-html-attr-name
 * @fileoverview Is given character suitable to be in an HTML attribute's name?
 * @version 3.0.5
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/is-char-suitable-for-html-attr-name/}
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).isCharSuitableForHtmlAttrName={})}(this,(function(e){"use strict";e.isAttrNameChar=function(e){return"string"==typeof e&&(e.charCodeAt(0)>96&&e.charCodeAt(0)<123||e.charCodeAt(0)>64&&e.charCodeAt(0)<91||e.charCodeAt(0)>47&&e.charCodeAt(0)<58||":"===e||"-"===e)},Object.defineProperty(e,"__esModule",{value:!0})}));
