/**
 * @name string-collapse-white-space
 * @fileoverview Replace chunks of whitespace with a single spaces
 * @version 10.0.5
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-collapse-white-space/}
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).stringCollapseWhiteSpace={})}(this,(function(e){"use strict";
/**
 * @name ranges-sort
 * @fileoverview Sort string index ranges
 * @version 5.0.5
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-sort/}
 */const t={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function r(e,r){if(!Array.isArray(e)||!e.length)return e;const n={...t,...r};let s,i;if(n.strictlyTwoElementsInRangeArrays&&!e.filter((e=>e)).every(((e,t)=>2===e.length||(s=t,i=e.length,!1))))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${s}th range (${JSON.stringify(e[s],null,4)}) has not two but ${i} elements!`);if(!e.filter((e=>e)).every(((e,t)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(s=t,!1))))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${s}th range (${JSON.stringify(e[s],null,4)}) does not consist of only natural numbers!`);const o=e.filter((e=>e)).length**2;let a=0;return Array.from(e).filter((e=>e)).sort(((e,t)=>(n.progressFn&&(a+=1,n.progressFn(Math.floor(100*a/o))),e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1)))}
/**
 * @name ranges-merge
 * @fileoverview Merge and sort string index ranges
 * @version 8.0.5
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-merge/}
 */const n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function s(e,t){function s(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return null;let i;if(t){if(!s(t))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(t,null,4)} (type ${typeof t})`);if(i={...n,...t},i.progressFn&&s(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof i.progressFn}", equal to ${JSON.stringify(i.progressFn,null,4)}`);if(i.mergeType&&1!=+i.mergeType&&2!=+i.mergeType)throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof i.mergeType}", equal to ${JSON.stringify(i.mergeType,null,4)}`);if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof i.joinRangesThatTouchEdges}", equal to ${JSON.stringify(i.joinRangesThatTouchEdges,null,4)}`)}else i={...n};const o=e.filter((e=>e)).map((e=>[...e])).filter((e=>void 0!==e[2]||e[0]!==e[1]));let a,u,l;if(a=i.progressFn?r(o,{progressFn:e=>{l=Math.floor(e/5),l!==u&&(u=l,i.progressFn(l))}}):r(o),!a)return null;const c=a.length-1;for(let e=c;e>0;e--)i.progressFn&&(l=Math.floor(78*(1-e/c))+21,l!==u&&l>u&&(u=l,i.progressFn(l))),(a[e][0]<=a[e-1][0]||!i.joinRangesThatTouchEdges&&a[e][0]<a[e-1][1]||i.joinRangesThatTouchEdges&&a[e][0]<=a[e-1][1])&&(a[e-1][0]=Math.min(a[e][0],a[e-1][0]),a[e-1][1]=Math.max(a[e][1],a[e-1][1]),void 0!==a[e][2]&&(a[e-1][0]>=a[e][0]||a[e-1][1]<=a[e][1])&&null!==a[e-1][2]&&(null===a[e][2]&&null!==a[e-1][2]?a[e-1][2]=null:null!=a[e-1][2]?2==+i.mergeType&&a[e-1][0]===a[e][0]?a[e-1][2]=a[e][2]:a[e-1][2]+=a[e][2]:a[e-1][2]=a[e][2]),a.splice(e,1),e=a.length);return a.length?a:null}
/**
 * @name ranges-apply
 * @fileoverview Take an array of string index ranges, delete/replace the string according to them
 * @version 6.0.5
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-apply/}
 */function i(e,t,r){let n,i=0,o=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof e)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(t&&!Array.isArray(t))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(r&&"function"!=typeof r)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(!t||!t.filter((e=>e)).length)return e;n=Array.isArray(t)&&Number.isInteger(t[0])&&Number.isInteger(t[1])?[Array.from(t)]:Array.from(t);const a=n.length;let u=0;n.filter((e=>e)).forEach(((e,t)=>{if(r&&(i=Math.floor(u/a*10),i!==o&&(o=i,r(i))),!Array.isArray(e))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${t}th element not an array: ${JSON.stringify(e,null,4)}, which is ${typeof e}`);if(!Number.isInteger(e[0])){if(!Number.isInteger(+e[0])||+e[0]<0)throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${t}th element, array ${JSON.stringify(e,null,0)}. Its first element is not an integer, string index, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0],null,4)}.`);n[t][0]=+n[t][0]}if(!Number.isInteger(e[1])){if(!Number.isInteger(+e[1])||+e[1]<0)throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${t}th element, array ${JSON.stringify(e,null,0)}. Its second element is not an integer, string index, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1],null,4)}.`);n[t][1]=+n[t][1]}u+=1}));const l=s(n,{progressFn:e=>{r&&(i=10+Math.floor(e/10),i!==o&&(o=i,r(i)))}}),c=Array.isArray(l)?l.length:0;if(c>0){const t=e.slice(l[c-1][1]);e=l.reduce(((t,n,s,a)=>{r&&(i=20+Math.floor(s/c*80),i!==o&&(o=i,r(i)));return t+e.slice(0===s?0:a[s-1][1],a[s][0])+(a[s][2]||"")}),""),e+=t}return e}
