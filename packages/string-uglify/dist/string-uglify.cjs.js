/**
 * @name string-uglify
 * @fileoverview Shorten sets of strings deterministically, to be git-friendly
 * @version 1.5.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-uglify/}
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var version$1 = "1.5.0";

var version = version$1;
function tellcp(str) {
  var idNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return str.codePointAt(idNum) || 0;
}
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
  };
  var res = [];
  if (!Array.isArray(arr) || !arr.length) {
    return arr;
  }
  for (var id = 0, len = arr.length; id < len; id++) {
    if (arr.indexOf(arr[id]) < id) {
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
        res.push(val);
        if (val.startsWith(".") && val.length === 2 && singleClasses[val.slice(1)] === false) {
          singleClasses[val.slice(1)] = true;
        } else if (val.startsWith("#") && val.length === 2 && singleIds[val.slice(1)] === false) {
          singleIds[val.slice(1)] = true;
        } else if (!val.startsWith(".") && !val.startsWith("#") && val.length === 1 && singleNameonly[val] === false) {
          singleNameonly[val] = true;
        }
        continue;
      }
    }
    var generated = "".concat(prefix).concat(letters[codePointSum % letters.length]).concat(lettersAndNumbers[codePointSum % lettersAndNumbers.length]);
    if (res.includes(generated)) {
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
      }, 0);
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
  }
  for (var i = 0, _len = res.length; i < _len; i++) {
    if (res[i].startsWith(".")) {
      if (singleClasses[res[i].slice(1, 2)] === false) {
        singleClasses[res[i].slice(1, 2)] = res[i];
        res[i] = res[i].slice(0, 2);
      } else if (singleClasses[res[i].slice(1, 2)] === res[i]) {
        res[i] = res[i].slice(0, 2);
      }
    } else if (res[i].startsWith("#")) {
      if (singleIds[res[i].slice(1, 2)] === false) {
        singleIds[res[i].slice(1, 2)] = res[i];
        res[i] = res[i].slice(0, 2);
      } else if (singleIds[res[i].slice(1, 2)] === res[i]) {
        res[i] = res[i].slice(0, 2);
      }
    } else if (!res[i].startsWith(".") && !res[i].startsWith("#")) {
      if (!singleNameonly[res[i].slice(0, 1)]) {
        singleNameonly[res[i].slice(0, 1)] = res[i];
        res[i] = res[i].slice(0, 1);
      } else if (singleNameonly[res[i].slice(0, 1)] === res[i]) {
        res[i] = res[i].slice(0, 1);
      }
    }
  }
  return res;
}
function uglifyById(refArr, idNum) {
  return uglifyArr(refArr)[idNum];
}

exports.uglifyArr = uglifyArr;
exports.uglifyById = uglifyById;
exports.version = version;
