!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).checkTypesMini=e()}(this,function(){"use strict";var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var n=e(function(e,n){var r,o,a,c,i,f,u,s,p,h,l,y,g,v,d,_,m,w,b,j;e.exports=(r="function"==typeof Promise,o="object"==typeof self?self:t,a="undefined"!=typeof Symbol,c="undefined"!=typeof Map,i="undefined"!=typeof Set,f="undefined"!=typeof WeakMap,u="undefined"!=typeof WeakSet,s="undefined"!=typeof DataView,p=a&&void 0!==Symbol.iterator,h=a&&void 0!==Symbol.toStringTag,l=i&&"function"==typeof Set.prototype.entries,y=c&&"function"==typeof Map.prototype.entries,g=l&&Object.getPrototypeOf((new Set).entries()),v=y&&Object.getPrototypeOf((new Map).entries()),d=p&&"function"==typeof Array.prototype[Symbol.iterator],_=d&&Object.getPrototypeOf([][Symbol.iterator]()),m=p&&"function"==typeof String.prototype[Symbol.iterator],w=m&&Object.getPrototypeOf(""[Symbol.iterator]()),b=8,j=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===h||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var n=h&&t[Symbol.toStringTag];if("string"==typeof n)return n;var a=Object.getPrototypeOf(t);return a===RegExp.prototype?"RegExp":a===Date.prototype?"Date":r&&a===Promise.prototype?"Promise":i&&a===Set.prototype?"Set":c&&a===Map.prototype?"Map":u&&a===WeakSet.prototype?"WeakSet":f&&a===WeakMap.prototype?"WeakMap":s&&a===DataView.prototype?"DataView":c&&a===v?"Map Iterator":i&&a===g?"Set Iterator":d&&a===_?"Array Iterator":m&&a===w?"String Iterator":null===a?"Object":Object.prototype.toString.call(t).slice(b,j)})});function r(t,e,n){if(e!=e)return function(t,e,n,r){for(var o=t.length,a=n+(r?1:-1);r?a--:++a<o;)if(e(t[a],a,t))return a;return-1}(t,a,n);for(var r=n-1,o=t.length;++r<o;)if(t[r]===e)return r;return-1}function o(t,e,n,r){for(var o=n-1,a=t.length;++o<a;)if(r(t[o],e))return o;return-1}function a(t){return t!=t}var c=Array.prototype.splice;function i(t,e,n,a){var i,f=a?o:r,u=-1,s=e.length,p=t;for(t===e&&(e=function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(e)),n&&(p=function(t,e){for(var n=-1,r=t?t.length:0,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}(t,(i=n,function(t){return i(t)})));++u<s;)for(var h=0,l=e[u],y=n?n(l):l;(h=f(p,y,h,a))>-1;)p!==t&&c.call(p,h,1),c.call(t,h,1);return t}var f=function(t,e){return t&&t.length&&e&&e.length?i(t,e):t},u=e(function(e,n){var r=200,o="__lodash_hash_undefined__",a=9007199254740991,c="[object Arguments]",i="[object Boolean]",f="[object Date]",u="[object Function]",s="[object GeneratorFunction]",p="[object Map]",h="[object Number]",l="[object Object]",y="[object RegExp]",g="[object Set]",v="[object String]",d="[object Symbol]",_="[object ArrayBuffer]",m="[object DataView]",w="[object Float32Array]",b="[object Float64Array]",j="[object Int8Array]",O="[object Int16Array]",A="[object Int32Array]",S="[object Uint8Array]",T="[object Uint8ClampedArray]",E="[object Uint16Array]",M="[object Uint32Array]",k=/\w*$/,N=/^\[object .+?Constructor\]$/,$=/^(?:0|[1-9]\d*)$/,I={};I[c]=I["[object Array]"]=I[_]=I[m]=I[i]=I[f]=I[w]=I[b]=I[j]=I[O]=I[A]=I[p]=I[h]=I[l]=I[y]=I[g]=I[v]=I[d]=I[S]=I[T]=I[E]=I[M]=!0,I["[object Error]"]=I[u]=I["[object WeakMap]"]=!1;var L="object"==typeof t&&t&&t.Object===Object&&t,x="object"==typeof self&&self&&self.Object===Object&&self,P=L||x||Function("return this")(),C=n&&!n.nodeType&&n,V=C&&e&&!e.nodeType&&e,W=V&&V.exports===C;function B(t,e){return t.set(e[0],e[1]),t}function H(t,e){return t.add(e),t}function R(t,e,n,r){var o=-1,a=t?t.length:0;for(r&&a&&(n=t[++o]);++o<a;)n=e(n,t[o],o,t);return n}function U(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function J(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function F(t,e){return function(n){return t(e(n))}}function q(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}var z,K=Array.prototype,Q=Function.prototype,G=Object.prototype,X=P["__core-js_shared__"],Z=(z=/[^.]+$/.exec(X&&X.keys&&X.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"",Y=Q.toString,D=G.hasOwnProperty,tt=G.toString,et=RegExp("^"+Y.call(D).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nt=W?P.Buffer:void 0,rt=P.Symbol,ot=P.Uint8Array,at=F(Object.getPrototypeOf,Object),ct=Object.create,it=G.propertyIsEnumerable,ft=K.splice,ut=Object.getOwnPropertySymbols,st=nt?nt.isBuffer:void 0,pt=F(Object.keys,Object),ht=Vt(P,"DataView"),lt=Vt(P,"Map"),yt=Vt(P,"Promise"),gt=Vt(P,"Set"),vt=Vt(P,"WeakMap"),dt=Vt(Object,"create"),_t=Ut(ht),mt=Ut(lt),wt=Ut(yt),bt=Ut(gt),jt=Ut(vt),Ot=rt?rt.prototype:void 0,At=Ot?Ot.valueOf:void 0;function St(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Tt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Et(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Mt(t){this.__data__=new Tt(t)}function kt(t,e){var n=Ft(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&qt(t)}(t)&&D.call(t,"callee")&&(!it.call(t,"callee")||tt.call(t)==c)}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,o=!!r;for(var a in t)!e&&!D.call(t,a)||o&&("length"==a||Ht(a,r))||n.push(a);return n}function Nt(t,e,n){var r=t[e];D.call(t,e)&&Jt(r,n)&&(void 0!==n||e in t)||(t[e]=n)}function $t(t,e){for(var n=t.length;n--;)if(Jt(t[n][0],e))return n;return-1}function It(t,e,n,r,o,a,N){var $;if(r&&($=a?r(t,o,a,N):r(t)),void 0!==$)return $;if(!Qt(t))return t;var L=Ft(t);if(L){if($=function(t){var e=t.length,n=t.constructor(e);e&&"string"==typeof t[0]&&D.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!e)return function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(t,$)}else{var x=Bt(t),P=x==u||x==s;if(zt(t))return function(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,e);if(x==l||x==c||P&&!a){if(U(t))return a?t:{};if($=function(t){return"function"!=typeof t.constructor||Rt(t)?{}:(e=at(t),Qt(e)?ct(e):{});var e}(P?{}:t),!e)return function(t,e){return Pt(t,Wt(t),e)}(t,function(t,e){return t&&Pt(e,Gt(e),t)}($,t))}else{if(!I[x])return a?t:{};$=function(t,e,n,r){var o=t.constructor;switch(e){case _:return xt(t);case i:case f:return new o(+t);case m:return function(t,e){var n=e?xt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,r);case w:case b:case j:case O:case A:case S:case T:case E:case M:return function(t,e){var n=e?xt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,r);case p:return function(t,e,n){return R(e?n(J(t),!0):J(t),B,new t.constructor)}(t,r,n);case h:case v:return new o(t);case y:return(u=new(c=t).constructor(c.source,k.exec(c))).lastIndex=c.lastIndex,u;case g:return function(t,e,n){return R(e?n(q(t),!0):q(t),H,new t.constructor)}(t,r,n);case d:return a=t,At?Object(At.call(a)):{}}var a;var c,u}(t,x,It,e)}}N||(N=new Mt);var C=N.get(t);if(C)return C;if(N.set(t,$),!L)var V=n?function(t){return function(t,e,n){var r=e(t);return Ft(t)?r:function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}(r,n(t))}(t,Gt,Wt)}(t):Gt(t);return function(t,e){for(var n=-1,r=t?t.length:0;++n<r&&!1!==e(t[n],n,t););}(V||t,function(o,a){V&&(o=t[a=o]),Nt($,a,It(o,e,n,r,a,t,N))}),$}function Lt(t){return!(!Qt(t)||(e=t,Z&&Z in e))&&(Kt(t)||U(t)?et:N).test(Ut(t));var e}function xt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Pt(t,e,n,r){n||(n={});for(var o=-1,a=e.length;++o<a;){var c=e[o],i=r?r(n[c],t[c],c,n,t):void 0;Nt(n,c,void 0===i?t[c]:i)}return n}function Ct(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function Vt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Lt(n)?n:void 0}St.prototype.clear=function(){this.__data__=dt?dt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var e=this.__data__;if(dt){var n=e[t];return n===o?void 0:n}return D.call(e,t)?e[t]:void 0},St.prototype.has=function(t){var e=this.__data__;return dt?void 0!==e[t]:D.call(e,t)},St.prototype.set=function(t,e){return this.__data__[t]=dt&&void 0===e?o:e,this},Tt.prototype.clear=function(){this.__data__=[]},Tt.prototype.delete=function(t){var e=this.__data__,n=$t(e,t);return!(n<0||(n==e.length-1?e.pop():ft.call(e,n,1),0))},Tt.prototype.get=function(t){var e=this.__data__,n=$t(e,t);return n<0?void 0:e[n][1]},Tt.prototype.has=function(t){return $t(this.__data__,t)>-1},Tt.prototype.set=function(t,e){var n=this.__data__,r=$t(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},Et.prototype.clear=function(){this.__data__={hash:new St,map:new(lt||Tt),string:new St}},Et.prototype.delete=function(t){return Ct(this,t).delete(t)},Et.prototype.get=function(t){return Ct(this,t).get(t)},Et.prototype.has=function(t){return Ct(this,t).has(t)},Et.prototype.set=function(t,e){return Ct(this,t).set(t,e),this},Mt.prototype.clear=function(){this.__data__=new Tt},Mt.prototype.delete=function(t){return this.__data__.delete(t)},Mt.prototype.get=function(t){return this.__data__.get(t)},Mt.prototype.has=function(t){return this.__data__.has(t)},Mt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Tt){var o=n.__data__;if(!lt||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new Et(o)}return n.set(t,e),this};var Wt=ut?F(ut,Object):function(){return[]},Bt=function(t){return tt.call(t)};function Ht(t,e){return!!(e=null==e?a:e)&&("number"==typeof t||$.test(t))&&t>-1&&t%1==0&&t<e}function Rt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||G)}function Ut(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Jt(t,e){return t===e||t!=t&&e!=e}(ht&&Bt(new ht(new ArrayBuffer(1)))!=m||lt&&Bt(new lt)!=p||yt&&"[object Promise]"!=Bt(yt.resolve())||gt&&Bt(new gt)!=g||vt&&"[object WeakMap]"!=Bt(new vt))&&(Bt=function(t){var e=tt.call(t),n=e==l?t.constructor:void 0,r=n?Ut(n):void 0;if(r)switch(r){case _t:return m;case mt:return p;case wt:return"[object Promise]";case bt:return g;case jt:return"[object WeakMap]"}return e});var Ft=Array.isArray;function qt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=a}(t.length)&&!Kt(t)}var zt=st||function(){return!1};function Kt(t){var e=Qt(t)?tt.call(t):"";return e==u||e==s}function Qt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Gt(t){return qt(t)?kt(t):function(t){if(!Rt(t))return pt(t);var e=[];for(var n in Object(t))D.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)}e.exports=function(t){return It(t,!0,!0)}}),s="[object Object]";var p,h,l=Function.prototype,y=Object.prototype,g=l.toString,v=y.hasOwnProperty,d=g.call(Object),_=y.toString,m=(p=Object.getPrototypeOf,h=Object,function(t){return p(h(t))});var w=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||_.call(t)!=s||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=m(t);if(null===e)return!0;var n=v.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&g.call(n)==d};const b=Array.isArray;function j(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function O(t,e){return function t(e,n,r){const o=u(e);let a,c,i,f,s;if((r=Object.assign({depth:-1,path:""},r)).depth+=1,b(o))for(a=0,c=o.length;a<c;a++){const e=`${r.path}.${a}`;void 0!==o[a]?(r.parent=u(o),i=t(n(o[a],void 0,Object.assign({},r,{path:j(e)})),n,Object.assign({},r,{path:j(e)})),Number.isNaN(i)&&a<o.length?(o.splice(a,1),a-=1):o[a]=i):o.splice(a,1)}else if(w(o))for(a=0,c=(f=Object.keys(o)).length;a<c;a++){s=f[a];const e=`${r.path}.${s}`;0===r.depth&&null!=s&&(r.topmostKey=s),r.parent=u(o),i=t(n(s,o[s],Object.assign({},r,{path:j(e)})),n,Object.assign({},r,{path:j(e)})),Number.isNaN(i)?delete o[s]:o[s]=i}return o}(t,e,{})}var A="__lodash_hash_undefined__",S=9007199254740991,T="[object Function]",E="[object GeneratorFunction]",M=/^\[object .+?Constructor\]$/,k="object"==typeof t&&t&&t.Object===Object&&t,N="object"==typeof self&&self&&self.Object===Object&&self,$=k||N||Function("return this")();function I(t,e){return!!(t?t.length:0)&&function(t,e,n){if(e!=e)return function(t,e,n,r){var o=t.length,a=n+(r?1:-1);for(;r?a--:++a<o;)if(e(t[a],a,t))return a;return-1}(t,P,n);var r=n-1,o=t.length;for(;++r<o;)if(t[r]===e)return r;return-1}(t,e,0)>-1}function L(t,e,n){for(var r=-1,o=t?t.length:0;++r<o;)if(n(e,t[r]))return!0;return!1}function x(t,e){for(var n=-1,r=t?t.length:0,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}function P(t){return t!=t}function C(t){return function(e){return t(e)}}function V(t,e){return t.has(e)}var W,B=Array.prototype,H=Function.prototype,R=Object.prototype,U=$["__core-js_shared__"],J=(W=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||""))?"Symbol(src)_1."+W:"",F=H.toString,q=R.hasOwnProperty,z=R.toString,K=RegExp("^"+F.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Q=B.splice,G=Math.max,X=Math.min,Z=it($,"Map"),Y=it(Object,"create");function D(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function tt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function et(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function nt(t){var e=-1,n=t?t.length:0;for(this.__data__=new et;++e<n;)this.add(t[e])}function rt(t,e){for(var n,r,o=t.length;o--;)if((n=t[o][0])===(r=e)||n!=n&&r!=r)return o;return-1}function ot(t){return!(!ut(t)||(e=t,J&&J in e))&&(ft(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?K:M).test(function(t){if(null!=t){try{return F.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function at(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=S}(t.length)&&!ft(t)}(t)}(t)?t:[]}function ct(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function it(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return ot(n)?n:void 0}function ft(t){var e=ut(t)?z.call(t):"";return e==T||e==E}function ut(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}D.prototype.clear=function(){this.__data__=Y?Y(null):{}},D.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},D.prototype.get=function(t){var e=this.__data__;if(Y){var n=e[t];return n===A?void 0:n}return q.call(e,t)?e[t]:void 0},D.prototype.has=function(t){var e=this.__data__;return Y?void 0!==e[t]:q.call(e,t)},D.prototype.set=function(t,e){return this.__data__[t]=Y&&void 0===e?A:e,this},tt.prototype.clear=function(){this.__data__=[]},tt.prototype.delete=function(t){var e=this.__data__,n=rt(e,t);return!(n<0||(n==e.length-1?e.pop():Q.call(e,n,1),0))},tt.prototype.get=function(t){var e=this.__data__,n=rt(e,t);return n<0?void 0:e[n][1]},tt.prototype.has=function(t){return rt(this.__data__,t)>-1},tt.prototype.set=function(t,e){var n=this.__data__,r=rt(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},et.prototype.clear=function(){this.__data__={hash:new D,map:new(Z||tt),string:new D}},et.prototype.delete=function(t){return ct(this,t).delete(t)},et.prototype.get=function(t){return ct(this,t).get(t)},et.prototype.has=function(t){return ct(this,t).has(t)},et.prototype.set=function(t,e){return ct(this,t).set(t,e),this},nt.prototype.add=nt.prototype.push=function(t){return this.__data__.set(t,A),this},nt.prototype.has=function(t){return this.__data__.has(t)};var st=function(t,e){return e=G(void 0===e?t.length-1:e,0),function(){for(var n=arguments,r=-1,o=G(n.length-e,0),a=Array(o);++r<o;)a[r]=n[e+r];r=-1;for(var c=Array(e+1);++r<e;)c[r]=n[r];return c[e]=a,function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}(t,this,c)}}(function(t){var e=x(t,at);return e.length&&e[0]===t[0]?function(t,e,n){for(var r=n?L:I,o=t[0].length,a=t.length,c=a,i=Array(a),f=1/0,u=[];c--;){var s=t[c];c&&e&&(s=x(s,C(e))),f=X(s.length,f),i[c]=!n&&(e||o>=120&&s.length>=120)?new nt(c&&s):void 0}s=t[0];var p=-1,h=i[0];t:for(;++p<o&&u.length<f;){var l=s[p],y=e?e(l):l;if(l=n||0!==l?l:0,!(h?V(h,y):r(u,y,n))){for(c=a;--c;){var g=i[c];if(!(g?V(g,y):r(t[c],y,n)))continue t}h&&h.push(y),u.push(l)}}return u}(e):[]});function pt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var ht=e(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function n(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var n in t)if(e(t,n))return!1;return!0}return!1}function r(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function a(t){var e=parseInt(t);return e.toString()===t?e:t}function c(t){t=t||{};var c=function(t){return Object.keys(c).reduce(function(e,n){return"create"===n?e:("function"==typeof c[n]&&(e[n]=c[n].bind(c,t)),e)},{})};function i(n,r){return t.includeInheritedProps||"number"==typeof r&&Array.isArray(n)||e(n,r)}function f(t,e){if(i(t,e))return t[e]}function u(t,e,n,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return u(t,e.split(".").map(a),n,r);var o=e[0],c=f(t,o);return 1===e.length?(void 0!==c&&r||(t[o]=n),c):(void 0===c&&("number"==typeof e[1]?t[o]=[]:t[o]={}),u(t[o],e.slice(1),n,r))}return c.has=function(n,r){if("number"==typeof r?r=[r]:"string"==typeof r&&(r=r.split(".")),!r||0===r.length)return!!n;for(var c=0;c<r.length;c++){var i=a(r[c]);if(!("number"==typeof i&&o(n)&&i<n.length||(t.includeInheritedProps?i in Object(n):e(n,i))))return!1;n=n[i]}return!0},c.ensureExists=function(t,e,n){return u(t,e,n,!0)},c.set=function(t,e,n,r){return u(t,e,n,r)},c.insert=function(t,e,n,r){var a=c.get(t,e);r=~~r,o(a)||(a=[],c.set(t,e,a)),a.splice(r,0,n)},c.empty=function(t,e){var a,f;if(!n(e)&&null!=t&&(a=c.get(t,e))){if("string"==typeof a)return c.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===r(t)}(a))return c.set(t,e,!1);if("number"==typeof a)return c.set(t,e,0);if(o(a))a.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===r(t)}(a))return c.set(t,e,null);for(f in a)i(a,f)&&delete a[f]}}},c.push=function(t,e){var n=c.get(t,e);o(n)||(n=[],c.set(t,e,n)),n.push.apply(n,Array.prototype.slice.call(arguments,2))},c.coalesce=function(t,e,n){for(var r,o=0,a=e.length;o<a;o++)if(void 0!==(r=c.get(t,e[o])))return r;return n},c.get=function(t,e,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return n;if("string"==typeof e)return c.get(t,e.split("."),n);var r=a(e[0]),o=f(t,r);return void 0===o?n:1===e.length?o:c.get(t[r],e.slice(1),n)},c.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(n(e))return t;if("string"==typeof e)return c.del(t,e.split("."));var r=a(e[0]);return i(t,r)?1!==e.length?c.del(t[r],e.slice(1)):(o(t)?t.splice(r,1):delete t[r],t):t},c}var i=c();return i.create=c,i.withInheritedProps=c({includeInheritedProps:!0}),i}()}),lt=function(t){var e=t%100;if(e>=10&&e<=20)return"th";var n=t%10;return 1===n?"st":2===n?"nd":3===n?"rd":"th"};function yt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return t+lt(t)}yt.indicator=lt;var gt=yt,vt=/[|\\{}()[\]^$+*?.]/g,dt=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(vt,"\\$&")};const _t=new Map;function mt(t,e){const n=Object.assign({caseSensitive:!1},e),r=t+JSON.stringify(n);if(_t.has(r))return _t.get(r);const o="!"===t[0];o&&(t=t.slice(1)),t=dt(t).replace(/\\\*/g,".*");const a=new RegExp(`^${t}$`,n.caseSensitive?"":"i");return a.negated=o,_t.set(r,a),a}var wt=(t,e,n)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const r="!"===e[0][0];e=e.map(t=>mt(t,n));const o=[];for(const n of t){let t=r;for(const r of e)r.test(n)&&(t=!r.negated);t&&o.push(n)}return o};return wt.isMatch=((t,e,n)=>{const r=mt(e,n),o=r.test(t);return r.negated?!o:o}),function(t,e,r){return function t(e,r,o){var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];function c(t){return null!=t}function i(t){return"Object"===n(t)}function u(t,e){return e=pt(e),Array.from(t).filter(function(t){return!e.some(function(e){return wt.isMatch(t,e,{caseSensitive:!0})})})}function s(t){if(t.includes(".")){var e=t.split(".");return e.pop(),e.join(".")}return t}var p=["any","anything","every","everything","all","whatever","whatevs"],h=Array.isArray;if(!c(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");var l,y={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};if(l=c(o)&&i(o)?Object.assign({},y,o):Object.assign({},y),c(l.ignoreKeys)&&l.ignoreKeys?l.ignoreKeys=pt(l.ignoreKeys):l.ignoreKeys=[],c(l.ignorePaths)&&l.ignorePaths?l.ignorePaths=pt(l.ignorePaths):l.ignorePaths=[],c(l.acceptArraysIgnore)&&l.acceptArraysIgnore?l.acceptArraysIgnore=pt(l.acceptArraysIgnore):l.acceptArraysIgnore=[],l.msg="string"==typeof l.msg?l.msg.trim():l.msg,":"===l.msg[l.msg.length-1]&&(l.msg=l.msg.slice(0,l.msg.length-1).trim()),l.schema&&(Object.keys(l.schema).forEach(function(t){if(i(l.schema[t])){var e={};O(l.schema[t],function(n,r,o){var a=void 0!==r?r:n;return h(a)||i(a)||(e["".concat(t,".").concat(o.path)]=a),a}),delete l.schema[t],l.schema=Object.assign(l.schema,e)}}),Object.keys(l.schema).forEach(function(t){h(l.schema[t])||(l.schema[t]=[l.schema[t]]),l.schema[t]=l.schema[t].map(String).map(function(t){return t.toLowerCase()}).map(function(t){return t.trim()})})),c(r)||(r={}),a&&t(l,y,{enforceStrictKeyset:!1},!1),l.enforceStrictKeyset)if(c(l.schema)&&Object.keys(l.schema).length>0){if(0!==u(f(Object.keys(e),Object.keys(r).concat(Object.keys(l.schema))),l.ignoreKeys).length){var g=f(Object.keys(e),Object.keys(r).concat(Object.keys(l.schema)));throw new TypeError("".concat(l.msg,": ").concat(l.optsVarName,".enforceStrictKeyset is on and the following key").concat(g.length>1?"s":""," ").concat(g.length>1?"are":"is"," not covered by schema and/or reference objects: ").concat(g.join(", ")))}}else{if(!(c(r)&&Object.keys(r).length>0))throw new TypeError("".concat(l.msg,": Both ").concat(l.optsVarName,".schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!"));if(0!==u(f(Object.keys(e),Object.keys(r)),l.ignoreKeys).length){var v=f(Object.keys(e),Object.keys(r));throw new TypeError("".concat(l.msg,": The input object has key").concat(v.length>1?"s":""," which ").concat(v.length>1?"are":"is"," not covered by the reference object: ").concat(v.join(", ")))}if(0!==u(f(Object.keys(r),Object.keys(e)),l.ignoreKeys).length){var d=f(Object.keys(r),Object.keys(e));throw new TypeError("".concat(l.msg,": The reference object has key").concat(d.length>1?"s":""," which ").concat(d.length>1?"are":"is"," not present in the input object: ").concat(d.join(", ")))}}var _=[];O(e,function(t,e,o){var a=void 0!==e?e:t;if(h(_)&&_.length&&_.some(function(t){return o.path.startsWith(t)}))return a;if(!(!l.enforceStrictKeyset||!i(a)&&!h(a)&&h(o.parent)||c(l.schema)&&i(l.schema)&&(!i(l.schema)||Object.keys(l.schema).length&&(h(o.parent)||Object.prototype.hasOwnProperty.call(l.schema,o.path))&&(!h(o.parent)||ht.has(l.schema,s(o.path))))||c(r)&&i(r)&&(!i(r)||Object.keys(r).length&&(l.acceptArrays||ht.has(r,o.path))&&(!l.acceptArrays||(h(o.parent)||ht.has(r,o.path))&&(!h(o.parent)||ht.has(r,s(o.path)))))))throw new TypeError("".concat(l.msg,": ").concat(l.optsVarName,".").concat(o.path," is neither covered by reference object (second input argument), nor ").concat(l.optsVarName,".schema! To stop this error, turn off ").concat(l.optsVarName,".enforceStrictKeyset or provide some type reference (2nd argument or ").concat(l.optsVarName,".schema)."));if(i(l.schema)&&Object.keys(l.schema).length&&Object.prototype.hasOwnProperty.call(l.schema,o.path)){var f=pt(l.schema[o.path]).map(String).map(function(t){return t.toLowerCase()});if(ht.set(l.schema,o.path,f),st(f,p).length)_.push(o.path);else if(!0!==a&&!1!==a&&!f.includes(n(a).toLowerCase())||(!0===a||!1===a)&&!f.includes(String(a))&&!f.includes("boolean")){if(!h(a)||!l.acceptArrays)throw new TypeError("".concat(l.msg,": ").concat(l.optsVarName,".").concat(o.path," was customised to ").concat("string"!==n(a)?'"':"").concat(JSON.stringify(a,null,0)).concat("string"!==n(a)?'"':""," (type: ").concat(n(a).toLowerCase(),") which is not among the allowed types in schema (which is equal to ").concat(JSON.stringify(f,null,0),")"));for(var u=0,y=a.length;u<y;u++)if(!f.includes(n(a[u]).toLowerCase()))throw new TypeError("".concat(l.msg,": ").concat(l.optsVarName,".").concat(o.path,".").concat(u,", the ").concat(gt(u+1)," element (equal to ").concat(JSON.stringify(a[u],null,0),") is of a type ").concat(n(a[u]).toLowerCase(),", but only the following are allowed by the ").concat(l.optsVarName,".schema: ").concat(f.join(", ")))}}else if(c(r)&&Object.keys(r).length&&ht.has(r,o.path)&&n(a)!==n(ht.get(r,o.path))&&(!l.ignoreKeys||!l.ignoreKeys.some(function(e){return wt.isMatch(t,e)}))&&(!l.ignorePaths||!l.ignorePaths.some(function(t){return wt.isMatch(o.path,t)}))){var g=ht.get(r,o.path);if(!l.acceptArrays||!h(a)||l.acceptArraysIgnore.includes(t))throw new TypeError("".concat(l.msg,": ").concat(l.optsVarName,".").concat(o.path," was customised to ").concat("string"===n(a).toLowerCase()?"":'"').concat(JSON.stringify(a,null,0)).concat("string"===n(a).toLowerCase()?"":'"'," which is not ").concat(n(g).toLowerCase()," but ").concat(n(a).toLowerCase()));if(!a.every(function(e){return n(e).toLowerCase()===n(r[t]).toLowerCase()}))throw new TypeError("".concat(l.msg,": ").concat(l.optsVarName,".").concat(o.path," was customised to be array, but not all of its elements are ").concat(n(r[t]).toLowerCase(),"-type"))}return a})}(t,e,r)}});
