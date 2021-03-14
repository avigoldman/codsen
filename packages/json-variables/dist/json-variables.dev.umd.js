/**
 * json-variables
 * Resolves custom-marked, cross-referenced paths in parsed JSON
 * Version: 10.0.8
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/json-variables/
 */

(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
typeof define === 'function' && define.amd ? define(['exports'], factory) :
(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jsonVariables = {}));
}(this, (function (exports) { 'use strict';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var lodash_clonedeep = createCommonjsModule(function (module, exports) {
  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;
  /** Used to stand-in for `undefined` hash values. */

  var HASH_UNDEFINED = '__lodash_hash_undefined__';
  /** Used as references for various `Number` constants. */

  var MAX_SAFE_INTEGER = 9007199254740991;
  /** `Object#toString` result references. */

  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      weakMapTag = '[object WeakMap]';
  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';
  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */

  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  /** Used to match `RegExp` flags from their coerced string values. */

  var reFlags = /\w*$/;
  /** Used to detect host constructors (Safari). */

  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  /** Used to detect unsigned integer values. */

  var reIsUint = /^(?:0|[1-9]\d*)$/;
  /** Used to identify `toStringTag` values supported by `_.clone`. */

  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
  /** Detect free variable `global` from Node.js. */

  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  /** Detect free variable `self`. */

  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
  /** Used as a reference to the global object. */

  var root = freeGlobal || freeSelf || Function('return this')();
  /** Detect free variable `exports`. */

  var freeExports = exports && !exports.nodeType && exports;
  /** Detect free variable `module`. */

  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
  /** Detect the popular CommonJS extension `module.exports`. */

  var moduleExports = freeModule && freeModule.exports === freeExports;
  /**
   * Adds the key-value `pair` to `map`.
   *
   * @private
   * @param {Object} map The map to modify.
   * @param {Array} pair The key-value pair to add.
   * @returns {Object} Returns `map`.
   */

  function addMapEntry(map, pair) {
    // Don't return `map.set` because it's not chainable in IE 11.
    map.set(pair[0], pair[1]);
    return map;
  }
  /**
   * Adds `value` to `set`.
   *
   * @private
   * @param {Object} set The set to modify.
   * @param {*} value The value to add.
   * @returns {Object} Returns `set`.
   */


  function addSetEntry(set, value) {
    // Don't return `set.add` because it's not chainable in IE 11.
    set.add(value);
    return set;
  }
  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */


  function arrayEach(array, iteratee) {
    var index = -1,
        length = array ? array.length : 0;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }

    return array;
  }
  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */


  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }

    return array;
  }
  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */


  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array ? array.length : 0;

    if (initAccum && length) {
      accumulator = array[++index];
    }

    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }

    return accumulator;
  }
  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */


  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }

    return result;
  }
  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */


  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }
  /**
   * Checks if `value` is a host object in IE < 9.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
   */


  function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;

    if (value != null && typeof value.toString != 'function') {
      try {
        result = !!(value + '');
      } catch (e) {}
    }

    return result;
  }
  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */


  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);
    map.forEach(function (value, key) {
      result[++index] = [key, value];
    });
    return result;
  }
  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */


  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }
  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */


  function setToArray(set) {
    var index = -1,
        result = Array(set.size);
    set.forEach(function (value) {
      result[++index] = value;
    });
    return result;
  }
  /** Used for built-in method references. */


  var arrayProto = Array.prototype,
      funcProto = Function.prototype,
      objectProto = Object.prototype;
  /** Used to detect overreaching core-js shims. */

  var coreJsData = root['__core-js_shared__'];
  /** Used to detect methods masquerading as native. */

  var maskSrcKey = function () {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
  }();
  /** Used to resolve the decompiled source of functions. */


  var funcToString = funcProto.toString;
  /** Used to check objects for own properties. */

  var hasOwnProperty = objectProto.hasOwnProperty;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var objectToString = objectProto.toString;
  /** Used to detect if a method is native. */

  var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  /** Built-in value references. */

  var Buffer = moduleExports ? root.Buffer : undefined,
      Symbol = root.Symbol,
      Uint8Array = root.Uint8Array,
      getPrototype = overArg(Object.getPrototypeOf, Object),
      objectCreate = Object.create,
      propertyIsEnumerable = objectProto.propertyIsEnumerable,
      splice = arrayProto.splice;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeGetSymbols = Object.getOwnPropertySymbols,
      nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
      nativeKeys = overArg(Object.keys, Object);
  /* Built-in method references that are verified to be native. */

  var DataView = getNative(root, 'DataView'),
      Map = getNative(root, 'Map'),
      Promise = getNative(root, 'Promise'),
      Set = getNative(root, 'Set'),
      WeakMap = getNative(root, 'WeakMap'),
      nativeCreate = getNative(Object, 'create');
  /** Used to detect maps, sets, and weakmaps. */

  var dataViewCtorString = toSource(DataView),
      mapCtorString = toSource(Map),
      promiseCtorString = toSource(Promise),
      setCtorString = toSource(Set),
      weakMapCtorString = toSource(WeakMap);
  /** Used to convert symbols to primitives and strings. */

  var symbolProto = Symbol ? Symbol.prototype : undefined,
      symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */

  function Hash(entries) {
    var index = -1,
        length = entries ? entries.length : 0;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */


  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
  }
  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */


  function hashDelete(key) {
    return this.has(key) && delete this.__data__[key];
  }
  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */


  function hashGet(key) {
    var data = this.__data__;

    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }

    return hasOwnProperty.call(data, key) ? data[key] : undefined;
  }
  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */


  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
  }
  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */


  function hashSet(key, value) {
    var data = this.__data__;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
  } // Add methods to `Hash`.


  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */

  function ListCache(entries) {
    var index = -1,
        length = entries ? entries.length : 0;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */


  function listCacheClear() {
    this.__data__ = [];
  }
  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */


  function listCacheDelete(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }

    var lastIndex = data.length - 1;

    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }

    return true;
  }
  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */


  function listCacheGet(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
  }
  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */


  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */


  function listCacheSet(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }

    return this;
  } // Add methods to `ListCache`.


  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */

  function MapCache(entries) {
    var index = -1,
        length = entries ? entries.length : 0;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */


  function mapCacheClear() {
    this.__data__ = {
      'hash': new Hash(),
      'map': new (Map || ListCache)(),
      'string': new Hash()
    };
  }
  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */


  function mapCacheDelete(key) {
    return getMapData(this, key)['delete'](key);
  }
  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */


  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */


  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */


  function mapCacheSet(key, value) {
    getMapData(this, key).set(key, value);
    return this;
  } // Add methods to `MapCache`.


  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */

  function Stack(entries) {
    this.__data__ = new ListCache(entries);
  }
  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */


  function stackClear() {
    this.__data__ = new ListCache();
  }
  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */


  function stackDelete(key) {
    return this.__data__['delete'](key);
  }
  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */


  function stackGet(key) {
    return this.__data__.get(key);
  }
  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */


  function stackHas(key) {
    return this.__data__.has(key);
  }
  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */


  function stackSet(key, value) {
    var cache = this.__data__;

    if (cache instanceof ListCache) {
      var pairs = cache.__data__;

      if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        return this;
      }

      cache = this.__data__ = new MapCache(pairs);
    }

    cache.set(key, value);
    return this;
  } // Add methods to `Stack`.


  Stack.prototype.clear = stackClear;
  Stack.prototype['delete'] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */

  function arrayLikeKeys(value, inherited) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    // Safari 9 makes `arguments.length` enumerable in strict mode.
    var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
    var length = result.length,
        skipIndexes = !!length;

    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
        result.push(key);
      }
    }

    return result;
  }
  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */


  function assignValue(object, key, value) {
    var objValue = object[key];

    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
      object[key] = value;
    }
  }
  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */


  function assocIndexOf(array, key) {
    var length = array.length;

    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }

    return -1;
  }
  /**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */


  function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
  }
  /**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @param {boolean} [isFull] Specify a clone including symbols.
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */


  function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
    var result;

    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }

    if (result !== undefined) {
      return result;
    }

    if (!isObject(value)) {
      return value;
    }

    var isArr = isArray(value);

    if (isArr) {
      result = initCloneArray(value);

      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag(value),
          isFunc = tag == funcTag || tag == genTag;

      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }

      if (tag == objectTag || tag == argsTag || isFunc && !object) {
        if (isHostObject(value)) {
          return object ? value : {};
        }

        result = initCloneObject(isFunc ? {} : value);

        if (!isDeep) {
          return copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }

        result = initCloneByTag(value, tag, baseClone, isDeep);
      }
    } // Check for circular references and return its corresponding clone.


    stack || (stack = new Stack());
    var stacked = stack.get(value);

    if (stacked) {
      return stacked;
    }

    stack.set(value, result);

    if (!isArr) {
      var props = isFull ? getAllKeys(value) : keys(value);
    }

    arrayEach(props || value, function (subValue, key) {
      if (props) {
        key = subValue;
        subValue = value[key];
      } // Recursively populate clone (susceptible to call stack limits).


      assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
    });
    return result;
  }
  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} prototype The object to inherit from.
   * @returns {Object} Returns the new object.
   */


  function baseCreate(proto) {
    return isObject(proto) ? objectCreate(proto) : {};
  }
  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */


  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }
  /**
   * The base implementation of `getTag`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */


  function baseGetTag(value) {
    return objectToString.call(value);
  }
  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */


  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }

    var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */


  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }

    var result = [];

    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }

    return result;
  }
  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */


  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }

    var result = new buffer.constructor(buffer.length);
    buffer.copy(result);
    return result;
  }
  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */


  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }
  /**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */


  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }
  /**
   * Creates a clone of `map`.
   *
   * @private
   * @param {Object} map The map to clone.
   * @param {Function} cloneFunc The function to clone values.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned map.
   */


  function cloneMap(map, isDeep, cloneFunc) {
    var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
    return arrayReduce(array, addMapEntry, new map.constructor());
  }
  /**
   * Creates a clone of `regexp`.
   *
   * @private
   * @param {Object} regexp The regexp to clone.
   * @returns {Object} Returns the cloned regexp.
   */


  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }
  /**
   * Creates a clone of `set`.
   *
   * @private
   * @param {Object} set The set to clone.
   * @param {Function} cloneFunc The function to clone values.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned set.
   */


  function cloneSet(set, isDeep, cloneFunc) {
    var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
    return arrayReduce(array, addSetEntry, new set.constructor());
  }
  /**
   * Creates a clone of the `symbol` object.
   *
   * @private
   * @param {Object} symbol The symbol object to clone.
   * @returns {Object} Returns the cloned symbol object.
   */


  function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }
  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */


  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */


  function copyArray(source, array) {
    var index = -1,
        length = source.length;
    array || (array = Array(length));

    while (++index < length) {
      array[index] = source[index];
    }

    return array;
  }
  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */


  function copyObject(source, props, object, customizer) {
    object || (object = {});
    var index = -1,
        length = props.length;

    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
      assignValue(object, key, newValue === undefined ? source[key] : newValue);
    }

    return object;
  }
  /**
   * Copies own symbol properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */


  function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
  }
  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */


  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }
  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */


  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
  }
  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */


  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }
  /**
   * Creates an array of the own enumerable symbol properties of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */


  var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */

  var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11,
  // for data views in Edge < 14, and promises in Node.js.

  if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
    getTag = function getTag(value) {
      var result = objectToString.call(value),
          Ctor = result == objectTag ? value.constructor : undefined,
          ctorString = Ctor ? toSource(Ctor) : undefined;

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;

          case mapCtorString:
            return mapTag;

          case promiseCtorString:
            return promiseTag;

          case setCtorString:
            return setTag;

          case weakMapCtorString:
            return weakMapTag;
        }
      }

      return result;
    };
  }
  /**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */


  function initCloneArray(array) {
    var length = array.length,
        result = array.constructor(length); // Add properties assigned by `RegExp#exec`.

    if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
      result.index = array.index;
      result.input = array.input;
    }

    return result;
  }
  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */


  function initCloneObject(object) {
    return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
  }
  /**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {Function} cloneFunc The function to clone values.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */


  function initCloneByTag(object, tag, cloneFunc, isDeep) {
    var Ctor = object.constructor;

    switch (tag) {
      case arrayBufferTag:
        return cloneArrayBuffer(object);

      case boolTag:
      case dateTag:
        return new Ctor(+object);

      case dataViewTag:
        return cloneDataView(object, isDeep);

      case float32Tag:
      case float64Tag:
      case int8Tag:
      case int16Tag:
      case int32Tag:
      case uint8Tag:
      case uint8ClampedTag:
      case uint16Tag:
      case uint32Tag:
        return cloneTypedArray(object, isDeep);

      case mapTag:
        return cloneMap(object, isDeep, cloneFunc);

      case numberTag:
      case stringTag:
        return new Ctor(object);

      case regexpTag:
        return cloneRegExp(object);

      case setTag:
        return cloneSet(object, isDeep, cloneFunc);

      case symbolTag:
        return cloneSymbol(object);
    }
  }
  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */


  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
  }
  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */


  function isKeyable(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
  }
  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */


  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */


  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
    return value === proto;
  }
  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to process.
   * @returns {string} Returns the source code.
   */


  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}

      try {
        return func + '';
      } catch (e) {}
    }

    return '';
  }
  /**
   * This method is like `_.clone` except that it recursively clones `value`.
   *
   * @static
   * @memberOf _
   * @since 1.0.0
   * @category Lang
   * @param {*} value The value to recursively clone.
   * @returns {*} Returns the deep cloned value.
   * @see _.clone
   * @example
   *
   * var objects = [{ 'a': 1 }, { 'b': 2 }];
   *
   * var deep = _.cloneDeep(objects);
   * console.log(deep[0] === objects[0]);
   * // => false
   */


  function cloneDeep(value) {
    return baseClone(value, true, true);
  }
  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */


  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */


  function isArguments(value) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
  }
  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */


  var isArray = Array.isArray;
  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */

  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }
  /**
   * This method is like `_.isArrayLike` except that it also checks if `value`
   * is an object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array-like object,
   *  else `false`.
   * @example
   *
   * _.isArrayLikeObject([1, 2, 3]);
   * // => true
   *
   * _.isArrayLikeObject(document.body.children);
   * // => true
   *
   * _.isArrayLikeObject('abc');
   * // => false
   *
   * _.isArrayLikeObject(_.noop);
   * // => false
   */


  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }
  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */


  var isBuffer = nativeIsBuffer || stubFalse;
  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */

  function isFunction(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag;
  }
  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */


  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */


  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }
  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */


  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }
  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */


  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */


  function stubArray() {
    return [];
  }
  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */


  function stubFalse() {
    return false;
  }

  module.exports = cloneDeep;
});

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var objectTag = '[object Object]';
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */

