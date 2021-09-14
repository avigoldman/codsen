/**
 * @name csv-sort
 * @fileoverview Sorts double-entry bookkeeping CSV coming from internet banking
 * @version 6.0.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/csv-sort/}
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).csvSort={})}(this,(function(e){"use strict";var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,r,t){switch(t.length){case 0:return e.call(r);case 1:return e.call(r,t[0]);case 2:return e.call(r,t[0],t[1]);case 3:return e.call(r,t[0],t[1],t[2])}return e.apply(r,t)}function n(e,r,t){if(r!=r)return function(e,r,t,n){for(var s=e.length,i=t+(n?1:-1);n?i--:++i<s;)if(r(e[i],i,e))return i;return-1}(e,i,t);for(var n=t-1,s=e.length;++n<s;)if(e[n]===r)return n;return-1}function s(e,r,t,n){for(var s=t-1,i=e.length;++s<i;)if(n(e[s],r))return s;return-1}function i(e){return e!=e}var o=Array.prototype.splice,a=Math.max;function l(e,r,t,i){var a,l=i?s:n,u=-1,f=r.length,g=e;for(e===r&&(r=function(e,r){var t=-1,n=e.length;r||(r=Array(n));for(;++t<n;)r[t]=e[t];return r}(r)),t&&(g=function(e,r){for(var t=-1,n=e?e.length:0,s=Array(n);++t<n;)s[t]=r(e[t],t,e);return s}(e,(a=t,function(e){return a(e)})));++u<f;)for(var p=0,h=r[u],c=t?t(h):h;(p=l(g,c,p,i))>-1;)g!==e&&o.call(g,p,1),o.call(e,p,1);return e}var u,f,g=(u=function(e,r){return e&&e.length&&r&&r.length?l(e,r):e},f=a(void 0===f?u.length-1:f,0),function(){for(var e=arguments,r=-1,n=a(e.length-f,0),s=Array(n);++r<n;)s[r]=e[f+r];r=-1;for(var i=Array(f+1);++r<f;)i[r]=e[r];return i[f]=s,t(u,this,i)});var p=g;
/**
 * @name ranges-sort
 * @fileoverview Sort string index ranges
 * @version 5.0.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-sort/}
 */const h={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function c(e,r){if(!Array.isArray(e)||!e.length)return e;const t={...h,...r};let n,s;if(t.strictlyTwoElementsInRangeArrays&&!e.filter((e=>e)).every(((e,r)=>2===e.length||(n=r,s=e.length,!1))))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) has not two but ${s} elements!`);if(!e.filter((e=>e)).every(((e,r)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(n=r,!1))))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) does not consist of only natural numbers!`);const i=e.filter((e=>e)).length**2;let o=0;return Array.from(e).filter((e=>e)).sort(((e,r)=>(t.progressFn&&(o+=1,t.progressFn(Math.floor(100*o/i))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1)))}
