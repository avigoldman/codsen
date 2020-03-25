import clone from "lodash.clonedeep";

function trimFirstDot(str) {
  if (typeof str === "string" && str.length && str[0] === ".") {
    return str.slice(1);
  }
  return str;
}
function isObj(something) {
  return (
    something && typeof something === "object" && !Array.isArray(something)
  );
}
function astMonkeyTraverse(tree1, cb1) {
  const stop = { now: false };
  //
  // traverseInner() needs a wrapper to shield the internal arguments and simplify external API.
  //
  function traverseInner(treeOriginal, callback, innerObj, stop) {
    console.log(`020 ======= traverseInner() =======`);
    const tree = clone(treeOriginal);
    console.log(
      `023 ${`\u001b[${32}m${`CLONED`}\u001b[${39}m`} ${`\u001b[${33}m${`tree`}\u001b[${39}m`} = ${JSON.stringify(
        tree,
        null,
        4
      )}`
    );

    let i;
    let len;
    innerObj = Object.assign({ depth: -1, path: "" }, innerObj);
    innerObj.depth += 1;
    if (Array.isArray(tree)) {
      console.log(`035 tree is array!`);
      for (i = 0, len = tree.length; i < len; i++) {
        console.log(
          `038: ${`\u001b[${36}m${`--------------------------------------------`}\u001b[${39}m`} key: ${JSON.stringify(
            tree[i],
            null,
            0
          )}`
        );
        if (stop.now) {
          console.log(`045 ${`\u001b[${31}m${`BREAK`}\u001b[${39}m`}`);
          break;
        }
        const path = `${innerObj.path}.${i}`;
        console.log(
          `050 ${`\u001b[${33}m${`path`}\u001b[${39}m`} = ${JSON.stringify(
            path,
            null,
            4
          )}`
        );
        innerObj.parent = clone(tree);
        innerObj.parentType = "array";
        // innerObj.path = `${innerObj.path}[${i}]`

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
      console.log(`075 tree is object`);
      for (const key in tree) {
        console.log(
          `078: ${`\u001b[${36}m${`--------------------------------------------`}\u001b[${39}m`} key: ${key}`
        );
        if (stop.now && key != null) {
          console.log(`081 ${`\u001b[${31}m${`BREAK`}\u001b[${39}m`}`);
          break;
        }
        const path = `${innerObj.path}.${key}`;
        console.log(
          `086 ${`\u001b[${33}m${`path`}\u001b[${39}m`} = ${JSON.stringify(
            path,
            null,
            4
          )}`
        );
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
    console.log(`113 just returning tree, ${JSON.stringify(tree, null, 4)}`);
    return tree;
  }
  return traverseInner(tree1, cb1, {}, stop);
}

// -----------------------------------------------------------------------------

export default astMonkeyTraverse;
