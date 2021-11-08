/**
 * @name object-fill-missing-keys
 * @fileoverview Add missing keys into plain objects, according to a reference object
 * @version 9.0.5
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/object-fill-missing-keys/}
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).objectFillMissingKeys={})}(this,(function(t){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r={exports:{}};!function(t,r){var n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",a="[object Boolean]",c="[object Date]",u="[object Function]",s="[object GeneratorFunction]",f="[object Map]",l="[object Number]",p="[object Object]",y="[object Promise]",h="[object RegExp]",b="[object Set]",_="[object String]",g="[object Symbol]",d="[object WeakMap]",v="[object ArrayBuffer]",j="[object DataView]",O="[object Float32Array]",k="[object Float64Array]",w="[object Int8Array]",m="[object Int16Array]",A="[object Int32Array]",S="[object Uint8Array]",$="[object Uint8ClampedArray]",T="[object Uint16Array]",E="[object Uint32Array]",x=/\w*$/,P=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,M={};M[i]=M["[object Array]"]=M[v]=M[j]=M[a]=M[c]=M[O]=M[k]=M[w]=M[m]=M[A]=M[f]=M[l]=M[p]=M[h]=M[b]=M[_]=M[g]=M[S]=M[$]=M[T]=M[E]=!0,M["[object Error]"]=M[u]=M[d]=!1;var I="object"==typeof self&&self&&self.Object===Object&&self,N="object"==typeof e&&e&&e.Object===Object&&e||I||Function("return this")(),z=r&&!r.nodeType&&r,C=z&&t&&!t.nodeType&&t,K=C&&C.exports===z;function R(t,e){return t.set(e[0],e[1]),t}function B(t,e){return t.add(e),t}function D(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function W(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function U(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function H(t,e){return function(r){return t(e(r))}}function q(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var V,L=Array.prototype,J=Function.prototype,G=Object.prototype,Q=N["__core-js_shared__"],X=(V=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"",Y=J.toString,Z=G.hasOwnProperty,tt=G.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=K?N.Buffer:void 0,nt=N.Symbol,ot=N.Uint8Array,it=H(Object.getPrototypeOf,Object),at=Object.create,ct=G.propertyIsEnumerable,ut=L.splice,st=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=H(Object.keys,Object),pt=Ct(N,"DataView"),yt=Ct(N,"Map"),ht=Ct(N,"Promise"),bt=Ct(N,"Set"),_t=Ct(N,"WeakMap"),gt=Ct(Object,"create"),dt=Wt(pt),vt=Wt(yt),jt=Wt(ht),Ot=Wt(bt),kt=Wt(_t),wt=nt?nt.prototype:void 0,mt=wt?wt.valueOf:void 0;function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function $t(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){this.__data__=new St(t)}function Et(t,e){var r=Ht(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&qt(t)}(t)&&Z.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var a in t)!e&&!Z.call(t,a)||o&&("length"==a||Bt(a,n))||r.push(a);return r}function xt(t,e,r){var n=t[e];Z.call(t,e)&&Ut(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Pt(t,e){for(var r=t.length;r--;)if(Ut(t[r][0],e))return r;return-1}function Ft(t,e,r,n,o,y,d){var P;if(n&&(P=y?n(t,o,y,d):n(t)),void 0!==P)return P;if(!Jt(t))return t;var F=Ht(t);if(F){if(P=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,P)}else{var I=Rt(t),N=I==u||I==s;if(Vt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(I==p||I==i||N&&!y){if(W(t))return y?t:{};if(P=function(t){return"function"!=typeof t.constructor||Dt(t)?{}:(e=it(t),Jt(e)?at(e):{});var e}(N?{}:t),!e)return function(t,e){return Nt(t,Kt(t),e)}(t,function(t,e){return t&&Nt(e,Gt(e),t)}(P,t))}else{if(!M[I])return y?t:{};P=function(t,e,r,n){var o=t.constructor;switch(e){case v:return It(t);case a:case c:return new o(+t);case j:return function(t,e){var r=e?It(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case O:case k:case w:case m:case A:case S:case $:case T:case E:return function(t,e){var r=e?It(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case f:return function(t,e,r){return D(e?r(U(t),!0):U(t),R,new t.constructor)}(t,n,r);case l:case _:return new o(t);case h:return function(t){var e=new t.constructor(t.source,x.exec(t));return e.lastIndex=t.lastIndex,e}(t);case b:return function(t,e,r){return D(e?r(q(t),!0):q(t),B,new t.constructor)}(t,n,r);case g:return i=t,mt?Object(mt.call(i)):{}}var i}(t,I,Ft,e)}}d||(d=new Tt);var z=d.get(t);if(z)return z;if(d.set(t,P),!F)var C=r?function(t){return function(t,e,r){var n=e(t);return Ht(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Gt,Kt)}(t):Gt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(C||t,(function(o,i){C&&(o=t[i=o]),xt(P,i,Ft(o,e,r,n,i,t,d))})),P}function Mt(t){return!(!Jt(t)||(e=t,X&&X in e))&&(Lt(t)||W(t)?et:P).test(Wt(t));var e}function It(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Nt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;xt(r,a,void 0===c?t[a]:c)}return r}function zt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Ct(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Mt(r)?r:void 0}At.prototype.clear=function(){this.__data__=gt?gt(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var e=this.__data__;if(gt){var r=e[t];return r===n?void 0:r}return Z.call(e,t)?e[t]:void 0},At.prototype.has=function(t){var e=this.__data__;return gt?void 0!==e[t]:Z.call(e,t)},At.prototype.set=function(t,e){return this.__data__[t]=gt&&void 0===e?n:e,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var e=this.__data__,r=Pt(e,t);return!(r<0)&&(r==e.length-1?e.pop():ut.call(e,r,1),!0)},St.prototype.get=function(t){var e=this.__data__,r=Pt(e,t);return r<0?void 0:e[r][1]},St.prototype.has=function(t){return Pt(this.__data__,t)>-1},St.prototype.set=function(t,e){var r=this.__data__,n=Pt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},$t.prototype.clear=function(){this.__data__={hash:new At,map:new(yt||St),string:new At}},$t.prototype.delete=function(t){return zt(this,t).delete(t)},$t.prototype.get=function(t){return zt(this,t).get(t)},$t.prototype.has=function(t){return zt(this,t).has(t)},$t.prototype.set=function(t,e){return zt(this,t).set(t,e),this},Tt.prototype.clear=function(){this.__data__=new St},Tt.prototype.delete=function(t){return this.__data__.delete(t)},Tt.prototype.get=function(t){return this.__data__.get(t)},Tt.prototype.has=function(t){return this.__data__.has(t)},Tt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof St){var n=r.__data__;if(!yt||n.length<199)return n.push([t,e]),this;r=this.__data__=new $t(n)}return r.set(t,e),this};var Kt=st?H(st,Object):function(){return[]},Rt=function(t){return tt.call(t)};function Bt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<e}function Dt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||G)}function Wt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ut(t,e){return t===e||t!=t&&e!=e}(pt&&Rt(new pt(new ArrayBuffer(1)))!=j||yt&&Rt(new yt)!=f||ht&&Rt(ht.resolve())!=y||bt&&Rt(new bt)!=b||_t&&Rt(new _t)!=d)&&(Rt=function(t){var e=tt.call(t),r=e==p?t.constructor:void 0,n=r?Wt(r):void 0;if(n)switch(n){case dt:return j;case vt:return f;case jt:return y;case Ot:return b;case kt:return d}return e});var Ht=Array.isArray;function qt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Lt(t)}var Vt=ft||function(){return!1};function Lt(t){var e=Jt(t)?tt.call(t):"";return e==u||e==s}function Jt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Gt(t){return qt(t)?Et(t):function(t){if(!Dt(t))return lt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Ft(t,!0,!0)}}(r,r.exports);var n=r.exports,o=1/0,i=9007199254740991,a=17976931348623157e292,c=NaN,u="[object Arguments]",s="[object Function]",f="[object GeneratorFunction]",l="[object String]",p="[object Symbol]",y=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,_=/^0o[0-7]+$/i,g=/^(?:0|[1-9]\d*)$/,d=parseInt;function v(t){return t!=t}function j(t,e){return function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(e,(function(e){return t[e]}))}var O,k,w=Object.prototype,m=w.hasOwnProperty,A=w.toString,S=w.propertyIsEnumerable,$=(O=Object.keys,k=Object,function(t){return O(k(t))}),T=Math.max;function E(t,e){var r=F(t)||function(t){return function(t){return N(t)&&M(t)}(t)&&m.call(t,"callee")&&(!S.call(t,"callee")||A.call(t)==u)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var i in t)!e&&!m.call(t,i)||o&&("length"==i||P(i,n))||r.push(i);return r}function x(t){if((e=t)!==("function"==typeof(r=e&&e.constructor)&&r.prototype||w))return $(t);var e,r,n=[];for(var o in Object(t))m.call(t,o)&&"constructor"!=o&&n.push(o);return n}function P(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||g.test(t))&&t>-1&&t%1==0&&t<e}var F=Array.isArray;function M(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!function(t){var e=I(t)?A.call(t):"";return e==s||e==f}(t)}function I(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function N(t){return!!t&&"object"==typeof t}var z=function(t,e,r,n){var i;t=M(t)?t:(i=t)?j(i,function(t){return M(t)?E(t):x(t)}(i)):[],r=r&&!n?function(t){var e=function(t){if(!t)return 0===t?t:0;if((t=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||N(t)&&A.call(t)==p}(t))return c;if(I(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=I(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(y,"");var r=b.test(t);return r||_.test(t)?d(t.slice(2),r?2:8):h.test(t)?c:+t}(t))===o||t===-1/0){return(t<0?-1:1)*a}return t==t?t:0}(t),r=e%1;return e==e?r?e-r:e:0}(r):0;var u=t.length;return r<0&&(r=T(u+r,0)),function(t){return"string"==typeof t||!F(t)&&N(t)&&A.call(t)==l}(t)?r<=u&&t.indexOf(e,r)>-1:!!u&&function(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,v,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}(t,e,r)>-1},C="__lodash_hash_undefined__",K="[object Function]",R="[object GeneratorFunction]",B=/^\[object .+?Constructor\]$/,D="object"==typeof self&&self&&self.Object===Object&&self,W="object"==typeof e&&e&&e.Object===Object&&e||D||Function("return this")();function U(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,q,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function H(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function q(t){return t!=t}function V(t,e){return t.has(e)}function L(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var J,G=Array.prototype,Q=Function.prototype,X=Object.prototype,Y=W["__core-js_shared__"],Z=(J=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+J:"",tt=Q.toString,et=X.hasOwnProperty,rt=X.toString,nt=RegExp("^"+tt.call(et).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=G.splice,it=_t(W,"Map"),at=_t(W,"Set"),ct=_t(Object,"create");function ut(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function st(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ft(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function lt(t){var e=-1,r=t?t.length:0;for(this.__data__=new ft;++e<r;)this.add(t[e])}function pt(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function yt(t){if(!gt(t)||function(t){return!!Z&&Z in t}(t))return!1;var e=function(t){var e=gt(t)?rt.call(t):"";return e==K||e==R}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?nt:B;return e.test(function(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}ut.prototype.clear=function(){this.__data__=ct?ct(null):{}},ut.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ut.prototype.get=function(t){var e=this.__data__;if(ct){var r=e[t];return r===C?void 0:r}return et.call(e,t)?e[t]:void 0},ut.prototype.has=function(t){var e=this.__data__;return ct?void 0!==e[t]:et.call(e,t)},ut.prototype.set=function(t,e){return this.__data__[t]=ct&&void 0===e?C:e,this},st.prototype.clear=function(){this.__data__=[]},st.prototype.delete=function(t){var e=this.__data__,r=pt(e,t);return!(r<0)&&(r==e.length-1?e.pop():ot.call(e,r,1),!0)},st.prototype.get=function(t){var e=this.__data__,r=pt(e,t);return r<0?void 0:e[r][1]},st.prototype.has=function(t){return pt(this.__data__,t)>-1},st.prototype.set=function(t,e){var r=this.__data__,n=pt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},ft.prototype.clear=function(){this.__data__={hash:new ut,map:new(it||st),string:new ut}},ft.prototype.delete=function(t){return bt(this,t).delete(t)},ft.prototype.get=function(t){return bt(this,t).get(t)},ft.prototype.has=function(t){return bt(this,t).has(t)},ft.prototype.set=function(t,e){return bt(this,t).set(t,e),this},lt.prototype.add=lt.prototype.push=function(t){return this.__data__.set(t,C),this},lt.prototype.has=function(t){return this.__data__.has(t)};var ht=at&&1/L(new at([,-0]))[1]==1/0?function(t){return new at(t)}:function(){};function bt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function _t(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return yt(r)?r:void 0}function gt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}var dt=function(t){return t&&t.length?function(t,e,r){var n=-1,o=U,i=t.length,a=!0,c=[],u=c;if(r)a=!1,o=H;else if(i>=200){var s=e?null:ht(t);if(s)return L(s);a=!1,o=V,u=new lt}else u=e?[]:c;t:for(;++n<i;){var f=t[n],l=e?e(f):f;if(f=r||0!==f?f:0,a&&l==l){for(var p=u.length;p--;)if(u[p]===l)continue t;e&&u.push(l),c.push(f)}else o(u,l,r)||(u!==c&&u.push(l),c.push(f))}return c}(t):[]};var vt=Object.prototype,jt=Function.prototype.toString,Ot=vt.hasOwnProperty,kt=jt.call(Object),wt=vt.toString,mt=function(t,e){return function(r){return t(e(r))}}(Object.getPrototypeOf,Object);var At=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=wt.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=mt(t);if(null===e)return!0;var r=Ot.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&jt.call(r)==kt},St={exports:{}};!function(t,r){var n=r&&!r.nodeType&&r,o=n&&t&&!t.nodeType&&t,i=o&&o.exports===n&&("object"==typeof e&&e&&e.Object===Object&&e).process,a=function(){try{return i&&i.binding("util")}catch(t){}}(),c=a&&a.isDate;var u=Object.prototype.toString;var s=c?function(t){return function(e){return t(e)}}(c):function(t){return function(t){return!!t&&"object"==typeof t}(t)&&"[object Date]"==u.call(t)};t.exports=s}(St,St.exports);var $t=St.exports;const Tt=new Map,Et=(t,e)=>{if(!Array.isArray(t))switch(typeof t){case"string":t=[t];break;case"undefined":t=[];break;default:throw new TypeError(`Expected '${e}' to be a string or an array, but got a type of '${typeof t}'`)}return t.filter((t=>{if("string"!=typeof t){if(void 0===t)return!1;throw new TypeError(`Expected '${e}' to be an array of strings, but found a type of '${typeof t}' in the array`)}return!0}))},xt=(t,e)=>{e={caseSensitive:!1,...e};const r=t+JSON.stringify(e);if(Tt.has(r))return Tt.get(r);const n="!"===t[0];n&&(t=t.slice(1)),t=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(t).replace(/\\\*/g,"[\\s\\S]*");const o=new RegExp(`^${t}$`,e.caseSensitive?"":"i");return o.negated=n,Tt.set(r,o),o};function Pt(t,e,r){return((t,e,r,n)=>{if(t=Et(t,"inputs"),0===(e=Et(e,"patterns")).length)return[];e=e.map((t=>xt(t,r)));const{allPatterns:o}=r||{},i=[];for(const r of t){let t;const a=[...e].fill(!1);for(const[n,o]of e.entries())if(o.test(r)&&(a[n]=!0,t=!o.negated,!t))break;if(!(!1===t||void 0===t&&e.some((t=>!t.negated))||o&&a.some(((t,r)=>!t&&!e[r].negated)))&&(i.push(r),n))break}return i})(t,e,r,!0).length>0}
/**
 * @name util-nonempty
 * @fileoverview Is the input (plain object, array, string or whatever) not empty?
 * @version 4.0.5
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/util-nonempty/}
 */function Ft(t){return null!=t&&(Array.isArray(t)||"string"==typeof t?!!t.length:At(t)?!!Object.keys(t).length:"number"==typeof t)}