/**
 * @name ranges-merge
 * @fileoverview Merge and sort string index ranges
 * @version 8.0.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-merge/}
 */const y={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function m(e,r){function t(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return null;let n;if(r){if(!t(r))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(r,null,4)} (type ${typeof r})`);if(n={...y,...r},n.progressFn&&t(n.progressFn)&&!Object.keys(n.progressFn).length)n.progressFn=null;else if(n.progressFn&&"function"!=typeof n.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof n.progressFn}", equal to ${JSON.stringify(n.progressFn,null,4)}`);if(n.mergeType&&1!=+n.mergeType&&2!=+n.mergeType)throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof n.mergeType}", equal to ${JSON.stringify(n.mergeType,null,4)}`);if("boolean"!=typeof n.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof n.joinRangesThatTouchEdges}", equal to ${JSON.stringify(n.joinRangesThatTouchEdges,null,4)}`)}else n={...y};const s=e.filter((e=>e)).map((e=>[...e])).filter((e=>void 0!==e[2]||e[0]!==e[1]));let i,o,a;if(i=n.progressFn?c(s,{progressFn:e=>{a=Math.floor(e/5),a!==o&&(o=a,n.progressFn(a))}}):c(s),!i)return null;const l=i.length-1;for(let e=l;e>0;e--)n.progressFn&&(a=Math.floor(78*(1-e/l))+21,a!==o&&a>o&&(o=a,n.progressFn(a))),(i[e][0]<=i[e-1][0]||!n.joinRangesThatTouchEdges&&i[e][0]<i[e-1][1]||n.joinRangesThatTouchEdges&&i[e][0]<=i[e-1][1])&&(i[e-1][0]=Math.min(i[e][0],i[e-1][0]),i[e-1][1]=Math.max(i[e][1],i[e-1][1]),void 0!==i[e][2]&&(i[e-1][0]>=i[e][0]||i[e-1][1]<=i[e][1])&&null!==i[e-1][2]&&(null===i[e][2]&&null!==i[e-1][2]?i[e-1][2]=null:null!=i[e-1][2]?2==+n.mergeType&&i[e-1][0]===i[e][0]?i[e-1][2]=i[e][2]:i[e-1][2]+=i[e][2]:i[e-1][2]=i[e][2]),i.splice(e,1),e=i.length);return i.length?i:null}
/**
 * @name ranges-apply
 * @fileoverview Take an array of string index ranges, delete/replace the string according to them
 * @version 6.0.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-apply/}
 */
/**
 * @name string-collapse-leading-whitespace
 * @fileoverview Collapse the leading and trailing whitespace of a string
 * @version 6.0.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-collapse-leading-whitespace/}
 */
function d(e,r=1){function t(e){return Array.from(e).reverse().join("")}function n(e,r,t){const n=t?"\n":"\r",s=t?"\r":"\n";if(!e)return e;let i=0,o="";for(let t=0,a=e.length;t<a;t++)(e[t]===n||e[t]===s&&e[t-1]!==n)&&i++,"\r\n".includes(e[t])||" "===e[t]?" "===e[t]?o+=e[t]:e[t]===n?i<=r&&(o+=e[t],e[t+1]===s&&(o+=e[t+1],t++)):e[t]===s&&(!e[t-1]||e[t-1]!==n)&&i<=r&&(o+=e[t]):e[t+1]||i||(o+=" ");return o}if("string"==typeof e&&e.length){let s=1;"number"==typeof+r&&Number.isInteger(+r)&&+r>=0&&(s=+r);let i="",o="";if(e.trim()){if(!e[0].trim())for(let r=0,t=e.length;r<t;r++)if(e[r].trim()){i=e.slice(0,r);break}}else i=e;if(e.trim()&&(""===e.slice(-1).trim()||" "===e.slice(-1)))for(let r=e.length;r--;)if(e[r].trim()){o=e.slice(r+1);break}return`${n(i,s,!1)}${e.trim()}${t(n(t(o),s,!0))}`}return e}
/**
 * @name ranges-push
 * @fileoverview Gather string index ranges
 * @version 6.0.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-push/}
 */const T={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function b(e,r){if(!Array.isArray(e)||!e.length)return e;const t={...T,...r};let n,s;if(t.strictlyTwoElementsInRangeArrays&&!e.filter((e=>e)).every(((e,r)=>2===e.length||(n=r,s=e.length,!1))))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) has not two but ${s} elements!`);if(!e.filter((e=>e)).every(((e,r)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(n=r,!1))))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) does not consist of only natural numbers!`);const i=e.filter((e=>e)).length**2;let o=0;return Array.from(e).filter((e=>e)).sort(((e,r)=>(t.progressFn&&(o+=1,t.progressFn(Math.floor(100*o/i))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1)))}const w={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function v(e){return null!=e}function S(e){return Number.isInteger(e)&&e>=0}function $(e){return"string"==typeof e}const O={limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1};class N{constructor(e){const r={...O,...e};if(r.mergeType&&1!==r.mergeType&&2!==r.mergeType)if($(r.mergeType)&&"1"===r.mergeType.trim())r.mergeType=1;else{if(!$(r.mergeType)||"2"!==r.mergeType.trim())throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof r.mergeType}", equal to ${JSON.stringify(r.mergeType,null,4)}`);r.mergeType=2}this.opts=r,this.ranges=[]}ranges;opts;add(e,r,t){if(null==e&&null==r)return;if(v(e)&&!v(r)){if(Array.isArray(e)){if(e.length){if(e.some((e=>Array.isArray(e))))return void e.forEach((e=>{Array.isArray(e)&&this.add(...e)}));e.length&&S(+e[0])&&S(+e[1])&&this.add(...e)}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(e,null,0)}) but second-one, "to" is not (${JSON.stringify(r,null,0)})`)}if(!v(e)&&v(r))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(r,null,0)}) but first-one, "from" is not (${JSON.stringify(e,null,0)})`);const n=+e,s=+r;if(S(t)&&(t=String(t)),!S(n)||!S(s))throw S(n)&&n>=0?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof s}" equal to: ${JSON.stringify(s,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof n}" equal to: ${JSON.stringify(n,null,4)}`);if(v(t)&&!$(t)&&!S(t))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof t}, equal to:\n${JSON.stringify(t,null,4)}`);if(v(this.ranges)&&Array.isArray(this.last())&&n===this.last()[1]){if(this.last()[1]=s,this.last(),null!==this.last()[2]&&v(t)){let e=!(this.last()[2]&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?t:this.last()[2]+t;this.opts.limitToBeAddedWhitespace&&(e=d(e,this.opts.limitLinebreaksCount)),$(e)&&!e.length||(this.last()[2]=e)}}else{this.ranges||(this.ranges=[]);const e=void 0===t||$(t)&&!t.length?[n,s]:[n,s,t&&this.opts.limitToBeAddedWhitespace?d(t,this.opts.limitLinebreaksCount):t];this.ranges.push(e)}}push(e,r,t){this.add(e,r,t)}current(){return Array.isArray(this.ranges)&&this.ranges.length?(this.ranges=function(e,r){function t(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return null;let n;if(r){if(!t(r))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(r,null,4)} (type ${typeof r})`);if(n={...w,...r},n.progressFn&&t(n.progressFn)&&!Object.keys(n.progressFn).length)n.progressFn=null;else if(n.progressFn&&"function"!=typeof n.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof n.progressFn}", equal to ${JSON.stringify(n.progressFn,null,4)}`);if(n.mergeType&&1!=+n.mergeType&&2!=+n.mergeType)throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof n.mergeType}", equal to ${JSON.stringify(n.mergeType,null,4)}`);if("boolean"!=typeof n.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof n.joinRangesThatTouchEdges}", equal to ${JSON.stringify(n.joinRangesThatTouchEdges,null,4)}`)}else n={...w};const s=e.filter((e=>e)).map((e=>[...e])).filter((e=>void 0!==e[2]||e[0]!==e[1]));let i,o,a;if(i=n.progressFn?b(s,{progressFn:e=>{a=Math.floor(e/5),a!==o&&(o=a,n.progressFn(a))}}):b(s),!i)return null;const l=i.length-1;for(let e=l;e>0;e--)n.progressFn&&(a=Math.floor(78*(1-e/l))+21,a!==o&&a>o&&(o=a,n.progressFn(a))),(i[e][0]<=i[e-1][0]||!n.joinRangesThatTouchEdges&&i[e][0]<i[e-1][1]||n.joinRangesThatTouchEdges&&i[e][0]<=i[e-1][1])&&(i[e-1][0]=Math.min(i[e][0],i[e-1][0]),i[e-1][1]=Math.max(i[e][1],i[e-1][1]),void 0!==i[e][2]&&(i[e-1][0]>=i[e][0]||i[e-1][1]<=i[e][1])&&null!==i[e-1][2]&&(null===i[e][2]&&null!==i[e-1][2]?i[e-1][2]=null:null!=i[e-1][2]?2==+n.mergeType&&i[e-1][0]===i[e][0]?i[e-1][2]=i[e][2]:i[e-1][2]+=i[e][2]:i[e-1][2]=i[e][2]),i.splice(e,1),e=i.length);return i.length?i:null}(this.ranges,{mergeType:this.opts.mergeType}),this.ranges&&this.opts.limitToBeAddedWhitespace?this.ranges.map((e=>v(e[2])?[e[0],e[1],d(e[2],this.opts.limitLinebreaksCount)]:e)):this.ranges):null}wipe(){this.ranges=[]}replace(e){if(Array.isArray(e)&&e.length){if(!Array.isArray(e[0])||!S(e[0][0]))throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(e[0],null,4)} should be an array and its first element should be an integer, a string index.`);this.ranges=Array.from(e)}else this.ranges=[]}last(){return Array.isArray(this.ranges)&&this.ranges.length?this.ranges[this.ranges.length-1]:null}}var _="[object Symbol]",R=/^\s+|\s+$/g,I="\\u0300-\\u036f\\ufe20-\\ufe23",A="[\\ud800-\\udfff]",F="["+I+"\\u20d0-\\u20f0]",E="\\ud83c[\\udffb-\\udfff]",D="[^\\ud800-\\udfff]",j="(?:\\ud83c[\\udde6-\\uddff]){2}",W="[\\ud800-\\udbff][\\udc00-\\udfff]",H="(?:"+F+"|"+E+")"+"?",J="[\\ufe0e\\ufe0f]?",C=J+H+("(?:\\u200d(?:"+[D,j,W].join("|")+")"+J+H+")*"),M="(?:"+[D+F+"?",F,j,W,A].join("|")+")",k=RegExp(E+"(?="+E+")|"+M+C,"g"),x=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),q="object"==typeof self&&self&&self.Object===Object&&self,K="object"==typeof r&&r&&r.Object===Object&&r||q||Function("return this")();function P(e,r,t){if(r!=r)return function(e,r,t,n){for(var s=e.length,i=t+(n?1:-1);n?i--:++i<s;)if(r(e[i],i,e))return i;return-1}(e,U,t);for(var n=t-1,s=e.length;++n<s;)if(e[n]===r)return n;return-1}function U(e){return e!=e}function V(e){return function(e){return x.test(e)}(e)?function(e){return e.match(k)||[]}(e):function(e){return e.split("")}(e)}var B=Object.prototype.toString,L=K.Symbol,z=L?L.prototype:void 0,G=z?z.toString:void 0;function Z(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&B.call(e)==_}(e))return G?G.call(e):"";var r=e+"";return"0"==r&&1/e==-Infinity?"-0":r}function Q(e,r,t){var n=e.length;return t=void 0===t?n:t,!r&&t>=n?e:function(e,r,t){var n=-1,s=e.length;r<0&&(r=-r>s?0:s+r),(t=t>s?s:t)<0&&(t+=s),s=r>t?0:t-r>>>0,r>>>=0;for(var i=Array(s);++n<s;)i[n]=e[n+r];return i}(e,r,t)}var Y=function(e,r,t){var n;if((e=null==(n=e)?"":Z(n))&&(t||void 0===r))return e.replace(R,"");if(!e||!(r=Z(r)))return e;var s=V(e),i=V(r),o=function(e,r){for(var t=-1,n=e.length;++t<n&&P(r,e[t],0)>-1;);return t}(s,i),a=function(e,r){for(var t=e.length;t--&&P(r,e[t],0)>-1;);return t}(s,i)+1;return Q(s,o,a).join("")};
