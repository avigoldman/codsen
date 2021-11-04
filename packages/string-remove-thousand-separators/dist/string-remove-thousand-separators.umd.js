/**
 * @name string-remove-thousand-separators
 * @fileoverview Detects and removes thousand separators (dot/comma/quote/space) from string-type digits
 * @version 6.0.4
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-remove-thousand-separators/}
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).stringRemoveThousandSeparators={})}(this,(function(e){"use strict";
/**
 * @name ranges-sort
 * @fileoverview Sort string index ranges
 * @version 5.0.4
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-sort/}
 */const r={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function t(e,t){if(!Array.isArray(e)||!e.length)return e;const n={...r,...t};let s,o;if(n.strictlyTwoElementsInRangeArrays&&!e.filter((e=>e)).every(((e,r)=>2===e.length||(s=r,o=e.length,!1))))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${s}th range (${JSON.stringify(e[s],null,4)}) has not two but ${o} elements!`);if(!e.filter((e=>e)).every(((e,r)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(s=r,!1))))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${s}th range (${JSON.stringify(e[s],null,4)}) does not consist of only natural numbers!`);const i=e.filter((e=>e)).length**2;let a=0;return Array.from(e).filter((e=>e)).sort(((e,r)=>(n.progressFn&&(a+=1,n.progressFn(Math.floor(100*a/i))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1)))}
/**
 * @name ranges-merge
 * @fileoverview Merge and sort string index ranges
 * @version 8.0.4
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-merge/}
 */const n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function s(e,r){function s(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return null;let o;if(r){if(!s(r))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(r,null,4)} (type ${typeof r})`);if(o={...n,...r},o.progressFn&&s(o.progressFn)&&!Object.keys(o.progressFn).length)o.progressFn=null;else if(o.progressFn&&"function"!=typeof o.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof o.progressFn}", equal to ${JSON.stringify(o.progressFn,null,4)}`);if(o.mergeType&&1!=+o.mergeType&&2!=+o.mergeType)throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof o.mergeType}", equal to ${JSON.stringify(o.mergeType,null,4)}`);if("boolean"!=typeof o.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof o.joinRangesThatTouchEdges}", equal to ${JSON.stringify(o.joinRangesThatTouchEdges,null,4)}`)}else o={...n};const i=e.filter((e=>e)).map((e=>[...e])).filter((e=>void 0!==e[2]||e[0]!==e[1]));let a,l,u;if(a=o.progressFn?t(i,{progressFn:e=>{u=Math.floor(e/5),u!==l&&(l=u,o.progressFn(u))}}):t(i),!a)return null;const g=a.length-1;for(let e=g;e>0;e--)o.progressFn&&(u=Math.floor(78*(1-e/g))+21,u!==l&&u>l&&(l=u,o.progressFn(u))),(a[e][0]<=a[e-1][0]||!o.joinRangesThatTouchEdges&&a[e][0]<a[e-1][1]||o.joinRangesThatTouchEdges&&a[e][0]<=a[e-1][1])&&(a[e-1][0]=Math.min(a[e][0],a[e-1][0]),a[e-1][1]=Math.max(a[e][1],a[e-1][1]),void 0!==a[e][2]&&(a[e-1][0]>=a[e][0]||a[e-1][1]<=a[e][1])&&null!==a[e-1][2]&&(null===a[e][2]&&null!==a[e-1][2]?a[e-1][2]=null:null!=a[e-1][2]?2==+o.mergeType&&a[e-1][0]===a[e][0]?a[e-1][2]=a[e][2]:a[e-1][2]+=a[e][2]:a[e-1][2]=a[e][2]),a.splice(e,1),e=a.length);return a.length?a:null}
/**
 * @name ranges-apply
 * @fileoverview Take an array of string index ranges, delete/replace the string according to them
 * @version 6.0.4
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-apply/}
 */
/**
 * @name string-collapse-leading-whitespace
 * @fileoverview Collapse the leading and trailing whitespace of a string
 * @version 6.0.4
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-collapse-leading-whitespace/}
 */
function o(e,r=1){function t(e){return Array.from(e).reverse().join("")}function n(e,r,t){const n=t?"\n":"\r",s=t?"\r":"\n";if(!e)return e;let o=0,i="";for(let t=0,a=e.length;t<a;t++)(e[t]===n||e[t]===s&&e[t-1]!==n)&&o++,"\r\n".includes(e[t])||" "===e[t]?" "===e[t]?i+=e[t]:e[t]===n?o<=r&&(i+=e[t],e[t+1]===s&&(i+=e[t+1],t++)):e[t]===s&&(!e[t-1]||e[t-1]!==n)&&o<=r&&(i+=e[t]):e[t+1]||o||(i+=" ");return i}if("string"==typeof e&&e.length){let s=1;"number"==typeof+r&&Number.isInteger(+r)&&+r>=0&&(s=+r);let o="",i="";if(e.trim()){if(!e[0].trim())for(let r=0,t=e.length;r<t;r++)if(e[r].trim()){o=e.slice(0,r);break}}else o=e;if(e.trim()&&(""===e.slice(-1).trim()||" "===e.slice(-1)))for(let r=e.length;r--;)if(e[r].trim()){i=e.slice(r+1);break}return`${n(o,s,!1)}${e.trim()}${t(n(t(i),s,!0))}`}return e}
/**
 * @name ranges-push
 * @fileoverview Gather string index ranges
 * @version 6.0.4
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-push/}
 */const i={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function a(e,r){if(!Array.isArray(e)||!e.length)return e;const t={...i,...r};let n,s;if(t.strictlyTwoElementsInRangeArrays&&!e.filter((e=>e)).every(((e,r)=>2===e.length||(n=r,s=e.length,!1))))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) has not two but ${s} elements!`);if(!e.filter((e=>e)).every(((e,r)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(n=r,!1))))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) does not consist of only natural numbers!`);const o=e.filter((e=>e)).length**2;let a=0;return Array.from(e).filter((e=>e)).sort(((e,r)=>(t.progressFn&&(a+=1,t.progressFn(Math.floor(100*a/o))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1)))}const l={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function u(e){return null!=e}function g(e){return Number.isInteger(e)&&e>=0}function f(e){return"string"==typeof e}const p={limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1};class y{constructor(e){const r={...p,...e};if(r.mergeType&&1!==r.mergeType&&2!==r.mergeType)if(f(r.mergeType)&&"1"===r.mergeType.trim())r.mergeType=1;else{if(!f(r.mergeType)||"2"!==r.mergeType.trim())throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof r.mergeType}", equal to ${JSON.stringify(r.mergeType,null,4)}`);r.mergeType=2}this.opts=r,this.ranges=[]}ranges;opts;add(e,r,t){if(null==e&&null==r)return;if(u(e)&&!u(r)){if(Array.isArray(e)){if(e.length){if(e.some((e=>Array.isArray(e))))return void e.forEach((e=>{Array.isArray(e)&&this.add(...e)}));e.length&&g(+e[0])&&g(+e[1])&&this.add(...e)}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(e,null,0)}) but second-one, "to" is not (${JSON.stringify(r,null,0)})`)}if(!u(e)&&u(r))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(r,null,0)}) but first-one, "from" is not (${JSON.stringify(e,null,0)})`);const n=+e,s=+r;if(g(t)&&(t=String(t)),!g(n)||!g(s))throw g(n)&&n>=0?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof s}" equal to: ${JSON.stringify(s,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof n}" equal to: ${JSON.stringify(n,null,4)}`);if(u(t)&&!f(t)&&!g(t))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof t}, equal to:\n${JSON.stringify(t,null,4)}`);if(u(this.ranges)&&Array.isArray(this.last())&&n===this.last()[1]){if(this.last()[1]=s,this.last(),null!==this.last()[2]&&u(t)){let e=!(this.last()[2]&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?t:this.last()[2]+t;this.opts.limitToBeAddedWhitespace&&(e=o(e,this.opts.limitLinebreaksCount)),f(e)&&!e.length||(this.last()[2]=e)}}else{this.ranges||(this.ranges=[]);const e=void 0===t||f(t)&&!t.length?[n,s]:[n,s,t&&this.opts.limitToBeAddedWhitespace?o(t,this.opts.limitLinebreaksCount):t];this.ranges.push(e)}}push(e,r,t){this.add(e,r,t)}current(){return Array.isArray(this.ranges)&&this.ranges.length?(this.ranges=function(e,r){function t(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return null;let n;if(r){if(!t(r))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(r,null,4)} (type ${typeof r})`);if(n={...l,...r},n.progressFn&&t(n.progressFn)&&!Object.keys(n.progressFn).length)n.progressFn=null;else if(n.progressFn&&"function"!=typeof n.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof n.progressFn}", equal to ${JSON.stringify(n.progressFn,null,4)}`);if(n.mergeType&&1!=+n.mergeType&&2!=+n.mergeType)throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof n.mergeType}", equal to ${JSON.stringify(n.mergeType,null,4)}`);if("boolean"!=typeof n.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof n.joinRangesThatTouchEdges}", equal to ${JSON.stringify(n.joinRangesThatTouchEdges,null,4)}`)}else n={...l};const s=e.filter((e=>e)).map((e=>[...e])).filter((e=>void 0!==e[2]||e[0]!==e[1]));let o,i,u;if(o=n.progressFn?a(s,{progressFn:e=>{u=Math.floor(e/5),u!==i&&(i=u,n.progressFn(u))}}):a(s),!o)return null;const g=o.length-1;for(let e=g;e>0;e--)n.progressFn&&(u=Math.floor(78*(1-e/g))+21,u!==i&&u>i&&(i=u,n.progressFn(u))),(o[e][0]<=o[e-1][0]||!n.joinRangesThatTouchEdges&&o[e][0]<o[e-1][1]||n.joinRangesThatTouchEdges&&o[e][0]<=o[e-1][1])&&(o[e-1][0]=Math.min(o[e][0],o[e-1][0]),o[e-1][1]=Math.max(o[e][1],o[e-1][1]),void 0!==o[e][2]&&(o[e-1][0]>=o[e][0]||o[e-1][1]<=o[e][1])&&null!==o[e-1][2]&&(null===o[e][2]&&null!==o[e-1][2]?o[e-1][2]=null:null!=o[e-1][2]?2==+n.mergeType&&o[e-1][0]===o[e][0]?o[e-1][2]=o[e][2]:o[e-1][2]+=o[e][2]:o[e-1][2]=o[e][2]),o.splice(e,1),e=o.length);return o.length?o:null}(this.ranges,{mergeType:this.opts.mergeType}),this.ranges&&this.opts.limitToBeAddedWhitespace?this.ranges.map((e=>u(e[2])?[e[0],e[1],o(e[2],this.opts.limitLinebreaksCount)]:e)):this.ranges):null}wipe(){this.ranges=[]}replace(e){if(Array.isArray(e)&&e.length){if(!Array.isArray(e[0])||!g(e[0][0]))throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(e[0],null,4)} should be an array and its first element should be an integer, a string index.`);this.ranges=Array.from(e)}else this.ranges=[]}last(){return Array.isArray(this.ranges)&&this.ranges.length?this.ranges[this.ranges.length-1]:null}}var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},m="[object Symbol]",d=/^\s+|\s+$/g,c="\\u0300-\\u036f\\ufe20-\\ufe23",T="[\\ud800-\\udfff]",b="["+c+"\\u20d0-\\u20f0]",w="\\ud83c[\\udffb-\\udfff]",O="[^\\ud800-\\udfff]",$="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",_="(?:"+b+"|"+w+")"+"?",I="[\\ufe0e\\ufe0f]?",R=I+_+("(?:\\u200d(?:"+[O,$,v].join("|")+")"+I+_+")*"),A="(?:"+[O+b+"?",b,$,v,T].join("|")+")",S=RegExp(w+"(?="+w+")|"+A+R,"g"),E=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),N="object"==typeof self&&self&&self.Object===Object&&self,F="object"==typeof h&&h&&h.Object===Object&&h||N||Function("return this")();function j(e,r,t){if(r!=r)return function(e,r,t,n){for(var s=e.length,o=t+(n?1:-1);n?o--:++o<s;)if(r(e[o],o,e))return o;return-1}(e,W,t);for(var n=t-1,s=e.length;++n<s;)if(e[n]===r)return n;return-1}function W(e){return e!=e}function H(e){return function(e){return E.test(e)}(e)?function(e){return e.match(S)||[]}(e):function(e){return e.split("")}(e)}var J=Object.prototype.toString,D=F.Symbol,x=D?D.prototype:void 0,q=x?x.toString:void 0;function k(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&J.call(e)==m}(e))return q?q.call(e):"";var r=e+"";return"0"==r&&1/e==-Infinity?"-0":r}function M(e,r,t){var n=e.length;return t=void 0===t?n:t,!r&&t>=n?e:function(e,r,t){var n=-1,s=e.length;r<0&&(r=-r>s?0:s+r),(t=t>s?s:t)<0&&(t+=s),s=r>t?0:t-r>>>0,r>>>=0;for(var o=Array(s);++n<s;)o[n]=e[n+r];return o}(e,r,t)}var C=function(e,r,t){var n;if((e=null==(n=e)?"":k(n))&&(t||void 0===r))return e.replace(d,"");if(!e||!(r=k(r)))return e;var s=H(e),o=H(r),i=function(e,r){for(var t=-1,n=e.length;++t<n&&j(r,e[t],0)>-1;);return t}(s,o),a=function(e,r){for(var t=e.length;t--&&j(r,e[t],0)>-1;);return t}(s,o)+1;return M(s,i,a).join("")};e.remSep=function(e,r){let t=!0;const n=[".",",","'"," "];let o;if("string"!=typeof e)throw new TypeError(`string-remove-thousand-separators/remSep(): [THROW_ID_01] Input must be string! Currently it's: ${typeof e}, equal to:\n${JSON.stringify(e,null,4)}`);if(r&&"object"!=typeof r)throw new TypeError(`string-remove-thousand-separators/remSep(): [THROW_ID_02] Options object must be a plain object! Currently it's: ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`);const i={removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1,...r},a=C(e.trim(),'"');if(""===a)return a;const l=new y;for(let e=0,r=a.length;e<r;e++){if(i.removeThousandSeparatorsFromNumbers&&""===a[e].trim()&&l.add(e,e+1),i.removeThousandSeparatorsFromNumbers&&"'"===a[e]&&(l.add(e,e+1),"'"===a[e+1])){t=!1;break}if(n.includes(a[e])){if(void 0!==a[e+1]&&/^\d*$/.test(a[e+1]))if(void 0!==a[e+2]){if(!/^\d*$/.test(a[e+2])){t=!1;break}if(void 0!==a[e+3]){if(!/^\d*$/.test(a[e+3])){t=!1;break}if(void 0!==a[e+4]&&/^\d*$/.test(a[e+4])){t=!1;break}if(i.removeThousandSeparatorsFromNumbers&&l.add(e,e+1),o){if(a[e]!==o){t=!1;break}}else o=a[e]}else i.removeThousandSeparatorsFromNumbers&&i.forceUKStyle&&","===a[e]&&l.add(e,e+1,".")}else i.forceUKStyle&&","===a[e]&&l.add(e,e+1,"."),i.padSingleDecimalPlaceNumbers&&l.add(e+2,e+2,"0")}else if(!/^\d*$/.test(a[e])){t=!1;break}}return t&&l.current()?function(e,r,t){let n,o=0,i=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof e)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(r&&!Array.isArray(r))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(t&&"function"!=typeof t)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(!r||!r.filter((e=>e)).length)return e;n=Array.isArray(r)&&Number.isInteger(r[0])&&Number.isInteger(r[1])?[Array.from(r)]:Array.from(r);const a=n.length;let l=0;n.filter((e=>e)).forEach(((e,r)=>{if(t&&(o=Math.floor(l/a*10),o!==i&&(i=o,t(o))),!Array.isArray(e))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${r}th element not an array: ${JSON.stringify(e,null,4)}, which is ${typeof e}`);if(!Number.isInteger(e[0])){if(!Number.isInteger(+e[0])||+e[0]<0)throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${r}th element, array ${JSON.stringify(e,null,0)}. Its first element is not an integer, string index, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0],null,4)}.`);n[r][0]=+n[r][0]}if(!Number.isInteger(e[1])){if(!Number.isInteger(+e[1])||+e[1]<0)throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${r}th element, array ${JSON.stringify(e,null,0)}. Its second element is not an integer, string index, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1],null,4)}.`);n[r][1]=+n[r][1]}l+=1}));const u=s(n,{progressFn:e=>{t&&(o=10+Math.floor(e/10),o!==i&&(i=o,t(o)))}}),g=Array.isArray(u)?u.length:0;if(g>0){const r=e.slice(u[g-1][1]);e=u.reduce(((r,n,s,a)=>(t&&(o=20+Math.floor(s/g*80),o!==i&&(i=o,t(o))),r+e.slice(0===s?0:a[s-1][1],a[s][0])+(a[s][2]||""))),""),e+=r}return e}(a,l.current()):a},e.version="6.0.4",Object.defineProperty(e,"__esModule",{value:!0})}));
