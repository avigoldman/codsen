'use strict'
/* eslint padded-blocks: 0 */

const type = require('type-detect')
const objectAssign = require('object-assign')
const clone = require('lodash.clonedeep')
const includes = require('lodash.includes')
const monkey = require('ast-monkey')
const search = require('str-indexes-of-plus')
const strLen = require('string-length')
const spliceStr = require('splice-string')
const slice = require('string-slice')
const util = require('./util')
const isArr = Array.isArray
const matcher = require('matcher')
const numSort = require('num-sort')
const objectPath = require('object-path')
const checkTypes = require('check-types-mini')

// tap util f's directly
const aContainsB = util.aContainsB
const aStartsWithB = util.aStartsWithB
const extractVarsFromString = util.extractVarsFromString
const findLastInArray = util.findLastInArray
const arrayiffyString = util.arrayiffyString
const fixOffset = util.fixOffset
const front = util.front
const splitObjectPath = util.splitObjectPath

function isStr (something) { return type(something) === 'string' }
function isObj (something) { return type(something) === 'Object' }
function existy (x) { return x != null }
function notUndef (x) { return x !== undefined }

function jsonVariables (inputOriginal, opts) {

  if (arguments.length === 0) {
    throw new Error('json-variables/jsonVariables(): [THROW_ID_01] inputs missing!')
  }
  if (!isObj(inputOriginal)) {
    throw new TypeError('json-variables/jsonVariables(): [THROW_ID_02] input must be a plain object! Currently it\'s: ' + type(inputOriginal))
  }
  var replacement

  var input = clone(inputOriginal)
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
    noSingleMarkers: false, // if value has only and exactly heads or tails, don't throw mismatched marker error.
    resolveToBoolIfAnyValuesContainBool: true, // if variable is resolved into anything that contains or is equal to Boolean false, set the whole thing to false
    resolveToFalseIfAnyValuesContainBool: true, // resolve whole value to false, even if some values contain Boolean true. Otherwise, the whole value will resolve to the first encountered Boolean.
    throwWhenNonStringInsertedInString: false
  }
  opts = objectAssign(clone(defaults), opts)

  opts.dontWrapVars = arrayiffyString(opts.dontWrapVars)

  checkTypes(opts, defaults, 'json-variables/jsonVariables():')

  if (opts.heads === '') {
    throw new Error('json-variables/jsonVariables(): [THROW_ID_03] opts.heads are empty!')
  }
  if (opts.tails === '') {
    throw new Error('json-variables/jsonVariables(): [THROW_ID_04] opts.tails are empty!')
  }
  if (opts.lookForDataContainers && opts.dataContainerIdentifierTails === '') {
    throw new Error('json-variables/jsonVariables(): [THROW_ID_05] opts.dataContainerIdentifierTails is empty!')
  }
  if (opts.heads === opts.tails) {
    throw new Error('json-variables/jsonVariables(): [THROW_ID_06] opts.heads and opts.tails can\'t be equal!')
  }
  if (opts.heads === opts.headsNoWrap) {
    throw new Error('json-variables/jsonVariables(): [THROW_ID_07] opts.heads and opts.headsNoWrap can\'t be equal!')
  }
  if (opts.tails === opts.tailsNoWrap) {
    throw new Error('json-variables/jsonVariables(): [THROW_ID_08] opts.tails and opts.tailsNoWrap can\'t be equal!')
  }
  if (opts.headsNoWrap === '') {
    throw new Error('json-variables/jsonVariables(): [THROW_ID_09] opts.headsNoWrap is empty!')
  }
  if (opts.tailsNoWrap === '') {
    throw new Error('json-variables/jsonVariables(): [THROW_ID_10] opts.tailsNoWrap is empty!')
  }
  if (opts.headsNoWrap === opts.tailsNoWrap) {
    throw new Error('json-variables/jsonVariables(): [THROW_ID_11] opts.headsNoWrap and opts.tailsNoWrap can\'t be equal!')
  }

  var foundHeads, foundTails
  var current, currentObjKey, wrapLeft, wrapRight, offset, resolvedValue
  var wrap = opts.wrapGlobalFlipSwitch

  input = monkey.traverse(input, function (key, val, innerObj) {
    // console.log('\n========================================')
    if (
      existy(val) && (
        aContainsB(key, opts.heads) ||
        aContainsB(key, opts.tails) ||
        aContainsB(key, opts.headsNoWrap) ||
        aContainsB(key, opts.tailsNoWrap)
      )
    ) {
      throw new Error('json-variables/jsonVariables(): [THROW_ID_12] Object keys can\'t contain variables!\nPlease check the following key: ' + key)
    }
    // If it's an array, val will not exist, only key.
    // On objects, we'll use val instead:
    current = notUndef(val) ? val : key
    currentObjKey = notUndef(val) ? key : null
    // console.log('key = ' + JSON.stringify(key, null, 4))
    // console.log('val = ' + JSON.stringify(val, null, 4))

    // if current branch's piece that monkey has just brought, "current" contains no variable
    // placeholders, instantly return it back, skipping all the action.

    if (
      !isStr(current) ||
      (
        (search(current, opts.heads).length === 0) &&
        (search(current, opts.headsNoWrap).length === 0)
      )
    ) {
      return current
    }

    if (
      (
        (search(current, opts.heads).length + search(current, opts.headsNoWrap).length) !==
        (search(current, opts.tails).length + search(current, opts.tailsNoWrap).length)
      ) &&
      (
        (opts.noSingleMarkers) ||
        (
          !opts.noSingleMarkers &&
          (current !== opts.heads) &&
          (current !== opts.tails) &&
          (current !== opts.headsNoWrap) &&
          (current !== opts.tailsNoWrap)
        )
      )
    ) {
      throw new Error('json-variables/jsonVariables(): [THROW_ID_13] Mismatching opening and closing markers!\nPlease check following key: "' + key + '", we have ' + search(current, opts.heads).length + ' head markers (' + opts.heads + ') and ' + search(current, opts.tails).length + ' tail markers (' + opts.tails + ').')
    }

    var innerVar // first extracted variable's key, without heads and tails
    var patience = false // when it reaches zero recursion error is thrown. When off, it's falsey.
    var recursionLoopSize // how many indexes are between the element to-be-added to innerPath[] and the index of the last occurence of the same value in innerPath[].
    // For example, on "abcda", the recursionLoopSize = 4 - 0 = 4.
    var innerPath = [] // recording path to identify recursions
    var loopKillSwitch = true

    if (!opts.noSingleMarkers && (
      (current === opts.heads) ||
      (current === opts.tails) ||
      (current === opts.headsNoWrap) ||
      (current === opts.tailsNoWrap)
    )) {
      loopKillSwitch = false
    }

    var dontWrapTheseVarsStartingWithIndexes = []

    // loop will be skipped completely with the help of "loopKillSwitch" if opts.noSingleMarkers=false and "current" has the value of "opts.heads" or "opts.tails"
    // its purpose is that when we allow heads or tails to be present in the content, among values, they can throw off the whole system because they will be unmatched!
    // we are not talking about cases like: "some text %%_variableName_%% some text", but only where the whole object's value is equal to heads or tails: "%%_" or "_%%".
    // The above is relevant in cases when all preferences are kept in the same JSON and heads/tails are set from the same file they will later process.
    if ((!opts.noSingleMarkers && loopKillSwitch) || opts.noSingleMarkers) {
      while (isStr(current) && ((search(current, opts.heads).length !== 0) || (search(current, opts.headsNoWrap).length !== 0))) {
        // console.log('\n------------------')
        foundHeads = search(current, opts.heads).concat(search(current, opts.headsNoWrap)).sort(numSort.asc)
        foundTails = search(current, opts.tails).concat(search(current, opts.tailsNoWrap)).sort(numSort.asc)
        innerVar = extractVarsFromString(current, [opts.heads, opts.headsNoWrap], [opts.tails, opts.tailsNoWrap])[0]

        // catch recursion after one full cycle
        // [!] cases when recursionLoopSize === 1 are not covered here because of false positives risk
        if (includes(innerPath, innerVar)) {
          if (!patience) {
            // means recursion is about to start, patience is not active yet
            recursionLoopSize = innerPath.length - findLastInArray(innerPath, innerVar)
            patience = recursionLoopSize > 1 ? recursionLoopSize : false
          } else {
            // means second recursion cycle is potentially going on, patience is active
            if (innerPath[innerPath.length - recursionLoopSize] === innerVar) {
              patience--
            }
            if (patience < 1) {
              throw new Error('json-variables/jsonVariables(): [THROW_ID_14] Recursion detected!\nPlease check following key: ' + current)
            }
          }
        } else {
          patience = false
        }
        innerPath.push(innerVar)

        if ((innerVar === currentObjKey) || (innerVar === innerObj.topmostKey)) {
          throw new Error('json-variables/jsonVariables(): [THROW_ID_15] Recursion detected!\nPlease check the following key: ' + (currentObjKey || current))
        }
        var found

        // console.log('innerVar = ' + JSON.stringify(innerVar, null, 4))
        if (
          isObj(innerObj.parent) &&
          innerObj.parent.hasOwnProperty(front(innerVar)) &&
          (objectPath.get(innerObj.parent, innerVar) !== undefined)
        ) {
          // console.log('> case 001')
          found = true
          // replacement = innerObj.parent[innerVar]
          resolvedValue = objectPath.get(innerObj.parent, innerVar)
          // console.log('resolvedValue = ' + JSON.stringify(resolvedValue, null, 4))
          if (!isStr(resolvedValue) && opts.throwWhenNonStringInsertedInString) {
            throw new Error('json-variables/jsonVariables(): [THROW_ID_16] We were going to replace the variable "' + innerVar + '" in ' + JSON.stringify(current, null, 4) + ' and it was not string but ' + type(resolvedValue))
          } else {
            replacement = resolvedValue
          }
        } else if (
          opts.lookForDataContainers &&
          isObj(innerObj.parent) &&
          innerObj.parent.hasOwnProperty('' + key + opts.dataContainerIdentifierTails) &&
          existy(innerObj.parent['' + key + opts.dataContainerIdentifierTails][front(innerVar)]) &&
          (objectPath.get(innerObj.parent['' + key + opts.dataContainerIdentifierTails], innerVar) !== undefined)
        ) {
          // console.log('> case 002')
          // console.log('\n*')
          // console.log('innerVar = ' + JSON.stringify(innerVar, null, 4))
          found = true

          replacement = objectPath.get(innerObj.parent['' + key + opts.dataContainerIdentifierTails], innerVar)
          // console.log('replacement = ' + JSON.stringify(replacement, null, 4))
        } else if (
          input.hasOwnProperty(front(innerVar)) &&
          (objectPath.get(input, innerVar) !== undefined)
        ) {
          // console.log('> case 003')
          found = true

          // console.log('\n\n+ input = ' + JSON.stringify(input, null, 4))
          // console.log('+ innerVar = ' + JSON.stringify(innerVar, null, 4))
          replacement = objectPath.get(input, innerVar)
          // console.log('replacement = ' + JSON.stringify(replacement, null, 4))
        } else if (opts.lookForDataContainers) {
          // console.log('> cases 004-005-006')
          if (
            input.hasOwnProperty('' + key + opts.dataContainerIdentifierTails) &&
            isObj(input[key + opts.dataContainerIdentifierTails])
          ) {
            // console.log('> case 004')
            found = true
            // replacement = input['' + key + opts.dataContainerIdentifierTails][innerVar]
            replacement = objectPath.get(input, ['' + key + opts.dataContainerIdentifierTails, innerVar])
          } else if (
            input.hasOwnProperty('' + innerObj.topmostKey + opts.dataContainerIdentifierTails) &&
            isObj(input['' + innerObj.topmostKey + opts.dataContainerIdentifierTails])
          ) {
            found = true
            if (existy(input['' + innerObj.topmostKey + opts.dataContainerIdentifierTails][front(innerVar)])) {
              // console.log('> case 005')
              // console.log('input[innerObj.topmostKey + opts.dataContainerIdentifierTails] = ' + JSON.stringify(input['' + innerObj.topmostKey + opts.dataContainerIdentifierTails], null, 4))
              replacement = objectPath.get(input['' + innerObj.topmostKey + opts.dataContainerIdentifierTails], innerVar)
              // console.log('replacement = ' + JSON.stringify(replacement, null, 4))
            } else {
              // console.log('> case 006')
              // When value is array and there are variable references among that array's elements, pointing to _data store key, this is the case.

              // Also, it's a rare case when a variable from data store is referencing an another variable that also comes from a data store.
              // Now essentially the original reference to the correct data store is lost, and now the new data store doesn't contain the variable we're looking for.

              // The solution (not ideal) is to traverse all keys at root level that can be identified as data stores and look for the missing key we need there.

              replacement = undefined
              Object.keys(input).forEach(function (key2) {
                if (
                  !replacement &&
                  (opts.lookForDataContainers) && // data key container lookup is left turned on
                  (opts.dataContainerIdentifierTails !== '') && // data key name append is not set to blank
                  key2.endsWith(opts.dataContainerIdentifierTails) && // it's data container
                  isObj(input[key2]) && // key's value is object
                  input[key2].hasOwnProperty(front(innerVar)) // has the key we want
                ) {
                  replacement = objectPath.get(input, [key2, innerVar])
                  // console.log('replacement = ' + JSON.stringify(replacement, null, 4))
                }
              })
              if (!replacement) {
                throw new Error('json-variables/jsonVariables(): [THROW_ID_16] Neither key ' + innerVar + ' nor data key ' + innerVar + opts.dataContainerIdentifierTails + ' exist in your input')
              }
            }
          } else {
            throw new Error('json-variables/jsonVariables(): [THROW_ID_17] Neither key ' + innerVar + ' nor data key ' + innerVar + opts.dataContainerIdentifierTails + ' exist in your input. We wanted to resolve: ' + current + (existy(key) ? (' coming from key: ' + key) : ''))
          }
        } else {
          throw new Error('json-variables/jsonVariables(): [THROW_ID_18] Required key ' + innerVar + ' is missing and you turned off the feature to search for key containing data (opts.lookForDataContainers=false). Now the value is missing and we\'re in trouble.')
        }

        if (isStr(replacement) && found) {
          if (opts.wrapGlobalFlipSwitch) {
            wrap = true // reset it for the new key.
          }
          // more resets:
          wrapLeft = true
          wrapRight = true

          // console.log('* opts.dontWrapVars = ' + JSON.stringify(opts.dontWrapVars, null, 4))
          // console.log('* innerVar = ' + JSON.stringify(innerVar, null, 4))
          if (opts.wrapGlobalFlipSwitch && opts.dontWrapVars.length > 0) {
            wrap = wrap && !splitObjectPath(innerVar).some(
              el1 => opts.dontWrapVars.some(
                el2 => matcher.isMatch(el1, el2)
              )
            )
          }

          // check if current variable's marker is opts.headsNoWrap (default is "%%-"). If so, don't wrap it.
          if (aStartsWithB(spliceStr(current, 0, foundHeads[0]), opts.headsNoWrap)) {
            wrapLeft = false
          }

          // check if current variable's marker is opts.headsNoWrap (default is "%%-"). If so, don't wrap it.
          if (aStartsWithB(slice(current, foundTails[0]), opts.tailsNoWrap)) {
            wrapRight = false
          }

          if (!wrapLeft && !wrapRight) {
            dontWrapTheseVarsStartingWithIndexes.push([foundHeads[0], foundTails[0]])
          } else if (!wrapLeft && wrapRight) {
            dontWrapTheseVarsStartingWithIndexes.push([foundHeads[0], null])
          } else if (wrapLeft && !wrapRight) {
            dontWrapTheseVarsStartingWithIndexes.push([null, foundTails[0]])
          }

          if (dontWrapTheseVarsStartingWithIndexes.length > 0) {
            dontWrapTheseVarsStartingWithIndexes.forEach(el => {
              if (el[0] === foundHeads[0]) {
                wrapLeft = false
              }

              if (el[1] === foundTails[0]) {
                wrapRight = false
              }
            })
          }

          // calculating what to replace the variable with (is it wrapped or not)

          if (
            opts.wrapGlobalFlipSwitch &&
            wrap &&
            (!opts.preventDoubleWrapping ||
              (
                (opts.wrapHeadsWith === '' || search(replacement, opts.wrapHeadsWith).length === 0) &&
                (opts.wrapTailsWith === '' || search(replacement, opts.wrapTailsWith).length === 0) &&
                (search(replacement, opts.heads).length === 0) &&
                (search(replacement, opts.tails).length === 0) &&
                (search(replacement, opts.headsNoWrap).length === 0) &&
                (search(replacement, opts.tailsNoWrap).length === 0)
              )
            )
          ) {
            replacement = (wrapLeft ? opts.wrapHeadsWith : '') + replacement + (wrapRight ? opts.wrapTailsWith : '')
          }

          // offset fixes
          var extr = extractVarsFromString(replacement, [opts.heads, opts.headsNoWrap], [opts.tails, opts.tailsNoWrap])[0] || replacement
          offset = extr.length - innerVar.length
          dontWrapTheseVarsStartingWithIndexes = fixOffset(dontWrapTheseVarsStartingWithIndexes, foundHeads[0], offset)
        } else if (isArr(replacement) && found) {
          replacement = replacement.join('')
        }

        // this covers both cases: when replacement is string or not
        if (found) {
          if (isStr(replacement)) {
            if (includes(extractVarsFromString(replacement, opts.heads, opts.tails), currentObjKey)) {
              throw new Error('json-variables/jsonVariables(): [THROW_ID_19] Recursion detected! ' + JSON.stringify(replacement, null, 4) + ' contains ' + currentObjKey)
            } else if (includes(extractVarsFromString(replacement, opts.heads, opts.tails), innerVar)) {
              throw new Error('json-variables/jsonVariables(): [THROW_ID_20] Recursion detected! ' + JSON.stringify(replacement, null, 4) + ' contains ' + innerVar)
            }
          }

          // replacing variable with the value
          if (!isStr(replacement) && (strLen(current) === (foundTails[0] - foundHeads[0] + strLen(opts.tails)))) {
            current = replacement
          } else if ((typeof replacement === 'boolean') && opts.resolveToBoolIfAnyValuesContainBool) {
            if (opts.resolveToFalseIfAnyValuesContainBool) {
              current = false
            } else {
              current = replacement
            }
          } else {
            if (typeof replacement === 'boolean') {
              replacement = ''
            }
            current = spliceStr(
              current,
              foundHeads[0],
              foundTails[0] - foundHeads[0] + strLen(opts.tails),
              replacement
            )
          }

        }
      }
    }
    return current
  })
  return input
}

module.exports = jsonVariables