/**
 * @name string-remove-thousand-separators
 * @fileoverview Detects and removes thousand separators (dot/comma/quote/space) from string-type digits
 * @version 6.0.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-remove-thousand-separators/}
 */function X(e,r){let t=!0;const n=[".",",","'"," "];let s;if("string"!=typeof e)throw new TypeError(`string-remove-thousand-separators/remSep(): [THROW_ID_01] Input must be string! Currently it's: ${typeof e}, equal to:\n${JSON.stringify(e,null,4)}`);if(r&&"object"!=typeof r)throw new TypeError(`string-remove-thousand-separators/remSep(): [THROW_ID_02] Options object must be a plain object! Currently it's: ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`);const i={removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1,...r},o=Y(e.trim(),'"');if(""===o)return o;const a=new N;for(let e=0,r=o.length;e<r;e++){if(i.removeThousandSeparatorsFromNumbers&&""===o[e].trim()&&a.add(e,e+1),i.removeThousandSeparatorsFromNumbers&&"'"===o[e]&&(a.add(e,e+1),"'"===o[e+1])){t=!1;break}if(n.includes(o[e])){if(void 0!==o[e+1]&&/^\d*$/.test(o[e+1]))if(void 0!==o[e+2]){if(!/^\d*$/.test(o[e+2])){t=!1;break}if(void 0!==o[e+3]){if(!/^\d*$/.test(o[e+3])){t=!1;break}if(void 0!==o[e+4]&&/^\d*$/.test(o[e+4])){t=!1;break}if(i.removeThousandSeparatorsFromNumbers&&a.add(e,e+1),s){if(o[e]!==s){t=!1;break}}else s=o[e]}else i.removeThousandSeparatorsFromNumbers&&i.forceUKStyle&&","===o[e]&&a.add(e,e+1,".")}else i.forceUKStyle&&","===o[e]&&a.add(e,e+1,"."),i.padSingleDecimalPlaceNumbers&&a.add(e+2,e+2,"0")}else if(!/^\d*$/.test(o[e])){t=!1;break}}return t&&a.current()?function(e,r,t){let n,s=0,i=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof e)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(r&&!Array.isArray(r))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(t&&"function"!=typeof t)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(!r||!r.filter((e=>e)).length)return e;n=Array.isArray(r)&&Number.isInteger(r[0])&&Number.isInteger(r[1])?[Array.from(r)]:Array.from(r);const o=n.length;let a=0;n.filter((e=>e)).forEach(((e,r)=>{if(t&&(s=Math.floor(a/o*10),s!==i&&(i=s,t(s))),!Array.isArray(e))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${r}th element not an array: ${JSON.stringify(e,null,4)}, which is ${typeof e}`);if(!Number.isInteger(e[0])){if(!Number.isInteger(+e[0])||+e[0]<0)throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${r}th element, array ${JSON.stringify(e,null,0)}. Its first element is not an integer, string index, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0],null,4)}.`);n[r][0]=+n[r][0]}if(!Number.isInteger(e[1])){if(!Number.isInteger(+e[1])||+e[1]<0)throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${r}th element, array ${JSON.stringify(e,null,0)}. Its second element is not an integer, string index, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1],null,4)}.`);n[r][1]=+n[r][1]}a+=1}));const l=m(n,{progressFn:e=>{t&&(s=10+Math.floor(e/10),s!==i&&(i=s,t(s)))}}),u=Array.isArray(l)?l.length:0;if(u>0){const r=e.slice(l[u-1][1]);e=l.reduce(((r,n,o,a)=>(t&&(s=20+Math.floor(o/u*80),s!==i&&(i=s,t(s))),r+e.slice(0===o?0:a[o-1][1],a[o][0])+(a[o][2]||""))),""),e+=r}return e}(o,a.current()):o}
/**
 * @name csv-split-easy
 * @fileoverview Splits the CSV string into array of arrays, each representing a row of columns
 * @version 6.0.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/csv-split-easy/}
 */const ee={removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1};
/*!
 * currency.js - v2.0.4
 * http://scurker.github.io/currency.js
 *
 * Copyright (c) 2021 Jason Wilson
 * Released under MIT license
 */
var re={symbol:"$",separator:",",decimal:".",errorOnInvalid:!1,precision:2,pattern:"!#",negativePattern:"-!#",format:function(e,r){var t=r.pattern,n=r.negativePattern,s=r.symbol,i=r.separator,o=r.decimal,a=r.groups,l=(""+e).replace(/^-/,"").split("."),u=l[0],f=l[1];return(e.value>=0?t:n).replace("!",s).replace("#",u.replace(a,"$1"+i)+(f?o+f:""))},fromCents:!1},te=function(e){return Math.round(e)},ne=function(e){return Math.pow(10,e)},se=/(\d)(?=(\d{3})+\b)/g,ie=/(\d)(?=(\d\d)+\d\b)/g;function oe(e,r){var t=this;if(!(t instanceof oe))return new oe(e,r);var n=Object.assign({},re,r),s=ne(n.precision),i=ae(e,n);t.intValue=i,t.value=i/s,n.increment=n.increment||1/s,n.groups=n.useVedic?ie:se,this.s=n,this.p=s}function ae(e,r){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=0,s=r.decimal,i=r.errorOnInvalid,o=r.precision,a=r.fromCents,l=ne(o),u="number"==typeof e,f=e instanceof oe;if(f&&a)return e.intValue;if(u||f)n=f?e.value:e;else if("string"==typeof e){var g=new RegExp("[^-\\d"+s+"]","g"),p=new RegExp("\\"+s,"g");n=(n=e.replace(/\((.*)\)/,"-$1").replace(g,"").replace(p,"."))||0}else{if(i)throw Error("Invalid Input");n=0}return a||(n=(n*=l).toFixed(4)),t?te(n):n}function le(e){return!!e.trim()&&Number(e)==Number(e)}oe.prototype={add:function(e){var r=this.intValue,t=this.s,n=this.p;return oe((r+=ae(e,t))/(t.fromCents?1:n),t)},subtract:function(e){var r=this.intValue,t=this.s,n=this.p;return oe((r-=ae(e,t))/(t.fromCents?1:n),t)},multiply:function(e){var r=this.intValue,t=this.s;return oe((r*=e)/(t.fromCents?1:ne(t.precision)),t)},divide:function(e){var r=this.intValue,t=this.s;return oe(r/=ae(e,t,!1),t)},distribute:function(e){for(var r=this.intValue,t=this.p,n=this.s,s=[],i=Math[r>=0?"floor":"ceil"](r/e),o=Math.abs(r-i*e),a=n.fromCents?1:t;0!==e;e--){var l=oe(i/a,n);o-- >0&&(l=l[r>=0?"add":"subtract"](1/a)),s.push(l)}return s},dollars:function(){return~~this.value},cents:function(){return~~(this.intValue%this.p)},format:function(e){var r=this.s;return"function"==typeof e?e(this,r):r.format(this,Object.assign({},r,e))},toString:function(){var e,r,t=this.s;return(e=this.intValue/this.p,r=t.increment,te(e/r)*r).toFixed(t.precision)},toJSON:function(){return this.value}};const ue=["د.إ","؋","L","֏","ƒ","Kz","$","ƒ","₼","KM","৳","лв",".د.ب","FBu","$b","R$","฿","Nu.","P","p.","BZ$","FC","CHF","¥","₡","₱","Kč","Fdj","kr","RD$","دج","kr","Nfk","Br","Ξ","€","₾","₵","GH₵","D","FG","Q","L","kn","G","Ft","Rp","₪","₹","ع.د","﷼","kr","J$","JD","¥","KSh","лв","៛","CF","₩","₩","KD","лв","₭","₨","M","Ł","Lt","Ls","LD","MAD","lei","Ar","ден","K","₮","MOP$","UM","₨","Rf","MK","RM","MT","₦","C$","kr","₨","﷼","B/.","S/.","K","₱","₨","zł","Gs","﷼","￥","lei","Дин.","₽","R₣","﷼","₨","ج.س.","kr","£","Le","S","Db","E","฿","SM","T","د.ت","T$","₤","₺","TT$","NT$","TSh","₴","USh","$U","лв","Bs","₫","VT","WS$","FCFA","Ƀ","CFA","₣","﷼","R","Z$"];function fe(e){if("string"!=typeof e)throw new Error("csv-sort/util/findType(): input must be string! Currently it's: "+typeof e);return le(e)||ue.some((r=>le(e.replace(r,"").replace(/[,.]/g,""))))?"numeric":e.trim()?"text":"empty"}e.sort=function(e){let r=null,t=null;if("string"!=typeof e)throw new TypeError(`csv-sort/csvSort(): [THROW_ID_01] The input is of a wrong type! We accept either string of array of arrays. We got instead: ${typeof e}, equal to:\n${JSON.stringify(e,null,4)}`);if(!e.trim())return{res:[[""]],msgContent:r,msgType:t};let n=function(e,r){let t=0,n=0,s=[];const i=[];let o=!1,a=!0;if(r&&"object"!=typeof r)throw new Error(`csv-split-easy/split(): [THROW_ID_02] Options object must be a plain object! Currently it's of a type ${typeof r} equal to:\n${JSON.stringify(r,null,4)}`);const l={...ee,...r};if("string"!=typeof e)throw new TypeError(`csv-split-easy/split(): [THROW_ID_04] input must be string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(""===e)return[[""]];for(let r=0,u=(e=e.trim()).length;r<u;r++){if(a&&'"'!==e[r]&&","!==e[r]&&""!==e[r].trim()&&(a=!1),'"'===e[r])if(o&&'"'===e[r+1])r+=1;else if(o){o=!1;const n=e.slice(t,r);""!==n.trim()&&(a=!1);const i=/""/.test(n)?n.replace(/""/g,'"'):X(n,{removeThousandSeparatorsFromNumbers:l.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:l.padSingleDecimalPlaceNumbers,forceUKStyle:l.forceUKStyle});s.push(i)}else o=!0,t=r+1;else if(o||","!==e[r])if("\n"===e[r]||"\r"===e[r]){if(!n){if(n=r,!o&&'"'!==e[r-1]){const n=e.slice(t,r);""!==n.trim()&&(a=!1),s.push(X(n,{removeThousandSeparatorsFromNumbers:l.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:l.padSingleDecimalPlaceNumbers,forceUKStyle:l.forceUKStyle}))}a?s.length=0:i.push(s),a=!0,s=[]}t=r+1}else n&&(n=0,t=r);else{if('"'!==e[r-1]&&!o){const n=e.slice(t,r);""!==n.trim()&&(a=!1),s.push(X(n,{removeThousandSeparatorsFromNumbers:l.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:l.padSingleDecimalPlaceNumbers,forceUKStyle:l.forceUKStyle}))}t=r+1,n&&(n=0)}if(r+1===u){if('"'!==e[r]){const n=e.slice(t,r+1);n.trim()&&(a=!1),s.push(X(n,{removeThousandSeparatorsFromNumbers:l.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:l.padSingleDecimalPlaceNumbers,forceUKStyle:l.forceUKStyle}))}a?s=[]:i.push(s),a=!0}}return 0===i.length?[[""]]:i}(e),s=[],i=!1,o=!0;const a=[];let l=null;for(let e=n.length-1;e>=0;e--)if(s.length){0===e&&(i=n[e].every((e=>"text"===fe(e)||"empty"===fe(e)))),i||s.length===n[e].length||(o=!1);let r=null;for(let t=0,o=n[e].length;t<o;t++)if(null===r&&"empty"===fe(n[e][t].trim())&&(r=t),null!==r&&"empty"!==fe(n[e][t].trim())&&(r=null),fe(n[e][t].trim())!==s[t]&&!i){const r=fe(n[e][t].trim());if(Array.isArray(s[t]))s[t].includes(r)||s[t].push(fe(n[e][t].trim()));else if(s[t]!==r){const e=s[t];s[t]=[],s[t].push(e),s[t].push(r)}}null!==l&&null!==r&&r>l&&(!i||i&&0!==e)&&(l=r)}else if(1!==n[e].length||""!==n[e][0])for(let r=0,t=n[e].length;r<t;r++)s.push(fe(n[e][r].trim())),null===l&&"empty"===fe(n[e][r].trim())&&(l=r),null!==l&&"empty"!==fe(n[e][r].trim())&&(l=null);l||(l=s.length);let u=0;for(let e=0,r=s.length;e<r&&"empty"===s[e];e++)u=e;0!==u&&(n=n.map((e=>e.slice(u+1,l))),s=s.slice(u+1,l));const f=[];let g;s.forEach(((e,r)=>{"numeric"===e&&f.push(r)}));const h=i?1:0;if(1===f.length)g=f[0];else{if(0===f.length)throw new Error('csv-sort/csvSort(): [THROW_ID_03] Your CSV file does not contain numeric-only columns and computer was not able to detect the "Balance" column!');{let e=Array.from(f);const r=[];for(let t=0,s=e.length;t<s;t++){const s=e[t];let i,o,l=!0,u=!0;for(let e=h,t=n.length;e<t&&(l&&(null==i?i=n[e][s]:i===n[e][s]?(r.push(s),l=!1):i=n[e][s]),u&&(null==o?o=n[e][s]:n[e][s]!==o&&(u=!1)),l);e++);u&&a.push(s)}if(e=p(e,...r),1===e.length)g=e[0];else if(0===e.length)throw new Error('csv-sort/csvSort(): [THROW_ID_04] The computer can\'t find the "Balance" column! It saw some numeric-only columns, but they all seem to have certain rows with the same values as rows right below/above them!')}}if(!g)throw new Error("csv-sort/csvSort(): [THROW_ID_05] Sadly computer couldn't find its way in this CSV and had to stop working on it.");const c=p(Array.from(s.reduce(((e,r,t)=>(("string"==typeof r&&"numeric"===r||Array.isArray(r)&&r.includes("numeric"))&&e.push(t),e)),[])),g,...a),y=[];y.push(n[n.length-1].slice(0,l));const m=[],d=i?1:0;for(let e=n.length-2;e>=d;e--)for(let e=n.length-2;e>=d;e--)if(!m.includes(e)){let r=!1;for(let t=0,s=c.length;t<s;t++){let s=null;""!==n[e][c[t]]&&(s=oe(n[e][c[t]]));let i=null;""!==n[e][g]&&(i=oe(n[e][g]));let o=null;""!==y[0][g]&&(o=oe(y[0][g]).format());let a=null;""!==y[y.length-1][c[t]]&&(a=oe(y[y.length-1][c[t]]).format());let u=null;if(""!==y[y.length-1][g]&&(u=oe(y[y.length-1][g])),s&&i.add(s).format()===o){y.unshift(n[e].slice(0,l)),m.push(e),r=!0;break}if(s&&i.subtract(s).format()===o){y.unshift(n[e].slice(0,l)),m.push(e),r=!0;break}if(a&&u.add(a).format()===i.format()){y.push(n[e].slice(0,l)),m.push(e),r=!0;break}if(a&&u.subtract(a).format()===i.format()){y.push(n[e].slice(0,l)),m.push(e),r=!0;break}}if(r){r=!1;break}}return i&&(o&&n[0].length>s.length&&(n[0].length=s.length),y.unshift(n[0].slice(0,l))),n.length-(i?2:1)!==m.length&&(r="Not all rows were recognised!",t="alert"),{res:y,msgContent:r,msgType:t}},Object.defineProperty(e,"__esModule",{value:!0})}));
