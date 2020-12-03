/**
 * object-flatten-referencing
 * Flatten complex nested objects according to a reference objects
 * Version: 4.12.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/object-flatten-referencing/
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).objectFlattenReferencing=r()}(this,(function(){"use strict";function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(r)}function r(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function e(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))}))}return t}function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function i(t,r){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,r){if(t){if("string"==typeof t)return o(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,r):void 0}}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return c=t.done,t},e:function(t){u=!0,a=t},f:function(){try{c||null==e.return||e.return()}finally{if(u)throw a}}}}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var c=function(t){var r={exports:{}};return t(r,r.exports),r.exports}((function(r,e){var n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",c="[object Boolean]",u="[object Date]",f="[object Function]",s="[object GeneratorFunction]",l="[object Map]",p="[object Number]",h="[object Object]",y="[object Promise]",g="[object RegExp]",d="[object Set]",b="[object String]",v="[object Symbol]",w="[object WeakMap]",_="[object ArrayBuffer]",j="[object DataView]",m="[object Float32Array]",O="[object Float64Array]",W="[object Int8Array]",A="[object Int16Array]",T="[object Int32Array]",S="[object Uint8Array]",I="[object Uint8ClampedArray]",x="[object Uint16Array]",E="[object Uint32Array]",P=/\w*$/,D=/^\[object .+?Constructor\]$/,C=/^(?:0|[1-9]\d*)$/,M={};M[i]=M["[object Array]"]=M[_]=M[j]=M[c]=M[u]=M[m]=M[O]=M[W]=M[A]=M[T]=M[l]=M[p]=M[h]=M[g]=M[d]=M[b]=M[v]=M[S]=M[I]=M[x]=M[E]=!0,M["[object Error]"]=M[f]=M[w]=!1;var R="object"==t(a)&&a&&a.Object===Object&&a,k="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,B=R||k||Function("return this")(),$=e&&!e.nodeType&&e,F=$&&r&&!r.nodeType&&r,H=F&&F.exports===$;function L(t,r){return t.set(r[0],r[1]),t}function K(t,r){return t.add(r),t}function N(t,r,e,n){var o=-1,i=t?t.length:0;for(n&&i&&(e=t[++o]);++o<i;)e=r(e,t[o],o,t);return e}function U(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function G(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e}function V(t,r){return function(e){return t(r(e))}}function J(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}var z,q=Array.prototype,Q=Function.prototype,X=Object.prototype,Y=B["__core-js_shared__"],Z=(z=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"",tt=Q.toString,rt=X.hasOwnProperty,et=X.toString,nt=RegExp("^"+tt.call(rt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=H?B.Buffer:void 0,it=B.Symbol,at=B.Uint8Array,ct=V(Object.getPrototypeOf,Object),ut=Object.create,ft=X.propertyIsEnumerable,st=q.splice,lt=Object.getOwnPropertySymbols,pt=ot?ot.isBuffer:void 0,ht=V(Object.keys,Object),yt=Ft(B,"DataView"),gt=Ft(B,"Map"),dt=Ft(B,"Promise"),bt=Ft(B,"Set"),vt=Ft(B,"WeakMap"),wt=Ft(Object,"create"),_t=Ut(yt),jt=Ut(gt),mt=Ut(dt),Ot=Ut(bt),Wt=Ut(vt),At=it?it.prototype:void 0,Tt=At?At.valueOf:void 0;function St(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function It(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function xt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Et(t){this.__data__=new It(t)}function Pt(r,e){var n=Vt(r)||function(r){return function(r){return function(r){return!!r&&"object"==t(r)}(r)&&Jt(r)}(r)&&rt.call(r,"callee")&&(!ft.call(r,"callee")||et.call(r)==i)}(r)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(r.length,String):[],o=n.length,a=!!o;for(var c in r)!e&&!rt.call(r,c)||a&&("length"==c||Kt(c,o))||n.push(c);return n}function Dt(t,r,e){var n=t[r];rt.call(t,r)&&Gt(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function Ct(t,r){for(var e=t.length;e--;)if(Gt(t[e][0],r))return e;return-1}function Mt(t,r,e,n,o,a,y){var w;if(n&&(w=a?n(t,o,a,y):n(t)),void 0!==w)return w;if(!Qt(t))return t;var D=Vt(t);if(D){if(w=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&rt.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,w)}else{var C=Lt(t),R=C==f||C==s;if(zt(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if(C==h||C==i||R&&!a){if(U(t))return a?t:{};if(w=function(t){return"function"!=typeof t.constructor||Nt(t)?{}:(r=ct(t),Qt(r)?ut(r):{});var r}(R?{}:t),!r)return function(t,r){return Bt(t,Ht(t),r)}(t,function(t,r){return t&&Bt(r,Xt(r),t)}(w,t))}else{if(!M[C])return a?t:{};w=function(t,r,e,n){var o=t.constructor;switch(r){case _:return kt(t);case c:case u:return new o(+t);case j:return function(t,r){var e=r?kt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case m:case O:case W:case A:case T:case S:case I:case x:case E:return function(t,r){var e=r?kt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case l:return function(t,r,e){return N(r?e(G(t),!0):G(t),L,new t.constructor)}(t,n,e);case p:case b:return new o(t);case g:return function(t){var r=new t.constructor(t.source,P.exec(t));return r.lastIndex=t.lastIndex,r}(t);case d:return function(t,r,e){return N(r?e(J(t),!0):J(t),K,new t.constructor)}(t,n,e);case v:return i=t,Tt?Object(Tt.call(i)):{}}var i}(t,C,Mt,r)}}y||(y=new Et);var k=y.get(t);if(k)return k;if(y.set(t,w),!D)var B=e?function(t){return function(t,r,e){var n=r(t);return Vt(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,Xt,Ht)}(t):Xt(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(B||t,(function(o,i){B&&(o=t[i=o]),Dt(w,i,Mt(o,r,e,n,i,t,y))})),w}function Rt(t){return!(!Qt(t)||(r=t,Z&&Z in r))&&(qt(t)||U(t)?nt:D).test(Ut(t));var r}function kt(t){var r=new t.constructor(t.byteLength);return new at(r).set(new at(t)),r}function Bt(t,r,e,n){e||(e={});for(var o=-1,i=r.length;++o<i;){var a=r[o],c=n?n(e[a],t[a],a,e,t):void 0;Dt(e,a,void 0===c?t[a]:c)}return e}function $t(r,e){var n,o,i=r.__data__;return("string"==(o=t(n=e))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?i["string"==typeof e?"string":"hash"]:i.map}function Ft(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return Rt(e)?e:void 0}St.prototype.clear=function(){this.__data__=wt?wt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var r=this.__data__;if(wt){var e=r[t];return e===n?void 0:e}return rt.call(r,t)?r[t]:void 0},St.prototype.has=function(t){var r=this.__data__;return wt?void 0!==r[t]:rt.call(r,t)},St.prototype.set=function(t,r){return this.__data__[t]=wt&&void 0===r?n:r,this},It.prototype.clear=function(){this.__data__=[]},It.prototype.delete=function(t){var r=this.__data__,e=Ct(r,t);return!(e<0)&&(e==r.length-1?r.pop():st.call(r,e,1),!0)},It.prototype.get=function(t){var r=this.__data__,e=Ct(r,t);return e<0?void 0:r[e][1]},It.prototype.has=function(t){return Ct(this.__data__,t)>-1},It.prototype.set=function(t,r){var e=this.__data__,n=Ct(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},xt.prototype.clear=function(){this.__data__={hash:new St,map:new(gt||It),string:new St}},xt.prototype.delete=function(t){return $t(this,t).delete(t)},xt.prototype.get=function(t){return $t(this,t).get(t)},xt.prototype.has=function(t){return $t(this,t).has(t)},xt.prototype.set=function(t,r){return $t(this,t).set(t,r),this},Et.prototype.clear=function(){this.__data__=new It},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,r){var e=this.__data__;if(e instanceof It){var n=e.__data__;if(!gt||n.length<199)return n.push([t,r]),this;e=this.__data__=new xt(n)}return e.set(t,r),this};var Ht=lt?V(lt,Object):function(){return[]},Lt=function(t){return et.call(t)};function Kt(t,r){return!!(r=null==r?o:r)&&("number"==typeof t||C.test(t))&&t>-1&&t%1==0&&t<r}function Nt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||X)}function Ut(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Gt(t,r){return t===r||t!=t&&r!=r}(yt&&Lt(new yt(new ArrayBuffer(1)))!=j||gt&&Lt(new gt)!=l||dt&&Lt(dt.resolve())!=y||bt&&Lt(new bt)!=d||vt&&Lt(new vt)!=w)&&(Lt=function(t){var r=et.call(t),e=r==h?t.constructor:void 0,n=e?Ut(e):void 0;if(n)switch(n){case _t:return j;case jt:return l;case mt:return y;case Ot:return d;case Wt:return w}return r});var Vt=Array.isArray;function Jt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!qt(t)}var zt=pt||function(){return!1};function qt(t){var r=Qt(t)?et.call(t):"";return r==f||r==s}function Qt(r){var e=t(r);return!!r&&("object"==e||"function"==e)}function Xt(t){return Jt(t)?Pt(t):function(t){if(!Nt(t))return ht(t);var r=[];for(var e in Object(t))rt.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}r.exports=function(t){return Mt(t,!0,!0)}}));function u(t){return null!=t}function f(t){return"string"==typeof t}function s(r,e,n){if(0===arguments.length)throw new Error("str-indexes-of-plus/strIndexesOfPlus(): inputs missing!");if(!f(r))throw new TypeError("str-indexes-of-plus/strIndexesOfPlus(): first input argument must be a string! Currently it's: ".concat(t(r)));if(!f(e))throw new TypeError("str-indexes-of-plus/strIndexesOfPlus(): second input argument must be a string! Currently it's: ".concat(t(e)));if(arguments.length>=3&&!Number.isInteger(n)&&(!f(n)||!/^\d*$/.test(n)))throw new TypeError("str-indexes-of-plus/strIndexesOfPlus(): third input argument must be a natural number! Currently it's: ".concat(n));/^\d*$/.test(n)&&(n=Number(n));var o=Array.from(r),i=Array.from(e);if(0===o.length||0===i.length||u(n)&&n>=o.length)return[];u(n)||(n=0);for(var a,c=[],s=!1,l=n,p=o.length;l<p;l++)s&&(o[l]===i[l-a]?l-a+1===i.length&&c.push(a):(a=null,s=!1)),s||o[l]===i[0]&&(1===i.length?c.push(l):(s=!0,a=l));return c}var l=new Map;function p(t,r){r=n({caseSensitive:!1},r);var e=t+JSON.stringify(r);if(l.has(e))return l.get(e);var o="!"===t[0];o&&(t=t.slice(1)),t=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(t).replace(/\\\*/g,"[\\s\\S]*");var i=new RegExp("^".concat(t,"$"),r.caseSensitive?"":"i");return i.negated=o,l.set(e,i),i}var h=function(r,e,n){if(!Array.isArray(r)||!Array.isArray(e))throw new TypeError("Expected two arrays, got ".concat(t(r)," ").concat(t(e)));if(0===e.length)return r;var o="!"===e[0][0];e=e.map((function(t){return p(t,n)}));var a,c=[],u=i(r);try{for(u.s();!(a=u.n()).done;){var f,s=a.value,l=o,h=i(e);try{for(h.s();!(f=h.n()).done;){var y=f.value;y.test(s)&&(l=!y.negated)}}catch(t){h.e(t)}finally{h.f()}l&&c.push(s)}}catch(t){u.e(t)}finally{u.f()}return c};h.isMatch=function(t,r,e){var n=Array.isArray(t)?t:[t],o=Array.isArray(r)?r:[r];return n.some((function(t){return o.every((function(r){var n=p(r,e),o=n.test(t);return n.negated?!o:o}))}))};var y,g,d=Function.prototype,b=Object.prototype,v=d.toString,w=b.hasOwnProperty,_=v.call(Object),j=b.toString,m=(y=Object.getPrototypeOf,g=Object,function(t){return y(g(t))});var O=function(r){if(!function(r){return!!r&&"object"==t(r)}(r)||"[object Object]"!=j.call(r)||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(r))return!1;var e=m(r);if(null===e)return!0;var n=w.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&v.call(n)==_},W=Array.isArray;
/*!
   * is-string-int | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-string-int.js
  */function A(t){return"string"==typeof t}function T(t,r){if(0===arguments.length||0===Object.keys(t).length)return[];var e=c(t),n=[];return O(e)&&Object.keys(e).forEach((function(t){O(e[t])&&(e[t]=T(e[t],r)),W(e[t])&&(n=n.concat(e[t].map((function(e){return t+r.objectKeyAndValueJoinChar+e})))),A(e[t])&&n.push(t+r.objectKeyAndValueJoinChar+e[t])})),n}function S(t,r,e,n){if(0===arguments.length||0===t.length)return"";var o=c(t),i="";if(o.length>0)if(n)for(var a=0,u=o.length;a<u;a++)if(A(o[a])){var f=void 0;f="",r.mergeArraysWithLineBreaks&&a>0&&(!r.mergeWithoutTrailingBrIfLineContainsBr||"string"!=typeof o[a-1]||r.mergeWithoutTrailingBrIfLineContainsBr&&void 0!==o[a-1]&&!o[a-1].toLowerCase().includes("<br"))&&(f="<br".concat(r.xhtml?" /":"",">")),i+=f+(e?r.wrapHeadsWith:"")+o[a]+(e?r.wrapTailsWith:"")}else W(o[a])&&o[a].length>0&&o[a].every(A)&&function(){var t="";r.mergeArraysWithLineBreaks&&i.length>0&&(t="<br".concat(r.xhtml?" /":"",">")),i=o[a].reduce((function(n,o,i,a){var c="";return i!==a.length-1&&(c=" "),n+(0===i?t:"")+(e?r.wrapHeadsWith:"")+o+(e?r.wrapTailsWith:"")+c}),i)}();else i=o.reduce((function(t,n,o,i){var a="";r.mergeArraysWithLineBreaks&&o>0&&(a="<br".concat(r.xhtml?" /":"",">"));var c="";return o!==i.length-1&&(c=" "),t+(0===o?a:"")+(e?r.wrapHeadsWith:"")+n+(e?r.wrapTailsWith:"")+c}),i);return i}function I(t){return A(t)?t.length>0?[t]:[]:t}function x(t){return A(t)&&function(t,r){if(r=r||{},0===arguments.length)throw new TypeError("No arguments. (One argument required)");if("string"!=typeof t)throw new TypeError(t+" is not a string. Argument must be a string to be checked if it represents an integer.");var e,n=Number(t);if(r.parseLiteral){if(t.trim()!==t)return!1;e=n.toString()}else e=t;return"NaN"!==e&&Math.round(n).toString()===e}(t.trim())?parseInt(t.trim(),10):t}var E=Array.isArray;function P(t){return null!=t}function D(t){return"string"==typeof t}return function(r,e,o){if(0===arguments.length)throw new Error("object-flatten-referencing/ofr(): [THROW_ID_01] all inputs missing!");if(1===arguments.length)throw new Error("object-flatten-referencing/ofr(): [THROW_ID_02] reference object missing!");if(P(o)&&!O(o))throw new Error("object-flatten-referencing/ofr(): [THROW_ID_03] third input, options object must be a plain object. Currently it's: ".concat(t(o)));function i(r,e,o){var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],u=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],f=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",l=c(r),p=c(e),y={wrapHeadsWith:"%%_",wrapTailsWith:"_%%",dontWrapKeys:[],dontWrapPaths:[],xhtml:!0,preventDoubleWrapping:!0,preventWrappingIfContains:[],objectKeyAndValueJoinChar:".",wrapGlobalFlipSwitch:!0,ignore:[],whatToDoWhenReferenceIsMissing:0,mergeArraysWithLineBreaks:!0,mergeWithoutTrailingBrIfLineContainsBr:!0,enforceStrictKeyset:!0},g=n(n({},y),o);return g.dontWrapKeys=I(g.dontWrapKeys),g.preventWrappingIfContains=I(g.preventWrappingIfContains),g.dontWrapPaths=I(g.dontWrapPaths),g.ignore=I(g.ignore),g.whatToDoWhenReferenceIsMissing=x(g.whatToDoWhenReferenceIsMissing),g.wrapGlobalFlipSwitch||(a=!1),O(l)?Object.keys(l).forEach((function(r){var e=f+(0===f.length?r:".".concat(r));if(0===g.ignore.length||!g.ignore.includes(r))if(g.wrapGlobalFlipSwitch&&(a=!0,g.dontWrapKeys.length>0&&(a=a&&!g.dontWrapKeys.some((function(t){return h.isMatch(r,t,{caseSensitive:!0})}))),g.dontWrapPaths.length>0&&(a=a&&!g.dontWrapPaths.some((function(t){return t===e}))),g.preventWrappingIfContains.length>0&&"string"==typeof l[r]&&(a=a&&!g.preventWrappingIfContains.some((function(t){return l[r].includes(t)})))),P(p[r])||!P(p[r])&&2===g.whatToDoWhenReferenceIsMissing)if(E(l[r]))if(2===g.whatToDoWhenReferenceIsMissing||D(p[r]))l[r]=S(l[r],g,a,u);else{if(l[r].every((function(t){return"string"==typeof t||Array.isArray(t)}))){var o=!0;l[r].forEach((function(t){Array.isArray(t)&&!t.every(D)&&(o=!1)})),o&&(u=!1)}l[r]=i(l[r],p[r],g,a,u,e)}else O(l[r])?2===g.whatToDoWhenReferenceIsMissing||D(p[r])?l[r]=S(T(l[r],g),g,a,u):l[r]=i(l[r],p[r],a?g:n(n({},g),{},{wrapGlobalFlipSwitch:!1}),a,u,e):D(l[r])&&(l[r]=i(l[r],p[r],g,a,u,e));else if(t(l[r])!==t(p[r])&&1===g.whatToDoWhenReferenceIsMissing)throw new Error("object-flatten-referencing/ofr(): [THROW_ID_06] reference object does not have the key ".concat(r," and we need it. TIP: Turn off throwing via opts.whatToDoWhenReferenceIsMissing."))})):E(l)?E(p)?l.forEach((function(t,r){P(l[r])&&P(p[r])?l[r]=i(l[r],p[r],g,a,u,"".concat(f,"[").concat(r,"]")):l[r]=i(l[r],p[0],g,a,u,"".concat(f,"[").concat(r,"]"))})):D(p)&&(l=S(l,g,a,u)):D(l)&&l.length>0&&(g.wrapHeadsWith||g.wrapTailsWith)&&(g.preventDoubleWrapping&&(""!==g.wrapHeadsWith&&s(l,g.wrapHeadsWith.trim()).length||""!==g.wrapTailsWith&&s(l,g.wrapTailsWith.trim()).length)||(l=(a?g.wrapHeadsWith:"")+l+(a?g.wrapTailsWith:""))),l}return i(r,e,o)}}));
