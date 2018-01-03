'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var typ = _interopDefault(require('type-detect'));
var clone = _interopDefault(require('lodash.clonedeep'));
var includes = _interopDefault(require('lodash.includes'));
var traverse = _interopDefault(require('ast-monkey-traverse'));
var search = _interopDefault(require('str-indexes-of-plus'));
var strLen = _interopDefault(require('string-length'));
var spliceStr = _interopDefault(require('splice-string'));
var slice = _interopDefault(require('string-slice'));
var matcher = _interopDefault(require('matcher'));
var objectPath = _interopDefault(require('object-path'));
var checkTypes = _interopDefault(require('check-types-mini'));
var arrayiffyIfString = _interopDefault(require('arrayiffy-if-string'));
var strFindHeadsTails = _interopDefault(require('string-find-heads-tails'));
var stringConvertIndexes = require('string-convert-indexes');
var isEmpty = _interopDefault(require('posthtml-ast-is-empty'));
var trim = _interopDefault(require('lodash.trim'));

/* eslint padded-blocks: 0, no-param-reassign:0, no-loop-func:0 */

function existy$1(x) {
  return x != null;
}

function isStr$1(something) {
  return typ(something) === 'string';
}

function findLastInArray(array, val) {
  var res = null;
  if (!existy$1(val)) {
    return res;
  }
  array.forEach(function (el, i) {
    if (array[i] === val) {
      res = i;
    }
  });
  return res;
}

// This function consumes a string, a set of heads and tails, and returns an
// array of substrings between each head and tail.
// For example,
// some text %%_var1_%% more text %%_var2_%%
// would yield:
// [ "var1", "var2" ]
//
// since v.1.1 str can be equal to heads or tails - there won't be any results
// though (result will be empty array)
function extractVarsFromString(str, heads, tails) {
  // console.log(`--------------------\nstr = ${JSON.stringify(str, null, 4)}`)
  // console.log(`heads = ${JSON.stringify(heads, null, 4)}`)
  // console.log(`tails = ${JSON.stringify(tails, null, 4)}`)
  if (arguments.length === 0) {
    throw new Error('json-variables/util.js/extractVarsFromString(): [THROW_ID_01] inputs missing!');
  }
  var res = [];
  if (typ(str) !== 'string') {
    throw new Error('json-variables/util.js/extractVarsFromString(): [THROW_ID_02] first arg must be string-type. Currently it\'s: ' + typ(str));
  }
  if (heads === undefined) {
    heads = ['%%_'];
  }
  if (tails === undefined) {
    tails = ['_%%'];
  }
  if (typ(heads) !== 'string' && typ(heads) !== 'Array') {
    throw new Error('json-variables/util.js/extractVarsFromString(): [THROW_ID_03] second arg must be a string or an array of strings. Currently it\'s: ' + typ(heads));
  }
  if (typ(tails) !== 'string' && typ(tails) !== 'Array') {
    throw new Error('json-variables/util.js/extractVarsFromString(): [THROW_ID_04] third arg must be a string or an array of strings. Currently it\'s: ' + typ(tails));
  }
  heads = arrayiffyIfString(clone(heads));
  tails = arrayiffyIfString(clone(tails));
  if (includes(heads, str) || includes(tails, str) || str.length === 0) {
    return [];
  }

  // var foundHeads = search(str, heads)
  // var foundTails = search(str, tails)
  var foundHeads = heads.reduce(function (acc, val) {
    return acc.concat(search(str, val));
  }, []);

  var foundTails = tails.reduce(function (acc, val) {
    return acc.concat(search(str, val));
  }, []);

  if (foundHeads.length !== foundTails.length && !includes(heads, str) && !includes(tails, str)) {
    throw new Error('json-variables/util.js/extractVarsFromString(): [THROW_ID_05] Mismatching heads and tails in the input:\n' + str);
  }

  var to = void 0;
  var from = void 0;
  var currentHeadLength = void 0;

  var _loop = function _loop(i, len) {
    heads.forEach(function (el) {
      if (slice(str, foundHeads[i]).startsWith(el)) {
        currentHeadLength = strLen(el);
      }
    });
    from = foundHeads[i] + currentHeadLength;
    to = foundTails[i];
    res.push(trim(slice(str, from, to)));
  };

  for (var i = 0, len = foundHeads.length; i < len; i++) {
    _loop(i, len);
  }
  return res;
}

