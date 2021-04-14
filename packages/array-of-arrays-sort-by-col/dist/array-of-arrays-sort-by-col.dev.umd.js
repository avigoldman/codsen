/**
 * @name array-of-arrays-sort-by-col
 * @fileoverview Sort array of arrays by column, rippling the sorting outwards from that column
 * @version 3.0.16
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/array-of-arrays-sort-by-col/}
 */

(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
typeof define === 'function' && define.amd ? define(['exports'], factory) :
(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.arrayOfArraysSortByCol = {}));
}(this, (function (exports) { 'use strict';

var version$1 = "3.0.16";

const version = version$1;
// FUNCTIONS - INTERNAL
// -----------------------------------------------------------------------------
function existy(x) {
    return x != null;
}
// function logArrayOfArrays(arr, highlightIdx) {
//   console.log(
//     `\n\n\n\n*** logArrayOfArrays:\n${"=".repeat(
//       arr[0].length * 8 + (arr[0].length - 1)
//     )}${arr.reduce((accum, currVal) => {
//       return `${accum}\n${logArray(currVal, highlightIdx)}`;
//     }, "")}\n${"=".repeat(arr[0].length * 8 + (arr[0].length - 1))}\n\n\n`
//   );
// }
// EXTERNAL API
// -----------------------------------------------------------------------------
/**
 * Sort array of arrays by column, rippling the sorting outwards from that column
 */
function sortByCol(arr, axis = 0) {
    if (!Array.isArray(arr)) {
        throw new Error(`array-of-arrays-sort-by-col: [THROW_ID_01]: The first input argument was given not as array but as ${typeof arr}, equal to:\n${JSON.stringify(arr, null, 0)}`);
    }
    if (isNaN(+axis)) {
        throw new Error(`array-of-arrays-sort-by-col: [THROW_ID_02]: The second input argument, index of the column to sort by (axis), is not integer (incl. zero)! It's currently given as:\n${JSON.stringify(axis, null, 0)} (type ${typeof axis})`);
    }
    const maxLength = Math.max(...arr.map((arr2) => arr2.length));
    if (!maxLength) {
        return arr;
    }
    if (+axis >= maxLength) {
        throw new Error(`array-of-arrays-sort-by-col: [THROW_ID_03]: The second input argument, index of the column to sort by (axis), is marking the column which does not exist on any of the input arrays. Axis was given as ${+axis} while highest index goes as far as ${maxLength}.`);
    }
    const resToBeReturned = Array.from(arr).sort((arr1, arr2) => {
        // 1. check the axis column first:
        if (arr1[+axis] !== arr2[+axis]) {
            if ((!existy(arr1[+axis]) && existy(arr2[+axis])) ||
                (existy(arr1[+axis]) &&
                    existy(arr2[+axis]) &&
                    arr1[+axis] > arr2[+axis])) {
                return 1;
            }
            /* istanbul ignore else */
            if ((existy(arr1[+axis]) && !existy(arr2[+axis])) ||
                (existy(arr1[+axis]) &&
                    existy(arr2[+axis]) &&
                    arr1[+axis] < arr2[+axis])) {
                return -1;
            }
        }
        // 2. if we reached this point, we need to ripple outwards from the axis
        // column, comparing first what's outside on the left-side, then right, then
        // left outside of it, then right outside of it, then left outside of it...
        const maxRangeToIterate = Math.max(arr1.length, arr2.length);
        const maxRipplesLength = Math.max(+axis, maxRangeToIterate - +axis - 1);
        // console.log(
        //   `\u001b[${35}m${`maxRipplesLength: ${maxRipplesLength}`}\u001b[${39}m`
        // );
        // iterate through the ripple's length:
        for (let i = 1; i <= maxRipplesLength; i++) {
            if (+axis - i >= 0) {
                // logging:
                // comparison:
                if (existy(arr1[+axis - i])) {
                    if (existy(arr2[+axis - i])) {
                        if (arr1[+axis - i] < arr2[+axis - i]) {
                            return -1;
                        }
                        if (arr1[+axis - i] > arr2[+axis - i]) {
                            return 1;
                        }
                    }
                    else {
                        return -1;
                    }
                }
                // arr1 value is null or undefined
                // it's enough for arr2 not to be null or undefined and it goes on top:
                else if (existy(arr2[+axis - i])) {
                    return 1;
                }
            }
            /* istanbul ignore else */
            if (+axis + i < maxRangeToIterate) {
                // logging:
                // comparison:
                if (existy(arr1[+axis + i])) {
                    if (existy(arr2[+axis + i])) {
                        if (arr1[+axis + i] < arr2[+axis + i]) {
                            return -1;
                        }
                        if (arr1[+axis + i] > arr2[+axis + i]) {
                            return 1;
                        }
                    }
                    else {
                        return -1;
                    }
                }
                // arr1 value is null or undefined
                // it's enough for arr2 not to be null or undefined and it goes on top:
                else if (existy(arr2[+axis + i])) {
                    return 1;
                }
            }
        }
        // 3. if by now any of returns hasn't happened yet, these two rows are equal
        return 0;
    });
    // console.log("\n\n\nRETURNING:");
    // logArrayOfArrays(resToBeReturned, axis);
    return resToBeReturned;
}

exports.sortByCol = sortByCol;
exports.version = version;

Object.defineProperty(exports, '__esModule', { value: true });

})));
