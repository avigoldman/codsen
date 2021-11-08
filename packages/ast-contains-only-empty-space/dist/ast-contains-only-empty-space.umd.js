/**
 * @name ast-contains-only-empty-space
 * @fileoverview Does AST contain only empty space?
 * @version 3.0.5
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ast-contains-only-empty-space/}
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).astContainsOnlyEmptySpace={})}(this,(function(t){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r={exports:{}};!function(t,r){var n="__lodash_hash_undefined__",o=9007199254740991,c="[object Arguments]",u="[object Boolean]",i="[object Date]",a="[object Function]",f="[object GeneratorFunction]",s="[object Map]",l="[object Number]",p="[object Object]",y="[object Promise]",h="[object RegExp]",_="[object Set]",d="[object String]",v="[object Symbol]",b="[object WeakMap]",g="[object ArrayBuffer]",j="[object DataView]",w="[object Float32Array]",O="[object Float64Array]",m="[object Int8Array]",A="[object Int16Array]",x="[object Int32Array]",S="[object Uint8Array]",$="[object Uint8ClampedArray]",P="[object Uint16Array]",T="[object Uint32Array]",E=/\w*$/,I=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,N={};N[c]=N["[object Array]"]=N[g]=N[j]=N[u]=N[i]=N[w]=N[O]=N[m]=N[A]=N[x]=N[s]=N[l]=N[p]=N[h]=N[_]=N[d]=N[v]=N[S]=N[$]=N[P]=N[T]=!0,N["[object Error]"]=N[a]=N[b]=!1;var k="object"==typeof self&&self&&self.Object===Object&&self,B="object"==typeof e&&e&&e.Object===Object&&e||k||Function("return this")(),M=r&&!r.nodeType&&r,U=M&&t&&!t.nodeType&&t,C=U&&U.exports===M;function D(t,e){return t.set(e[0],e[1]),t}function K(t,e){return t.add(e),t}function R(t,e,r,n){var o=-1,c=t?t.length:0;for(n&&c&&(r=t[++o]);++o<c;)r=e(r,t[o],o,t);return r}function z(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function L(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function V(t,e){return function(r){return t(e(r))}}function W(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var G,q=Array.prototype,H=Function.prototype,J=Object.prototype,Q=B["__core-js_shared__"],X=(G=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"",Y=H.toString,Z=J.hasOwnProperty,tt=J.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=C?B.Buffer:void 0,nt=B.Symbol,ot=B.Uint8Array,ct=V(Object.getPrototypeOf,Object),ut=Object.create,it=J.propertyIsEnumerable,at=q.splice,ft=Object.getOwnPropertySymbols,st=rt?rt.isBuffer:void 0,lt=V(Object.keys,Object),pt=Ut(B,"DataView"),yt=Ut(B,"Map"),ht=Ut(B,"Promise"),_t=Ut(B,"Set"),dt=Ut(B,"WeakMap"),vt=Ut(Object,"create"),bt=zt(pt),gt=zt(yt),jt=zt(ht),wt=zt(_t),Ot=zt(dt),mt=nt?nt.prototype:void 0,At=mt?mt.valueOf:void 0;function xt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function $t(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Pt(t){this.__data__=new St(t)}function Tt(t,e){var r=Vt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Wt(t)}(t)&&Z.call(t,"callee")&&(!it.call(t,"callee")||tt.call(t)==c)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var u in t)!e&&!Z.call(t,u)||o&&("length"==u||Kt(u,n))||r.push(u);return r}function Et(t,e,r){var n=t[e];Z.call(t,e)&&Lt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function It(t,e){for(var r=t.length;r--;)if(Lt(t[r][0],e))return r;return-1}function Ft(t,e,r,n,o,y,b){var I;if(n&&(I=y?n(t,o,y,b):n(t)),void 0!==I)return I;if(!Ht(t))return t;var F=Vt(t);if(F){if(I=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,I)}else{var k=Dt(t),B=k==a||k==f;if(Gt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(k==p||k==c||B&&!y){if(z(t))return y?t:{};if(I=function(t){return"function"!=typeof t.constructor||Rt(t)?{}:(e=ct(t),Ht(e)?ut(e):{});var e}(B?{}:t),!e)return function(t,e){return Bt(t,Ct(t),e)}(t,function(t,e){return t&&Bt(e,Jt(e),t)}(I,t))}else{if(!N[k])return y?t:{};I=function(t,e,r,n){var o=t.constructor;switch(e){case g:return kt(t);case u:case i:return new o(+t);case j:return function(t,e){var r=e?kt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case w:case O:case m:case A:case x:case S:case $:case P:case T:return function(t,e){var r=e?kt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case s:return function(t,e,r){return R(e?r(L(t),!0):L(t),D,new t.constructor)}(t,n,r);case l:case d:return new o(t);case h:return function(t){var e=new t.constructor(t.source,E.exec(t));return e.lastIndex=t.lastIndex,e}(t);case _:return function(t,e,r){return R(e?r(W(t),!0):W(t),K,new t.constructor)}(t,n,r);case v:return c=t,At?Object(At.call(c)):{}}var c}(t,k,Ft,e)}}b||(b=new Pt);var M=b.get(t);if(M)return M;if(b.set(t,I),!F)var U=r?function(t){return function(t,e,r){var n=e(t);return Vt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Jt,Ct)}(t):Jt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(U||t,(function(o,c){U&&(o=t[c=o]),Et(I,c,Ft(o,e,r,n,c,t,b))})),I}function Nt(t){return!(!Ht(t)||(e=t,X&&X in e))&&(qt(t)||z(t)?et:I).test(zt(t));var e}function kt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Bt(t,e,r,n){r||(r={});for(var o=-1,c=e.length;++o<c;){var u=e[o],i=n?n(r[u],t[u],u,r,t):void 0;Et(r,u,void 0===i?t[u]:i)}return r}function Mt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Ut(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Nt(r)?r:void 0}xt.prototype.clear=function(){this.__data__=vt?vt(null):{}},xt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},xt.prototype.get=function(t){var e=this.__data__;if(vt){var r=e[t];return r===n?void 0:r}return Z.call(e,t)?e[t]:void 0},xt.prototype.has=function(t){var e=this.__data__;return vt?void 0!==e[t]:Z.call(e,t)},xt.prototype.set=function(t,e){return this.__data__[t]=vt&&void 0===e?n:e,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var e=this.__data__,r=It(e,t);return!(r<0)&&(r==e.length-1?e.pop():at.call(e,r,1),!0)},St.prototype.get=function(t){var e=this.__data__,r=It(e,t);return r<0?void 0:e[r][1]},St.prototype.has=function(t){return It(this.__data__,t)>-1},St.prototype.set=function(t,e){var r=this.__data__,n=It(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},$t.prototype.clear=function(){this.__data__={hash:new xt,map:new(yt||St),string:new xt}},$t.prototype.delete=function(t){return Mt(this,t).delete(t)},$t.prototype.get=function(t){return Mt(this,t).get(t)},$t.prototype.has=function(t){return Mt(this,t).has(t)},$t.prototype.set=function(t,e){return Mt(this,t).set(t,e),this},Pt.prototype.clear=function(){this.__data__=new St},Pt.prototype.delete=function(t){return this.__data__.delete(t)},Pt.prototype.get=function(t){return this.__data__.get(t)},Pt.prototype.has=function(t){return this.__data__.has(t)},Pt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof St){var n=r.__data__;if(!yt||n.length<199)return n.push([t,e]),this;r=this.__data__=new $t(n)}return r.set(t,e),this};var Ct=ft?V(ft,Object):function(){return[]},Dt=function(t){return tt.call(t)};function Kt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<e}function Rt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||J)}function zt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Lt(t,e){return t===e||t!=t&&e!=e}(pt&&Dt(new pt(new ArrayBuffer(1)))!=j||yt&&Dt(new yt)!=s||ht&&Dt(ht.resolve())!=y||_t&&Dt(new _t)!=_||dt&&Dt(new dt)!=b)&&(Dt=function(t){var e=tt.call(t),r=e==p?t.constructor:void 0,n=r?zt(r):void 0;if(n)switch(n){case bt:return j;case gt:return s;case jt:return y;case wt:return _;case Ot:return b}return e});var Vt=Array.isArray;function Wt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!qt(t)}var Gt=st||function(){return!1};function qt(t){var e=Ht(t)?tt.call(t):"";return e==a||e==f}function Ht(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Jt(t){return Wt(t)?Tt(t):function(t){if(!Rt(t))return lt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Ft(t,!0,!0)}}(r,r.exports);var n=r.exports;var o,c,u=Object.prototype,i=Function.prototype.toString,a=u.hasOwnProperty,f=i.call(Object),s=u.toString,l=(o=Object.getPrototypeOf,c=Object,function(t){return o(c(t))});var p=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=s.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=l(t);if(null===e)return!0;var r=a.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&i.call(r)==f};
/**
 * @name ast-monkey-util
 * @fileoverview Utility library of AST helper functions
 * @version 2.0.5
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ast-monkey-util/}
 */function y(t){if(t.includes(".")){const e=t.lastIndexOf(".");if(!t.slice(0,e).includes("."))return t.slice(0,e);for(let r=e-1;r--;)if("."===t[r])return t.slice(r+1,e)}return null}
