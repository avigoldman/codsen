/**
 * object-merge-advanced
 * Recursive, deep merge of anything (objects, arrays, strings or nested thereof), which weighs contents by type hierarchy to ensure the maximum content is retained
 * Version: 10.11.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/object-merge-advanced
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).objectMergeAdvanced=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e="[object Object]";var r,n,o=Function.prototype,a=Object.prototype,c=o.toString,u=a.hasOwnProperty,i=c.call(Object),s=a.toString,f=(r=Object.getPrototypeOf,n=Object,function(t){return r(n(t))});var y=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||s.call(t)!=e||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var r=f(t);if(null===r)return!0;var n=u.call(r,"constructor")&&r.constructor;return"function"==typeof n&&n instanceof n&&c.call(n)==i},p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var l=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,e){var r=200,n="__lodash_hash_undefined__",o=9007199254740991,a="[object Arguments]",c="[object Boolean]",u="[object Date]",i="[object Function]",s="[object GeneratorFunction]",f="[object Map]",y="[object Number]",l="[object Object]",h="[object RegExp]",g="[object Set]",b="[object String]",v="[object Symbol]",d="[object ArrayBuffer]",_="[object DataView]",j="[object Float32Array]",O="[object Float64Array]",w="[object Int8Array]",k="[object Int16Array]",m="[object Int32Array]",A="[object Uint8Array]",E="[object Uint8ClampedArray]",M="[object Uint16Array]",S="[object Uint32Array]",x=/\w*$/,I=/^\[object .+?Constructor\]$/,$=/^(?:0|[1-9]\d*)$/,T={};T[a]=T["[object Array]"]=T[d]=T[_]=T[c]=T[u]=T[j]=T[O]=T[w]=T[k]=T[m]=T[f]=T[y]=T[l]=T[h]=T[g]=T[b]=T[v]=T[A]=T[E]=T[M]=T[S]=!0,T["[object Error]"]=T[i]=T["[object WeakMap]"]=!1;var F="object"==typeof p&&p&&p.Object===Object&&p,W="object"==typeof self&&self&&self.Object===Object&&self,B=F||W||Function("return this")(),K=e&&!e.nodeType&&e,P=K&&t&&!t.nodeType&&t,R=P&&P.exports===K;function C(t,e){return t.set(e[0],e[1]),t}function D(t,e){return t.add(e),t}function V(t,e,r,n){var o=-1,a=t?t.length:0;for(n&&a&&(r=t[++o]);++o<a;)r=e(r,t[o],o,t);return r}function G(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function N(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function H(t,e){return function(r){return t(e(r))}}function U(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var z,L=Array.prototype,q=Function.prototype,J=Object.prototype,Q=B["__core-js_shared__"],X=(z=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"",Y=q.toString,Z=J.hasOwnProperty,tt=J.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=R?B.Buffer:void 0,nt=B.Symbol,ot=B.Uint8Array,at=H(Object.getPrototypeOf,Object),ct=Object.create,ut=J.propertyIsEnumerable,it=L.splice,st=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,yt=H(Object.keys,Object),pt=Pt(B,"DataView"),lt=Pt(B,"Map"),ht=Pt(B,"Promise"),gt=Pt(B,"Set"),bt=Pt(B,"WeakMap"),vt=Pt(Object,"create"),dt=Gt(pt),_t=Gt(lt),jt=Gt(ht),Ot=Gt(gt),wt=Gt(bt),kt=nt?nt.prototype:void 0,mt=kt?kt.valueOf:void 0;function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Mt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){this.__data__=new Et(t)}function xt(t,e){var r=Ht(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ut(t)}(t)&&Z.call(t,"callee")&&(!ut.call(t,"callee")||tt.call(t)==a)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var c in t)!e&&!Z.call(t,c)||o&&("length"==c||Dt(c,n))||r.push(c);return r}function It(t,e,r){var n=t[e];Z.call(t,e)&&Nt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function $t(t,e){for(var r=t.length;r--;)if(Nt(t[r][0],e))return r;return-1}function Tt(t,e,r,n,o,p,I){var $;if(n&&($=p?n(t,o,p,I):n(t)),void 0!==$)return $;if(!qt(t))return t;var F=Ht(t);if(F){if($=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,$)}else{var W=Ct(t),B=W==i||W==s;if(zt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(W==l||W==a||B&&!p){if(G(t))return p?t:{};if($=function(t){return"function"!=typeof t.constructor||Vt(t)?{}:(e=at(t),qt(e)?ct(e):{});var e}(B?{}:t),!e)return function(t,e){return Bt(t,Rt(t),e)}(t,function(t,e){return t&&Bt(e,Jt(e),t)}($,t))}else{if(!T[W])return p?t:{};$=function(t,e,r,n){var o=t.constructor;switch(e){case d:return Wt(t);case c:case u:return new o(+t);case _:return function(t,e){var r=e?Wt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case j:case O:case w:case k:case m:case A:case E:case M:case S:return function(t,e){var r=e?Wt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case f:return function(t,e,r){return V(e?r(N(t),!0):N(t),C,new t.constructor)}(t,n,r);case y:case b:return new o(t);case h:return(s=new(i=t).constructor(i.source,x.exec(i))).lastIndex=i.lastIndex,s;case g:return function(t,e,r){return V(e?r(U(t),!0):U(t),D,new t.constructor)}(t,n,r);case v:return a=t,mt?Object(mt.call(a)):{}}var a;var i,s}(t,W,Tt,e)}}I||(I=new St);var K=I.get(t);if(K)return K;if(I.set(t,$),!F)var P=r?function(t){return function(t,e,r){var n=e(t);return Ht(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Jt,Rt)}(t):Jt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(P||t,(function(o,a){P&&(o=t[a=o]),It($,a,Tt(o,e,r,n,a,t,I))})),$}function Ft(t){return!(!qt(t)||function(t){return!!X&&X in t}(t))&&(Lt(t)||G(t)?et:I).test(Gt(t))}function Wt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Bt(t,e,r,n){r||(r={});for(var o=-1,a=e.length;++o<a;){var c=e[o],u=n?n(r[c],t[c],c,r,t):void 0;It(r,c,void 0===u?t[c]:u)}return r}function Kt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Pt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Ft(r)?r:void 0}At.prototype.clear=function(){this.__data__=vt?vt(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var e=this.__data__;if(vt){var r=e[t];return r===n?void 0:r}return Z.call(e,t)?e[t]:void 0},At.prototype.has=function(t){var e=this.__data__;return vt?void 0!==e[t]:Z.call(e,t)},At.prototype.set=function(t,e){return this.__data__[t]=vt&&void 0===e?n:e,this},Et.prototype.clear=function(){this.__data__=[]},Et.prototype.delete=function(t){var e=this.__data__,r=$t(e,t);return!(r<0)&&(r==e.length-1?e.pop():it.call(e,r,1),!0)},Et.prototype.get=function(t){var e=this.__data__,r=$t(e,t);return r<0?void 0:e[r][1]},Et.prototype.has=function(t){return $t(this.__data__,t)>-1},Et.prototype.set=function(t,e){var r=this.__data__,n=$t(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Mt.prototype.clear=function(){this.__data__={hash:new At,map:new(lt||Et),string:new At}},Mt.prototype.delete=function(t){return Kt(this,t).delete(t)},Mt.prototype.get=function(t){return Kt(this,t).get(t)},Mt.prototype.has=function(t){return Kt(this,t).has(t)},Mt.prototype.set=function(t,e){return Kt(this,t).set(t,e),this},St.prototype.clear=function(){this.__data__=new Et},St.prototype.delete=function(t){return this.__data__.delete(t)},St.prototype.get=function(t){return this.__data__.get(t)},St.prototype.has=function(t){return this.__data__.has(t)},St.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Et){var o=n.__data__;if(!lt||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new Mt(o)}return n.set(t,e),this};var Rt=st?H(st,Object):function(){return[]},Ct=function(t){return tt.call(t)};function Dt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||$.test(t))&&t>-1&&t%1==0&&t<e}function Vt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||J)}function Gt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Nt(t,e){return t===e||t!=t&&e!=e}(pt&&Ct(new pt(new ArrayBuffer(1)))!=_||lt&&Ct(new lt)!=f||ht&&"[object Promise]"!=Ct(ht.resolve())||gt&&Ct(new gt)!=g||bt&&"[object WeakMap]"!=Ct(new bt))&&(Ct=function(t){var e=tt.call(t),r=e==l?t.constructor:void 0,n=r?Gt(r):void 0;if(n)switch(n){case dt:return _;case _t:return f;case jt:return"[object Promise]";case Ot:return g;case wt:return"[object WeakMap]"}return e});var Ht=Array.isArray;function Ut(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Lt(t)}var zt=ft||function(){return!1};function Lt(t){var e=qt(t)?tt.call(t):"";return e==i||e==s}function qt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Jt(t){return Ut(t)?xt(t):function(t){if(!Vt(t))return yt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Tt(t,!0,!0)}}));const h=/[|\\{}()[\]^$+*?.-]/g;var g=t=>{if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(h,"\\$&")};const b=new Map;function v(t,e){e={caseSensitive:!1,...e};const r=t+JSON.stringify(e);if(b.has(r))return b.get(r);const n="!"===t[0];n&&(t=t.slice(1)),t=g(t).replace(/\\\*/g,".*");const o=new RegExp(`^${t}$`,e.caseSensitive?"":"i");return o.negated=n,b.set(r,o),o}var d=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>v(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};d.isMatch=(t,e,r)=>{const n=v(e,r),o=n.test(t);return n.negated?!o:o};const _=Array.isArray;function j(t,e,r){function n(t){return"string"==typeof t}const o=Object.assign({},{arrayVsArrayAllMustBeFound:"any"},r);if(0===arguments.length)throw new Error("array-includes-with-glob/arrayIncludesWithGlob(): [THROW_ID_01] all inputs missing!");if(1===arguments.length)throw new Error("array-includes-with-glob/arrayIncludesWithGlob(): [THROW_ID_02] second argument missing!");if(!_(t)){if(!n(t))throw new Error(`array-includes-with-glob/arrayIncludesWithGlob(): [THROW_ID_03] first argument must be an array! It was given as ${typeof t}`);t=[t]}if(!n(e)&&!_(e))throw new Error(`array-includes-with-glob/arrayIncludesWithGlob(): [THROW_ID_04] second argument must be a string or array of strings! It was given as ${typeof e}`);if("any"!==o.arrayVsArrayAllMustBeFound&&"all"!==o.arrayVsArrayAllMustBeFound)throw new Error(`array-includes-with-glob/arrayIncludesWithGlob(): [THROW_ID_05] opts.arrayVsArrayAllMustBeFound was customised to an unrecognised value, ${o.arrayVsArrayAllMustBeFound}. It must be equal to either "any" or "all".`);if(0===t.length)return!1;const a=t.filter(t=>(function(t){return null!=t})(t));return 0!==a.length&&(n(e)?a.some(t=>d.isMatch(t,e,{caseSensitive:!0})):"any"===o.arrayVsArrayAllMustBeFound?e.some(t=>a.some(e=>d.isMatch(e,t,{caseSensitive:!0}))):e.every(t=>a.some(e=>d.isMatch(e,t,{caseSensitive:!0}))))}var O=1/0,w=9007199254740991,k=17976931348623157e292,m=NaN,A="[object Arguments]",E="[object Function]",M="[object GeneratorFunction]",S="[object String]",x="[object Symbol]",I=/^\s+|\s+$/g,$=/^[-+]0x[0-9a-f]+$/i,T=/^0b[01]+$/i,F=/^0o[0-7]+$/i,W=/^(?:0|[1-9]\d*)$/,B=parseInt;function K(t){return t!=t}function P(t,e){return function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(e,(function(e){return t[e]}))}var R=Object.prototype,C=R.hasOwnProperty,D=R.toString,V=R.propertyIsEnumerable,G=function(t,e){return function(r){return t(e(r))}}(Object.keys,Object),N=Math.max;function H(t,e){var r=L(t)||function(t){return function(t){return Q(t)&&q(t)}(t)&&C.call(t,"callee")&&(!V.call(t,"callee")||D.call(t)==A)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var a in t)!e&&!C.call(t,a)||o&&("length"==a||z(a,n))||r.push(a);return r}function U(t){if(r=(e=t)&&e.constructor,n="function"==typeof r&&r.prototype||R,e!==n)return G(t);var e,r,n,o=[];for(var a in Object(t))C.call(t,a)&&"constructor"!=a&&o.push(a);return o}function z(t,e){return!!(e=null==e?w:e)&&("number"==typeof t||W.test(t))&&t>-1&&t%1==0&&t<e}var L=Array.isArray;function q(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=w}(t.length)&&!function(t){var e=J(t)?D.call(t):"";return e==E||e==M}(t)}function J(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Q(t){return!!t&&"object"==typeof t}var X=function(t,e,r,n){var o;t=q(t)?t:(o=t)?P(o,function(t){return q(t)?H(t):U(t)}(o)):[],r=r&&!n?function(t){var e=function(t){if(!t)return 0===t?t:0;if((t=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||Q(t)&&D.call(t)==x}(t))return m;if(J(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=J(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(I,"");var r=T.test(t);return r||F.test(t)?B(t.slice(2),r?2:8):$.test(t)?m:+t}(t))===O||t===-O){return(t<0?-1:1)*k}return t==t?t:0}(t),r=e%1;return e==e?r?e-r:e:0}(r):0;var a=t.length;return r<0&&(r=N(a+r,0)),function(t){return"string"==typeof t||!L(t)&&Q(t)&&D.call(t)==S}(t)?r<=a&&t.indexOf(e,r)>-1:!!a&&function(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,a=r+(n?1:-1);n?a--:++a<o;)if(e(t[a],a,t))return a;return-1}(t,K,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}(t,e,r)>-1},Y=200,Z="__lodash_hash_undefined__",tt="[object Function]",et="[object GeneratorFunction]",rt=/^\[object .+?Constructor\]$/,nt="object"==typeof p&&p&&p.Object===Object&&p,ot="object"==typeof self&&self&&self.Object===Object&&self,at=nt||ot||Function("return this")();function ct(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,a=r+(n?1:-1);for(;n?a--:++a<o;)if(e(t[a],a,t))return a;return-1}(t,it,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function ut(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function it(t){return t!=t}function st(t,e){return t.has(e)}function ft(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var yt,pt=Array.prototype,lt=Function.prototype,ht=Object.prototype,gt=at["__core-js_shared__"],bt=(yt=/[^.]+$/.exec(gt&&gt.keys&&gt.keys.IE_PROTO||""))?"Symbol(src)_1."+yt:"",vt=lt.toString,dt=ht.hasOwnProperty,_t=ht.toString,jt=RegExp("^"+vt.call(dt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ot=pt.splice,wt=Ft(at,"Map"),kt=Ft(at,"Set"),mt=Ft(Object,"create");function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Mt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=t?t.length:0;for(this.__data__=new Mt;++e<r;)this.add(t[e])}function xt(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function It(t){return!(!Wt(t)||function(t){return!!bt&&bt in t}(t))&&(function(t){var e=Wt(t)?_t.call(t):"";return e==tt||e==et}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?jt:rt).test(function(t){if(null!=t){try{return vt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}At.prototype.clear=function(){this.__data__=mt?mt(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var e=this.__data__;if(mt){var r=e[t];return r===Z?void 0:r}return dt.call(e,t)?e[t]:void 0},At.prototype.has=function(t){var e=this.__data__;return mt?void 0!==e[t]:dt.call(e,t)},At.prototype.set=function(t,e){return this.__data__[t]=mt&&void 0===e?Z:e,this},Et.prototype.clear=function(){this.__data__=[]},Et.prototype.delete=function(t){var e=this.__data__,r=xt(e,t);return!(r<0)&&(r==e.length-1?e.pop():Ot.call(e,r,1),!0)},Et.prototype.get=function(t){var e=this.__data__,r=xt(e,t);return r<0?void 0:e[r][1]},Et.prototype.has=function(t){return xt(this.__data__,t)>-1},Et.prototype.set=function(t,e){var r=this.__data__,n=xt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Mt.prototype.clear=function(){this.__data__={hash:new At,map:new(wt||Et),string:new At}},Mt.prototype.delete=function(t){return Tt(this,t).delete(t)},Mt.prototype.get=function(t){return Tt(this,t).get(t)},Mt.prototype.has=function(t){return Tt(this,t).has(t)},Mt.prototype.set=function(t,e){return Tt(this,t).set(t,e),this},St.prototype.add=St.prototype.push=function(t){return this.__data__.set(t,Z),this},St.prototype.has=function(t){return this.__data__.has(t)};var $t=kt&&1/ft(new kt([,-0]))[1]==1/0?function(t){return new kt(t)}:function(){};function Tt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Ft(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return It(r)?r:void 0}function Wt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}var Bt=function(t){return t&&t.length?function(t,e,r){var n=-1,o=ct,a=t.length,c=!0,u=[],i=u;if(r)c=!1,o=ut;else if(a>=Y){var s=e?null:$t(t);if(s)return ft(s);c=!1,o=st,i=new St}else i=e?[]:u;t:for(;++n<a;){var f=t[n],y=e?e(f):f;if(f=r||0!==f?f:0,c&&y==y){for(var p=i.length;p--;)if(i[p]===y)continue t;e&&i.push(y),u.push(f)}else o(i,y,r)||(i!==u&&i.push(y),u.push(f))}return u}(t):[]};function Kt(t){return"string"==typeof t?t.length>0?[t]:[]:t}const Pt=Array.isArray;function Rt(t){return 0!==arguments.length&&void 0!==t&&(Pt(t)||"string"==typeof t?t.length>0:y(t)?Object.keys(t).length>0:!!function(t){return"number"==typeof t}(t))}function Ct(t){return void 0===t?"undefined":null===t?"null":String(t)+" ("+typeof t+")"}function Dt(t,e,r){if(!Array.isArray(t))throw new TypeError("Expected the first argument of array-includes-all to be an array, but got "+Ct(t)+".");if(!Array.isArray(e))throw new TypeError("Expected the second argument of array-includes-all to be an array, but got "+Ct(e)+".");if(0===e.length)throw new RangeError("Expected the second argument of array-includes-all to include at least one value, but recieved an empty array.");return 0!==t.length&&e.every((function(e){return t.includes(e,r)}))}function Vt(t){return"string"==typeof t}function Gt(t){return"boolean"==typeof t}function Nt(t){return"function"==typeof t}var Ht=Array.isArray;function Ut(t){return!!t&&t.some((function(t){return"string"==typeof t}))}function zt(e){return y(e)?"object":Ht(e)?"array":t(e)}return function(t,e,r){if(0===arguments.length)throw new TypeError("object-merge-advanced/mergeAdvanced(): [THROW_ID_01] Both inputs are missing");return function t(e,r,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(!y(o))throw new TypeError("object-merge-advanced/mergeAdvanced(): [THROW_ID_02] Options object, the third argument, must be a plain object");var a,c=Object.assign(l({cb:null,mergeObjectsOnlyWhenKeysetMatches:!0,ignoreKeys:[],hardMergeKeys:[],hardArrayConcatKeys:[],mergeArraysContainingStringsToBeEmpty:!1,oneToManyArrayObjectMerge:!1,hardMergeEverything:!1,hardArrayConcat:!1,ignoreEverything:!1,concatInsteadOfMerging:!0,dedupeStringsInArrayValues:!1,mergeBoolsUsingOrNotAnd:!0,useNullAsExplicitFalse:!1}),o);if(c.ignoreKeys=Kt(c.ignoreKeys),c.hardMergeKeys=Kt(c.hardMergeKeys),c.hardMergeKeys.includes("*")&&(c.hardMergeEverything=!0),c.ignoreKeys.includes("*")&&(c.ignoreEverything=!0),c.useNullAsExplicitFalse&&(null===r||null===n))return Nt(c.cb)?c.cb(r,n,null,{path:e.path,key:e.key,type:e.type}):null;var u,i=Ht(r)||y(r)?l(r):r,s=Ht(n)||y(n)?l(n):n;c.ignoreEverything?u=i:c.hardMergeEverything&&(u=s);var f,p,h=c.hardMergeEverything||c.ignoreEverything;if(!Ht(i)){if(y(i)){if(Rt(i)){if(Ht(s)){if(Rt(s)){var g=h?u:s;return Nt(c.cb)?c.cb(i,s,g,{path:a,key:e.key,type:e.type}):g}var b=h?u:i;return Nt(c.cb)?c.cb(i,s,b,{path:a,key:e.key,type:e.type}):b}if(y(s))return Object.keys(s).forEach((function(r){a=e.path&&e.path.length?"".concat(e.path,".").concat(r):"".concat(r),i.hasOwnProperty(r)?j(r,c.ignoreKeys)?i[r]=t({path:a,key:r,type:[zt(i),zt(s)]},i[r],s[r],Object.assign({},c,{ignoreEverything:!0})):j(r,c.hardMergeKeys)?i[r]=t({path:a,key:r,type:[zt(i),zt(s)]},i[r],s[r],Object.assign({},c,{hardMergeEverything:!0})):j(r,c.hardArrayConcatKeys)?i[r]=t({path:a,key:r,type:[zt(i),zt(s)]},i[r],s[r],Object.assign({},c,{hardArrayConcat:!0})):i[r]=t({path:a,key:r,type:[zt(i),zt(s)]},i[r],s[r],c):i[r]=s[r]})),i;var v=h?u:i;return Nt(c.cb)?c.cb(i,s,v,{path:e.path,key:e.key,type:e.type}):v}if(Ht(s)||y(s)||Rt(s)){var d=h?u:s;return Nt(c.cb)?c.cb(i,s,d,{path:e.path,key:e.key,type:e.type}):d}var _=h?u:i;return Nt(c.cb)?c.cb(i,s,_,{path:e.path,key:e.key,type:e.type}):_}if(Vt(i)){if(Rt(i)){if((Ht(s)||y(s)||Vt(s))&&Rt(s)){var O=h?u:s;return Nt(c.cb)?c.cb(i,s,O,{path:e.path,key:e.key,type:e.type}):O}var w=h?u:i;return Nt(c.cb)?c.cb(i,s,w,{path:e.path,key:e.key,type:e.type}):w}if(null!=s&&!Gt(s)){var k=h?u:s;return Nt(c.cb)?c.cb(i,s,k,{path:e.path,key:e.key,type:e.type}):k}var m=h?u:i;return Nt(c.cb)?c.cb(i,s,m,{path:e.path,key:e.key,type:e.type}):m}if("number"==typeof i){if(Rt(s)){var A=h?u:s;return Nt(c.cb)?c.cb(i,s,A,{path:e.path,key:e.key,type:e.type}):A}var E=h?u:i;return Nt(c.cb)?c.cb(i,s,E,{path:e.path,key:e.key,type:e.type}):E}if(Gt(i)){if(Gt(s)){if(c.mergeBoolsUsingOrNotAnd){var M=h?u:i||s;return Nt(c.cb)?c.cb(i,s,M,{path:e.path,key:e.key,type:e.type}):M}var S=h?u:i&&s;return Nt(c.cb)?c.cb(i,s,S,{path:e.path,key:e.key,type:e.type}):S}if(null!=s){var x=h?u:s;return Nt(c.cb)?c.cb(i,s,x,{path:e.path,key:e.key,type:e.type}):x}var I=h?u:i;return Nt(c.cb)?c.cb(i,s,I,{path:e.path,key:e.key,type:e.type}):I}if(null===i){if(null!=s){var $=h?u:s;return Nt(c.cb)?c.cb(i,s,$,{path:e.path,key:e.key,type:e.type}):$}var T=h?u:i;return Nt(c.cb)?c.cb(i,s,T,{path:e.path,key:e.key,type:e.type}):T}var F=h?u:s;return Nt(c.cb)?c.cb(i,s,F,{path:e.path,key:e.key,type:e.type}):F}if(!Rt(i)){if(Rt(s)){var W=h?u:s;return Nt(c.cb)?c.cb(i,s,W,{path:a,key:e.key,type:e.type}):W}var B=h?u:i;return Nt(c.cb)?c.cb(i,s,B,{path:a,key:e.key,type:e.type}):B}if(!Ht(s)||!Rt(s)){var K=h?u:i;return Nt(c.cb)?c.cb(i,s,K,{path:a,key:e.key,type:e.type}):K}if(c.mergeArraysContainingStringsToBeEmpty&&(Ut(i)||Ut(s))){var P=h?u:[];return Nt(c.cb)?c.cb(i,s,P,{path:a,key:e.key,type:e.type}):P}if(c.hardArrayConcat){var R=h?u:i.concat(s);return Nt(c.cb)?c.cb(i,s,R,{path:a,key:e.key,type:e.type}):R}for(var C=[],D=0,V=Math.max(i.length,s.length);D<V;D++)a=e.path.length?"".concat(e.path,".").concat(D):"".concat(D),y(i[D])&&y(s[D])&&(c.mergeObjectsOnlyWhenKeysetMatches&&(f=i[D],p=s[D],0===Object.keys(f).length||0===Object.keys(p).length||Dt(Object.keys(f),Object.keys(p))||Dt(Object.keys(p),Object.keys(f)))||!c.mergeObjectsOnlyWhenKeysetMatches)?C.push(t({path:a,key:e.key,type:[zt(i),zt(s)]},i[D],s[D],c)):!c.oneToManyArrayObjectMerge||1!==i.length&&1!==s.length?c.concatInsteadOfMerging?(D<i.length&&C.push(i[D]),D<s.length&&C.push(s[D])):(D<i.length&&C.push(i[D]),D<s.length&&!X(i,s[D])&&C.push(s[D])):C.push(1===i.length?t({path:a,key:e.key,type:[zt(i),zt(s)]},i[0],s[D],c):t({path:a,key:e.key,type:[zt(i),zt(s)]},i[D],s[0],c));c.dedupeStringsInArrayValues&&C.every((function(t){return Vt(t)}))&&(C=Bt(C).sort()),i=l(C);var G=h?u:i;return Nt(c.cb)?c.cb(i,s,G,{path:e.path,key:e.key,type:e.type}):G}({key:null,path:"",type:[zt(t),zt(e)]},t,e,r)}}));
