/**
 * ranges-invert
 * Invert string index ranges [ [1, 3] ] => [ [0, 1], [3, ...] ]
 * Version: 2.1.37
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ranges-invert
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e=e||self).rangesInvert=r()}(this,(function(){"use strict";function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function r(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function n(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function t(e,r){if(!Array.isArray(e))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===e.length)return e;const n={strictlyTwoElementsInRangeArrays:!1,progressFn:null,...r};let t,o;if(n.strictlyTwoElementsInRangeArrays&&!e.every((e,r)=>2===e.length||(t=r,o=e.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${t}th range (${JSON.stringify(e[t],null,4)}) has not two but ${o} elements!`);if(!e.every((e,r)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(t=r,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${t}th range (${JSON.stringify(e[t],null,4)}) does not consist of only natural numbers!`);const s=e.length*e.length;let i=0;return Array.from(e).sort((e,r)=>(n.progressFn&&(i+=1,n.progressFn(Math.floor(100*i/s))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1))}function o(e,r){function n(e){return"string"==typeof e}function o(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e))return e;const s={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let i;if(r){if(!o(r))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(r,null,4)} (type ${typeof r})`);if(i={...s,...r},i.progressFn&&o(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof i.progressFn}", equal to ${JSON.stringify(i.progressFn,null,4)}`);if(i.mergeType&&1!==i.mergeType&&2!==i.mergeType)if(n(i.mergeType)&&"1"===i.mergeType.trim())i.mergeType=1;else{if(!n(i.mergeType)||"2"!==i.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof i.mergeType}", equal to ${JSON.stringify(i.mergeType,null,4)}`);i.mergeType=2}if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof i.joinRangesThatTouchEdges}", equal to ${JSON.stringify(i.joinRangesThatTouchEdges,null,4)}`)}else i={...s};const a=e.map(e=>[...e]).filter(e=>void 0!==e[2]||e[0]!==e[1]);let u,g,l;u=i.progressFn?t(a,{progressFn:e=>{l=Math.floor(e/5),l!==g&&(g=l,i.progressFn(l))}}):t(a);const y=u.length-1;for(let e=y;e>0;e--)i.progressFn&&(l=Math.floor(78*(1-e/y))+21,l!==g&&l>g&&(g=l,i.progressFn(l))),(u[e][0]<=u[e-1][0]||!i.joinRangesThatTouchEdges&&u[e][0]<u[e-1][1]||i.joinRangesThatTouchEdges&&u[e][0]<=u[e-1][1])&&(u[e-1][0]=Math.min(u[e][0],u[e-1][0]),u[e-1][1]=Math.max(u[e][1],u[e-1][1]),void 0!==u[e][2]&&(u[e-1][0]>=u[e][0]||u[e-1][1]<=u[e][1])&&null!==u[e-1][2]&&(null===u[e][2]&&null!==u[e-1][2]?u[e-1][2]=null:void 0!==u[e-1][2]?2===i.mergeType&&u[e-1][0]===u[e][0]?u[e-1][2]=u[e][2]:u[e-1][2]+=u[e][2]:u[e-1][2]=u[e][2]),u.splice(e,1),e=u.length);return u}const s=Array.isArray;var i=Array.isArray;return function(t,a,u){if(!i(t)&&null!==t)throw new TypeError("ranges-invert: [THROW_ID_01] Input's first argument must be an array, consisting of range arrays! Currently its type is: ".concat(e(t),", equal to: ").concat(JSON.stringify(t,null,4)));if(!Number.isInteger(a)||a<0)throw new TypeError("ranges-invert: [THROW_ID_02] Input's second argument must be a natural number or zero (coming from String.length)! Currently its type is: ".concat(e(a),", equal to: ").concat(JSON.stringify(a,null,4)));if(null===t)return 0===a?[]:[[0,a]];if(0===t.length)return[];var g,l,y,f=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}({},{strictlyTwoElementsInRangeArrays:!1,skipChecks:!1},{},u);if(!f.skipChecks&&f.strictlyTwoElementsInRangeArrays&&!t.every((function(e,r){return 2===e.length||(g=r,l=e.length,!1)})))throw new TypeError("ranges-invert: [THROW_ID_04] Because opts.strictlyTwoElementsInRangeArrays was enabled, all ranges must be strictly two-element-long. However, the ".concat(g,"th range (").concat(JSON.stringify(t[g],null,0),") has not two but ").concat(l," elements!"));if(!f.skipChecks&&!t.every((function(e,r){return!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(g=r,!1)}))){if(Array.isArray(t)&&"number"==typeof t[0]&&"number"==typeof t[1])throw new TypeError("ranges-invert: [THROW_ID_07] The first argument should be AN ARRAY OF RANGES, not a single range! Currently arrOfRanges = ".concat(JSON.stringify(t,null,0),"!"));throw new TypeError("ranges-invert: [THROW_ID_05] The first argument should be AN ARRAY OF ARRAYS! Each sub-array means string slice indexes. In our case, here ".concat(g+1,"th range (").concat(JSON.stringify(t[g],null,0),") does not consist of only natural numbers!"))}return 0===(y=f.skipChecks?t.filter((function(e){return e[0]!==e[1]})):o(t.filter((function(e){return e[0]!==e[1]})))).length?0===a?[]:[[0,a]]:function(e,r){if(!s(e))throw new TypeError(`ranges-crop: [THROW_ID_01] The first input's argument must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(!Number.isInteger(r))throw new TypeError(`ranges-crop: [THROW_ID_02] The second input's argument must be a natural number or zero (coming from String.length)! Currently its type is: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(0===e.length)return e;let n;if(!e.every((e,r)=>!(!Number.isInteger(e[0])||!Number.isInteger(e[1]))||(n=r,!1))){if(Array.isArray(e)&&"number"==typeof e[0]&&"number"==typeof e[1])throw new TypeError(`ranges-crop: [THROW_ID_03] The first argument should be AN ARRAY OF RANGES, not a single range! Currently arrOfRanges = ${JSON.stringify(e,null,0)}!`);throw new TypeError(`ranges-crop: [THROW_ID_04] The first argument should be AN ARRAY OF ARRAYS! Each sub-array means string slice indexes. In our case, here ${n+1}th range (${JSON.stringify(e[n],null,0)}) does not consist of only natural numbers!`)}if(!e.every((e,r)=>null==e[2]||"string"==typeof e[2]||(n=r,!1)))throw new TypeError(`ranges-crop: [THROW_ID_05] The third argument, if present at all, should be of a string-type or null. Currently the ${n}th range ${JSON.stringify(e[n],null,0)} has a argument in the range of a type ${typeof e[n][2]}`);return o(e).filter(e=>e[0]<=r&&(void 0!==e[2]||e[0]<r)).map(e=>e[1]>r?void 0!==e[2]?[e[0],r,e[2]]:[e[0],r]:e)}(y.reduce((function(e,r,n,t){var o=[];0===n&&0!==t[0][0]&&o.push([0,t[0][0]]);var s=n<t.length-1?t[n+1][0]:a;if(r[1]!==s){if(f.skipChecks&&r[1]>s)throw new TypeError("ranges-invert: [THROW_ID_08] The checking (opts.skipChecks) is off and input ranges were not sorted! We nearly wrote range [".concat(r[1],", ").concat(s,"] which is backwards. For investigation, whole ranges array is:\n").concat(JSON.stringify(t,null,0)));o.push([r[1],s])}return e.concat(o)}),[]),a)}}));
