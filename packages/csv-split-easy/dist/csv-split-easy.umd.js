/**
 * csv-split-easy
 * Splits the CSV string into array of arrays, each representing a row of columns
 * Version: 3.0.63
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/csv-split-easy
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e=e||self).csvSplitEasy=r()}(this,(function(){"use strict";function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function r(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function t(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function n(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?t(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):t(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}))}return e}function s(e,r){if(!Array.isArray(e)||!e.length)return e;const t={strictlyTwoElementsInRangeArrays:!1,progressFn:null,...r};let n,s;if(t.strictlyTwoElementsInRangeArrays&&!e.every((e,r)=>2===e.length||(n=r,s=e.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) has not two but ${s} elements!`);if(!e.every((e,r)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(n=r,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) does not consist of only natural numbers!`);const o=e.length*e.length;let i=0;return Array.from(e).sort((e,r)=>(t.progressFn&&(i+=1,t.progressFn(Math.floor(100*i/o))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1))}function o(e,r){function t(e){return"string"==typeof e}function n(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return e;const o={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let i;if(r){if(!n(r))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(r,null,4)} (type ${typeof r})`);if(i={...o,...r},i.progressFn&&n(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof i.progressFn}", equal to ${JSON.stringify(i.progressFn,null,4)}`);if(i.mergeType&&1!==i.mergeType&&2!==i.mergeType)if(t(i.mergeType)&&"1"===i.mergeType.trim())i.mergeType=1;else{if(!t(i.mergeType)||"2"!==i.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof i.mergeType}", equal to ${JSON.stringify(i.mergeType,null,4)}`);i.mergeType=2}if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof i.joinRangesThatTouchEdges}", equal to ${JSON.stringify(i.joinRangesThatTouchEdges,null,4)}`)}else i={...o};const a=e.map(e=>[...e]).filter(e=>void 0!==e[2]||e[0]!==e[1]);let u,l,f;u=i.progressFn?s(a,{progressFn:e=>{f=Math.floor(e/5),f!==l&&(l=f,i.progressFn(f))}}):s(a);const p=u.length-1;for(let e=p;e>0;e--)i.progressFn&&(f=Math.floor(78*(1-e/p))+21,f!==l&&f>l&&(l=f,i.progressFn(f))),(u[e][0]<=u[e-1][0]||!i.joinRangesThatTouchEdges&&u[e][0]<u[e-1][1]||i.joinRangesThatTouchEdges&&u[e][0]<=u[e-1][1])&&(u[e-1][0]=Math.min(u[e][0],u[e-1][0]),u[e-1][1]=Math.max(u[e][1],u[e-1][1]),void 0!==u[e][2]&&(u[e-1][0]>=u[e][0]||u[e-1][1]<=u[e][1])&&null!==u[e-1][2]&&(null===u[e][2]&&null!==u[e-1][2]?u[e-1][2]=null:void 0!==u[e-1][2]?2===i.mergeType&&u[e-1][0]===u[e][0]?u[e-1][2]=u[e][2]:u[e-1][2]+=u[e][2]:u[e-1][2]=u[e][2]),u.splice(e,1),e=u.length);return u}function i(e){return null!=e}function a(e){return"string"==typeof e}function u(e,r=!0,t){if(!(t.trim()||e.length&&"\n"!==t&&" "!==t&&" "===(r?e[e.length-1]:e[0])||e.length&&"\n"===(r?e[e.length-1]:e[0])&&"\n"!==t&&" "!==t))if(r){if(("\n"===t||" "===t)&&e.length&&" "===e[e.length-1])for(;e.length&&" "===e[e.length-1];)e.pop();e.push(" "===t||"\n"===t?t:" ")}else{if(("\n"===t||" "===t)&&e.length&&" "===e[0])for(;e.length&&" "===e[0];)e.shift();e.unshift(" "===t||"\n"===t?t:" ")}}function l(e,r){if("string"==typeof e&&e.length){let t,n,s=!1;if(e.includes("\r\n")&&(s=!0),t=r&&"number"==typeof r?r:1,""===e.trim()){const r=[];for(n=t,Array.from(e).forEach(e=>{("\n"!==e||n)&&("\n"===e&&(n-=1),u(r,!0,e))});r.length>1&&" "===r[r.length-1];)r.pop();return r.join("")}const o=[];if(n=t,""===e[0].trim())for(let r=0,t=e.length;r<t&&!e[r].trim();r++)("\n"!==e[r]||n)&&("\n"===e[r]&&(n-=1),u(o,!0,e[r]));const i=[];if(n=t,""===e.slice(-1).trim())for(let r=e.length;r--&&!e[r].trim();)("\n"!==e[r]||n)&&("\n"===e[r]&&(n-=1),u(i,!1,e[r]));return s?`${o.join("")}${e.trim()}${i.join("")}`.replace(/\n/g,"\r\n"):o.join("")+e.trim()+i.join("")}return e}function f(e){return null!=e}function p(e){return Number.isInteger(e)&&e>=0}function g(e){return"string"==typeof e}function c(e){return/^\d*$/.test(e)?parseInt(e,10):e}class y{constructor(e){const r={limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1,...e};if(r.mergeType&&1!==r.mergeType&&2!==r.mergeType)if(g(r.mergeType)&&"1"===r.mergeType.trim())r.mergeType=1;else{if(!g(r.mergeType)||"2"!==r.mergeType.trim())throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof r.mergeType}", equal to ${JSON.stringify(r.mergeType,null,4)}`);r.mergeType=2}this.opts=r}add(e,r,t,...n){if(n.length>0)throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: "+JSON.stringify(n,null,4));if(!f(e)&&!f(r))return;if(f(e)&&!f(r)){if(Array.isArray(e)){if(e.length){if(e.some(e=>Array.isArray(e)))return void e.forEach(e=>{Array.isArray(e)&&this.add(...e)});e.length>1&&p(c(e[0]))&&p(c(e[1]))&&this.add(...e)}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(e,null,0)}) but second-one, "to" is not (${JSON.stringify(r,null,0)})`)}if(!f(e)&&f(r))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(r,null,0)}) but first-one, "from" is not (${JSON.stringify(e,null,0)})`);const s=/^\d*$/.test(e)?parseInt(e,10):e,o=/^\d*$/.test(r)?parseInt(r,10):r;if(p(t)&&(t=String(t)),!p(s)||!p(o))throw p(s)&&s>=0?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof o}" equal to: ${JSON.stringify(o,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof s}" equal to: ${JSON.stringify(s,null,4)}`);if(f(t)&&!g(t)&&!p(t))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof t}, equal to:\n${JSON.stringify(t,null,4)}`);if(f(this.slices)&&Array.isArray(this.last())&&s===this.last()[1]){if(this.last()[1]=o,this.last()[2],null!==this.last()[2]&&f(t)){let e=!(f(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?t:this.last()[2]+t;this.opts.limitToBeAddedWhitespace&&(e=l(e,this.opts.limitLinebreaksCount)),g(e)&&!e.length||(this.last()[2]=e)}}else{this.slices||(this.slices=[]);const e=void 0===t||g(t)&&!t.length?[s,o]:[s,o,this.opts.limitToBeAddedWhitespace?l(t,this.opts.limitLinebreaksCount):t];this.slices.push(e)}}push(e,r,t,...n){this.add(e,r,t,...n)}current(){return null!=this.slices?(this.slices=o(this.slices,{mergeType:this.opts.mergeType}),this.opts.limitToBeAddedWhitespace?this.slices.map(e=>f(e[2])?[e[0],e[1],l(e[2],this.opts.limitLinebreaksCount)]:e):this.slices):null}wipe(){this.slices=void 0}replace(e){if(Array.isArray(e)&&e.length){if(!Array.isArray(e[0])||!p(e[0][0]))throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(e[0],null,4)} should be an array and its first element should be an integer, a string index.`);this.slices=Array.from(e)}else this.slices=void 0}last(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}var h,m,d=Function.prototype,b=Object.prototype,T=d.toString,w=b.hasOwnProperty,O=T.call(Object),S=b.toString,v=(h=Object.getPrototypeOf,m=Object,function(e){return h(m(e))});var N=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||"[object Object]"!=S.call(e)||function(e){var r=!1;if(null!=e&&"function"!=typeof e.toString)try{r=!!(e+"")}catch(e){}return r}(e))return!1;var r=v(e);if(null===r)return!0;var t=w.call(r,"constructor")&&r.constructor;return"function"==typeof t&&t instanceof t&&T.call(t)==O},$="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var j=function(e,r,t){return e(t={path:r,exports:{},require:function(e,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==r&&t.path)}},t.exports),t.exports}((function(e,r){!function(t){function n(e,r){return r instanceof Object||(r={trim:!0}),"number"==typeof e&&!isNaN(e)||(e=(e||"").toString(),"trim"in r&&!r.trim?!/\s/.test(e):!!(e=e.trim())&&!isNaN(e))}e.exports&&(r=e.exports=n),r.isNumeric=n}()})),_=/^\s+|\s+$/g,I="[\\ud800-\\udfff]",E="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",R="\\ud83c[\\udffb-\\udfff]",D="[^\\ud800-\\udfff]",A="(?:\\ud83c[\\udde6-\\uddff]){2}",F="[\\ud800-\\udbff][\\udc00-\\udfff]",W="(?:"+E+"|"+R+")"+"?",H="[\\ufe0e\\ufe0f]?"+W+("(?:\\u200d(?:"+[D,A,F].join("|")+")[\\ufe0e\\ufe0f]?"+W+")*"),J="(?:"+[D+E+"?",E,A,F,I].join("|")+")",P=RegExp(R+"(?="+R+")|"+J+H,"g"),q=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),x="object"==typeof $&&$&&$.Object===Object&&$,C="object"==typeof self&&self&&self.Object===Object&&self,k=x||C||Function("return this")();function K(e,r,t){if(r!=r)return function(e,r,t,n){for(var s=e.length,o=t+(n?1:-1);n?o--:++o<s;)if(r(e[o],o,e))return o;return-1}(e,U,t);for(var n=t-1,s=e.length;++n<s;)if(e[n]===r)return n;return-1}function U(e){return e!=e}function M(e){return function(e){return q.test(e)}(e)?function(e){return e.match(P)||[]}(e):function(e){return e.split("")}(e)}var B=Object.prototype.toString,L=k.Symbol,z=L?L.prototype:void 0,G=z?z.toString:void 0;function Q(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==B.call(e)}(e))return G?G.call(e):"";var r=e+"";return"0"==r&&1/e==-1/0?"-0":r}function V(e,r,t){var n=e.length;return t=void 0===t?n:t,!r&&t>=n?e:function(e,r,t){var n=-1,s=e.length;r<0&&(r=-r>s?0:s+r),(t=t>s?s:t)<0&&(t+=s),s=r>t?0:t-r>>>0,r>>>=0;for(var o=Array(s);++n<s;)o[n]=e[n+r];return o}(e,r,t)}var X=function(e,r,t){var n;if((e=null==(n=e)?"":Q(n))&&(t||void 0===r))return e.replace(_,"");if(!e||!(r=Q(r)))return e;var s=M(e),o=M(r);return V(s,function(e,r){for(var t=-1,n=e.length;++t<n&&K(r,e[t],0)>-1;);return t}(s,o),function(e,r){for(var t=e.length;t--&&K(r,e[t],0)>-1;);return t}(s,o)+1).join("")};function Y(e,r){let t=!0;const n=[".",",","'"," "];let s;if("string"!=typeof e)throw new TypeError(`string-remove-thousand-separators/remSep(): [THROW_ID_01] Input must be string! Currently it's: ${typeof e}, equal to:\n${JSON.stringify(e,null,4)}`);if(null!=r&&!N(r))throw new TypeError(`string-remove-thousand-separators/remSep(): [THROW_ID_02] Options object must be a plain object! Currently it's: ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`);const u={removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1,...r},l=X(e.trim(),'"');if(""===l)return l;const f=new y;for(let e=0,r=l.length;e<r;e++){if(u.removeThousandSeparatorsFromNumbers&&""===l[e].trim()&&f.add(e,e+1),u.removeThousandSeparatorsFromNumbers&&"'"===l[e]&&(f.add(e,e+1),"'"===l[e+1])){t=!1;break}if(n.includes(l[e])){if(void 0!==l[e+1]&&j(l[e+1]))if(void 0!==l[e+2]){if(!j(l[e+2])){t=!1;break}if(void 0!==l[e+3]){if(!j(l[e+3])){t=!1;break}if(void 0!==l[e+4]&&j(l[e+4])){t=!1;break}if(u.removeThousandSeparatorsFromNumbers&&f.add(e,e+1),s){if(l[e]!==s){t=!1;break}}else s=l[e]}else u.removeThousandSeparatorsFromNumbers&&u.forceUKStyle&&","===l[e]&&f.add(e,e+1,".")}else u.forceUKStyle&&","===l[e]&&f.add(e,e+1,"."),u.padSingleDecimalPlaceNumbers&&f.add(e+2,e+2,"0")}else if(!j(l[e])){t=!1;break}}return t&&f.current()?function(e,r,t){let n,s=0,u=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!a(e))throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(null===r)return e;if(!Array.isArray(r))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(t&&"function"!=typeof t)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);n=Array.isArray(r)&&(Number.isInteger(r[0])&&r[0]>=0||/^\d*$/.test(r[0]))&&(Number.isInteger(r[1])&&r[1]>=0||/^\d*$/.test(r[1]))?[Array.from(r)]:Array.from(r);const l=n.length;let f=0;n.forEach((e,r)=>{if(t&&(s=Math.floor(f/l*10),s!==u&&(u=s,t(s))),!Array.isArray(e))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${r}th element not an array: ${JSON.stringify(e,null,4)}, which is ${typeof e}`);if(!Number.isInteger(e[0])||e[0]<0){if(!/^\d*$/.test(e[0]))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${r}th element, array [${e[0]},${e[1]}]. That array has first element not an integer, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0],null,4)}. Computer doesn't like this.`);n[r][0]=Number.parseInt(n[r][0],10)}if(!Number.isInteger(e[1])){if(!/^\d*$/.test(e[1]))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${r}th element, array [${e[0]},${e[1]}]. That array has second element not an integer, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1],null,4)}. Computer doesn't like this.`);n[r][1]=Number.parseInt(n[r][1],10)}f+=1});const p=o(n,{progressFn:e=>{t&&(s=10+Math.floor(e/10),s!==u&&(u=s,t(s)))}}),g=p.length;if(g>0){const r=e.slice(p[g-1][1]);e=p.reduce((r,n,o,a)=>{t&&(s=20+Math.floor(o/g*80),s!==u&&(u=s,t(s)));const l=0===o?0:a[o-1][1],f=a[o][0];return r+e.slice(l,f)+(i(a[o][2])?a[o][2]:"")},""),e+=r}return e}(l,f.current()):l}return function(r,t){var s=0,o=0,i=[],a=[],u=!1,l=!0;if(t&&"object"!==e(t))throw new Error("csv-split-easy/split(): [THROW_ID_02] Options object must be a plain object! Currently it's of a type ".concat(e(t)," equal to:\n").concat(JSON.stringify(t,null,4)));var f=n(n({},{removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1}),t);if("string"!=typeof r)throw new TypeError("csv-split-easy/split(): [THROW_ID_04] input must be string! Currently it's: ".concat(e(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(""===r)return[[""]];for(var p=0,g=(r=r.trim()).length;p<g;p++){if(l&&'"'!==r[p]&&","!==r[p]&&""!==r[p].trim()&&(l=!1),'"'===r[p])if(u&&'"'===r[p+1])p+=1;else if(u){u=!1;var c=r.slice(s,p);""!==c.trim()&&(l=!1);var y=/""/.test(c)?c.replace(/""/g,'"'):Y(c,{removeThousandSeparatorsFromNumbers:f.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:f.padSingleDecimalPlaceNumbers,forceUKStyle:f.forceUKStyle});i.push(y)}else u=!0,s=p+1;else if(u||","!==r[p])if("\n"===r[p]||"\r"===r[p]){if(!o){if(o=p,!u&&'"'!==r[p-1]){var h=r.slice(s,p);""!==h.trim()&&(l=!1),i.push(Y(h,{removeThousandSeparatorsFromNumbers:f.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:f.padSingleDecimalPlaceNumbers,forceUKStyle:f.forceUKStyle}))}l?i.length=0:a.push(i),l=!0,i=[]}s=p+1}else o&&(o=0,s=p);else{if('"'!==r[p-1]&&!u){var m=r.slice(s,p);""!==m.trim()&&(l=!1),i.push(Y(m,{removeThousandSeparatorsFromNumbers:f.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:f.padSingleDecimalPlaceNumbers,forceUKStyle:f.forceUKStyle}))}s=p+1,o&&(o=0)}if(p+1===g){if('"'!==r[p]){var d=r.slice(s,p+1);d.trim()&&(l=!1),i.push(Y(d,{removeThousandSeparatorsFromNumbers:f.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:f.padSingleDecimalPlaceNumbers,forceUKStyle:f.forceUKStyle}))}l?i=[]:a.push(i),l=!0}}return 0===a.length?[[""]]:a}}));
