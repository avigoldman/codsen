/**
 * @name line-column-mini
 * @fileoverview Convert string index to line-column position
 * @version 2.0.5
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/line-column-mini/}
 */

var version$1 = "2.0.5";

const version = version$1;
function binarySearch(el, arr) {
  let m = 0;
  let n = arr.length - 2;
  while (m < n) {
    const k = m + (n - m >> 1);
    if (el < arr[k]) {
      n = k - 1;
    } else if (el >= arr[k + 1]) {
      m = k + 1;
    } else {
      m = k;
      break;
    }
  }
  return m;
}
function getLineStartIndexes(str) {
  return str.split(/\n|\r(?!\n)/g).reduce((acc, curr) => {
    acc.push(acc[acc.length - 1] + curr.length + 1);
    return acc;
  }, [0]);
}
function lineCol(input, idx, skipChecks = false) {
  if (!skipChecks && (!Array.isArray(input) && typeof input !== "string" || (typeof input === "string" || Array.isArray(input)) && !input.length)) {
    return null;
  }
  if (!skipChecks && (typeof idx !== "number" || typeof input === "string" && idx >= input.length || Array.isArray(input) && idx + 1 >= input[input.length - 1])) {
    return null;
  }
  if (typeof input === "string") {
    const startIndexesOfEachLine = getLineStartIndexes(input);
    const line = binarySearch(idx, startIndexesOfEachLine);
    return {
      col: idx - startIndexesOfEachLine[line] + 1,
      line: line + 1
    };
  }
  const line = binarySearch(idx, input);
  return {
    col: idx - input[line] + 1,
    line: line + 1
  };
}

export { getLineStartIndexes, lineCol, version };
