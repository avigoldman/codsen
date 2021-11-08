/**
 * @name string-left-right
 * @fileoverview Looks up the first non-whitespace character to the left/right of a given index
 * @version 5.0.5
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-left-right/}
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).stringLeftRight={})}(this,(function(t){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var r,n,o=Object.prototype,i=Function.prototype.toString,u=o.hasOwnProperty,c=i.call(Object),f=o.toString,s=(r=Object.getPrototypeOf,n=Object,function(t){return r(n(t))});var l=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=f.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=s(t);if(null===e)return!0;var r=u.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&i.call(r)==c},a={exports:{}};!function(t,r){var n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",u="[object Boolean]",c="[object Date]",f="[object Function]",s="[object GeneratorFunction]",l="[object Map]",a="[object Number]",p="[object Object]",h="[object Promise]",d="[object RegExp]",g="[object Set]",y="[object String]",v="[object Symbol]",b="[object WeakMap]",_="[object ArrayBuffer]",m="[object DataView]",w="[object Float32Array]",j="[object Float64Array]",A="[object Int8Array]",O="[object Int16Array]",x="[object Int32Array]",N="[object Uint8Array]",S="[object Uint8ClampedArray]",R="[object Uint16Array]",I="[object Uint32Array]",$=/\w*$/,E=/^\[object .+?Constructor\]$/,L=/^(?:0|[1-9]\d*)$/,C={};C[i]=C["[object Array]"]=C[_]=C[m]=C[u]=C[c]=C[w]=C[j]=C[A]=C[O]=C[x]=C[l]=C[a]=C[p]=C[d]=C[g]=C[y]=C[v]=C[N]=C[S]=C[R]=C[I]=!0,C["[object Error]"]=C[f]=C[b]=!1;var P="object"==typeof self&&self&&self.Object===Object&&self,T="object"==typeof e&&e&&e.Object===Object&&e||P||Function("return this")(),W=r&&!r.nodeType&&r,D=W&&t&&!t.nodeType&&t,F=D&&D.exports===W;function k(t,e){return t.set(e[0],e[1]),t}function B(t,e){return t.add(e),t}function M(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function U(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function q(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function z(t,e){return function(r){return t(e(r))}}function H(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var V,G=Array.prototype,J=Function.prototype,K=Object.prototype,Q=T["__core-js_shared__"],X=(V=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"",Y=J.toString,Z=K.hasOwnProperty,tt=K.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=F?T.Buffer:void 0,nt=T.Symbol,ot=T.Uint8Array,it=z(Object.getPrototypeOf,Object),ut=Object.create,ct=K.propertyIsEnumerable,ft=G.splice,st=Object.getOwnPropertySymbols,lt=rt?rt.isBuffer:void 0,at=z(Object.keys,Object),pt=Dt(T,"DataView"),ht=Dt(T,"Map"),dt=Dt(T,"Promise"),gt=Dt(T,"Set"),yt=Dt(T,"WeakMap"),vt=Dt(Object,"create"),bt=Ut(pt),_t=Ut(ht),mt=Ut(dt),wt=Ut(gt),jt=Ut(yt),At=nt?nt.prototype:void 0,Ot=At?At.valueOf:void 0;function xt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Nt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Rt(t){this.__data__=new Nt(t)}function It(t,e){var r=zt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ht(t)}(t)&&Z.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var u in t)!e&&!Z.call(t,u)||o&&("length"==u||Bt(u,n))||r.push(u);return r}function $t(t,e,r){var n=t[e];Z.call(t,e)&&qt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Et(t,e){for(var r=t.length;r--;)if(qt(t[r][0],e))return r;return-1}function Lt(t,e,r,n,o,h,b){var E;if(n&&(E=h?n(t,o,h,b):n(t)),void 0!==E)return E;if(!Jt(t))return t;var L=zt(t);if(L){if(E=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,E)}else{var P=kt(t),T=P==f||P==s;if(Vt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(P==p||P==i||T&&!h){if(U(t))return h?t:{};if(E=function(t){return"function"!=typeof t.constructor||Mt(t)?{}:(e=it(t),Jt(e)?ut(e):{});var e}(T?{}:t),!e)return function(t,e){return Tt(t,Ft(t),e)}(t,function(t,e){return t&&Tt(e,Kt(e),t)}(E,t))}else{if(!C[P])return h?t:{};E=function(t,e,r,n){var o=t.constructor;switch(e){case _:return Pt(t);case u:case c:return new o(+t);case m:return function(t,e){var r=e?Pt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case w:case j:case A:case O:case x:case N:case S:case R:case I:return function(t,e){var r=e?Pt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return M(e?r(q(t),!0):q(t),k,new t.constructor)}(t,n,r);case a:case y:return new o(t);case d:return function(t){var e=new t.constructor(t.source,$.exec(t));return e.lastIndex=t.lastIndex,e}(t);case g:return function(t,e,r){return M(e?r(H(t),!0):H(t),B,new t.constructor)}(t,n,r);case v:return i=t,Ot?Object(Ot.call(i)):{}}var i}(t,P,Lt,e)}}b||(b=new Rt);var W=b.get(t);if(W)return W;if(b.set(t,E),!L)var D=r?function(t){return function(t,e,r){var n=e(t);return zt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Kt,Ft)}(t):Kt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(D||t,(function(o,i){D&&(o=t[i=o]),$t(E,i,Lt(o,e,r,n,i,t,b))})),E}function Ct(t){return!(!Jt(t)||function(t){return!!X&&X in t}(t))&&(Gt(t)||U(t)?et:E).test(Ut(t))}function Pt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Tt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var u=e[o],c=n?n(r[u],t[u],u,r,t):void 0;$t(r,u,void 0===c?t[u]:c)}return r}function Wt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Dt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Ct(r)?r:void 0}xt.prototype.clear=function(){this.__data__=vt?vt(null):{}},xt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},xt.prototype.get=function(t){var e=this.__data__;if(vt){var r=e[t];return r===n?void 0:r}return Z.call(e,t)?e[t]:void 0},xt.prototype.has=function(t){var e=this.__data__;return vt?void 0!==e[t]:Z.call(e,t)},xt.prototype.set=function(t,e){return this.__data__[t]=vt&&void 0===e?n:e,this},Nt.prototype.clear=function(){this.__data__=[]},Nt.prototype.delete=function(t){var e=this.__data__,r=Et(e,t);return!(r<0)&&(r==e.length-1?e.pop():ft.call(e,r,1),!0)},Nt.prototype.get=function(t){var e=this.__data__,r=Et(e,t);return r<0?void 0:e[r][1]},Nt.prototype.has=function(t){return Et(this.__data__,t)>-1},Nt.prototype.set=function(t,e){var r=this.__data__,n=Et(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},St.prototype.clear=function(){this.__data__={hash:new xt,map:new(ht||Nt),string:new xt}},St.prototype.delete=function(t){return Wt(this,t).delete(t)},St.prototype.get=function(t){return Wt(this,t).get(t)},St.prototype.has=function(t){return Wt(this,t).has(t)},St.prototype.set=function(t,e){return Wt(this,t).set(t,e),this},Rt.prototype.clear=function(){this.__data__=new Nt},Rt.prototype.delete=function(t){return this.__data__.delete(t)},Rt.prototype.get=function(t){return this.__data__.get(t)},Rt.prototype.has=function(t){return this.__data__.has(t)},Rt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof Nt){var n=r.__data__;if(!ht||n.length<199)return n.push([t,e]),this;r=this.__data__=new St(n)}return r.set(t,e),this};var Ft=st?z(st,Object):function(){return[]},kt=function(t){return tt.call(t)};function Bt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||L.test(t))&&t>-1&&t%1==0&&t<e}function Mt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||K)}function Ut(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function qt(t,e){return t===e||t!=t&&e!=e}(pt&&kt(new pt(new ArrayBuffer(1)))!=m||ht&&kt(new ht)!=l||dt&&kt(dt.resolve())!=h||gt&&kt(new gt)!=g||yt&&kt(new yt)!=b)&&(kt=function(t){var e=tt.call(t),r=e==p?t.constructor:void 0,n=r?Ut(r):void 0;if(n)switch(n){case bt:return m;case _t:return l;case mt:return h;case wt:return g;case jt:return b}return e});var zt=Array.isArray;function Ht(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Gt(t)}var Vt=lt||function(){return!1};function Gt(t){var e=Jt(t)?tt.call(t):"";return e==f||e==s}function Jt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Kt(t){return Ht(t)?It(t):function(t){if(!Mt(t))return at(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Lt(t,!0,!0)}}(a,a.exports);var p=a.exports;const h=" ";function d(t){const e={value:t,hungry:!1,optional:!1};return(e.value.endsWith("?*")||e.value.endsWith("*?"))&&e.value.length>2?(e.value=e.value.slice(0,e.value.length-2),e.optional=!0,e.hungry=!0):e.value.endsWith("?")&&e.value.length>1?(e.value=e.value.slice(0,~-e.value.length),e.optional=!0):e.value.endsWith("*")&&e.value.length>1&&(e.value=e.value.slice(0,~-e.value.length),e.hungry=!0),e}function g(t){return"number"==typeof t}function y(t){return"string"==typeof t}function v({str:t,idx:e=0,stopAtNewlines:r=!1,stopAtRawNbsp:n=!1}){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),!t[e+1])return null;if(t[e+1]&&(t[e+1].trim()||r&&"\n\r".includes(t[e+1])||n&&t[e+1]===h))return e+1;if(t[e+2]&&(t[e+2].trim()||r&&"\n\r".includes(t[e+2])||n&&t[e+2]===h))return e+2;for(let o=e+1,i=t.length;o<i;o++)if(t[o].trim()||r&&"\n\r".includes(t[o])||n&&t[o]===h)return o;return null}function b(t,e=0){return v({str:t,idx:e,stopAtNewlines:!1,stopAtRawNbsp:!1})}function _({str:t,idx:e,stopAtNewlines:r,stopAtRawNbsp:n}){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),e<1)return null;if(t[~-e]&&(t[~-e].trim()||r&&"\n\r".includes(t[~-e])||n&&t[~-e]===h))return~-e;if(t[e-2]&&(t[e-2].trim()||r&&"\n\r".includes(t[e-2])||n&&t[e-2]===h))return e-2;for(let o=e;o--;)if(t[o]&&(t[o].trim()||r&&"\n\r".includes(t[o])||n&&t[o]===h))return o;return null}function m(t,e=0){return _({str:t,idx:e,stopAtNewlines:!1,stopAtRawNbsp:!1})}function w(t,e,r,n,o){if("string"!=typeof e||!e.length)return null;if("number"!=typeof r&&(r=0),"right"===t&&!e[r+1]||"left"===t&&!e[~-r])return null;let i=r;const u=[];let c,f,s,l=0;for(;l<o.length;){if(!y(o[l])||!o[l].length){l+=1;continue}const{value:r,optional:a,hungry:p}=d(o[l]),h="right"===t?b(e,i):m(e,i);if(!(n.i&&e[h].toLowerCase()===r.toLowerCase()||!n.i&&e[h]===r)){if(a){l+=1;continue}if(s){l+=1,s=void 0;continue}return null}{const o="right"===t?b(e,h):m(e,h);p&&(n.i&&e[o].toLowerCase()===r.toLowerCase()||!n.i&&e[o]===r)?s=!0:l+=1,"number"==typeof h&&"right"===t&&h>i+1?u.push([i+1,h]):"left"===t&&"number"==typeof h&&h<~-i&&u.unshift([h+1,i]),i=h,"right"===t?(void 0===c&&(c=h),f=h):(void 0===f&&(f=h),c=h)}}return void 0===c||void 0===f?null:{gaps:u,leftmostChar:c,rightmostChar:f}}const j={i:!1};function A(t,e,...r){if(!r||!r.length)throw new Error("string-left-right/leftSeq(): only two input arguments were passed! Did you intend to use left() method instead?");let n;return n=l(r[0])?{...j,...r.shift()}:j,w("left",t,e,n,Array.from(r).reverse())}function O(t,e,...r){if(!r||!r.length)throw new Error("string-left-right/rightSeq(): only two input arguments were passed! Did you intend to use right() method instead?");let n;return n=l(r[0])?{...j,...r.shift()}:j,w("right",t,e,n,r)}function x(t,e,r,n,o=[]){if("string"!=typeof e||!e.length)return null;if(r&&"number"==typeof r||(r=0),"right"===t&&!e[r+1]||"left"===t&&0==+r)return null;let i=null,u=null;do{i="right"===t?O(e,"number"==typeof u?u:r,...o):A(e,"number"==typeof u?u:r,...o),null!==i&&(u="right"===t?i.rightmostChar:i.leftmostChar)}while(i);if(null!=u&&"right"===t&&(u+=1),null===u)return null;if("right"===t){if(e[u]&&e[u].trim())return u;const t=b(e,u);if(n&&0!==n.mode){if(1===n.mode)return u;if(2===n.mode){const t=e.slice(u);if(t.trim()||t.includes("\n")||t.includes("\r"))for(let t=u,r=e.length;t<r;t++)if(e[t].trim()||"\n\r".includes(e[t]))return t;return e.length}}else{if(t===u+1)return u;if(!(e.slice(u,t||e.length).trim()||e.slice(u,t||e.length).includes("\n")||e.slice(u,t||e.length).includes("\r")))return t?~-t:e.length;for(let t=u,r=e.length;t<r;t++)if("\n\r".includes(e[t]))return t}return t||e.length}if(e[u]&&e[~-u]&&e[~-u].trim())return u;const c=m(e,u);if(!n||0===n.mode){if(c===u-2)return u;if(e.slice(0,u).trim()||e.slice(0,u).includes("\n")||e.slice(0,u).includes("\r"))for(let t=u;t--;)if("\n\r".includes(e[t])||e[t].trim())return t+1+(e[t].trim()?1:0);return 0}if(1===n.mode)return u;if(2===n.mode){const t=e.slice(0,u);if(t.trim()||t.includes("\n")||t.includes("\r"))for(let t=u;t--;)if(e[t].trim()||"\n\r".includes(e[t]))return t+1;return 0}return null!==c?c+1:0}t.chompLeft=function(t,e,...r){if(!r.length||1===r.length&&l(r[0]))return null;const n={mode:0};if(l(r[0])){const o={...n,...p(r[0])};if(o.mode){if(y(o.mode)&&"0123".includes(o.mode))o.mode=Number.parseInt(o.mode,10);else if(!g(o.mode))throw new Error(`string-left-right/chompLeft(): [THROW_ID_01] the opts.mode is wrong! It should be 0, 1, 2 or 3. It was given as ${o.mode} (type ${typeof o.mode})`)}else o.mode=0;return x("left",t,e,o,p(r).slice(1))}return y(r[0])?x("left",t,e,n,p(r)):x("left",t,e,n,p(r).slice(1))},t.chompRight=function(t,e,...r){if(!r.length||1===r.length&&l(r[0]))return null;const n={mode:0};if(l(r[0])){const o={...n,...p(r[0])};if(o.mode){if(y(o.mode)&&"0123".includes(o.mode))o.mode=Number.parseInt(o.mode,10);else if(!g(o.mode))throw new Error(`string-left-right/chompRight(): [THROW_ID_02] the opts.mode is wrong! It should be 0, 1, 2 or 3. It was given as ${o.mode} (type ${typeof o.mode})`)}else o.mode=0;return x("right",t,e,o,p(r).slice(1))}return y(r[0])?x("right",t,e,n,p(r)):x("right",t,e,n,p(r).slice(1))},t.left=m,t.leftSeq=A,t.leftStopAtNewLines=function(t,e){return _({str:t,idx:e,stopAtNewlines:!0,stopAtRawNbsp:!1})},t.leftStopAtRawNbsp=function(t,e){return _({str:t,idx:e,stopAtNewlines:!1,stopAtRawNbsp:!0})},t.right=b,t.rightSeq=O,t.rightStopAtNewLines=function(t,e){return v({str:t,idx:e,stopAtNewlines:!0,stopAtRawNbsp:!1})},t.rightStopAtRawNbsp=function(t,e){return v({str:t,idx:e,stopAtNewlines:!1,stopAtRawNbsp:!0})},t.version="5.0.5",Object.defineProperty(t,"__esModule",{value:!0})}));