function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;

  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }

  return result;
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */


function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
/** Used for built-in method references. */


var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString.call(Object);
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/** Built-in value references. */

var getPrototype = overArg(Object.getPrototypeOf, Object);
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

function isObjectLike(value) {
  return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */


function isPlainObject(value) {
  if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }

  var proto = getPrototype(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

var lodash_isplainobject = isPlainObject;

/**
 * ast-monkey-util
 * Utility library of AST helper functions
 * Version: 1.3.8
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ast-monkey-util/
 */

function parent(str) {
  if (str.includes(".")) {
    var lastDotAt = str.lastIndexOf(".");

    if (!str.slice(0, lastDotAt).includes(".")) {
      return str.slice(0, lastDotAt);
    }

    for (var i = lastDotAt - 1; i--;) {
      if (str[i] === ".") {
        return str.slice(i + 1, lastDotAt);
      }
    }
  }

  return null;
}

function traverse(tree1, cb1) {
  var stop2 = {
    now: false
  };

  function traverseInner(treeOriginal, callback, originalInnerObj, stop) {
    var tree = lodash_clonedeep(treeOriginal);
    var res;

    var innerObj = _objectSpread2({
      depth: -1,
      path: ""
    }, originalInnerObj);

    innerObj.depth += 1;

    if (Array.isArray(tree)) {
      for (var i = 0, len = tree.length; i < len; i++) {
        if (stop.now) {
          break;
        }

        var path = innerObj.path ? innerObj.path + "." + i : "" + i;

        if (tree[i] !== undefined) {
          innerObj.parent = lodash_clonedeep(tree);
          innerObj.parentType = "array";
          innerObj.parentKey = parent(path);
          res = traverseInner(callback(tree[i], undefined, _objectSpread2(_objectSpread2({}, innerObj), {}, {
            path: path
          }), stop), callback, _objectSpread2(_objectSpread2({}, innerObj), {}, {
            path: path
          }), stop);

          if (Number.isNaN(res) && i < tree.length) {
            tree.splice(i, 1);
            i -= 1;
          } else {
            tree[i] = res;
          }
        } else {
          tree.splice(i, 1);
        }
      }
    } else if (lodash_isplainobject(tree)) {
      for (var key in tree) {
        if (stop.now && key != null) {
          break;
        }

        var _path = innerObj.path ? innerObj.path + "." + key : key;

        if (innerObj.depth === 0 && key != null) {
          innerObj.topmostKey = key;
        }

        innerObj.parent = lodash_clonedeep(tree);
        innerObj.parentType = "object";
        innerObj.parentKey = parent(_path);
        res = traverseInner(callback(key, tree[key], _objectSpread2(_objectSpread2({}, innerObj), {}, {
          path: _path
        }), stop), callback, _objectSpread2(_objectSpread2({}, innerObj), {}, {
          path: _path
        }), stop);

        if (Number.isNaN(res)) {
          delete tree[key];
        } else {
          tree[key] = res;
        }
      }
    }

    return tree;
  }

  return traverseInner(tree1, cb1, {}, stop2);
}

var escapeStringRegexp = function escapeStringRegexp(string) {
  if (typeof string !== 'string') {
    throw new TypeError('Expected a string');
  } // Escape characters with special meaning either inside or outside character sets.
  // Use a simple backslash escape when it’s always valid, and a \unnnn escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.


  return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
};

var regexpCache = new Map();

function sanitizeArray(input, inputName) {
  if (!Array.isArray(input)) {
    switch (typeof input) {
      case 'string':
        input = [input];
        break;

      case 'undefined':
        input = [];
        break;

      default:
        throw new TypeError("Expected '" + inputName + "' to be a string or an array, but got a type of '" + typeof input + "'");
    }
  }

  return input.filter(function (string) {
    if (typeof string !== 'string') {
      if (typeof string === 'undefined') {
        return false;
      }

      throw new TypeError("Expected '" + inputName + "' to be an array of strings, but found a type of '" + typeof string + "' in the array");
    }

    return true;
  });
}

function makeRegexp(pattern, options) {
  options = _objectSpread2({
    caseSensitive: false
  }, options);
  var cacheKey = pattern + JSON.stringify(options);

  if (regexpCache.has(cacheKey)) {
    return regexpCache.get(cacheKey);
  }

  var negated = pattern[0] === '!';

  if (negated) {
    pattern = pattern.slice(1);
  }

  pattern = escapeStringRegexp(pattern).replace(/\\\*/g, '[\\s\\S]*');
  var regexp = new RegExp("^" + pattern + "$", options.caseSensitive ? '' : 'i');
  regexp.negated = negated;
  regexpCache.set(cacheKey, regexp);
  return regexp;
}

var matcher = function matcher(inputs, patterns, options) {
  inputs = sanitizeArray(inputs, 'inputs');
  patterns = sanitizeArray(patterns, 'patterns');

  if (patterns.length === 0) {
    return [];
  }

  var isFirstPatternNegated = patterns[0][0] === '!';
  patterns = patterns.map(function (pattern) {
    return makeRegexp(pattern, options);
  });
  var result = [];

  for (var _iterator = _createForOfIteratorHelperLoose(inputs), _step; !(_step = _iterator()).done;) {
    var input = _step.value;
    // If first pattern is negated we include everything to match user expectation.
    var matches = isFirstPatternNegated;

    for (var _iterator2 = _createForOfIteratorHelperLoose(patterns), _step2; !(_step2 = _iterator2()).done;) {
      var pattern = _step2.value;

      if (pattern.test(input)) {
        matches = !pattern.negated;
      }
    }

    if (matches) {
      result.push(input);
    }
  }

  return result;
};

var isMatch = function isMatch(inputs, patterns, options) {
  inputs = sanitizeArray(inputs, 'inputs');
  patterns = sanitizeArray(patterns, 'patterns');

  if (patterns.length === 0) {
    return false;
  }

  return inputs.some(function (input) {
    return patterns.every(function (pattern) {
      var regexp = makeRegexp(pattern, options);
      var matches = regexp.test(input);
      return regexp.negated ? !matches : matches;
    });
  });
};
matcher.isMatch = isMatch;

var objectPath = createCommonjsModule(function (module) {
  (function (root, factory) {
    /*istanbul ignore next:cant test*/

    {
      module.exports = factory();
    }
  })(commonjsGlobal, function () {

    var toStr = Object.prototype.toString;

    function hasOwnProperty(obj, prop) {
      if (obj == null) {
        return false;
      } //to handle objects with null prototypes (too edge case?)


      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    function isEmpty(value) {
      if (!value) {
        return true;
      }

      if (isArray(value) && value.length === 0) {
        return true;
      } else if (typeof value !== 'string') {
        for (var i in value) {
          if (hasOwnProperty(value, i)) {
            return false;
          }
        }

        return true;
      }

      return false;
    }

    function toString(type) {
      return toStr.call(type);
    }

    function isObject(obj) {
      return typeof obj === 'object' && toString(obj) === "[object Object]";
    }

    var isArray = Array.isArray || function (obj) {
      /*istanbul ignore next:cant test*/
      return toStr.call(obj) === '[object Array]';
    };

    function isBoolean(obj) {
      return typeof obj === 'boolean' || toString(obj) === '[object Boolean]';
    }

    function getKey(key) {
      var intKey = parseInt(key);

      if (intKey.toString() === key) {
        return intKey;
      }

      return key;
    }

    function factory(options) {
      options = options || {};

      var objectPath = function objectPath(obj) {
        return Object.keys(objectPath).reduce(function (proxy, prop) {
          if (prop === 'create') {
            return proxy;
          }
          /*istanbul ignore else*/


          if (typeof objectPath[prop] === 'function') {
            proxy[prop] = objectPath[prop].bind(objectPath, obj);
          }

          return proxy;
        }, {});
      };

      var hasShallowProperty;

      if (options.includeInheritedProps) {
        hasShallowProperty = function hasShallowProperty() {
          return true;
        };
      } else {
        hasShallowProperty = function hasShallowProperty(obj, prop) {
          return typeof prop === 'number' && Array.isArray(obj) || hasOwnProperty(obj, prop);
        };
      }

      function getShallowProperty(obj, prop) {
        if (hasShallowProperty(obj, prop)) {
          return obj[prop];
        }
      }

      function set(obj, path, value, doNotReplace) {
        if (typeof path === 'number') {
          path = [path];
        }

        if (!path || path.length === 0) {
          return obj;
        }

        if (typeof path === 'string') {
          return set(obj, path.split('.').map(getKey), value, doNotReplace);
        }

        var currentPath = path[0];
        var currentValue = getShallowProperty(obj, currentPath);

        if (options.includeInheritedProps && (currentPath === '__proto__' || currentPath === 'constructor' && typeof currentValue === 'function')) {
          throw new Error('For security reasons, object\'s magic properties cannot be set');
        }

        if (path.length === 1) {
          if (currentValue === void 0 || !doNotReplace) {
            obj[currentPath] = value;
          }

          return currentValue;
        }

        if (currentValue === void 0) {
          //check if we assume an array
          if (typeof path[1] === 'number') {
            obj[currentPath] = [];
          } else {
            obj[currentPath] = {};
          }
        }

        return set(obj[currentPath], path.slice(1), value, doNotReplace);
      }

      objectPath.has = function (obj, path) {
        if (typeof path === 'number') {
          path = [path];
        } else if (typeof path === 'string') {
          path = path.split('.');
        }

        if (!path || path.length === 0) {
          return !!obj;
        }

        for (var i = 0; i < path.length; i++) {
          var j = getKey(path[i]);

          if (typeof j === 'number' && isArray(obj) && j < obj.length || (options.includeInheritedProps ? j in Object(obj) : hasOwnProperty(obj, j))) {
            obj = obj[j];
          } else {
            return false;
          }
        }

        return true;
      };

      objectPath.ensureExists = function (obj, path, value) {
        return set(obj, path, value, true);
      };

      objectPath.set = function (obj, path, value, doNotReplace) {
        return set(obj, path, value, doNotReplace);
      };

      objectPath.insert = function (obj, path, value, at) {
        var arr = objectPath.get(obj, path);
        at = ~~at;

        if (!isArray(arr)) {
          arr = [];
          objectPath.set(obj, path, arr);
        }

        arr.splice(at, 0, value);
      };

      objectPath.empty = function (obj, path) {
        if (isEmpty(path)) {
          return void 0;
        }

        if (obj == null) {
          return void 0;
        }

        var value, i;

        if (!(value = objectPath.get(obj, path))) {
          return void 0;
        }

        if (typeof value === 'string') {
          return objectPath.set(obj, path, '');
        } else if (isBoolean(value)) {
          return objectPath.set(obj, path, false);
        } else if (typeof value === 'number') {
          return objectPath.set(obj, path, 0);
        } else if (isArray(value)) {
          value.length = 0;
        } else if (isObject(value)) {
          for (i in value) {
            if (hasShallowProperty(value, i)) {
              delete value[i];
            }
          }
        } else {
          return objectPath.set(obj, path, null);
        }
      };

      objectPath.push = function (obj, path
      /*, values */
      ) {
        var arr = objectPath.get(obj, path);

        if (!isArray(arr)) {
          arr = [];
          objectPath.set(obj, path, arr);
        }

        arr.push.apply(arr, Array.prototype.slice.call(arguments, 2));
      };

      objectPath.coalesce = function (obj, paths, defaultValue) {
        var value;

        for (var i = 0, len = paths.length; i < len; i++) {
          if ((value = objectPath.get(obj, paths[i])) !== void 0) {
            return value;
          }
        }

        return defaultValue;
      };

      objectPath.get = function (obj, path, defaultValue) {
        if (typeof path === 'number') {
          path = [path];
        }

        if (!path || path.length === 0) {
          return obj;
        }

        if (obj == null) {
          return defaultValue;
        }

        if (typeof path === 'string') {
          return objectPath.get(obj, path.split('.'), defaultValue);
        }

        var currentPath = getKey(path[0]);
        var nextObj = getShallowProperty(obj, currentPath);

        if (nextObj === void 0) {
          return defaultValue;
        }

        if (path.length === 1) {
          return nextObj;
        }

        return objectPath.get(obj[currentPath], path.slice(1), defaultValue);
      };

      objectPath.del = function del(obj, path) {
        if (typeof path === 'number') {
          path = [path];
        }

        if (obj == null) {
          return obj;
        }

        if (isEmpty(path)) {
          return obj;
        }

        if (typeof path === 'string') {
          return objectPath.del(obj, path.split('.'));
        }

        var currentPath = getKey(path[0]);

        if (!hasShallowProperty(obj, currentPath)) {
          return obj;
        }

        if (path.length === 1) {
          if (isArray(obj)) {
            obj.splice(currentPath, 1);
          } else {
            delete obj[currentPath];
          }
        } else {
          return objectPath.del(obj[currentPath], path.slice(1));
        }

        return obj;
      };

      return objectPath;
    }

    var mod = factory();
    mod.create = factory;
    mod.withInheritedProps = factory({
      includeInheritedProps: true
    });
    return mod;
  });
});

/**
 * arrayiffy-if-string
 * Put non-empty strings into arrays, turn empty-ones into empty arrays. Bypass everything else.
 * Version: 3.13.8
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/arrayiffy-if-string/
 */
function arrayiffy(something) {
  if (typeof something === "string") {
    if (something.length) {
      return [something];
    }

    return [];
  }

  return something;
}

function isObj$2(something) {
  return something && typeof something === "object" && !Array.isArray(something);
}

function isStr$3(something) {
  return typeof something === "string";
}

var defaults$6 = {
  cb: undefined,
  i: false,
  trimBeforeMatching: false,
  trimCharsBeforeMatching: [],
  maxMismatches: 0,
  firstMustMatch: false,
  lastMustMatch: false,
  hungry: false
};

var defaultGetNextIdx = function defaultGetNextIdx(index) {
  return index + 1;
};

function march(str, position, whatToMatchVal, originalOpts, special, getNextIdx) {
  if (special === void 0) {
    special = false;
  }

  if (getNextIdx === void 0) {
    getNextIdx = defaultGetNextIdx;
  }

  var whatToMatchValVal = typeof whatToMatchVal === "function" ? whatToMatchVal() : whatToMatchVal;

  if (+position < 0 && special && whatToMatchValVal === "EOL") {
    return whatToMatchValVal;
  }

  var opts = _objectSpread2(_objectSpread2({}, defaults$6), originalOpts);

  if (position >= str.length && !special) {
    return false;
  }

  var charsToCheckCount = special ? 1 : whatToMatchVal.length;
  var charsMatchedTotal = 0;
  var patienceReducedBeforeFirstMatch = false;
  var lastWasMismatched = false;
  var atLeastSomethingWasMatched = false;
  var patience = opts.maxMismatches;
  var i = position;
  var somethingFound = false;
  var firstCharacterMatched = false;
  var lastCharacterMatched = false;

  function whitespaceInFrontOfFirstChar() {
    return charsMatchedTotal === 1 && patience < opts.maxMismatches - 1;
  }

  while (str[i]) {
    var nextIdx = getNextIdx(i);

    if (opts.trimBeforeMatching && str[i].trim() === "") {
      if (!str[nextIdx] && special && whatToMatchVal === "EOL") {
        return true;
      }

      i = getNextIdx(i);
      continue;
    }

    if (opts && !opts.i && opts.trimCharsBeforeMatching && opts.trimCharsBeforeMatching.includes(str[i]) || opts && opts.i && opts.trimCharsBeforeMatching && opts.trimCharsBeforeMatching.map(function (val) {
      return val.toLowerCase();
    }).includes(str[i].toLowerCase())) {
      if (special && whatToMatchVal === "EOL" && !str[nextIdx]) {
        return true;
      }

      i = getNextIdx(i);
      continue;
    }

    var charToCompareAgainst = nextIdx > i ? whatToMatchVal[whatToMatchVal.length - charsToCheckCount] : whatToMatchVal[charsToCheckCount - 1];

    if (!opts.i && str[i] === charToCompareAgainst || opts.i && str[i].toLowerCase() === charToCompareAgainst.toLowerCase()) {
      if (!somethingFound) {
        somethingFound = true;
      }

      if (!atLeastSomethingWasMatched) {
        atLeastSomethingWasMatched = true;
      }

      if (charsToCheckCount === whatToMatchVal.length) {
        firstCharacterMatched = true;

        if (patience !== opts.maxMismatches) {
          return false;
        }
      } else if (charsToCheckCount === 1) {
        lastCharacterMatched = true;
      }

      charsToCheckCount -= 1;
      charsMatchedTotal++;

      if (whitespaceInFrontOfFirstChar()) {
        return false;
      }

      if (!charsToCheckCount) {
        return charsMatchedTotal !== whatToMatchVal.length || patience === opts.maxMismatches || !patienceReducedBeforeFirstMatch ? i : false;
      }
    } else {
      if (!patienceReducedBeforeFirstMatch && !charsMatchedTotal) {
        patienceReducedBeforeFirstMatch = true;
      }

      if (opts.maxMismatches && patience && i) {
        patience -= 1;

        for (var y = 0; y <= patience; y++) {
          var nextCharToCompareAgainst = nextIdx > i ? whatToMatchVal[whatToMatchVal.length - charsToCheckCount + 1 + y] : whatToMatchVal[charsToCheckCount - 2 - y];
          var nextCharInSource = str[getNextIdx(i)];

          if (nextCharToCompareAgainst && (!opts.i && str[i] === nextCharToCompareAgainst || opts.i && str[i].toLowerCase() === nextCharToCompareAgainst.toLowerCase()) && (!opts.firstMustMatch || charsToCheckCount !== whatToMatchVal.length)) {
            charsMatchedTotal++;

            if (whitespaceInFrontOfFirstChar()) {
              return false;
            }

            charsToCheckCount -= 2;
            somethingFound = true;
            break;
          } else if (nextCharInSource && nextCharToCompareAgainst && (!opts.i && nextCharInSource === nextCharToCompareAgainst || opts.i && nextCharInSource.toLowerCase() === nextCharToCompareAgainst.toLowerCase()) && (!opts.firstMustMatch || charsToCheckCount !== whatToMatchVal.length)) {
            if (!charsMatchedTotal && !opts.hungry) {
              return false;
            }

            charsToCheckCount -= 1;
            somethingFound = true;
            break;
          } else if (nextCharToCompareAgainst === undefined && patience >= 0 && somethingFound && (!opts.firstMustMatch || firstCharacterMatched) && (!opts.lastMustMatch || lastCharacterMatched)) {
            return i;
          }
        }

        if (!somethingFound) {
          lastWasMismatched = i;
        }
      } else if (i === 0 && charsToCheckCount === 1 && !opts.lastMustMatch && atLeastSomethingWasMatched) {
        return 0;
      } else {
        return false;
      }
    }

    if (lastWasMismatched !== false && lastWasMismatched !== i) {
      lastWasMismatched = false;
    }

    if (charsToCheckCount < 1) {
      return i;
    }

    i = getNextIdx(i);
  }

  if (charsToCheckCount > 0) {
    if (special && whatToMatchValVal === "EOL") {
      return true;
    }

    if (opts && opts.maxMismatches >= charsToCheckCount && atLeastSomethingWasMatched) {
      return lastWasMismatched || 0;
    }

    return false;
  }
}

function main(mode, str, position, originalWhatToMatch, originalOpts) {
  if (isObj$2(originalOpts) && Object.prototype.hasOwnProperty.call(originalOpts, "trimBeforeMatching") && typeof originalOpts.trimBeforeMatching !== "boolean") {
    throw new Error("string-match-left-right/" + mode + "(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!" + (Array.isArray(originalOpts.trimBeforeMatching) ? " Did you mean to use opts.trimCharsBeforeMatching?" : ""));
  }

  var opts = _objectSpread2(_objectSpread2({}, defaults$6), originalOpts);

  if (typeof opts.trimCharsBeforeMatching === "string") {
    opts.trimCharsBeforeMatching = arrayiffy(opts.trimCharsBeforeMatching);
  }

  opts.trimCharsBeforeMatching = opts.trimCharsBeforeMatching.map(function (el) {
    return isStr$3(el) ? el : String(el);
  });

  if (!isStr$3(str)) {
    return false;
  }

  if (!str.length) {
    return false;
  }

  if (!Number.isInteger(position) || position < 0) {
    throw new Error("string-match-left-right/" + mode + "(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: " + typeof position + ", equal to:\n" + JSON.stringify(position, null, 4));
  }

  var whatToMatch;
  var special;

  if (isStr$3(originalWhatToMatch)) {
    whatToMatch = [originalWhatToMatch];
  } else if (Array.isArray(originalWhatToMatch)) {
    whatToMatch = originalWhatToMatch;
  } else if (!originalWhatToMatch) {
    whatToMatch = originalWhatToMatch;
  } else if (typeof originalWhatToMatch === "function") {
    whatToMatch = [];
    whatToMatch.push(originalWhatToMatch);
  } else {
    throw new Error("string-match-left-right/" + mode + "(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's " + typeof originalWhatToMatch + ", equal to:\n" + JSON.stringify(originalWhatToMatch, null, 4));
  }

  if (originalOpts && !isObj$2(originalOpts)) {
    throw new Error("string-match-left-right/" + mode + "(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type \"" + typeof originalOpts + "\", and equal to:\n" + JSON.stringify(originalOpts, null, 4));
  }

  var culpritsIndex = 0;
  var culpritsVal = "";

  if (opts && opts.trimCharsBeforeMatching && opts.trimCharsBeforeMatching.some(function (el, i) {
    if (el.length > 1) {
      culpritsIndex = i;
      culpritsVal = el;
      return true;
    }

    return false;
  })) {
    throw new Error("string-match-left-right/" + mode + "(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index " + culpritsIndex + " is longer than 1 character, " + culpritsVal.length + " (equals to " + culpritsVal + "). Please split it into separate characters and put into array as separate elements.");
  }

  if (!whatToMatch || !Array.isArray(whatToMatch) || Array.isArray(whatToMatch) && !whatToMatch.length || Array.isArray(whatToMatch) && whatToMatch.length === 1 && isStr$3(whatToMatch[0]) && !whatToMatch[0].trim()) {
    if (typeof opts.cb === "function") {
      var firstCharOutsideIndex;
      var startingPosition = position;

      if (mode === "matchLeftIncl" || mode === "matchRight") {
        startingPosition += 1;
      }

      if (mode[5] === "L") {
        for (var y = startingPosition; y--;) {
          var currentChar = str[y];

          if ((!opts.trimBeforeMatching || opts.trimBeforeMatching && currentChar !== undefined && currentChar.trim()) && (!opts.trimCharsBeforeMatching || !opts.trimCharsBeforeMatching.length || currentChar !== undefined && !opts.trimCharsBeforeMatching.includes(currentChar))) {
            firstCharOutsideIndex = y;
            break;
          }
        }
      } else if (mode.startsWith("matchRight")) {
        for (var _y = startingPosition; _y < str.length; _y++) {
          var _currentChar = str[_y];

          if ((!opts.trimBeforeMatching || opts.trimBeforeMatching && _currentChar.trim()) && (!opts.trimCharsBeforeMatching || !opts.trimCharsBeforeMatching.length || !opts.trimCharsBeforeMatching.includes(_currentChar))) {
            firstCharOutsideIndex = _y;
            break;
          }
        }
      }

      if (firstCharOutsideIndex === undefined) {
        return false;
      }

      var wholeCharacterOutside = str[firstCharOutsideIndex];
      var indexOfTheCharacterAfter = firstCharOutsideIndex + 1;
      var theRemainderOfTheString = "";

      if (indexOfTheCharacterAfter && indexOfTheCharacterAfter > 0) {
        theRemainderOfTheString = str.slice(0, indexOfTheCharacterAfter);
      }

      if (mode[5] === "L") {
        return opts.cb(wholeCharacterOutside, theRemainderOfTheString, firstCharOutsideIndex);
      }

      if (firstCharOutsideIndex && firstCharOutsideIndex > 0) {
        theRemainderOfTheString = str.slice(firstCharOutsideIndex);
      }

      return opts.cb(wholeCharacterOutside, theRemainderOfTheString, firstCharOutsideIndex);
    }

    var extraNote = "";

    if (!originalOpts) {
      extraNote = " More so, the whole options object, the fourth input argument, is missing!";
    }

    throw new Error("string-match-left-right/" + mode + "(): [THROW_ID_08] the third argument, \"whatToMatch\", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key \"cb\" is not set!" + extraNote);
  }

  for (var i = 0, len = whatToMatch.length; i < len; i++) {
    special = typeof whatToMatch[i] === "function";
    var whatToMatchVal = whatToMatch[i];
    var fullCharacterInFront = void 0;
    var indexOfTheCharacterInFront = void 0;
    var restOfStringInFront = "";
    var _startingPosition = position;

    if (mode === "matchRight") {
      _startingPosition += 1;
    } else if (mode === "matchLeft") {
      _startingPosition -= 1;
    }

    var found = march(str, _startingPosition, whatToMatchVal, opts, special, function (i2) {
      return mode[5] === "L" ? i2 - 1 : i2 + 1;
    });

    if (found && special && typeof whatToMatchVal === "function" && whatToMatchVal() === "EOL") {
      return whatToMatchVal() && (opts.cb ? opts.cb(fullCharacterInFront, restOfStringInFront, indexOfTheCharacterInFront) : true) ? whatToMatchVal() : false;
    }

    if (Number.isInteger(found)) {
      indexOfTheCharacterInFront = mode.startsWith("matchLeft") ? found - 1 : found + 1;

      if (mode[5] === "L") {
        restOfStringInFront = str.slice(0, found);
      } else {
        restOfStringInFront = str.slice(indexOfTheCharacterInFront);
      }
    }

    if (indexOfTheCharacterInFront < 0) {
      indexOfTheCharacterInFront = undefined;
    }

    if (str[indexOfTheCharacterInFront]) {
      fullCharacterInFront = str[indexOfTheCharacterInFront];
    }

    if (Number.isInteger(found) && (opts.cb ? opts.cb(fullCharacterInFront, restOfStringInFront, indexOfTheCharacterInFront) : true)) {
      return whatToMatchVal;
    }
  }

  return false;
}

function matchLeftIncl(str, position, whatToMatch, opts) {
  return main("matchLeftIncl", str, position, whatToMatch, opts);
}

function matchRightIncl(str, position, whatToMatch, opts) {
  return main("matchRightIncl", str, position, whatToMatch, opts);
}

function isObj$1(something) {
  return something && typeof something === "object" && !Array.isArray(something);
}

function isStr$2(something) {
  return typeof something === "string";
}

var defaults$5 = {
  fromIndex: 0,
  throwWhenSomethingWrongIsDetected: true,
  allowWholeValueToBeOnlyHeadsOrTails: true,
  source: "string-find-heads-tails",
  matchHeadsAndTailsStrictlyInPairsByTheirOrder: false,
  relaxedAPI: false
};

function strFindHeadsTails(str, heads, tails, originalOpts) {
  if (originalOpts && !isObj$1(originalOpts)) {
    throw new TypeError("string-find-heads-tails: [THROW_ID_01] the fourth input argument, an Optional Options Object, must be a plain object! Currently it's equal to: " + originalOpts + " (type: " + typeof originalOpts + ")");
  }

  var opts = _objectSpread2(_objectSpread2({}, defaults$5), originalOpts);

  if (typeof opts.fromIndex === "string" && /^\d*$/.test(opts.fromIndex)) {
    opts.fromIndex = Number(opts.fromIndex);
  } else if (!Number.isInteger(opts.fromIndex) || opts.fromIndex < 0) {
    throw new TypeError(opts.source + " [THROW_ID_18] the fourth input argument must be a natural number or zero! Currently it's: " + opts.fromIndex);
  }

  if (!isStr$2(str) || str.length === 0) {
    if (opts.relaxedAPI) {
      return [];
    }

    throw new TypeError("string-find-heads-tails: [THROW_ID_02] the first input argument, input string, must be a non-zero-length string! Currently it's: " + typeof str + ", equal to: " + str);
  }

  var culpritsVal;
  var culpritsIndex;

  if (typeof heads !== "string" && !Array.isArray(heads)) {
    if (opts.relaxedAPI) {
      return [];
    }

    throw new TypeError("string-find-heads-tails: [THROW_ID_03] the second input argument, heads, must be either a string or an array of strings! Currently it's: " + typeof heads + ", equal to:\n" + JSON.stringify(heads, null, 4));
  } else if (typeof heads === "string") {
    if (heads.length === 0) {
      if (opts.relaxedAPI) {
        return [];
      }

      throw new TypeError("string-find-heads-tails: [THROW_ID_04] the second input argument, heads, must be a non-empty string! Currently it's empty.");
    } else {
      heads = arrayiffy(heads);
    }
  } else if (Array.isArray(heads)) {
    if (heads.length === 0) {
      if (opts.relaxedAPI) {
        return [];
      }

      throw new TypeError("string-find-heads-tails: [THROW_ID_05] the second input argument, heads, must be a non-empty array and contain at least one string! Currently it's empty.");
    } else if (!heads.every(function (val, index) {
      culpritsVal = val;
      culpritsIndex = index;
      return isStr$2(val);
    })) {
      if (opts.relaxedAPI) {
        heads = heads.filter(function (el) {
          return isStr$2(el) && el.length > 0;
        });

        if (heads.length === 0) {
          return [];
        }
      } else {
        throw new TypeError("string-find-heads-tails: [THROW_ID_06] the second input argument, heads, contains non-string elements! For example, element at " + culpritsIndex + "th index is " + typeof culpritsVal + ", equal to:\n" + JSON.stringify(culpritsVal, null, 4) + ". Whole heads array looks like:\n" + JSON.stringify(heads, null, 4));
      }
    } else if (!heads.every(function (val, index) {
      culpritsIndex = index;
      return isStr$2(val) && val.length > 0 && val.trim() !== "";
    })) {
      if (opts.relaxedAPI) {
        heads = heads.filter(function (el) {
          return isStr$2(el) && el.length > 0;
        });

        if (heads.length === 0) {
          return [];
        }
      } else {
        throw new TypeError("string-find-heads-tails: [THROW_ID_07] the second input argument, heads, should not contain empty strings! For example, there's one detected at index " + culpritsIndex + " of heads array:\n" + JSON.stringify(heads, null, 4) + ".");
      }
    }
  }

  if (!isStr$2(tails) && !Array.isArray(tails)) {
    if (opts.relaxedAPI) {
      return [];
    }

    throw new TypeError("string-find-heads-tails: [THROW_ID_08] the third input argument, tails, must be either a string or an array of strings! Currently it's: " + typeof tails + ", equal to:\n" + JSON.stringify(tails, null, 4));
  } else if (isStr$2(tails)) {
    if (tails.length === 0) {
      if (opts.relaxedAPI) {
        return [];
      }

      throw new TypeError("string-find-heads-tails: [THROW_ID_09] the third input argument, tails, must be a non-empty string! Currently it's empty.");
    } else {
      tails = arrayiffy(tails);
    }
  } else if (Array.isArray(tails)) {
    if (tails.length === 0) {
      if (opts.relaxedAPI) {
        return [];
      }

      throw new TypeError("string-find-heads-tails: [THROW_ID_10] the third input argument, tails, must be a non-empty array and contain at least one string! Currently it's empty.");
    } else if (!tails.every(function (val, index) {
      culpritsVal = val;
      culpritsIndex = index;
      return isStr$2(val);
    })) {
      if (opts.relaxedAPI) {
        tails = tails.filter(function (el) {
          return isStr$2(el) && el.length > 0;
        });

        if (tails.length === 0) {
          return [];
        }
      } else {
        throw new TypeError("string-find-heads-tails: [THROW_ID_11] the third input argument, tails, contains non-string elements! For example, element at " + culpritsIndex + "th index is " + typeof culpritsVal + ", equal to:\n" + JSON.stringify(culpritsVal, null, 4) + ". Whole tails array is equal to:\n" + JSON.stringify(tails, null, 4));
      }
    } else if (!tails.every(function (val, index) {
      culpritsIndex = index;
      return isStr$2(val) && val.length > 0 && val.trim() !== "";
    })) {
      if (opts.relaxedAPI) {
        tails = tails.filter(function (el) {
          return isStr$2(el) && el.length > 0;
        });

        if (tails.length === 0) {
          return [];
        }
      } else {
        throw new TypeError("string-find-heads-tails: [THROW_ID_12] the third input argument, tails, should not contain empty strings! For example, there's one detected at index " + culpritsIndex + ". Whole tails array is equal to:\n" + JSON.stringify(tails, null, 4));
      }
    }
  }

  var s = opts.source === defaults$5.source;

  if (opts.throwWhenSomethingWrongIsDetected && !opts.allowWholeValueToBeOnlyHeadsOrTails) {
    if (arrayiffy(heads).includes(str)) {
      throw new Error("" + opts.source + (s ? ": [THROW_ID_16]" : "") + " the whole input string can't be equal to " + (isStr$2(heads) ? "" : "one of ") + "heads (" + str + ")!");
    } else if (arrayiffy(tails).includes(str)) {
      throw new Error("" + opts.source + (s ? ": [THROW_ID_17]" : "") + " the whole input string can't be equal to " + (isStr$2(tails) ? "" : "one of ") + "tails (" + str + ")!");
    }
  }

  var headsAndTailsFirstCharIndexesRange = heads.concat(tails).map(function (value) {
    return value.charAt(0);
  }).reduce(function (res, val) {
    if (val.charCodeAt(0) > res[1]) {
      return [res[0], val.charCodeAt(0)];
    }

    if (val.charCodeAt(0) < res[0]) {
      return [val.charCodeAt(0), res[1]];
    }

    return res;
  }, [heads[0].charCodeAt(0), heads[0].charCodeAt(0)]);
  var res = [];
  var oneHeadFound = false;
  var tempResObj = {};
  var tailSuspicionRaised = "";
  var strictMatchingIndex;

  for (var i = opts.fromIndex, len = str.length; i < len; i++) {
    var firstCharsIndex = str[i].charCodeAt(0);

    if (firstCharsIndex <= headsAndTailsFirstCharIndexesRange[1] && firstCharsIndex >= headsAndTailsFirstCharIndexesRange[0]) {
      var matchedHeads = matchRightIncl(str, i, heads);

      if (matchedHeads && opts.matchHeadsAndTailsStrictlyInPairsByTheirOrder) {
        for (var z = heads.length; z--;) {
          if (heads[z] === matchedHeads) {
            strictMatchingIndex = z;
            break;
          }
        }
      }

      if (typeof matchedHeads === "string") {
        if (!oneHeadFound) {
          tempResObj = {};
          tempResObj.headsStartAt = i;
          tempResObj.headsEndAt = i + matchedHeads.length;
          oneHeadFound = true;
          i += matchedHeads.length - 1;

          if (tailSuspicionRaised) {
            tailSuspicionRaised = "";
          }

          continue;
        } else if (opts.throwWhenSomethingWrongIsDetected) {
          throw new TypeError("" + opts.source + (s ? ": [THROW_ID_19]" : "") + " When processing \"" + str + "\", we found heads (" + str.slice(i, i + matchedHeads.length) + ") starting at character with index number \"" + i + "\" and there was another set of heads before it! Generally speaking, there should be \"heads-tails-heads-tails\", not \"heads-heads-tails\"!\nWe're talking about the area of the code:\n\n\n--------------------------------------starts\n" + str.slice(Math.max(i - 200, 0), i) + "\n      " + ("\x1B[" + 33 + "m------->\x1B[" + 39 + "m") + " " + ("\x1B[" + 31 + "m" + str.slice(i, i + matchedHeads.length) + "\x1B[" + 39 + "m") + " \x1B[" + 33 + "m" + "<-------" + "\x1B[" + 39 + "m\n" + str.slice(i + matchedHeads.length, Math.min(len, i + 200)) + "\n--------------------------------------ends\n\n\nTo turn off this error being thrown, set opts.throwWhenSomethingWrongIsDetected to Boolean false.");
        }
      }

      var matchedTails = matchRightIncl(str, i, tails);

      if (oneHeadFound && matchedTails && opts.matchHeadsAndTailsStrictlyInPairsByTheirOrder && strictMatchingIndex !== undefined && tails[strictMatchingIndex] !== undefined && tails[strictMatchingIndex] !== matchedTails) {
        var temp = void 0;

        for (var _z = tails.length; _z--;) {
          if (tails[_z] === matchedTails) {
            temp = _z;
            break;
          }
        }

        throw new TypeError("" + opts.source + (s ? ": [THROW_ID_20]" : "") + " When processing \"" + str + "\", we had \"opts.matchHeadsAndTailsStrictlyInPairsByTheirOrder\" on. We found heads (" + heads[strictMatchingIndex] + ") but the tails the followed it were not of the same index, " + strictMatchingIndex + " (" + tails[strictMatchingIndex] + ") but " + temp + " (" + matchedTails + ").");
      }

      if (typeof matchedTails === "string") {
        if (oneHeadFound) {
          tempResObj.tailsStartAt = i;
          tempResObj.tailsEndAt = i + matchedTails.length;
          res.push(tempResObj);
          tempResObj = {};
          oneHeadFound = false;
          i += matchedTails.length - 1;
          continue;
        } else if (opts.throwWhenSomethingWrongIsDetected) {
          tailSuspicionRaised = "" + opts.source + (s ? ": [THROW_ID_21]" : "") + " When processing \"" + str + "\", we found tails (" + str.slice(i, i + matchedTails.length) + ") starting at character with index number \"" + i + "\" but there were no heads preceding it. That's very naughty!";
        }
      }
    }

    if (opts.throwWhenSomethingWrongIsDetected && i === len - 1) {
      if (Object.keys(tempResObj).length !== 0) {
        throw new TypeError("" + opts.source + (s ? ": [THROW_ID_22]" : "") + " When processing \"" + str + "\", we reached the end of the string and yet didn't find any tails (" + JSON.stringify(tails, null, 4) + ") to match the last detected heads (" + str.slice(tempResObj.headsStartAt, tempResObj.headsEndAt) + ")!");
      } else if (tailSuspicionRaised) {
        throw new Error(tailSuspicionRaised);
      }
    }
  }

  return res;
}

/**
 * ast-get-values-by-key
 * Extract values and paths from AST by keys OR set them by keys
 * Version: 3.0.8
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ast-get-values-by-key/
 */

function getByKey(originalInput, whatToFind, originalReplacement) {
  var replacement;

  if (originalReplacement !== undefined) {
    replacement = Array.isArray(originalReplacement) ? lodash_clonedeep(originalReplacement) : [lodash_clonedeep(originalReplacement)];
  }

  var findings = [];
  var amended = traverse(originalInput, function (key, val, innerObj) {
    var current = val !== undefined ? val : key;

    if (val !== undefined && matcher.isMatch(key, whatToFind, {
      caseSensitive: true
    })) {
      if (replacement === undefined) {
        findings.push({
          val: val,
          path: innerObj.path
        });
      } else if (replacement.length) {
        return replacement.shift();
      }
    }

    return current;
  });
  return replacement === undefined ? findings : amended;
}

/**
 * string-collapse-leading-whitespace
 * Collapse the leading and trailing whitespace of a string
 * Version: 5.0.8
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-collapse-leading-whitespace/
 */

function collWhitespace(str, originallineBreakLimit) {
  if (originallineBreakLimit === void 0) {
    originallineBreakLimit = 1;
  }

  var rawNbsp = "\xA0";

  function reverse(s) {
    return Array.from(s).reverse().join("");
  }

  function prep(whitespaceChunk, limit, trailing) {
    var firstBreakChar = trailing ? "\n" : "\r";
    var secondBreakChar = trailing ? "\r" : "\n";

    if (!whitespaceChunk) {
      return whitespaceChunk;
    }

    var crlfCount = 0;
    var res = "";

    for (var i = 0, len = whitespaceChunk.length; i < len; i++) {
      if (whitespaceChunk[i] === firstBreakChar || whitespaceChunk[i] === secondBreakChar && whitespaceChunk[i - 1] !== firstBreakChar) {
        crlfCount++;
      }

      if ("\r\n".includes(whitespaceChunk[i]) || whitespaceChunk[i] === rawNbsp) {
        if (whitespaceChunk[i] === rawNbsp) {
          res += whitespaceChunk[i];
        } else if (whitespaceChunk[i] === firstBreakChar) {
          if (crlfCount <= limit) {
            res += whitespaceChunk[i];

            if (whitespaceChunk[i + 1] === secondBreakChar) {
              res += whitespaceChunk[i + 1];
              i++;
            }
          }
        } else if (whitespaceChunk[i] === secondBreakChar && (!whitespaceChunk[i - 1] || whitespaceChunk[i - 1] !== firstBreakChar) && crlfCount <= limit) {
          res += whitespaceChunk[i];
        }
      } else {
        if (!whitespaceChunk[i + 1] && !crlfCount) {
          res += " ";
        }
      }
    }

    return res;
  }

  if (typeof str === "string" && str.length) {
    var lineBreakLimit = 1;

    if (typeof +originallineBreakLimit === "number" && Number.isInteger(+originallineBreakLimit) && +originallineBreakLimit >= 0) {
      lineBreakLimit = +originallineBreakLimit;
    }

    var frontPart = "";
    var endPart = "";

    if (!str.trim()) {
      frontPart = str;
    } else if (!str[0].trim()) {
      for (var i = 0, len = str.length; i < len; i++) {
        if (str[i].trim()) {
          frontPart = str.slice(0, i);
          break;
        }
      }
    }

    if (str.trim() && (str.slice(-1).trim() === "" || str.slice(-1) === rawNbsp)) {
      for (var _i = str.length; _i--;) {
        if (str[_i].trim()) {
          endPart = str.slice(_i + 1);
          break;
        }
      }
    }

    return "" + prep(frontPart, lineBreakLimit, false) + str.trim() + reverse(prep(reverse(endPart), lineBreakLimit, true));
  }

  return str;
}

var defaults$4 = {
  strictlyTwoElementsInRangeArrays: false,
  progressFn: null
};

function rSort(arrOfRanges, originalOptions) {
  if (!Array.isArray(arrOfRanges) || !arrOfRanges.length) {
    return arrOfRanges;
  }

  var opts = _objectSpread2(_objectSpread2({}, defaults$4), originalOptions);

  var culpritsIndex;
  var culpritsLen;

  if (opts.strictlyTwoElementsInRangeArrays && !arrOfRanges.filter(function (range) {
    return range;
  }).every(function (rangeArr, indx) {
    if (rangeArr.length !== 2) {
      culpritsIndex = indx;
      culpritsLen = rangeArr.length;
      return false;
    }

    return true;
  })) {
    throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, " + culpritsIndex + "th range (" + JSON.stringify(arrOfRanges[culpritsIndex], null, 4) + ") has not two but " + culpritsLen + " elements!");
  }

  if (!arrOfRanges.filter(function (range) {
    return range;
  }).every(function (rangeArr, indx) {
    if (!Number.isInteger(rangeArr[0]) || rangeArr[0] < 0 || !Number.isInteger(rangeArr[1]) || rangeArr[1] < 0) {
      culpritsIndex = indx;
      return false;
    }

    return true;
  })) {
    throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, " + culpritsIndex + "th range (" + JSON.stringify(arrOfRanges[culpritsIndex], null, 4) + ") does not consist of only natural numbers!");
  }

  var maxPossibleIterations = Math.pow(arrOfRanges.filter(function (range) {
    return range;
  }).length, 2);
  var counter = 0;
  return Array.from(arrOfRanges).filter(function (range) {
    return range;
  }).sort(function (range1, range2) {
    if (opts.progressFn) {
      counter += 1;
      opts.progressFn(Math.floor(counter * 100 / maxPossibleIterations));
    }

    if (range1[0] === range2[0]) {
      if (range1[1] < range2[1]) {
        return -1;
      }

      if (range1[1] > range2[1]) {
        return 1;
      }

      return 0;
    }

    if (range1[0] < range2[0]) {
      return -1;
    }

    return 1;
  });
}

var defaults$3 = {
  mergeType: 1,
  progressFn: null,
  joinRangesThatTouchEdges: true
};

function rMerge(arrOfRanges, originalOpts) {
  function isObj(something) {
    return something && typeof something === "object" && !Array.isArray(something);
  }

  if (!Array.isArray(arrOfRanges) || !arrOfRanges.length) {
    return null;
  }

  var opts;

  if (originalOpts) {
    if (isObj(originalOpts)) {
      opts = _objectSpread2(_objectSpread2({}, defaults$3), originalOpts);

      if (opts.progressFn && isObj(opts.progressFn) && !Object.keys(opts.progressFn).length) {
        opts.progressFn = null;
      } else if (opts.progressFn && typeof opts.progressFn !== "function") {
        throw new Error("ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: \"" + typeof opts.progressFn + "\", equal to " + JSON.stringify(opts.progressFn, null, 4));
      }

      if (opts.mergeType && +opts.mergeType !== 1 && +opts.mergeType !== 2) {
        throw new Error("ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: \"" + typeof opts.mergeType + "\", equal to " + JSON.stringify(opts.mergeType, null, 4));
      }

      if (typeof opts.joinRangesThatTouchEdges !== "boolean") {
        throw new Error("ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: \"" + typeof opts.joinRangesThatTouchEdges + "\", equal to " + JSON.stringify(opts.joinRangesThatTouchEdges, null, 4));
      }
    } else {
      throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n" + JSON.stringify(originalOpts, null, 4) + " (type " + typeof originalOpts + ")");
    }
  } else {
    opts = _objectSpread2({}, defaults$3);
  }

  var filtered = arrOfRanges.filter(function (range) {
    return range;
  }).map(function (subarr) {
    return [].concat(subarr);
  }).filter(function (rangeArr) {
    return rangeArr[2] !== undefined || rangeArr[0] !== rangeArr[1];
  });
  var sortedRanges;
  var lastPercentageDone;
  var percentageDone;

  if (opts.progressFn) {
    sortedRanges = rSort(filtered, {
      progressFn: function progressFn(percentage) {
        percentageDone = Math.floor(percentage / 5);

        if (percentageDone !== lastPercentageDone) {
          lastPercentageDone = percentageDone;
          opts.progressFn(percentageDone);
        }
      }
    });
  } else {
    sortedRanges = rSort(filtered);
  }

  if (!sortedRanges) {
    return null;
  }

  var len = sortedRanges.length - 1;

  for (var i = len; i > 0; i--) {
    if (opts.progressFn) {
      percentageDone = Math.floor((1 - i / len) * 78) + 21;

      if (percentageDone !== lastPercentageDone && percentageDone > lastPercentageDone) {
        lastPercentageDone = percentageDone;
        opts.progressFn(percentageDone);
      }
    }

    if (sortedRanges[i][0] <= sortedRanges[i - 1][0] || !opts.joinRangesThatTouchEdges && sortedRanges[i][0] < sortedRanges[i - 1][1] || opts.joinRangesThatTouchEdges && sortedRanges[i][0] <= sortedRanges[i - 1][1]) {
      sortedRanges[i - 1][0] = Math.min(sortedRanges[i][0], sortedRanges[i - 1][0]);
      sortedRanges[i - 1][1] = Math.max(sortedRanges[i][1], sortedRanges[i - 1][1]);

      if (sortedRanges[i][2] !== undefined && (sortedRanges[i - 1][0] >= sortedRanges[i][0] || sortedRanges[i - 1][1] <= sortedRanges[i][1])) {
        if (sortedRanges[i - 1][2] !== null) {
          if (sortedRanges[i][2] === null && sortedRanges[i - 1][2] !== null) {
            sortedRanges[i - 1][2] = null;
          } else if (sortedRanges[i - 1][2] != null) {
            if (+opts.mergeType === 2 && sortedRanges[i - 1][0] === sortedRanges[i][0]) {
              sortedRanges[i - 1][2] = sortedRanges[i][2];
            } else {
              sortedRanges[i - 1][2] += sortedRanges[i][2];
            }
          } else {
            sortedRanges[i - 1][2] = sortedRanges[i][2];
          }
        }
      }

      sortedRanges.splice(i, 1);
      i = sortedRanges.length;
    }
  }

  return sortedRanges.length ? sortedRanges : null;
}

function existy$1(x) {
  return x != null;
}

function isNum$1(something) {
  return Number.isInteger(something) && something >= 0;
}

function isStr$1(something) {
  return typeof something === "string";
}

var defaults$2 = {
  limitToBeAddedWhitespace: false,
  limitLinebreaksCount: 1,
  mergeType: 1
};

var Ranges = /*#__PURE__*/function () {
  function Ranges(originalOpts) {
    var opts = _objectSpread2(_objectSpread2({}, defaults$2), originalOpts);

    if (opts.mergeType && opts.mergeType !== 1 && opts.mergeType !== 2) {
      if (isStr$1(opts.mergeType) && opts.mergeType.trim() === "1") {
        opts.mergeType = 1;
      } else if (isStr$1(opts.mergeType) && opts.mergeType.trim() === "2") {
        opts.mergeType = 2;
      } else {
        throw new Error("ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: \"" + typeof opts.mergeType + "\", equal to " + JSON.stringify(opts.mergeType, null, 4));
      }
    }

    this.opts = opts;
    this.ranges = [];
  }

  var _proto = Ranges.prototype;

  _proto.add = function add(originalFrom, originalTo, addVal) {
    var _this = this;

    if (originalFrom == null && originalTo == null) {
      return;
    }

    if (existy$1(originalFrom) && !existy$1(originalTo)) {
      if (Array.isArray(originalFrom)) {
        if (originalFrom.length) {
          if (originalFrom.some(function (el) {
            return Array.isArray(el);
          })) {
            originalFrom.forEach(function (thing) {
              if (Array.isArray(thing)) {
                _this.add.apply(_this, thing);
              }
            });
            return;
          }

          if (originalFrom.length && isNum$1(+originalFrom[0]) && isNum$1(+originalFrom[1])) {
            this.add.apply(this, originalFrom);
          }
        }

        return;
      }

      throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, \"from\" is set (" + JSON.stringify(originalFrom, null, 0) + ") but second-one, \"to\" is not (" + JSON.stringify(originalTo, null, 0) + ")");
    } else if (!existy$1(originalFrom) && existy$1(originalTo)) {
      throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, \"to\" is set (" + JSON.stringify(originalTo, null, 0) + ") but first-one, \"from\" is not (" + JSON.stringify(originalFrom, null, 0) + ")");
    }

    var from = +originalFrom;
    var to = +originalTo;

    if (isNum$1(addVal)) {
      addVal = String(addVal);
    }

    if (isNum$1(from) && isNum$1(to)) {
      if (existy$1(addVal) && !isStr$1(addVal) && !isNum$1(addVal)) {
        throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but " + typeof addVal + ", equal to:\n" + JSON.stringify(addVal, null, 4));
      }

      if (existy$1(this.ranges) && Array.isArray(this.last()) && from === this.last()[1]) {
        this.last()[1] = to;
        if (this.last()[2] === null || addVal === null) ;

        if (this.last()[2] !== null && existy$1(addVal)) {
          var calculatedVal = this.last()[2] && this.last()[2].length > 0 && (!this.opts || !this.opts.mergeType || this.opts.mergeType === 1) ? this.last()[2] + addVal : addVal;

          if (this.opts.limitToBeAddedWhitespace) {
            calculatedVal = collWhitespace(calculatedVal, this.opts.limitLinebreaksCount);
          }

          if (!(isStr$1(calculatedVal) && !calculatedVal.length)) {
            this.last()[2] = calculatedVal;
          }
        }
      } else {
        if (!this.ranges) {
          this.ranges = [];
        }

        var whatToPush = addVal !== undefined && !(isStr$1(addVal) && !addVal.length) ? [from, to, addVal && this.opts.limitToBeAddedWhitespace ? collWhitespace(addVal, this.opts.limitLinebreaksCount) : addVal] : [from, to];
        this.ranges.push(whatToPush);
      }
    } else {
      if (!(isNum$1(from) && from >= 0)) {
        throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_09] \"from\" value, the first input argument, must be a natural number or zero! Currently it's of a type \"" + typeof from + "\" equal to: " + JSON.stringify(from, null, 4));
      } else {
        throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_10] \"to\" value, the second input argument, must be a natural number or zero! Currently it's of a type \"" + typeof to + "\" equal to: " + JSON.stringify(to, null, 4));
      }
    }
  };

  _proto.push = function push(originalFrom, originalTo, addVal) {
    this.add(originalFrom, originalTo, addVal);
  };

  _proto.current = function current() {
    var _this2 = this;

    if (Array.isArray(this.ranges) && this.ranges.length) {
      this.ranges = rMerge(this.ranges, {
        mergeType: this.opts.mergeType
      });

      if (this.ranges && this.opts.limitToBeAddedWhitespace) {
        return this.ranges.map(function (val) {
          if (existy$1(val[2])) {
            return [val[0], val[1], collWhitespace(val[2], _this2.opts.limitLinebreaksCount)];
          }

          return val;
        });
      }

      return this.ranges;
    }

    return null;
  };

  _proto.wipe = function wipe() {
    this.ranges = [];
  };

  _proto.replace = function replace(givenRanges) {
    if (Array.isArray(givenRanges) && givenRanges.length) {
      if (!(Array.isArray(givenRanges[0]) && isNum$1(givenRanges[0][0]))) {
        throw new Error("ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, " + JSON.stringify(givenRanges[0], null, 4) + " should be an array and its first element should be an integer, a string index.");
      } else {
        this.ranges = Array.from(givenRanges);
      }
    } else {
      this.ranges = [];
    }
  };

  _proto.last = function last() {
    if (Array.isArray(this.ranges) && this.ranges.length) {
      return this.ranges[this.ranges.length - 1];
    }

    return null;
  };

  return Ranges;
}();

