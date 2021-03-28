/**
 * test-mixer
 * Test helper to generate function opts object variations
 * Version: 2.0.11
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/test-mixer/
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = require('@babel/runtime/helpers/objectSpread2');
var objectBooleanCombinations = require('object-boolean-combinations');
var clone = require('lodash.clonedeep');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _objectSpread__default = /*#__PURE__*/_interopDefaultLegacy(_objectSpread);
var clone__default = /*#__PURE__*/_interopDefaultLegacy(clone);

var version$1 = "2.0.11";

var version = version$1;
function mixer(ref, defaultsObj) {
  if (ref === void 0) {
    ref = {};
  }
  if (defaultsObj === void 0) {
    defaultsObj = {};
  }
  if (ref && typeof ref !== "object") {
    throw new Error("test-mixer: [THROW_ID_01] the first input arg is missing!");
  }
  if (defaultsObj && typeof defaultsObj !== "object") {
    throw new Error("test-mixer: [THROW_ID_02] the second input arg is missing!");
  }
  var caught;
  if (typeof ref === "object" && typeof defaultsObj === "object" && Object.keys(ref).some(function (refKey) {
    if (!Object.keys(defaultsObj).includes(refKey)) {
      caught = refKey;
      return true;
    }
  })) {
    throw new Error("test-mixer: [THROW_ID_03] the second input arg object should be defaults; it should be a superset of 1st input arg object. However, 1st input arg object contains key \"" + caught + "\" which 2nd input arg object doesn't have.");
  }
  if (!Object.keys(defaultsObj).length) {
    return [];
  }
  var refClone = clone__default['default'](ref);
  var defaultsObjClone = clone__default['default'](defaultsObj);
  var optsWithBoolValues = {};
  Object.keys(defaultsObj).forEach(function (key) {
    if (typeof defaultsObjClone[key] === "boolean" && !Object.keys(ref).includes(key)) {
      optsWithBoolValues[key] = defaultsObjClone[key];
    }
  });
  var res = objectBooleanCombinations.combinations(optsWithBoolValues).map(function (obj) {
    return _objectSpread__default['default'](_objectSpread__default['default'](_objectSpread__default['default']({}, defaultsObj), refClone), obj);
  });
  return res;
}

exports.mixer = mixer;
exports.version = version;
