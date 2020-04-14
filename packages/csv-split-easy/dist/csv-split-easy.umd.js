/**
 * csv-split-easy
 * Splits the CSV string into array of arrays, each representing a row of columns
 * Version: 3.0.53
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/csv-split-easy
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e=e||self).csvSplitEasy=r()}(this,(function(){"use strict";function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function r(e,r){if(!Array.isArray(e))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===e.length)return e;const t=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},r);let n,s;if(t.strictlyTwoElementsInRangeArrays&&!e.every((e,r)=>2===e.length||(n=r,s=e.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) has not two but ${s} elements!`);if(!e.every((e,r)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(n=r,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) does not consist of only natural numbers!`);const o=e.length*e.length;let i=0;return Array.from(e).sort((e,r)=>(t.progressFn&&(i++,t.progressFn(Math.floor(100*i/o))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1))}function t(e,t){function n(e){return"string"==typeof e}function s(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e))return e;const o={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let i;if(t){if(!s(t))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(t,null,4)} (type ${typeof t})`);if(i=Object.assign({},o,t),i.progressFn&&s(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof i.progressFn}", equal to ${JSON.stringify(i.progressFn,null,4)}`);if(i.mergeType&&1!==i.mergeType&&2!==i.mergeType)if(n(i.mergeType)&&"1"===i.mergeType.trim())i.mergeType=1;else{if(!n(i.mergeType)||"2"!==i.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof i.mergeType}", equal to ${JSON.stringify(i.mergeType,null,4)}`);i.mergeType=2}if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof i.joinRangesThatTouchEdges}", equal to ${JSON.stringify(i.joinRangesThatTouchEdges,null,4)}`)}else i=Object.assign({},o);const a=e.map(e=>[...e]).filter(e=>void 0!==e[2]||e[0]!==e[1]);let u,l,f;u=i.progressFn?r(a,{progressFn:e=>{f=Math.floor(e/5),f!==l&&(l=f,i.progressFn(f))}}):r(a);const p=u.length-1;for(let e=p;e>0;e--)i.progressFn&&(f=Math.floor(78*(1-e/p))+21,f!==l&&f>l&&(l=f,i.progressFn(f))),(u[e][0]<=u[e-1][0]||!i.joinRangesThatTouchEdges&&u[e][0]<u[e-1][1]||i.joinRangesThatTouchEdges&&u[e][0]<=u[e-1][1])&&(u[e-1][0]=Math.min(u[e][0],u[e-1][0]),u[e-1][1]=Math.max(u[e][1],u[e-1][1]),void 0!==u[e][2]&&(u[e-1][0]>=u[e][0]||u[e-1][1]<=u[e][1])&&null!==u[e-1][2]&&(null===u[e][2]&&null!==u[e-1][2]?u[e-1][2]=null:void 0!==u[e-1][2]?2===i.mergeType&&u[e-1][0]===u[e][0]?u[e-1][2]=u[e][2]:u[e-1][2]+=u[e][2]:u[e-1][2]=u[e][2]),u.splice(e,1),e=u.length);return u}function n(e){return null!=e}function s(e){return"string"==typeof e}function o(e,r=!0,t){if(!(t.trim().length||e.length&&"\n"!==t&&" "!==t&&" "===(r?e[e.length-1]:e[0])||e.length&&"\n"===(r?e[e.length-1]:e[0])&&"\n"!==t&&" "!==t))if(r){if(("\n"===t||" "===t)&&e.length&&" "===e[e.length-1])for(;e.length&&" "===e[e.length-1];)e.pop();e.push(" "===t||"\n"===t?t:" ")}else{if(("\n"===t||" "===t)&&e.length&&" "===e[0])for(;e.length&&" "===e[0];)e.shift();e.unshift(" "===t||"\n"===t?t:" ")}}function i(e,r){if("string"==typeof e&&e.length){let t,n,s=!1;if(e.includes("\r\n")&&(s=!0),t=r&&"number"==typeof r?r:1,""===e.trim()){const r=[];for(n=t,Array.from(e).forEach(e=>{("\n"!==e||n)&&("\n"===e&&n--,o(r,!0,e))});r.length>1&&" "===r[r.length-1];)r.pop();return r.join("")}const i=[];if(n=t,""===e[0].trim())for(let r=0,t=e.length;r<t&&0===e[r].trim().length;r++)("\n"!==e[r]||n)&&("\n"===e[r]&&n--,o(i,!0,e[r]));const a=[];if(n=t,""===e.slice(-1).trim())for(let r=e.length;r--&&0===e[r].trim().length;)("\n"!==e[r]||n)&&("\n"===e[r]&&n--,o(a,!1,e[r]));return s?`${i.join("")}${e.trim()}${a.join("")}`.replace(/\n/g,"\r\n"):i.join("")+e.trim()+a.join("")}return e}function a(e){return null!=e}function u(e){return Number.isInteger(e)&&e>=0}function l(e){return"string"==typeof e}function f(e){return/^\d*$/.test(e)?parseInt(e,10):e}class p{constructor(e){const r=Object.assign({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1},e);if(r.mergeType&&1!==r.mergeType&&2!==r.mergeType)if(l(r.mergeType)&&"1"===r.mergeType.trim())r.mergeType=1;else{if(!l(r.mergeType)||"2"!==r.mergeType.trim())throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof r.mergeType}", equal to ${JSON.stringify(r.mergeType,null,4)}`);r.mergeType=2}this.opts=r}add(e,r,t,...n){if(n.length>0)throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ${JSON.stringify(n,null,4)}`);if(!a(e)&&!a(r))return;if(a(e)&&!a(r)){if(Array.isArray(e)){if(e.length){if(e.some(e=>Array.isArray(e)))return void e.forEach(e=>{Array.isArray(e)&&this.add(...e)});e.length>1&&u(f(e[0]))&&u(f(e[1]))&&this.add(...e)}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(e,null,0)}) but second-one, "to" is not (${JSON.stringify(r,null,0)})`)}if(!a(e)&&a(r))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(r,null,0)}) but first-one, "from" is not (${JSON.stringify(e,null,0)})`);const s=/^\d*$/.test(e)?parseInt(e,10):e,o=/^\d*$/.test(r)?parseInt(r,10):r;if(u(t)&&(t=String(t)),!u(s)||!u(o))throw u(s)&&s>=0?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof o}" equal to: ${JSON.stringify(o,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof s}" equal to: ${JSON.stringify(s,null,4)}`);if(a(t)&&!l(t)&&!u(t))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof t}, equal to:\n${JSON.stringify(t,null,4)}`);if(a(this.slices)&&Array.isArray(this.last())&&s===this.last()[1]){if(this.last()[1]=o,this.last()[2],null!==this.last()[2]&&a(t)){let e=!(a(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?t:this.last()[2]+t;this.opts.limitToBeAddedWhitespace&&(e=i(e,this.opts.limitLinebreaksCount)),l(e)&&!e.length||(this.last()[2]=e)}}else{this.slices||(this.slices=[]);const e=void 0===t||l(t)&&!t.length?[s,o]:[s,o,this.opts.limitToBeAddedWhitespace?i(t,this.opts.limitLinebreaksCount):t];this.slices.push(e)}}push(e,r,t,...n){this.add(e,r,t,...n)}current(){return null!=this.slices?(this.slices=t(this.slices,{mergeType:this.opts.mergeType}),this.opts.limitToBeAddedWhitespace?this.slices.map(e=>a(e[2])?[e[0],e[1],i(e[2],this.opts.limitLinebreaksCount)]:e):this.slices):null}wipe(){this.slices=void 0}replace(e){if(Array.isArray(e)&&e.length){if(!Array.isArray(e[0])||!u(e[0][0]))throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(e[0],null,4)} should be an array and its first element should be an integer, a string index.`);this.slices=Array.from(e)}else this.slices=void 0}last(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}var g,c,y=Function.prototype,h=Object.prototype,m=y.toString,d=h.hasOwnProperty,b=m.call(Object),T=h.toString,w=(g=Object.getPrototypeOf,c=Object,function(e){return g(c(e))});var S=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||"[object Object]"!=T.call(e)||function(e){var r=!1;if(null!=e&&"function"!=typeof e.toString)try{r=!!(e+"")}catch(e){}return r}(e))return!1;var r=w(e);if(null===r)return!0;var t=d.call(r,"constructor")&&r.constructor;return"function"==typeof t&&t instanceof t&&m.call(t)==b},v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var O=function(e,r){return e(r={exports:{}},r.exports),r.exports}((function(e,r){!function(t){function n(e,r){return r instanceof Object||(r={trim:!0}),"number"==typeof e&&!isNaN(e)||(e=(e||"").toString(),"trim"in r&&!r.trim?!/\s/.test(e):!!(e=e.trim())&&!isNaN(e))}e.exports&&(r=e.exports=n),r.isNumeric=n}()})),N=(O.isNumeric,/^\s+|\s+$/g),$="[\\ud800-\\udfff]",_="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",j="\\ud83c[\\udffb-\\udfff]",I="[^\\ud800-\\udfff]",R="(?:\\ud83c[\\udde6-\\uddff]){2}",E="[\\ud800-\\udbff][\\udc00-\\udfff]",D="(?:"+_+"|"+j+")"+"?",A="[\\ufe0e\\ufe0f]?"+D+("(?:\\u200d(?:"+[I,R,E].join("|")+")[\\ufe0e\\ufe0f]?"+D+")*"),F="(?:"+[I+_+"?",_,R,E,$].join("|")+")",W=RegExp(j+"(?="+j+")|"+F+A,"g"),H=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),J="object"==typeof v&&v&&v.Object===Object&&v,q="object"==typeof self&&self&&self.Object===Object&&self,x=J||q||Function("return this")();function C(e,r,t){if(r!=r)return function(e,r,t,n){for(var s=e.length,o=t+(n?1:-1);n?o--:++o<s;)if(r(e[o],o,e))return o;return-1}(e,P,t);for(var n=t-1,s=e.length;++n<s;)if(e[n]===r)return n;return-1}function P(e){return e!=e}function k(e){return function(e){return H.test(e)}(e)?function(e){return e.match(W)||[]}(e):function(e){return e.split("")}(e)}var K=Object.prototype.toString,U=x.Symbol,M=U?U.prototype:void 0,B=M?M.toString:void 0;function L(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==K.call(e)}(e))return B?B.call(e):"";var r=e+"";return"0"==r&&1/e==-1/0?"-0":r}function z(e,r,t){var n=e.length;return t=void 0===t?n:t,!r&&t>=n?e:function(e,r,t){var n=-1,s=e.length;r<0&&(r=-r>s?0:s+r),(t=t>s?s:t)<0&&(t+=s),s=r>t?0:t-r>>>0,r>>>=0;for(var o=Array(s);++n<s;)o[n]=e[n+r];return o}(e,r,t)}var G=function(e,r,t){var n;if((e=null==(n=e)?"":L(n))&&(t||void 0===r))return e.replace(N,"");if(!e||!(r=L(r)))return e;var s=k(e),o=k(r);return z(s,function(e,r){for(var t=-1,n=e.length;++t<n&&C(r,e[t],0)>-1;);return t}(s,o),function(e,r){for(var t=e.length;t--&&C(r,e[t],0)>-1;);return t}(s,o)+1).join("")};function Q(e,r){let o=!0;const i=[".",",","'"," "];let a;if("string"!=typeof e)throw new TypeError(`string-remove-thousand-separators/remSep(): [THROW_ID_01] Input must be string! Currently it's: ${typeof e}, equal to:\n${JSON.stringify(e,null,4)}`);if(null!=r&&!S(r))throw new TypeError(`string-remove-thousand-separators/remSep(): [THROW_ID_02] Options object must be a plain object! Currently it's: ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`);const u=Object.assign({},{removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1},r),l=G(e.trim(),'"');if(""===l)return l;const f=new p;for(let e=0,r=l.length;e<r;e++){if(u.removeThousandSeparatorsFromNumbers&&""===l[e].trim()&&f.add(e,e+1),u.removeThousandSeparatorsFromNumbers&&"'"===l[e]&&(f.add(e,e+1),"'"===l[e+1])){o=!1;break}if(i.includes(l[e])){if(void 0!==l[e+1]&&O(l[e+1]))if(void 0!==l[e+2]){if(!O(l[e+2])){o=!1;break}if(void 0!==l[e+3]){if(!O(l[e+3])){o=!1;break}if(void 0!==l[e+4]&&O(l[e+4])){o=!1;break}if(u.removeThousandSeparatorsFromNumbers&&f.add(e,e+1),a){if(l[e]!==a){o=!1;break}}else a=l[e]}else u.removeThousandSeparatorsFromNumbers&&u.forceUKStyle&&","===l[e]&&f.add(e,e+1,".")}else u.forceUKStyle&&","===l[e]&&f.add(e,e+1,"."),u.padSingleDecimalPlaceNumbers&&f.add(e+2,e+2,"0")}else if(!O(l[e])){o=!1;break}}return o&&f.current()?function(e,r,o){let i=0,a=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!s(e))throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(null===r)return e;if(!Array.isArray(r))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(o&&"function"!=typeof o)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof o}, equal to: ${JSON.stringify(o,null,4)}`);Array.isArray(r)&&(Number.isInteger(r[0])&&r[0]>=0||/^\d*$/.test(r[0]))&&(Number.isInteger(r[1])&&r[1]>=0||/^\d*$/.test(r[1]))&&(r=[r]);const u=r.length;let l=0;r.forEach((e,t)=>{if(o&&(i=Math.floor(l/u*10),i!==a&&(a=i,o(i))),!Array.isArray(e))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${t}th element not an array: ${JSON.stringify(e,null,4)}, which is ${typeof e}`);if(!Number.isInteger(e[0])||e[0]<0){if(!/^\d*$/.test(e[0]))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${t}th element, array [${e[0]},${e[1]}]. That array has first element not an integer, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0],null,4)}. Computer doesn't like this.`);r[t][0]=Number.parseInt(r[t][0],10)}if(!Number.isInteger(e[1])){if(!/^\d*$/.test(e[1]))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${t}th element, array [${e[0]},${e[1]}]. That array has second element not an integer, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1],null,4)}. Computer doesn't like this.`);r[t][1]=Number.parseInt(r[t][1],10)}l++});const f=t(r,{progressFn:e=>{o&&(i=10+Math.floor(e/10),i!==a&&(a=i,o(i)))}}),p=f.length;if(p>0){const r=e.slice(f[p-1][1]);e=f.reduce((r,t,s,u)=>{o&&(i=20+Math.floor(s/p*80),i!==a&&(a=i,o(i)));const l=0===s?0:u[s-1][1],f=u[s][0];return r+e.slice(l,f)+(n(u[s][2])?u[s][2]:"")},""),e+=r}return e}(l,f.current()):l}return function(r,t){var n=0,s=0,o=[],i=[],a=!1,u=!0;if(t&&"object"!==e(t))throw new Error("csv-split-easy/split(): [THROW_ID_02] Options object must be a plain object! Currently it's of a type ".concat(e(t)," equal to:\n").concat(JSON.stringify(t,null,4)));var l=Object.assign({},{removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1},t);if("string"!=typeof r)throw new TypeError("csv-split-easy/split(): [THROW_ID_04] input must be string! Currently it's: ".concat(e(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(""===r)return[[""]];for(var f=0,p=(r=r.trim()).length;f<p;f++){if(u&&'"'!==r[f]&&","!==r[f]&&""!==r[f].trim()&&(u=!1),'"'===r[f])if(a&&'"'===r[f+1])f+=1;else if(a){a=!1;var g=r.slice(n,f);""!==g.trim()&&(u=!1);var c=/""/.test(g)?g.replace(/""/g,'"'):Q(g,{removeThousandSeparatorsFromNumbers:l.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:l.padSingleDecimalPlaceNumbers,forceUKStyle:l.forceUKStyle});o.push(c)}else a=!0,n=f+1;else if(a||","!==r[f])if("\n"===r[f]||"\r"===r[f]){if(!s){if(s=f,!a&&'"'!==r[f-1]){var y=r.slice(n,f);""!==y.trim()&&(u=!1),o.push(Q(y,{removeThousandSeparatorsFromNumbers:l.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:l.padSingleDecimalPlaceNumbers,forceUKStyle:l.forceUKStyle}))}u?o=[]:i.push(o),u=!0,o=[]}n=f+1}else s&&(s=0,n=f);else{if('"'!==r[f-1]&&!a){var h=r.slice(n,f);""!==h.trim()&&(u=!1),o.push(Q(h,{removeThousandSeparatorsFromNumbers:l.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:l.padSingleDecimalPlaceNumbers,forceUKStyle:l.forceUKStyle}))}n=f+1,s&&(s=0)}if(f+1===p){if('"'!==r[f]){var m=r.slice(n,f+1);""!==m.trim()&&(u=!1),o.push(Q(m,{removeThousandSeparatorsFromNumbers:l.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:l.padSingleDecimalPlaceNumbers,forceUKStyle:l.forceUKStyle}))}u?o=[]:i.push(o),u=!0}}return 0===i.length?[[""]]:i}}));