/**
 * ranges-apply
 * Take an array of string index ranges, delete/replace the string according to them
 * Version: 5.0.8
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ranges-apply/
 */

function rApply(str, originalRangesArr, _progressFn) {
  var percentageDone = 0;
  var lastPercentageDone = 0;

  if (arguments.length === 0) {
    throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");
  }

  if (typeof str !== "string") {
    throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: " + typeof str + ", equal to: " + JSON.stringify(str, null, 4));
  }

  if (originalRangesArr && !Array.isArray(originalRangesArr)) {
    throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: " + typeof originalRangesArr + ", equal to: " + JSON.stringify(originalRangesArr, null, 4));
  }

  if (_progressFn && typeof _progressFn !== "function") {
    throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: " + typeof _progressFn + ", equal to: " + JSON.stringify(_progressFn, null, 4));
  }

  if (!originalRangesArr || !originalRangesArr.filter(function (range) {
    return range;
  }).length) {
    return str;
  }

  var rangesArr;

  if (Array.isArray(originalRangesArr) && Number.isInteger(originalRangesArr[0]) && Number.isInteger(originalRangesArr[1])) {
    rangesArr = [Array.from(originalRangesArr)];
  } else {
    rangesArr = Array.from(originalRangesArr);
  }

  var len = rangesArr.length;
  var counter = 0;
  rangesArr.filter(function (range) {
    return range;
  }).forEach(function (el, i) {
    if (_progressFn) {
      percentageDone = Math.floor(counter / len * 10);
      /* istanbul ignore else */

      if (percentageDone !== lastPercentageDone) {
        lastPercentageDone = percentageDone;

        _progressFn(percentageDone);
      }
    }

    if (!Array.isArray(el)) {
      throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has " + i + "th element not an array: " + JSON.stringify(el, null, 4) + ", which is " + typeof el);
    }

    if (!Number.isInteger(el[0])) {
      if (!Number.isInteger(+el[0]) || +el[0] < 0) {
        throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has " + i + "th element, array " + JSON.stringify(el, null, 0) + ". Its first element is not an integer, string index, but " + typeof el[0] + ", equal to: " + JSON.stringify(el[0], null, 4) + ".");
      } else {
        rangesArr[i][0] = +rangesArr[i][0];
      }
    }

    if (!Number.isInteger(el[1])) {
      if (!Number.isInteger(+el[1]) || +el[1] < 0) {
        throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has " + i + "th element, array " + JSON.stringify(el, null, 0) + ". Its second element is not an integer, string index, but " + typeof el[1] + ", equal to: " + JSON.stringify(el[1], null, 4) + ".");
      } else {
        rangesArr[i][1] = +rangesArr[i][1];
      }
    }

    counter += 1;
  });
  var workingRanges = rMerge(rangesArr, {
    progressFn: function progressFn(perc) {
      if (_progressFn) {
        percentageDone = 10 + Math.floor(perc / 10);
        /* istanbul ignore else */

        if (percentageDone !== lastPercentageDone) {
          lastPercentageDone = percentageDone;

          _progressFn(percentageDone);
        }
      }
    }
  });
  var len2 = Array.isArray(workingRanges) ? workingRanges.length : 0;
  /* istanbul ignore else */

  if (len2 > 0) {
    var tails = str.slice(workingRanges[len2 - 1][1]);
    str = workingRanges.reduce(function (acc, _val, i, arr) {
      if (_progressFn) {
        percentageDone = 20 + Math.floor(i / len2 * 80);
        /* istanbul ignore else */

        if (percentageDone !== lastPercentageDone) {
          lastPercentageDone = percentageDone;

          _progressFn(percentageDone);
        }
      }

      var beginning = i === 0 ? 0 : arr[i - 1][1];
      var ending = arr[i][0];
      return acc + str.slice(beginning, ending) + (arr[i][2] || "");
    }, "");
    str += tails;
  }

  return str;
}