// accepts array, where elements are arrays, containing integers or null.
// for example:
// [ [1, 3], [5, null], [null, 16] ]
//
// it's for internal use, so there is no input type validation
function fixOffset(whatever, position, amount) {
  whatever = traverse(whatever, function (key, val) {
    var current = existy$1(val) ? val : key;
    if (val === undefined && typeof key === 'number') {
      if (existy$1(amount) && amount !== 0 && key > position) {
        return key + amount;
      }
    }
    return current;
  });
  return whatever;
}

// extracts all the characters from the front of a string until finds "." or "[".
function front(str) {
  if (!isStr$1(str)) {
    return str;
  }
  return existy$1(str.match(/\b[^.[]+/)) ? str.match(/\b[^.[]+/)[0] : '';
}

// splits object-path notation into array: "aaa.bbb[ccc]" => ["aaa", "bbb", "ccc"]
function splitObjectPath(str) {
  // console.log('str = ' + JSON.stringify(str, null, 4))
  var re = /\s*[[.*\]]\s*/;
  if (!isStr$1(str)) {
    return str;
  }
  var res = str.split(re).filter(function (n) {
    return existy$1(n) && n.length > 0;
  }).map(Function.prototype.call, String.prototype.trim);
  // console.log('res = ' + JSON.stringify(res, null, 4))
  return res;
}

/* eslint padded-blocks: 0, prefer-destructuring:0, no-loop-func:0 */

// tap util f's directly
var isArr = Array.isArray;
var has = Object.prototype.hasOwnProperty;

function isStr(something) {
  return typ(something) === 'string';
}
function isObj(something) {
  return typ(something) === 'Object';
}
function existy(x) {
  return x != null;
}
function notUndef(x) {
  return x !== undefined;
}

function jsonVariables(inputOriginal) {
  var originalOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // const DEBUG = 0
  if (arguments.length === 0) {
    throw new Error('json-variables/jsonVariables(): [THROW_ID_01] Alas! Inputs are missing!');
  }
  if (!isObj(inputOriginal)) {
    throw new TypeError('json-variables/jsonVariables(): [THROW_ID_02] Alas! The input must be a plain object! Currently it\'s: ' + typ(inputOriginal));
  }
  if (!isObj(originalOpts)) {
    throw new TypeError('json-variables/jsonVariables(): [THROW_ID_03] Alas! An Optional Options Object must be a plain object! Currently it\'s: ' + typ(originalOpts));
  }
  var replacement = void 0;

  var input = clone(inputOriginal);
  var defaults = {
    heads: '%%_',
    tails: '_%%',
    headsNoWrap: '%%-',
    tailsNoWrap: '-%%',
    lookForDataContainers: true,
    dataContainerIdentifierTails: '_data',
    wrapHeadsWith: '',
    wrapTailsWith: '',
    dontWrapVars: [],
    preventDoubleWrapping: true,
    wrapGlobalFlipSwitch: true, // is wrap function on?
    noSingleMarkers: false, // if value has only and exactly heads or tails,
    // don't throw mismatched marker error.
    resolveToBoolIfAnyValuesContainBool: true, // if variable is resolved into
    // anything that contains or is equal to Boolean false, set the whole thing to false
    resolveToFalseIfAnyValuesContainBool: true, // resolve whole value to false,
    // even if some values contain Boolean true. Otherwise, the whole value will
    // resolve to the first encountered Boolean.
    throwWhenNonStringInsertedInString: false
  };
  var opts = Object.assign({}, defaults, originalOpts);

  if (!opts.dontWrapVars) {
    opts.dontWrapVars = [];
  } else if (!isArr(opts.dontWrapVars)) {
    opts.dontWrapVars = arrayiffyIfString(opts.dontWrapVars);
  }

  checkTypes(opts, defaults, { msg: 'json-variables/jsonVariables(): [THROW_ID_04*]' });

  var culpritVal = void 0;
  var culpritIndex = void 0;
  if (opts.dontWrapVars.length > 0 && !opts.dontWrapVars.every(function (el, idx) {
    if (!isStr(el)) {
      culpritVal = el;
      culpritIndex = idx;
      return false;
    }
    return true;
  })) {
    throw new Error('json-variables/jsonVariables(): [THROW_ID_05] Alas! All variable names set in opts.dontWrapVars should be of a string type. Computer detected a value "' + culpritVal + '" at index ' + culpritIndex + ', which is not string but ' + typ(culpritVal) + '!');
  }

  if (opts.heads === '') {
    throw new Error('json-variables/jsonVariables(): [THROW_ID_06] Alas! opts.heads are empty!');
  }
  if (opts.tails === '') {
    throw new Error('json-variables/jsonVariables(): [THROW_ID_07] Alas! opts.tails are empty!');
  }
  if (opts.lookForDataContainers && opts.dataContainerIdentifierTails === '') {
    throw new Error('json-variables/jsonVariables(): [THROW_ID_08] Alas! opts.dataContainerIdentifierTails is empty!');
  }
  if (opts.heads === opts.tails) {
    throw new Error('json-variables/jsonVariables(): [THROW_ID_09] Alas! opts.heads and opts.tails can\'t be equal!');
  }
  if (opts.heads === opts.headsNoWrap) {
    throw new Error('json-variables/jsonVariables(): [THROW_ID_10] Alas! opts.heads and opts.headsNoWrap can\'t be equal!');
  }
  if (opts.tails === opts.tailsNoWrap) {
    throw new Error('json-variables/jsonVariables(): [THROW_ID_11] Alas! opts.tails and opts.tailsNoWrap can\'t be equal!');
  }
  if (opts.headsNoWrap === '') {
    throw new Error('json-variables/jsonVariables(): [THROW_ID_12] Alas! opts.headsNoWrap is empty!');
  }
  if (opts.tailsNoWrap === '') {
    throw new Error('json-variables/jsonVariables(): [THROW_ID_13] Alas! opts.tailsNoWrap is empty!');
  }
  if (opts.headsNoWrap === opts.tailsNoWrap) {
    throw new Error('json-variables/jsonVariables(): [THROW_ID_14] Alas! opts.headsNoWrap and opts.tailsNoWrap can\'t be equal!');
  }

  var current = void 0;
  var currentObjKey = void 0;
  var wrapLeft = void 0;
  var wrapRight = void 0;
  var offset = void 0;
  var resolvedValue = void 0;
  var wrap = opts.wrapGlobalFlipSwitch;

  input = traverse(input, function (key, val, innerObj) {
    // if (DEBUG) { console.log('\n========================================') }
    if (existy(val) && (key.includes(opts.heads) || key.includes(opts.tails) || key.includes(opts.headsNoWrap) || key.includes(opts.tailsNoWrap))) {
      throw new Error('json-variables/jsonVariables(): [THROW_ID_15] Alas! Object keys can\'t contain variables!\nPlease check the following key: ' + key);
    }
    // If it's an array, val will not exist, only key.
    // On objects, we'll use val instead:
    current = notUndef(val) ? val : key;
    currentObjKey = notUndef(val) ? key : null;
    // if (DEBUG) { console.log(`key = ${JSON.stringify(key, null, 4)}`) }
    // if (DEBUG) { console.log(`val = ${JSON.stringify(val, null, 4)}`) }

    // *
    // End sooner, case #1. If the "current" that monkey brought us is
    // equal to whole heads or tails.

    if (current === '') {
      return current;
    }

    if (opts.heads.length !== 0 && current === opts.heads || opts.tails.length !== 0 && current === opts.tails || opts.headsNoWrap.length !== 0 && current === opts.headsNoWrap || opts.tailsNoWrap.length !== 0 && current === opts.tailsNoWrap) {
      if (!opts.noSingleMarkers) {
        return current;
      }
      throw new Error('json-variables/jsonVariables(): [THROW_ID_16] Alas! While processing the input, we stumbled upon ' + current + ' which is equal to ' + (current === opts.heads ? 'heads' : '') + (current === opts.tails ? 'tails' : '') + (current === opts.headsNoWrap ? 'headsNoWrap' : '') + (current === opts.tailsNoWrap ? 'tailsNoWrap' : '') + '. Since you turned off the opts.noSingleMarkers to "true", you asked for this and computer delivered.');
    }

    // *
    // End sooner, case #2. If current branch's piece which monkey has just
    // brought ("current") contains no variable placeholders, instantly
    // return it back, skipping all the action.

    if (isStr(current)) {
      var allHeadsAndTails = stringConvertIndexes.nativeToUnicode(current, strFindHeadsTails(current, opts.heads, opts.tails, {
        source: 'json-variables/jsonVariables(): [THROW_ID_17]',
        relaxedAPI: true
      }));
      var allNoWrapHeadsAndTails = stringConvertIndexes.nativeToUnicode(current, strFindHeadsTails(current, opts.headsNoWrap, opts.tailsNoWrap, {
        source: 'json-variables/jsonVariables(): [THROW_ID_18]',
        relaxedAPI: true
      }));
      // if there are no heads found at all, return (doing nothing)
      if (allHeadsAndTails === [] && allNoWrapHeadsAndTails === []) {
        return current;
      }
    } else {
      return current;
    }

    var innerVar = void 0; // first extracted variable's key, without heads and tails
    var patience = false; // when it reaches zero recursion error is thrown. When off, it's falsey.
    var recursionLoopSize = void 0; // how many indexes are between the element to-be-added to
    // innerPath[] and the index of the last occurence of the same value in innerPath[].
    // For example, on "abcda", the recursionLoopSize = 4 - 0 = 4.
    var innerPath = []; // recording path to identify recursions
    var loopKillSwitch = true;

    if (!opts.noSingleMarkers && (current === opts.heads || current === opts.tails || current === opts.headsNoWrap || current === opts.tailsNoWrap)) {
      loopKillSwitch = false;
    }

    var dontWrapTheseVarsStartingWithIndexes = [];
    var found = void 0;

    // loop will be skipped completely with the help of "loopKillSwitch" if
    // opts.noSingleMarkers=false and "current" has the value of "opts.heads" or
    // "opts.tails"
    // its purpose is that when we allow heads or tails to be present in the
    // content, among values, they can throw off the whole system because they will be unmatched!
    // We are not talking about cases like: "some text %%_variableName_%% some text",
    // but only where the whole object's value is equal to heads or tails: "%%_" or "_%%".
    // The above is relevant in cases when all preferences are kept in the same JSON
    // and heads/tails are set from the same file they will later process.

    if (!opts.noSingleMarkers && loopKillSwitch || opts.noSingleMarkers) {
      var _loop = function _loop() {
        var extractedHeadsAndTails = stringConvertIndexes.nativeToUnicode(current, strFindHeadsTails(current, [opts.heads, opts.headsNoWrap], [opts.tails, opts.tailsNoWrap], { matchHeadsAndTailsStrictlyInPairsByTheirOrder: true, relaxedAPI: true }));

        // "innerVar" contains the string value of the variable we're currently working on.
        // In other words, the string between first pair of heads and tails.

        // First, we extract all variable values from the current string.
        // For example, if the "current" is:
        // some text %%_var1_%% more text %%_var2_%%
        // Then with the help of "extractVarsFromString" we get:
        // ["var1", "var2"]. Then we take the first element (index zero).

        innerVar = slice(current, extractedHeadsAndTails[0].headsEndAt, extractedHeadsAndTails[0].tailsStartAt).trim();
        // if (DEBUG) { console.log(`* innerVar = ${JSON.stringify(innerVar, null, 4)}\n\n\n`) }
        var currentHeads = extractedHeadsAndTails[0].headsStartAt;
        var currentTails = extractedHeadsAndTails[0].tailsStartAt;

        // if (DEBUG) { console.log(`currentHeads = ${JSON.stringify(currentHeads, null, 4)}`) }
        // if (DEBUG) { console.log(`currentTails = ${JSON.stringify(currentTails, null, 4)}`) }

        // catch recursion after one full cycle
        // [!] cases when recursionLoopSize === 1 are not covered here because of
        // false positives risk
        if (includes(innerPath, innerVar)) {
          if (!patience) {
            // means recursion is about to start, patience is not active yet
            recursionLoopSize = innerPath.length - findLastInArray(innerPath, innerVar);
            patience = recursionLoopSize > 1 ? recursionLoopSize : false;
          } else {
            // means second recursion cycle is potentially going on, patience is active
            if (innerPath[innerPath.length - recursionLoopSize] === innerVar) {
              patience -= 1;
            }
            if (patience < 1) {
              throw new Error('json-variables/jsonVariables(): [THROW_ID_19] Recursion detected!\nPlease check following key: ' + current);
            }
          }
        } else {
          patience = false;
        }
        innerPath.push(innerVar);

        if (innerVar === currentObjKey || innerVar === innerObj.topmostKey) {
          throw new Error('json-variables/jsonVariables(): [THROW_ID_20] Recursion detected!\nPlease check the following key: ' + (currentObjKey || current));
        }

        // if (DEBUG) { console.log(`innerVar = ${JSON.stringify(innerVar, null, 4)}`) }
        if (isObj(innerObj.parent) && has.call(innerObj.parent, front(innerVar)) && objectPath.get(innerObj.parent, innerVar) !== undefined) {
          // if (DEBUG) { console.log('> case 001') }
          found = true;
          // replacement = innerObj.parent[innerVar]
          resolvedValue = objectPath.get(innerObj.parent, innerVar);
          // if (DEBUG) { console.log(`resolvedValue = ${JSON.stringify(resolvedValue, null, 4)}`) }
          if (!isStr(resolvedValue) && opts.throwWhenNonStringInsertedInString) {
            throw new Error('json-variables/jsonVariables(): [THROW_ID_21] We were going to replace the variable "' + innerVar + '" in ' + JSON.stringify(current, null, 4) + ' and it was not string but ' + typ(resolvedValue));
          } else {
            replacement = resolvedValue;
          }
        } else if (opts.lookForDataContainers && isObj(innerObj.parent) && has.call(innerObj.parent, '' + key + opts.dataContainerIdentifierTails) && existy(innerObj.parent['' + key + opts.dataContainerIdentifierTails][front(innerVar)]) && objectPath.get(innerObj.parent['' + key + opts.dataContainerIdentifierTails], innerVar) !== undefined) {
          // if (DEBUG) { console.log('> case 002') }
          // if (DEBUG) { console.log('\n*') }
          // if (DEBUG) { console.log(`innerVar = ${JSON.stringify(innerVar, null, 4)}`) }
          found = true;

          replacement = objectPath.get(innerObj.parent['' + key + opts.dataContainerIdentifierTails], innerVar);
          // if (DEBUG) { console.log(`replacement = ${JSON.stringify(replacement, null, 4)}`) }
        } else if (has.call(input, front(innerVar)) && objectPath.get(input, innerVar) !== undefined) {
          // if (DEBUG) { console.log('> case 003') }
          found = true;

          // if (DEBUG) { console.log(`\n\n+ input = ${JSON.stringify(input, null, 4)}`) }
          // if (DEBUG) { console.log(`+ innerVar = ${JSON.stringify(innerVar, null, 4)}`) }
          replacement = objectPath.get(input, innerVar);
          // if (DEBUG) { console.log(`replacement = ${JSON.stringify(replacement, null, 4)}`) }
        } else if (opts.lookForDataContainers) {
          // if (DEBUG) { console.log('> cases 004-005-006') }
          if (has.call(input, '' + key + opts.dataContainerIdentifierTails) && isObj(input[key + opts.dataContainerIdentifierTails])) {
            // if (DEBUG) { console.log('> case 004') }
            found = true;
            // replacement = input['' + key + opts.dataContainerIdentifierTails][innerVar]
            replacement = objectPath.get(input, ['' + key + opts.dataContainerIdentifierTails, innerVar]);
          } else if (has.call(input, '' + innerObj.topmostKey + opts.dataContainerIdentifierTails) && isObj(input['' + innerObj.topmostKey + opts.dataContainerIdentifierTails])) {
            found = true;
            if (existy(input['' + innerObj.topmostKey + opts.dataContainerIdentifierTails][front(innerVar)])) {
              // if (DEBUG) { console.log('> case 005') }
              replacement = objectPath.get(input['' + innerObj.topmostKey + opts.dataContainerIdentifierTails], innerVar);
              // if (DEBUG) { console.log(`replacement = ${JSON.stringify(replacement, null, 4)}`) }
            } else {
              // if (DEBUG) { console.log('> case 006') }
              // When value is array and there are variable references among that
              // array's elements, pointing to _data store key, this is the case.

              // Also, it's a rare case when a variable from data store is
              // referencing an another variable that also comes from a data store.
              // Now essentially the original reference to the correct data store is
              // lost, and now the new data store doesn't contain the variable we're looking for.

              // The solution (not ideal) is to traverse all keys at root level that
              // can be identified as data stores and look for the missing key we need there.

              replacement = undefined;
              Object.keys(input).forEach(function (key2) {
                if (!replacement && opts.lookForDataContainers && // data key container lookup is left turned on
                opts.dataContainerIdentifierTails !== '' && // data key name append is not set to blank
                key2.endsWith(opts.dataContainerIdentifierTails) && // it's data container
                isObj(input[key2]) && // key's value is object
                has.call(input[key2], front(innerVar)) // has the key we want
                ) {
                    replacement = objectPath.get(input, [key2, innerVar]);
                  }
              });
              if (!replacement) {
                throw new Error('json-variables/jsonVariables(): [THROW_ID_22] Neither key ' + innerVar + ' nor data key ' + innerVar + opts.dataContainerIdentifierTails + ' exist in your input');
              }
            }
          } else {
            throw new Error('json-variables/jsonVariables(): [THROW_ID_23] Neither key ' + innerVar + ' nor data key ' + innerVar + opts.dataContainerIdentifierTails + ' exist in your input. We wanted to resolve: ' + current + (existy(key) ? ' coming from key: ' + key : ''));
          }
        } else {
          throw new Error('json-variables/jsonVariables(): [THROW_ID_24] Required key ' + innerVar + ' is missing and you turned off the feature to search for key containing data (opts.lookForDataContainers=false). Now the value is missing and we\'re in trouble.');
        }

        if (isStr(replacement) && found) {
          if (opts.wrapGlobalFlipSwitch) {
            wrap = true; // reset it for the new key.
          }
          // more resets:
          wrapLeft = true;
          wrapRight = true;

          if (opts.wrapGlobalFlipSwitch && opts.dontWrapVars.length > 0) {
            wrap = wrap && !splitObjectPath(innerVar).some(function (el1) {
              return opts.dontWrapVars.some(function (el2) {
                return matcher.isMatch(el1, el2);
              });
            });
          }

          // check if current variable's marker is opts.headsNoWrap (default is "%%-").
          // If so, don't wrap it.
          if (spliceStr(current, 0, currentHeads).startsWith(opts.headsNoWrap)) {
            wrapLeft = false;
          }

          // check if current variable's marker is opts.headsNoWrap
          // (default is "%%-"). If so, don't wrap it.
          if (slice(current, currentTails).startsWith(opts.tailsNoWrap)) {
            wrapRight = false;
          }

          if (!wrapLeft && !wrapRight) {
            dontWrapTheseVarsStartingWithIndexes.push([currentHeads, currentTails]);
          } else if (!wrapLeft && wrapRight) {
            dontWrapTheseVarsStartingWithIndexes.push([currentHeads, null]);
          } else if (wrapLeft && !wrapRight) {
            dontWrapTheseVarsStartingWithIndexes.push([null, currentTails]);
          }

          if (dontWrapTheseVarsStartingWithIndexes.length > 0) {
            dontWrapTheseVarsStartingWithIndexes.forEach(function (el) {
              if (el[0] === currentHeads) {
                wrapLeft = false;
              }

              if (el[1] === currentTails) {
                wrapRight = false;
              }
            });
          }

          // calculating what to replace the variable with (is it wrapped or not)

          if (opts.wrapGlobalFlipSwitch && wrap && (!opts.preventDoubleWrapping || (opts.wrapHeadsWith === '' || search(replacement, opts.wrapHeadsWith).length === 0) && (opts.wrapTailsWith === '' || search(replacement, opts.wrapTailsWith).length === 0) && search(replacement, opts.heads).length === 0 && search(replacement, opts.tails).length === 0 && search(replacement, opts.headsNoWrap).length === 0 && search(replacement, opts.tailsNoWrap).length === 0)) {
            replacement = (wrapLeft ? opts.wrapHeadsWith : '') + replacement + (wrapRight ? opts.wrapTailsWith : '');
          }

          // offset fixes
          var extr = extractVarsFromString(replacement, [opts.heads, opts.headsNoWrap], [opts.tails, opts.tailsNoWrap])[0] || replacement;
          offset = extr.length - innerVar.length;
          dontWrapTheseVarsStartingWithIndexes = fixOffset(dontWrapTheseVarsStartingWithIndexes, currentHeads, offset);
        } else if (isArr(replacement) && found) {
          replacement = replacement.join('');
        }

        // this covers both cases: when replacement is string or not
        if (found) {
          if (isStr(replacement)) {
            if (includes(extractVarsFromString(replacement, opts.heads, opts.tails), currentObjKey)) {
              throw new Error('json-variables/jsonVariables(): [THROW_ID_25] Recursion detected! ' + JSON.stringify(replacement, null, 4) + ' contains ' + currentObjKey);
            } else if (includes(extractVarsFromString(replacement, opts.heads, opts.tails), innerVar)) {
              throw new Error('json-variables/jsonVariables(): [THROW_ID_26] Recursion detected! ' + JSON.stringify(replacement, null, 4) + ' contains ' + innerVar);
            }
          }

          // replacing variable with the value
          if (!isStr(replacement) && strLen(current) === currentTails - currentHeads + strLen(opts.tails)) {
            current = replacement;
          } else if (typeof replacement === 'boolean' && opts.resolveToBoolIfAnyValuesContainBool) {
            if (opts.resolveToFalseIfAnyValuesContainBool) {
              current = false;
            } else {
              current = replacement;
            }
          } else {
            if (typeof replacement === 'boolean') {
              replacement = '';
            }
            current = spliceStr(current, currentHeads, currentTails - currentHeads + strLen(opts.tails), replacement);
          }
        }
      };

      while (isStr(current) && (!isEmpty(strFindHeadsTails(current, opts.heads, opts.tails, { relaxedAPI: true })) || !isEmpty(strFindHeadsTails(current, opts.headsNoWrap, opts.tailsNoWrap, { relaxedAPI: true })))) {
        _loop();
      }
    }
    return current;
  });
  return input;
}

module.exports = jsonVariables;
