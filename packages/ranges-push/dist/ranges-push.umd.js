/**
 * @name ranges-push
 * @fileoverview Gather string index ranges
 * @version 6.0.4
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-push/}
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).rangesPush={})}(this,(function(e){"use strict";
/**
 * @name string-collapse-leading-whitespace
 * @fileoverview Collapse the leading and trailing whitespace of a string
 * @version 6.0.4
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-collapse-leading-whitespace/}
 */function r(e,r=1){function t(e){return Array.from(e).reverse().join("")}function n(e,r,t){const n=t?"\n":"\r",s=t?"\r":"\n";if(!e)return e;let i=0,o="";for(let t=0,a=e.length;t<a;t++)(e[t]===n||e[t]===s&&e[t-1]!==n)&&i++,"\r\n".includes(e[t])||" "===e[t]?" "===e[t]?o+=e[t]:e[t]===n?i<=r&&(o+=e[t],e[t+1]===s&&(o+=e[t+1],t++)):e[t]===s&&(!e[t-1]||e[t-1]!==n)&&i<=r&&(o+=e[t]):e[t+1]||i||(o+=" ");return o}if("string"==typeof e&&e.length){let s=1;"number"==typeof+r&&Number.isInteger(+r)&&+r>=0&&(s=+r);let i="",o="";if(e.trim()){if(!e[0].trim())for(let r=0,t=e.length;r<t;r++)if(e[r].trim()){i=e.slice(0,r);break}}else i=e;if(e.trim()&&(""===e.slice(-1).trim()||" "===e.slice(-1)))for(let r=e.length;r--;)if(e[r].trim()){o=e.slice(r+1);break}return`${n(i,s,!1)}${e.trim()}${t(n(t(o),s,!0))}`}return e}
