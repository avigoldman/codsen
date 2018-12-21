!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).rangesRegex=e()}(this,function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t,e){return t(e={exports:{}},e.exports),e.exports}var o=r(function(t,e){(e=t.exports=function(t){return t+e.suffix(+t)}).suffix=function(t){return t%=100,1===Math.floor(t/10)?"th":t%10==1?"st":t%10==2?"nd":t%10==3?"rd":"th"}}),i=(o.suffix,r(function(t,e){var r,o,i,a,c,u,s,f,p,l,h,y,g,d,v,_,m,w,b,j;t.exports=(r="function"==typeof Promise,o="object"==typeof self?self:n,i="undefined"!=typeof Symbol,a="undefined"!=typeof Map,c="undefined"!=typeof Set,u="undefined"!=typeof WeakMap,s="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,p=i&&void 0!==Symbol.iterator,l=i&&void 0!==Symbol.toStringTag,h=c&&"function"==typeof Set.prototype.entries,y=a&&"function"==typeof Map.prototype.entries,g=h&&Object.getPrototypeOf((new Set).entries()),d=y&&Object.getPrototypeOf((new Map).entries()),v=p&&"function"==typeof Array.prototype[Symbol.iterator],_=v&&Object.getPrototypeOf([][Symbol.iterator]()),m=p&&"function"==typeof String.prototype[Symbol.iterator],w=m&&Object.getPrototypeOf(""[Symbol.iterator]()),b=8,j=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===l||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var n=l&&t[Symbol.toStringTag];if("string"==typeof n)return n;var i=Object.getPrototypeOf(t);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":r&&i===Promise.prototype?"Promise":c&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":s&&i===WeakSet.prototype?"WeakSet":u&&i===WeakMap.prototype?"WeakMap":f&&i===DataView.prototype?"DataView":a&&i===d?"Map Iterator":c&&i===g?"Set Iterator":v&&i===_?"Array Iterator":m&&i===w?"String Iterator":null===i?"Object":Object.prototype.toString.call(t).slice(b,j)})}));function a(t,e,n){if(e!=e)return function(t,e,n,r){for(var o=t.length,i=n+(r?1:-1);r?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,u,n);for(var r=n-1,o=t.length;++r<o;)if(t[r]===e)return r;return-1}function c(t,e,n,r){for(var o=n-1,i=t.length;++o<i;)if(r(t[o],e))return o;return-1}function u(t){return t!=t}var s=Array.prototype.splice;function f(t,e,n,r){var o,i=r?c:a,u=-1,f=e.length,p=t;for(t===e&&(e=function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(e)),n&&(p=function(t,e){for(var n=-1,r=t?t.length:0,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}(t,(o=n,function(t){return o(t)})));++u<f;)for(var l=0,h=e[u],y=n?n(h):h;(l=i(p,y,l,r))>-1;)p!==t&&s.call(p,l,1),s.call(t,l,1);return t}var p=function(t,e){return t&&t.length&&e&&e.length?f(t,e):t},l=r(function(t,e){var r=200,o="__lodash_hash_undefined__",i=9007199254740991,a="[object Arguments]",c="[object Boolean]",u="[object Date]",s="[object Function]",f="[object GeneratorFunction]",p="[object Map]",l="[object Number]",h="[object Object]",y="[object RegExp]",g="[object Set]",d="[object String]",v="[object Symbol]",_="[object ArrayBuffer]",m="[object DataView]",w="[object Float32Array]",b="[object Float64Array]",j="[object Int8Array]",O="[object Int16Array]",$="[object Int32Array]",T="[object Uint8Array]",S="[object Uint8ClampedArray]",A="[object Uint16Array]",E="[object Uint32Array]",x=/\w*$/,I=/^\[object .+?Constructor\]$/,M=/^(?:0|[1-9]\d*)$/,N={};N[a]=N["[object Array]"]=N[_]=N[m]=N[c]=N[u]=N[w]=N[b]=N[j]=N[O]=N[$]=N[p]=N[l]=N[h]=N[y]=N[g]=N[d]=N[v]=N[T]=N[S]=N[A]=N[E]=!0,N["[object Error]"]=N[s]=N["[object WeakMap]"]=!1;var k="object"==typeof n&&n&&n.Object===Object&&n,L="object"==typeof self&&self&&self.Object===Object&&self,C=k||L||Function("return this")(),W=e&&!e.nodeType&&e,P=W&&t&&!t.nodeType&&t,R=P&&P.exports===W;function H(t,e){return t.set(e[0],e[1]),t}function V(t,e){return t.add(e),t}function J(t,e,n,r){var o=-1,i=t?t.length:0;for(r&&i&&(n=t[++o]);++o<i;)n=e(n,t[o],o,t);return n}function B(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function F(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function q(t,e){return function(n){return t(e(n))}}function Z(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}var U,z=Array.prototype,K=Function.prototype,Q=Object.prototype,D=C["__core-js_shared__"],G=(U=/[^.]+$/.exec(D&&D.keys&&D.keys.IE_PROTO||""))?"Symbol(src)_1."+U:"",X=K.toString,Y=Q.hasOwnProperty,tt=Q.toString,et=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nt=R?C.Buffer:void 0,rt=C.Symbol,ot=C.Uint8Array,it=q(Object.getPrototypeOf,Object),at=Object.create,ct=Q.propertyIsEnumerable,ut=z.splice,st=Object.getOwnPropertySymbols,ft=nt?nt.isBuffer:void 0,pt=q(Object.keys,Object),lt=Pt(C,"DataView"),ht=Pt(C,"Map"),yt=Pt(C,"Promise"),gt=Pt(C,"Set"),dt=Pt(C,"WeakMap"),vt=Pt(Object,"create"),_t=Bt(lt),mt=Bt(ht),wt=Bt(yt),bt=Bt(gt),jt=Bt(dt),Ot=rt?rt.prototype:void 0,$t=Ot?Ot.valueOf:void 0;function Tt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function St(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function At(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Et(t){this.__data__=new St(t)}function xt(t,e){var n=qt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Zt(t)}(t)&&Y.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==a)}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,o=!!r;for(var i in t)!e&&!Y.call(t,i)||o&&("length"==i||Vt(i,r))||n.push(i);return n}function It(t,e,n){var r=t[e];Y.call(t,e)&&Ft(r,n)&&(void 0!==n||e in t)||(t[e]=n)}function Mt(t,e){for(var n=t.length;n--;)if(Ft(t[n][0],e))return n;return-1}function Nt(t,e,n,r,o,i,I){var M;if(r&&(M=i?r(t,o,i,I):r(t)),void 0!==M)return M;if(!Kt(t))return t;var k=qt(t);if(k){if(M=function(t){var e=t.length,n=t.constructor(e);e&&"string"==typeof t[0]&&Y.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!e)return function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(t,M)}else{var L=Ht(t),C=L==s||L==f;if(Ut(t))return function(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,e);if(L==h||L==a||C&&!i){if(B(t))return i?t:{};if(M=function(t){return"function"!=typeof t.constructor||Jt(t)?{}:(e=it(t),Kt(e)?at(e):{});var e}(C?{}:t),!e)return function(t,e){return Ct(t,Rt(t),e)}(t,function(t,e){return t&&Ct(e,Qt(e),t)}(M,t))}else{if(!N[L])return i?t:{};M=function(t,e,n,r){var o=t.constructor;switch(e){case _:return Lt(t);case c:case u:return new o(+t);case m:return function(t,e){var n=e?Lt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,r);case w:case b:case j:case O:case $:case T:case S:case A:case E:return function(t,e){var n=e?Lt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,r);case p:return function(t,e,n){return J(e?n(F(t),!0):F(t),H,new t.constructor)}(t,r,n);case l:case d:return new o(t);case y:return(s=new(a=t).constructor(a.source,x.exec(a))).lastIndex=a.lastIndex,s;case g:return function(t,e,n){return J(e?n(Z(t),!0):Z(t),V,new t.constructor)}(t,r,n);case v:return i=t,$t?Object($t.call(i)):{}}var i;var a,s}(t,L,Nt,e)}}I||(I=new Et);var W=I.get(t);if(W)return W;if(I.set(t,M),!k)var P=n?function(t){return function(t,e,n){var r=e(t);return qt(t)?r:function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}(r,n(t))}(t,Qt,Rt)}(t):Qt(t);return function(t,e){for(var n=-1,r=t?t.length:0;++n<r&&!1!==e(t[n],n,t););}(P||t,function(o,i){P&&(o=t[i=o]),It(M,i,Nt(o,e,n,r,i,t,I))}),M}function kt(t){return!(!Kt(t)||(e=t,G&&G in e))&&(zt(t)||B(t)?et:I).test(Bt(t));var e}function Lt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Ct(t,e,n,r){n||(n={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=r?r(n[a],t[a],a,n,t):void 0;It(n,a,void 0===c?t[a]:c)}return n}function Wt(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function Pt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return kt(n)?n:void 0}Tt.prototype.clear=function(){this.__data__=vt?vt(null):{}},Tt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Tt.prototype.get=function(t){var e=this.__data__;if(vt){var n=e[t];return n===o?void 0:n}return Y.call(e,t)?e[t]:void 0},Tt.prototype.has=function(t){var e=this.__data__;return vt?void 0!==e[t]:Y.call(e,t)},Tt.prototype.set=function(t,e){return this.__data__[t]=vt&&void 0===e?o:e,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var e=this.__data__,n=Mt(e,t);return!(n<0||(n==e.length-1?e.pop():ut.call(e,n,1),0))},St.prototype.get=function(t){var e=this.__data__,n=Mt(e,t);return n<0?void 0:e[n][1]},St.prototype.has=function(t){return Mt(this.__data__,t)>-1},St.prototype.set=function(t,e){var n=this.__data__,r=Mt(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},At.prototype.clear=function(){this.__data__={hash:new Tt,map:new(ht||St),string:new Tt}},At.prototype.delete=function(t){return Wt(this,t).delete(t)},At.prototype.get=function(t){return Wt(this,t).get(t)},At.prototype.has=function(t){return Wt(this,t).has(t)},At.prototype.set=function(t,e){return Wt(this,t).set(t,e),this},Et.prototype.clear=function(){this.__data__=new St},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var n=this.__data__;if(n instanceof St){var o=n.__data__;if(!ht||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new At(o)}return n.set(t,e),this};var Rt=st?q(st,Object):function(){return[]},Ht=function(t){return tt.call(t)};function Vt(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||M.test(t))&&t>-1&&t%1==0&&t<e}function Jt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Q)}function Bt(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ft(t,e){return t===e||t!=t&&e!=e}(lt&&Ht(new lt(new ArrayBuffer(1)))!=m||ht&&Ht(new ht)!=p||yt&&"[object Promise]"!=Ht(yt.resolve())||gt&&Ht(new gt)!=g||dt&&"[object WeakMap]"!=Ht(new dt))&&(Ht=function(t){var e=tt.call(t),n=e==h?t.constructor:void 0,r=n?Bt(n):void 0;if(r)switch(r){case _t:return m;case mt:return p;case wt:return"[object Promise]";case bt:return g;case jt:return"[object WeakMap]"}return e});var qt=Array.isArray;function Zt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!zt(t)}var Ut=ft||function(){return!1};function zt(t){var e=Kt(t)?tt.call(t):"";return e==s||e==f}function Kt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Qt(t){return Zt(t)?xt(t):function(t){if(!Jt(t))return pt(t);var e=[];for(var n in Object(t))Y.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)}t.exports=function(t){return Nt(t,!0,!0)}}),h="[object Object]";var y,g,d=Function.prototype,v=Object.prototype,_=d.toString,m=v.hasOwnProperty,w=_.call(Object),b=v.toString,j=(y=Object.getPrototypeOf,g=Object,function(t){return y(g(t))});var O=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||b.call(t)!=h||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=j(t);if(null===e)return!0;var n=m.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&_.call(n)==w};const $=Array.isArray;function T(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function S(t,e){return function t(e,n,r){const o=l(e);let i,a,c,u,s;if((r=Object.assign({depth:-1,path:""},r)).depth+=1,$(o))for(i=0,a=o.length;i<a;i++){const e=`${r.path}.${i}`;void 0!==o[i]?(r.parent=l(o),c=t(n(o[i],void 0,Object.assign({},r,{path:T(e)})),n,Object.assign({},r,{path:T(e)})),Number.isNaN(c)&&i<o.length?(o.splice(i,1),i-=1):o[i]=c):o.splice(i,1)}else if(O(o))for(i=0,a=(u=Object.keys(o)).length;i<a;i++){s=u[i];const e=`${r.path}.${s}`;0===r.depth&&null!=s&&(r.topmostKey=s),r.parent=l(o),c=t(n(s,o[s],Object.assign({},r,{path:T(e)})),n,Object.assign({},r,{path:T(e)})),Number.isNaN(c)?delete o[s]:o[s]=c}return o}(t,e,{})}var A="__lodash_hash_undefined__",E=9007199254740991,x="[object Function]",I="[object GeneratorFunction]",M=/^\[object .+?Constructor\]$/,N="object"==typeof n&&n&&n.Object===Object&&n,k="object"==typeof self&&self&&self.Object===Object&&self,L=N||k||Function("return this")();function C(t,e){return!!(t?t.length:0)&&function(t,e,n){if(e!=e)return function(t,e,n,r){var o=t.length,i=n+(r?1:-1);for(;r?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,R,n);var r=n-1,o=t.length;for(;++r<o;)if(t[r]===e)return r;return-1}(t,e,0)>-1}function W(t,e,n){for(var r=-1,o=t?t.length:0;++r<o;)if(n(e,t[r]))return!0;return!1}function P(t,e){for(var n=-1,r=t?t.length:0,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}function R(t){return t!=t}function H(t){return function(e){return t(e)}}function V(t,e){return t.has(e)}var J,B=Array.prototype,F=Function.prototype,q=Object.prototype,Z=L["__core-js_shared__"],U=(J=/[^.]+$/.exec(Z&&Z.keys&&Z.keys.IE_PROTO||""))?"Symbol(src)_1."+J:"",z=F.toString,K=q.hasOwnProperty,Q=q.toString,D=RegExp("^"+z.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),G=B.splice,X=Math.max,Y=Math.min,tt=ft(L,"Map"),et=ft(Object,"create");function nt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function rt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function ot(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function it(t){var e=-1,n=t?t.length:0;for(this.__data__=new ot;++e<n;)this.add(t[e])}function at(t,e){for(var n,r,o=t.length;o--;)if((n=t[o][0])===(r=e)||n!=n&&r!=r)return o;return-1}function ct(t){return!(!lt(t)||(e=t,U&&U in e))&&(pt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?D:M).test(function(t){if(null!=t){try{return z.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function ut(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=E}(t.length)&&!pt(t)}(t)}(t)?t:[]}function st(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function ft(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return ct(n)?n:void 0}function pt(t){var e=lt(t)?Q.call(t):"";return e==x||e==I}function lt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}nt.prototype.clear=function(){this.__data__=et?et(null):{}},nt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},nt.prototype.get=function(t){var e=this.__data__;if(et){var n=e[t];return n===A?void 0:n}return K.call(e,t)?e[t]:void 0},nt.prototype.has=function(t){var e=this.__data__;return et?void 0!==e[t]:K.call(e,t)},nt.prototype.set=function(t,e){return this.__data__[t]=et&&void 0===e?A:e,this},rt.prototype.clear=function(){this.__data__=[]},rt.prototype.delete=function(t){var e=this.__data__,n=at(e,t);return!(n<0||(n==e.length-1?e.pop():G.call(e,n,1),0))},rt.prototype.get=function(t){var e=this.__data__,n=at(e,t);return n<0?void 0:e[n][1]},rt.prototype.has=function(t){return at(this.__data__,t)>-1},rt.prototype.set=function(t,e){var n=this.__data__,r=at(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},ot.prototype.clear=function(){this.__data__={hash:new nt,map:new(tt||rt),string:new nt}},ot.prototype.delete=function(t){return st(this,t).delete(t)},ot.prototype.get=function(t){return st(this,t).get(t)},ot.prototype.has=function(t){return st(this,t).has(t)},ot.prototype.set=function(t,e){return st(this,t).set(t,e),this},it.prototype.add=it.prototype.push=function(t){return this.__data__.set(t,A),this},it.prototype.has=function(t){return this.__data__.has(t)};var ht=function(t,e){return e=X(void 0===e?t.length-1:e,0),function(){for(var n=arguments,r=-1,o=X(n.length-e,0),i=Array(o);++r<o;)i[r]=n[e+r];r=-1;for(var a=Array(e+1);++r<e;)a[r]=n[r];return a[e]=i,function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}(t,this,a)}}(function(t){var e=P(t,ut);return e.length&&e[0]===t[0]?function(t,e,n){for(var r=n?W:C,o=t[0].length,i=t.length,a=i,c=Array(i),u=1/0,s=[];a--;){var f=t[a];a&&e&&(f=P(f,H(e))),u=Y(f.length,u),c[a]=!n&&(e||o>=120&&f.length>=120)?new it(a&&f):void 0}f=t[0];var p=-1,l=c[0];t:for(;++p<o&&s.length<u;){var h=f[p],y=e?e(h):h;if(h=n||0!==h?h:0,!(l?V(l,y):r(s,y,n))){for(a=i;--a;){var g=c[a];if(!(g?V(g,y):r(t[a],y,n)))continue t}l&&l.push(y),s.push(h)}}return s}(e):[]});function yt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var gt=r(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function n(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var n in t)if(e(t,n))return!1;return!0}return!1}function r(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function i(t){var e=parseInt(t);return e.toString()===t?e:t}function a(t){t=t||{};var a=function(t){return Object.keys(a).reduce(function(e,n){return"create"===n?e:("function"==typeof a[n]&&(e[n]=a[n].bind(a,t)),e)},{})};function c(n,r){return t.includeInheritedProps||"number"==typeof r&&Array.isArray(n)||e(n,r)}function u(t,e){if(c(t,e))return t[e]}function s(t,e,n,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return s(t,e.split(".").map(i),n,r);var o=e[0],a=u(t,o);return 1===e.length?(void 0!==a&&r||(t[o]=n),a):(void 0===a&&("number"==typeof e[1]?t[o]=[]:t[o]={}),s(t[o],e.slice(1),n,r))}return a.has=function(n,r){if("number"==typeof r?r=[r]:"string"==typeof r&&(r=r.split(".")),!r||0===r.length)return!!n;for(var a=0;a<r.length;a++){var c=i(r[a]);if(!("number"==typeof c&&o(n)&&c<n.length||(t.includeInheritedProps?c in Object(n):e(n,c))))return!1;n=n[c]}return!0},a.ensureExists=function(t,e,n){return s(t,e,n,!0)},a.set=function(t,e,n,r){return s(t,e,n,r)},a.insert=function(t,e,n,r){var i=a.get(t,e);r=~~r,o(i)||(i=[],a.set(t,e,i)),i.splice(r,0,n)},a.empty=function(t,e){var i,u;if(!n(e)&&null!=t&&(i=a.get(t,e))){if("string"==typeof i)return a.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===r(t)}(i))return a.set(t,e,!1);if("number"==typeof i)return a.set(t,e,0);if(o(i))i.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===r(t)}(i))return a.set(t,e,null);for(u in i)c(i,u)&&delete i[u]}}},a.push=function(t,e){var n=a.get(t,e);o(n)||(n=[],a.set(t,e,n)),n.push.apply(n,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,n){for(var r,o=0,i=e.length;o<i;o++)if(void 0!==(r=a.get(t,e[o])))return r;return n},a.get=function(t,e,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return n;if("string"==typeof e)return a.get(t,e.split("."),n);var r=i(e[0]),o=u(t,r);return void 0===o?n:1===e.length?o:a.get(t[r],e.slice(1),n)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(n(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var r=i(e[0]);return c(t,r)?1!==e.length?a.del(t[r],e.slice(1)):(o(t)?t.splice(r,1):delete t[r],t):t},a}var c=a();return c.create=a,c.withInheritedProps=a({includeInheritedProps:!0}),c}()}),dt=function(t){var e=t%100;if(e>=10&&e<=20)return"th";var n=t%10;return 1===n?"st":2===n?"nd":3===n?"rd":"th"};function vt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return t+dt(t)}vt.indicator=dt;var _t=vt,mt=/[|\\{}()[\]^$+*?.]/g,wt=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(mt,"\\$&")};const bt=new Map;function jt(t,e){const n=Object.assign({caseSensitive:!1},e),r=t+JSON.stringify(n);if(bt.has(r))return bt.get(r);const o="!"===t[0];o&&(t=t.slice(1)),t=wt(t).replace(/\\\*/g,".*");const i=new RegExp(`^${t}$`,n.caseSensitive?"":"i");return i.negated=o,bt.set(r,i),i}var Ot=(t,e,n)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const r="!"===e[0][0];e=e.map(t=>jt(t,n));const o=[];for(const n of t){let t=r;for(const r of e)r.test(n)&&(t=!r.negated);t&&o.push(n)}return o};function $t(t,e,n){return function t(e,n,r,o=!0){function a(t){return null!=t}function c(t){return"Object"===i(t)}function u(t,e){return e=yt(e),Array.from(t).filter(t=>!e.some(e=>Ot.isMatch(t,e,{caseSensitive:!0})))}function s(t){if(t.includes(".")){const e=t.split(".");return e.pop(),e.join(".")}return t}const f=["any","anything","every","everything","all","whatever","whatevs"],l=Array.isArray;if(!a(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const h={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let y;if(y=a(r)&&c(r)?Object.assign({},h,r):Object.assign({},h),a(y.ignoreKeys)&&y.ignoreKeys?y.ignoreKeys=yt(y.ignoreKeys):y.ignoreKeys=[],a(y.ignorePaths)&&y.ignorePaths?y.ignorePaths=yt(y.ignorePaths):y.ignorePaths=[],a(y.acceptArraysIgnore)&&y.acceptArraysIgnore?y.acceptArraysIgnore=yt(y.acceptArraysIgnore):y.acceptArraysIgnore=[],y.msg="string"==typeof y.msg?y.msg.trim():y.msg,":"===y.msg[y.msg.length-1]&&(y.msg=y.msg.slice(0,y.msg.length-1).trim()),y.schema&&(Object.keys(y.schema).forEach(t=>{if(c(y.schema[t])){const e={};S(y.schema[t],(n,r,o)=>{const i=void 0!==r?r:n;return l(i)||c(i)||(e[`${t}.${o.path}`]=i),i}),delete y.schema[t],y.schema=Object.assign(y.schema,e)}}),Object.keys(y.schema).forEach(t=>{l(y.schema[t])||(y.schema[t]=[y.schema[t]]),y.schema[t]=y.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),a(n)||(n={}),o&&t(y,h,{enforceStrictKeyset:!1},!1),y.enforceStrictKeyset)if(a(y.schema)&&Object.keys(y.schema).length>0){if(0!==u(p(Object.keys(e),Object.keys(n).concat(Object.keys(y.schema))),y.ignoreKeys).length){const t=p(Object.keys(e),Object.keys(n).concat(Object.keys(y.schema)));throw new TypeError(`${y.msg}: ${y.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(a(n)&&Object.keys(n).length>0))throw new TypeError(`${y.msg}: Both ${y.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==u(p(Object.keys(e),Object.keys(n)),y.ignoreKeys).length){const t=p(Object.keys(e),Object.keys(n));throw new TypeError(`${y.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==u(p(Object.keys(n),Object.keys(e)),y.ignoreKeys).length){const t=p(Object.keys(n),Object.keys(e));throw new TypeError(`${y.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const g=[];S(e,(t,e,r)=>{const o=void 0!==e?e:t;if(l(g)&&g.length&&g.some(t=>r.path.startsWith(t)))return o;if(!(!y.enforceStrictKeyset||!c(o)&&!l(o)&&l(r.parent)||a(y.schema)&&c(y.schema)&&(!c(y.schema)||Object.keys(y.schema).length&&(l(r.parent)||Object.prototype.hasOwnProperty.call(y.schema,r.path))&&(!l(r.parent)||gt.has(y.schema,s(r.path))))||a(n)&&c(n)&&(!c(n)||Object.keys(n).length&&(y.acceptArrays||gt.has(n,r.path))&&(!y.acceptArrays||(l(r.parent)||gt.has(n,r.path))&&(!l(r.parent)||gt.has(n,s(r.path)))))))throw new TypeError(`${y.msg}: ${y.optsVarName}.${r.path} is neither covered by reference object (second input argument), nor ${y.optsVarName}.schema! To stop this error, turn off ${y.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${y.optsVarName}.schema).`);if(c(y.schema)&&Object.keys(y.schema).length&&Object.prototype.hasOwnProperty.call(y.schema,r.path)){const t=yt(y.schema[r.path]).map(String).map(t=>t.toLowerCase());if(gt.set(y.schema,r.path,t),ht(t,f).length)g.push(r.path);else if(!0!==o&&!1!==o&&!t.includes(i(o).toLowerCase())||(!0===o||!1===o)&&!t.includes(String(o))&&!t.includes("boolean")){if(!l(o)||!y.acceptArrays)throw new TypeError(`${y.msg}: ${y.optsVarName}.${r.path} was customised to ${"string"!==i(o)?'"':""}${JSON.stringify(o,null,0)}${"string"!==i(o)?'"':""} (type: ${i(o).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,n=o.length;e<n;e++)if(!t.includes(i(o[e]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${r.path}.${e}, the ${_t(e+1)} element (equal to ${JSON.stringify(o[e],null,0)}) is of a type ${i(o[e]).toLowerCase()}, but only the following are allowed by the ${y.optsVarName}.schema: ${t.join(", ")}`)}}else if(a(n)&&Object.keys(n).length&&gt.has(n,r.path)&&i(o)!==i(gt.get(n,r.path))&&(!y.ignoreKeys||!y.ignoreKeys.some(e=>Ot.isMatch(t,e)))&&(!y.ignorePaths||!y.ignorePaths.some(t=>Ot.isMatch(r.path,t)))){const e=gt.get(n,r.path);if(!y.acceptArrays||!l(o)||y.acceptArraysIgnore.includes(t))throw new TypeError(`${y.msg}: ${y.optsVarName}.${r.path} was customised to ${"string"===i(o).toLowerCase()?"":'"'}${JSON.stringify(o,null,0)}${"string"===i(o).toLowerCase()?"":'"'} which is not ${i(e).toLowerCase()} but ${i(o).toLowerCase()}`);if(!o.every(e=>i(e).toLowerCase()===i(n[t]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${r.path} was customised to be array, but not all of its elements are ${i(n[t]).toLowerCase()}-type`)}return o})}(t,e,n)}Ot.isMatch=((t,e,n)=>{const r=jt(e,n),o=r.test(t);return r.negated?!o:o});const Tt=Array.isArray;function St(t,n){if(!Tt(t))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(0===t.length)return t;const r={strictlyTwoElementsInRangeArrays:!1,progressFn:null},i=Object.assign({},r,n);let a,c;if($t(i,r,{msg:"ranges-sort: [THROW_ID_02*]",schema:{progressFn:["function","false","null"]}}),i.strictlyTwoElementsInRangeArrays&&!t.every((t,e)=>2===t.length||(a=e,c=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${o(a)} range (${JSON.stringify(t[a],null,4)}) has not two but ${c} elements!`);if(!t.every((t,n)=>!(!e(t[0],{includeZero:!0})||!e(t[1],{includeZero:!0}))||(a=n,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${o(a)} range (${JSON.stringify(t[a],null,4)}) does not consist of only natural numbers!`);const u=t.length*t.length;let s=0;return Array.from(t).sort((t,e)=>(i.progressFn&&(s++,i.progressFn(Math.floor(100*s/u))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1))}var At=r(function(t,e){var r="[object RegExp]",o="object"==typeof n&&n&&n.Object===Object&&n,i=e&&!e.nodeType&&e,a=i&&t&&!t.nodeType&&t,c=a&&a.exports===i&&o.process,u=function(){try{return c&&c.binding("util")}catch(t){}}(),s=u&&u.isRegExp;var f=Object.prototype.toString;var p,l=s?(p=s,function(t){return p(t)}):function(t){return function(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}(t)&&f.call(t)==r};t.exports=l});return function(e,n,r){if(void 0===e)throw new TypeError("ranges-regex: [THROW_ID_01] The first input's argument must be a regex object! Currently it is missing!");if(!At(e))throw new TypeError("ranges-regex: [THROW_ID_02] The first input's argument must be a regex object! Currently its type is: ".concat(t(e),", equal to: ").concat(JSON.stringify(e,null,4)));if("string"!=typeof n)throw new TypeError("ranges-regex: [THROW_ID_03] The second input's argument must be a string! Currently its type is: ".concat(t(n),", equal to: ").concat(JSON.stringify(n,null,4)));if(null!=r&&"string"!=typeof r)throw new TypeError("ranges-regex: [THROW_ID_04] The third input's argument must be a string or null! Currently its type is: ".concat(t(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(0===n.length)return null;var o,i=[];if(null===r||"string"==typeof r&&r.length>0)for(;null!==(o=e.exec(n));)i.push([e.lastIndex-o[0].length,e.lastIndex,r]);else for(;null!==(o=e.exec(n));)i.push([e.lastIndex-o[0].length,e.lastIndex]);return i.length?function(t,e){if(!Array.isArray(t))return t;if(e&&"function"!=typeof e)throw new Error(`ranges-merge: [THROW_ID_01] the second input argument must be a function! It was given of a type: "${typeof e}", equal to ${JSON.stringify(e,null,4)}`);const n=l(t).filter(t=>void 0!==t[2]||t[0]!==t[1]);let r,o,i;const a=(r=e?St(n,{progressFn:t=>{(i=Math.floor(t/5))!==o&&(o=i,e(i))}}):St(n)).length-1;for(let t=a;t>0;t--)e&&(i=Math.floor(78*(1-t/a))+21)!==o&&i>o&&(o=i,e(i)),(r[t][0]<=r[t-1][0]||r[t][0]<=r[t-1][1])&&(r[t-1][0]=Math.min(r[t][0],r[t-1][0]),r[t-1][1]=Math.max(r[t][1],r[t-1][1]),void 0!==r[t][2]&&(r[t-1][0]>=r[t][0]||r[t-1][1]<=r[t][1])&&null!==r[t-1][2]&&(null===r[t][2]&&null!==r[t-1][2]?r[t-1][2]=null:void 0!==r[t-1][2]?r[t-1][2]+=r[t][2]:r[t-1][2]=r[t][2]),r.splice(t,1),t=r.length);return r}(i):null}});