/**
 * @name string-collapse-leading-whitespace
 * @fileoverview Collapse the leading and trailing whitespace of a string
 * @version 6.0.5
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-collapse-leading-whitespace/}
 */function o(e,t=1){function r(e){return Array.from(e).reverse().join("")}function n(e,t,r){const n=r?"\n":"\r",s=r?"\r":"\n";if(!e)return e;let i=0,o="";for(let r=0,a=e.length;r<a;r++)(e[r]===n||e[r]===s&&e[r-1]!==n)&&i++,"\r\n".includes(e[r])||" "===e[r]?" "===e[r]?o+=e[r]:e[r]===n?i<=t&&(o+=e[r],e[r+1]===s&&(o+=e[r+1],r++)):e[r]===s&&(!e[r-1]||e[r-1]!==n)&&i<=t&&(o+=e[r]):e[r+1]||i||(o+=" ");return o}if("string"==typeof e&&e.length){let s=1;"number"==typeof+t&&Number.isInteger(+t)&&+t>=0&&(s=+t);let i="",o="";if(e.trim()){if(!e[0].trim())for(let t=0,r=e.length;t<r;t++)if(e[t].trim()){i=e.slice(0,t);break}}else i=e;if(e.trim()&&(""===e.slice(-1).trim()||" "===e.slice(-1)))for(let t=e.length;t--;)if(e[t].trim()){o=e.slice(t+1);break}return`${n(i,s,!1)}${e.trim()}${r(n(r(o),s,!0))}`}return e}