/**
 * @name ast-monkey-traverse
 * @fileoverview Utility library to traverse AST
 * @version 3.0.5
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ast-monkey-traverse/}
 */t.empty=function(t){if("string"==typeof t)return!t.trim();if(!["object","string"].includes(typeof t)||!t)return!1;let e=!0;return t=function t(e,r,o,c){const u=n(e);let i;const a={depth:-1,path:"",...o};if(a.depth+=1,Array.isArray(u))for(let e=0,o=u.length;e<o&&!c.now;e++){const o=a.path?`${a.path}.${e}`:`${e}`;void 0!==u[e]?(a.parent=n(u),a.parentType="array",a.parentKey=y(o),i=t(r(u[e],void 0,{...a,path:o},c),r,{...a,path:o},c),Number.isNaN(i)&&e<u.length?(u.splice(e,1),e-=1):u[e]=i):u.splice(e,1)}else if(p(u))for(const e in u){if(c.now&&null!=e)break;const o=a.path?`${a.path}.${e}`:e;0===a.depth&&null!=e&&(a.topmostKey=e),a.parent=n(u),a.parentType="object",a.parentKey=y(o),i=t(r(e,u[e],{...a,path:o},c),r,{...a,path:o},c),Number.isNaN(i)?delete u[e]:u[e]=i}return u}(t,((t,r,n,o)=>{const c=void 0!==r?r:t;return"string"==typeof c&&c.trim()&&(e=!1,o.now=!0),c}),{},{now:!1}),e},Object.defineProperty(t,"__esModule",{value:!0})}));