/**
 * @name object-merge-advanced
 * @fileoverview Recursively, deeply merge of anything (objects, arrays, strings or nested thereof), which weighs contents by type hierarchy to ensure the maximum content is retained
 * @version 13.0.5
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/object-merge-advanced/}
 */const Mt={arrayVsArrayAllMustBeFound:"any",caseSensitive:!0};function It(t,e,r){if(!t.length||!e.length)return!1;const n={...Mt,...r},o="string"==typeof t?[t]:Array.from(t);return"string"==typeof e?o.some((t=>Pt(t,e,{caseSensitive:n.caseSensitive}))):"any"===n.arrayVsArrayAllMustBeFound?e.some((t=>o.some((e=>Pt(e,t,{caseSensitive:n.caseSensitive}))))):e.every((t=>o.some((e=>Pt(e,t,{caseSensitive:n.caseSensitive})))))}function Nt(t){return"string"==typeof t}function zt(t){return"boolean"==typeof t}const Ct=Array.isArray;function Kt(t){return!!t&&t.some((t=>"string"==typeof t))}function Rt(t,e){return 0===Object.keys(t).length||0===Object.keys(e).length||Object.keys(t).every((t=>Object.keys(e).includes(t)))||Object.keys(e).every((e=>Object.keys(t).includes(e)))}function Bt(t){return null===t?"null":$t(t)?"date":At(t)?"object":Ct(t)?"array":typeof t}const Dt={cb:null,mergeObjectsOnlyWhenKeysetMatches:!0,ignoreKeys:[],hardMergeKeys:[],hardArrayConcatKeys:[],mergeArraysContainingStringsToBeEmpty:!1,oneToManyArrayObjectMerge:!1,hardMergeEverything:!1,hardArrayConcat:!1,ignoreEverything:!1,concatInsteadOfMerging:!0,dedupeStringsInArrayValues:!1,mergeBoolsUsingOrNotAnd:!0,useNullAsExplicitFalse:!1};function Wt(t,e,r,o){const i={...Dt,...o};let a;if("string"==typeof i.ignoreKeys&&(i.ignoreKeys=[i.ignoreKeys]),"string"==typeof i.hardMergeKeys&&(i.hardMergeKeys=[i.hardMergeKeys]),i.hardMergeKeys.includes("*")&&(i.hardMergeEverything=!0),i.ignoreKeys.includes("*")&&(i.ignoreEverything=!0),i.useNullAsExplicitFalse&&(null===e||null===r))return"function"==typeof i.cb?i.cb(e,r,null,{path:t.path,key:t.key,type:t.type}):null;let c=Ct(e)||At(e)?n(e):e;const u=Ct(r)||At(r)?n(r):r;let s;i.ignoreEverything?s=c:i.hardMergeEverything&&(s=u);const f=i.hardMergeEverything||i.ignoreEverything;if(!Ct(c)){if(At(c)){if(Ft(c)){if(Ct(u)){if(Ft(u)){const o=f?s:u;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:a,key:t.key,type:t.type}):o}const o=f?s:c;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:a,key:t.key,type:t.type}):o}if(At(u)){Object.keys(u).forEach((e=>{a=t.path&&t.path.length?`${t.path}.${e}`:`${e}`,c[e]=c.hasOwnProperty(e)?It(e,i.ignoreKeys)?Wt({path:a,key:e,type:[Bt(c),Bt(u)]},c[e],u[e],{...i,ignoreEverything:!0}):It(e,i.hardMergeKeys)?Wt({path:a,key:e,type:[Bt(c),Bt(u)]},c[e],u[e],{...i,hardMergeEverything:!0}):It(e,i.hardArrayConcatKeys)?Wt({path:a,key:e,type:[Bt(c),Bt(u)]},c[e],u[e],{...i,hardArrayConcat:!0}):Wt({path:a,key:e,type:[Bt(c[e]),Bt(u[e])]},c[e],u[e],i):u[e]}));const o=f?s:c;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:t.path,key:t.key,type:t.type}):c}const o=f?s:c;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:t.path,key:t.key,type:t.type}):o}if(Ct(u)||At(u)||Ft(u)){const o=f?s:u;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:t.path,key:t.key,type:t.type}):o}const o=f?s:c;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:t.path,key:t.key,type:t.type}):o}if($t(c)){if(isFinite(c)){if($t(u)){if(isFinite(u)){const o=f?s:c>u?c:u;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:t.path,key:t.key,type:t.type}):o}const o=f?s:c;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:t.path,key:t.key,type:t.type}):o}const o=f?s:u||c;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:t.path,key:t.key,type:t.type}):o}if($t(u)){const o=f?s:u;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:t.path,key:t.key,type:t.type}):o}const o=f?s:u;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:t.path,key:t.key,type:t.type}):o}if(Nt(c)){if(Ft(c)){if((Ct(u)||At(u)||Nt(u))&&Ft(u)){const o=f?s:u;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:t.path,key:t.key,type:t.type}):o}const o=f?s:c;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:t.path,key:t.key,type:t.type}):o}if(null!=u&&!zt(u)){const o=f?s:u;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:t.path,key:t.key,type:t.type}):o}const o=f?s:c;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:t.path,key:t.key,type:t.type}):o}if("number"==typeof c){if(Ft(u)){const o=f?s:u;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:t.path,key:t.key,type:t.type}):o}const o=f?s:c;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:t.path,key:t.key,type:t.type}):o}if(zt(c)){if(zt(u)){if(i.mergeBoolsUsingOrNotAnd){const o=f?s:c||u;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:t.path,key:t.key,type:t.type}):o}const o=f?s:c&&u;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:t.path,key:t.key,type:t.type}):o}if(null!=u){const o=f?s:u;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:t.path,key:t.key,type:t.type}):o}const o=f?s:c;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:t.path,key:t.key,type:t.type}):o}if(null===c){if(null!=u){const o=f?s:u;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:t.path,key:t.key,type:t.type}):o}const o=f?s:c;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:t.path,key:t.key,type:t.type}):o}{const o=f?s:u;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:t.path,key:t.key,type:t.type}):o}}if(!Ft(c)){if(Ft(u)){const o=f?s:u;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:a,key:t.key,type:t.type}):o}const o=f?s:c;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:a,key:t.key,type:t.type}):o}if(!Ct(u)||!Ft(u)){const o=f?s:c;return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:a,key:t.key,type:t.type}):o}{if(i.mergeArraysContainingStringsToBeEmpty&&(Kt(c)||Kt(u))){const o=f?s:[];return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:a,key:t.key,type:t.type}):o}if(i.hardArrayConcat){const o=f?s:c.concat(u);return"function"==typeof i.cb?i.cb(n(e),n(r),o,{path:a,key:t.key,type:t.type}):o}let o=[];for(let e=0,r=Math.max(c.length,u.length);e<r;e++)a=t.path&&t.path.length?`${t.path}.${e}`:`${e}`,At(c[e])&&At(u[e])&&(i.mergeObjectsOnlyWhenKeysetMatches&&Rt(c[e],u[e])||!i.mergeObjectsOnlyWhenKeysetMatches)?o.push(Wt({path:a,key:t.key,type:[Bt(c),Bt(u)]},c[e],u[e],i)):!i.oneToManyArrayObjectMerge||1!==c.length&&1!==u.length?i.concatInsteadOfMerging?(e<c.length&&o.push(c[e]),e<u.length&&o.push(u[e])):(e<c.length&&o.push(c[e]),e<u.length&&!z(c,u[e])&&o.push(u[e])):o.push(1===c.length?Wt({path:a,key:t.key,type:[Bt(c),Bt(u)]},c[0],u[e],i):Wt({path:a,key:t.key,type:[Bt(c),Bt(u)]},c[e],u[0],i));i.dedupeStringsInArrayValues&&o.every((t=>Nt(t)))&&(o=dt(o).sort()),c=n(o)}const l=f?s:c;return"function"==typeof i.cb?i.cb(n(e),n(r),l,{path:t.path,key:t.key,type:t.type}):l}