var defaults$1 = {
  classicTrim: false,
  cr: false,
  lf: false,
  tab: false,
  space: true,
  nbsp: false
};

function trimSpaces(str, originalOpts) {
  if (typeof str !== "string") {
    throw new Error("string-trim-spaces-only: [THROW_ID_01] input must be string! It was given as " + typeof str + ", equal to:\n" + JSON.stringify(str, null, 4));
  }

  var opts = _objectSpread2(_objectSpread2({}, defaults$1), originalOpts);

  function check(char) {
    return opts.classicTrim && !char.trim() || !opts.classicTrim && (opts.space && char === " " || opts.cr && char === "\r" || opts.lf && char === "\n" || opts.tab && char === "\t" || opts.nbsp && char === "\xA0");
  }

  var newStart;
  var newEnd;

  if (str.length) {
    if (check(str[0])) {
      for (var i = 0, len = str.length; i < len; i++) {
        if (!check(str[i])) {
          newStart = i;
          break;
        }

        if (i === str.length - 1) {
          return {
            res: "",
            ranges: [[0, str.length]]
          };
        }
      }
    }

    if (check(str[str.length - 1])) {
      for (var _i = str.length; _i--;) {
        if (!check(str[_i])) {
          newEnd = _i + 1;
          break;
        }
      }
    }

    if (newStart) {
      if (newEnd) {
        return {
          res: str.slice(newStart, newEnd),
          ranges: [[0, newStart], [newEnd, str.length]]
        };
      }

      return {
        res: str.slice(newStart),
        ranges: [[0, newStart]]
      };
    }

    if (newEnd) {
      return {
        res: str.slice(0, newEnd),
        ranges: [[newEnd, str.length]]
      };
    }

    return {
      res: str,
      ranges: []
    };
  }

  return {
    res: "",
    ranges: []
  };
}

