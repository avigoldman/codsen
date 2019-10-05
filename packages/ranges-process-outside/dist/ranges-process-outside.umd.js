/**
 * ranges-process-outside
 * Iterate through string and optionally a given ranges as if they were one
 * Version: 2.2.7
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ranges-process-outside
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).rangesProcessOutside=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var s,u=t[Symbol.iterator]();!(n=(s=u.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var r=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1};const n=Array.isArray;function o(t,e){if(!n(t))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(0===t.length)return t;const o=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},e);let i,s;if(o.strictlyTwoElementsInRangeArrays&&!t.every((t,e)=>2===t.length||(i=e,s=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${i}th range (${JSON.stringify(t[i],null,4)}) has not two but ${s} elements!`);if(!t.every((t,e)=>!(!r(t[0],{includeZero:!0})||!r(t[1],{includeZero:!0}))||(i=e,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${i}th range (${JSON.stringify(t[i],null,4)}) does not consist of only natural numbers!`);const u=t.length*t.length;let a=0;return Array.from(t).sort((t,e)=>(o.progressFn&&(a++,o.progressFn(Math.floor(100*a/u))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1))}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var s=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,e){var r=200,n="__lodash_hash_undefined__",o=9007199254740991,s="[object Arguments]",u="[object Boolean]",a="[object Date]",c="[object Function]",f="[object GeneratorFunction]",l="[object Map]",y="[object Number]",g="[object Object]",p="[object RegExp]",h="[object Set]",d="[object String]",b="[object Symbol]",_="[object ArrayBuffer]",v="[object DataView]",w="[object Float32Array]",m="[object Float64Array]",O="[object Int8Array]",T="[object Int16Array]",j="[object Int32Array]",A="[object Uint8Array]",R="[object Uint8ClampedArray]",S="[object Uint16Array]",E="[object Uint32Array]",I=/\w*$/,$=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,N={};N[s]=N["[object Array]"]=N[_]=N[v]=N[u]=N[a]=N[w]=N[m]=N[O]=N[T]=N[j]=N[l]=N[y]=N[g]=N[p]=N[h]=N[d]=N[b]=N[A]=N[R]=N[S]=N[E]=!0,N["[object Error]"]=N[c]=N["[object WeakMap]"]=!1;var W="object"==typeof i&&i&&i.Object===Object&&i,x="object"==typeof self&&self&&self.Object===Object&&self,D=W||x||Function("return this")(),H=e&&!e.nodeType&&e,k=H&&t&&!t.nodeType&&t,C=k&&k.exports===H;function J(t,e){return t.set(e[0],e[1]),t}function Z(t,e){return t.add(e),t}function M(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function P(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function q(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function B(t,e){return function(r){return t(e(r))}}function Y(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var U,z=Array.prototype,G=Function.prototype,L=Object.prototype,V=D["__core-js_shared__"],K=(U=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+U:"",Q=G.toString,X=L.hasOwnProperty,tt=L.toString,et=RegExp("^"+Q.call(X).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=C?D.Buffer:void 0,nt=D.Symbol,ot=D.Uint8Array,it=B(Object.getPrototypeOf,Object),st=Object.create,ut=L.propertyIsEnumerable,at=z.splice,ct=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=B(Object.keys,Object),yt=kt(D,"DataView"),gt=kt(D,"Map"),pt=kt(D,"Promise"),ht=kt(D,"Set"),dt=kt(D,"WeakMap"),bt=kt(Object,"create"),_t=Pt(yt),vt=Pt(gt),wt=Pt(pt),mt=Pt(ht),Ot=Pt(dt),Tt=nt?nt.prototype:void 0,jt=Tt?Tt.valueOf:void 0;function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Rt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){this.__data__=new Rt(t)}function It(t,e){var r=Bt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Yt(t)}(t)&&X.call(t,"callee")&&(!ut.call(t,"callee")||tt.call(t)==s)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var i in t)!e&&!X.call(t,i)||o&&("length"==i||Zt(i,n))||r.push(i);return r}function $t(t,e,r){var n=t[e];X.call(t,e)&&qt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Ft(t,e){for(var r=t.length;r--;)if(qt(t[r][0],e))return r;return-1}function Nt(t,e,r,n,o,i,$){var F;if(n&&(F=i?n(t,o,i,$):n(t)),void 0!==F)return F;if(!Gt(t))return t;var W=Bt(t);if(W){if(F=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&X.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,F)}else{var x=Jt(t),D=x==c||x==f;if(Ut(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(x==g||x==s||D&&!i){if(P(t))return i?t:{};if(F=function(t){return"function"!=typeof t.constructor||Mt(t)?{}:(e=it(t),Gt(e)?st(e):{});var e}(D?{}:t),!e)return function(t,e){return Dt(t,Ct(t),e)}(t,function(t,e){return t&&Dt(e,Lt(e),t)}(F,t))}else{if(!N[x])return i?t:{};F=function(t,e,r,n){var o=t.constructor;switch(e){case _:return xt(t);case u:case a:return new o(+t);case v:return function(t,e){var r=e?xt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case w:case m:case O:case T:case j:case A:case R:case S:case E:return function(t,e){var r=e?xt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return M(e?r(q(t),!0):q(t),J,new t.constructor)}(t,n,r);case y:case d:return new o(t);case p:return(c=new(s=t).constructor(s.source,I.exec(s))).lastIndex=s.lastIndex,c;case h:return function(t,e,r){return M(e?r(Y(t),!0):Y(t),Z,new t.constructor)}(t,n,r);case b:return i=t,jt?Object(jt.call(i)):{}}var i;var s,c}(t,x,Nt,e)}}$||($=new Et);var H=$.get(t);if(H)return H;if($.set(t,F),!W)var k=r?function(t){return function(t,e,r){var n=e(t);return Bt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Lt,Ct)}(t):Lt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(k||t,(function(o,i){k&&(o=t[i=o]),$t(F,i,Nt(o,e,r,n,i,t,$))})),F}function Wt(t){return!(!Gt(t)||(e=t,K&&K in e))&&(zt(t)||P(t)?et:$).test(Pt(t));var e}function xt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Dt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var s=e[o],u=n?n(r[s],t[s],s,r,t):void 0;$t(r,s,void 0===u?t[s]:u)}return r}function Ht(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function kt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Wt(r)?r:void 0}At.prototype.clear=function(){this.__data__=bt?bt(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var e=this.__data__;if(bt){var r=e[t];return r===n?void 0:r}return X.call(e,t)?e[t]:void 0},At.prototype.has=function(t){var e=this.__data__;return bt?void 0!==e[t]:X.call(e,t)},At.prototype.set=function(t,e){return this.__data__[t]=bt&&void 0===e?n:e,this},Rt.prototype.clear=function(){this.__data__=[]},Rt.prototype.delete=function(t){var e=this.__data__,r=Ft(e,t);return!(r<0)&&(r==e.length-1?e.pop():at.call(e,r,1),!0)},Rt.prototype.get=function(t){var e=this.__data__,r=Ft(e,t);return r<0?void 0:e[r][1]},Rt.prototype.has=function(t){return Ft(this.__data__,t)>-1},Rt.prototype.set=function(t,e){var r=this.__data__,n=Ft(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},St.prototype.clear=function(){this.__data__={hash:new At,map:new(gt||Rt),string:new At}},St.prototype.delete=function(t){return Ht(this,t).delete(t)},St.prototype.get=function(t){return Ht(this,t).get(t)},St.prototype.has=function(t){return Ht(this,t).has(t)},St.prototype.set=function(t,e){return Ht(this,t).set(t,e),this},Et.prototype.clear=function(){this.__data__=new Rt},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Rt){var o=n.__data__;if(!gt||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new St(o)}return n.set(t,e),this};var Ct=ct?B(ct,Object):function(){return[]},Jt=function(t){return tt.call(t)};function Zt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<e}function Mt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||L)}function Pt(t){if(null!=t){try{return Q.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function qt(t,e){return t===e||t!=t&&e!=e}(yt&&Jt(new yt(new ArrayBuffer(1)))!=v||gt&&Jt(new gt)!=l||pt&&"[object Promise]"!=Jt(pt.resolve())||ht&&Jt(new ht)!=h||dt&&"[object WeakMap]"!=Jt(new dt))&&(Jt=function(t){var e=tt.call(t),r=e==g?t.constructor:void 0,n=r?Pt(r):void 0;if(n)switch(n){case _t:return v;case vt:return l;case wt:return"[object Promise]";case mt:return h;case Ot:return"[object WeakMap]"}return e});var Bt=Array.isArray;function Yt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!zt(t)}var Ut=ft||function(){return!1};function zt(t){var e=Gt(t)?tt.call(t):"";return e==c||e==f}function Gt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Lt(t){return Yt(t)?It(t):function(t){if(!Mt(t))return lt(t);var e=[];for(var r in Object(t))X.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Nt(t,!0,!0)}})),u="[object Object]";var a,c,f=Function.prototype,l=Object.prototype,y=f.toString,g=l.hasOwnProperty,p=y.call(Object),h=l.toString,d=(a=Object.getPrototypeOf,c=Object,function(t){return a(c(t))});var b=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||h.call(t)!=u||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=d(t);if(null===e)return!0;var r=g.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&y.call(r)==p};function _(t,e){function r(t){return"string"==typeof t}if(!Array.isArray(t))return t;const n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let i;if(e){if(!b(e))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(e,null,4)} (type ${typeof e})`);if((i=Object.assign({},n,e)).progressFn&&b(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof i.progressFn}", equal to ${JSON.stringify(i.progressFn,null,4)}`);if(i.mergeType&&1!==i.mergeType&&2!==i.mergeType)if(r(i.mergeType)&&"1"===i.mergeType.trim())i.mergeType=1;else{if(!r(i.mergeType)||"2"!==i.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof i.mergeType}", equal to ${JSON.stringify(i.mergeType,null,4)}`);i.mergeType=2}if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof i.joinRangesThatTouchEdges}", equal to ${JSON.stringify(i.joinRangesThatTouchEdges,null,4)}`)}else i=s(n);const u=s(t).filter(t=>void 0!==t[2]||t[0]!==t[1]);let a,c,f;const l=(a=i.progressFn?o(u,{progressFn:t=>{(f=Math.floor(t/5))!==c&&(c=f,i.progressFn(f))}}):o(u)).length-1;for(let t=l;t>0;t--)i.progressFn&&(f=Math.floor(78*(1-t/l))+21)!==c&&f>c&&(c=f,i.progressFn(f)),(a[t][0]<=a[t-1][0]||!i.joinRangesThatTouchEdges&&a[t][0]<a[t-1][1]||i.joinRangesThatTouchEdges&&a[t][0]<=a[t-1][1])&&(a[t-1][0]=Math.min(a[t][0],a[t-1][0]),a[t-1][1]=Math.max(a[t][1],a[t-1][1]),void 0!==a[t][2]&&(a[t-1][0]>=a[t][0]||a[t-1][1]<=a[t][1])&&null!==a[t-1][2]&&(null===a[t][2]&&null!==a[t-1][2]?a[t-1][2]=null:void 0!==a[t-1][2]?2===i.mergeType&&a[t-1][0]===a[t][0]?a[t-1][2]=a[t][2]:a[t-1][2]+=a[t][2]:a[t-1][2]=a[t][2]),a.splice(t,1),t=a.length);return a}const v=Array.isArray;function w(t,e){if(!v(t))throw new TypeError(`ranges-crop: [THROW_ID_01] The first input's argument must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(!r(e,{includeZero:!0}))throw new TypeError(`ranges-crop: [THROW_ID_02] The second input's argument must be a natural number or zero (coming from String.length)! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===t.length)return t;let n;if(!t.every((t,e)=>!(!r(t[0],{includeZero:!0})||!r(t[1],{includeZero:!0}))||(n=e,!1))){if(Array.isArray(t)&&"number"==typeof t[0]&&"number"==typeof t[1])throw new TypeError(`ranges-crop: [THROW_ID_03] The first argument should be AN ARRAY OF RANGES, not a single range! Currently arrOfRanges = ${JSON.stringify(t,null,0)}!`);throw new TypeError(`ranges-crop: [THROW_ID_04] The first argument should be AN ARRAY OF ARRAYS! Each sub-array means string slice indexes. In our case, here ${n+1}th range (${JSON.stringify(t[n],null,0)}) does not consist of only natural numbers!`)}if(!t.every((t,e)=>!(function(t){return null!=t}(t[2])&&!function(t){return"string"==typeof t}(t[2]))||(n=e,!1)))throw new TypeError(`ranges-crop: [THROW_ID_05] The third argument, if present at all, should be of a string-type or null. Currently the ${n}th range ${JSON.stringify(t[n],null,0)} has a argument in the range of a type ${typeof t[n][2]}`);return _(t).filter(t=>t[0]<=e&&(void 0!==t[2]||t[0]<e)).map(t=>t[1]>e?void 0!==t[2]?[t[0],e,t[2]]:[t[0],e]:t)}const m=Array.isArray;const O=55296,T=56319,j=56320,A=127462,R=127487,S=127995,E=127999,I=65024,$=65039,F=8400,N=8447,W=8205,x=[776,2359,2359,2367,2367,2984,3007,3021,3633,3635,3648,3657,4352,4449,4520];function D(t){if("string"!=typeof t)throw new Error("string cannot be undefined or null");const e=[];let r=0,n=0;for(;r<t.length;)Z(t[r+(n+=H(r+n,t))])&&n++,C(t[r+n])&&n++,J(t[r+n])&&n++,M(t[r+n])?n++:(e.push(t.substring(r,r+n)),r+=n,n=0);return e}function H(t,e){const r=e[t];if(!function(t){return t&&q(t[0].charCodeAt(0),O,T)}(r)||t===e.length-1)return 1;const n=r+e[t+1];let o=e.substring(t+2,t+5);return k(n)&&k(o)?4:function(t){return q(P(t),S,E)}(o)?4:2}function k(t){return q(P(t),A,R)}function C(t){return"string"==typeof t&&q(t.charCodeAt(0),I,$)}function J(t){return"string"==typeof t&&q(t.charCodeAt(0),F,N)}function Z(t){return"string"==typeof t&&-1!==x.indexOf(t.charCodeAt(0))}function M(t){return"string"==typeof t&&t.charCodeAt(0)===W}function P(t){return(t.charCodeAt(0)-O<<10)+(t.charCodeAt(1)-j)+65536}function q(t,e,r){return t>=e&&t<=r}var B=D,Y=function(t,e,r){const n=D(t);if(void 0===e)return t;if(e>=n.length)return"";const o=n.length-e;let i=e+(void 0===r?o:r);return i>e+o&&(i=void 0),n.slice(e,i).join("")};B.substr=Y;var U=Array.isArray;return function(n,o,i){var s,u=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("string"!=typeof n)throw void 0===n?new Error("ranges-process-outside: [THROW_ID_01] the first input argument must be string! It's missing currently (undefined)!"):new Error("ranges-process-outside: [THROW_ID_02] the first input argument must be string! It was given as:\n".concat(JSON.stringify(n,null,4)," (type ").concat(t(n),")"));if(o&&!U(o))throw new Error("ranges-process-outside: [THROW_ID_03] the second input argument must be array of ranges or null! It was given as:\n".concat(JSON.stringify(o,null,4)," (type ").concat(t(o),")"));if(!(s=i)||"[object Function]"!=={}.toString.call(s))throw new Error("ranges-process-outside: [THROW_ID_04] the third input argument must be a function! It was given as:\n".concat(JSON.stringify(i,null,4)," (type ").concat(t(i),")"));function a(t,r){r.forEach((function(r){for(var n=e(r,2),o=n[0],s=n[1],u=o;u<s;u++){var a=B(t.slice(u))[0].length;i(u,u+a,(function(t){null!=t&&(u+=t)})),a&&a>1&&(u+=a-1)}}))}o&&o.length?a(n,w(function(t,e,n){if(!m(t)&&null!==t)throw new TypeError(`ranges-invert: [THROW_ID_01] Input's first argument must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(!r(e,{includeZero:!0}))throw new TypeError(`ranges-invert: [THROW_ID_02] Input's second argument must be a natural number or zero (coming from String.length)! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(null===t)return 0===e?[]:[[0,e]];if(0===t.length)return[];const o=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,skipChecks:!1},n);let i,s,u;if(!o.skipChecks&&o.strictlyTwoElementsInRangeArrays&&!t.every((t,e)=>2===t.length||(i=e,s=t.length,!1)))throw new TypeError(`ranges-invert: [THROW_ID_04] Because opts.strictlyTwoElementsInRangeArrays was enabled, all ranges must be strictly two-element-long. However, the ${i}th range (${JSON.stringify(t[i],null,0)}) has not two but ${s} elements!`);if(!o.skipChecks&&!t.every((t,e)=>!(!r(t[0],{includeZero:!0})||!r(t[1],{includeZero:!0}))||(i=e,!1))){if(Array.isArray(t)&&"number"==typeof t[0]&&"number"==typeof t[1])throw new TypeError(`ranges-invert: [THROW_ID_07] The first argument should be AN ARRAY OF RANGES, not a single range! Currently arrOfRanges = ${JSON.stringify(t,null,0)}!`);throw new TypeError(`ranges-invert: [THROW_ID_05] The first argument should be AN ARRAY OF ARRAYS! Each sub-array means string slice indexes. In our case, here ${i+1}th range (${JSON.stringify(t[i],null,0)}) does not consist of only natural numbers!`)}return 0===(u=o.skipChecks?t.filter(t=>t[0]!==t[1]):_(t.filter(t=>t[0]!==t[1]))).length?0===e?[]:[[0,e]]:w(u.reduce((t,r,n,i)=>{const s=[];0===n&&0!==i[0][0]&&s.push([0,i[0][0]]);const u=n<i.length-1?i[n+1][0]:e;if(r[1]!==u){if(o.skipChecks&&r[1]>u)throw new TypeError(`ranges-invert: [THROW_ID_08] The checking (opts.skipChecks) is off and input ranges were not sorted! We nearly wrote range [${r[1]}, ${u}] which is backwards. For investigation, whole ranges array is:\n${JSON.stringify(i,null,0)}`);s.push([r[1],u])}return t.concat(s)},[]),e)}(o,n.length,{skipChecks:!!u}),n.length)):a(n,[[0,n.length]])}}));
