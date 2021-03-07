/**
 * string-character-is-astral-surrogate
 * Tells, is given character a part of astral character, specifically, a high and low surrogate
 * Version: 1.12.7
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-character-is-astral-surrogate/
 */

function r(r){if("string"==typeof r)return 0!==r.length&&(r.charCodeAt(0)>=55296&&r.charCodeAt(0)<=56319);if(void 0===r)return!1;throw new TypeError("string-character-is-astral-surrogate/isHighSurrogate(): the input is not string but "+typeof r)}function t(r){if("string"==typeof r)return 0!==r.length&&(r.charCodeAt(0)>=56320&&r.charCodeAt(0)<=57343);if(void 0===r)return!1;throw new TypeError("string-character-is-astral-surrogate/isLowSurrogate(): the input is not string but "+typeof r)}export{r as isHighSurrogate,t as isLowSurrogate};