function remDup(str, originalOpts) {
  var has = Object.prototype.hasOwnProperty;

  if (str === undefined) {
    throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_01] The input is missing!");
  }

  if (typeof str !== "string") {
    return str;
  }

  if (originalOpts && !lodash_isplainobject(originalOpts)) {
    throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_03] The given options are not a plain object but " + typeof originalOpts + "!");
  }

  var clonedOriginalOpts = _objectSpread2({}, originalOpts);

  if (clonedOriginalOpts && has.call(clonedOriginalOpts, "heads")) {
    if (!arrayiffy(clonedOriginalOpts.heads).every(function (val) {
      return typeof val === "string" || Array.isArray(val);
    })) {
      throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_04] The opts.heads contains elements which are not string-type!");
    } else if (typeof clonedOriginalOpts.heads === "string") {
      clonedOriginalOpts.heads = arrayiffy(clonedOriginalOpts.heads);
    }
  }

  if (clonedOriginalOpts && has.call(clonedOriginalOpts, "tails")) {
    if (!arrayiffy(clonedOriginalOpts.tails).every(function (val) {
      return typeof val === "string" || Array.isArray(val);
    })) {
      throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_05] The opts.tails contains elements which are not string-type!");
    } else if (typeof clonedOriginalOpts.tails === "string") {
      clonedOriginalOpts.tails = arrayiffy(clonedOriginalOpts.tails);
    }
  }

  var temp = trimSpaces(str).res;

  if (temp.length === 0) {
    return str;
  }

  str = temp;
  var defaults = {
    heads: ["{{"],
    tails: ["}}"]
  };

  var opts = _objectSpread2(_objectSpread2({}, defaults), clonedOriginalOpts);

  opts.heads = opts.heads.map(function (el) {
    return el.trim();
  });
  opts.tails = opts.tails.map(function (el) {
    return el.trim();
  });
  var firstNonMarkerChunkFound = false;
  var secondNonMarkerChunkFound = false;
  var realRanges = new Ranges({
    limitToBeAddedWhitespace: true
  });
  var conditionalRanges = new Ranges({
    limitToBeAddedWhitespace: true
  });
  var itsFirstTail = true;
  var itsFirstLetter = true;
  var lastMatched = "";

  function delLeadingEmptyHeadTailChunks(str1, opts1) {
    var noteDownTheIndex;
    var resultOfAttemptToMatchHeads = matchRightIncl(str1, 0, opts1.heads, {
      trimBeforeMatching: true,
      cb: function cb(_char, _theRemainderOfTheString, index) {
        noteDownTheIndex = index;
        return true;
      }
    });

    if (!resultOfAttemptToMatchHeads) {
      return str1;
    }

    var resultOfAttemptToMatchTails = matchRightIncl(str1, noteDownTheIndex, opts1.tails, {
      trimBeforeMatching: true,
      cb: function cb(_char, _theRemainderOfTheString, index) {
        noteDownTheIndex = index;
        return true;
      }
    });

    if (resultOfAttemptToMatchTails) {
      return str1.slice(noteDownTheIndex);
    }

    return str1;
  }

  while (str !== delLeadingEmptyHeadTailChunks(str, opts)) {
    str = trimSpaces(delLeadingEmptyHeadTailChunks(str, opts)).res;
  }

  function delTrailingEmptyHeadTailChunks(str1, opts1) {
    var noteDownTheIndex;
    var resultOfAttemptToMatchTails = matchLeftIncl(str1, str1.length - 1, opts1.tails, {
      trimBeforeMatching: true,
      cb: function cb(_char, _theRemainderOfTheString, index) {
        noteDownTheIndex = index;
        return true;
      }
    });

    if (!resultOfAttemptToMatchTails || !noteDownTheIndex) {
      return str1;
    }

    var resultOfAttemptToMatchHeads = matchLeftIncl(str1, noteDownTheIndex, opts1.heads, {
      trimBeforeMatching: true,
      cb: function cb(_char, _theRemainderOfTheString, index) {
        noteDownTheIndex = index;
        return true;
      }
    });

    if (resultOfAttemptToMatchHeads) {
      return str1.slice(0, noteDownTheIndex + 1);
    }

    return str1;
  }

  while (str !== delTrailingEmptyHeadTailChunks(str, opts)) {
    str = trimSpaces(delTrailingEmptyHeadTailChunks(str, opts)).res;
  }

  if (!opts.heads.length || !matchRightIncl(str, 0, opts.heads, {
    trimBeforeMatching: true
  }) || !opts.tails.length || !matchLeftIncl(str, str.length - 1, opts.tails, {
    trimBeforeMatching: true
  })) {
    return trimSpaces(str).res;
  }

  for (var i = 0, len = str.length; i < len; i++) {
    if (str[i].trim() === "") ;else {
      var noteDownTheIndex = void 0;
      var resultOfAttemptToMatchHeads = matchRightIncl(str, i, opts.heads, {
        trimBeforeMatching: true,
        cb: function cb(_char, _theRemainderOfTheString, index) {
          noteDownTheIndex = index;
          return true;
        }
      });

      if (resultOfAttemptToMatchHeads && noteDownTheIndex) {
        itsFirstLetter = true;

        if (itsFirstTail) {
          itsFirstTail = true;
        }

        var tempIndexUpTo = void 0;

        var _resultOfAttemptToMatchTails = matchRightIncl(str, noteDownTheIndex, opts.tails, {
          trimBeforeMatching: true,
          cb: function cb(_char, _theRemainderOfTheString, index) {
            tempIndexUpTo = index;
            return true;
          }
        });

        if (_resultOfAttemptToMatchTails) {
          realRanges.push(i, tempIndexUpTo);
        }

        if (conditionalRanges.current() && firstNonMarkerChunkFound && lastMatched !== "tails") {
          realRanges.push(conditionalRanges.current());
        }

        if (!firstNonMarkerChunkFound) {
          if (conditionalRanges.current()) {
            realRanges.push(conditionalRanges.current());
            conditionalRanges.wipe();
          }

          conditionalRanges.push(i, noteDownTheIndex);
        } else {
          conditionalRanges.push(i, noteDownTheIndex);
        }

        lastMatched = "heads";
        i = noteDownTheIndex - 1;
        continue;
      }

      var resultOfAttemptToMatchTails = matchRightIncl(str, i, opts.tails, {
        trimBeforeMatching: true,
        cb: function cb(_char, _theRemainderOfTheString, index) {
          noteDownTheIndex = Number.isInteger(index) ? index : str.length;
          return true;
        }
      });

      if (resultOfAttemptToMatchTails && noteDownTheIndex) {
        itsFirstLetter = true;

        if (!itsFirstTail) {
          conditionalRanges.push(i, noteDownTheIndex);
        } else {
          if (lastMatched === "heads") {
            conditionalRanges.wipe();
          }

          itsFirstTail = false;
        }

        lastMatched = "tails";
        i = noteDownTheIndex - 1;
        continue;
      }

      if (itsFirstTail) {
        itsFirstTail = true;
      }

      if (itsFirstLetter && !firstNonMarkerChunkFound) {
        firstNonMarkerChunkFound = true;
        itsFirstLetter = false;
      } else if (itsFirstLetter && !secondNonMarkerChunkFound) {
        secondNonMarkerChunkFound = true;
        itsFirstTail = true;
        itsFirstLetter = false;

        if (lastMatched === "heads") {
          conditionalRanges.wipe();
        }
      } else if (itsFirstLetter && secondNonMarkerChunkFound) {
        conditionalRanges.wipe();
      }
    }
  }

  if (conditionalRanges.current()) {
    realRanges.push(conditionalRanges.current());
  }

  if (realRanges.current()) {
    return rApply(str, realRanges.current()).trim();
  }

  return str.trim();
}

