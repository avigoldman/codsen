!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).jsRowNum=e()}(this,function(){"use strict";var t=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},e=function(t,e){if("string"!=typeof t)return!1;if(e&&"includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)},n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t,e){return t(e={exports:{}},e.exports),e.exports}var o=r(function(t,e){(e=t.exports=function(t){return t+e.suffix(+t)}).suffix=function(t){return t%=100,1===Math.floor(t/10)?"th":t%10==1?"st":t%10==2?"nd":t%10==3?"rd":"th"}}),i=(o.suffix,r(function(t,e){var r,o,i,s,a,u,f,c,l,p,h,y,g,d,v,_,m,w,b,$;t.exports=(r="function"==typeof Promise,o="object"==typeof self?self:n,i="undefined"!=typeof Symbol,s="undefined"!=typeof Map,a="undefined"!=typeof Set,u="undefined"!=typeof WeakMap,f="undefined"!=typeof WeakSet,c="undefined"!=typeof DataView,l=i&&void 0!==Symbol.iterator,p=i&&void 0!==Symbol.toStringTag,h=a&&"function"==typeof Set.prototype.entries,y=s&&"function"==typeof Map.prototype.entries,g=h&&Object.getPrototypeOf((new Set).entries()),d=y&&Object.getPrototypeOf((new Map).entries()),v=l&&"function"==typeof Array.prototype[Symbol.iterator],_=v&&Object.getPrototypeOf([][Symbol.iterator]()),m=l&&"function"==typeof String.prototype[Symbol.iterator],w=m&&Object.getPrototypeOf(""[Symbol.iterator]()),b=8,$=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===p||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var n=p&&t[Symbol.toStringTag];if("string"==typeof n)return n;var i=Object.getPrototypeOf(t);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":r&&i===Promise.prototype?"Promise":a&&i===Set.prototype?"Set":s&&i===Map.prototype?"Map":f&&i===WeakSet.prototype?"WeakSet":u&&i===WeakMap.prototype?"WeakMap":c&&i===DataView.prototype?"DataView":s&&i===d?"Map Iterator":a&&i===g?"Set Iterator":v&&i===_?"Array Iterator":m&&i===w?"String Iterator":null===i?"Object":Object.prototype.toString.call(t).slice(b,$)})}));function s(t,e,n){if(e!=e)return function(t,e,n,r){for(var o=t.length,i=n+(r?1:-1);r?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,u,n);for(var r=n-1,o=t.length;++r<o;)if(t[r]===e)return r;return-1}function a(t,e,n,r){for(var o=n-1,i=t.length;++o<i;)if(r(t[o],e))return o;return-1}function u(t){return t!=t}var f=Array.prototype.splice;function c(t,e,n,r){var o,i=r?a:s,u=-1,c=e.length,l=t;for(t===e&&(e=function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(e)),n&&(l=function(t,e){for(var n=-1,r=t?t.length:0,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}(t,(o=n,function(t){return o(t)})));++u<c;)for(var p=0,h=e[u],y=n?n(h):h;(p=i(l,y,p,r))>-1;)l!==t&&f.call(l,p,1),f.call(t,p,1);return t}var l=function(t,e){return t&&t.length&&e&&e.length?c(t,e):t},p=r(function(t,e){var r=200,o="__lodash_hash_undefined__",i=9007199254740991,s="[object Arguments]",a="[object Boolean]",u="[object Date]",f="[object Function]",c="[object GeneratorFunction]",l="[object Map]",p="[object Number]",h="[object Object]",y="[object RegExp]",g="[object Set]",d="[object String]",v="[object Symbol]",_="[object ArrayBuffer]",m="[object DataView]",w="[object Float32Array]",b="[object Float64Array]",$="[object Int8Array]",O="[object Int16Array]",j="[object Int32Array]",T="[object Uint8Array]",A="[object Uint8ClampedArray]",E="[object Uint16Array]",S="[object Uint32Array]",I=/\w*$/,M=/^\[object .+?Constructor\]$/,W=/^(?:0|[1-9]\d*)$/,R={};R[s]=R["[object Array]"]=R[_]=R[m]=R[a]=R[u]=R[w]=R[b]=R[$]=R[O]=R[j]=R[l]=R[p]=R[h]=R[y]=R[g]=R[d]=R[v]=R[T]=R[A]=R[E]=R[S]=!0,R["[object Error]"]=R[f]=R["[object WeakMap]"]=!1;var H="object"==typeof n&&n&&n.Object===Object&&n,k="object"==typeof self&&self&&self.Object===Object&&self,Z=H||k||Function("return this")(),C=e&&!e.nodeType&&e,L=C&&t&&!t.nodeType&&t,N=L&&L.exports===C;function J(t,e){return t.set(e[0],e[1]),t}function P(t,e){return t.add(e),t}function q(t,e,n,r){var o=-1,i=t?t.length:0;for(r&&i&&(n=t[++o]);++o<i;)n=e(n,t[o],o,t);return n}function B(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function D(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function x(t,e){return function(n){return t(e(n))}}function z(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}var U,F=Array.prototype,K=Function.prototype,Q=Object.prototype,G=Z["__core-js_shared__"],X=(U=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+U:"",Y=K.toString,V=Q.hasOwnProperty,tt=Q.toString,et=RegExp("^"+Y.call(V).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nt=N?Z.Buffer:void 0,rt=Z.Symbol,ot=Z.Uint8Array,it=x(Object.getPrototypeOf,Object),st=Object.create,at=Q.propertyIsEnumerable,ut=F.splice,ft=Object.getOwnPropertySymbols,ct=nt?nt.isBuffer:void 0,lt=x(Object.keys,Object),pt=Lt(Z,"DataView"),ht=Lt(Z,"Map"),yt=Lt(Z,"Promise"),gt=Lt(Z,"Set"),dt=Lt(Z,"WeakMap"),vt=Lt(Object,"create"),_t=Bt(pt),mt=Bt(ht),wt=Bt(yt),bt=Bt(gt),$t=Bt(dt),Ot=rt?rt.prototype:void 0,jt=Ot?Ot.valueOf:void 0;function Tt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function At(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Et(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function St(t){this.__data__=new At(t)}function It(t,e){var n=xt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&zt(t)}(t)&&V.call(t,"callee")&&(!at.call(t,"callee")||tt.call(t)==s)}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,o=!!r;for(var i in t)!e&&!V.call(t,i)||o&&("length"==i||Pt(i,r))||n.push(i);return n}function Mt(t,e,n){var r=t[e];V.call(t,e)&&Dt(r,n)&&(void 0!==n||e in t)||(t[e]=n)}function Wt(t,e){for(var n=t.length;n--;)if(Dt(t[n][0],e))return n;return-1}function Rt(t,e,n,r,o,i,M){var W;if(r&&(W=i?r(t,o,i,M):r(t)),void 0!==W)return W;if(!Kt(t))return t;var H=xt(t);if(H){if(W=function(t){var e=t.length,n=t.constructor(e);e&&"string"==typeof t[0]&&V.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!e)return function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(t,W)}else{var k=Jt(t),Z=k==f||k==c;if(Ut(t))return function(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,e);if(k==h||k==s||Z&&!i){if(B(t))return i?t:{};if(W=function(t){return"function"!=typeof t.constructor||qt(t)?{}:(e=it(t),Kt(e)?st(e):{});var e}(Z?{}:t),!e)return function(t,e){return Zt(t,Nt(t),e)}(t,function(t,e){return t&&Zt(e,Qt(e),t)}(W,t))}else{if(!R[k])return i?t:{};W=function(t,e,n,r){var o=t.constructor;switch(e){case _:return kt(t);case a:case u:return new o(+t);case m:return function(t,e){var n=e?kt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,r);case w:case b:case $:case O:case j:case T:case A:case E:case S:return function(t,e){var n=e?kt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,r);case l:return function(t,e,n){return q(e?n(D(t),!0):D(t),J,new t.constructor)}(t,r,n);case p:case d:return new o(t);case y:return(f=new(s=t).constructor(s.source,I.exec(s))).lastIndex=s.lastIndex,f;case g:return function(t,e,n){return q(e?n(z(t),!0):z(t),P,new t.constructor)}(t,r,n);case v:return i=t,jt?Object(jt.call(i)):{}}var i;var s,f}(t,k,Rt,e)}}M||(M=new St);var C=M.get(t);if(C)return C;if(M.set(t,W),!H)var L=n?function(t){return function(t,e,n){var r=e(t);return xt(t)?r:function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}(r,n(t))}(t,Qt,Nt)}(t):Qt(t);return function(t,e){for(var n=-1,r=t?t.length:0;++n<r&&!1!==e(t[n],n,t););}(L||t,function(o,i){L&&(o=t[i=o]),Mt(W,i,Rt(o,e,n,r,i,t,M))}),W}function Ht(t){return!(!Kt(t)||(e=t,X&&X in e))&&(Ft(t)||B(t)?et:M).test(Bt(t));var e}function kt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Zt(t,e,n,r){n||(n={});for(var o=-1,i=e.length;++o<i;){var s=e[o],a=r?r(n[s],t[s],s,n,t):void 0;Mt(n,s,void 0===a?t[s]:a)}return n}function Ct(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function Lt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Ht(n)?n:void 0}Tt.prototype.clear=function(){this.__data__=vt?vt(null):{}},Tt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Tt.prototype.get=function(t){var e=this.__data__;if(vt){var n=e[t];return n===o?void 0:n}return V.call(e,t)?e[t]:void 0},Tt.prototype.has=function(t){var e=this.__data__;return vt?void 0!==e[t]:V.call(e,t)},Tt.prototype.set=function(t,e){return this.__data__[t]=vt&&void 0===e?o:e,this},At.prototype.clear=function(){this.__data__=[]},At.prototype.delete=function(t){var e=this.__data__,n=Wt(e,t);return!(n<0||(n==e.length-1?e.pop():ut.call(e,n,1),0))},At.prototype.get=function(t){var e=this.__data__,n=Wt(e,t);return n<0?void 0:e[n][1]},At.prototype.has=function(t){return Wt(this.__data__,t)>-1},At.prototype.set=function(t,e){var n=this.__data__,r=Wt(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},Et.prototype.clear=function(){this.__data__={hash:new Tt,map:new(ht||At),string:new Tt}},Et.prototype.delete=function(t){return Ct(this,t).delete(t)},Et.prototype.get=function(t){return Ct(this,t).get(t)},Et.prototype.has=function(t){return Ct(this,t).has(t)},Et.prototype.set=function(t,e){return Ct(this,t).set(t,e),this},St.prototype.clear=function(){this.__data__=new At},St.prototype.delete=function(t){return this.__data__.delete(t)},St.prototype.get=function(t){return this.__data__.get(t)},St.prototype.has=function(t){return this.__data__.has(t)},St.prototype.set=function(t,e){var n=this.__data__;if(n instanceof At){var o=n.__data__;if(!ht||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new Et(o)}return n.set(t,e),this};var Nt=ft?x(ft,Object):function(){return[]},Jt=function(t){return tt.call(t)};function Pt(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||W.test(t))&&t>-1&&t%1==0&&t<e}function qt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Q)}function Bt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Dt(t,e){return t===e||t!=t&&e!=e}(pt&&Jt(new pt(new ArrayBuffer(1)))!=m||ht&&Jt(new ht)!=l||yt&&"[object Promise]"!=Jt(yt.resolve())||gt&&Jt(new gt)!=g||dt&&"[object WeakMap]"!=Jt(new dt))&&(Jt=function(t){var e=tt.call(t),n=e==h?t.constructor:void 0,r=n?Bt(n):void 0;if(r)switch(r){case _t:return m;case mt:return l;case wt:return"[object Promise]";case bt:return g;case $t:return"[object WeakMap]"}return e});var xt=Array.isArray;function zt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!Ft(t)}var Ut=ct||function(){return!1};function Ft(t){var e=Kt(t)?tt.call(t):"";return e==f||e==c}function Kt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Qt(t){return zt(t)?It(t):function(t){if(!qt(t))return lt(t);var e=[];for(var n in Object(t))V.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)}t.exports=function(t){return Rt(t,!0,!0)}}),h="[object Object]";var y,g,d=Function.prototype,v=Object.prototype,_=d.toString,m=v.hasOwnProperty,w=_.call(Object),b=v.toString,$=(y=Object.getPrototypeOf,g=Object,function(t){return y(g(t))});var O=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||b.call(t)!=h||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=$(t);if(null===e)return!0;var n=m.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&_.call(n)==w};const j=Array.isArray;function T(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function A(t,e){return function t(e,n,r){const o=p(e);let i,s,a,u,f;if((r=Object.assign({depth:-1,path:""},r)).depth+=1,j(o))for(i=0,s=o.length;i<s;i++){const e=`${r.path}.${i}`;void 0!==o[i]?(r.parent=p(o),a=t(n(o[i],void 0,Object.assign({},r,{path:T(e)})),n,Object.assign({},r,{path:T(e)})),Number.isNaN(a)&&i<o.length?(o.splice(i,1),i-=1):o[i]=a):o.splice(i,1)}else if(O(o))for(i=0,s=(u=Object.keys(o)).length;i<s;i++){f=u[i];const e=`${r.path}.${f}`;0===r.depth&&null!=f&&(r.topmostKey=f),r.parent=p(o),a=t(n(f,o[f],Object.assign({},r,{path:T(e)})),n,Object.assign({},r,{path:T(e)})),Number.isNaN(a)?delete o[f]:o[f]=a}return o}(t,e,{})}var E="__lodash_hash_undefined__",S=9007199254740991,I="[object Function]",M="[object GeneratorFunction]",W=/^\[object .+?Constructor\]$/,R="object"==typeof n&&n&&n.Object===Object&&n,H="object"==typeof self&&self&&self.Object===Object&&self,k=R||H||Function("return this")();function Z(t,e){return!!(t?t.length:0)&&function(t,e,n){if(e!=e)return function(t,e,n,r){var o=t.length,i=n+(r?1:-1);for(;r?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,N,n);var r=n-1,o=t.length;for(;++r<o;)if(t[r]===e)return r;return-1}(t,e,0)>-1}function C(t,e,n){for(var r=-1,o=t?t.length:0;++r<o;)if(n(e,t[r]))return!0;return!1}function L(t,e){for(var n=-1,r=t?t.length:0,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}function N(t){return t!=t}function J(t){return function(e){return t(e)}}function P(t,e){return t.has(e)}var q,B=Array.prototype,D=Function.prototype,x=Object.prototype,z=k["__core-js_shared__"],U=(q=/[^.]+$/.exec(z&&z.keys&&z.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"",F=D.toString,K=x.hasOwnProperty,Q=x.toString,G=RegExp("^"+F.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),X=B.splice,Y=Math.max,V=Math.min,tt=ct(k,"Map"),et=ct(Object,"create");function nt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function rt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function ot(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function it(t){var e=-1,n=t?t.length:0;for(this.__data__=new ot;++e<n;)this.add(t[e])}function st(t,e){for(var n,r,o=t.length;o--;)if((n=t[o][0])===(r=e)||n!=n&&r!=r)return o;return-1}function at(t){return!(!pt(t)||(e=t,U&&U in e))&&(lt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?G:W).test(function(t){if(null!=t){try{return F.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function ut(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=S}(t.length)&&!lt(t)}(t)}(t)?t:[]}function ft(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function ct(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return at(n)?n:void 0}function lt(t){var e=pt(t)?Q.call(t):"";return e==I||e==M}function pt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}nt.prototype.clear=function(){this.__data__=et?et(null):{}},nt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},nt.prototype.get=function(t){var e=this.__data__;if(et){var n=e[t];return n===E?void 0:n}return K.call(e,t)?e[t]:void 0},nt.prototype.has=function(t){var e=this.__data__;return et?void 0!==e[t]:K.call(e,t)},nt.prototype.set=function(t,e){return this.__data__[t]=et&&void 0===e?E:e,this},rt.prototype.clear=function(){this.__data__=[]},rt.prototype.delete=function(t){var e=this.__data__,n=st(e,t);return!(n<0||(n==e.length-1?e.pop():X.call(e,n,1),0))},rt.prototype.get=function(t){var e=this.__data__,n=st(e,t);return n<0?void 0:e[n][1]},rt.prototype.has=function(t){return st(this.__data__,t)>-1},rt.prototype.set=function(t,e){var n=this.__data__,r=st(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},ot.prototype.clear=function(){this.__data__={hash:new nt,map:new(tt||rt),string:new nt}},ot.prototype.delete=function(t){return ft(this,t).delete(t)},ot.prototype.get=function(t){return ft(this,t).get(t)},ot.prototype.has=function(t){return ft(this,t).has(t)},ot.prototype.set=function(t,e){return ft(this,t).set(t,e),this},it.prototype.add=it.prototype.push=function(t){return this.__data__.set(t,E),this},it.prototype.has=function(t){return this.__data__.has(t)};var ht=function(t,e){return e=Y(void 0===e?t.length-1:e,0),function(){for(var n=arguments,r=-1,o=Y(n.length-e,0),i=Array(o);++r<o;)i[r]=n[e+r];r=-1;for(var s=Array(e+1);++r<e;)s[r]=n[r];return s[e]=i,function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}(t,this,s)}}(function(t){var e=L(t,ut);return e.length&&e[0]===t[0]?function(t,e,n){for(var r=n?C:Z,o=t[0].length,i=t.length,s=i,a=Array(i),u=1/0,f=[];s--;){var c=t[s];s&&e&&(c=L(c,J(e))),u=V(c.length,u),a[s]=!n&&(e||o>=120&&c.length>=120)?new it(s&&c):void 0}c=t[0];var l=-1,p=a[0];t:for(;++l<o&&f.length<u;){var h=c[l],y=e?e(h):h;if(h=n||0!==h?h:0,!(p?P(p,y):r(f,y,n))){for(s=i;--s;){var g=a[s];if(!(g?P(g,y):r(t[s],y,n)))continue t}p&&p.push(y),f.push(h)}}return f}(e):[]});function yt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var gt=r(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function n(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var n in t)if(e(t,n))return!1;return!0}return!1}function r(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function i(t){var e=parseInt(t);return e.toString()===t?e:t}function s(t){t=t||{};var s=function(t){return Object.keys(s).reduce(function(e,n){return"create"===n?e:("function"==typeof s[n]&&(e[n]=s[n].bind(s,t)),e)},{})};function a(n,r){return t.includeInheritedProps||"number"==typeof r&&Array.isArray(n)||e(n,r)}function u(t,e){if(a(t,e))return t[e]}function f(t,e,n,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return f(t,e.split(".").map(i),n,r);var o=e[0],s=u(t,o);return 1===e.length?(void 0!==s&&r||(t[o]=n),s):(void 0===s&&("number"==typeof e[1]?t[o]=[]:t[o]={}),f(t[o],e.slice(1),n,r))}return s.has=function(n,r){if("number"==typeof r?r=[r]:"string"==typeof r&&(r=r.split(".")),!r||0===r.length)return!!n;for(var s=0;s<r.length;s++){var a=i(r[s]);if(!("number"==typeof a&&o(n)&&a<n.length||(t.includeInheritedProps?a in Object(n):e(n,a))))return!1;n=n[a]}return!0},s.ensureExists=function(t,e,n){return f(t,e,n,!0)},s.set=function(t,e,n,r){return f(t,e,n,r)},s.insert=function(t,e,n,r){var i=s.get(t,e);r=~~r,o(i)||(i=[],s.set(t,e,i)),i.splice(r,0,n)},s.empty=function(t,e){var i,u;if(!n(e)&&null!=t&&(i=s.get(t,e))){if("string"==typeof i)return s.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===r(t)}(i))return s.set(t,e,!1);if("number"==typeof i)return s.set(t,e,0);if(o(i))i.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===r(t)}(i))return s.set(t,e,null);for(u in i)a(i,u)&&delete i[u]}}},s.push=function(t,e){var n=s.get(t,e);o(n)||(n=[],s.set(t,e,n)),n.push.apply(n,Array.prototype.slice.call(arguments,2))},s.coalesce=function(t,e,n){for(var r,o=0,i=e.length;o<i;o++)if(void 0!==(r=s.get(t,e[o])))return r;return n},s.get=function(t,e,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return n;if("string"==typeof e)return s.get(t,e.split("."),n);var r=i(e[0]),o=u(t,r);return void 0===o?n:1===e.length?o:s.get(t[r],e.slice(1),n)},s.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(n(e))return t;if("string"==typeof e)return s.del(t,e.split("."));var r=i(e[0]);return a(t,r)?1!==e.length?s.del(t[r],e.slice(1)):(o(t)?t.splice(r,1):delete t[r],t):t},s}var a=s();return a.create=s,a.withInheritedProps=s({includeInheritedProps:!0}),a}()}),dt=function(t){var e=t%100;if(e>=10&&e<=20)return"th";var n=t%10;return 1===n?"st":2===n?"nd":3===n?"rd":"th"};function vt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return t+dt(t)}vt.indicator=dt;var _t=vt,mt=/[|\\{}()[\]^$+*?.]/g,wt=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(mt,"\\$&")};const bt=new Map;function $t(t,e){const n=Object.assign({caseSensitive:!1},e),r=t+JSON.stringify(n);if(bt.has(r))return bt.get(r);const o="!"===t[0];o&&(t=t.slice(1)),t=wt(t).replace(/\\\*/g,".*");const i=new RegExp(`^${t}$`,n.caseSensitive?"":"i");return i.negated=o,bt.set(r,i),i}var Ot=(t,e,n)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const r="!"===e[0][0];e=e.map(t=>$t(t,n));const o=[];for(const n of t){let t=r;for(const r of e)r.test(n)&&(t=!r.negated);t&&o.push(n)}return o};function jt(t,e,n){return function t(e,n,r,o=!0){function s(t){return null!=t}function a(t){return"Object"===i(t)}function u(t,e){return e=yt(e),Array.from(t).filter(t=>!e.some(e=>Ot.isMatch(t,e,{caseSensitive:!0})))}function f(t){if(t.includes(".")){const e=t.split(".");return e.pop(),e.join(".")}return t}const c=["any","anything","every","everything","all","whatever","whatevs"],p=Array.isArray;if(!s(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const h={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let y;if(y=s(r)&&a(r)?Object.assign({},h,r):Object.assign({},h),s(y.ignoreKeys)&&y.ignoreKeys?y.ignoreKeys=yt(y.ignoreKeys):y.ignoreKeys=[],s(y.ignorePaths)&&y.ignorePaths?y.ignorePaths=yt(y.ignorePaths):y.ignorePaths=[],s(y.acceptArraysIgnore)&&y.acceptArraysIgnore?y.acceptArraysIgnore=yt(y.acceptArraysIgnore):y.acceptArraysIgnore=[],y.msg="string"==typeof y.msg?y.msg.trim():y.msg,":"===y.msg[y.msg.length-1]&&(y.msg=y.msg.slice(0,y.msg.length-1).trim()),y.schema&&(Object.keys(y.schema).forEach(t=>{if(a(y.schema[t])){const e={};A(y.schema[t],(n,r,o)=>{const i=void 0!==r?r:n;return p(i)||a(i)||(e[`${t}.${o.path}`]=i),i}),delete y.schema[t],y.schema=Object.assign(y.schema,e)}}),Object.keys(y.schema).forEach(t=>{p(y.schema[t])||(y.schema[t]=[y.schema[t]]),y.schema[t]=y.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),s(n)||(n={}),o&&t(y,h,{enforceStrictKeyset:!1},!1),y.enforceStrictKeyset)if(s(y.schema)&&Object.keys(y.schema).length>0){if(0!==u(l(Object.keys(e),Object.keys(n).concat(Object.keys(y.schema))),y.ignoreKeys).length){const t=l(Object.keys(e),Object.keys(n).concat(Object.keys(y.schema)));throw new TypeError(`${y.msg}: ${y.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(s(n)&&Object.keys(n).length>0))throw new TypeError(`${y.msg}: Both ${y.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==u(l(Object.keys(e),Object.keys(n)),y.ignoreKeys).length){const t=l(Object.keys(e),Object.keys(n));throw new TypeError(`${y.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==u(l(Object.keys(n),Object.keys(e)),y.ignoreKeys).length){const t=l(Object.keys(n),Object.keys(e));throw new TypeError(`${y.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const g=[];A(e,(t,e,r)=>{const o=void 0!==e?e:t;if(p(g)&&g.length&&g.some(t=>r.path.startsWith(t)))return o;if(!(!y.enforceStrictKeyset||!a(o)&&!p(o)&&p(r.parent)||s(y.schema)&&a(y.schema)&&(!a(y.schema)||Object.keys(y.schema).length&&(p(r.parent)||Object.prototype.hasOwnProperty.call(y.schema,r.path))&&(!p(r.parent)||gt.has(y.schema,f(r.path))))||s(n)&&a(n)&&(!a(n)||Object.keys(n).length&&(y.acceptArrays||gt.has(n,r.path))&&(!y.acceptArrays||(p(r.parent)||gt.has(n,r.path))&&(!p(r.parent)||gt.has(n,f(r.path)))))))throw new TypeError(`${y.msg}: ${y.optsVarName}.${r.path} is neither covered by reference object (second input argument), nor ${y.optsVarName}.schema! To stop this error, turn off ${y.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${y.optsVarName}.schema).`);if(a(y.schema)&&Object.keys(y.schema).length&&Object.prototype.hasOwnProperty.call(y.schema,r.path)){const t=yt(y.schema[r.path]).map(String).map(t=>t.toLowerCase());if(gt.set(y.schema,r.path,t),ht(t,c).length)g.push(r.path);else if(!0!==o&&!1!==o&&!t.includes(i(o).toLowerCase())||(!0===o||!1===o)&&!t.includes(String(o))&&!t.includes("boolean")){if(!p(o)||!y.acceptArrays)throw new TypeError(`${y.msg}: ${y.optsVarName}.${r.path} was customised to ${"string"!==i(o)?'"':""}${JSON.stringify(o,null,0)}${"string"!==i(o)?'"':""} (type: ${i(o).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,n=o.length;e<n;e++)if(!t.includes(i(o[e]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${r.path}.${e}, the ${_t(e+1)} element (equal to ${JSON.stringify(o[e],null,0)}) is of a type ${i(o[e]).toLowerCase()}, but only the following are allowed by the ${y.optsVarName}.schema: ${t.join(", ")}`)}}else if(s(n)&&Object.keys(n).length&&gt.has(n,r.path)&&i(o)!==i(gt.get(n,r.path))&&(!y.ignoreKeys||!y.ignoreKeys.some(e=>Ot.isMatch(t,e)))&&(!y.ignorePaths||!y.ignorePaths.some(t=>Ot.isMatch(r.path,t)))){const e=gt.get(n,r.path);if(!y.acceptArrays||!p(o)||y.acceptArraysIgnore.includes(t))throw new TypeError(`${y.msg}: ${y.optsVarName}.${r.path} was customised to ${"string"===i(o).toLowerCase()?"":'"'}${JSON.stringify(o,null,0)}${"string"===i(o).toLowerCase()?"":'"'} which is not ${i(e).toLowerCase()} but ${i(o).toLowerCase()}`);if(!o.every(e=>i(e).toLowerCase()===i(n[t]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${r.path} was customised to be array, but not all of its elements are ${i(n[t]).toLowerCase()}-type`)}return o})}(t,e,n)}Ot.isMatch=((t,e,n)=>{const r=$t(e,n),o=r.test(t);return r.negated?!o:o});const Tt=Array.isArray;function At(e,n){if(!Tt(e))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===e.length)return e;const r={strictlyTwoElementsInRangeArrays:!1,progressFn:null},i=Object.assign({},r,n);let s,a;if(jt(i,r,{msg:"ranges-sort: [THROW_ID_02*]",schema:{progressFn:["function","false","null"]}}),i.strictlyTwoElementsInRangeArrays&&!e.every((t,e)=>2===t.length||(s=e,a=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${o(s)} range (${JSON.stringify(e[s],null,4)}) has not two but ${a} elements!`);if(!e.every((e,n)=>!(!t(e[0],{includeZero:!0})||!t(e[1],{includeZero:!0}))||(s=n,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${o(s)} range (${JSON.stringify(e[s],null,4)}) does not consist of only natural numbers!`);const u=e.length*e.length;let f=0;return Array.from(e).sort((t,e)=>(i.progressFn&&(f++,i.progressFn(Math.floor(100*f/u))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1))}function Et(t,e){if(!Array.isArray(t))return t;if(e&&"function"!=typeof e)throw new Error(`ranges-merge: [THROW_ID_01] the second input argument must be a function! It was given of a type: "${typeof e}", equal to ${JSON.stringify(e,null,4)}`);const n=p(t).filter(t=>void 0!==t[2]||t[0]!==t[1]);let r,o,i;const s=(r=e?At(n,{progressFn:t=>{(i=Math.floor(t/5))!==o&&(o=i,e(i))}}):At(n)).length-1;for(let t=s;t>0;t--)e&&(i=Math.floor(78*(1-t/s))+21)!==o&&i>o&&(o=i,e(i)),(r[t][0]<=r[t-1][0]||r[t][0]<=r[t-1][1])&&(r[t-1][0]=Math.min(r[t][0],r[t-1][0]),r[t-1][1]=Math.max(r[t][1],r[t-1][1]),void 0!==r[t][2]&&(r[t-1][0]>=r[t][0]||r[t-1][1]<=r[t][1])&&null!==r[t-1][2]&&(null===r[t][2]&&null!==r[t-1][2]?r[t-1][2]=null:void 0!==r[t-1][2]?r[t-1][2]+=r[t][2]:r[t-1][2]=r[t][2]),r.splice(t,1),t=r.length);return r}function St(t,e){let n;if(n=e&&"number"==typeof e?e:1,"string"==typeof t){if(0===t.length)return"";if(""===t.trim()){const e=(t.match(/\n/g)||[]).length;return e?"\n".repeat(Math.min(e,n)):" "}let e="";if(""===t[0].trim()){e=" ";let r=0;for(let e=0,n=t.length;e<n&&("\n"===t[e]&&r++,0===t[e].trim().length);e++);r&&(e="\n".repeat(Math.min(r,n)))}let r="";if(""===t.slice(-1).trim()){r=" ";let e=0;for(let n=t.length;n--&&("\n"===t[n]&&e++,0===t[n].trim().length););e&&(r="\n".repeat(Math.min(e,n)))}return e+t.trim()+r}return t}function It(t){return null!=t}const Mt=Array.isArray;function Wt(t){return"string"==typeof t}function Rt(t){return e(t,{includeZero:!0})?parseInt(t,10):t}class Ht{constructor(t){const e={limitToBeAddedWhitespace:!1,limitLinebreaksCount:1},n=Object.assign({},e,t);jt(n,e,{msg:"string-slices-array-push: [THROW_ID_02*]"}),this.opts=n}add(n=function(t){throw new Error(`string-slices-array-push/Slices/add(): [THROW_ID_01] Missing ${o(t)} input parameter!`)}(1),r,i,...s){if(s.length>0)throw new TypeError(`string-slices-array-push/Slices/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ${JSON.stringify(s,null,4)}`);if(null===n&&void 0===r&&void 0===i)return;const a=e(n,{includeZero:!0})?parseInt(n,10):n,u=e(r,{includeZero:!0})?parseInt(r,10):r;if(Mt(n)&&!It(r)){let e,r;if(n.length>0){if(!n.every((t,n)=>!!Mt(t)||(e=n,r=t,!1)))throw new TypeError(`string-slices-array-push/Slices/add(): [THROW_ID_07] first argument was given as array but it contains not only range arrays. For example, at index ${e} we have ${typeof r}-type value:\n${JSON.stringify(r,null,4)}.`);n.forEach((e,n)=>{if(!t(Rt(e[0]),{includeZero:!0}))throw new TypeError(`string-slices-array-push/Slices/add(): [THROW_ID_06] The ${o(n)} ranges array's starting range index, an element at its zero'th index, is not a natural number! It's equal to: ${e[0]}.`);if(!t(Rt(e[1]),{includeZero:!0}))throw new TypeError(`string-slices-array-push/Slices/add(): [THROW_ID_05] The ${o(n)} ranges array's ending range index, an element at its first index, is not a natural number! It's equal to: ${e[1]}.`);if(It(e[2])&&!Wt(e[2]))throw new TypeError(`string-slices-array-push/Slices/add(): [THROW_ID_04] The ${o(n)} ranges array's "to add" value is not string but ${typeof e[2]}! It's equal to: ${e[2]}.`);this.add(...e)})}}else{if(!t(a,{includeZero:!0})||!t(u,{includeZero:!0}))throw t(a,{includeZero:!0})?new TypeError(`string-slices-array-push/Slices/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof u}" equal to: ${JSON.stringify(u,null,4)}`):new TypeError(`string-slices-array-push/Slices/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof a}" equal to: ${JSON.stringify(a,null,4)}`);if(It(i)&&!Wt(i))throw new TypeError(`string-slices-array-push/Slices/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof i}, equal to:\n${JSON.stringify(i,null,4)}`);if(It(this.slices)&&Mt(this.last())&&a===this.last()[1]){if(this.last()[1]=u,null!==this.last()[2]&&It(i)){let t=It(this.last()[2])&&this.last()[2].length>0?this.last()[2]+i:i;this.opts.limitToBeAddedWhitespace&&(t=St(t,this.opts.limitLinebreaksCount)),Wt(t)&&!t.length||(this.last()[2]=t)}}else this.slices||(this.slices=[]),this.slices.push(void 0===i||Wt(i)&&!i.length?[a,u]:[a,u,this.opts.limitToBeAddedWhitespace?St(i,this.opts.limitLinebreaksCount):i])}}push(t,e,n,...r){this.add(t,e,n,...r)}current(){return null!=this.slices?(this.slices=Et(this.slices),this.opts.limitToBeAddedWhitespace?this.slices.map(t=>It(t[2])?[t[0],t[1],St(t[2],this.opts.limitLinebreaksCount)]:t):this.slices):null}wipe(){this.slices=void 0}last(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}const kt=Array.isArray;function Zt(t){return null!=t}function Ct(t,e,n){if(e>>=0,n=Zt(n)?String(n):" ",!Zt(t))return t;if("number"==typeof t)t=String(t);else if("string"!=typeof t)return t;return t.length>=e?t:((e-=t.length)>n.length&&(n+=n.repeat(e/n.length)),n.slice(0,e)+t)}return function(n,r){if("string"!=typeof n||0===n.length)return n;function i(t){return/[0-9]/.test(t)}var s={padStart:3},a=Object.assign({},s,r);(!a.padStart||"number"!=typeof a.padStart||"number"==typeof a.padStart&&a.padStart<0)&&(a.padStart=0),jt(a,s,{msg:"js-row-num: [THROW_ID_04*]"});var u,f,c=new Ht,l=n.length,p=null,h=null,y=null,g=1,d=!1,v=null;for(u=0;u<l;u++){if(("\n"===n[u]||"\r"===n[u]&&"\n"!==n[u+1])&&g++,v&&!i(n[u])&&u>v&&(c.push(v,u,a.padStart?Ct(g,a.padStart,"0"):"".concat(g)),v=null,d=!0),p&&p.start<u&&!d&&!v&&i(n[u])&&(v=u),p&&p.start<u&&!d&&(f=n[u],/[A-Za-z]/.test(f))){if("\\"===n[u-1]&&"u"===n[u]&&"0"===n[u+1]&&"0"===n[u+2]&&"1"===n[u+3]&&("b"===n[u+4]||"B"===n[u+5])&&"["===n[u+5]){var _=void 0;i(n[u+6])?_=u+6:"$"===n[u+6]&&"{"===n[u+7]&&i(n[u+8])&&(_=u+8);var m=void 0;if(_)for(var w=_;w<l;w++)if(!i(n[w])){m=w;break}var b=void 0;if("m"===n[m]?b=m:"}"===n[m]&&"m"===n[m+1]&&(b=m+1),!b){d=!0;continue}if("$"===n[b+1]&&"{"===n[b+2]&&"`"===n[b+3]){u=b+3;continue}}d=!0}p&&p.start<u&&p.type===n[u]&&(p=null,h=null,y=null,v=null,d=!1),!p&&h&&h<u&&y&&y<u&&n[u].trim().length&&('"'===n[u]||"'"===n[u]||"`"===n[u]?((p={}).start=u,p.type=n[u],d=!1):"/"!==n[u]&&(h=null,y=null,v=null)),!y&&n[u].trim().length&&h&&h<=u&&("("===n[u]?y=u:(h=null,v=null)),"c"!==n[u]||"o"!==n[u+1]||"n"!==n[u+2]||"s"!==n[u+3]||"o"!==n[u+4]||"l"!==n[u+5]||"e"!==n[u+6]||"."!==n[u+7]||"l"!==n[u+8]||"o"!==n[u+9]||"g"!==n[u+10]||(h=u+11,u+=10)}return c.current()?function(n,r,i){let s=0,a=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof n)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof n}, equal to: ${JSON.stringify(n,null,4)}`);if(null===r)return n;if(!kt(r))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(i&&"function"!=typeof i)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof i}, equal to: ${JSON.stringify(i,null,4)}`);kt(r)&&(t(r[0],{includeZero:!0})||e(r[0],{includeZero:!0}))&&(t(r[1],{includeZero:!0})||e(r[1],{includeZero:!0}))&&(r=[r]);const u=r.length;let f=0;r.forEach((n,c)=>{if(i&&(s=Math.floor(f/u*10))!==a&&(a=s,i(s)),!kt(n))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${o(c)} element not an array: ${JSON.stringify(n,null,4)}, which is ${typeof n}`);if(!t(n[0],{includeZero:!0})){if(!e(n[0],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${o(c)} element, array [${n[0]},${n[1]}]. That array has first element not an integer, but ${typeof n[0]}, equal to: ${JSON.stringify(n[0],null,4)}. Computer doesn't like this.`);r[c][0]=Number.parseInt(r[c][0],10)}if(!t(n[1],{includeZero:!0})){if(!e(n[1],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${o(c)} element, array [${n[0]},${n[1]}]. That array has second element not an integer, but ${typeof n[1]}, equal to: ${JSON.stringify(n[1],null,4)}. Computer doesn't like this.`);r[c][1]=Number.parseInt(r[c][1],10)}f++});const c=Et(r,t=>{i&&(s=10+Math.floor(t/10))!==a&&(a=s,i(s))}),l=c.length;if(l>0){const t=n.slice(c[l-1][1]);n=c.reduce((t,e,r,o)=>{i&&(s=20+Math.floor(r/l*80))!==a&&(a=s,i(s));const u=0===r?0:o[r-1][1],f=o[r][0];return t+n.slice(u,f)+(function(t){return null!=t}(o[r][2])?o[r][2]:"")},""),n+=t}return n}(n,c.current()):(p=void 0,h=void 0,y=void 0,g=void 0,d=void 0,v=void 0,g=void 0,n)}});