/**
 * @name arrayiffy-if-string
 * @fileoverview Put non-empty strings into arrays, turn empty-ones into empty arrays. Bypass everything else.
 * @version 4.0.5
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/arrayiffy-if-string/}
 */
function Ut(t){return"string"==typeof t?t.length?[t]:[]:t}var Ht={exports:{}};!function(t,r){var n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",a="[object Array]",c="[object Boolean]",u="[object Date]",s="[object Error]",f="[object Function]",l="[object Map]",p="[object Number]",y="[object Object]",h="[object Promise]",b="[object RegExp]",_="[object Set]",g="[object String]",d="[object Symbol]",v="[object WeakMap]",j="[object ArrayBuffer]",O="[object DataView]",k=/^\[object .+?Constructor\]$/,w=/^(?:0|[1-9]\d*)$/,m={};m["[object Float32Array]"]=m["[object Float64Array]"]=m["[object Int8Array]"]=m["[object Int16Array]"]=m["[object Int32Array]"]=m["[object Uint8Array]"]=m["[object Uint8ClampedArray]"]=m["[object Uint16Array]"]=m["[object Uint32Array]"]=!0,m[i]=m[a]=m[j]=m[c]=m[O]=m[u]=m[s]=m[f]=m[l]=m[p]=m[y]=m[b]=m[_]=m[g]=m[v]=!1;var A="object"==typeof e&&e&&e.Object===Object&&e,S="object"==typeof self&&self&&self.Object===Object&&self,$=A||S||Function("return this")(),T=r&&!r.nodeType&&r,E=T&&t&&!t.nodeType&&t,x=E&&E.exports===T,P=x&&A.process,F=function(){try{return P&&P.binding&&P.binding("util")}catch(t){}}(),M=F&&F.isTypedArray;function I(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}function N(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function z(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var C=Array.prototype,K=Object.prototype,R=$["__core-js_shared__"],B=Function.prototype.toString,D=K.hasOwnProperty,W=function(){var t=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),U=K.toString,H=RegExp("^"+B.call(D).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),q=x?$.Buffer:void 0,V=$.Symbol,L=$.Uint8Array,J=K.propertyIsEnumerable,G=C.splice,Q=V?V.toStringTag:void 0,X=Object.getOwnPropertySymbols,Y=q?q.isBuffer:void 0,Z=function(t,e){return function(r){return t(e(r))}}(Object.keys,Object),tt=Tt($,"DataView"),et=Tt($,"Map"),rt=Tt($,"Promise"),nt=Tt($,"Set"),ot=Tt($,"WeakMap"),it=Tt(Object,"create"),at=Ft(tt),ct=Ft(et),ut=Ft(rt),st=Ft(nt),ft=Ft(ot),lt=V?V.prototype:void 0,pt=lt?lt.valueOf:void 0;function yt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ht(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function bt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function _t(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new bt;++e<r;)this.add(t[e])}function gt(t){var e=this.__data__=new ht(t);this.size=e.size}function dt(t,e){var r=Nt(t),n=!r&&It(t),o=!r&&!n&&zt(t),i=!r&&!n&&!o&&Dt(t),a=r||n||o||i,c=a?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],u=c.length;for(var s in t)!e&&!D.call(t,s)||a&&("length"==s||o&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Pt(s,u))||c.push(s);return c}function vt(t,e){for(var r=t.length;r--;)if(Mt(t[r][0],e))return r;return-1}function jt(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Q&&Q in Object(t)?function(t){var e=D.call(t,Q),r=t[Q];try{t[Q]=void 0;var n=!0}catch(t){}var o=U.call(t);n&&(e?t[Q]=r:delete t[Q]);return o}(t):function(t){return U.call(t)}(t)}function Ot(t){return Bt(t)&&jt(t)==i}function kt(t,e,r,n,o){return t===e||(null==t||null==e||!Bt(t)&&!Bt(e)?t!=t&&e!=e:function(t,e,r,n,o,f){var h=Nt(t),v=Nt(e),k=h?a:xt(t),w=v?a:xt(e),m=(k=k==i?y:k)==y,A=(w=w==i?y:w)==y,S=k==w;if(S&&zt(t)){if(!zt(e))return!1;h=!0,m=!1}if(S&&!m)return f||(f=new gt),h||Dt(t)?At(t,e,r,n,o,f):function(t,e,r,n,o,i,a){switch(r){case O:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case j:return!(t.byteLength!=e.byteLength||!i(new L(t),new L(e)));case c:case u:case p:return Mt(+t,+e);case s:return t.name==e.name&&t.message==e.message;case b:case g:return t==e+"";case l:var f=N;case _:if(f||(f=z),t.size!=e.size&&!(1&n))return!1;var y=a.get(t);if(y)return y==e;n|=2,a.set(t,e);var h=At(f(t),f(e),n,o,i,a);return a.delete(t),h;case d:if(pt)return pt.call(t)==pt.call(e)}return!1}(t,e,k,r,n,o,f);if(!(1&r)){var $=m&&D.call(t,"__wrapped__"),T=A&&D.call(e,"__wrapped__");if($||T){var E=$?t.value():t,x=T?e.value():e;return f||(f=new gt),o(E,x,r,n,f)}}if(!S)return!1;return f||(f=new gt),function(t,e,r,n,o,i){var a=1&r,c=St(t),u=c.length,s=St(e);if(u!=s.length&&!a)return!1;var f=u;for(;f--;){var l=c[f];if(!(a?l in e:D.call(e,l)))return!1}var p=i.get(t);if(p&&i.get(e))return p==e;var y=!0;i.set(t,e),i.set(e,t);var h=a;for(;++f<u;){var b=t[l=c[f]],_=e[l];if(n)var g=a?n(_,b,l,e,t,i):n(b,_,l,t,e,i);if(!(void 0===g?b===_||o(b,_,r,n,i):g)){y=!1;break}h||(h="constructor"==l)}if(y&&!h){var d=t.constructor,v=e.constructor;d==v||!("constructor"in t)||!("constructor"in e)||"function"==typeof d&&d instanceof d&&"function"==typeof v&&v instanceof v||(y=!1)}return i.delete(t),i.delete(e),y}(t,e,r,n,o,f)}(t,e,r,n,kt,o))}function wt(t){return!(!Rt(t)||function(t){return!!W&&W in t}(t))&&(Ct(t)?H:k).test(Ft(t))}function mt(t){if((e=t)!==("function"==typeof(r=e&&e.constructor)&&r.prototype||K))return Z(t);var e,r,n=[];for(var o in Object(t))D.call(t,o)&&"constructor"!=o&&n.push(o);return n}function At(t,e,r,n,o,i){var a=1&r,c=t.length,u=e.length;if(c!=u&&!(a&&u>c))return!1;var s=i.get(t);if(s&&i.get(e))return s==e;var f=-1,l=!0,p=2&r?new _t:void 0;for(i.set(t,e),i.set(e,t);++f<c;){var y=t[f],h=e[f];if(n)var b=a?n(h,y,f,e,t,i):n(y,h,f,t,e,i);if(void 0!==b){if(b)continue;l=!1;break}if(p){if(!I(e,(function(t,e){if(!p.has(e)&&(y===t||o(y,t,r,n,i)))return p.push(e)}))){l=!1;break}}else if(y!==h&&!o(y,h,r,n,i)){l=!1;break}}return i.delete(t),i.delete(e),l}function St(t){return function(t,e,r){var n=e(t);return Nt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Wt,Et)}function $t(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Tt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return wt(r)?r:void 0}yt.prototype.clear=function(){this.__data__=it?it(null):{},this.size=0},yt.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},yt.prototype.get=function(t){var e=this.__data__;if(it){var r=e[t];return r===n?void 0:r}return D.call(e,t)?e[t]:void 0},yt.prototype.has=function(t){var e=this.__data__;return it?void 0!==e[t]:D.call(e,t)},yt.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=it&&void 0===e?n:e,this},ht.prototype.clear=function(){this.__data__=[],this.size=0},ht.prototype.delete=function(t){var e=this.__data__,r=vt(e,t);return!(r<0)&&(r==e.length-1?e.pop():G.call(e,r,1),--this.size,!0)},ht.prototype.get=function(t){var e=this.__data__,r=vt(e,t);return r<0?void 0:e[r][1]},ht.prototype.has=function(t){return vt(this.__data__,t)>-1},ht.prototype.set=function(t,e){var r=this.__data__,n=vt(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this},bt.prototype.clear=function(){this.size=0,this.__data__={hash:new yt,map:new(et||ht),string:new yt}},bt.prototype.delete=function(t){var e=$t(this,t).delete(t);return this.size-=e?1:0,e},bt.prototype.get=function(t){return $t(this,t).get(t)},bt.prototype.has=function(t){return $t(this,t).has(t)},bt.prototype.set=function(t,e){var r=$t(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this},_t.prototype.add=_t.prototype.push=function(t){return this.__data__.set(t,n),this},_t.prototype.has=function(t){return this.__data__.has(t)},gt.prototype.clear=function(){this.__data__=new ht,this.size=0},gt.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},gt.prototype.get=function(t){return this.__data__.get(t)},gt.prototype.has=function(t){return this.__data__.has(t)},gt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof ht){var n=r.__data__;if(!et||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new bt(n)}return r.set(t,e),this.size=r.size,this};var Et=X?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var a=t[r];e(a,r,t)&&(i[o++]=a)}return i}(X(t),(function(e){return J.call(t,e)})))}:function(){return[]},xt=jt;function Pt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||w.test(t))&&t>-1&&t%1==0&&t<e}function Ft(t){if(null!=t){try{return B.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Mt(t,e){return t===e||t!=t&&e!=e}(tt&&xt(new tt(new ArrayBuffer(1)))!=O||et&&xt(new et)!=l||rt&&xt(rt.resolve())!=h||nt&&xt(new nt)!=_||ot&&xt(new ot)!=v)&&(xt=function(t){var e=jt(t),r=e==y?t.constructor:void 0,n=r?Ft(r):"";if(n)switch(n){case at:return O;case ct:return l;case ut:return h;case st:return _;case ft:return v}return e});var It=Ot(function(){return arguments}())?Ot:function(t){return Bt(t)&&D.call(t,"callee")&&!J.call(t,"callee")},Nt=Array.isArray;var zt=Y||function(){return!1};function Ct(t){if(!Rt(t))return!1;var e=jt(t);return e==f||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function Kt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}function Rt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Bt(t){return null!=t&&"object"==typeof t}var Dt=M?function(t){return function(e){return t(e)}}(M):function(t){return Bt(t)&&Kt(t.length)&&!!m[jt(t)]};function Wt(t){return null!=(e=t)&&Kt(e.length)&&!Ct(e)?dt(t):mt(t);var e}t.exports=function(t,e){return kt(t,e)}}(Ht,Ht.exports);var qt=Ht.exports;
/**
 * @name object-all-values-equal-to
 * @fileoverview Does the AST/nested-plain-object/array/whatever contain only one kind of value?
 * @version 3.0.5
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/object-all-values-equal-to/}
 */function Vt(t,e,r){if(Array.isArray(t)){if(0===t.length)return!0;if(r.arraysMustNotContainPlaceholders&&t.length>0&&t.some((t=>qt(t,e))))return!1;for(let n=t.length;n--;)if(!Vt(t[n],e,r))return!1;return!0}if(At(t)){const n=Object.keys(t);if(0===n.length)return!0;for(let o=n.length;o--;)if(!Vt(t[n[o]],e,r))return!1;return!0}return qt(t,e)}function Lt(t,e,r){if(void 0===t)throw new Error("object-all-values-equal-to: [THROW_ID_01] The first input is undefined! Please provide the first argument.");if(void 0===e)throw new Error("object-all-values-equal-to: [THROW_ID_02] The second input is undefined! Please provide the second argument.");if(r&&!At(r))throw new Error(`object-all-values-equal-to: [THROW_ID_03] The third argument, options object, was given not as a plain object but as a ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`);return Vt(t,e,{arraysMustNotContainPlaceholders:!0,...r})}const Jt={placeholder:!1,doNotFillThesePathsIfTheyContainPlaceholders:[],useNullAsExplicitFalse:!0};function Gt(t){return At(t)?"plain object":Array.isArray(t)?"array":typeof t}function Qt(t){return"string"==typeof t}function Xt(t){return null!=t}function Yt(t,e,r,o=""){const i=n(t);if(Xt(i)||!(o.length&&r.doNotFillThesePathsIfTheyContainPlaceholders.includes(o)&&Lt(i,r.placeholder)))if(At(e)&&At(i))Object.keys(e).forEach((t=>{const n=`${o?`${o}.`:""}${t}`;r.doNotFillThesePathsIfTheyContainPlaceholders.includes(n)&&(Xt(i[t])?Lt(i[t],r.placeholder)&&(i[t]=r.placeholder):i[t]=r.placeholder),Xt(i[t])&&r.doNotFillThesePathsIfTheyContainPlaceholders.includes(n)&&Lt(i[t],r.placeholder)||(i[t]=Yt(i[t],e[t],r,n))}));else{if(!Array.isArray(e)||!Array.isArray(i))return function(t,e,r){if(!arguments.length)throw new TypeError("object-merge-advanced/mergeAdvanced(): [THROW_ID_01] Both inputs are missing");return Wt({key:null,path:"",type:[Bt(t),Bt(e)]},t,e,r)}(e,i,{useNullAsExplicitFalse:r.useNullAsExplicitFalse});if(0===i.length)return e;if(e.length>0)for(let t=i.length;t--;){const n=(o?`${o}.`:"")+"0";(At(e[0])||Array.isArray(e[0]))&&(i[t]=Yt(i[t],e[0],r,n))}}return i}t.fillMissing=function(t,e,r){if(0===arguments.length)throw new Error("object-fill-missing-keys: [THROW_ID_01] All arguments are missing!");if(!At(t))throw new Error(`object-fill-missing-keys: [THROW_ID_02] First argument, input object must be a plain object. Currently it's type is "${Gt(t)}" and it's equal to: ${JSON.stringify(t,null,4)}`);if(!At(e))throw new Error(`object-fill-missing-keys: [THROW_ID_03] Second argument, schema object, must be a plain object. Currently it's type is "${Gt(e)}" and it's equal to: ${JSON.stringify(e,null,4)}`);if(r&&!At(r))throw new Error(`object-fill-missing-keys: [THROW_ID_04] Third argument, schema object, must be a plain object. Currently it's type is "${Gt(r)}" and it's equal to: ${JSON.stringify(r,null,4)}`);const o={...Jt,...r||{}};o.doNotFillThesePathsIfTheyContainPlaceholders=Ut(o.doNotFillThesePathsIfTheyContainPlaceholders);let i=null,a=null;if(o.doNotFillThesePathsIfTheyContainPlaceholders.length>0&&!o.doNotFillThesePathsIfTheyContainPlaceholders.every(((t,e)=>!!Qt(t)||(i=t,a=e,!1))))throw new Error(`object-fill-missing-keys: [THROW_ID_06] opts.doNotFillThesePathsIfTheyContainPlaceholders element with an index number "${a}" is not a string! It's ${Gt(i)}, equal to:\n${JSON.stringify(i,null,4)}`);return Yt(n(t),n(e),o)},t.version="9.0.5",Object.defineProperty(t,"__esModule",{value:!0})}));