var version$1 = "10.0.8";

var version = version$1;
var has = Object.prototype.hasOwnProperty;
var defaults = {
  heads: "%%_",
  tails: "_%%",
  headsNoWrap: "%%-",
  tailsNoWrap: "-%%",
  lookForDataContainers: true,
  dataContainerIdentifierTails: "_data",
  wrapHeadsWith: "",
  wrapTailsWith: "",
  dontWrapVars: [],
  preventDoubleWrapping: true,
  wrapGlobalFlipSwitch: true,
  noSingleMarkers: false,
  // don't throw mismatched marker error.
  resolveToBoolIfAnyValuesContainBool: true,
  // anything that contains or is equal to Boolean false, set the whole thing to false
  resolveToFalseIfAnyValuesContainBool: true,
  // even if some values contain Boolean true. Otherwise, the whole value will
  // resolve to the first encountered Boolean.
  throwWhenNonStringInsertedInString: false,
  allowUnresolved: false // Allow value to not have a resolved variable

}; // -----------------------------------------------------------------------------
//                       H E L P E R   F U N C T I O N S
// -----------------------------------------------------------------------------

function isStr(something) {
  return typeof something === "string";
}

function isNum(something) {
  return typeof something === "number";
}

function isBool(something) {
  return typeof something === "boolean";
}

