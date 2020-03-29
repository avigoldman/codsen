/**
 * ast-monkey-traverse-with-lookahead
 * Utility library to traverse parsed HTML (AST's) or anything nested (plain objects within arrays within plain objects)
 * Version: 1.0.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ast-monkey-traverse-with-lookahead
 */

import clone from 'lodash.clonedeep';

function trimFirstDot(str) {
  if (typeof str === "string" && str[0] === ".") {
    return str.slice(1);
  }
  return str;
}
function isObj(something) {
  return (
    something && typeof something === "object" && !Array.isArray(something)
  );
}
function astMonkeyTraverseWithLookahead(tree1, cb1, lookahead = 0) {
  const stop = { now: false };
  const stash = [];
  function traverseInner(tree, callback, innerObj, stop) {
    innerObj = Object.assign({ depth: -1, path: "" }, innerObj);
    innerObj.depth += 1;
    if (Array.isArray(tree)) {
      for (let i = 0, len = tree.length; i < len; i++) {
        if (stop.now) {
          break;
        }
        const path = `${innerObj.path}.${i}`;
        innerObj.parent = clone(tree);
        innerObj.parentType = "array";
        callback(
          tree[i],
          undefined,
          Object.assign({}, innerObj, { path: trimFirstDot(path) }),
          stop
        );
        traverseInner(
          tree[i],
          callback,
          Object.assign({}, innerObj, { path: trimFirstDot(path) }),
          stop
        );
      }
    } else if (isObj(tree)) {
      for (const key in tree) {
        if (stop.now && key != null) {
          break;
        }
        const path = `${innerObj.path}.${key}`;
        if (innerObj.depth === 0 && key != null) {
          innerObj.topmostKey = key;
        }
        innerObj.parent = clone(tree);
        innerObj.parentType = "object";
        callback(
          key,
          tree[key],
          Object.assign({}, innerObj, { path: trimFirstDot(path) }),
          stop
        );
        traverseInner(
          tree[key],
          callback,
          Object.assign({}, innerObj, { path: trimFirstDot(path) }),
          stop
        );
      }
    }
    return tree;
  }
  function reportFirstFromStash() {
    const currentElem = stash.shift();
    currentElem[2].next = [];
    for (let i = 0; i < lookahead; i++) {
      if (stash[i]) {
        currentElem[2].next.push(
          clone([stash[i][0], stash[i][1], stash[i][2]])
        );
      } else {
        break;
      }
    }
    cb1(...currentElem);
  }
  function intermediary(...incoming) {
    stash.push([...incoming]);
    if (stash.length > lookahead) {
      reportFirstFromStash();
    }
  }
  traverseInner(tree1, intermediary, {}, stop);
  if (stash.length) {
    for (let i = 0, len = stash.length; i < len; i++) {
      reportFirstFromStash();
    }
  }
}

export default astMonkeyTraverseWithLookahead;