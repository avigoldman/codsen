!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).checkTypesMini=n()}(this,function(){"use strict";var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,n){return t(n={exports:{}},n.exports),n.exports}var e=n(function(n,e){var r,o,a,i,c,f,u,s,p,l,h,y,g,v,d,_,m,w,b,j;n.exports=(r="function"==typeof Promise,o="object"==typeof self?self:t,a="undefined"!=typeof Symbol,i="undefined"!=typeof Map,c="undefined"!=typeof Set,f="undefined"!=typeof WeakMap,u="undefined"!=typeof WeakSet,s="undefined"!=typeof DataView,p=a&&void 0!==Symbol.iterator,l=a&&void 0!==Symbol.toStringTag,h=c&&"function"==typeof Set.prototype.entries,y=i&&"function"==typeof Map.prototype.entries,g=h&&Object.getPrototypeOf((new Set).entries()),v=y&&Object.getPrototypeOf((new Map).entries()),d=p&&"function"==typeof Array.prototype[Symbol.iterator],_=d&&Object.getPrototypeOf([][Symbol.iterator]()),m=p&&"function"==typeof String.prototype[Symbol.iterator],w=m&&Object.getPrototypeOf(""[Symbol.iterator]()),b=8,j=-1,function(t){var n=typeof t;if("object"!==n)return n;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===l||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var e=l&&t[Symbol.toStringTag];if("string"==typeof e)return e;var a=Object.getPrototypeOf(t);return a===RegExp.prototype?"RegExp":a===Date.prototype?"Date":r&&a===Promise.prototype?"Promise":c&&a===Set.prototype?"Set":i&&a===Map.prototype?"Map":u&&a===WeakSet.prototype?"WeakSet":f&&a===WeakMap.prototype?"WeakMap":s&&a===DataView.prototype?"DataView":i&&a===v?"Map Iterator":c&&a===g?"Set Iterator":d&&a===_?"Array Iterator":m&&a===w?"String Iterator":null===a?"Object":Object.prototype.toString.call(t).slice(b,j)})});function r(t,n,e){if(n!=n)return function(t,n,e,r){for(var o=t.length,a=e+(r?1:-1);r?a--:++a<o;)if(n(t[a],a,t))return a;return-1}(t,a,e);for(var r=e-1,o=t.length;++r<o;)if(t[r]===n)return r;return-1}function o(t,n,e,r){for(var o=e-1,a=t.length;++o<a;)if(r(t[o],n))return o;return-1}function a(t){return t!=t}var i=Array.prototype.splice;function c(t,n,e,a){var c,f=a?o:r,u=-1,s=n.length,p=t;for(t===n&&(n=function(t,n){var e=-1,r=t.length;n||(n=Array(r));for(;++e<r;)n[e]=t[e];return n}(n)),e&&(p=function(t,n){for(var e=-1,r=t?t.length:0,o=Array(r);++e<r;)o[e]=n(t[e],e,t);return o}(t,(c=e,function(t){return c(t)})));++u<s;)for(var l=0,h=n[u],y=e?e(h):h;(l=f(p,y,l,a))>-1;)p!==t&&i.call(p,l,1),i.call(t,l,1);return t}var f=function(t,n){return t&&t.length&&n&&n.length?c(t,n):t},u=n(function(n,e){var r=200,o="__lodash_hash_undefined__",a=9007199254740991,i="[object Arguments]",c="[object Boolean]",f="[object Date]",u="[object Function]",s="[object GeneratorFunction]",p="[object Map]",l="[object Number]",h="[object Object]",y="[object RegExp]",g="[object Set]",v="[object String]",d="[object Symbol]",_="[object ArrayBuffer]",m="[object DataView]",w="[object Float32Array]",b="[object Float64Array]",j="[object Int8Array]",O="[object Int16Array]",A="[object Int32Array]",S="[object Uint8Array]",T="[object Uint8ClampedArray]",E="[object Uint16Array]",M="[object Uint32Array]",N=/\w*$/,k=/^\[object .+?Constructor\]$/,$=/^(?:0|[1-9]\d*)$/,I={};I[i]=I["[object Array]"]=I[_]=I[m]=I[c]=I[f]=I[w]=I[b]=I[j]=I[O]=I[A]=I[p]=I[l]=I[h]=I[y]=I[g]=I[v]=I[d]=I[S]=I[T]=I[E]=I[M]=!0,I["[object Error]"]=I[u]=I["[object WeakMap]"]=!1;var L="object"==typeof t&&t&&t.Object===Object&&t,x="object"==typeof self&&self&&self.Object===Object&&self,C=L||x||Function("return this")(),P=e&&!e.nodeType&&e,V=P&&n&&!n.nodeType&&n,W=V&&V.exports===P;function J(t,n){return t.set(n[0],n[1]),t}function B(t,n){return t.add(n),t}function H(t,n,e,r){var o=-1,a=t?t.length:0;for(r&&a&&(e=t[++o]);++o<a;)e=n(e,t[o],o,t);return e}function R(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}function U(t){var n=-1,e=Array(t.size);return t.forEach(function(t,r){e[++n]=[r,t]}),e}function F(t,n){return function(e){return t(n(e))}}function q(t){var n=-1,e=Array(t.size);return t.forEach(function(t){e[++n]=t}),e}var z,Q=Array.prototype,K=Function.prototype,G=Object.prototype,X=C["__core-js_shared__"],Z=(z=/[^.]+$/.exec(X&&X.keys&&X.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"",Y=K.toString,D=G.hasOwnProperty,tt=G.toString,nt=RegExp("^"+Y.call(D).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=W?C.Buffer:void 0,rt=C.Symbol,ot=C.Uint8Array,at=F(Object.getPrototypeOf,Object),it=Object.create,ct=G.propertyIsEnumerable,ft=Q.splice,ut=Object.getOwnPropertySymbols,st=et?et.isBuffer:void 0,pt=F(Object.keys,Object),lt=Vt(C,"DataView"),ht=Vt(C,"Map"),yt=Vt(C,"Promise"),gt=Vt(C,"Set"),vt=Vt(C,"WeakMap"),dt=Vt(Object,"create"),_t=Rt(lt),mt=Rt(ht),wt=Rt(yt),bt=Rt(gt),jt=Rt(vt),Ot=rt?rt.prototype:void 0,At=Ot?Ot.valueOf:void 0;function St(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function Tt(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function Et(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function Mt(t){this.__data__=new Tt(t)}function Nt(t,n){var e=Ft(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&qt(t)}(t)&&D.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==i)}(t)?function(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r}(t.length,String):[],r=e.length,o=!!r;for(var a in t)!n&&!D.call(t,a)||o&&("length"==a||Bt(a,r))||e.push(a);return e}function kt(t,n,e){var r=t[n];D.call(t,n)&&Ut(r,e)&&(void 0!==e||n in t)||(t[n]=e)}function $t(t,n){for(var e=t.length;e--;)if(Ut(t[e][0],n))return e;return-1}function It(t,n,e,r,o,a,k){var $;if(r&&($=a?r(t,o,a,k):r(t)),void 0!==$)return $;if(!Kt(t))return t;var L=Ft(t);if(L){if($=function(t){var n=t.length,e=t.constructor(n);n&&"string"==typeof t[0]&&D.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!n)return function(t,n){var e=-1,r=t.length;n||(n=Array(r));for(;++e<r;)n[e]=t[e];return n}(t,$)}else{var x=Jt(t),C=x==u||x==s;if(zt(t))return function(t,n){if(n)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,n);if(x==h||x==i||C&&!a){if(R(t))return a?t:{};if($=function(t){return"function"!=typeof t.constructor||Ht(t)?{}:(n=at(t),Kt(n)?it(n):{});var n}(C?{}:t),!n)return function(t,n){return Ct(t,Wt(t),n)}(t,function(t,n){return t&&Ct(n,Gt(n),t)}($,t))}else{if(!I[x])return a?t:{};$=function(t,n,e,r){var o=t.constructor;switch(n){case _:return xt(t);case c:case f:return new o(+t);case m:return function(t,n){var e=n?xt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,r);case w:case b:case j:case O:case A:case S:case T:case E:case M:return function(t,n){var e=n?xt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,r);case p:return function(t,n,e){return H(n?e(U(t),!0):U(t),J,new t.constructor)}(t,r,e);case l:case v:return new o(t);case y:return(u=new(i=t).constructor(i.source,N.exec(i))).lastIndex=i.lastIndex,u;case g:return function(t,n,e){return H(n?e(q(t),!0):q(t),B,new t.constructor)}(t,r,e);case d:return a=t,At?Object(At.call(a)):{}}var a;var i,u}(t,x,It,n)}}k||(k=new Mt);var P=k.get(t);if(P)return P;if(k.set(t,$),!L)var V=e?function(t){return function(t,n,e){var r=n(t);return Ft(t)?r:function(t,n){for(var e=-1,r=n.length,o=t.length;++e<r;)t[o+e]=n[e];return t}(r,e(t))}(t,Gt,Wt)}(t):Gt(t);return function(t,n){for(var e=-1,r=t?t.length:0;++e<r&&!1!==n(t[e],e,t););}(V||t,function(o,a){V&&(o=t[a=o]),kt($,a,It(o,n,e,r,a,t,k))}),$}function Lt(t){return!(!Kt(t)||(n=t,Z&&Z in n))&&(Qt(t)||R(t)?nt:k).test(Rt(t));var n}function xt(t){var n=new t.constructor(t.byteLength);return new ot(n).set(new ot(t)),n}function Ct(t,n,e,r){e||(e={});for(var o=-1,a=n.length;++o<a;){var i=n[o],c=r?r(e[i],t[i],i,e,t):void 0;kt(e,i,void 0===c?t[i]:c)}return e}function Pt(t,n){var e,r,o=t.__data__;return("string"==(r=typeof(e=n))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e)?o["string"==typeof n?"string":"hash"]:o.map}function Vt(t,n){var e=function(t,n){return null==t?void 0:t[n]}(t,n);return Lt(e)?e:void 0}St.prototype.clear=function(){this.__data__=dt?dt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var n=this.__data__;if(dt){var e=n[t];return e===o?void 0:e}return D.call(n,t)?n[t]:void 0},St.prototype.has=function(t){var n=this.__data__;return dt?void 0!==n[t]:D.call(n,t)},St.prototype.set=function(t,n){return this.__data__[t]=dt&&void 0===n?o:n,this},Tt.prototype.clear=function(){this.__data__=[]},Tt.prototype.delete=function(t){var n=this.__data__,e=$t(n,t);return!(e<0||(e==n.length-1?n.pop():ft.call(n,e,1),0))},Tt.prototype.get=function(t){var n=this.__data__,e=$t(n,t);return e<0?void 0:n[e][1]},Tt.prototype.has=function(t){return $t(this.__data__,t)>-1},Tt.prototype.set=function(t,n){var e=this.__data__,r=$t(e,t);return r<0?e.push([t,n]):e[r][1]=n,this},Et.prototype.clear=function(){this.__data__={hash:new St,map:new(ht||Tt),string:new St}},Et.prototype.delete=function(t){return Pt(this,t).delete(t)},Et.prototype.get=function(t){return Pt(this,t).get(t)},Et.prototype.has=function(t){return Pt(this,t).has(t)},Et.prototype.set=function(t,n){return Pt(this,t).set(t,n),this},Mt.prototype.clear=function(){this.__data__=new Tt},Mt.prototype.delete=function(t){return this.__data__.delete(t)},Mt.prototype.get=function(t){return this.__data__.get(t)},Mt.prototype.has=function(t){return this.__data__.has(t)},Mt.prototype.set=function(t,n){var e=this.__data__;if(e instanceof Tt){var o=e.__data__;if(!ht||o.length<r-1)return o.push([t,n]),this;e=this.__data__=new Et(o)}return e.set(t,n),this};var Wt=ut?F(ut,Object):function(){return[]},Jt=function(t){return tt.call(t)};function Bt(t,n){return!!(n=null==n?a:n)&&("number"==typeof t||$.test(t))&&t>-1&&t%1==0&&t<n}function Ht(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||G)}function Rt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ut(t,n){return t===n||t!=t&&n!=n}(lt&&Jt(new lt(new ArrayBuffer(1)))!=m||ht&&Jt(new ht)!=p||yt&&"[object Promise]"!=Jt(yt.resolve())||gt&&Jt(new gt)!=g||vt&&"[object WeakMap]"!=Jt(new vt))&&(Jt=function(t){var n=tt.call(t),e=n==h?t.constructor:void 0,r=e?Rt(e):void 0;if(r)switch(r){case _t:return m;case mt:return p;case wt:return"[object Promise]";case bt:return g;case jt:return"[object WeakMap]"}return n});var Ft=Array.isArray;function qt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=a}(t.length)&&!Qt(t)}var zt=st||function(){return!1};function Qt(t){var n=Kt(t)?tt.call(t):"";return n==u||n==s}function Kt(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function Gt(t){return qt(t)?Nt(t):function(t){if(!Ht(t))return pt(t);var n=[];for(var e in Object(t))D.call(t,e)&&"constructor"!=e&&n.push(e);return n}(t)}n.exports=function(t){return It(t,!0,!0)}}),s="[object Object]";var p,l,h=Function.prototype,y=Object.prototype,g=h.toString,v=y.hasOwnProperty,d=g.call(Object),_=y.toString,m=(p=Object.getPrototypeOf,l=Object,function(t){return p(l(t))});var w=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||_.call(t)!=s||function(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}(t))return!1;var n=m(t);if(null===n)return!0;var e=v.call(n,"constructor")&&n.constructor;return"function"==typeof e&&e instanceof e&&g.call(e)==d};const b=Array.isArray;function j(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function O(t,n){return function t(n,e,r){const o=u(n);let a,i,c,f,s;if((r=Object.assign({depth:-1,path:""},r)).depth+=1,b(o))for(a=0,i=o.length;a<i;a++){const n=`${r.path}.${a}`;void 0!==o[a]?(r.parent=u(o),c=t(e(o[a],void 0,Object.assign({},r,{path:j(n)})),e,Object.assign({},r,{path:j(n)})),Number.isNaN(c)&&a<o.length?(o.splice(a,1),a-=1):o[a]=c):o.splice(a,1)}else if(w(o))for(a=0,i=(f=Object.keys(o)).length;a<i;a++){s=f[a];const n=`${r.path}.${s}`;0===r.depth&&null!=s&&(r.topmostKey=s),r.parent=u(o),c=t(e(s,o[s],Object.assign({},r,{path:j(n)})),e,Object.assign({},r,{path:j(n)})),Number.isNaN(c)?delete o[s]:o[s]=c}return o}(t,n,{})}var A="__lodash_hash_undefined__",S=9007199254740991,T="[object Function]",E="[object GeneratorFunction]",M=/^\[object .+?Constructor\]$/,N="object"==typeof t&&t&&t.Object===Object&&t,k="object"==typeof self&&self&&self.Object===Object&&self,$=N||k||Function("return this")();function I(t,n){return!!(t?t.length:0)&&function(t,n,e){if(n!=n)return function(t,n,e,r){var o=t.length,a=e+(r?1:-1);for(;r?a--:++a<o;)if(n(t[a],a,t))return a;return-1}(t,C,e);var r=e-1,o=t.length;for(;++r<o;)if(t[r]===n)return r;return-1}(t,n,0)>-1}function L(t,n,e){for(var r=-1,o=t?t.length:0;++r<o;)if(e(n,t[r]))return!0;return!1}function x(t,n){for(var e=-1,r=t?t.length:0,o=Array(r);++e<r;)o[e]=n(t[e],e,t);return o}function C(t){return t!=t}function P(t){return function(n){return t(n)}}function V(t,n){return t.has(n)}var W,J=Array.prototype,B=Function.prototype,H=Object.prototype,R=$["__core-js_shared__"],U=(W=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+W:"",F=B.toString,q=H.hasOwnProperty,z=H.toString,Q=RegExp("^"+F.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),K=J.splice,G=Math.max,X=Math.min,Z=ct($,"Map"),Y=ct(Object,"create");function D(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function tt(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function nt(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function et(t){var n=-1,e=t?t.length:0;for(this.__data__=new nt;++n<e;)this.add(t[n])}function rt(t,n){for(var e,r,o=t.length;o--;)if((e=t[o][0])===(r=n)||e!=e&&r!=r)return o;return-1}function ot(t){return!(!ut(t)||(n=t,U&&U in n))&&(ft(t)||function(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}(t)?Q:M).test(function(t){if(null!=t){try{return F.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var n}function at(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=S}(t.length)&&!ft(t)}(t)}(t)?t:[]}function it(t,n){var e,r,o=t.__data__;return("string"==(r=typeof(e=n))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e)?o["string"==typeof n?"string":"hash"]:o.map}function ct(t,n){var e=function(t,n){return null==t?void 0:t[n]}(t,n);return ot(e)?e:void 0}function ft(t){var n=ut(t)?z.call(t):"";return n==T||n==E}function ut(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}D.prototype.clear=function(){this.__data__=Y?Y(null):{}},D.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},D.prototype.get=function(t){var n=this.__data__;if(Y){var e=n[t];return e===A?void 0:e}return q.call(n,t)?n[t]:void 0},D.prototype.has=function(t){var n=this.__data__;return Y?void 0!==n[t]:q.call(n,t)},D.prototype.set=function(t,n){return this.__data__[t]=Y&&void 0===n?A:n,this},tt.prototype.clear=function(){this.__data__=[]},tt.prototype.delete=function(t){var n=this.__data__,e=rt(n,t);return!(e<0||(e==n.length-1?n.pop():K.call(n,e,1),0))},tt.prototype.get=function(t){var n=this.__data__,e=rt(n,t);return e<0?void 0:n[e][1]},tt.prototype.has=function(t){return rt(this.__data__,t)>-1},tt.prototype.set=function(t,n){var e=this.__data__,r=rt(e,t);return r<0?e.push([t,n]):e[r][1]=n,this},nt.prototype.clear=function(){this.__data__={hash:new D,map:new(Z||tt),string:new D}},nt.prototype.delete=function(t){return it(this,t).delete(t)},nt.prototype.get=function(t){return it(this,t).get(t)},nt.prototype.has=function(t){return it(this,t).has(t)},nt.prototype.set=function(t,n){return it(this,t).set(t,n),this},et.prototype.add=et.prototype.push=function(t){return this.__data__.set(t,A),this},et.prototype.has=function(t){return this.__data__.has(t)};var st=function(t,n){return n=G(void 0===n?t.length-1:n,0),function(){for(var e=arguments,r=-1,o=G(e.length-n,0),a=Array(o);++r<o;)a[r]=e[n+r];r=-1;for(var i=Array(n+1);++r<n;)i[r]=e[r];return i[n]=a,function(t,n,e){switch(e.length){case 0:return t.call(n);case 1:return t.call(n,e[0]);case 2:return t.call(n,e[0],e[1]);case 3:return t.call(n,e[0],e[1],e[2])}return t.apply(n,e)}(t,this,i)}}(function(t){var n=x(t,at);return n.length&&n[0]===t[0]?function(t,n,e){for(var r=e?L:I,o=t[0].length,a=t.length,i=a,c=Array(a),f=1/0,u=[];i--;){var s=t[i];i&&n&&(s=x(s,P(n))),f=X(s.length,f),c[i]=!e&&(n||o>=120&&s.length>=120)?new et(i&&s):void 0}s=t[0];var p=-1,l=c[0];t:for(;++p<o&&u.length<f;){var h=s[p],y=n?n(h):h;if(h=e||0!==h?h:0,!(l?V(l,y):r(u,y,e))){for(i=a;--i;){var g=c[i];if(!(g?V(g,y):r(t[i],y,e)))continue t}l&&l.push(y),u.push(h)}}return u}(n):[]});function pt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var lt=n(function(t){t.exports=function(){var t=Object.prototype.toString;function n(t,n){return null!=t&&Object.prototype.hasOwnProperty.call(t,n)}function e(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var e in t)if(n(t,e))return!1;return!0}return!1}function r(n){return t.call(n)}var o=Array.isArray||function(n){return"[object Array]"===t.call(n)};function a(t){var n=parseInt(t);return n.toString()===t?n:t}function i(t){t=t||{};var i=function(t){return Object.keys(i).reduce(function(n,e){return"create"===e?n:("function"==typeof i[e]&&(n[e]=i[e].bind(i,t)),n)},{})};function c(e,r){return t.includeInheritedProps||"number"==typeof r&&Array.isArray(e)||n(e,r)}function f(t,n){if(c(t,n))return t[n]}function u(t,n,e,r){if("number"==typeof n&&(n=[n]),!n||0===n.length)return t;if("string"==typeof n)return u(t,n.split(".").map(a),e,r);var o=n[0],i=f(t,o);return 1===n.length?(void 0!==i&&r||(t[o]=e),i):(void 0===i&&("number"==typeof n[1]?t[o]=[]:t[o]={}),u(t[o],n.slice(1),e,r))}return i.has=function(e,r){if("number"==typeof r?r=[r]:"string"==typeof r&&(r=r.split(".")),!r||0===r.length)return!!e;for(var i=0;i<r.length;i++){var c=a(r[i]);if(!("number"==typeof c&&o(e)&&c<e.length||(t.includeInheritedProps?c in Object(e):n(e,c))))return!1;e=e[c]}return!0},i.ensureExists=function(t,n,e){return u(t,n,e,!0)},i.set=function(t,n,e,r){return u(t,n,e,r)},i.insert=function(t,n,e,r){var a=i.get(t,n);r=~~r,o(a)||(a=[],i.set(t,n,a)),a.splice(r,0,e)},i.empty=function(t,n){var a,f;if(!e(n)&&null!=t&&(a=i.get(t,n))){if("string"==typeof a)return i.set(t,n,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===r(t)}(a))return i.set(t,n,!1);if("number"==typeof a)return i.set(t,n,0);if(o(a))a.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===r(t)}(a))return i.set(t,n,null);for(f in a)c(a,f)&&delete a[f]}}},i.push=function(t,n){var e=i.get(t,n);o(e)||(e=[],i.set(t,n,e)),e.push.apply(e,Array.prototype.slice.call(arguments,2))},i.coalesce=function(t,n,e){for(var r,o=0,a=n.length;o<a;o++)if(void 0!==(r=i.get(t,n[o])))return r;return e},i.get=function(t,n,e){if("number"==typeof n&&(n=[n]),!n||0===n.length)return t;if(null==t)return e;if("string"==typeof n)return i.get(t,n.split("."),e);var r=a(n[0]),o=f(t,r);return void 0===o?e:1===n.length?o:i.get(t[r],n.slice(1),e)},i.del=function(t,n){if("number"==typeof n&&(n=[n]),null==t)return t;if(e(n))return t;if("string"==typeof n)return i.del(t,n.split("."));var r=a(n[0]);return c(t,r)?1!==n.length?i.del(t[r],n.slice(1)):(o(t)?t.splice(r,1):delete t[r],t):t},i}var c=i();return c.create=i,c.withInheritedProps=i({includeInheritedProps:!0}),c}()}),ht=function(t){var n=t%100;if(n>=10&&n<=20)return"th";var e=t%10;return 1===e?"st":2===e?"nd":3===e?"rd":"th"};function yt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return t+ht(t)}yt.indicator=ht;var gt=yt,vt=/[|\\{}()[\]^$+*?.]/g,dt=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(vt,"\\$&")};const _t=new Map;function mt(t,n){const e=Object.assign({caseSensitive:!1},n),r=t+JSON.stringify(e);if(_t.has(r))return _t.get(r);const o="!"===t[0];o&&(t=t.slice(1)),t=dt(t).replace(/\\\*/g,".*");const a=new RegExp(`^${t}$`,e.caseSensitive?"":"i");return a.negated=o,_t.set(r,a),a}var wt=(t,n,e)=>{if(!Array.isArray(t)||!Array.isArray(n))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof n}`);if(0===n.length)return t;const r="!"===n[0][0];n=n.map(t=>mt(t,e));const o=[];for(const e of t){let t=r;for(const r of n)r.test(e)&&(t=!r.negated);t&&o.push(e)}return o};return wt.isMatch=((t,n,e)=>{const r=mt(n,e),o=r.test(t);return r.negated?!o:o}),function(t,n,r){return function t(n,r,o){var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=Object.prototype.hasOwnProperty;function c(t){return null!=t}function u(t){return"Object"===e(t)}function s(t,n){return n=pt(n),Array.from(t).filter(function(t){return!n.some(function(n){return wt.isMatch(t,n,{caseSensitive:!0})})})}var p=["any","anything","every","everything","all","whatever","whatevs"],l=Array.isArray;if(!c(n))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");var h,y={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};if(h=c(o)&&u(o)?Object.assign({},y,o):Object.assign({},y),c(h.ignoreKeys)&&h.ignoreKeys?h.ignoreKeys=pt(h.ignoreKeys):h.ignoreKeys=[],c(h.ignorePaths)&&h.ignorePaths?h.ignorePaths=pt(h.ignorePaths):h.ignorePaths=[],c(h.acceptArraysIgnore)&&h.acceptArraysIgnore?h.acceptArraysIgnore=pt(h.acceptArraysIgnore):h.acceptArraysIgnore=[],h.msg="string"==typeof h.msg?h.msg.trim():h.msg,":"===h.msg[h.msg.length-1]&&(h.msg=h.msg.slice(0,h.msg.length-1).trim()),h.schema&&(Object.keys(h.schema).forEach(function(t){if(u(h.schema[t])){var n={};O(h.schema[t],function(e,r,o){var a=void 0!==r?r:e;return l(a)||u(a)||(n["".concat(t,".").concat(o.path)]=a),a}),delete h.schema[t],h.schema=Object.assign(h.schema,n)}}),Object.keys(h.schema).forEach(function(t){l(h.schema[t])||(h.schema[t]=[h.schema[t]]),h.schema[t]=h.schema[t].map(String).map(function(t){return t.toLowerCase()}).map(function(t){return t.trim()})})),c(r)||(r={}),a&&t(h,y,{enforceStrictKeyset:!1},!1),h.enforceStrictKeyset)if(c(h.schema)&&Object.keys(h.schema).length>0){if(0!==s(f(Object.keys(n),Object.keys(r).concat(Object.keys(h.schema))),h.ignoreKeys).length){var g=f(Object.keys(n),Object.keys(r).concat(Object.keys(h.schema)));throw new TypeError("".concat(h.msg,": ").concat(h.optsVarName,".enforceStrictKeyset is on and the following key").concat(g.length>1?"s":""," ").concat(g.length>1?"are":"is"," not covered by schema and/or reference objects: ").concat(g.join(", ")))}}else{if(!(c(r)&&Object.keys(r).length>0))throw new TypeError("".concat(h.msg,": Both ").concat(h.optsVarName,".schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!"));if(0!==s(f(Object.keys(n),Object.keys(r)),h.ignoreKeys).length){var v=f(Object.keys(n),Object.keys(r));throw new TypeError("".concat(h.msg,": The input object has key").concat(v.length>1?"s":""," which ").concat(v.length>1?"are":"is"," not covered by the reference object: ").concat(v.join(", ")))}if(0!==s(f(Object.keys(r),Object.keys(n)),h.ignoreKeys).length){var d=f(Object.keys(r),Object.keys(n));throw new TypeError("".concat(h.msg,": The reference object has key").concat(d.length>1?"s":""," which ").concat(d.length>1?"are":"is"," not present in the input object: ").concat(d.join(", ")))}}var _=[];O(n,function(t,o,a){var c=void 0!==o?o:t,f=void 0!==o?t:void 0;if(l(_)&&_.length&&_.some(function(t){return a.path.startsWith(t)}))return c;if(f&&h.ignoreKeys.some(function(t){return wt.isMatch(f,t)}))return c;if(h.ignorePaths.some(function(t){return wt.isMatch(a.path,t)}))return c;var s=!(!u(c)&&!l(c)&&l(a.parent)),y=!1;u(h.schema)&&i.call(h.schema,lt.get(a.path))&&(y=!0);var g=!1;if(u(r)&&lt.has(r,lt.get(a.path))&&(g=!0),h.enforceStrictKeyset&&s&&!y&&!g)throw new TypeError("".concat(h.msg,": ").concat(h.optsVarName,".").concat(a.path," is neither covered by reference object (second input argument), nor ").concat(h.optsVarName,".schema! To stop this error, turn off ").concat(h.optsVarName,".enforceStrictKeyset or provide some type reference (2nd argument or ").concat(h.optsVarName,".schema).\n\nDebug info:\n\nobj = ").concat(JSON.stringify(n,null,4),"\n\nref = ").concat(JSON.stringify(r,null,4),"\n\ninnerObj = ").concat(JSON.stringify(a,null,4),"\n\nopts = ").concat(JSON.stringify(h,null,4),"\n\ncurrent = ").concat(JSON.stringify(c,null,4),"\n\n"));if(y){var v=pt(h.schema[a.path]).map(String).map(function(t){return t.toLowerCase()});if(lt.set(h.schema,a.path,v),st(v,p).length)_.push(a.path);else if(!0!==c&&!1!==c&&!v.includes(e(c).toLowerCase())||(!0===c||!1===c)&&!v.includes(String(c))&&!v.includes("boolean")){if(!l(c)||!h.acceptArrays)throw new TypeError("".concat(h.msg,": ").concat(h.optsVarName,".").concat(a.path," was customised to ").concat("string"!==e(c)?'"':"").concat(JSON.stringify(c,null,0)).concat("string"!==e(c)?'"':""," (type: ").concat(e(c).toLowerCase(),") which is not among the allowed types in schema (which is equal to ").concat(JSON.stringify(v,null,0),")"));for(var d=0,m=c.length;d<m;d++)if(!v.includes(e(c[d]).toLowerCase()))throw new TypeError("".concat(h.msg,": ").concat(h.optsVarName,".").concat(a.path,".").concat(d,", the ").concat(gt(d+1)," element (equal to ").concat(JSON.stringify(c[d],null,0),") is of a type ").concat(e(c[d]).toLowerCase(),", but only the following are allowed by the ").concat(h.optsVarName,".schema: ").concat(v.join(", ")))}}else if(g){var w=lt.get(r,a.path);if(h.acceptArrays&&l(c)&&!h.acceptArraysIgnore.includes(t)){if(!c.every(function(n){return e(n).toLowerCase()===e(r[t]).toLowerCase()}))throw new TypeError("".concat(h.msg,": ").concat(h.optsVarName,".").concat(a.path," was customised to be array, but not all of its elements are ").concat(e(r[t]).toLowerCase(),"-type"))}else if(e(c)!==e(w))throw new TypeError("".concat(h.msg,": ").concat(h.optsVarName,".").concat(a.path," was customised to ").concat("string"===e(c).toLowerCase()?"":'"').concat(JSON.stringify(c,null,0)).concat("string"===e(c).toLowerCase()?"":'"'," which is not ").concat(e(w).toLowerCase()," but ").concat(e(c).toLowerCase()))}return c})}(t,n,r)}});