function isNull(something) {
  return something === null;
}

function isObj(something) {
  return something && typeof something === "object" && !Array.isArray(something);
}

function existy(x) {
  return x != null;
}

function trimIfString(something) {
  return isStr(something) ? something.trim() : something;
}

function getTopmostKey(str) {
  if (typeof str === "string" && str.length > 0 && str.indexOf(".") !== -1) {
    for (var i = 0, len = str.length; i < len; i++) {
      if (str[i] === ".") {
        return str.slice(0, i);
      }
    }
  }

  return str;
}

function withoutTopmostKey(str) {
  if (typeof str === "string" && str.length > 0 && str.indexOf(".") !== -1) {
    for (var i = 0, len = str.length; i < len; i++) {
      if (str[i] === ".") {
        return str.slice(i + 1);
      }
    }
  }

  return str;
}

function goLevelUp(str) {
  if (typeof str === "string" && str.length > 0 && str.indexOf(".") !== -1) {
    for (var i = str.length; i--;) {
      if (str[i] === ".") {
        return str.slice(0, i);
      }
    }
  }

  return str;
}

function getLastKey(str) {
  if (typeof str === "string" && str.length > 0 && str.indexOf(".") !== -1) {
    for (var i = str.length; i--;) {
      if (str[i] === ".") {
        return str.slice(i + 1);
      }
    }
  }

  return str;
}

function containsHeadsOrTails(str, opts) {
  if (typeof str !== "string" || !str.trim()) {
    return false;
  }

  if (str.includes(opts.heads) || str.includes(opts.tails) || isStr(opts.headsNoWrap) && opts.headsNoWrap.length > 0 && str.includes(opts.headsNoWrap) || isStr(opts.tailsNoWrap) && opts.tailsNoWrap.length > 0 && str.includes(opts.tailsNoWrap)) {
    return true;
  }

  return false;
}

function removeWrappingHeadsAndTails(str, heads, tails) {
  var tempFrom;
  var tempTo;

  if (typeof str === "string" && str.length > 0 && matchRightIncl(str, 0, heads, {
    trimBeforeMatching: true,
    cb: function cb(_c, _t, index) {
      tempFrom = index;
      return true;
    }
  }) && matchLeftIncl(str, str.length - 1, tails, {
    trimBeforeMatching: true,
    cb: function cb(_c, _t, index) {
      tempTo = index + 1;
      return true;
    }
  })) {
    return str.slice(tempFrom, tempTo);
  }

  return str;
}

function wrap(placementValue, opts, dontWrapTheseVars, breadCrumbPath, newPath, oldVarName) {
  if (dontWrapTheseVars === void 0) {
    dontWrapTheseVars = false;
  } // opts validation

  if (!opts.wrapHeadsWith) {
    // eslint-disable-next-line no-param-reassign
    opts.wrapHeadsWith = "";
  }

  if (!opts.wrapTailsWith) {
    // eslint-disable-next-line no-param-reassign
    opts.wrapTailsWith = "";
  } // main opts


  if (isStr(placementValue) && !dontWrapTheseVars && opts.wrapGlobalFlipSwitch && !opts.dontWrapVars.some(function (val) {
    return matcher.isMatch(oldVarName, val);
  }) && ( // considering double-wrapping prevention setting:
  !opts.preventDoubleWrapping || opts.preventDoubleWrapping && isStr(placementValue) && !placementValue.includes(opts.wrapHeadsWith) && !placementValue.includes(opts.wrapTailsWith))) {
    return opts.wrapHeadsWith + placementValue + opts.wrapTailsWith;
  }

  if (dontWrapTheseVars) {

    if (!isStr(placementValue)) {
      return placementValue;
    }

    var tempValue = remDup(placementValue, {
      heads: opts.wrapHeadsWith,
      tails: opts.wrapTailsWith
    });

    if (!isStr(tempValue)) {
      return tempValue;
    }

    return removeWrappingHeadsAndTails(tempValue, opts.wrapHeadsWith, opts.wrapTailsWith);
  }
  return placementValue;
}

function findValues(input, varName, path, opts) {
  var resolveValue; // 1.1. first, traverse up to root level, looking for key right at that level
  // or within data store, respecting the config

  if (path.indexOf(".") !== -1) {
    var currentPath = path; // traverse upwards:

    var handBrakeOff = true; // first, check the current level's datastore:

    if (opts.lookForDataContainers && typeof opts.dataContainerIdentifierTails === "string" && opts.dataContainerIdentifierTails.length > 0 && !currentPath.endsWith(opts.dataContainerIdentifierTails)) {
      // 1.1.1. first check data store
      var gotPath = objectPath.get(input, currentPath + opts.dataContainerIdentifierTails);

      if (isObj(gotPath) && objectPath.get(gotPath, varName)) {
        resolveValue = objectPath.get(gotPath, varName);
        handBrakeOff = false;
      }
    } // then, start traversing up:


    while (handBrakeOff && currentPath.indexOf(".") !== -1) {
      currentPath = goLevelUp(currentPath);

      if (getLastKey(currentPath) === varName) {
        throw new Error("json-variables/findValues(): [THROW_ID_20] While trying to resolve: \"" + varName + "\" at path \"" + path + "\", we encountered a closed loop. The parent key \"" + getLastKey(currentPath) + "\" is called the same as the variable \"" + varName + "\" we're looking for.");
      } // first, check the current level's datastore:

      if (opts.lookForDataContainers && typeof opts.dataContainerIdentifierTails === "string" && opts.dataContainerIdentifierTails.length > 0 && !currentPath.endsWith(opts.dataContainerIdentifierTails)) {
        // 1.1.1. first check data store

        var _gotPath = objectPath.get(input, currentPath + opts.dataContainerIdentifierTails);

        if (isObj(_gotPath) && objectPath.get(_gotPath, varName)) {
          resolveValue = objectPath.get(_gotPath, varName);
          handBrakeOff = false;
        }
      }

      if (resolveValue === undefined) { // 1.1.2. second check for key straight in parent level

        var _gotPath2 = objectPath.get(input, currentPath);

        if (isObj(_gotPath2) && objectPath.get(_gotPath2, varName)) {
          resolveValue = objectPath.get(_gotPath2, varName);
          handBrakeOff = false;
        }
      }
    }
  } // 1.2. Reading this point means that maybe we were already at the root level,
  // maybe we traversed up to root and couldn't resolve anything.
  // Either way, let's check keys and data store at the root level:


  if (resolveValue === undefined) {

    var _gotPath3 = objectPath.get(input, varName);

    if (_gotPath3 !== undefined) {
      resolveValue = _gotPath3;
    }
  } // 1.3. Last resort, just look for key ANYWHERE, as long as it's named as
  // our variable name's topmost key (if it's a path with dots) or equal to key entirely (no dots)


  if (resolveValue === undefined) { // 1.3.1. It depends, does the varName we're looking for have dot or not.
    // - Because if it does, it's a path and we'll have to split the search into two
    // parts: first find topmost key, then query it's children path part via
    // object-path.
    // - If it does not have a dot, it's straightforward, pick first string
    // finding out of getByKey().
    // it's not a path (does not contain dots)

    if (varName.indexOf(".") === -1) {
      var gotPathArr = getByKey(input, varName);

      if (gotPathArr.length > 0) {
        for (var y = 0, len2 = gotPathArr.length; y < len2; y++) {
          if (isStr(gotPathArr[y].val) || isBool(gotPathArr[y].val) || isNull(gotPathArr[y].val)) {
            resolveValue = gotPathArr[y].val;
            break;
          } else if (isNum(gotPathArr[y].val)) {
            resolveValue = String(gotPathArr[y].val);
            break;
          } else if (Array.isArray(gotPathArr[y].val)) {
            resolveValue = gotPathArr[y].val.join("");
            break;
          } else {
            throw new Error("json-variables/findValues(): [THROW_ID_21] While trying to resolve: \"" + varName + "\" at path \"" + path + "\", we actually found the key named " + varName + ", but it was not equal to a string but to:\n" + JSON.stringify(gotPathArr[y], null, 4) + "\nWe can't resolve a string with that! It should be a string.");
          }
        }
      }
    } else {
      // it's a path (contains dots)
      var _gotPath4 = getByKey(input, getTopmostKey(varName));

      if (_gotPath4.length > 0) {
        for (var _y = 0, _len = _gotPath4.length; _y < _len; _y++) {
          var temp = objectPath.get(_gotPath4[_y].val, withoutTopmostKey(varName));

          if (temp && isStr(temp)) {
            resolveValue = temp;
          }
        }
      }
    }
  }
  return resolveValue;
} // Explanation of the resolveString() function's inputs.
// Heads or tails were detected in the "string", which is located in the "path"
// within "input" (JSON object normally, an AST). All the settings are in "opts".
// Since this function will be called recursively, we have to keep a breadCrumbPath -
// all keys visited so far and always check, was the current key not been
// traversed already (present in breadCrumbPath). Otherwise, we might get into a
// closed loop.


