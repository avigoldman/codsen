/**
 * string-uglify
 * Shorten sets of strings deterministically, to be git-friendly
 * Version: 1.4.8
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-uglify/
 */

(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
typeof define === 'function' && define.amd ? define(['exports'], factory) :
(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.stringUglify = {}));
}(this, (function (exports) { 'use strict';

var version$1 = "1.4.8";

var version = version$1; // tells code point of a given id number

function tellcp(str, idNum) {
  if (idNum === void 0) {
    idNum = 0;
  }

  return str.codePointAt(idNum) || 0;
} // converts whole array into array uglified names


function uglifyArr(arr) {
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var lettersAndNumbers = "abcdefghijklmnopqrstuvwxyz0123456789";
  var singleClasses = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    m: false,
    n: false,
    o: false,
    p: false,
    q: false,
    r: false,
    s: false,
    t: false,
    u: false,
    v: false,
    w: false,
    x: false,
    y: false,
    z: false
  };
  var singleIds = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    m: false,
    n: false,
    o: false,
    p: false,
    q: false,
    r: false,
    s: false,
    t: false,
    u: false,
    v: false,
    w: false,
    x: false,
    y: false,
    z: false
  };
  var singleNameonly = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    m: false,
    n: false,
    o: false,
    p: false,
    q: false,
    r: false,
    s: false,
    t: false,
    u: false,
    v: false,
    w: false,
    x: false,
    y: false,
    z: false
  }; // final array we'll assemble and eventually return

  var res = []; // quick end

  if (!Array.isArray(arr) || !arr.length) {
    return arr;
  }

  for (var id = 0, len = arr.length; id < len; id++) {
    // insurance against duplicate reference array values
    if (arr.indexOf(arr[id]) < id) {
      // push again the calculated value from "res":
      res.push(res[arr.indexOf(arr[id])]);
      continue;
    }

    var prefix = ".#".includes(arr[id][0]) ? arr[id][0] : "";
    var codePointSum = Array.from(arr[id]).reduce(function (acc, curr) {
      return acc + tellcp(curr);
    }, 0);

    if (".#".includes(arr[id][0]) && arr[id].length < 4 || !".#".includes(arr[id][0]) && arr[id].length < 3) {
      var val = arr[id];

      if (!res.includes(val)) {
        res.push(val); // the first candidates for single-character value are 2-char long classes:

        if (val.startsWith(".") && val.length === 2 && singleClasses[val.slice(1)] === false) {
          // mark the letter as used
          singleClasses[val.slice(1)] = true;
        } else if (val.startsWith("#") && val.length === 2 && singleIds[val.slice(1)] === false) {
          // mark the letter as used
          singleIds[val.slice(1)] = true;
        } else if (!val.startsWith(".") && !val.startsWith("#") && val.length === 1 && singleNameonly[val] === false) {
          // mark the letter as used
          singleNameonly[val] = true;
        }

        continue;
      }
    }

    var generated = "" + prefix + letters[codePointSum % letters.length] + lettersAndNumbers[codePointSum % lettersAndNumbers.length];

    if (res.includes(generated)) {
      // add more characters:
      var soFarWeveGot = generated;
      var counter = 0;
      var reducedCodePointSum = Array.from(arr[id]).reduce(function (acc, curr) {
        return acc < 200 ? acc + tellcp(curr) : (acc + tellcp(curr)) % lettersAndNumbers.length;
      }, 0);
      var magicNumber = Array.from(arr[id]).map(function (val) {
        return tellcp(val);
      }).reduce(function (accum, curr) {
        var temp = accum + curr;

        do {
          temp = String(temp).split("").reduce(function (acc, curr1) {
            return acc + Number.parseInt(curr1, 10);
          }, 0);
        } while (temp >= 10);

        return temp;
      }, 0); // console.log(
      //   `${`\u001b[${33}m${`magicNumber`}\u001b[${39}m`} = ${JSON.stringify(
      //     magicNumber,
      //     null,
      //     4
      //   )}`
      // );

      while (res.includes(soFarWeveGot)) {
        counter += 1;
        soFarWeveGot += lettersAndNumbers[reducedCodePointSum * magicNumber * counter % lettersAndNumbers.length];
      }

      generated = soFarWeveGot;
    }

    res.push(generated);

    if (generated.startsWith(".") && generated.length === 2 && singleClasses[generated.slice(1)] === false) {
      singleClasses[generated.slice(1)] = true;
    } else if (generated.startsWith("#") && generated.length === 2 && singleIds[generated.slice(1)] === false) {
      singleIds[generated.slice(1)] = true;
    } else if (!generated.startsWith(".") && !generated.startsWith("#") && generated.length === 1 && singleNameonly[generated] === false) {
      singleNameonly[generated] = true;
    }
  } // loop through all uglified values again and if the one letter name that
  // matches current name's first letter (considering it might be id, class or
  // just name), shorten that value up to that single letter.

  for (var i = 0, _len = res.length; i < _len; i++) {

    if (res[i].startsWith(".")) {
      // if particular class name starts with a letter which hasn't been taken
      if (singleClasses[res[i].slice(1, 2)] === false) {
        singleClasses[res[i].slice(1, 2)] = res[i];
        res[i] = res[i].slice(0, 2);
      } else if (singleClasses[res[i].slice(1, 2)] === res[i]) { // This means, particular class name was repeated in the list and
        // was shortened. We must shorten it to the same value.

        res[i] = res[i].slice(0, 2);
      }
    } else if (res[i].startsWith("#")) {
      if (singleIds[res[i].slice(1, 2)] === false) {
        singleIds[res[i].slice(1, 2)] = res[i];
        res[i] = res[i].slice(0, 2);
      } else if (singleIds[res[i].slice(1, 2)] === res[i]) {
        // This means, particular id name was repeated in the list and
        // was shortened. We must shorten it to the same value.
        res[i] = res[i].slice(0, 2);
      }
    } else if (!res[i].startsWith(".") && !res[i].startsWith("#")) {
      if (!singleNameonly[res[i].slice(0, 1)]) {
        singleNameonly[res[i].slice(0, 1)] = res[i];
        res[i] = res[i].slice(0, 1);
      } else if (singleNameonly[res[i].slice(0, 1)] === res[i]) {
        // This means, particular id name was repeated in the list and
        // was shortened. We must shorten it to the same value.
        res[i] = res[i].slice(0, 1);
      }
    }
  }

  return res;
} // main function - converts n-th string in a given reference array of strings


function uglifyById(refArr, idNum) {
  return uglifyArr(refArr)[idNum];
} // main export

exports.uglifyArr = uglifyArr;
exports.uglifyById = uglifyById;
exports.version = version;

Object.defineProperty(exports, '__esModule', { value: true });

})));
