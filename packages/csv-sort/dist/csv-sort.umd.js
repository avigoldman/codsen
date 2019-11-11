/**
 * csv-sort
 * Sorts double-entry bookkeeping CSV coming from internet banking
 * Version: 3.0.40
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/csv-sort
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).csvSort=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}var t=function(e,t){if(t){if("object"!=typeof t)throw new TypeError(String(t)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero&&0===e)return!0}}return Number.isSafeInteger(e)&&e>=1},r=function(e,t){if("string"!=typeof e)return!1;if(t&&"includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(e)}return/^[1-9]\d*(\.0+)?$/.test(e)};const n=Array.isArray;function o(e,r){if(!n(e))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===e.length)return e;const o=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},r);let i,s;if(o.strictlyTwoElementsInRangeArrays&&!e.every((e,t)=>2===e.length||(i=t,s=e.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${i}th range (${JSON.stringify(e[i],null,4)}) has not two but ${s} elements!`);if(!e.every((e,r)=>!(!t(e[0],{includeZero:!0})||!t(e[1],{includeZero:!0}))||(i=r,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${i}th range (${JSON.stringify(e[i],null,4)}) does not consist of only natural numbers!`);const a=e.length*e.length;let u=0;return Array.from(e).sort((e,t)=>(o.progressFn&&(u++,o.progressFn(Math.floor(100*u/a))),e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1))}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function s(e,t){return e(t={exports:{}},t.exports),t.exports}var a=s((function(e,t){var r=200,n="__lodash_hash_undefined__",o=9007199254740991,s="[object Arguments]",a="[object Boolean]",u="[object Date]",l="[object Function]",c="[object GeneratorFunction]",f="[object Map]",p="[object Number]",h="[object Object]",g="[object RegExp]",y="[object Set]",d="[object String]",m="[object Symbol]",v="[object ArrayBuffer]",b="[object DataView]",_="[object Float32Array]",w="[object Float64Array]",T="[object Int8Array]",S="[object Int16Array]",O="[object Int32Array]",j="[object Uint8Array]",$="[object Uint8ClampedArray]",N="[object Uint16Array]",E="[object Uint32Array]",R=/\w*$/,I=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,A={};A[s]=A["[object Array]"]=A[v]=A[b]=A[a]=A[u]=A[_]=A[w]=A[T]=A[S]=A[O]=A[f]=A[p]=A[h]=A[g]=A[y]=A[d]=A[m]=A[j]=A[$]=A[N]=A[E]=!0,A["[object Error]"]=A[l]=A["[object WeakMap]"]=!1;var D="object"==typeof i&&i&&i.Object===Object&&i,W="object"==typeof self&&self&&self.Object===Object&&self,x=D||W||Function("return this")(),H=t&&!t.nodeType&&t,k=H&&e&&!e.nodeType&&e,J=k&&k.exports===H;function Z(e,t){return e.set(t[0],t[1]),e}function C(e,t){return e.add(t),e}function M(e,t,r,n){var o=-1,i=e?e.length:0;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function P(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function K(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function U(e,t){return function(r){return e(t(r))}}function q(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var B,V=Array.prototype,L=Function.prototype,z=Object.prototype,G=x["__core-js_shared__"],Q=(B=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+B:"",Y=L.toString,X=z.hasOwnProperty,ee=z.toString,te=RegExp("^"+Y.call(X).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),re=J?x.Buffer:void 0,ne=x.Symbol,oe=x.Uint8Array,ie=U(Object.getPrototypeOf,Object),se=Object.create,ae=z.propertyIsEnumerable,ue=V.splice,le=Object.getOwnPropertySymbols,ce=re?re.isBuffer:void 0,fe=U(Object.keys,Object),pe=ke(x,"DataView"),he=ke(x,"Map"),ge=ke(x,"Promise"),ye=ke(x,"Set"),de=ke(x,"WeakMap"),me=ke(Object,"create"),ve=Pe(pe),be=Pe(he),_e=Pe(ge),we=Pe(ye),Te=Pe(de),Se=ne?ne.prototype:void 0,Oe=Se?Se.valueOf:void 0;function je(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function $e(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ne(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ee(e){this.__data__=new $e(e)}function Re(e,t){var r=Ue(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&qe(e)}(e)&&X.call(e,"callee")&&(!ae.call(e,"callee")||ee.call(e)==s)}(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],n=r.length,o=!!n;for(var i in e)!t&&!X.call(e,i)||o&&("length"==i||Ce(i,n))||r.push(i);return r}function Ie(e,t,r){var n=e[t];X.call(e,t)&&Ke(n,r)&&(void 0!==r||t in e)||(e[t]=r)}function Fe(e,t){for(var r=e.length;r--;)if(Ke(e[r][0],t))return r;return-1}function Ae(e,t,r,n,o,i,I){var F;if(n&&(F=i?n(e,o,i,I):n(e)),void 0!==F)return F;if(!Le(e))return e;var D=Ue(e);if(D){if(F=function(e){var t=e.length,r=e.constructor(t);t&&"string"==typeof e[0]&&X.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!t)return function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(e,F)}else{var W=Ze(e),x=W==l||W==c;if(Be(e))return function(e,t){if(t)return e.slice();var r=new e.constructor(e.length);return e.copy(r),r}(e,t);if(W==h||W==s||x&&!i){if(P(e))return i?e:{};if(F=function(e){return"function"!=typeof e.constructor||Me(e)?{}:(t=ie(e),Le(t)?se(t):{});var t}(x?{}:e),!t)return function(e,t){return xe(e,Je(e),t)}(e,function(e,t){return e&&xe(t,ze(t),e)}(F,e))}else{if(!A[W])return i?e:{};F=function(e,t,r,n){var o=e.constructor;switch(t){case v:return We(e);case a:case u:return new o(+e);case b:return function(e,t){var r=t?We(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,n);case _:case w:case T:case S:case O:case j:case $:case N:case E:return function(e,t){var r=t?We(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}(e,n);case f:return function(e,t,r){return M(t?r(K(e),!0):K(e),Z,new e.constructor)}(e,n,r);case p:case d:return new o(e);case g:return(l=new(s=e).constructor(s.source,R.exec(s))).lastIndex=s.lastIndex,l;case y:return function(e,t,r){return M(t?r(q(e),!0):q(e),C,new e.constructor)}(e,n,r);case m:return i=e,Oe?Object(Oe.call(i)):{}}var i;var s,l}(e,W,Ae,t)}}I||(I=new Ee);var H=I.get(e);if(H)return H;if(I.set(e,F),!D)var k=r?function(e){return function(e,t,r){var n=t(e);return Ue(e)?n:function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}(n,r(e))}(e,ze,Je)}(e):ze(e);return function(e,t){for(var r=-1,n=e?e.length:0;++r<n&&!1!==t(e[r],r,e););}(k||e,(function(o,i){k&&(o=e[i=o]),Ie(F,i,Ae(o,t,r,n,i,e,I))})),F}function De(e){return!(!Le(e)||(t=e,Q&&Q in t))&&(Ve(e)||P(e)?te:I).test(Pe(e));var t}function We(e){var t=new e.constructor(e.byteLength);return new oe(t).set(new oe(e)),t}function xe(e,t,r,n){r||(r={});for(var o=-1,i=t.length;++o<i;){var s=t[o],a=n?n(r[s],e[s],s,r,e):void 0;Ie(r,s,void 0===a?e[s]:a)}return r}function He(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function ke(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return De(r)?r:void 0}je.prototype.clear=function(){this.__data__=me?me(null):{}},je.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},je.prototype.get=function(e){var t=this.__data__;if(me){var r=t[e];return r===n?void 0:r}return X.call(t,e)?t[e]:void 0},je.prototype.has=function(e){var t=this.__data__;return me?void 0!==t[e]:X.call(t,e)},je.prototype.set=function(e,t){return this.__data__[e]=me&&void 0===t?n:t,this},$e.prototype.clear=function(){this.__data__=[]},$e.prototype.delete=function(e){var t=this.__data__,r=Fe(t,e);return!(r<0)&&(r==t.length-1?t.pop():ue.call(t,r,1),!0)},$e.prototype.get=function(e){var t=this.__data__,r=Fe(t,e);return r<0?void 0:t[r][1]},$e.prototype.has=function(e){return Fe(this.__data__,e)>-1},$e.prototype.set=function(e,t){var r=this.__data__,n=Fe(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},Ne.prototype.clear=function(){this.__data__={hash:new je,map:new(he||$e),string:new je}},Ne.prototype.delete=function(e){return He(this,e).delete(e)},Ne.prototype.get=function(e){return He(this,e).get(e)},Ne.prototype.has=function(e){return He(this,e).has(e)},Ne.prototype.set=function(e,t){return He(this,e).set(e,t),this},Ee.prototype.clear=function(){this.__data__=new $e},Ee.prototype.delete=function(e){return this.__data__.delete(e)},Ee.prototype.get=function(e){return this.__data__.get(e)},Ee.prototype.has=function(e){return this.__data__.has(e)},Ee.prototype.set=function(e,t){var n=this.__data__;if(n instanceof $e){var o=n.__data__;if(!he||o.length<r-1)return o.push([e,t]),this;n=this.__data__=new Ne(o)}return n.set(e,t),this};var Je=le?U(le,Object):function(){return[]},Ze=function(e){return ee.call(e)};function Ce(e,t){return!!(t=null==t?o:t)&&("number"==typeof e||F.test(e))&&e>-1&&e%1==0&&e<t}function Me(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||z)}function Pe(e){if(null!=e){try{return Y.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Ke(e,t){return e===t||e!=e&&t!=t}(pe&&Ze(new pe(new ArrayBuffer(1)))!=b||he&&Ze(new he)!=f||ge&&"[object Promise]"!=Ze(ge.resolve())||ye&&Ze(new ye)!=y||de&&"[object WeakMap]"!=Ze(new de))&&(Ze=function(e){var t=ee.call(e),r=t==h?e.constructor:void 0,n=r?Pe(r):void 0;if(n)switch(n){case ve:return b;case be:return f;case _e:return"[object Promise]";case we:return y;case Te:return"[object WeakMap]"}return t});var Ue=Array.isArray;function qe(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=o}(e.length)&&!Ve(e)}var Be=ce||function(){return!1};function Ve(e){var t=Le(e)?ee.call(e):"";return t==l||t==c}function Le(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function ze(e){return qe(e)?Re(e):function(e){if(!Me(e))return fe(e);var t=[];for(var r in Object(e))X.call(e,r)&&"constructor"!=r&&t.push(r);return t}(e)}e.exports=function(e){return Ae(e,!0,!0)}})),u="[object Object]";var l,c,f=Function.prototype,p=Object.prototype,h=f.toString,g=p.hasOwnProperty,y=h.call(Object),d=p.toString,m=(l=Object.getPrototypeOf,c=Object,function(e){return l(c(e))});var v=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||d.call(e)!=u||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=m(e);if(null===t)return!0;var r=g.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&h.call(r)==y};function b(e,t){function r(e){return"string"==typeof e}if(!Array.isArray(e))return e;const n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let i;if(t){if(!v(t))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(t,null,4)} (type ${typeof t})`);if((i=Object.assign({},n,t)).progressFn&&v(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof i.progressFn}", equal to ${JSON.stringify(i.progressFn,null,4)}`);if(i.mergeType&&1!==i.mergeType&&2!==i.mergeType)if(r(i.mergeType)&&"1"===i.mergeType.trim())i.mergeType=1;else{if(!r(i.mergeType)||"2"!==i.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof i.mergeType}", equal to ${JSON.stringify(i.mergeType,null,4)}`);i.mergeType=2}if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof i.joinRangesThatTouchEdges}", equal to ${JSON.stringify(i.joinRangesThatTouchEdges,null,4)}`)}else i=a(n);const s=a(e).filter(e=>void 0!==e[2]||e[0]!==e[1]);let u,l,c;const f=(u=i.progressFn?o(s,{progressFn:e=>{(c=Math.floor(e/5))!==l&&(l=c,i.progressFn(c))}}):o(s)).length-1;for(let e=f;e>0;e--)i.progressFn&&(c=Math.floor(78*(1-e/f))+21)!==l&&c>l&&(l=c,i.progressFn(c)),(u[e][0]<=u[e-1][0]||!i.joinRangesThatTouchEdges&&u[e][0]<u[e-1][1]||i.joinRangesThatTouchEdges&&u[e][0]<=u[e-1][1])&&(u[e-1][0]=Math.min(u[e][0],u[e-1][0]),u[e-1][1]=Math.max(u[e][1],u[e-1][1]),void 0!==u[e][2]&&(u[e-1][0]>=u[e][0]||u[e-1][1]<=u[e][1])&&null!==u[e-1][2]&&(null===u[e][2]&&null!==u[e-1][2]?u[e-1][2]=null:void 0!==u[e-1][2]?2===i.mergeType&&u[e-1][0]===u[e][0]?u[e-1][2]=u[e][2]:u[e-1][2]+=u[e][2]:u[e-1][2]=u[e][2]),u.splice(e,1),e=u.length);return u}const _=Array.isArray;const w=" ";function T(e,t=!0,r){if(!(r.trim().length||e.length&&"\n"!==r&&r!==w&&" "===(t?e[e.length-1]:e[0])||e.length&&"\n"===(t?e[e.length-1]:e[0])&&"\n"!==r&&r!==w))if(t){if(("\n"===r||r===w)&&e.length&&" "===e[e.length-1])for(;e.length&&" "===e[e.length-1];)e.pop();e.push(r===w||"\n"===r?r:" ")}else{if(("\n"===r||r===w)&&e.length&&" "===e[0])for(;e.length&&" "===e[0];)e.shift();e.unshift(r===w||"\n"===r?r:" ")}}function S(e,t){if("string"==typeof e&&e.length){let r,n,o=!1;if(e.includes("\r\n")&&(o=!0),r=t&&"number"==typeof t?t:1,""===e.trim()){const t=[];for(n=r,Array.from(e).forEach(e=>{("\n"!==e||n)&&("\n"===e&&n--,T(t,!0,e))});t.length>1&&" "===t[t.length-1];)t.pop();return t.join("")}const i=[];if(n=r,""===e[0].trim())for(let t=0,r=e.length;t<r&&0===e[t].trim().length;t++)("\n"!==e[t]||n)&&("\n"===e[t]&&n--,T(i,!0,e[t]));const s=[];if(n=r,""===e.slice(-1).trim())for(let t=e.length;t--&&0===e[t].trim().length;)("\n"!==e[t]||n)&&("\n"===e[t]&&n--,T(s,!1,e[t]));return o?`${i.join("")}${e.trim()}${s.join("")}`.replace(/\n/g,"\r\n"):i.join("")+e.trim()+s.join("")}return e}function O(e){return null!=e}const j=Array.isArray,$=Number.isInteger;function N(e){return"string"==typeof e}function E(e){return r(e,{includeZero:!0})?parseInt(e,10):e}class R{constructor(e){const t=Object.assign({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1},e);if(t.mergeType&&1!==t.mergeType&&2!==t.mergeType)if(N(t.mergeType)&&"1"===t.mergeType.trim())t.mergeType=1;else{if(!N(t.mergeType)||"2"!==t.mergeType.trim())throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof t.mergeType}", equal to ${JSON.stringify(t.mergeType,null,4)}`);t.mergeType=2}this.opts=t}add(e,n,o,...i){if(i.length>0)throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ${JSON.stringify(i,null,4)}`);if(!O(e)&&!O(n))return;if(O(e)&&!O(n)){if(j(e)){if(e.length){if(e.some(e=>j(e)))return void e.forEach(e=>{j(e)&&this.add(...e)});e.length>1&&$(E(e[0]))&&$(E(e[1]))&&this.add(...e)}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(e,null,0)}) but second-one, "to" is not (${JSON.stringify(n,null,0)})`)}if(!O(e)&&O(n))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(n,null,0)}) but first-one, "from" is not (${JSON.stringify(e,null,0)})`);const s=r(e,{includeZero:!0})?parseInt(e,10):e,a=r(n,{includeZero:!0})?parseInt(n,10):n;if($(o)&&(o=String(o)),!t(s,{includeZero:!0})||!t(a,{includeZero:!0}))throw t(s,{includeZero:!0})?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof a}" equal to: ${JSON.stringify(a,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof s}" equal to: ${JSON.stringify(s,null,4)}`);if(O(o)&&!N(o)&&!$(o))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof o}, equal to:\n${JSON.stringify(o,null,4)}`);if(O(this.slices)&&j(this.last())&&s===this.last()[1]){if(this.last()[1]=a,this.last()[2],null!==this.last()[2]&&O(o)){let e=!(O(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?o:this.last()[2]+o;this.opts.limitToBeAddedWhitespace&&(e=S(e,this.opts.limitLinebreaksCount)),N(e)&&!e.length||(this.last()[2]=e)}}else{this.slices||(this.slices=[]);const e=void 0===o||N(o)&&!o.length?[s,a]:[s,a,this.opts.limitToBeAddedWhitespace?S(o,this.opts.limitLinebreaksCount):o];this.slices.push(e)}}push(e,t,r,...n){this.add(e,t,r,...n)}current(){return null!=this.slices?(this.slices=b(this.slices,{mergeType:this.opts.mergeType}),this.opts.limitToBeAddedWhitespace?this.slices.map(e=>O(e[2])?[e[0],e[1],S(e[2],this.opts.limitLinebreaksCount)]:e):this.slices):null}wipe(){this.slices=void 0}replace(e){if(j(e)&&e.length){if(!j(e[0])||!$(e[0][0]))throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(e[0],null,4)} should be an array and its first element should be an integer, a string index.`);this.slices=a(e)}else this.slices=void 0}last(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}var I=s((function(e,t){!function(r){function n(e,t){return t instanceof Object||(t={trim:!0}),"number"==typeof e&&!isNaN(e)||(e=(e||"").toString(),"trim"in t&&!t.trim?!/\s/.test(e):!!(e=e.trim())&&!isNaN(e))}e.exports&&(t=e.exports=n),t.isNumeric=n}()})),F=(I.isNumeric,1/0),A="[object Symbol]",D=/^\s+|\s+$/g,W="[\\ud800-\\udfff]",x="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",H="\\ud83c[\\udffb-\\udfff]",k="[^\\ud800-\\udfff]",J="(?:\\ud83c[\\udde6-\\uddff]){2}",Z="[\\ud800-\\udbff][\\udc00-\\udfff]",C="(?:"+x+"|"+H+")"+"?",M="[\\ufe0e\\ufe0f]?"+C+("(?:\\u200d(?:"+[k,J,Z].join("|")+")[\\ufe0e\\ufe0f]?"+C+")*"),P="(?:"+[k+x+"?",x,J,Z,W].join("|")+")",K=RegExp(H+"(?="+H+")|"+P+M,"g"),U=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),q="object"==typeof i&&i&&i.Object===Object&&i,B="object"==typeof self&&self&&self.Object===Object&&self,V=q||B||Function("return this")();function L(e,t,r){if(t!=t)return function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,z,r);for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}function z(e){return e!=e}function G(e){return function(e){return U.test(e)}(e)?function(e){return e.match(K)||[]}(e):function(e){return e.split("")}(e)}var Q=Object.prototype.toString,Y=V.Symbol,X=Y?Y.prototype:void 0,ee=X?X.toString:void 0;function te(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&Q.call(e)==A}(e))return ee?ee.call(e):"";var t=e+"";return"0"==t&&1/e==-F?"-0":t}function re(e,t,r){var n=e.length;return r=void 0===r?n:r,!t&&r>=n?e:function(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var i=Array(o);++n<o;)i[n]=e[n+t];return i}(e,t,r)}var ne=function(e,t,r){var n;if((e=null==(n=e)?"":te(n))&&(r||void 0===t))return e.replace(D,"");if(!e||!(t=te(t)))return e;var o=G(e),i=G(t);return re(o,function(e,t){for(var r=-1,n=e.length;++r<n&&L(t,e[r],0)>-1;);return r}(o,i),function(e,t){for(var r=e.length;r--&&L(t,e[r],0)>-1;);return r}(o,i)+1).join("")};function oe(e,n){let o=!0;const i=[".",",","'"," "];let s;if("string"!=typeof e)throw new TypeError(`string-remove-thousand-separators/remSep(): [THROW_ID_01] Input must be string! Currently it's: ${typeof e}, equal to:\n${JSON.stringify(e,null,4)}`);if(null!=n&&!v(n))throw new TypeError(`string-remove-thousand-separators/remSep(): [THROW_ID_02] Options object must be a plain object! Currently it's: ${typeof n}, equal to:\n${JSON.stringify(n,null,4)}`);const a=Object.assign({},{removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1},n),u=ne(e.trim(),'"');if(""===u)return u;const l=new R;for(let e=0,t=u.length;e<t;e++){if(a.removeThousandSeparatorsFromNumbers&&""===u[e].trim()&&l.add(e,e+1),a.removeThousandSeparatorsFromNumbers&&"'"===u[e]&&(l.add(e,e+1),"'"===u[e+1])){o=!1;break}if(i.includes(u[e])){if(void 0!==u[e+1]&&I(u[e+1]))if(void 0!==u[e+2]){if(!I(u[e+2])){o=!1;break}if(void 0!==u[e+3]){if(!I(u[e+3])){o=!1;break}if(void 0!==u[e+4]&&I(u[e+4])){o=!1;break}if(a.removeThousandSeparatorsFromNumbers&&l.add(e,e+1),s){if(u[e]!==s){o=!1;break}}else s=u[e]}else a.removeThousandSeparatorsFromNumbers&&a.forceUKStyle&&","===u[e]&&l.add(e,e+1,".")}else a.forceUKStyle&&","===u[e]&&l.add(e,e+1,"."),a.padSingleDecimalPlaceNumbers&&l.add(e+2,e+2,"0")}else if(!I(u[e])){o=!1;break}}return o&&l.current()?function(e,n,o){let i=0,s=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof e)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(null===n)return e;if(!_(n))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof n}, equal to: ${JSON.stringify(n,null,4)}`);if(o&&"function"!=typeof o)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof o}, equal to: ${JSON.stringify(o,null,4)}`);_(n)&&(t(n[0],{includeZero:!0})||r(n[0],{includeZero:!0}))&&(t(n[1],{includeZero:!0})||r(n[1],{includeZero:!0}))&&(n=[n]);const a=n.length;let u=0;n.forEach((e,l)=>{if(o&&(i=Math.floor(u/a*10))!==s&&(s=i,o(i)),!_(e))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${l}th element not an array: ${JSON.stringify(e,null,4)}, which is ${typeof e}`);if(!t(e[0],{includeZero:!0})){if(!r(e[0],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${l}th element, array [${e[0]},${e[1]}]. That array has first element not an integer, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0],null,4)}. Computer doesn't like this.`);n[l][0]=Number.parseInt(n[l][0],10)}if(!t(e[1],{includeZero:!0})){if(!r(e[1],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${l}th element, array [${e[0]},${e[1]}]. That array has second element not an integer, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1],null,4)}. Computer doesn't like this.`);n[l][1]=Number.parseInt(n[l][1],10)}u++});const l=b(n,{progressFn:e=>{o&&(i=10+Math.floor(e/10))!==s&&(s=i,o(i))}}),c=l.length;if(c>0){const t=e.slice(l[c-1][1]);e=l.reduce((t,r,n,a)=>{o&&(i=20+Math.floor(n/c*80))!==s&&(s=i,o(i));const u=0===n?0:a[n-1][1],l=a[n][0];return t+e.slice(u,l)+(function(e){return null!=e}(a[n][2])?a[n][2]:"")},""),e+=t}return e}(u,l.current()):u}function ie(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function se(e,t,r){if(t!=t)return function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,ue,r);for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}function ae(e,t,r,n){for(var o=r-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}function ue(e){return e!=e}var le=Array.prototype.splice,ce=Math.max;function fe(e,t,r,n){var o=n?ae:se,i=-1,s=t.length,a=e;for(e===t&&(t=function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(t)),r&&(a=function(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}(e,function(e){return function(t){return e(t)}}(r)));++i<s;)for(var u=0,l=t[i],c=r?r(l):l;(u=o(a,c,u,n))>-1;)a!==e&&le.call(a,u,1),le.call(e,u,1);return e}var pe=function(e,t){return t=ce(void 0===t?e.length-1:t,0),function(){for(var r=arguments,n=-1,o=ce(r.length-t,0),i=Array(o);++n<o;)i[n]=r[t+n];n=-1;for(var s=Array(t+1);++n<t;)s[n]=r[n];return s[t]=i,ie(e,this,s)}}((function(e,t){return e&&e.length&&t&&t.length?fe(e,t):e})),he={symbol:"$",separator:",",decimal:".",formatWithSymbol:!1,errorOnInvalid:!1,precision:2,pattern:"!#",negativePattern:"-!#"},ge=function(e){return Math.round(e)},ye=function(e){return Math.pow(10,e)},de=/(\d)(?=(\d{3})+\b)/g,me=/(\d)(?=(\d\d)+\d\b)/g;function ve(e,t){if(!(this instanceof ve))return new ve(e,t);var r=Object.assign({},he,t),n=ye(r.precision),o=be(e,r);this.intValue=o,this.value=o/n,r.increment=r.increment||1/n,r.useVedic?r.groups=me:r.groups=de,this.s=r,this.p=n}function be(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=0,o=t.decimal,i=t.errorOnInvalid,s=t.precision,a=ye(s),u="number"==typeof e;if(u||e instanceof ve)n=(u?e:e.value)*a;else if("string"==typeof e){var l=new RegExp("[^-\\d"+o+"]","g"),c=new RegExp("\\"+o,"g");n=(n=e.replace(/\((.*)\)/,"-$1").replace(l,"").replace(c,".")*a)||0}else{if(i)throw Error("Invalid Input");n=0}return n=n.toFixed(4),r?ge(n):n}ve.prototype={add:function(e){var t=this.intValue,r=this.s,n=this.p;return ve((t+=be(e,r))/n,r)},subtract:function(e){var t=this.intValue,r=this.s,n=this.p;return ve((t-=be(e,r))/n,r)},multiply:function(e){var t=this.intValue,r=this.s;return ve((t*=e)/ye(r.precision),r)},divide:function(e){var t=this.intValue,r=this.s;return ve(t/=be(e,r,!1),r)},distribute:function(e){for(var t=this.intValue,r=this.p,n=this.s,o=[],i=Math[t>=0?"floor":"ceil"](t/e),s=Math.abs(t-i*e);0!==e;e--){var a=ve(i/r,n);s-- >0&&(a=t>=0?a.add(1/r):a.subtract(1/r)),o.push(a)}return o},dollars:function(){return~~this.value},cents:function(){return~~(this.intValue%this.p)},format:function(e){var t=this.s,r=t.pattern,n=t.negativePattern,o=t.formatWithSymbol,i=t.symbol,s=t.separator,a=t.decimal,u=t.groups,l=(this+"").replace(/^-/,"").split("."),c=l[0],f=l[1];return void 0===e&&(e=o),(this.value>=0?r:n).replace("!",e?i:"").replace("#","".concat(c.replace(u,"$1"+s)).concat(f?a+f:""))},toString:function(){var e,t,r=this.intValue,n=this.p,o=this.s;return(e=r/n,t=o.increment,ge(e/t)*t).toFixed(o.precision)},toJSON:function(){return this.value}};var _e=["د.إ","؋","L","֏","ƒ","Kz","$","ƒ","₼","KM","৳","лв",".د.ب","FBu","$b","R$","฿","Nu.","P","p.","BZ$","FC","CHF","¥","₡","₱","Kč","Fdj","kr","RD$","دج","kr","Nfk","Br","Ξ","€","₾","₵","GH₵","D","FG","Q","L","kn","G","Ft","Rp","₪","₹","ع.د","﷼","kr","J$","JD","¥","KSh","лв","៛","CF","₩","₩","KD","лв","₭","₨","M","Ł","Lt","Ls","LD","MAD","lei","Ar","ден","K","₮","MOP$","UM","₨","Rf","MK","RM","MT","₦","C$","kr","₨","﷼","B/.","S/.","K","₱","₨","zł","Gs","﷼","￥","lei","Дин.","₽","R₣","﷼","₨","ج.س.","kr","£","Le","S","Db","E","฿","SM","T","د.ت","T$","₤","₺","TT$","NT$","TSh","₴","USh","$U","лв","Bs","₫","VT","WS$","FCFA","Ƀ","CFA","₣","﷼","R","Z$"];function we(t){if("string"!=typeof t)throw new Error("csv-sort/util/findtype(): input must be string! Currently it's: ".concat(e(t)));return I(t)?"numeric":_e.some((function(e){return I(t.replace(e,"").replace(/[,.]/g,""))}))?"numeric":0===t.trim().length?"empty":"text"}var Te=Array.isArray;function Se(e){return null!=e}return function(t){var r,n=null,o=null;if("string"==typeof t){if(0===t.length)return[[""]];r=function(e,t){let r=0,n=0,o=[];const i=[];let s=!1,a=!0;if(void 0!==t&&!v(t))throw new Error(`csv-split-easy/split(): [THROW_ID_02] Options object must be a plain object! Currently it's of a type ${typeof t} equal to:\n${JSON.stringify(t,null,4)}`);const u=Object.assign({},{removeThousandSeparatorsFromNumbers:!0,padSingleDecimalPlaceNumbers:!0,forceUKStyle:!1},t);if("string"!=typeof e)throw new TypeError(`csv-split-easy/split(): [THROW_ID_04] input must be string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(""===e)return[[""]];for(let t=0,l=(e=e.trim()).length;t<l;t++){if(a&&'"'!==e[t]&&","!==e[t]&&""!==e[t].trim()&&(a=!1),'"'===e[t])if(s&&'"'===e[t+1])t+=1;else if(s){s=!1;const n=e.slice(r,t);""!==n.trim()&&(a=!1);const i=/""/.test(n)?n.replace(/""/g,'"'):oe(n,{removeThousandSeparatorsFromNumbers:u.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:u.padSingleDecimalPlaceNumbers,forceUKStyle:u.forceUKStyle});o.push(i)}else s=!0,r=t+1;else if(s||","!==e[t])if("\n"===e[t]||"\r"===e[t]){if(!n){if(n=t,!s&&'"'!==e[t-1]){const n=e.slice(r,t);""!==n.trim()&&(a=!1),o.push(oe(n,{removeThousandSeparatorsFromNumbers:u.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:u.padSingleDecimalPlaceNumbers,forceUKStyle:u.forceUKStyle}))}a?o=[]:i.push(o),a=!0,o=[]}r=t+1}else n&&(n=0,r=t);else{if('"'!==e[t-1]&&!s){const n=e.slice(r,t);""!==n.trim()&&(a=!1),o.push(oe(n,{removeThousandSeparatorsFromNumbers:u.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:u.padSingleDecimalPlaceNumbers,forceUKStyle:u.forceUKStyle}))}r=t+1,n&&(n=0)}if(t+1===l){if('"'!==e[t]){const n=e.slice(r,t+1);""!==n.trim()&&(a=!1),o.push(oe(n,{removeThousandSeparatorsFromNumbers:u.removeThousandSeparatorsFromNumbers,padSingleDecimalPlaceNumbers:u.padSingleDecimalPlaceNumbers,forceUKStyle:u.forceUKStyle}))}a?o=[]:i.push(o),a=!0}}return 0===i.length?[[""]]:i}(t)}else{if(!Te(t))throw new TypeError("csv-sort/csvSort(): [THROW_ID_02] The input is of a wrong type! We accept either string of array of arrays. We got instead: ".concat(e(t),", equal to:\n").concat(JSON.stringify(t,null,4)));var i,s;if(!t.every((function(e,t){return Te(e)||(i=e,s=t),Te(e)})))throw new TypeError("csv-sort/csvSort(): [THROW_ID_01] the input is array as expected, but not all of its children are arrays! For example, the element at index ".concat(s," is not array but: ").concat(e(i),", equal to:\n").concat(JSON.stringify(i,null,4)))}for(var a=null,u=!1,l=!0,c=[],f=null,p=r.length-1;p>=0;p--)if(a){0===p&&(u=r[p].every((function(e){return"text"===we(e)||"empty"===we(e)}))),u||a.length===r[p].length||(l=!1);for(var h=null,g=0,y=r[p].length;g<y;g++)if(null===h&&"empty"===we(r[p][g].trim())&&(h=g),null!==h&&"empty"!==we(r[p][g].trim())&&(h=null),we(r[p][g].trim())!==a[g]&&!u){var d=we(r[p][g].trim());if(Te(a[g]))a[g].includes(d)||a[g].push(we(r[p][g].trim()));else if(a[g]!==d){var m=a[g];a[g]=[],a[g].push(m),a[g].push(d)}}null!==f&&null!==h&&h>f&&(!u||u&&0!==p)&&(f=h)}else if(1!==r[p].length||""!==r[p][0]){a=[];for(var b=0,_=r[p].length;b<_;b++)a.push(we(r[p][b].trim())),null===f&&"empty"===we(r[p][b].trim())&&(f=b),null!==f&&"empty"!==we(r[p][b].trim())&&(f=null)}f||(f=a.length);for(var w=0,T=0,S=a.length;T<S&&"empty"===a[T];T++)w=T;0!==w&&(r=r.map((function(e){return e.slice(w+1,f)})),a=a.slice(w+1,f));var O,j=[];a.forEach((function(e,t){"numeric"===e&&j.push(t)}));var $=u?1:0;if(1===j.length)O=j[0];else{if(0===j.length)throw new Error('csv-sort/csvSort(): [THROW_ID_03] Your CSV file does not contain numeric-only columns and computer was not able to detect the "Balance" column!');for(var N=Array.from(j),E=[],R=0,I=N.length;R<I;R++){for(var F=N[R],A=void 0,D=!0,W=void 0,x=!0,H=$,k=r.length;H<k&&(D&&(Se(A)&&A===r[H][F]?(E.push(F),D=!1):A=r[H][F]),x&&(Se(W)?r[H][F]!==W&&(x=!1):W=r[H][F]),D);H++);x&&c.push(F)}if(1===(N=pe.apply(void 0,[N].concat(E))).length)O=N[0];else if(0===N.length)throw new Error('csv-sort/csvSort(): [THROW_ID_04] The computer can\'t find the "Balance" column! It saw some numeric-only columns, but they all seem to have certain rows with the same values as rows right below/above them!')}if(!O)throw new Error("csv-sort/csvSort(): [THROW_ID_05] Sadly computer couldn't find its way in this CSV and had to stop working on it.");var J=pe.apply(void 0,[Array.from(a.reduce((function(e,t,r){return("string"==typeof t&&"numeric"===t||Te(t)&&t.includes("numeric"))&&e.push(r),e}),[])),O].concat(c)),Z=[];Z.push(r[r.length-1].slice(0,f));for(var C=[],M=u?1:0,P=r.length-2;P>=M;P--)for(var K=r.length-2;K>=M;K--)if(!C.includes(K)){for(var U=!1,q=0,B=J.length;q<B;q++){var V=null;""!==r[K][J[q]]&&(V=ve(r[K][J[q]]));var L=null;""!==r[K][O]&&(L=ve(r[K][O]));var z=null;""!==Z[0][O]&&(z=ve(Z[0][O]).format());var G=null;""!==Z[Z.length-1][J[q]]&&(G=ve(Z[Z.length-1][J[q]]).format());var Q=null;if(""!==Z[Z.length-1][O]&&(Q=ve(Z[Z.length-1][O])),V&&L.add(V).format()===z){Z.unshift(r[K].slice(0,f)),C.push(K),U=!0;break}if(V&&L.subtract(V).format()===z){Z.unshift(r[K].slice(0,f)),C.push(K),U=!0;break}if(G&&Q.add(G).format()===L.format()){Z.push(r[K].slice(0,f)),C.push(K),U=!0;break}if(G&&Q.subtract(G).format()===L.format()){Z.push(r[K].slice(0,f)),C.push(K),U=!0;break}}if(U){U=!1;break}}return u&&(l&&r[0].length>a.length&&(r[0].length=a.length),Z.unshift(r[0].slice(0,f))),r.length-(u?2:1)!==C.length&&(n="Not all rows were recognised!",o="alert"),{res:Z,msgContent:n,msgType:o}}}));