function resolveString(input, string, path, opts, incomingBreadCrumbPath) {
  if (incomingBreadCrumbPath === void 0) {
    incomingBreadCrumbPath = [];
  } // precautions from recursion

  if (incomingBreadCrumbPath.includes(path)) {
    var extra = "";

    if (incomingBreadCrumbPath.length > 1) {
      // extra = ` Here's the path we travelled up until we hit the recursion: ${incomingBreadCrumbPath.join(' - ')}.`
      var separator = " →\n";
      extra = incomingBreadCrumbPath.reduce(function (accum, curr, idx) {
        return accum + (idx === 0 ? "" : separator) + (curr === path ? "💥 " : "  ") + curr;
      }, " Here's the path we travelled up until we hit the recursion:\n\n");
      extra += separator + "\uD83D\uDCA5 " + path;
    }

    throw new Error("json-variables/resolveString(): [THROW_ID_19] While trying to resolve: \"" + string + "\" at path \"" + path + "\", we encountered a closed loop, the key is referencing itself.\"" + extra);
  } // The Secret Data Stash, a way to cache previously resolved values and reuse the
  // values, saving resources. It can't be on the root because it would get retained
  // between different calls on the library, potentially giving wrong results (from
  // the previous resolved variable, from the previous function call).


  var secretResolvedVarsStash = {}; // 0. Add current path into breadCrumbPath
  // =======================================

  var breadCrumbPath = Array.from(incomingBreadCrumbPath);
  breadCrumbPath.push(path); // 1. First, extract all vars
  // ==========================

  var finalRangesArr = new Ranges();

  function processHeadsAndTails(arr, dontWrapTheseVars, wholeValueIsVariable) {
    for (var i = 0, len = arr.length; i < len; i++) {
      var obj = arr[i];
      var varName = string.slice(obj.headsEndAt, obj.tailsStartAt);

      if (varName.length === 0) {
        finalRangesArr.push(obj.headsStartAt, // replace from index
        obj.tailsEndAt // replace upto index - no third argument, just deletion of heads/tails
        );
      } else if (has.call(secretResolvedVarsStash, varName) && isStr(secretResolvedVarsStash[varName])) {
        // check, maybe the value was already resolved before and present in secret stash:
        finalRangesArr.push(obj.headsStartAt, // replace from index
        obj.tailsEndAt, // replace upto index
        secretResolvedVarsStash[varName] // replacement value
        );
      } else {
        // it's not in the stash unfortunately, so let's search for it then:
        var resolvedValue = findValues(input, // input
        varName.trim(), // varName
        path, // path
        opts // opts
        );

        if (resolvedValue === undefined) {
          if (opts.allowUnresolved === true) {
            resolvedValue = "";
          } else if (typeof opts.allowUnresolved === "string") {
            resolvedValue = opts.allowUnresolved;
          } else {
            throw new Error("json-variables/processHeadsAndTails(): [THROW_ID_18] We couldn't find the value to resolve the variable " + string.slice(obj.headsEndAt, obj.tailsStartAt) + ". We're at path: \"" + path + "\".");
          }
        }

        if (!wholeValueIsVariable && opts.throwWhenNonStringInsertedInString && !isStr(resolvedValue)) {
          throw new Error("json-variables/processHeadsAndTails(): [THROW_ID_23] While resolving the variable " + string.slice(obj.headsEndAt, obj.tailsStartAt) + " at path " + path + ", it resolved into a non-string value, " + JSON.stringify(resolvedValue, null, 4) + ". This is happening because options setting \"throwWhenNonStringInsertedInString\" is active (set to \"true\").");
        }

        if (isBool(resolvedValue)) {
          if (opts.resolveToBoolIfAnyValuesContainBool) {
            finalRangesArr.wipe();

            if (!opts.resolveToFalseIfAnyValuesContainBool) {
              return resolvedValue;
            }

            return false;
          }

          resolvedValue = "";
        } else if (isNull(resolvedValue) && wholeValueIsVariable) {
          finalRangesArr.wipe();
          return resolvedValue;
        } else if (Array.isArray(resolvedValue)) {
          resolvedValue = String(resolvedValue.join(""));
        } else if (isNull(resolvedValue)) {
          resolvedValue = "";
        } else {
          resolvedValue = String(resolvedValue);
        }
        var newPath = path.includes(".") ? goLevelUp(path) + "." + varName : varName;

        if (containsHeadsOrTails(resolvedValue, opts)) {
          var replacementVal = wrap(resolveString( // replacement value    <--------- R E C U R S I O N
          input, resolvedValue, newPath, opts, breadCrumbPath), opts, dontWrapTheseVars, breadCrumbPath, newPath, varName.trim());

          if (isStr(replacementVal)) {
            finalRangesArr.push(obj.headsStartAt, // replace from index
            obj.tailsEndAt, // replace upto index
            replacementVal);
          }
        } else {
          // 1. store it in the stash for the future
          secretResolvedVarsStash[varName] = resolvedValue;

          var _replacementVal = wrap(resolvedValue, opts, dontWrapTheseVars, breadCrumbPath, newPath, varName.trim()); // replacement value


          if (isStr(_replacementVal)) {
            // 2. submit to be replaced
            finalRangesArr.push(obj.headsStartAt, // replace from index
            obj.tailsEndAt, // replace upto index
            _replacementVal);
          }
        }
      }
    }

    return undefined;
  }

  var foundHeadsAndTails; // reusing same var as container for both wrapping- and non-wrapping types
  // 1. normal (possibly wrapping-type) heads and tails

  try {
    // strFindHeadsTails() can throw as well if there's mismatch in heads and tails,
    // for example, so it needs to be contained:
    foundHeadsAndTails = strFindHeadsTails(string, opts.heads, opts.tails, {
      source: "",
      throwWhenSomethingWrongIsDetected: false
    });
  } catch (error) {
    throw new Error("json-variables/resolveString(): [THROW_ID_17] While trying to resolve string: \"" + string + "\" at path " + path + ", something wrong with heads and tails was detected! Here's the internal error message:\n" + error);
  } // if heads and tails array has only one range inside and it spans whole string's
  // length, this means key is equal to a whole variable, like {a: '%%_b_%%'}.
  // In those cases, there are extra considerations when value is null, because
  // null among string characters is resolved to empty string, but null as a whole
  // value is retained as null. This means, we need to pass this as a flag to
  // processHeadsAndTails() so it can resolve properly...

  var wholeValueIsVariable = false; // we'll reuse it for non-wrap heads/tails too

  if (foundHeadsAndTails.length === 1 && rApply(string, [[foundHeadsAndTails[0].headsStartAt, foundHeadsAndTails[0].tailsEndAt]]).trim() === "") {
    wholeValueIsVariable = true;
  }

  var temp1 = processHeadsAndTails(foundHeadsAndTails, false, wholeValueIsVariable);

  if (isBool(temp1)) {
    return temp1;
  }

  if (isNull(temp1)) {
    return temp1;
  } // 2. Process opts.headsNoWrap, opts.tailsNoWrap as well


  try {
    // strFindHeadsTails() can throw as well if there's mismatch in heads and tails,
    // for example, so it needs to be contained:
    foundHeadsAndTails = strFindHeadsTails(string, opts.headsNoWrap, opts.tailsNoWrap, {
      source: "",
      throwWhenSomethingWrongIsDetected: false
    });
  } catch (error) {
    throw new Error("json-variables/resolveString(): [THROW_ID_22] While trying to resolve string: \"" + string + "\" at path " + path + ", something wrong with no-wrap heads and no-wrap tails was detected! Here's the internal error message:\n" + error);
  }

  if (foundHeadsAndTails.length === 1 && rApply(string, [[foundHeadsAndTails[0].headsStartAt, foundHeadsAndTails[0].tailsEndAt]]).trim() === "") {
    wholeValueIsVariable = true;
  }

  var temp2 = processHeadsAndTails(foundHeadsAndTails, true, wholeValueIsVariable);

  if (isBool(temp2)) {
    return temp2;
  }

  if (isNull(temp2)) {
    return temp2;
  } // 3. Then, work the finalRangesArr list
  // ================================

  if (finalRangesArr && finalRangesArr.current()) {
    return rApply(string, finalRangesArr.current());
  }

  return string;
} // -----------------------------------------------------------------------------
//                         M A I N   F U N C T I O N
// -----------------------------------------------------------------------------

/**
 * Resolves custom-marked, cross-referenced paths in parsed JSON
 */


function jVar(input, originalOpts) {
  if (!arguments.length) {
    throw new Error("json-variables/jVar(): [THROW_ID_01] Alas! Inputs are missing!");
  }

  if (!isObj(input)) {
    throw new TypeError("json-variables/jVar(): [THROW_ID_02] Alas! The input must be a plain object! Currently it's: " + (Array.isArray(input) ? "array" : typeof input));
  }

  if (originalOpts && !isObj(originalOpts)) {
    throw new TypeError("json-variables/jVar(): [THROW_ID_03] Alas! An Optional Options Object must be a plain object! Currently it's: " + (Array.isArray(originalOpts) ? "array" : typeof originalOpts));
  }

  var opts = _objectSpread2(_objectSpread2({}, defaults), originalOpts);

  if (!opts.dontWrapVars) {
    opts.dontWrapVars = [];
  } else if (!Array.isArray(opts.dontWrapVars)) {
    opts.dontWrapVars = arrayiffy(opts.dontWrapVars);
  }

  var culpritVal;
  var culpritIndex;

  if (opts.dontWrapVars.length > 0 && !opts.dontWrapVars.every(function (el, idx) {
    if (!isStr(el)) {
      culpritVal = el;
      culpritIndex = idx;
      return false;
    }

    return true;
  })) {
    throw new Error("json-variables/jVar(): [THROW_ID_05] Alas! All variable names set in opts.dontWrapVars should be of a string type. Computer detected a value \"" + culpritVal + "\" at index " + culpritIndex + ", which is not string but " + (Array.isArray(culpritVal) ? "array" : typeof culpritVal) + "!");
  }

  if (opts.heads === "") {
    throw new Error("json-variables/jVar(): [THROW_ID_06] Alas! opts.heads are empty!");
  }

  if (opts.tails === "") {
    throw new Error("json-variables/jVar(): [THROW_ID_07] Alas! opts.tails are empty!");
  }

  if (opts.lookForDataContainers && opts.dataContainerIdentifierTails === "") {
    throw new Error("json-variables/jVar(): [THROW_ID_08] Alas! opts.dataContainerIdentifierTails is empty!");
  }

  if (opts.heads === opts.tails) {
    throw new Error("json-variables/jVar(): [THROW_ID_09] Alas! opts.heads and opts.tails can't be equal!");
  }

  if (opts.heads === opts.headsNoWrap) {
    throw new Error("json-variables/jVar(): [THROW_ID_10] Alas! opts.heads and opts.headsNoWrap can't be equal!");
  }

  if (opts.tails === opts.tailsNoWrap) {
    throw new Error("json-variables/jVar(): [THROW_ID_11] Alas! opts.tails and opts.tailsNoWrap can't be equal!");
  }

  if (opts.headsNoWrap === "") {
    throw new Error("json-variables/jVar(): [THROW_ID_12] Alas! opts.headsNoWrap is an empty string!");
  }

  if (opts.tailsNoWrap === "") {
    throw new Error("json-variables/jVar(): [THROW_ID_13] Alas! opts.tailsNoWrap is an empty string!");
  }

  if (opts.headsNoWrap === opts.tailsNoWrap) {
    throw new Error("json-variables/jVar(): [THROW_ID_14] Alas! opts.headsNoWrap and opts.tailsNoWrap can't be equal!");
  }

  var current; //
  // ===============================================
  //                        1.
  // Let's compile the list of all the vars to resolve
  // ===============================================
  //
  // we return the result of the traversal:

  return traverse(input, function (key, val, innerObj) {

    if (existy(val) && containsHeadsOrTails(key, opts)) {
      throw new Error("json-variables/jVar(): [THROW_ID_15] Alas! Object keys can't contain variables!\nPlease check the following key: " + key);
    } // * * *
    // Get the current values which are being traversed by ast-monkey:
    // If it's an array, val will not exist, only key.


    if (val !== undefined) {
      // if it's object currently being traversed, we'll get both key and value
      current = val;
    } else {
      // if it's an array being traversed currently, we'll get only key
      current = key;
    } // * * *
    // In short, ast-monkey works in such way, that what we return will get written
    // over the current element, which is at the moment "current". If we don't want
    // to mutate it, we return "current". If we want to mutate it, we return a new
    // value (which will get written onto that node, previously equal to "current"). // *
    // Instantly skip empty strings:

    if (current === "") {
      return current;
    } // *
    // If the "current" that monkey brought us is equal to whole heads or tails:


    if (opts.heads.length !== 0 && trimIfString(current) === trimIfString(opts.heads) || opts.tails.length !== 0 && trimIfString(current) === trimIfString(opts.tails) || opts.headsNoWrap.length !== 0 && trimIfString(current) === trimIfString(opts.headsNoWrap) || opts.tailsNoWrap.length !== 0 && trimIfString(current) === trimIfString(opts.tailsNoWrap)) {
      if (!opts.noSingleMarkers) {
        return current;
      }

      throw new Error("json-variables/jVar(): [THROW_ID_16] Alas! While processing the input, we stumbled upon " + trimIfString(current) + " which is equal to " + (trimIfString(current) === trimIfString(opts.heads) ? "heads" : "") + (trimIfString(current) === trimIfString(opts.tails) ? "tails" : "") + (isStr(opts.headsNoWrap) && trimIfString(current) === trimIfString(opts.headsNoWrap) ? "headsNoWrap" : "") + (isStr(opts.tailsNoWrap) && trimIfString(current) === trimIfString(opts.tailsNoWrap) ? "tailsNoWrap" : "") + ". If you wouldn't have set opts.noSingleMarkers to \"true\" this error would not happen and computer would have left the current element (" + trimIfString(current) + ") alone");
    } // *
    // Process the current node if it's a string and it contains heads / tails /
    // headsNoWrap / tailsNoWrap:

    if (isStr(current) && containsHeadsOrTails(current, opts)) {
      // breadCrumbPath, the fifth argument is not passed as there're no previous paths
      return resolveString(input, current, innerObj.path, opts);
    } // otherwise, just return as it is. We're not going to touch plain objects/arrays,numbers/bools etc.


    return current; // END OF MONKEY'S TRAVERSE
    // -------------------------------------------------------------------------
  });
}

exports.defaults = defaults;
exports.jVar = jVar;
exports.version = version;

Object.defineProperty(exports, '__esModule', { value: true });

})));
