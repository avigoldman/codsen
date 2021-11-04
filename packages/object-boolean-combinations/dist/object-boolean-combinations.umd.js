/**
 * @name object-boolean-combinations
 * @fileoverview Consumes a defaults object with booleans, generates all possible variations of it
 * @version 5.0.4
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/object-boolean-combinations/}
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).objectBooleanCombinations={})}(this,(function(t){"use strict";var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n="__lodash_hash_undefined__",e=9007199254740991,o=/^\[object .+?Constructor\]$/,u="object"==typeof self&&self&&self.Object===Object&&self,c="object"==typeof r&&r&&r.Object===Object&&r||u||Function("return this")();function a(t,r,n){switch(n.length){case 0:return t.call(r);case 1:return t.call(r,n[0]);case 2:return t.call(r,n[0],n[1]);case 3:return t.call(r,n[0],n[1],n[2])}return t.apply(r,n)}function i(t,r){return!!(t?t.length:0)&&function(t,r,n){if(r!=r)return function(t,r,n,e){var o=t.length,u=n+(e?1:-1);for(;e?u--:++u<o;)if(r(t[u],u,t))return u;return-1}(t,l,n);var e=n-1,o=t.length;for(;++e<o;)if(t[e]===r)return e;return-1}(t,r,0)>-1}function f(t,r,n){for(var e=-1,o=t?t.length:0;++e<o;)if(n(r,t[e]))return!0;return!1}function s(t,r){for(var n=-1,e=t?t.length:0,o=Array(e);++n<e;)o[n]=r(t[n],n,t);return o}function l(t){return t!=t}function h(t){return function(r){return t(r)}}function p(t,r){return t.has(r)}var _,y=Array.prototype,v=Function.prototype,d=Object.prototype,b=c["__core-js_shared__"],g=(_=/[^.]+$/.exec(b&&b.keys&&b.keys.IE_PROTO||""))?"Symbol(src)_1."+_:"",j=v.toString,O=d.hasOwnProperty,w=d.toString,m=RegExp("^"+j.call(O).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),A=y.splice,x=Math.max,S=Math.min,E=D(c,"Map"),$=D(Object,"create");function k(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function P(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function F(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function I(t){var r=-1,n=t?t.length:0;for(this.__data__=new F;++r<n;)this.add(t[r])}function T(t,r){for(var n,e,o=t.length;o--;)if((n=t[o][0])===(e=r)||n!=n&&e!=e)return o;return-1}function M(t){if(!z(t)||(r=t,g&&g in r))return!1;var r,n=H(t)||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t)?m:o;return n.test(function(t){if(null!=t){try{return j.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function R(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=e}(t.length)&&!H(t)}(t)}(t)?t:[]}function B(t,r){var n,e,o=t.__data__;return("string"==(e=typeof(n=r))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n)?o["string"==typeof r?"string":"hash"]:o.map}function D(t,r){var n=function(t,r){return null==t?void 0:t[r]}(t,r);return M(n)?n:void 0}k.prototype.clear=function(){this.__data__=$?$(null):{}},k.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},k.prototype.get=function(t){var r=this.__data__;if($){var e=r[t];return e===n?void 0:e}return O.call(r,t)?r[t]:void 0},k.prototype.has=function(t){var r=this.__data__;return $?void 0!==r[t]:O.call(r,t)},k.prototype.set=function(t,r){return this.__data__[t]=$&&void 0===r?n:r,this},P.prototype.clear=function(){this.__data__=[]},P.prototype.delete=function(t){var r=this.__data__,n=T(r,t);return!(n<0)&&(n==r.length-1?r.pop():A.call(r,n,1),!0)},P.prototype.get=function(t){var r=this.__data__,n=T(r,t);return n<0?void 0:r[n][1]},P.prototype.has=function(t){return T(this.__data__,t)>-1},P.prototype.set=function(t,r){var n=this.__data__,e=T(n,t);return e<0?n.push([t,r]):n[e][1]=r,this},F.prototype.clear=function(){this.__data__={hash:new k,map:new(E||P),string:new k}},F.prototype.delete=function(t){return B(this,t).delete(t)},F.prototype.get=function(t){return B(this,t).get(t)},F.prototype.has=function(t){return B(this,t).has(t)},F.prototype.set=function(t,r){return B(this,t).set(t,r),this},I.prototype.add=I.prototype.push=function(t){return this.__data__.set(t,n),this},I.prototype.has=function(t){return this.__data__.has(t)};var U,W,C=(U=function(t){var r=s(t,R);return r.length&&r[0]===t[0]?function(t,r,n){for(var e=n?f:i,o=t[0].length,u=t.length,c=u,a=Array(u),l=1/0,_=[];c--;){var y=t[c];c&&r&&(y=s(y,h(r))),l=S(y.length,l),a[c]=!n&&(r||o>=120&&y.length>=120)?new I(c&&y):void 0}y=t[0];var v=-1,d=a[0];t:for(;++v<o&&_.length<l;){var b=y[v],g=r?r(b):b;if(b=n||0!==b?b:0,!(d?p(d,g):e(_,g,n))){for(c=u;--c;){var j=a[c];if(!(j?p(j,g):e(t[c],g,n)))continue t}d&&d.push(g),_.push(b)}}return _}(r):[]},W=x(void 0===W?U.length-1:W,0),function(){for(var t=arguments,r=-1,n=x(t.length-W,0),e=Array(n);++r<n;)e[r]=t[W+r];r=-1;for(var o=Array(W+1);++r<W;)o[r]=t[r];return o[W]=e,a(U,this,o)});function H(t){var r=z(t)?w.call(t):"";return"[object Function]"==r||"[object GeneratorFunction]"==r}function z(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}var G=C;function L(t,r,n){switch(n.length){case 0:return t.call(r);case 1:return t.call(r,n[0]);case 2:return t.call(r,n[0],n[1]);case 3:return t.call(r,n[0],n[1],n[2])}return t.apply(r,n)}function V(t,r,n){if(r!=r)return function(t,r,n,e){for(var o=t.length,u=n+(e?1:-1);e?u--:++u<o;)if(r(t[u],u,t))return u;return-1}(t,q,n);for(var e=n-1,o=t.length;++e<o;)if(t[e]===r)return e;return-1}function N(t,r,n,e){for(var o=n-1,u=t.length;++o<u;)if(e(t[o],r))return o;return-1}function q(t){return t!=t}var J=Array.prototype.splice,K=Math.max;function Q(t,r,n,e){var o=e?N:V,u=-1,c=r.length,a=t;for(t===r&&(r=function(t,r){var n=-1,e=t.length;r||(r=Array(e));for(;++n<e;)r[n]=t[n];return r}(r)),n&&(a=function(t,r){for(var n=-1,e=t?t.length:0,o=Array(e);++n<e;)o[n]=r(t[n],n,t);return o}(t,function(t){return function(r){return t(r)}}(n)));++u<c;)for(var i=0,f=r[u],s=n?n(f):f;(i=o(a,s,i,e))>-1;)a!==t&&J.call(a,i,1),J.call(t,i,1);return t}var X=function(t,r){return r=K(void 0===r?t.length-1:r,0),function(){for(var n=arguments,e=-1,o=K(n.length-r,0),u=Array(o);++e<o;)u[e]=n[r+e];e=-1;for(var c=Array(r+1);++e<r;)c[e]=n[e];return c[r]=u,L(t,this,c)}}((function(t,r){return t&&t.length&&r&&r.length?Q(t,r):t}));var Y=X;var Z=Object.prototype,tt=Function.prototype.toString,rt=Z.hasOwnProperty,nt=tt.call(Object),et=Z.toString,ot=function(t,r){return function(n){return t(r(n))}}(Object.getPrototypeOf,Object);var ut=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=et.call(t)||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t))return!1;var r=ot(t);if(null===r)return!0;var n=rt.call(r,"constructor")&&r.constructor;return"function"==typeof n&&n instanceof n&&tt.call(n)==nt},ct={exports:{}};!function(t,n){var e="__lodash_hash_undefined__",o=9007199254740991,u="[object Arguments]",c="[object Boolean]",a="[object Date]",i="[object Function]",f="[object GeneratorFunction]",s="[object Map]",l="[object Number]",h="[object Object]",p="[object Promise]",_="[object RegExp]",y="[object Set]",v="[object String]",d="[object Symbol]",b="[object WeakMap]",g="[object ArrayBuffer]",j="[object DataView]",O="[object Float32Array]",w="[object Float64Array]",m="[object Int8Array]",A="[object Int16Array]",x="[object Int32Array]",S="[object Uint8Array]",E="[object Uint8ClampedArray]",$="[object Uint16Array]",k="[object Uint32Array]",P=/\w*$/,F=/^\[object .+?Constructor\]$/,I=/^(?:0|[1-9]\d*)$/,T={};T[u]=T["[object Array]"]=T[g]=T[j]=T[c]=T[a]=T[O]=T[w]=T[m]=T[A]=T[x]=T[s]=T[l]=T[h]=T[_]=T[y]=T[v]=T[d]=T[S]=T[E]=T[$]=T[k]=!0,T["[object Error]"]=T[i]=T[b]=!1;var M="object"==typeof self&&self&&self.Object===Object&&self,R="object"==typeof r&&r&&r.Object===Object&&r||M||Function("return this")(),B=n&&!n.nodeType&&n,D=B&&t&&!t.nodeType&&t,U=D&&D.exports===B;function W(t,r){return t.set(r[0],r[1]),t}function C(t,r){return t.add(r),t}function H(t,r,n,e){var o=-1,u=t?t.length:0;for(e&&u&&(n=t[++o]);++o<u;)n=r(n,t[o],o,t);return n}function z(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function G(t){var r=-1,n=Array(t.size);return t.forEach((function(t,e){n[++r]=[e,t]})),n}function L(t,r){return function(n){return t(r(n))}}function V(t){var r=-1,n=Array(t.size);return t.forEach((function(t){n[++r]=t})),n}var N=Array.prototype,q=Function.prototype,J=Object.prototype,K=R["__core-js_shared__"],Q=function(){var t=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),X=q.toString,Y=J.hasOwnProperty,Z=J.toString,tt=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=U?R.Buffer:void 0,nt=R.Symbol,et=R.Uint8Array,ot=L(Object.getPrototypeOf,Object),ut=Object.create,ct=J.propertyIsEnumerable,at=N.splice,it=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,st=L(Object.keys,Object),lt=Bt(R,"DataView"),ht=Bt(R,"Map"),pt=Bt(R,"Promise"),_t=Bt(R,"Set"),yt=Bt(R,"WeakMap"),vt=Bt(Object,"create"),dt=Ht(lt),bt=Ht(ht),gt=Ht(pt),jt=Ht(_t),Ot=Ht(yt),wt=nt?nt.prototype:void 0,mt=wt?wt.valueOf:void 0;function At(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function xt(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function St(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function Et(t){this.__data__=new xt(t)}function $t(t,r){var n=Gt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Lt(t)}(t)&&Y.call(t,"callee")&&(!ct.call(t,"callee")||Z.call(t)==u)}(t)?function(t,r){for(var n=-1,e=Array(t);++n<t;)e[n]=r(n);return e}(t.length,String):[],e=n.length,o=!!e;for(var c in t)!r&&!Y.call(t,c)||o&&("length"==c||Wt(c,e))||n.push(c);return n}function kt(t,r,n){var e=t[r];Y.call(t,r)&&zt(e,n)&&(void 0!==n||r in t)||(t[r]=n)}function Pt(t,r){for(var n=t.length;n--;)if(zt(t[n][0],r))return n;return-1}function Ft(t,r,n,e,o,p,b){var F;if(e&&(F=p?e(t,o,p,b):e(t)),void 0!==F)return F;if(!qt(t))return t;var I=Gt(t);if(I){if(F=function(t){var r=t.length,n=t.constructor(r);r&&"string"==typeof t[0]&&Y.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!r)return function(t,r){var n=-1,e=t.length;r||(r=Array(e));for(;++n<e;)r[n]=t[n];return r}(t,F)}else{var M=Ut(t),R=M==i||M==f;if(Vt(t))return function(t,r){if(r)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,r);if(M==h||M==u||R&&!p){if(z(t))return p?t:{};if(F=function(t){return"function"!=typeof t.constructor||Ct(t)?{}:(r=ot(t),qt(r)?ut(r):{});var r}(R?{}:t),!r)return function(t,r){return Mt(t,Dt(t),r)}(t,function(t,r){return t&&Mt(r,Jt(r),t)}(F,t))}else{if(!T[M])return p?t:{};F=function(t,r,n,e){var o=t.constructor;switch(r){case g:return Tt(t);case c:case a:return new o(+t);case j:return function(t,r){var n=r?Tt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,e);case O:case w:case m:case A:case x:case S:case E:case $:case k:return function(t,r){var n=r?Tt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,e);case s:return function(t,r,n){return H(r?n(G(t),!0):G(t),W,new t.constructor)}(t,e,n);case l:case v:return new o(t);case _:return function(t){var r=new t.constructor(t.source,P.exec(t));return r.lastIndex=t.lastIndex,r}(t);case y:return function(t,r,n){return H(r?n(V(t),!0):V(t),C,new t.constructor)}(t,e,n);case d:return u=t,mt?Object(mt.call(u)):{}}var u}(t,M,Ft,r)}}b||(b=new Et);var B=b.get(t);if(B)return B;if(b.set(t,F),!I)var D=n?function(t){return function(t,r,n){var e=r(t);return Gt(t)?e:function(t,r){for(var n=-1,e=r.length,o=t.length;++n<e;)t[o+n]=r[n];return t}(e,n(t))}(t,Jt,Dt)}(t):Jt(t);return function(t,r){for(var n=-1,e=t?t.length:0;++n<e&&!1!==r(t[n],n,t););}(D||t,(function(o,u){D&&(o=t[u=o]),kt(F,u,Ft(o,r,n,e,u,t,b))})),F}function It(t){return!(!qt(t)||function(t){return!!Q&&Q in t}(t))&&(Nt(t)||z(t)?tt:F).test(Ht(t))}function Tt(t){var r=new t.constructor(t.byteLength);return new et(r).set(new et(t)),r}function Mt(t,r,n,e){n||(n={});for(var o=-1,u=r.length;++o<u;){var c=r[o],a=e?e(n[c],t[c],c,n,t):void 0;kt(n,c,void 0===a?t[c]:a)}return n}function Rt(t,r){var n,e,o=t.__data__;return("string"==(e=typeof(n=r))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n)?o["string"==typeof r?"string":"hash"]:o.map}function Bt(t,r){var n=function(t,r){return null==t?void 0:t[r]}(t,r);return It(n)?n:void 0}At.prototype.clear=function(){this.__data__=vt?vt(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var r=this.__data__;if(vt){var n=r[t];return n===e?void 0:n}return Y.call(r,t)?r[t]:void 0},At.prototype.has=function(t){var r=this.__data__;return vt?void 0!==r[t]:Y.call(r,t)},At.prototype.set=function(t,r){return this.__data__[t]=vt&&void 0===r?e:r,this},xt.prototype.clear=function(){this.__data__=[]},xt.prototype.delete=function(t){var r=this.__data__,n=Pt(r,t);return!(n<0)&&(n==r.length-1?r.pop():at.call(r,n,1),!0)},xt.prototype.get=function(t){var r=this.__data__,n=Pt(r,t);return n<0?void 0:r[n][1]},xt.prototype.has=function(t){return Pt(this.__data__,t)>-1},xt.prototype.set=function(t,r){var n=this.__data__,e=Pt(n,t);return e<0?n.push([t,r]):n[e][1]=r,this},St.prototype.clear=function(){this.__data__={hash:new At,map:new(ht||xt),string:new At}},St.prototype.delete=function(t){return Rt(this,t).delete(t)},St.prototype.get=function(t){return Rt(this,t).get(t)},St.prototype.has=function(t){return Rt(this,t).has(t)},St.prototype.set=function(t,r){return Rt(this,t).set(t,r),this},Et.prototype.clear=function(){this.__data__=new xt},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,r){var n=this.__data__;if(n instanceof xt){var e=n.__data__;if(!ht||e.length<199)return e.push([t,r]),this;n=this.__data__=new St(e)}return n.set(t,r),this};var Dt=it?L(it,Object):function(){return[]},Ut=function(t){return Z.call(t)};function Wt(t,r){return!!(r=null==r?o:r)&&("number"==typeof t||I.test(t))&&t>-1&&t%1==0&&t<r}function Ct(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||J)}function Ht(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function zt(t,r){return t===r||t!=t&&r!=r}(lt&&Ut(new lt(new ArrayBuffer(1)))!=j||ht&&Ut(new ht)!=s||pt&&Ut(pt.resolve())!=p||_t&&Ut(new _t)!=y||yt&&Ut(new yt)!=b)&&(Ut=function(t){var r=Z.call(t),n=r==h?t.constructor:void 0,e=n?Ht(n):void 0;if(e)switch(e){case dt:return j;case bt:return s;case gt:return p;case jt:return y;case Ot:return b}return r});var Gt=Array.isArray;function Lt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Nt(t)}var Vt=ft||function(){return!1};function Nt(t){var r=qt(t)?Z.call(t):"";return r==i||r==f}function qt(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function Jt(t){return Lt(t)?$t(t):function(t){if(!Ct(t))return st(t);var r=[];for(var n in Object(t))Y.call(t,n)&&"constructor"!=n&&r.push(n);return r}(t)}t.exports=function(t){return Ft(t,!0,!0)}}(ct,ct.exports);var at=ct.exports;t.combinations=function(t,r={}){if(!t)throw new Error("[THROW_ID_01] missing input object");if(!ut(t))throw new Error("[THROW_ID_02] the first input object must be a true object");if(r&&!ut(r))throw new Error("[THROW_ID_03] the second override object must be a true object");const n=at(t),e=at(r),o=Object.keys(n),u=[];let c=[];ut(e)&&Object.keys(e).length&&(c=G(Object.keys(e),Object.keys(n)),c.forEach((t=>Y(o,t))));const a=function(t){const r=[];for(let n=0;n<1<<t;n++){const e=[];for(let r=0;r<t;r++)e.push(n&1<<r?1:0);r.push(e)}return r}(Object.keys(o).length);let i;return a.forEach(((t,r)=>{i={},o.forEach(((t,n)=>{i[t]=1===a[r][n]})),u.push(i)})),ut(e)&&Object.keys(e).length&&u.forEach((t=>c.forEach((r=>{t[r]=e[r]})))),u},t.version="5.0.4",Object.defineProperty(t,"__esModule",{value:!0})}));
