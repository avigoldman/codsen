/**
 * @name string-character-is-astral-surrogate
 * @fileoverview Tells, is given character a part of astral character, specifically, a high and low surrogate
 * @version 2.0.5
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-character-is-astral-surrogate/}
 */

function isHighSurrogate(something) {
  if (typeof something === "string") {
    if (something.length === 0) {
      return false;
    }
    return something.charCodeAt(0) >= 55296 && something.charCodeAt(0) <= 56319;
  }
  if (something === undefined) {
    return false;
  }
  throw new TypeError(`string-character-is-astral-surrogate/isHighSurrogate(): the input is not string but ${typeof something}`);
}
function isLowSurrogate(something) {
  if (typeof something === "string") {
    if (something.length === 0) {
      return false;
    }
    return something.charCodeAt(0) >= 56320 && something.charCodeAt(0) <= 57343;
  }
  if (something === undefined) {
    return false;
  }
  throw new TypeError(`string-character-is-astral-surrogate/isLowSurrogate(): the input is not string but ${typeof something}`);
}

export { isHighSurrogate, isLowSurrogate };
