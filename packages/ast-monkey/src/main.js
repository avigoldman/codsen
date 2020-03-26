import arrayObjectOrBoth from "util-array-object-or-both";
import checkTypes from "check-types-mini";
import astCompare from "ast-compare";
import traverse from "ast-monkey-traverse";

// -----------------------------------------------------------------------------

function existy(x) {
  return x != null;
}
function compareIsEqual(a, b) {
  if (typeof a !== typeof b) {
    return false;
  }
  return astCompare(a, b, { matchStrictly: true, useWildcards: true });
}
function isObj(something) {
  return (
    something && typeof something === "object" && !Array.isArray(something)
  );
}

// -----------------------------------------------------------------------------

function monkey(input, opts) {
  // -----------------------------------
  // precautions
  if (!input) {
    throw new Error(
      "ast-monkey/main.js/monkey(): [THROW_ID_01] Please provide an input"
    );
  }
  opts = Object.assign(
    {
      key: null,
      val: undefined,
    },
    opts
  );
  // ---------------------------------------------------------------------------
  // action

  const data = { count: 0, gatherPath: [], finding: null };
  const findings = [];

  let ko = false; // key only
  let vo = false; // value only

  // PS. null is a legit value, although not a key
  if (opts.key && opts.val === undefined) {
    ko = true;
  }
  if (!opts.key && opts.val !== undefined) {
    vo = true;
  }

  if (opts.mode === "arrayFirstOnly" && Array.isArray(input) && input.length) {
    input = [input[0]];
  }

  //
  //
  //

  input = traverse(input, (key, val, innerObj) => {
    let temp;
    data.count += 1;
    data.gatherPath.length = innerObj.depth;
    data.gatherPath.push(data.count);
    if (opts.mode === "get") {
      if (data.count === opts.index) {
        if (val !== undefined) {
          data.finding = {};
          data.finding[key] = val;
        } else {
          data.finding = key;
        }
      }
    } else if (opts.mode === "find" || opts.mode === "del") {
      if (
        // opts.only satisfied
        (opts.only === "any" ||
          (opts.only === "array" && val === undefined) ||
          (opts.only === "object" && val !== undefined)) && // match
        ((ko && compareIsEqual(key, opts.key)) ||
          (vo && compareIsEqual(val, opts.val)) ||
          (!ko &&
            !vo &&
            compareIsEqual(key, opts.key) &&
            compareIsEqual(val, opts.val)))
      ) {
        if (opts.mode === "find") {
          temp = {};
          temp.index = data.count;
          temp.key = key;
          temp.val = val; // can be also undefined!
          temp.path = [...data.gatherPath];
          findings.push(temp);
        } else {
          // del() then!
          return NaN;
        }
      } else {
        return val !== undefined ? val : key;
      }
    }

    if (opts.mode === "set" && data.count === opts.index) {
      return opts.val;
    } else if (opts.mode === "drop" && data.count === opts.index) {
      return NaN;
    } else if (opts.mode === "arrayFirstOnly") {
      if (val && Array.isArray(val)) {
        return [val[0]];
      } else if (key && Array.isArray(key)) {
        return [key[0]];
      }
      return val !== undefined ? val : key;
    }
    return val !== undefined ? val : key;
  });

  // returns
  if (opts.mode === "get") {
    return data.finding;
  } else if (opts.mode === "find") {
    return findings.length ? findings : null;
  }
  return input;
}

// -----------------------------------------------------------------------------
// Validate and prep all the options right here

function find(input, opts) {
  if (!existy(input)) {
    throw new Error(
      "ast-monkey/main.js/find(): [THROW_ID_02] Please provide the input"
    );
  }
  if (!isObj(opts) || (opts.key === undefined && opts.val === undefined)) {
    throw new Error(
      "ast-monkey/main.js/find(): [THROW_ID_03] Please provide opts.key or opts.val"
    );
  }
  checkTypes(opts, null, {
    schema: {
      key: ["null", "string"],
      val: "any",
      only: ["undefined", "null", "string"],
    },
    msg: "ast-monkey/get(): [THROW_ID_04*]",
  });
  if (typeof opts.only === "string" && opts.only.length) {
    opts.only = arrayObjectOrBoth(opts.only, {
      optsVarName: "opts.only",
      msg: "ast-monkey/find(): [THROW_ID_05*]",
    });
  } else {
    opts.only = "any";
  }
  return monkey(input, Object.assign({}, opts, { mode: "find" }));
}

