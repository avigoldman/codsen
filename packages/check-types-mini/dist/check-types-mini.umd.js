!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.checkTypesMini=e()}(this,function(){"use strict";var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var r=e(function(e,r){var n,o,c,a,i,u,s,f,p,l,h,y,g,v,d,b,_,m,j,w;e.exports=(n="function"==typeof Promise,o="object"==typeof self?self:t,c="undefined"!=typeof Symbol,a="undefined"!=typeof Map,i="undefined"!=typeof Set,u="undefined"!=typeof WeakMap,s="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,p=c&&void 0!==Symbol.iterator,l=c&&void 0!==Symbol.toStringTag,h=i&&"function"==typeof Set.prototype.entries,y=a&&"function"==typeof Map.prototype.entries,g=h&&Object.getPrototypeOf((new Set).entries()),v=y&&Object.getPrototypeOf((new Map).entries()),d=p&&"function"==typeof Array.prototype[Symbol.iterator],b=d&&Object.getPrototypeOf([][Symbol.iterator]()),_=p&&"function"==typeof String.prototype[Symbol.iterator],m=_&&Object.getPrototypeOf(""[Symbol.iterator]()),j=8,w=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===l||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var r=l&&t[Symbol.toStringTag];if("string"==typeof r)return r;var c=Object.getPrototypeOf(t);return c===RegExp.prototype?"RegExp":c===Date.prototype?"Date":n&&c===Promise.prototype?"Promise":i&&c===Set.prototype?"Set":a&&c===Map.prototype?"Map":s&&c===WeakSet.prototype?"WeakSet":u&&c===WeakMap.prototype?"WeakMap":f&&c===DataView.prototype?"DataView":a&&c===v?"Map Iterator":i&&c===g?"Set Iterator":d&&c===b?"Array Iterator":_&&c===m?"String Iterator":null===c?"Object":Object.prototype.toString.call(t).slice(j,w)})});function n(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,c=r+(n?1:-1);n?c--:++c<o;)if(e(t[c],c,t))return c;return-1}(t,c,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function o(t,e,r,n){for(var o=r-1,c=t.length;++o<c;)if(n(t[o],e))return o;return-1}function c(t){return t!=t}var a=Array.prototype.splice;function i(t,e,r,c){var i,u=c?o:n,s=-1,f=e.length,p=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(p=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(i=r,function(t){return i(t)})));++s<f;)for(var l=0,h=e[s],y=r?r(h):h;(l=u(p,y,l,c))>-1;)p!==t&&a.call(p,l,1),a.call(t,l,1);return t}var u=function(t,e){return t&&t.length&&e&&e.length?i(t,e):t},s=e(function(e,r){var n=200,o="__lodash_hash_undefined__",c=9007199254740991,a="[object Arguments]",i="[object Boolean]",u="[object Date]",s="[object Function]",f="[object GeneratorFunction]",p="[object Map]",l="[object Number]",h="[object Object]",y="[object RegExp]",g="[object Set]",v="[object String]",d="[object Symbol]",b="[object ArrayBuffer]",_="[object DataView]",m="[object Float32Array]",j="[object Float64Array]",w="[object Int8Array]",O="[object Int16Array]",A="[object Int32Array]",S="[object Uint8Array]",k="[object Uint8ClampedArray]",T="[object Uint16Array]",E="[object Uint32Array]",P=/\w*$/,M=/^\[object .+?Constructor\]$/,x=/^(?:0|[1-9]\d*)$/,N={};N[a]=N["[object Array]"]=N[b]=N[_]=N[i]=N[u]=N[m]=N[j]=N[w]=N[O]=N[A]=N[p]=N[l]=N[h]=N[y]=N[g]=N[v]=N[d]=N[S]=N[k]=N[T]=N[E]=!0,N["[object Error]"]=N[s]=N["[object WeakMap]"]=!1;var I="object"==typeof t&&t&&t.Object===Object&&t,$="object"==typeof self&&self&&self.Object===Object&&self,L=I||$||Function("return this")(),K=r&&!r.nodeType&&r,C=K&&e&&!e.nodeType&&e,V=C&&C.exports===K;function D(t,e){return t.set(e[0],e[1]),t}function F(t,e){return t.add(e),t}function W(t,e,r,n){var o=-1,c=t?t.length:0;for(n&&c&&(r=t[++o]);++o<c;)r=e(r,t[o],o,t);return r}function H(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function R(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function B(t,e){return function(r){return t(e(r))}}function U(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var J,q=Array.prototype,z=Function.prototype,G=Object.prototype,Q=L["__core-js_shared__"],X=(J=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+J:"",Y=z.toString,Z=G.hasOwnProperty,tt=G.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=V?L.Buffer:void 0,nt=L.Symbol,ot=L.Uint8Array,ct=B(Object.getPrototypeOf,Object),at=Object.create,it=G.propertyIsEnumerable,ut=q.splice,st=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,pt=B(Object.keys,Object),lt=Ct(L,"DataView"),ht=Ct(L,"Map"),yt=Ct(L,"Promise"),gt=Ct(L,"Set"),vt=Ct(L,"WeakMap"),dt=Ct(Object,"create"),bt=Ht(lt),_t=Ht(ht),mt=Ht(yt),jt=Ht(gt),wt=Ht(vt),Ot=nt?nt.prototype:void 0,At=Ot?Ot.valueOf:void 0;function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function kt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){this.__data__=new kt(t)}function Pt(t,e){var r=Bt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ut(t)}(t)&&Z.call(t,"callee")&&(!it.call(t,"callee")||tt.call(t)==a)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var c in t)!e&&!Z.call(t,c)||o&&("length"==c||Ft(c,n))||r.push(c);return r}function Mt(t,e,r){var n=t[e];Z.call(t,e)&&Rt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function xt(t,e){for(var r=t.length;r--;)if(Rt(t[r][0],e))return r;return-1}function Nt(t,e,r,n,o,c,M){var x;if(n&&(x=c?n(t,o,c,M):n(t)),void 0!==x)return x;if(!zt(t))return t;var I=Bt(t);if(I){if(x=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,x)}else{var $=Dt(t),L=$==s||$==f;if(Jt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if($==h||$==a||L&&!c){if(H(t))return c?t:{};if(x=function(t){return"function"!=typeof t.constructor||Wt(t)?{}:(e=ct(t),zt(e)?at(e):{});var e}(L?{}:t),!e)return function(t,e){return Lt(t,Vt(t),e)}(t,function(t,e){return t&&Lt(e,Gt(e),t)}(x,t))}else{if(!N[$])return c?t:{};x=function(t,e,r,n){var o=t.constructor;switch(e){case b:return $t(t);case i:case u:return new o(+t);case _:return function(t,e){var r=e?$t(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case m:case j:case w:case O:case A:case S:case k:case T:case E:return function(t,e){var r=e?$t(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case p:return function(t,e,r){return W(e?r(R(t),!0):R(t),D,new t.constructor)}(t,n,r);case l:case v:return new o(t);case y:return(s=new(a=t).constructor(a.source,P.exec(a))).lastIndex=a.lastIndex,s;case g:return function(t,e,r){return W(e?r(U(t),!0):U(t),F,new t.constructor)}(t,n,r);case d:return c=t,At?Object(At.call(c)):{}}var c;var a,s}(t,$,Nt,e)}}M||(M=new Et);var K=M.get(t);if(K)return K;if(M.set(t,x),!I)var C=r?function(t){return function(t,e,r){var n=e(t);return Bt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Gt,Vt)}(t):Gt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(C||t,function(o,c){C&&(o=t[c=o]),Mt(x,c,Nt(o,e,r,n,c,t,M))}),x}function It(t){return!(!zt(t)||(e=t,X&&X in e))&&(qt(t)||H(t)?et:M).test(Ht(t));var e}function $t(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Lt(t,e,r,n){r||(r={});for(var o=-1,c=e.length;++o<c;){var a=e[o],i=n?n(r[a],t[a],a,r,t):void 0;Mt(r,a,void 0===i?t[a]:i)}return r}function Kt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Ct(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return It(r)?r:void 0}St.prototype.clear=function(){this.__data__=dt?dt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var e=this.__data__;if(dt){var r=e[t];return r===o?void 0:r}return Z.call(e,t)?e[t]:void 0},St.prototype.has=function(t){var e=this.__data__;return dt?void 0!==e[t]:Z.call(e,t)},St.prototype.set=function(t,e){return this.__data__[t]=dt&&void 0===e?o:e,this},kt.prototype.clear=function(){this.__data__=[]},kt.prototype.delete=function(t){var e=this.__data__,r=xt(e,t);return!(r<0||(r==e.length-1?e.pop():ut.call(e,r,1),0))},kt.prototype.get=function(t){var e=this.__data__,r=xt(e,t);return r<0?void 0:e[r][1]},kt.prototype.has=function(t){return xt(this.__data__,t)>-1},kt.prototype.set=function(t,e){var r=this.__data__,n=xt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Tt.prototype.clear=function(){this.__data__={hash:new St,map:new(ht||kt),string:new St}},Tt.prototype.delete=function(t){return Kt(this,t).delete(t)},Tt.prototype.get=function(t){return Kt(this,t).get(t)},Tt.prototype.has=function(t){return Kt(this,t).has(t)},Tt.prototype.set=function(t,e){return Kt(this,t).set(t,e),this},Et.prototype.clear=function(){this.__data__=new kt},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var r=this.__data__;if(r instanceof kt){var o=r.__data__;if(!ht||o.length<n-1)return o.push([t,e]),this;r=this.__data__=new Tt(o)}return r.set(t,e),this};var Vt=st?B(st,Object):function(){return[]},Dt=function(t){return tt.call(t)};function Ft(t,e){return!!(e=null==e?c:e)&&("number"==typeof t||x.test(t))&&t>-1&&t%1==0&&t<e}function Wt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||G)}function Ht(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Rt(t,e){return t===e||t!=t&&e!=e}(lt&&Dt(new lt(new ArrayBuffer(1)))!=_||ht&&Dt(new ht)!=p||yt&&"[object Promise]"!=Dt(yt.resolve())||gt&&Dt(new gt)!=g||vt&&"[object WeakMap]"!=Dt(new vt))&&(Dt=function(t){var e=tt.call(t),r=e==h?t.constructor:void 0,n=r?Ht(r):void 0;if(n)switch(n){case bt:return _;case _t:return p;case mt:return"[object Promise]";case jt:return g;case wt:return"[object WeakMap]"}return e});var Bt=Array.isArray;function Ut(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=c}(t.length)&&!qt(t)}var Jt=ft||function(){return!1};function qt(t){var e=zt(t)?tt.call(t):"";return e==s||e==f}function zt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Gt(t){return Ut(t)?Pt(t):function(t){if(!Wt(t))return pt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return Nt(t,!0,!0)}}),f="[object Object]";var p,l,h=Function.prototype,y=Object.prototype,g=h.toString,v=y.hasOwnProperty,d=g.call(Object),b=y.toString,_=(p=Object.getPrototypeOf,l=Object,function(t){return p(l(t))});var m=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||b.call(t)!=f||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=_(t);if(null===e)return!0;var r=v.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&g.call(r)==d};const j=Array.isArray;function w(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function O(t,e){return function t(e,r,n){const o=s(e);let c,a,i,u,f;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,j(o))for(c=0,a=o.length;c<a;c++){const e=`${n.path}.${c}`;void 0!==o[c]?(n.parent=s(o),i=t(r(o[c],void 0,Object.assign({},n,{path:w(e)})),r,Object.assign({},n,{path:w(e)})),Number.isNaN(i)&&c<o.length?(o.splice(c,1),c-=1):o[c]=i):o.splice(c,1)}else if(m(o))for(c=0,a=(u=Object.keys(o)).length;c<a;c++){f=u[c];const e=`${n.path}.${f}`;0===n.depth&&null!=f&&(n.topmostKey=f),n.parent=s(o),i=t(r(f,o[f],Object.assign({},n,{path:w(e)})),r,Object.assign({},n,{path:w(e)})),Number.isNaN(i)?delete o[f]:o[f]=i}return o}(t,e,{})}var A="__lodash_hash_undefined__",S=9007199254740991,k="[object Function]",T="[object GeneratorFunction]",E=/^\[object .+?Constructor\]$/,P="object"==typeof t&&t&&t.Object===Object&&t,M="object"==typeof self&&self&&self.Object===Object&&self,x=P||M||Function("return this")();function N(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,c=r+(n?1:-1);for(;n?c--:++c<o;)if(e(t[c],c,t))return c;return-1}(t,L,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function I(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function $(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function L(t){return t!=t}function K(t){return function(e){return t(e)}}function C(t,e){return t.has(e)}var V,D=Array.prototype,F=Function.prototype,W=Object.prototype,H=x["__core-js_shared__"],R=(V=/[^.]+$/.exec(H&&H.keys&&H.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"",B=F.toString,U=W.hasOwnProperty,J=W.toString,q=RegExp("^"+B.call(U).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),z=D.splice,G=Math.max,Q=Math.min,X=it(x,"Map"),Y=it(Object,"create");function Z(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function rt(t){var e=-1,r=t?t.length:0;for(this.__data__=new et;++e<r;)this.add(t[e])}function nt(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function ot(t){return!(!st(t)||(e=t,R&&R in e))&&(ut(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?q:E).test(function(t){if(null!=t){try{return B.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function ct(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=S}(t.length)&&!ut(t)}(t)}(t)?t:[]}function at(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function it(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return ot(r)?r:void 0}function ut(t){var e=st(t)?J.call(t):"";return e==k||e==T}function st(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}Z.prototype.clear=function(){this.__data__=Y?Y(null):{}},Z.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Z.prototype.get=function(t){var e=this.__data__;if(Y){var r=e[t];return r===A?void 0:r}return U.call(e,t)?e[t]:void 0},Z.prototype.has=function(t){var e=this.__data__;return Y?void 0!==e[t]:U.call(e,t)},Z.prototype.set=function(t,e){return this.__data__[t]=Y&&void 0===e?A:e,this},tt.prototype.clear=function(){this.__data__=[]},tt.prototype.delete=function(t){var e=this.__data__,r=nt(e,t);return!(r<0||(r==e.length-1?e.pop():z.call(e,r,1),0))},tt.prototype.get=function(t){var e=this.__data__,r=nt(e,t);return r<0?void 0:e[r][1]},tt.prototype.has=function(t){return nt(this.__data__,t)>-1},tt.prototype.set=function(t,e){var r=this.__data__,n=nt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},et.prototype.clear=function(){this.__data__={hash:new Z,map:new(X||tt),string:new Z}},et.prototype.delete=function(t){return at(this,t).delete(t)},et.prototype.get=function(t){return at(this,t).get(t)},et.prototype.has=function(t){return at(this,t).has(t)},et.prototype.set=function(t,e){return at(this,t).set(t,e),this},rt.prototype.add=rt.prototype.push=function(t){return this.__data__.set(t,A),this},rt.prototype.has=function(t){return this.__data__.has(t)};var ft=function(t,e){return e=G(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=G(r.length-e,0),c=Array(o);++n<o;)c[n]=r[e+n];n=-1;for(var a=Array(e+1);++n<e;)a[n]=r[n];return a[e]=c,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,a)}}(function(t){var e=$(t,ct);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?I:N,o=t[0].length,c=t.length,a=c,i=Array(c),u=1/0,s=[];a--;){var f=t[a];a&&e&&(f=$(f,K(e))),u=Q(f.length,u),i[a]=!r&&(e||o>=120&&f.length>=120)?new rt(a&&f):void 0}f=t[0];var p=-1,l=i[0];t:for(;++p<o&&s.length<u;){var h=f[p],y=e?e(h):h;if(h=r||0!==h?h:0,!(l?C(l,y):n(s,y,r))){for(a=c;--a;){var g=i[a];if(!(g?C(g,y):n(t[a],y,r)))continue t}l&&l.push(y),s.push(h)}}return s}(e):[]});function pt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var lt=e(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function c(t){var e=parseInt(t);return e.toString()===t?e:t}function a(t){t=t||{};var a=function(t){return Object.keys(a).reduce(function(e,r){return"create"===r?e:("function"==typeof a[r]&&(e[r]=a[r].bind(a,t)),e)},{})};function i(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function u(t,e){if(i(t,e))return t[e]}function s(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return s(t,e.split(".").map(c),r,n);var o=e[0],a=u(t,o);return 1===e.length?(void 0!==a&&n||(t[o]=r),a):(void 0===a&&("number"==typeof e[1]?t[o]=[]:t[o]={}),s(t[o],e.slice(1),r,n))}return a.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var a=0;a<n.length;a++){var i=c(n[a]);if(!("number"==typeof i&&o(r)&&i<r.length||(t.includeInheritedProps?i in Object(r):e(r,i))))return!1;r=r[i]}return!0},a.ensureExists=function(t,e,r){return s(t,e,r,!0)},a.set=function(t,e,r,n){return s(t,e,r,n)},a.insert=function(t,e,r,n){var c=a.get(t,e);n=~~n,o(c)||(c=[],a.set(t,e,c)),c.splice(n,0,r)},a.empty=function(t,e){var c,u;if(!r(e)&&null!=t&&(c=a.get(t,e))){if("string"==typeof c)return a.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(c))return a.set(t,e,!1);if("number"==typeof c)return a.set(t,e,0);if(o(c))c.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(c))return a.set(t,e,null);for(u in c)i(c,u)&&delete c[u]}}},a.push=function(t,e){var r=a.get(t,e);o(r)||(r=[],a.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,r){for(var n,o=0,c=e.length;o<c;o++)if(void 0!==(n=a.get(t,e[o])))return n;return r},a.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return a.get(t,e.split("."),r);var n=c(e[0]),o=u(t,n);return void 0===o?r:1===e.length?o:a.get(t[n],e.slice(1),r)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var n=c(e[0]);return i(t,n)?1!==e.length?a.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},a}var i=a();return i.create=a,i.withInheritedProps=a({includeInheritedProps:!0}),i}()}),ht=function(t){var e=t%100;if(e>=10&&e<=20)return"th";var r=t%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function yt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return t+ht(t)}yt.indicator=ht;var gt=yt,vt=/[|\\{}()[\]^$+*?.]/g,dt=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(vt,"\\$&")};const bt=new Map;function _t(t,e){const r=Object.assign({caseSensitive:!1},e),n=t+JSON.stringify(r);if(bt.has(n))return bt.get(n);const o="!"===t[0];o&&(t=t.slice(1)),t=dt(t).replace(/\\\*/g,".*");const c=new RegExp(`^${t}$`,r.caseSensitive?"":"i");return c.negated=o,bt.set(n,c),c}var mt=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>_t(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};return mt.isMatch=((t,e,r)=>{const n=_t(e,r),o=n.test(t);return n.negated?!o:o}),function(t,e,n){return function t(e,n,o){var c=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];function a(t){return null!=t}function i(t){return"Object"===r(t)}function s(t,e){return e=pt(e),Array.from(t).filter(function(t){return!e.some(function(e){return mt.isMatch(t,e,{caseSensitive:!0})})})}function f(t){if(t.includes(".")){var e=t.split(".");return e.pop(),e.join(".")}return t}var p=["any","anything","every","everything","all","whatever","whatevs"],l=Array.isArray;if(!a(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");var h,y={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};if(h=a(o)&&i(o)?Object.assign({},y,o):Object.assign({},y),a(h.ignoreKeys)&&h.ignoreKeys?h.ignoreKeys=pt(h.ignoreKeys):h.ignoreKeys=[],a(h.ignorePaths)&&h.ignorePaths?h.ignorePaths=pt(h.ignorePaths):h.ignorePaths=[],a(h.acceptArraysIgnore)&&h.acceptArraysIgnore?h.acceptArraysIgnore=pt(h.acceptArraysIgnore):h.acceptArraysIgnore=[],h.msg="string"==typeof h.msg?h.msg.trim():h.msg,":"===h.msg[h.msg.length-1]&&(h.msg=h.msg.slice(0,h.msg.length-1).trim()),h.schema&&Object.keys(h.schema).forEach(function(t){l(h.schema[t])||(h.schema[t]=[h.schema[t]]),h.schema[t]=h.schema[t].map(String).map(function(t){return t.toLowerCase()}).map(function(t){return t.trim()})}),a(n)||(n={}),c&&t(h,y,{enforceStrictKeyset:!1},!1),h.enforceStrictKeyset)if(a(h.schema)&&Object.keys(h.schema).length>0){if(0!==s(u(Object.keys(e),Object.keys(n).concat(Object.keys(h.schema))),h.ignoreKeys).length){var g=u(Object.keys(e),Object.keys(n).concat(Object.keys(h.schema)));throw new TypeError("".concat(h.msg,": ").concat(h.optsVarName,".enforceStrictKeyset is on and the following key").concat(g.length>1?"s":""," ").concat(g.length>1?"are":"is"," not covered by schema and/or reference objects: ").concat(g.join(", ")))}}else{if(!(a(n)&&Object.keys(n).length>0))throw new TypeError("".concat(h.msg,": Both ").concat(h.optsVarName,".schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!"));if(0!==s(u(Object.keys(e),Object.keys(n)),h.ignoreKeys).length){var v=u(Object.keys(e),Object.keys(n));throw new TypeError("".concat(h.msg,": The input object has key").concat(v.length>1?"s":""," which ").concat(v.length>1?"are":"is"," not covered by the reference object: ").concat(v.join(", ")))}if(0!==s(u(Object.keys(n),Object.keys(e)),h.ignoreKeys).length){var d=u(Object.keys(n),Object.keys(e));throw new TypeError("".concat(h.msg,": The reference object has key").concat(d.length>1?"s":""," which ").concat(d.length>1?"are":"is"," not present in the input object: ").concat(d.join(", ")))}}O(e,function(t,e,o){var c=void 0!==e?e:t;if(!(!h.enforceStrictKeyset||!i(c)&&!l(c)&&l(o.parent)||a(h.schema)&&i(h.schema)&&(!i(h.schema)||Object.keys(h.schema).length&&(l(o.parent)||Object.prototype.hasOwnProperty.call(h.schema,o.path))&&(!l(o.parent)||lt.has(h.schema,f(o.path))))||a(n)&&i(n)&&(!i(n)||Object.keys(n).length&&(h.acceptArrays||lt.has(n,o.path))&&(!h.acceptArrays||(l(o.parent)||lt.has(n,o.path))&&(!l(o.parent)||lt.has(n,f(o.path)))))))throw new TypeError("".concat(h.msg,": ").concat(h.optsVarName,".").concat(o.path," is neither covered by reference object (second input argument), nor ").concat(h.optsVarName,".schema! To stop this error, turn off ").concat(h.optsVarName,".enforceStrictKeyset or provide some type reference (2nd argument or ").concat(h.optsVarName,".schema)."));if(i(h.schema)&&Object.keys(h.schema).length&&Object.prototype.hasOwnProperty.call(h.schema,o.path)){var u=pt(h.schema[o.path]).map(String).map(function(t){return t.toLowerCase()});if(lt.set(h.schema,o.path,u),!(ft(u,p).length||(!0===c||!1===c||u.includes(r(c).toLowerCase()))&&(!0!==c&&!1!==c||u.includes(String(c))||u.includes("boolean")))){if(!l(c)||!h.acceptArrays)throw new TypeError("".concat(h.msg,": ").concat(h.optsVarName,".").concat(o.path," was customised to ").concat("string"!==r(c)?'"':"").concat(JSON.stringify(c,null,0)).concat("string"!==r(c)?'"':""," (").concat(r(c).toLowerCase(),") which is not among the allowed types in schema (").concat(u.join(", "),")"));for(var s=0,y=c.length;s<y;s++)if(!u.includes(r(c[s]).toLowerCase()))throw new TypeError("".concat(h.msg,": ").concat(h.optsVarName,".").concat(o.path,".").concat(s,", the ").concat(gt(s+1)," element (equal to ").concat(JSON.stringify(c[s],null,0),") is of a type ").concat(r(c[s]).toLowerCase(),", but only the following are allowed by the ").concat(h.optsVarName,".schema: ").concat(u.join(", ")))}}else if(a(n)&&Object.keys(n).length&&lt.has(n,o.path)&&r(c)!==r(lt.get(n,o.path))&&(!h.ignoreKeys||!h.ignoreKeys.some(function(e){return mt.isMatch(t,e)}))&&(!h.ignorePaths||!h.ignorePaths.some(function(t){return mt.isMatch(o.path,t)}))){var g=lt.get(n,o.path);if(!h.acceptArrays||!l(c)||h.acceptArraysIgnore.includes(t))throw new TypeError("".concat(h.msg,": ").concat(h.optsVarName,".").concat(o.path," was customised to ").concat("string"===r(c).toLowerCase()?"":'"').concat(JSON.stringify(c,null,0)).concat("string"===r(c).toLowerCase()?"":'"'," which is not ").concat(r(g).toLowerCase()," but ").concat(r(c).toLowerCase()));if(!c.every(function(e){return r(e).toLowerCase()===r(n[t]).toLowerCase()}))throw new TypeError("".concat(h.msg,": ").concat(h.optsVarName,".").concat(o.path," was customised to be array, but not all of its elements are ").concat(r(n[t]).toLowerCase(),"-type"))}return c})}(t,e,n)}});
