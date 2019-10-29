/**
 * codsen-tokenizer
 * Tokenizer for mixed inputs aiming at broken code, especially HTML & CSS
 * Version: 1.0.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/codsen-tokenizer
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t=t||self).codsenTokenizer=r()}(this,(function(){"use strict";function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(r)}var r="[object Object]";var e,n,o=Function.prototype,c=Object.prototype,u=o.toString,i=c.hasOwnProperty,a=u.call(Object),f=c.toString,s=(e=Object.getPrototypeOf,n=Object,function(t){return e(n(t))});var l=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||f.call(t)!=r||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t))return!1;var e=s(t);if(null===e)return!0;var n=i.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&u.call(n)==a},p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t,r){t(r={exports:{}},r.exports)}((function(t,r){var e=200,n="__lodash_hash_undefined__",o=9007199254740991,c="[object Arguments]",u="[object Boolean]",i="[object Date]",a="[object Function]",f="[object GeneratorFunction]",s="[object Map]",l="[object Number]",y="[object Object]",h="[object RegExp]",b="[object Set]",_="[object String]",v="[object Symbol]",d="[object ArrayBuffer]",g="[object DataView]",j="[object Float32Array]",w="[object Float64Array]",m="[object Int8Array]",O="[object Int16Array]",S="[object Int32Array]",A="[object Uint8Array]",F="[object Uint8ClampedArray]",P="[object Uint16Array]",x="[object Uint32Array]",I=/\w*$/,T=/^\[object .+?Constructor\]$/,E=/^(?:0|[1-9]\d*)$/,k={};k[c]=k["[object Array]"]=k[d]=k[g]=k[u]=k[i]=k[j]=k[w]=k[m]=k[O]=k[S]=k[s]=k[l]=k[y]=k[h]=k[b]=k[_]=k[v]=k[A]=k[F]=k[P]=k[x]=!0,k["[object Error]"]=k[a]=k["[object WeakMap]"]=!1;var M="object"==typeof p&&p&&p.Object===Object&&p,W="object"==typeof self&&self&&self.Object===Object&&self,$=M||W||Function("return this")(),D=r&&!r.nodeType&&r,R=D&&t&&!t.nodeType&&t,B=R&&R.exports===D;function U(t,r){return t.set(r[0],r[1]),t}function H(t,r){return t.add(r),t}function N(t,r,e,n){var o=-1,c=t?t.length:0;for(n&&c&&(e=t[++o]);++o<c;)e=r(e,t[o],o,t);return e}function q(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function z(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e}function J(t,r){return function(e){return t(r(e))}}function C(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}var L,V=Array.prototype,G=Function.prototype,K=Object.prototype,Q=$["__core-js_shared__"],X=(L=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"",Y=G.toString,Z=K.hasOwnProperty,tt=K.toString,rt=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=B?$.Buffer:void 0,nt=$.Symbol,ot=$.Uint8Array,ct=J(Object.getPrototypeOf,Object),ut=Object.create,it=K.propertyIsEnumerable,at=V.splice,ft=Object.getOwnPropertySymbols,st=et?et.isBuffer:void 0,lt=J(Object.keys,Object),pt=Rt($,"DataView"),yt=Rt($,"Map"),ht=Rt($,"Promise"),bt=Rt($,"Set"),_t=Rt($,"WeakMap"),vt=Rt(Object,"create"),dt=qt(pt),gt=qt(yt),jt=qt(ht),wt=qt(bt),mt=qt(_t),Ot=nt?nt.prototype:void 0,St=Ot?Ot.valueOf:void 0;function At(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Ft(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Pt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function xt(t){this.__data__=new Ft(t)}function It(t,r){var e=Jt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ct(t)}(t)&&Z.call(t,"callee")&&(!it.call(t,"callee")||tt.call(t)==c)}(t)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],n=e.length,o=!!n;for(var u in t)!r&&!Z.call(t,u)||o&&("length"==u||Ht(u,n))||e.push(u);return e}function Tt(t,r,e){var n=t[r];Z.call(t,r)&&zt(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function Et(t,r){for(var e=t.length;e--;)if(zt(t[e][0],r))return e;return-1}function kt(t,r,e,n,o,p,T){var E;if(n&&(E=p?n(t,o,p,T):n(t)),void 0!==E)return E;if(!Gt(t))return t;var M=Jt(t);if(M){if(E=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&Z.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,E)}else{var W=Ut(t),$=W==a||W==f;if(Lt(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if(W==y||W==c||$&&!p){if(q(t))return p?t:{};if(E=function(t){return"function"!=typeof t.constructor||Nt(t)?{}:(r=ct(t),Gt(r)?ut(r):{});var r}($?{}:t),!r)return function(t,r){return $t(t,Bt(t),r)}(t,function(t,r){return t&&$t(r,Kt(r),t)}(E,t))}else{if(!k[W])return p?t:{};E=function(t,r,e,n){var o=t.constructor;switch(r){case d:return Wt(t);case u:case i:return new o(+t);case g:return function(t,r){var e=r?Wt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case j:case w:case m:case O:case S:case A:case F:case P:case x:return function(t,r){var e=r?Wt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case s:return function(t,r,e){return N(r?e(z(t),!0):z(t),U,new t.constructor)}(t,n,e);case l:case _:return new o(t);case h:return(f=new(a=t).constructor(a.source,I.exec(a))).lastIndex=a.lastIndex,f;case b:return function(t,r,e){return N(r?e(C(t),!0):C(t),H,new t.constructor)}(t,n,e);case v:return c=t,St?Object(St.call(c)):{}}var c;var a,f}(t,W,kt,r)}}T||(T=new xt);var D=T.get(t);if(D)return D;if(T.set(t,E),!M)var R=e?function(t){return function(t,r,e){var n=r(t);return Jt(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,Kt,Bt)}(t):Kt(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(R||t,(function(o,c){R&&(o=t[c=o]),Tt(E,c,kt(o,r,e,n,c,t,T))})),E}function Mt(t){return!(!Gt(t)||function(t){return!!X&&X in t}(t))&&(Vt(t)||q(t)?rt:T).test(qt(t))}function Wt(t){var r=new t.constructor(t.byteLength);return new ot(r).set(new ot(t)),r}function $t(t,r,e,n){e||(e={});for(var o=-1,c=r.length;++o<c;){var u=r[o],i=n?n(e[u],t[u],u,e,t):void 0;Tt(e,u,void 0===i?t[u]:i)}return e}function Dt(t,r){var e,n,o=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map}function Rt(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return Mt(e)?e:void 0}At.prototype.clear=function(){this.__data__=vt?vt(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var r=this.__data__;if(vt){var e=r[t];return e===n?void 0:e}return Z.call(r,t)?r[t]:void 0},At.prototype.has=function(t){var r=this.__data__;return vt?void 0!==r[t]:Z.call(r,t)},At.prototype.set=function(t,r){return this.__data__[t]=vt&&void 0===r?n:r,this},Ft.prototype.clear=function(){this.__data__=[]},Ft.prototype.delete=function(t){var r=this.__data__,e=Et(r,t);return!(e<0)&&(e==r.length-1?r.pop():at.call(r,e,1),!0)},Ft.prototype.get=function(t){var r=this.__data__,e=Et(r,t);return e<0?void 0:r[e][1]},Ft.prototype.has=function(t){return Et(this.__data__,t)>-1},Ft.prototype.set=function(t,r){var e=this.__data__,n=Et(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},Pt.prototype.clear=function(){this.__data__={hash:new At,map:new(yt||Ft),string:new At}},Pt.prototype.delete=function(t){return Dt(this,t).delete(t)},Pt.prototype.get=function(t){return Dt(this,t).get(t)},Pt.prototype.has=function(t){return Dt(this,t).has(t)},Pt.prototype.set=function(t,r){return Dt(this,t).set(t,r),this},xt.prototype.clear=function(){this.__data__=new Ft},xt.prototype.delete=function(t){return this.__data__.delete(t)},xt.prototype.get=function(t){return this.__data__.get(t)},xt.prototype.has=function(t){return this.__data__.has(t)},xt.prototype.set=function(t,r){var n=this.__data__;if(n instanceof Ft){var o=n.__data__;if(!yt||o.length<e-1)return o.push([t,r]),this;n=this.__data__=new Pt(o)}return n.set(t,r),this};var Bt=ft?J(ft,Object):function(){return[]},Ut=function(t){return tt.call(t)};function Ht(t,r){return!!(r=null==r?o:r)&&("number"==typeof t||E.test(t))&&t>-1&&t%1==0&&t<r}function Nt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||K)}function qt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function zt(t,r){return t===r||t!=t&&r!=r}(pt&&Ut(new pt(new ArrayBuffer(1)))!=g||yt&&Ut(new yt)!=s||ht&&"[object Promise]"!=Ut(ht.resolve())||bt&&Ut(new bt)!=b||_t&&"[object WeakMap]"!=Ut(new _t))&&(Ut=function(t){var r=tt.call(t),e=r==y?t.constructor:void 0,n=e?qt(e):void 0;if(n)switch(n){case dt:return g;case gt:return s;case jt:return"[object Promise]";case wt:return b;case mt:return"[object WeakMap]"}return r});var Jt=Array.isArray;function Ct(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Vt(t)}var Lt=st||function(){return!1};function Vt(t){var r=Gt(t)?tt.call(t):"";return r==a||r==f}function Gt(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function Kt(t){return Ct(t)?It(t):function(t){if(!Nt(t))return lt(t);var r=[];for(var e in Object(t))Z.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}t.exports=function(t){return kt(t,!0,!0)}}));var y="object"==typeof p&&p&&p.Object===Object&&p,h="object"==typeof self&&self&&self.Object===Object&&self,b=(y||h||Function("return this")()).Symbol;b&&b.toStringTag;var _={reportProgressFunc:null,reportProgressFuncFrom:0,reportProgressFuncTo:100};return function(r,e,n){if("string"!=typeof r)throw void 0===r?new Error("html-crush: [THROW_ID_01] the first input argument is completely missing! It should be given as string."):new Error('html-crush: [THROW_ID_02] the first input argument must be string! It was given as "'.concat(t(r),'", equal to:\n').concat(JSON.stringify(r,null,4)));if("function"!=typeof e)throw new Error("html-crush: [THROW_ID_03] the second input argument, callback function, should be a function but it was given as type ".concat(t(e),", equal to ").concat(JSON.stringify(e,null,4)));if(n&&!l(n))throw new Error("html-crush: [THROW_ID_04] the third input argument, options object, should be a plain object but it was given as type ".concat(t(n),", equal to ").concat(JSON.stringify(n,null,4)));var o,c=Object.assign({},_,n),u=0,i=r.length,a=Math.floor(i/2),f={},s={type:null,start:null,end:null};function p(){f=Object.assign({},s)}p();var y=[];function h(t){e(t),p()}for(var b=0;b<i;b++)c.reportProgressFunc&&(i>1e3&&i<2e3?b===a&&c.reportProgressFunc(Math.floor((c.reportProgressFuncTo-c.reportProgressFuncFrom)/2)):i>=2e3&&(o=c.reportProgressFuncFrom+Math.floor(b/i))!==u&&(u=o,c.reportProgressFunc(o))),"html"===f.type&&['"',"'"].includes(r[b])&&(y.length&&y[y.length-1]===r[b]?y.pop():y.push(r[b])),"<"===r[b]?(null!==f.start&&(f.end=b,h(f)),f.start=b,f.type="html"):null!==f.start&&f.end!==b||(f.end&&h(f),f.start=b,f.type="text"),"html"!==f.type||y.length||">"!==r[b]||(f.end=b+1),r[b+1]||null===f.start||(f.end=b+1,h(f))}}));