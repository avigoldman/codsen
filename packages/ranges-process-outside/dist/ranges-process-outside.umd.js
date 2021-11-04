/**
 * @name ranges-process-outside
 * @fileoverview Iterate string considering ranges, as if they were already applied
 * @version 5.0.4
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-process-outside/}
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).rangesProcessOutside={})}(this,(function(e){"use strict";var r={exports:{}};const n=55296,t=127995,s=127999,o=[776,2359,2359,2367,2367,2984,3007,3021,3633,3635,3648,3657,4352,4449,4520];function i(e){if("string"!=typeof e)throw new Error("string cannot be undefined or null");const r=[];let n=0,t=0;for(;n<e.length;)t+=a(n+t,e),f(e[n+t])&&t++,l(e[n+t])&&t++,g(e[n+t])&&t++,y(e[n+t])?t++:(r.push(e.substring(n,n+t)),n+=t,t=0);return r}function a(e,r){const o=r[e];if(!function(e){return e&&p(e[0].charCodeAt(0),n,56319)}(o)||e===r.length-1)return 1;const i=o+r[e+1];let a=r.substring(e+2,e+5);return u(i)&&u(a)||function(e){return p(h(e),t,s)}(a)?4:2}function u(e){return p(h(e),127462,127487)}function l(e){return"string"==typeof e&&p(e.charCodeAt(0),65024,65039)}function g(e){return"string"==typeof e&&p(e.charCodeAt(0),8400,8447)}function f(e){return"string"==typeof e&&-1!==o.indexOf(e.charCodeAt(0))}function y(e){return"string"==typeof e&&8205===e.charCodeAt(0)}function h(e){return(e.charCodeAt(0)-n<<10)+(e.charCodeAt(1)-56320)+65536}function p(e,r,n){return e>=r&&e<=n}r.exports=i,r.exports.substr=function(e,r,n){const t=i(e);if(void 0===r)return e;if(r>=t.length)return"";const s=t.length-r;let o=r+(void 0===n?s:n);return o>r+s&&(o=void 0),t.slice(r,o).join("")};var c=r.exports;
/**
 * @name ranges-sort
 * @fileoverview Sort string index ranges
 * @version 5.0.4
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-sort/}
 */const m={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function T(e,r){if(!Array.isArray(e)||!e.length)return e;const n={...m,...r};let t,s;if(n.strictlyTwoElementsInRangeArrays&&!e.filter((e=>e)).every(((e,r)=>2===e.length||(t=r,s=e.length,!1))))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${t}th range (${JSON.stringify(e[t],null,4)}) has not two but ${s} elements!`);if(!e.filter((e=>e)).every(((e,r)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(t=r,!1))))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${t}th range (${JSON.stringify(e[t],null,4)}) does not consist of only natural numbers!`);const o=e.filter((e=>e)).length**2;let i=0;return Array.from(e).filter((e=>e)).sort(((e,r)=>(n.progressFn&&(i+=1,n.progressFn(Math.floor(100*i/o))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1)))}
/**
 * @name ranges-merge
 * @fileoverview Merge and sort string index ranges
 * @version 8.0.4
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-merge/}
 */const d={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function w(e,r){function n(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return null;let t;if(r){if(!n(r))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(r,null,4)} (type ${typeof r})`);if(t={...d,...r},t.progressFn&&n(t.progressFn)&&!Object.keys(t.progressFn).length)t.progressFn=null;else if(t.progressFn&&"function"!=typeof t.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof t.progressFn}", equal to ${JSON.stringify(t.progressFn,null,4)}`);if(t.mergeType&&1!=+t.mergeType&&2!=+t.mergeType)throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof t.mergeType}", equal to ${JSON.stringify(t.mergeType,null,4)}`);if("boolean"!=typeof t.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof t.joinRangesThatTouchEdges}", equal to ${JSON.stringify(t.joinRangesThatTouchEdges,null,4)}`)}else t={...d};const s=e.filter((e=>e)).map((e=>[...e])).filter((e=>void 0!==e[2]||e[0]!==e[1]));let o,i,a;if(o=t.progressFn?T(s,{progressFn:e=>{a=Math.floor(e/5),a!==i&&(i=a,t.progressFn(a))}}):T(s),!o)return null;const u=o.length-1;for(let e=u;e>0;e--)t.progressFn&&(a=Math.floor(78*(1-e/u))+21,a!==i&&a>i&&(i=a,t.progressFn(a))),(o[e][0]<=o[e-1][0]||!t.joinRangesThatTouchEdges&&o[e][0]<o[e-1][1]||t.joinRangesThatTouchEdges&&o[e][0]<=o[e-1][1])&&(o[e-1][0]=Math.min(o[e][0],o[e-1][0]),o[e-1][1]=Math.max(o[e][1],o[e-1][1]),void 0!==o[e][2]&&(o[e-1][0]>=o[e][0]||o[e-1][1]<=o[e][1])&&null!==o[e-1][2]&&(null===o[e][2]&&null!==o[e-1][2]?o[e-1][2]=null:null!=o[e-1][2]?2==+t.mergeType&&o[e-1][0]===o[e][0]?o[e-1][2]=o[e][2]:o[e-1][2]+=o[e][2]:o[e-1][2]=o[e][2]),o.splice(e,1),e=o.length);return o.length?o:null}
/**
 * @name ranges-crop
 * @fileoverview Crop array of ranges when they go beyond the reference string's length
 * @version 5.0.4
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-crop/}
 */function b(e,r){if(null===e)return null;if(!Array.isArray(e))throw new TypeError(`ranges-crop: [THROW_ID_01] The first input's argument must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(!Number.isInteger(r))throw new TypeError(`ranges-crop: [THROW_ID_02] The second input's argument must be a natural number or zero (coming from String.length)! Currently its type is: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(!e.filter((e=>e)).length)return e.filter((e=>e));let n=0;if(!e.filter((e=>e)).every(((e,r)=>!(!Number.isInteger(e[0])||!Number.isInteger(e[1]))||(n=r,!1)))){if(Array.isArray(e)&&"number"==typeof e[0]&&"number"==typeof e[1])throw new TypeError(`ranges-crop: [THROW_ID_03] The first argument should be AN ARRAY OF RANGES, not a single range! Currently arrOfRanges = ${JSON.stringify(e,null,0)}!`);throw new TypeError(`ranges-crop: [THROW_ID_04] The first argument should be AN ARRAY OF ARRAYS! Each sub-array means string slice indexes. In our case, here ${n}th range (${JSON.stringify(e[n],null,0)}) does not consist of only natural numbers!`)}if(!e.filter((e=>e)).every(((e,r)=>null==e[2]||"string"==typeof e[2]||(n=r,!1))))throw new TypeError(`ranges-crop: [THROW_ID_05] The third argument, if present at all, should be of a string-type or null. Currently the ${n}th range ${JSON.stringify(e[n],null,0)} has a argument in the range of a type ${typeof e[n][2]}`);const t=(w(e)||[]).filter((e=>e[0]<=r&&(null!=e[2]||e[0]<r))).map((e=>e[1]>r?null!=e[2]?[e[0],r,e[2]]:[e[0],r]:e));return t===[]?null:t}
/**
 * @name ranges-invert
 * @fileoverview Invert string index ranges
 * @version 5.0.4
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-invert/}
 */e.rProcessOutside=function(e,r,n,t=!1){if("string"!=typeof e)throw void 0===e?new Error("ranges-process-outside: [THROW_ID_01] the first input argument must be string! It's missing currently (undefined)!"):new Error(`ranges-process-outside: [THROW_ID_02] the first input argument must be string! It was given as:\n${JSON.stringify(e,null,4)} (type ${typeof e})`);if(r&&(!Array.isArray(r)||r.length&&!Array.isArray(r[0])))throw new Error(`ranges-process-outside: [THROW_ID_03] the second input argument must be array of ranges or null! It was given as:\n${JSON.stringify(r,null,4)} (type ${typeof r})`);if("function"!=typeof n)throw new Error(`ranges-process-outside: [THROW_ID_04] the third input argument must be a function! It was given as:\n${JSON.stringify(n,null,4)} (type ${typeof n})`);function s(e,r){(r||[]).forEach((([r,t])=>{for(let s=r;s<t;s++){const r=c(e.slice(s))[0].length;n(s,s+r,(e=>{null!=e&&(s+=e)})),r&&r>1&&(s+=r-1)}}))}if(r&&r.length){s(e,b(function(e,r,n){if(!Array.isArray(e)&&null!==e)throw new TypeError(`ranges-invert: [THROW_ID_01] Input's first argument must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(!Number.isInteger(r)||r<0)throw new TypeError(`ranges-invert: [THROW_ID_02] Input's second argument must be a natural number or zero (coming from String.length)! Currently its type is: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(Array.isArray(e)&&"number"==typeof e[0]&&"number"==typeof e[1])throw new TypeError(`ranges-invert: [THROW_ID_07] The first argument should be AN ARRAY OF RANGES, not a single range! Currently arrOfRanges = ${JSON.stringify(e,null,0)}!`);if(!Array.isArray(e)||!e.filter((e=>Array.isArray(e)&&e[0]!==e[1])).length||!r)return r?[[0,r]]:null;const t={strictlyTwoElementsInRangeArrays:!1,skipChecks:!1,...n};let s,o,i=0;if(!t.skipChecks&&t.strictlyTwoElementsInRangeArrays&&!e.filter((e=>e)).every(((e,r)=>2===e.length||(i=r,s=e.length,!1))))throw new TypeError(`ranges-invert: [THROW_ID_04] Because opts.strictlyTwoElementsInRangeArrays was enabled, all ranges must be strictly two-element-long. However, the ${i}th range (${JSON.stringify(e[i],null,0)}) has not two but ${s} elements!`);if(!t.skipChecks&&!e.every(((e,r)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(i=r,!1))))throw new TypeError(`ranges-invert: [THROW_ID_05] The first argument should be AN ARRAY OF ARRAYS! Each sub-array means string slice indexes. In our case, here ${i+1}th range (${JSON.stringify(e[i],null,0)}) does not consist of only natural numbers!`);return o=t.skipChecks?e.filter((e=>e[0]!==e[1])):w(e.filter((e=>e[0]!==e[1]))),b(o.reduce(((e,n,s,o)=>{const i=[];0===s&&0!==o[0][0]&&i.push([0,o[0][0]]);const a=s<o.length-1?o[s+1][0]:r;if(n[1]!==a){if(t.skipChecks&&n[1]>a)throw new TypeError(`ranges-invert: [THROW_ID_08] The checking (opts.skipChecks) is off and input ranges were not sorted! We nearly wrote range [${n[1]}, ${a}] which is backwards. For investigation, whole ranges array is:\n${JSON.stringify(o,null,0)}`);i.push([n[1],a])}return e.concat(i)}),[]),r)}(r,e.length,{skipChecks:!!t}),e.length))}else s(e,[[0,e.length]])},e.version="5.0.4",Object.defineProperty(e,"__esModule",{value:!0})}));
