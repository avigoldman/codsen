/**
 * @name string-uglify
 * @fileoverview Shorten sets of strings deterministically, to be git-friendly
 * @version 1.5.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-uglify/}
 */

var version$1 = "1.5.0";

const version = version$1;
function tellcp(str, idNum = 0) {
  return str.codePointAt(idNum) || 0;
}
function uglifyArr(arr) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const lettersAndNumbers = "abcdefghijklmnopqrstuvwxyz0123456789";
  const singleClasses = {
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
  const singleIds = {
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
  const singleNameonly = {
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
  const res = [];
  if (!Array.isArray(arr) || !arr.length) {
    return arr;
  }
  for (let id = 0, len = arr.length; id < len; id++) {
    if (arr.indexOf(arr[id]) < id) {
      res.push(res[arr.indexOf(arr[id])]);
      continue;
    }
    const prefix = `.#`.includes(arr[id][0]) ? arr[id][0] : "";
    const codePointSum = Array.from(arr[id]).reduce((acc, curr) => acc + tellcp(curr), 0);
    if (`.#`.includes(arr[id][0]) && arr[id].length < 4 || !`.#`.includes(arr[id][0]) && arr[id].length < 3) {
      const val = arr[id];
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
    let generated = `${prefix}${letters[codePointSum % letters.length]}${lettersAndNumbers[codePointSum % lettersAndNumbers.length]}`;
    if (res.includes(generated)) {
      let soFarWeveGot = generated;
      let counter = 0;
      const reducedCodePointSum = Array.from(arr[id]).reduce((acc, curr) => acc < 200 ? acc + tellcp(curr) : (acc + tellcp(curr)) % lettersAndNumbers.length, 0);
      const magicNumber = Array.from(arr[id]).map(val => tellcp(val)).reduce((accum, curr) => {
        let temp = accum + curr;
        do {
          temp = String(temp).split("").reduce((acc, curr1) => acc + Number.parseInt(curr1, 10), 0);
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
  for (let i = 0, len = res.length; i < len; i++) {
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

export { uglifyArr, uglifyById, version };
