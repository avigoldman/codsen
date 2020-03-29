/**
 * ast-monkey-traverse-with-lookahead
 * Utility library to traverse parsed HTML (AST's) or anything nested (plain objects within arrays within plain objects)
 * Version: 1.0.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ast-monkey-traverse-with-lookahead
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t=t||self).astMonkeyTraverseWithLookahead=r()}(this,(function(){"use strict";function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(r)}function r(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var o=function(t,r){return t(r={exports:{}},r.exports),r.exports}((function(t,r){var e="[object Arguments]",o="[object Function]",a="[object GeneratorFunction]",c="[object Map]",u="[object Set]",i=/\w*$/,f=/^\[object .+?Constructor\]$/,s=/^(?:0|[1-9]\d*)$/,l={};l[e]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[c]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[u]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[o]=l["[object WeakMap]"]=!1;var p="object"==typeof n&&n&&n.Object===Object&&n,y="object"==typeof self&&self&&self.Object===Object&&self,b=p||y||Function("return this")(),h=r&&!r.nodeType&&r,_=h&&t&&!t.nodeType&&t,v=_&&_.exports===h;function d(t,r){return t.set(r[0],r[1]),t}function j(t,r){return t.add(r),t}function g(t,r,e,n){var o=-1,a=t?t.length:0;for(n&&a&&(e=t[++o]);++o<a;)e=r(e,t[o],o,t);return e}function w(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function A(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e}function m(t,r){return function(e){return t(r(e))}}function O(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}var S,x=Array.prototype,I=Function.prototype,k=Object.prototype,U=b["__core-js_shared__"],E=(S=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"",T=I.toString,$=k.hasOwnProperty,F=k.toString,M=RegExp("^"+T.call($).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),P=v?b.Buffer:void 0,B=b.Symbol,D=b.Uint8Array,V=m(Object.getPrototypeOf,Object),W=Object.create,C=k.propertyIsEnumerable,R=x.splice,L=Object.getOwnPropertySymbols,z=P?P.isBuffer:void 0,N=m(Object.keys,Object),G=_t(b,"DataView"),K=_t(b,"Map"),q=_t(b,"Promise"),H=_t(b,"Set"),J=_t(b,"WeakMap"),Q=_t(Object,"create"),X=wt(G),Y=wt(K),Z=wt(q),tt=wt(H),rt=wt(J),et=B?B.prototype:void 0,nt=et?et.valueOf:void 0;function ot(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function at(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function ct(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function ut(t){this.__data__=new at(t)}function it(t,r){var n=mt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ot(t)}(t)&&$.call(t,"callee")&&(!C.call(t,"callee")||F.call(t)==e)}(t)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],o=n.length,a=!!o;for(var c in t)!r&&!$.call(t,c)||a&&("length"==c||jt(c,o))||n.push(c);return n}function ft(t,r,e){var n=t[r];$.call(t,r)&&At(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function st(t,r){for(var e=t.length;e--;)if(At(t[e][0],r))return e;return-1}function lt(t,r,n,f,s,p,y){var b;if(f&&(b=p?f(t,s,p,y):f(t)),void 0!==b)return b;if(!It(t))return t;var h=mt(t);if(h){if(b=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&$.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,b)}else{var _=dt(t),v=_==o||_==a;if(St(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if("[object Object]"==_||_==e||v&&!p){if(w(t))return p?t:{};if(b=function(t){return"function"!=typeof t.constructor||gt(t)?{}:(r=V(t),It(r)?W(r):{});var r}(v?{}:t),!r)return function(t,r){return bt(t,vt(t),r)}(t,function(t,r){return t&&bt(r,kt(r),t)}(b,t))}else{if(!l[_])return p?t:{};b=function(t,r,e,n){var o=t.constructor;switch(r){case"[object ArrayBuffer]":return yt(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,r){var e=r?yt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,r){var e=r?yt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case c:return function(t,r,e){return g(r?e(A(t),!0):A(t),d,new t.constructor)}(t,n,e);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var r=new t.constructor(t.source,i.exec(t));return r.lastIndex=t.lastIndex,r}(t);case u:return function(t,r,e){return g(r?e(O(t),!0):O(t),j,new t.constructor)}(t,n,e);case"[object Symbol]":return a=t,nt?Object(nt.call(a)):{}}var a}(t,_,lt,r)}}y||(y=new ut);var m=y.get(t);if(m)return m;if(y.set(t,b),!h)var S=n?function(t){return function(t,r,e){var n=r(t);return mt(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,kt,vt)}(t):kt(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(S||t,(function(e,o){S&&(e=t[o=e]),ft(b,o,lt(e,r,n,f,o,t,y))})),b}function pt(t){return!(!It(t)||(r=t,E&&E in r))&&(xt(t)||w(t)?M:f).test(wt(t));var r}function yt(t){var r=new t.constructor(t.byteLength);return new D(r).set(new D(t)),r}function bt(t,r,e,n){e||(e={});for(var o=-1,a=r.length;++o<a;){var c=r[o],u=n?n(e[c],t[c],c,e,t):void 0;ft(e,c,void 0===u?t[c]:u)}return e}function ht(t,r){var e,n,o=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map}function _t(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return pt(e)?e:void 0}ot.prototype.clear=function(){this.__data__=Q?Q(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var r=this.__data__;if(Q){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return $.call(r,t)?r[t]:void 0},ot.prototype.has=function(t){var r=this.__data__;return Q?void 0!==r[t]:$.call(r,t)},ot.prototype.set=function(t,r){return this.__data__[t]=Q&&void 0===r?"__lodash_hash_undefined__":r,this},at.prototype.clear=function(){this.__data__=[]},at.prototype.delete=function(t){var r=this.__data__,e=st(r,t);return!(e<0)&&(e==r.length-1?r.pop():R.call(r,e,1),!0)},at.prototype.get=function(t){var r=this.__data__,e=st(r,t);return e<0?void 0:r[e][1]},at.prototype.has=function(t){return st(this.__data__,t)>-1},at.prototype.set=function(t,r){var e=this.__data__,n=st(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},ct.prototype.clear=function(){this.__data__={hash:new ot,map:new(K||at),string:new ot}},ct.prototype.delete=function(t){return ht(this,t).delete(t)},ct.prototype.get=function(t){return ht(this,t).get(t)},ct.prototype.has=function(t){return ht(this,t).has(t)},ct.prototype.set=function(t,r){return ht(this,t).set(t,r),this},ut.prototype.clear=function(){this.__data__=new at},ut.prototype.delete=function(t){return this.__data__.delete(t)},ut.prototype.get=function(t){return this.__data__.get(t)},ut.prototype.has=function(t){return this.__data__.has(t)},ut.prototype.set=function(t,r){var e=this.__data__;if(e instanceof at){var n=e.__data__;if(!K||n.length<199)return n.push([t,r]),this;e=this.__data__=new ct(n)}return e.set(t,r),this};var vt=L?m(L,Object):function(){return[]},dt=function(t){return F.call(t)};function jt(t,r){return!!(r=null==r?9007199254740991:r)&&("number"==typeof t||s.test(t))&&t>-1&&t%1==0&&t<r}function gt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||k)}function wt(t){if(null!=t){try{return T.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function At(t,r){return t===r||t!=t&&r!=r}(G&&"[object DataView]"!=dt(new G(new ArrayBuffer(1)))||K&&dt(new K)!=c||q&&"[object Promise]"!=dt(q.resolve())||H&&dt(new H)!=u||J&&"[object WeakMap]"!=dt(new J))&&(dt=function(t){var r=F.call(t),e="[object Object]"==r?t.constructor:void 0,n=e?wt(e):void 0;if(n)switch(n){case X:return"[object DataView]";case Y:return c;case Z:return"[object Promise]";case tt:return u;case rt:return"[object WeakMap]"}return r});var mt=Array.isArray;function Ot(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!xt(t)}var St=z||function(){return!1};function xt(t){var r=It(t)?F.call(t):"";return r==o||r==a}function It(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function kt(t){return Ot(t)?it(t):function(t){if(!gt(t))return N(t);var r=[];for(var e in Object(t))$.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}t.exports=function(t){return lt(t,!0,!0)}}));function a(t){return"string"==typeof t&&"."===t[0]?t.slice(1):t}function c(r){return r&&"object"===t(r)&&!Array.isArray(r)}return function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,u={now:!1},i=[];function f(t,r,e,n){if((e=Object.assign({depth:-1,path:""},e)).depth+=1,Array.isArray(t))for(var u=0,i=t.length;u<i&&!n.now;u++){var s="".concat(e.path,".").concat(u);e.parent=o(t),e.parentType="array",r(t[u],void 0,Object.assign({},e,{path:a(s)}),n),f(t[u],r,Object.assign({},e,{path:a(s)}),n)}else if(c(t))for(var l in t){if(n.now&&null!=l)break;var p="".concat(e.path,".").concat(l);0===e.depth&&null!=l&&(e.topmostKey=l),e.parent=o(t),e.parentType="object",r(l,t[l],Object.assign({},e,{path:a(p)}),n),f(t[l],r,Object.assign({},e,{path:a(p)}),n)}return t}function s(){var t=i.shift();t[2].next=[];for(var a=0;a<n&&i[a];a++)t[2].next.push(o([i[a][0],i[a][1],i[a][2]]));e.apply(void 0,r(t))}function l(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];i.push([].concat(r)),i.length>n&&s()}if(f(t,l,{},u),i.length)for(var p=0,y=i.length;p<y;p++)s()}}));