/**
 * @name ranges-push
 * @fileoverview Gather string index ranges
 * @version 6.0.5
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-push/}
 */const a={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function u(e,t){if(!Array.isArray(e)||!e.length)return e;const r={...a,...t};let n,s;if(r.strictlyTwoElementsInRangeArrays&&!e.filter((e=>e)).every(((e,t)=>2===e.length||(n=t,s=e.length,!1))))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) has not two but ${s} elements!`);if(!e.filter((e=>e)).every(((e,t)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(n=t,!1))))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) does not consist of only natural numbers!`);const i=e.filter((e=>e)).length**2;let o=0;return Array.from(e).filter((e=>e)).sort(((e,t)=>(r.progressFn&&(o+=1,r.progressFn(Math.floor(100*o/i))),e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1)))}const l={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function c(e){return null!=e}function f(e){return Number.isInteger(e)&&e>=0}function g(e){return"string"==typeof e}const p={limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1};class h{constructor(e){const t={...p,...e};if(t.mergeType&&1!==t.mergeType&&2!==t.mergeType)if(g(t.mergeType)&&"1"===t.mergeType.trim())t.mergeType=1;else{if(!g(t.mergeType)||"2"!==t.mergeType.trim())throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof t.mergeType}", equal to ${JSON.stringify(t.mergeType,null,4)}`);t.mergeType=2}this.opts=t,this.ranges=[]}ranges;opts;add(e,t,r){if(null==e&&null==t)return;if(c(e)&&!c(t)){if(Array.isArray(e)){if(e.length){if(e.some((e=>Array.isArray(e))))return void e.forEach((e=>{Array.isArray(e)&&this.add(...e)}));e.length&&f(+e[0])&&f(+e[1])&&this.add(...e)}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(e,null,0)}) but second-one, "to" is not (${JSON.stringify(t,null,0)})`)}if(!c(e)&&c(t))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(t,null,0)}) but first-one, "from" is not (${JSON.stringify(e,null,0)})`);const n=+e,s=+t;if(f(r)&&(r=String(r)),!f(n)||!f(s))throw f(n)&&n>=0?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof s}" equal to: ${JSON.stringify(s,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof n}" equal to: ${JSON.stringify(n,null,4)}`);if(c(r)&&!g(r)&&!f(r))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`);if(c(this.ranges)&&Array.isArray(this.last())&&n===this.last()[1]){if(this.last()[1]=s,this.last(),null!==this.last()[2]&&c(r)){let e=!(this.last()[2]&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?r:this.last()[2]+r;this.opts.limitToBeAddedWhitespace&&(e=o(e,this.opts.limitLinebreaksCount)),g(e)&&!e.length||(this.last()[2]=e)}}else{this.ranges||(this.ranges=[]);const e=void 0===r||g(r)&&!r.length?[n,s]:[n,s,r&&this.opts.limitToBeAddedWhitespace?o(r,this.opts.limitLinebreaksCount):r];this.ranges.push(e)}}push(e,t,r){this.add(e,t,r)}current(){return Array.isArray(this.ranges)&&this.ranges.length?(this.ranges=function(e,t){function r(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return null;let n;if(t){if(!r(t))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(t,null,4)} (type ${typeof t})`);if(n={...l,...t},n.progressFn&&r(n.progressFn)&&!Object.keys(n.progressFn).length)n.progressFn=null;else if(n.progressFn&&"function"!=typeof n.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof n.progressFn}", equal to ${JSON.stringify(n.progressFn,null,4)}`);if(n.mergeType&&1!=+n.mergeType&&2!=+n.mergeType)throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof n.mergeType}", equal to ${JSON.stringify(n.mergeType,null,4)}`);if("boolean"!=typeof n.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof n.joinRangesThatTouchEdges}", equal to ${JSON.stringify(n.joinRangesThatTouchEdges,null,4)}`)}else n={...l};const s=e.filter((e=>e)).map((e=>[...e])).filter((e=>void 0!==e[2]||e[0]!==e[1]));let i,o,a;if(i=n.progressFn?u(s,{progressFn:e=>{a=Math.floor(e/5),a!==o&&(o=a,n.progressFn(a))}}):u(s),!i)return null;const c=i.length-1;for(let e=c;e>0;e--)n.progressFn&&(a=Math.floor(78*(1-e/c))+21,a!==o&&a>o&&(o=a,n.progressFn(a))),(i[e][0]<=i[e-1][0]||!n.joinRangesThatTouchEdges&&i[e][0]<i[e-1][1]||n.joinRangesThatTouchEdges&&i[e][0]<=i[e-1][1])&&(i[e-1][0]=Math.min(i[e][0],i[e-1][0]),i[e-1][1]=Math.max(i[e][1],i[e-1][1]),void 0!==i[e][2]&&(i[e-1][0]>=i[e][0]||i[e-1][1]<=i[e][1])&&null!==i[e-1][2]&&(null===i[e][2]&&null!==i[e-1][2]?i[e-1][2]=null:null!=i[e-1][2]?2==+n.mergeType&&i[e-1][0]===i[e][0]?i[e-1][2]=i[e][2]:i[e-1][2]+=i[e][2]:i[e-1][2]=i[e][2]),i.splice(e,1),e=i.length);return i.length?i:null}(this.ranges,{mergeType:this.opts.mergeType}),this.ranges&&this.opts.limitToBeAddedWhitespace?this.ranges.map((e=>c(e[2])?[e[0],e[1],o(e[2],this.opts.limitLinebreaksCount)]:e)):this.ranges):null}wipe(){this.ranges=[]}replace(e){if(Array.isArray(e)&&e.length){if(!Array.isArray(e[0])||!f(e[0][0]))throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(e[0],null,4)} should be an array and its first element should be an integer, a string index.`);this.ranges=Array.from(e)}else this.ranges=[]}last(){return Array.isArray(this.ranges)&&this.ranges.length?this.ranges[this.ranges.length-1]:null}}var y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};Function.prototype.toString.call(Object);var m={exports:{}};!function(e,t){var r="__lodash_hash_undefined__",n=9007199254740991,s="[object Arguments]",i="[object Boolean]",o="[object Date]",a="[object Function]",u="[object GeneratorFunction]",l="[object Map]",c="[object Number]",f="[object Object]",g="[object Promise]",p="[object RegExp]",h="[object Set]",m="[object String]",d="[object Symbol]",_="[object WeakMap]",b="[object ArrayBuffer]",w="[object DataView]",T="[object Float32Array]",v="[object Float64Array]",O="[object Int8Array]",A="[object Int16Array]",S="[object Int32Array]",j="[object Uint8Array]",E="[object Uint8ClampedArray]",$="[object Uint16Array]",I="[object Uint32Array]",R=/\w*$/,N=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,W={};W[s]=W["[object Array]"]=W[b]=W[w]=W[i]=W[o]=W[T]=W[v]=W[O]=W[A]=W[S]=W[l]=W[c]=W[f]=W[p]=W[h]=W[m]=W[d]=W[j]=W[E]=W[$]=W[I]=!0,W["[object Error]"]=W[a]=W[_]=!1;var x="object"==typeof self&&self&&self.Object===Object&&self,H="object"==typeof y&&y&&y.Object===Object&&y||x||Function("return this")(),D=t&&!t.nodeType&&t,J=D&&e&&!e.nodeType&&e,L=J&&J.exports===D;function M(e,t){return e.set(t[0],t[1]),e}function q(e,t){return e.add(t),e}function C(e,t,r,n){var s=-1,i=e?e.length:0;for(n&&i&&(r=e[++s]);++s<i;)r=t(r,e[s],s,e);return r}function k(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function B(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function P(e,t){return function(r){return e(t(r))}}function U(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var z,V=Array.prototype,G=Function.prototype,K=Object.prototype,Q=H["__core-js_shared__"],X=(z=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"",Y=G.toString,Z=K.hasOwnProperty,ee=K.toString,te=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),re=L?H.Buffer:void 0,ne=H.Symbol,se=H.Uint8Array,ie=P(Object.getPrototypeOf,Object),oe=Object.create,ae=K.propertyIsEnumerable,ue=V.splice,le=Object.getOwnPropertySymbols,ce=re?re.isBuffer:void 0,fe=P(Object.keys,Object),ge=Je(H,"DataView"),pe=Je(H,"Map"),he=Je(H,"Promise"),ye=Je(H,"Set"),me=Je(H,"WeakMap"),de=Je(Object,"create"),_e=ke(ge),be=ke(pe),we=ke(he),Te=ke(ye),ve=ke(me),Oe=ne?ne.prototype:void 0,Ae=Oe?Oe.valueOf:void 0;function Se(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function je(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ee(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function $e(e){this.__data__=new je(e)}function Ie(e,t){var r=Pe(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&Ue(e)}(e)&&Z.call(e,"callee")&&(!ae.call(e,"callee")||ee.call(e)==s)}(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],n=r.length,i=!!n;for(var o in e)!t&&!Z.call(e,o)||i&&("length"==o||qe(o,n))||r.push(o);return r}function Re(e,t,r){var n=e[t];Z.call(e,t)&&Be(n,r)&&(void 0!==r||t in e)||(e[t]=r)}function Ne(e,t){for(var r=e.length;r--;)if(Be(e[r][0],t))return r;return-1}function Fe(e,t,r,n,g,y,_){var N;if(n&&(N=y?n(e,g,y,_):n(e)),void 0!==N)return N;if(!Ge(e))return e;var F=Pe(e);if(F){if(N=function(e){var t=e.length,r=e.constructor(t);t&&"string"==typeof e[0]&&Z.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!t)return function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(e,N)}else{var x=Me(e),H=x==a||x==u;if(ze(e))return function(e,t){if(t)return e.slice();var r=new e.constructor(e.length);return e.copy(r),r}(e,t);if(x==f||x==s||H&&!y){if(k(e))return y?e:{};if(N=function(e){return"function"!=typeof e.constructor||Ce(e)?{}:(t=ie(e),Ge(t)?oe(t):{});var t}(H?{}:e),!t)return function(e,t){return He(e,Le(e),t)}(e,function(e,t){return e&&He(t,Ke(t),e)}(N,e))}else{if(!W[x])return y?e:{};N=function(e,t,r,n){var s=e.constructor;switch(t){case b:return xe(e);case i:case o:return new s(+e);case w:return function(e,t){var r=t?xe(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,n);case T:case v:case O:case A:case S:case j:case E:case $:case I:return function(e,t){var r=t?xe(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}(e,n);case l:return function(e,t,r){return C(t?r(B(e),!0):B(e),M,new e.constructor)}(e,n,r);case c:case m:return new s(e);case p:return function(e){var t=new e.constructor(e.source,R.exec(e));return t.lastIndex=e.lastIndex,t}(e);case h:return function(e,t,r){return C(t?r(U(e),!0):U(e),q,new e.constructor)}(e,n,r);case d:return a=e,Ae?Object(Ae.call(a)):{}}var a}(e,x,Fe,t)}}_||(_=new $e);var D=_.get(e);if(D)return D;if(_.set(e,N),!F)var J=r?function(e){return function(e,t,r){var n=t(e);return Pe(e)?n:function(e,t){for(var r=-1,n=t.length,s=e.length;++r<n;)e[s+r]=t[r];return e}(n,r(e))}(e,Ke,Le)}(e):Ke(e);return function(e,t){for(var r=-1,n=e?e.length:0;++r<n&&!1!==t(e[r],r,e););}(J||e,(function(s,i){J&&(s=e[i=s]),Re(N,i,Fe(s,t,r,n,i,e,_))})),N}function We(e){return!(!Ge(e)||(t=e,X&&X in t))&&(Ve(e)||k(e)?te:N).test(ke(e));var t}function xe(e){var t=new e.constructor(e.byteLength);return new se(t).set(new se(e)),t}function He(e,t,r,n){r||(r={});for(var s=-1,i=t.length;++s<i;){var o=t[s],a=n?n(r[o],e[o],o,r,e):void 0;Re(r,o,void 0===a?e[o]:a)}return r}function De(e,t){var r,n,s=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?s["string"==typeof t?"string":"hash"]:s.map}function Je(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return We(r)?r:void 0}Se.prototype.clear=function(){this.__data__=de?de(null):{}},Se.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},Se.prototype.get=function(e){var t=this.__data__;if(de){var n=t[e];return n===r?void 0:n}return Z.call(t,e)?t[e]:void 0},Se.prototype.has=function(e){var t=this.__data__;return de?void 0!==t[e]:Z.call(t,e)},Se.prototype.set=function(e,t){return this.__data__[e]=de&&void 0===t?r:t,this},je.prototype.clear=function(){this.__data__=[]},je.prototype.delete=function(e){var t=this.__data__,r=Ne(t,e);return!(r<0)&&(r==t.length-1?t.pop():ue.call(t,r,1),!0)},je.prototype.get=function(e){var t=this.__data__,r=Ne(t,e);return r<0?void 0:t[r][1]},je.prototype.has=function(e){return Ne(this.__data__,e)>-1},je.prototype.set=function(e,t){var r=this.__data__,n=Ne(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},Ee.prototype.clear=function(){this.__data__={hash:new Se,map:new(pe||je),string:new Se}},Ee.prototype.delete=function(e){return De(this,e).delete(e)},Ee.prototype.get=function(e){return De(this,e).get(e)},Ee.prototype.has=function(e){return De(this,e).has(e)},Ee.prototype.set=function(e,t){return De(this,e).set(e,t),this},$e.prototype.clear=function(){this.__data__=new je},$e.prototype.delete=function(e){return this.__data__.delete(e)},$e.prototype.get=function(e){return this.__data__.get(e)},$e.prototype.has=function(e){return this.__data__.has(e)},$e.prototype.set=function(e,t){var r=this.__data__;if(r instanceof je){var n=r.__data__;if(!pe||n.length<199)return n.push([e,t]),this;r=this.__data__=new Ee(n)}return r.set(e,t),this};var Le=le?P(le,Object):function(){return[]},Me=function(e){return ee.call(e)};function qe(e,t){return!!(t=null==t?n:t)&&("number"==typeof e||F.test(e))&&e>-1&&e%1==0&&e<t}function Ce(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||K)}function ke(e){if(null!=e){try{return Y.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Be(e,t){return e===t||e!=e&&t!=t}(ge&&Me(new ge(new ArrayBuffer(1)))!=w||pe&&Me(new pe)!=l||he&&Me(he.resolve())!=g||ye&&Me(new ye)!=h||me&&Me(new me)!=_)&&(Me=function(e){var t=ee.call(e),r=t==f?e.constructor:void 0,n=r?ke(r):void 0;if(n)switch(n){case _e:return w;case be:return l;case we:return g;case Te:return h;case ve:return _}return t});var Pe=Array.isArray;function Ue(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}(e.length)&&!Ve(e)}var ze=ce||function(){return!1};function Ve(e){var t=Ge(e)?ee.call(e):"";return t==a||t==u}function Ge(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Ke(e){return Ue(e)?Ie(e):function(e){if(!Ce(e))return fe(e);var t=[];for(var r in Object(e))Z.call(e,r)&&"constructor"!=r&&t.push(r);return t}(e)}e.exports=function(e){return Fe(e,!0,!0)}}(m,m.exports);function d(e,t=0){return function({str:e,idx:t=0,stopAtNewlines:r=!1,stopAtRawNbsp:n=!1}){if("string"!=typeof e||!e.length)return null;if(t&&"number"==typeof t||(t=0),!e[t+1])return null;if(e[t+1]&&(e[t+1].trim()||r&&"\n\r".includes(e[t+1])||n&&" "===e[t+1]))return t+1;if(e[t+2]&&(e[t+2].trim()||r&&"\n\r".includes(e[t+2])||n&&" "===e[t+2]))return t+2;for(let s=t+1,i=e.length;s<i;s++)if(e[s].trim()||r&&"\n\r".includes(e[s])||n&&" "===e[s])return s;return null}({str:e,idx:t,stopAtNewlines:!1,stopAtRawNbsp:!1})}const _={trimStart:!0,trimEnd:!0,trimLines:!1,trimnbsp:!1,removeEmptyLines:!1,limitConsecutiveEmptyLinesTo:0,enforceSpacesOnly:!1,cb:({suggested:e})=>e};e.cbSchema=["suggested","whiteSpaceStartsAt","whiteSpaceEndsAt","str"],e.collapse=function(e,t){if("string"!=typeof e)throw new Error(`string-collapse-white-space/collapse(): [THROW_ID_01] The input is not string but ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(t&&"object"!=typeof t)throw new Error(`string-collapse-white-space/collapse(): [THROW_ID_02] The opts is not a plain object but ${typeof t}, equal to:\n${JSON.stringify(t,null,4)}`);if(!e.length)return{result:"",ranges:null};const r=new h,n=" ",s={..._,...t};function o(e,t){if("function"==typeof s.cb){const n=s.cb({suggested:e,...t});Array.isArray(n)&&r.push(...n)}else e&&r.push(...e)}let a=null,u=null,l=null,c=null,f=null,g=!1;const p=[];let y=0;for(let t=0,r=e.length;t<=r;t++){if(("\r"===e[t]||"\n"===e[t]&&"\r"!==e[t-1])&&(y+=1,null===c&&(c=t),f="\r"===e[t]&&"\n"===e[t+1]?t+2:t+1),s.trimnbsp||e[t]!==n||g||(g=!0),null!==a&&" "!==e[t]){const r=a&&u||!u&&(!s.trimStart||!s.trimnbsp&&(e[t]===n||e[a-1]===n)),i=e[t]||!s.trimEnd||!s.trimnbsp&&(e[t]===n||e[a-1]===n),o=!s.enforceSpacesOnly||(!e[a-1]||e[a-1].trim())&&(!e[t]||e[t].trim());if(a<t-1&&r&&i&&o){const r=a;let n=t,i=" ";s.trimLines&&(!a||!e[t]||e[a-1]&&"\r\n".includes(e[a-1])||e[t]&&"\r\n".includes(e[t]))&&(i=null),i&&" "===e[a]&&(n-=1,i=null),(!a&&s.trimStart||!e[t]&&s.trimEnd)&&(n=t),p.push([i?[r,n,i]:[r,n],{whiteSpaceStartsAt:u,whiteSpaceEndsAt:d(e,t-1)||t,str:e}])}}if(null===a&&" "===e[t]&&(a=t),null===u&&e[t]&&!e[t].trim()&&(u=t),null!==l&&("\n\r".includes(e[t])||!e[t]||e[t].trim()||!s.trimnbsp&&!s.enforceSpacesOnly&&e[t]===n)&&(l||!s.trimStart||s.enforceSpacesOnly&&g)&&(e[t]||!s.trimEnd||s.enforceSpacesOnly&&g)){if(s.enforceSpacesOnly&&(t>l+1||" "!==e[l])){let r=l,n=t,i=" ";" "===e[n-1]?(n-=1,i=null):" "===e[l]&&(r+=1,i=null),((s.trimStart||s.trimLines)&&!l||(s.trimEnd||s.trimLines)&&!e[t])&&(i=null),o(i?[r,n,i]:[r,n],{whiteSpaceStartsAt:u,whiteSpaceEndsAt:t,str:e})}!s.trimLines||l&&!"\r\n".includes(e[l-1])&&e[t]&&!"\r\n".includes(e[t])||!s.trimnbsp&&g||o([l,t],{whiteSpaceStartsAt:u,whiteSpaceEndsAt:d(e,t-1)||t,str:e}),l=null}if(null!==l||"\r\n".includes(e[t])||!e[t]||e[t].trim()||!s.trimnbsp&&e[t]===n&&!s.enforceSpacesOnly||(l=t),null!==u&&(!e[t]||e[t].trim())){if((!u&&(s.trimStart||s.trimLines&&null===c)||!e[t]&&(s.trimEnd||s.trimLines&&null===c))&&(s.trimnbsp||!g||s.enforceSpacesOnly))o([u,t],{whiteSpaceStartsAt:u,whiteSpaceEndsAt:t,str:e});else{let r=!1;if(s.removeEmptyLines&&null!==c&&y>(s.limitConsecutiveEmptyLinesTo||0)+1){r=!0;let n=c,i=f||e.length,a=`${"\r"===e[c]&&"\n"===e[c+1]?"\r\n":e[c]}`.repeat((s.limitConsecutiveEmptyLinesTo||0)+1);e.endsWith(a,f)?(i-=a.length||0,a=null):e.startsWith(a,c)&&(n+=a.length,a=null),o(a?[n,i,a]:[n,i],{whiteSpaceStartsAt:u,whiteSpaceEndsAt:t,str:e})}if(p.length){for(;p.length;)o(...p.shift());r=!0}r||o(null,{whiteSpaceStartsAt:u,whiteSpaceEndsAt:t,str:e})}u=null,l=null,g=!1,y&&(y=0,c=null,f=null)}null!==a&&" "!==e[t]&&(a=null)}return{result:i(e,r.current()),ranges:r.current()}},e.defaults=_,e.version="10.0.5",Object.defineProperty(e,"__esModule",{value:!0})}));
