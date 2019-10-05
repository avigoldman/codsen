/**
 * object-flatten-referencing
 * Flatten complex nested objects according to a reference objects
 * Version: 4.11.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/object-flatten-referencing
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).objectFlattenReferencing=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var r=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,r){var n=200,o="__lodash_hash_undefined__",i=9007199254740991,u="[object Arguments]",c="[object Boolean]",a="[object Date]",f="[object Function]",s="[object GeneratorFunction]",l="[object Map]",p="[object Number]",h="[object Object]",y="[object RegExp]",g="[object Set]",b="[object String]",d="[object Symbol]",v="[object ArrayBuffer]",j="[object DataView]",w="[object Float32Array]",_="[object Float64Array]",m="[object Int8Array]",O="[object Int16Array]",W="[object Int32Array]",A="[object Uint8Array]",S="[object Uint8ClampedArray]",T="[object Uint16Array]",x="[object Uint32Array]",E=/\w*$/,I=/^\[object .+?Constructor\]$/,$=/^(?:0|[1-9]\d*)$/,P={};P[u]=P["[object Array]"]=P[v]=P[j]=P[c]=P[a]=P[w]=P[_]=P[m]=P[O]=P[W]=P[l]=P[p]=P[h]=P[y]=P[g]=P[b]=P[d]=P[A]=P[S]=P[T]=P[x]=!0,P["[object Error]"]=P[f]=P["[object WeakMap]"]=!1;var M="object"==typeof e&&e&&e.Object===Object&&e,k="object"==typeof self&&self&&self.Object===Object&&self,R=M||k||Function("return this")(),D=r&&!r.nodeType&&r,C=D&&t&&!t.nodeType&&t,B=C&&C.exports===D;function F(t,e){return t.set(e[0],e[1]),t}function Z(t,e){return t.add(e),t}function H(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function L(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function N(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function K(t,e){return function(r){return t(e(r))}}function V(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var G,U=Array.prototype,z=Function.prototype,J=Object.prototype,q=R["__core-js_shared__"],Q=(G=/[^.]+$/.exec(q&&q.keys&&q.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"",X=z.toString,Y=J.hasOwnProperty,tt=J.toString,et=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=B?R.Buffer:void 0,nt=R.Symbol,ot=R.Uint8Array,it=K(Object.getPrototypeOf,Object),ut=Object.create,ct=J.propertyIsEnumerable,at=U.splice,ft=Object.getOwnPropertySymbols,st=rt?rt.isBuffer:void 0,lt=K(Object.keys,Object),pt=Ct(R,"DataView"),ht=Ct(R,"Map"),yt=Ct(R,"Promise"),gt=Ct(R,"Set"),bt=Ct(R,"WeakMap"),dt=Ct(Object,"create"),vt=Lt(pt),jt=Lt(ht),wt=Lt(yt),_t=Lt(gt),mt=Lt(bt),Ot=nt?nt.prototype:void 0,Wt=Ot?Ot.valueOf:void 0;function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function xt(t){this.__data__=new St(t)}function Et(t,e){var r=Kt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Vt(t)}(t)&&Y.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==u)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var i in t)!e&&!Y.call(t,i)||o&&("length"==i||Zt(i,n))||r.push(i);return r}function It(t,e,r){var n=t[e];Y.call(t,e)&&Nt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function $t(t,e){for(var r=t.length;r--;)if(Nt(t[r][0],e))return r;return-1}function Pt(t,e,r,n,o,i,I){var $;if(n&&($=i?n(t,o,i,I):n(t)),void 0!==$)return $;if(!zt(t))return t;var M=Kt(t);if(M){if($=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Y.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,$)}else{var k=Ft(t),R=k==f||k==s;if(Gt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(k==h||k==u||R&&!i){if(L(t))return i?t:{};if($=function(t){return"function"!=typeof t.constructor||Ht(t)?{}:(e=it(t),zt(e)?ut(e):{});var e}(R?{}:t),!e)return function(t,e){return Rt(t,Bt(t),e)}(t,function(t,e){return t&&Rt(e,Jt(e),t)}($,t))}else{if(!P[k])return i?t:{};$=function(t,e,r,n){var o=t.constructor;switch(e){case v:return kt(t);case c:case a:return new o(+t);case j:return function(t,e){var r=e?kt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case w:case _:case m:case O:case W:case A:case S:case T:case x:return function(t,e){var r=e?kt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return H(e?r(N(t),!0):N(t),F,new t.constructor)}(t,n,r);case p:case b:return new o(t);case y:return(f=new(u=t).constructor(u.source,E.exec(u))).lastIndex=u.lastIndex,f;case g:return function(t,e,r){return H(e?r(V(t),!0):V(t),Z,new t.constructor)}(t,n,r);case d:return i=t,Wt?Object(Wt.call(i)):{}}var i;var u,f}(t,k,Pt,e)}}I||(I=new xt);var D=I.get(t);if(D)return D;if(I.set(t,$),!M)var C=r?function(t){return function(t,e,r){var n=e(t);return Kt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Jt,Bt)}(t):Jt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(C||t,(function(o,i){C&&(o=t[i=o]),It($,i,Pt(o,e,r,n,i,t,I))})),$}function Mt(t){return!(!zt(t)||(e=t,Q&&Q in e))&&(Ut(t)||L(t)?et:I).test(Lt(t));var e}function kt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Rt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var u=e[o],c=n?n(r[u],t[u],u,r,t):void 0;It(r,u,void 0===c?t[u]:c)}return r}function Dt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Ct(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Mt(r)?r:void 0}At.prototype.clear=function(){this.__data__=dt?dt(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var e=this.__data__;if(dt){var r=e[t];return r===o?void 0:r}return Y.call(e,t)?e[t]:void 0},At.prototype.has=function(t){var e=this.__data__;return dt?void 0!==e[t]:Y.call(e,t)},At.prototype.set=function(t,e){return this.__data__[t]=dt&&void 0===e?o:e,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var e=this.__data__,r=$t(e,t);return!(r<0)&&(r==e.length-1?e.pop():at.call(e,r,1),!0)},St.prototype.get=function(t){var e=this.__data__,r=$t(e,t);return r<0?void 0:e[r][1]},St.prototype.has=function(t){return $t(this.__data__,t)>-1},St.prototype.set=function(t,e){var r=this.__data__,n=$t(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Tt.prototype.clear=function(){this.__data__={hash:new At,map:new(ht||St),string:new At}},Tt.prototype.delete=function(t){return Dt(this,t).delete(t)},Tt.prototype.get=function(t){return Dt(this,t).get(t)},Tt.prototype.has=function(t){return Dt(this,t).has(t)},Tt.prototype.set=function(t,e){return Dt(this,t).set(t,e),this},xt.prototype.clear=function(){this.__data__=new St},xt.prototype.delete=function(t){return this.__data__.delete(t)},xt.prototype.get=function(t){return this.__data__.get(t)},xt.prototype.has=function(t){return this.__data__.has(t)},xt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof St){var o=r.__data__;if(!ht||o.length<n-1)return o.push([t,e]),this;r=this.__data__=new Tt(o)}return r.set(t,e),this};var Bt=ft?K(ft,Object):function(){return[]},Ft=function(t){return tt.call(t)};function Zt(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||$.test(t))&&t>-1&&t%1==0&&t<e}function Ht(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||J)}function Lt(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Nt(t,e){return t===e||t!=t&&e!=e}(pt&&Ft(new pt(new ArrayBuffer(1)))!=j||ht&&Ft(new ht)!=l||yt&&"[object Promise]"!=Ft(yt.resolve())||gt&&Ft(new gt)!=g||bt&&"[object WeakMap]"!=Ft(new bt))&&(Ft=function(t){var e=tt.call(t),r=e==h?t.constructor:void 0,n=r?Lt(r):void 0;if(n)switch(n){case vt:return j;case jt:return l;case wt:return"[object Promise]";case _t:return g;case mt:return"[object WeakMap]"}return e});var Kt=Array.isArray;function Vt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!Ut(t)}var Gt=st||function(){return!1};function Ut(t){var e=zt(t)?tt.call(t):"";return e==f||e==s}function zt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Jt(t){return Vt(t)?Et(t):function(t){if(!Ht(t))return lt(t);var e=[];for(var r in Object(t))Y.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Pt(t,!0,!0)}})),n=9007199254740991,o="[object Arguments]",i="[object Function]",u="[object GeneratorFunction]",c="[object Map]",a="[object Set]",f="[object String]",s=/^\[object .+?Constructor\]$/,l=/^(?:0|[1-9]\d*)$/,p="[\\ud800-\\udfff]",h="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",y="\\ud83c[\\udffb-\\udfff]",g="[^\\ud800-\\udfff]",b="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",v="(?:"+h+"|"+y+")"+"?",j="[\\ufe0e\\ufe0f]?"+v+("(?:\\u200d(?:"+[g,b,d].join("|")+")[\\ufe0e\\ufe0f]?"+v+")*"),w="(?:"+[g+h+"?",h,b,d,p].join("|")+")",_=RegExp(y+"(?="+y+")|"+w+j,"g"),m=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),O="object"==typeof e&&e&&e.Object===Object&&e,W="object"==typeof self&&self&&self.Object===Object&&self,A=O||W||Function("return this")();function S(t,e){return function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(e,(function(e){return t[e]}))}function T(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function x(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}function E(t){return function(t){return m.test(t)}(t)?function(t){return t.match(_)||[]}(t):function(t){return t.split("")}(t)}var I,$,P,M=Function.prototype,k=Object.prototype,R=A["__core-js_shared__"],D=(I=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"",C=M.toString,B=k.hasOwnProperty,F=k.toString,Z=RegExp("^"+C.call(B).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),H=A.Symbol,L=H?H.iterator:void 0,N=k.propertyIsEnumerable,K=($=Object.keys,P=Object,function(t){return $(P(t))}),V=ot(A,"DataView"),G=ot(A,"Map"),U=ot(A,"Promise"),z=ot(A,"Set"),J=ot(A,"WeakMap"),q=ct(V),Q=ct(G),X=ct(U),Y=ct(z),tt=ct(J);function et(t,e){var r=at(t)||function(t){return function(t){return pt(t)&&ft(t)}(t)&&B.call(t,"callee")&&(!N.call(t,"callee")||F.call(t)==o)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,i=!!n;for(var u in t)!e&&!B.call(t,u)||i&&("length"==u||ut(u,n))||r.push(u);return r}function rt(t){return!(!lt(t)||function(t){return!!D&&D in t}(t))&&(st(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?Z:s).test(ct(t))}function nt(t){if(r=(e=t)&&e.constructor,n="function"==typeof r&&r.prototype||k,e!==n)return K(t);var e,r,n,o=[];for(var i in Object(t))B.call(t,i)&&"constructor"!=i&&o.push(i);return o}function ot(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return rt(r)?r:void 0}var it=function(t){return F.call(t)};function ut(t,e){return!!(e=null==e?n:e)&&("number"==typeof t||l.test(t))&&t>-1&&t%1==0&&t<e}function ct(t){if(null!=t){try{return C.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(V&&"[object DataView]"!=it(new V(new ArrayBuffer(1)))||G&&it(new G)!=c||U&&"[object Promise]"!=it(U.resolve())||z&&it(new z)!=a||J&&"[object WeakMap]"!=it(new J))&&(it=function(t){var e=F.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?ct(r):void 0;if(n)switch(n){case q:return"[object DataView]";case Q:return c;case X:return"[object Promise]";case Y:return a;case tt:return"[object WeakMap]"}return e});var at=Array.isArray;function ft(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}(t.length)&&!st(t)}function st(t){var e=lt(t)?F.call(t):"";return e==i||e==u}function lt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function pt(t){return!!t&&"object"==typeof t}function ht(t){return t?S(t,function(t){return ft(t)?et(t):nt(t)}(t)):[]}var yt=function(t){if(!t)return[];if(ft(t))return function(t){return"string"==typeof t||!at(t)&&pt(t)&&F.call(t)==f}(t)?E(t):function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}(t);if(L&&t[L])return function(t){for(var e,r=[];!(e=t.next()).done;)r.push(e.value);return r}(t[L]());var e=it(t);return(e==c?T:e==a?x:ht)(t)},gt=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},bt=function(t,e){if("string"!=typeof t)return!1;if(e&&"includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)};function dt(t){return null!=t}function vt(t){return"string"==typeof t}function jt(t,e,r){if(0===arguments.length)throw new Error("str-indexes-of-plus/strIndexesOfPlus(): inputs missing!");if(!vt(t))throw new TypeError(`str-indexes-of-plus/strIndexesOfPlus(): first input argument must be a string! Currently it's: ${typeof t}`);if(!vt(e))throw new TypeError(`str-indexes-of-plus/strIndexesOfPlus(): second input argument must be a string! Currently it's: ${typeof e}`);if(arguments.length>=3&&!gt(r,{includeZero:!0})&&!bt(r,{includeZero:!0}))throw new TypeError(`str-indexes-of-plus/strIndexesOfPlus(): third input argument must be a natural number! Currently it's: ${r}`);bt(r,{includeZero:!0})&&(r=Number(r));const n=yt(t),o=yt(e);if(0===n.length||0===o.length||dt(r)&&r>=n.length)return[];dt(r)||(r=0);const i=[];let u,c=!1;for(let t=r,e=n.length;t<e;t++)c&&(n[t]===o[t-u]?t-u+1===o.length&&i.push(u):(u=null,c=!1)),c||n[t]===o[0]&&(1===o.length?i.push(t):(c=!0,u=t));return i}var wt=1/0,_t=9007199254740991,mt=17976931348623157e292,Ot=NaN,Wt="[object Arguments]",At="[object Function]",St="[object GeneratorFunction]",Tt="[object String]",xt="[object Symbol]",Et=/^\s+|\s+$/g,It=/^[-+]0x[0-9a-f]+$/i,$t=/^0b[01]+$/i,Pt=/^0o[0-7]+$/i,Mt=/^(?:0|[1-9]\d*)$/,kt=parseInt;function Rt(t){return t!=t}function Dt(t,e){return function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(e,(function(e){return t[e]}))}var Ct=Object.prototype,Bt=Ct.hasOwnProperty,Ft=Ct.toString,Zt=Ct.propertyIsEnumerable,Ht=function(t,e){return function(r){return t(e(r))}}(Object.keys,Object),Lt=Math.max;function Nt(t,e){var r=Gt(t)||function(t){return function(t){return Jt(t)&&Ut(t)}(t)&&Bt.call(t,"callee")&&(!Zt.call(t,"callee")||Ft.call(t)==Wt)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var i in t)!e&&!Bt.call(t,i)||o&&("length"==i||Vt(i,n))||r.push(i);return r}function Kt(t){if(r=(e=t)&&e.constructor,n="function"==typeof r&&r.prototype||Ct,e!==n)return Ht(t);var e,r,n,o=[];for(var i in Object(t))Bt.call(t,i)&&"constructor"!=i&&o.push(i);return o}function Vt(t,e){return!!(e=null==e?_t:e)&&("number"==typeof t||Mt.test(t))&&t>-1&&t%1==0&&t<e}var Gt=Array.isArray;function Ut(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=_t}(t.length)&&!function(t){var e=zt(t)?Ft.call(t):"";return e==At||e==St}(t)}function zt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Jt(t){return!!t&&"object"==typeof t}var qt=function(t,e,r,n){var o;t=Ut(t)?t:(o=t)?Dt(o,function(t){return Ut(t)?Nt(t):Kt(t)}(o)):[],r=r&&!n?function(t){var e=function(t){if(!t)return 0===t?t:0;if((t=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||Jt(t)&&Ft.call(t)==xt}(t))return Ot;if(zt(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=zt(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Et,"");var r=$t.test(t);return r||Pt.test(t)?kt(t.slice(2),r?2:8):It.test(t)?Ot:+t}(t))===wt||t===-wt){return(t<0?-1:1)*mt}return t==t?t:0}(t),r=e%1;return e==e?r?e-r:e:0}(r):0;var i=t.length;return r<0&&(r=Lt(i+r,0)),function(t){return"string"==typeof t||!Gt(t)&&Jt(t)&&Ft.call(t)==Tt}(t)?r<=i&&t.indexOf(e,r)>-1:!!i&&function(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,Rt,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}(t,e,r)>-1};const Qt=/[|\\{}()[\]^$+*?.-]/g;var Xt=t=>{if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(Qt,"\\$&")};const Yt=new Map;function te(t,e){e={caseSensitive:!1,...e};const r=t+JSON.stringify(e);if(Yt.has(r))return Yt.get(r);const n="!"===t[0];n&&(t=t.slice(1)),t=Xt(t).replace(/\\\*/g,".*");const o=new RegExp(`^${t}$`,e.caseSensitive?"":"i");return o.negated=n,Yt.set(r,o),o}var ee=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>te(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};ee.isMatch=(t,e,r)=>{const n=te(e,r),o=n.test(t);return n.negated?!o:o};var re="[object Object]";var ne=Function.prototype,oe=Object.prototype,ie=ne.toString,ue=oe.hasOwnProperty,ce=ie.call(Object),ae=oe.toString,fe=function(t,e){return function(r){return t(e(r))}}(Object.getPrototypeOf,Object);var se=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||ae.call(t)!=re||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=fe(t);if(null===e)return!0;var r=ue.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&ie.call(r)==ce},le=function(t,e){if(e=e||{},0===arguments.length)throw new TypeError("No arguments. (One argument required)");if("string"!=typeof t)throw new TypeError(t+" is not a string. Argument must be a string to be checked if it represents an integer.");var r,n=Number(t);if(e.parseLiteral){if(t.trim()!==t)return!1;r=n.toString()}else r=t;return"NaN"!==r&&Math.round(n).toString()===r},pe=Array.isArray;function he(t){return"string"==typeof t}function ye(t,e,n,o){if(0===arguments.length||0===t.length)return"";var i=r(t),u="";if(i.length>0)if(o)for(var c=0,a=i.length;c<a;c++)if(he(i[c])){var f=void 0;f="",e.mergeArraysWithLineBreaks&&c>0&&(!e.mergeWithoutTrailingBrIfLineContainsBr||"string"!=typeof i[c-1]||e.mergeWithoutTrailingBrIfLineContainsBr&&void 0!==i[c-1]&&!i[c-1].toLowerCase().includes("<br"))&&(f="<br".concat(e.xhtml?" /":"",">")),u+=f+(n?e.wrapHeadsWith:"")+i[c]+(n?e.wrapTailsWith:"")}else pe(i[c])&&i[c].length>0&&i[c].every(he)&&function(){var t="";e.mergeArraysWithLineBreaks&&u.length>0&&(t="<br".concat(e.xhtml?" /":"",">")),u=i[c].reduce((function(r,o,i,u){var c="";return i!==u.length-1&&(c=" "),r+(0===i?t:"")+(n?e.wrapHeadsWith:"")+o+(n?e.wrapTailsWith:"")+c}),u)}();else u=i.reduce((function(t,r,o,i){var u="";e.mergeArraysWithLineBreaks&&o>0&&(u="<br".concat(e.xhtml?" /":"",">"));var c="";return o!==i.length-1&&(c=" "),t+(0===o?u:"")+(n?e.wrapHeadsWith:"")+r+(n?e.wrapTailsWith:"")+c}),u);return u}function ge(t){return he(t)?t.length>0?[t]:[]:t}var be=Array.isArray;function de(t){return null!=t}function ve(t){return"string"==typeof t}return function(e,n,o){if(0===arguments.length)throw new Error("object-flatten-referencing/ofr(): [THROW_ID_01] all inputs missing!");if(1===arguments.length)throw new Error("object-flatten-referencing/ofr(): [THROW_ID_02] reference object missing!");if(de(o)&&!se(o))throw new Error("object-flatten-referencing/ofr(): [THROW_ID_03] third input, options object must be a plain object. Currently it's: ".concat(t(o)));return function e(n,o,i,u,c,a){var f=r(n),s=r(o);void 0===u&&(u=!0),void 0===c&&(c=!0),void 0===a&&(a="");var l;return(i=Object.assign({},{wrapHeadsWith:"%%_",wrapTailsWith:"_%%",dontWrapKeys:[],dontWrapPaths:[],xhtml:!0,preventDoubleWrapping:!0,preventWrappingIfContains:[],objectKeyAndValueJoinChar:".",wrapGlobalFlipSwitch:!0,ignore:[],whatToDoWhenReferenceIsMissing:0,mergeArraysWithLineBreaks:!0,mergeWithoutTrailingBrIfLineContainsBr:!0,enforceStrictKeyset:!0},i)).dontWrapKeys=ge(i.dontWrapKeys),i.preventWrappingIfContains=ge(i.preventWrappingIfContains),i.dontWrapPaths=ge(i.dontWrapPaths),i.ignore=ge(i.ignore),i.whatToDoWhenReferenceIsMissing=he(l=i.whatToDoWhenReferenceIsMissing)&&le(l.trim())?parseInt(l.trim(),10):l,i.wrapGlobalFlipSwitch||(u=!1),se(f)?Object.keys(f).forEach((function(n){var o=a+(0===a.length?n:".".concat(n));if(0===i.ignore.length||!qt(i.ignore,n))if(i.wrapGlobalFlipSwitch&&(u=!0,i.dontWrapKeys.length>0&&(u=u&&!i.dontWrapKeys.some((function(t){return ee.isMatch(n,t,{caseSensitive:!0})}))),i.dontWrapPaths.length>0&&(u=u&&!i.dontWrapPaths.some((function(t){return t===o}))),i.preventWrappingIfContains.length>0&&"string"==typeof f[n]&&(u=u&&!i.preventWrappingIfContains.some((function(t){return f[n].includes(t)})))),de(s[n])||!de(s[n])&&2===i.whatToDoWhenReferenceIsMissing)if(be(f[n]))if(2===i.whatToDoWhenReferenceIsMissing||ve(s[n]))f[n]=ye(f[n],i,u,c);else{if(f[n].every((function(t){return"string"==typeof t||Array.isArray(t)}))){var l=!0;f[n].forEach((function(t){Array.isArray(t)&&!t.every(ve)&&(l=!1)})),l&&(c=!1)}f[n]=e(f[n],s[n],i,u,c,o)}else se(f[n])?2===i.whatToDoWhenReferenceIsMissing||ve(s[n])?f[n]=ye(function t(e,n){if(0===arguments.length||0===Object.keys(e).length)return[];var o=r(e),i=[];return se(o)&&Object.keys(o).forEach((function(e){se(o[e])&&(o[e]=t(o[e],n)),pe(o[e])&&(i=i.concat(o[e].map((function(t){return e+n.objectKeyAndValueJoinChar+t})))),he(o[e])&&i.push(e+n.objectKeyAndValueJoinChar+o[e])})),i}(f[n],i),i,u,c):f[n]=e(f[n],s[n],u?i:Object.assign({},i,{wrapGlobalFlipSwitch:!1}),u,c,o):ve(f[n])&&(f[n]=e(f[n],s[n],i,u,c,o));else if(t(f[n])!==t(s[n])&&1===i.whatToDoWhenReferenceIsMissing)throw new Error("object-flatten-referencing/ofr(): [THROW_ID_06] reference object does not have the key ".concat(n," and we need it. TIP: Turn off throwing via opts.whatToDoWhenReferenceIsMissing."))})):be(f)?be(s)?f.forEach((function(t,r){de(f[r])&&de(s[r])?f[r]=e(f[r],s[r],i,u,c,"".concat(a,"[").concat(r,"]")):f[r]=e(f[r],s[0],i,u,c,"".concat(a,"[").concat(r,"]"))})):ve(s)&&(f=ye(f,i,u,c)):ve(f)&&f.length>0&&(i.wrapHeadsWith||i.wrapTailsWith)&&(i.preventDoubleWrapping&&(""!==i.wrapHeadsWith&&jt(f,i.wrapHeadsWith.trim()).length||""!==i.wrapTailsWith&&jt(f,i.wrapTailsWith.trim()).length)||(f=(u?i.wrapHeadsWith:"")+f+(u?i.wrapTailsWith:""))),f}(e,n,o)}}));
