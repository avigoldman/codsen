/**
 * ranges-iterate
 * Iterate a string and any changes within already existing ranges
 * Version: 1.1.35
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ranges-iterate
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.rangesIterate = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  var isArr = Array.isArray;

  function rangesIterate(str, originalRanges, cb) {
    var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    if (typeof str !== "string") {
      throw new TypeError("ranges-iterate: [THROW_ID_01] Input string must be a string! It was given as ".concat(_typeof(str), ", equal to: ").concat(JSON.stringify(str, null, 0)));
    } else if (!str.length) {
      throw new TypeError("ranges-iterate: [THROW_ID_02] Input string must be non-empty!");
    }

    if (originalRanges !== null && !isArr(originalRanges)) {
      throw new TypeError("ranges-iterate: [THROW_ID_03] Input ranges must be an array, consisting of zero or more arrays! Currently its type is: ".concat(_typeof(originalRanges), ", equal to: ").concat(JSON.stringify(originalRanges, null, 0)));
    }

    if (!cb) {
      throw new TypeError("ranges-iterate: [THROW_ID_04] You should provide a callback function as third input argument!");
    } else if (typeof cb !== "function") {
      throw new TypeError("ranges-iterate: [THROW_ID_05] The calllback function (third input argument) must be a function. It was given as: ".concat(_typeof(cb), ", equal to: ").concat(JSON.stringify(cb, null, 0)));
    } // The purpose of this package is to iterate through string and also all the
    // amendments registered so far. For example, if we say "delete from index 1
    // to index 3" and string consists of 10 characters, we want to be able to
    // iterate through indexes zero, skip indexes 1 & 2, four and up to index nine.
    //
    // If there are no ranges, it's easy, we iterate whole given string.
    //
    // If string amendments inserted values, we want to iterate those
    // to-be-inserted values too. That's where the complexity of this package
    // comes from.


    if (originalRanges === null || !originalRanges.length) {
      // TODO - implement ranges push
      for (var i = 0; i < str.length; i++) {
        // push converter simply returns range that was given, no changes needed
        cb({
          i: i,
          val: str[i],
          push: function push(received) {
            return received;
          }
        });
      }
    } else {
      // clone the given ranges because they will be mutated:
      var ranges = Array.from(originalRanges); // currentIdx is index we use to traverse the string. It's like "i" above,
      // except it "pauses" and is fired many times when range has third argument,
      // what to insert.

      var currentIdx = offset; // currentIdx is the index of the final string with all ranges applied (
      // all bits inserted or deleted). We increment it only when we ping the cb(),
      // that's why it might be equal or less than "currentIdx".

      var finalIdx = offset; // cover the first characters up to starting range

      if (finalIdx < ranges[0][0]) {
        for (; finalIdx < ranges[0][0]; finalIdx++, currentIdx++) {
          // insurange against gaps:
          if (!str[finalIdx]) {
            break;
          } // ELSE
          // TODO - add push


          cb({
            i: finalIdx,
            val: str[finalIdx]
          });
        }
      } // check, if the next range reaches before the end of the string
      // this is to prevent gaps.
      // For example, when string is 10 characters long, asking to insert something
      // from 20th to 30th character.


      if (ranges[0][0] <= currentIdx) {
        ranges.forEach(function (rangeArr, rangeArrIdx) {
          // 1. if "to insert" value, third range's argument is given, loop through it,
          // bumping "finalIdx" along the way. The "currentIdx" stays the same
          // because it marks real index on old string (and it does not move yet).
          if (rangeArr[2]) {
            for (var y = 0, len = rangeArr[2].length; y < len; y++) {
              cb({
                i: finalIdx,
                val: rangeArr[2][y]
              });
              finalIdx++;
            }
          } // 2. skip all characters in the range because those will be deleted


          while (currentIdx < rangeArr[1]) {
            currentIdx++;
          } // 3. if next range is present, ping all characters up to its start OR
          // if it's not present, ping up to the end of the string


          var loopUntil = str.length;

          if (ranges[rangeArrIdx + 1]) {
            loopUntil = ranges[rangeArrIdx + 1][0];
          }

          for (; currentIdx < loopUntil; finalIdx++, currentIdx++) {
            cb({
              i: finalIdx,
              val: str[currentIdx]
            });
          }
        });
      }
    }
  }

  return rangesIterate;

})));