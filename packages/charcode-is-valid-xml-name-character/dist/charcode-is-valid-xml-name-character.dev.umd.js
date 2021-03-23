/**
 * charcode-is-valid-xml-name-character
 * Does a given character belong to XML spec's "Production 4 OR 4a" type (is acceptable for XML element's name)
 * Version: 1.12.9
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/charcode-is-valid-xml-name-character/
 */

(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
typeof define === 'function' && define.amd ? define(['exports'], factory) :
(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.charcodeIsValidXmlNameCharacter = {}));
}(this, (function (exports) { 'use strict';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var defaults = {
  inclusiveRangeEnds: false,
  returnMatchedRangeInsteadOfTrue: false
};

function isIndexWithin(originalIndex, rangesArr, originalOpts) {
  var opts = _objectSpread2(_objectSpread2({}, defaults), originalOpts);

  if (!Number.isInteger(originalIndex)) {
    throw new Error("ranges-is-index-within: [THROW_ID_01] the first input argument should be string index, a natural number (or zero). It was given as " + originalIndex + " (type " + typeof originalIndex + ")");
  }

  if (!Array.isArray(rangesArr)) {
    return false;
  }

  if (opts.returnMatchedRangeInsteadOfTrue) {
    return rangesArr.find(function (arr) {
      return opts.inclusiveRangeEnds ? originalIndex >= arr[0] && originalIndex <= arr[1] : originalIndex > arr[0] && originalIndex < arr[1];
    }) || false;
  }

  return rangesArr.some(function (arr) {
    return opts.inclusiveRangeEnds ? originalIndex >= arr[0] && originalIndex <= arr[1] : originalIndex > arr[0] && originalIndex < arr[1];
  });
}

// Production 4 - except lowercase letters are missing

var nameStartChar = [[58, 58], [65, 90], [95, 95], [192, 214], [216, 246], [248, 767], [880, 893], [895, 8191], [8204, 8205], [8304, 8591], [11264, 12271], [12289, 55295], [63744, 64975], [65008, 65533], [65536, 983039] // [#x10000-#xEFFFF]
]; // https://www.w3.org/TR/REC-xml/#NT-NameChar
// Production 4a - addition to Production 4, except lowercase letters are missing

var nameChar = [[45, 45], [46, 46], [48, 57], [58, 58], [65, 90], [95, 95], [183, 183], [192, 214], [216, 246], [248, 767], [768, 879], [880, 893], [895, 8191], [8204, 8205], [8255, 8256], [8304, 8591], [11264, 12271], [12289, 55295], [63744, 64975], [65008, 65533], [65536, 983039] // [#x10000-#xEFFFF]
];
var priorityNameChar = [[97, 122] // [a-z]
];
var opts = {
  inclusiveRangeEnds: true,
  skipIncomingRangeSorting: true
}; // first checking the letters, then the rest

function isProduction4(char) {
  return isIndexWithin(char.codePointAt(0), priorityNameChar, opts) || isIndexWithin(char.codePointAt(0), nameStartChar, opts);
}

function isProduction4a(char) {
  return isIndexWithin(char.codePointAt(0), priorityNameChar, opts) || isIndexWithin(char.codePointAt(0), nameChar, opts);
}

exports.isProduction4 = isProduction4;
exports.isProduction4a = isProduction4a;
exports.validFirstChar = isProduction4;
exports.validSecondCharOnwards = isProduction4a;

Object.defineProperty(exports, '__esModule', { value: true });

})));