function get(input, opts) {
  if (!existy(input)) {
    throw new Error(
      "ast-monkey/main.js/get(): [THROW_ID_06] Please provide the input"
    );
  }
  if (!isObj(opts)) {
    throw new Error(
      "ast-monkey/main.js/get(): [THROW_ID_07] Please provide the opts"
    );
  }
  if (!existy(opts.index)) {
    throw new Error(
      "ast-monkey/main.js/get(): [THROW_ID_08] Please provide opts.index"
    );
  }
  if (typeof opts.index === "string" && /^\d*$/.test(opts.index)) {
    opts.index = parseInt(opts.index, 10);
  } else if (!Number.isInteger(opts.index)) {
    throw new Error(
      `ast-monkey/main.js/get(): [THROW_ID_11] opts.index must be a natural number. It was given as: ${
        opts.index
      } (type ${typeof opts.index})`
    );
  }
  return monkey(input, Object.assign({}, opts, { mode: "get" }));
}

function set(input, opts) {
  if (!existy(input)) {
    throw new Error(
      "ast-monkey/main.js/set(): [THROW_ID_12] Please provide the input"
    );
  }
  if (!isObj(opts)) {
    throw new Error(
      "ast-monkey/main.js/set(): [THROW_ID_13] Please provide the input"
    );
  }
  if (!opts.key && opts.val === undefined) {
    throw new Error(
      "ast-monkey/main.js/set(): [THROW_ID_14] Please provide opts.val"
    );
  }
  if (!existy(opts.index)) {
    throw new Error(
      "ast-monkey/main.js/set(): [THROW_ID_15] Please provide opts.index"
    );
  }
  if (typeof opts.index === "string" && /^\d*$/.test(opts.index)) {
    opts.index = parseInt(opts.index, 10);
  } else if (!Number.isInteger(opts.index)) {
    throw new Error(
      `ast-monkey/main.js/set(): [THROW_ID_17] opts.index must be a natural number. It was given as: ${opts.index}`
    );
  }
  if (opts.key && opts.val === undefined) {
    opts.val = opts.key;
  }
  checkTypes(opts, null, {
    schema: {
      key: [null, "string"],
      val: "any",
      index: "number",
    },
    msg: "ast-monkey/set(): [THROW_ID_18*]",
  });
  return monkey(input, Object.assign({}, opts, { mode: "set" }));
}

function drop(input, opts) {
  if (!existy(input)) {
    throw new Error(
      "ast-monkey/main.js/drop(): [THROW_ID_19] Please provide the input"
    );
  }
  if (!isObj(opts)) {
    throw new Error(
      "ast-monkey/main.js/drop(): [THROW_ID_20] Please provide the input"
    );
  }
  if (!existy(opts.index)) {
    throw new Error(
      "ast-monkey/main.js/drop(): [THROW_ID_21] Please provide opts.index"
    );
  }
  if (typeof opts.index === "string" && /^\d*$/.test(opts.index)) {
    opts.index = parseInt(opts.index, 10);
  } else if (!Number.isInteger(opts.index)) {
    throw new Error(
      `ast-monkey/main.js/drop(): [THROW_ID_23] opts.index must be a natural number. It was given as: ${opts.index}`
    );
  }
  return monkey(input, Object.assign({}, opts, { mode: "drop" }));
}

function del(input, opts) {
  if (!existy(input)) {
    throw new Error(
      "ast-monkey/main.js/del(): [THROW_ID_26] Please provide the input"
    );
  }
  if (!isObj(opts)) {
    throw new Error(
      "ast-monkey/main.js/del(): [THROW_ID_27] Please provide the opts object"
    );
  }
  if (!opts.key && opts.val === undefined) {
    throw new Error(
      "ast-monkey/main.js/del(): [THROW_ID_28] Please provide opts.key or opts.val"
    );
  }
  checkTypes(opts, null, {
    schema: {
      key: [null, "string"],
      val: "any",
      only: ["undefined", "null", "string"],
    },
    msg: "ast-monkey/drop(): [THROW_ID_29*]",
  });
  if (typeof opts.only === "string" && opts.only.length) {
    opts.only = arrayObjectOrBoth(opts.only, {
      msg: "ast-monkey/del(): [THROW_ID_30*]",
      optsVarName: "opts.only",
    });
  } else {
    opts.only = "any";
  }
  return monkey(input, Object.assign({}, opts, { mode: "del" }));
}

function arrayFirstOnly(input) {
  if (!input) {
    throw new Error(
      "ast-monkey/main.js/arrayFirstOnly(): [THROW_ID_31] Please provide the input"
    );
  }
  return monkey(input, { mode: "arrayFirstOnly" });
}

// -----------------------------------------------------------------------------

export { find, get, set, drop, del, arrayFirstOnly, traverse };