/**
 * @name ranges-sort
 * @fileoverview Sort string index ranges
 * @version 5.0.3
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-sort/}
 */const t={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function n(e,r){if(!Array.isArray(e)||!e.length)return e;const n={...t,...r};let s,i;if(n.strictlyTwoElementsInRangeArrays&&!e.filter((e=>e)).every(((e,r)=>2===e.length||(s=r,i=e.length,!1))))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${s}th range (${JSON.stringify(e[s],null,4)}) has not two but ${i} elements!`);if(!e.filter((e=>e)).every(((e,r)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(s=r,!1))))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${s}th range (${JSON.stringify(e[s],null,4)}) does not consist of only natural numbers!`);const o=e.filter((e=>e)).length**2;let a=0;return Array.from(e).filter((e=>e)).sort(((e,r)=>(n.progressFn&&(a+=1,n.progressFn(Math.floor(100*a/o))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1)))}const s={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function i(e){return null!=e}function o(e){return Number.isInteger(e)&&e>=0}function a(e){return"string"==typeof e}const g={limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1};e.Ranges=class{constructor(e){const r={...g,...e};if(r.mergeType&&1!==r.mergeType&&2!==r.mergeType)if(a(r.mergeType)&&"1"===r.mergeType.trim())r.mergeType=1;else{if(!a(r.mergeType)||"2"!==r.mergeType.trim())throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof r.mergeType}", equal to ${JSON.stringify(r.mergeType,null,4)}`);r.mergeType=2}this.opts=r,this.ranges=[]}ranges;opts;add(e,t,n){if(null==e&&null==t)return;if(i(e)&&!i(t)){if(Array.isArray(e)){if(e.length){if(e.some((e=>Array.isArray(e))))return void e.forEach((e=>{Array.isArray(e)&&this.add(...e)}));e.length&&o(+e[0])&&o(+e[1])&&this.add(...e)}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(e,null,0)}) but second-one, "to" is not (${JSON.stringify(t,null,0)})`)}if(!i(e)&&i(t))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(t,null,0)}) but first-one, "from" is not (${JSON.stringify(e,null,0)})`);const s=+e,g=+t;if(o(n)&&(n=String(n)),!o(s)||!o(g))throw o(s)&&s>=0?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof g}" equal to: ${JSON.stringify(g,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof s}" equal to: ${JSON.stringify(s,null,4)}`);if(i(n)&&!a(n)&&!o(n))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof n}, equal to:\n${JSON.stringify(n,null,4)}`);if(i(this.ranges)&&Array.isArray(this.last())&&s===this.last()[1]){if(this.last()[1]=g,this.last(),null!==this.last()[2]&&i(n)){let e=!(this.last()[2]&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?n:this.last()[2]+n;this.opts.limitToBeAddedWhitespace&&(e=r(e,this.opts.limitLinebreaksCount)),a(e)&&!e.length||(this.last()[2]=e)}}else{this.ranges||(this.ranges=[]);const e=void 0===n||a(n)&&!n.length?[s,g]:[s,g,n&&this.opts.limitToBeAddedWhitespace?r(n,this.opts.limitLinebreaksCount):n];this.ranges.push(e)}}push(e,r,t){this.add(e,r,t)}current(){return Array.isArray(this.ranges)&&this.ranges.length?(this.ranges=function(e,r){function t(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return null;let i;if(r){if(!t(r))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(r,null,4)} (type ${typeof r})`);if(i={...s,...r},i.progressFn&&t(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof i.progressFn}", equal to ${JSON.stringify(i.progressFn,null,4)}`);if(i.mergeType&&1!=+i.mergeType&&2!=+i.mergeType)throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof i.mergeType}", equal to ${JSON.stringify(i.mergeType,null,4)}`);if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof i.joinRangesThatTouchEdges}", equal to ${JSON.stringify(i.joinRangesThatTouchEdges,null,4)}`)}else i={...s};const o=e.filter((e=>e)).map((e=>[...e])).filter((e=>void 0!==e[2]||e[0]!==e[1]));let a,g,l;if(a=i.progressFn?n(o,{progressFn:e=>{l=Math.floor(e/5),l!==g&&(g=l,i.progressFn(l))}}):n(o),!a)return null;const u=a.length-1;for(let e=u;e>0;e--)i.progressFn&&(l=Math.floor(78*(1-e/u))+21,l!==g&&l>g&&(g=l,i.progressFn(l))),(a[e][0]<=a[e-1][0]||!i.joinRangesThatTouchEdges&&a[e][0]<a[e-1][1]||i.joinRangesThatTouchEdges&&a[e][0]<=a[e-1][1])&&(a[e-1][0]=Math.min(a[e][0],a[e-1][0]),a[e-1][1]=Math.max(a[e][1],a[e-1][1]),void 0!==a[e][2]&&(a[e-1][0]>=a[e][0]||a[e-1][1]<=a[e][1])&&null!==a[e-1][2]&&(null===a[e][2]&&null!==a[e-1][2]?a[e-1][2]=null:null!=a[e-1][2]?2==+i.mergeType&&a[e-1][0]===a[e][0]?a[e-1][2]=a[e][2]:a[e-1][2]+=a[e][2]:a[e-1][2]=a[e][2]),a.splice(e,1),e=a.length);return a.length?a:null}(this.ranges,{mergeType:this.opts.mergeType}),this.ranges&&this.opts.limitToBeAddedWhitespace?this.ranges.map((e=>i(e[2])?[e[0],e[1],r(e[2],this.opts.limitLinebreaksCount)]:e)):this.ranges):null}wipe(){this.ranges=[]}replace(e){if(Array.isArray(e)&&e.length){if(!Array.isArray(e[0])||!o(e[0][0]))throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(e[0],null,4)} should be an array and its first element should be an integer, a string index.`);this.ranges=Array.from(e)}else this.ranges=[]}last(){return Array.isArray(this.ranges)&&this.ranges.length?this.ranges[this.ranges.length-1]:null}},e.defaults=g,e.version="6.0.4",Object.defineProperty(e,"__esModule",{value:!0})}));
