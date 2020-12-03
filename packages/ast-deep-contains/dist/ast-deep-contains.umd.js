/**
 * ast-deep-contains
 * Like t.same assert on array of objects, where element order doesn't matter.
 * Version: 2.0.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ast-deep-contains/
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).astDeepContains=r()}(this,(function(){"use strict";function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(r)}function r(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function e(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))}))}return t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(t){var r={exports:{}};return t(r,r.exports),r.exports}var u=i((function(r){r.exports=function(){var r=Object.prototype.toString;function e(t,r){return null!=t&&Object.prototype.hasOwnProperty.call(t,r)}function n(t){if(!t)return!0;if(u(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function o(t){return r.call(t)}function i(r){return"object"===t(r)&&"[object Object]"===o(r)}var u=Array.isArray||function(t){return"[object Array]"===r.call(t)};function c(t){return"boolean"==typeof t||"[object Boolean]"===o(t)}function a(t){var r=parseInt(t);return r.toString()===t?r:t}function f(t){var r,o=function t(r){return Object.keys(t).reduce((function(e,n){return"create"===n||"function"==typeof t[n]&&(e[n]=t[n].bind(t,r)),e}),{})};function f(t,e){if(r(t,e))return t[e]}function s(r,e,n,o){if("number"==typeof e&&(e=[e]),!e||0===e.length)return r;if("string"==typeof e)return s(r,e.split(".").map(a),n,o);var i=e[0],u=f(r,i);if(t.includeInheritedProps&&("__proto__"===i||"constructor"===i&&"function"==typeof u))throw new Error("For security reasons, object's magic properties cannot be set");return 1===e.length?(void 0!==u&&o||(r[i]=n),u):(void 0===u&&("number"==typeof e[1]?r[i]=[]:r[i]={}),s(r[i],e.slice(1),n,o))}return r=(t=t||{}).includeInheritedProps?function(){return!0}:function(t,r){return"number"==typeof r&&Array.isArray(t)||e(t,r)},o.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var o=0;o<n.length;o++){var i=a(n[o]);if(!("number"==typeof i&&u(r)&&i<r.length||(t.includeInheritedProps?i in Object(r):e(r,i))))return!1;r=r[i]}return!0},o.ensureExists=function(t,r,e){return s(t,r,e,!0)},o.set=function(t,r,e,n){return s(t,r,e,n)},o.insert=function(t,r,e,n){var i=o.get(t,r);n=~~n,u(i)||(i=[],o.set(t,r,i)),i.splice(n,0,e)},o.empty=function(t,e){var a,f;if(!n(e)&&null!=t&&(a=o.get(t,e))){if("string"==typeof a)return o.set(t,e,"");if(c(a))return o.set(t,e,!1);if("number"==typeof a)return o.set(t,e,0);if(u(a))a.length=0;else{if(!i(a))return o.set(t,e,null);for(f in a)r(a,f)&&delete a[f]}}},o.push=function(t,r){var e=o.get(t,r);u(e)||(e=[],o.set(t,r,e)),e.push.apply(e,Array.prototype.slice.call(arguments,2))},o.coalesce=function(t,r,e){for(var n,i=0,u=r.length;i<u;i++)if(void 0!==(n=o.get(t,r[i])))return n;return e},o.get=function(t,r,e){if("number"==typeof r&&(r=[r]),!r||0===r.length)return t;if(null==t)return e;if("string"==typeof r)return o.get(t,r.split("."),e);var n=a(r[0]),i=f(t,n);return void 0===i?e:1===r.length?i:o.get(t[n],r.slice(1),e)},o.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(n(e))return t;if("string"==typeof e)return o.del(t,e.split("."));var i=a(e[0]);return r(t,i)?1!==e.length?o.del(t[i],e.slice(1)):(u(t)?t.splice(i,1):delete t[i],t):t},o}var s=f();return s.create=f,s.withInheritedProps=f({includeInheritedProps:!0}),s}()})),c=i((function(r,e){var n="__lodash_hash_undefined__",i=9007199254740991,u="[object Arguments]",c="[object Boolean]",a="[object Date]",f="[object Function]",s="[object GeneratorFunction]",l="[object Map]",p="[object Number]",y="[object Object]",h="[object Promise]",b="[object RegExp]",v="[object Set]",d="[object String]",g="[object Symbol]",_="[object WeakMap]",j="[object ArrayBuffer]",O="[object DataView]",w="[object Float32Array]",m="[object Float64Array]",A="[object Int8Array]",S="[object Int16Array]",P="[object Int32Array]",x="[object Uint8Array]",k="[object Uint8ClampedArray]",E="[object Uint16Array]",I="[object Uint32Array]",N=/\w*$/,T=/^\[object .+?Constructor\]$/,C=/^(?:0|[1-9]\d*)$/,D={};D[u]=D["[object Array]"]=D[j]=D[O]=D[c]=D[a]=D[w]=D[m]=D[A]=D[S]=D[P]=D[l]=D[p]=D[y]=D[b]=D[v]=D[d]=D[g]=D[x]=D[k]=D[E]=D[I]=!0,D["[object Error]"]=D[f]=D[_]=!1;var $="object"==t(o)&&o&&o.Object===Object&&o,F="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,B=$||F||Function("return this")(),J=e&&!e.nodeType&&e,U=J&&r&&!r.nodeType&&r,L=U&&U.exports===J;function M(t,r){return t.set(r[0],r[1]),t}function K(t,r){return t.add(r),t}function R(t,r,e,n){var o=-1,i=t?t.length:0;for(n&&i&&(e=t[++o]);++o<i;)e=r(e,t[o],o,t);return e}function V(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function z(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e}function W(t,r){return function(e){return t(r(e))}}function G(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}var q,H=Array.prototype,Q=Function.prototype,X=Object.prototype,Y=B["__core-js_shared__"],Z=(q=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"",tt=Q.toString,rt=X.hasOwnProperty,et=X.toString,nt=RegExp("^"+tt.call(rt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=L?B.Buffer:void 0,it=B.Symbol,ut=B.Uint8Array,ct=W(Object.getPrototypeOf,Object),at=Object.create,ft=X.propertyIsEnumerable,st=H.splice,lt=Object.getOwnPropertySymbols,pt=ot?ot.isBuffer:void 0,yt=W(Object.keys,Object),ht=Ut(B,"DataView"),bt=Ut(B,"Map"),vt=Ut(B,"Promise"),dt=Ut(B,"Set"),gt=Ut(B,"WeakMap"),_t=Ut(Object,"create"),jt=Vt(ht),Ot=Vt(bt),wt=Vt(vt),mt=Vt(dt),At=Vt(gt),St=it?it.prototype:void 0,Pt=St?St.valueOf:void 0;function xt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function kt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Et(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function It(t){this.__data__=new kt(t)}function Nt(r,e){var n=Wt(r)||function(r){return function(r){return function(r){return!!r&&"object"==t(r)}(r)&&Gt(r)}(r)&&rt.call(r,"callee")&&(!ft.call(r,"callee")||et.call(r)==u)}(r)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(r.length,String):[],o=n.length,i=!!o;for(var c in r)!e&&!rt.call(r,c)||i&&("length"==c||Kt(c,o))||n.push(c);return n}function Tt(t,r,e){var n=t[r];rt.call(t,r)&&zt(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function Ct(t,r){for(var e=t.length;e--;)if(zt(t[e][0],r))return e;return-1}function Dt(t,r,e,n,o,i,h){var _;if(n&&(_=i?n(t,o,i,h):n(t)),void 0!==_)return _;if(!Qt(t))return t;var T=Wt(t);if(T){if(_=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&rt.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,_)}else{var C=Mt(t),$=C==f||C==s;if(qt(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if(C==y||C==u||$&&!i){if(V(t))return i?t:{};if(_=function(t){return"function"!=typeof t.constructor||Rt(t)?{}:(r=ct(t),Qt(r)?at(r):{});var r}($?{}:t),!r)return function(t,r){return Bt(t,Lt(t),r)}(t,function(t,r){return t&&Bt(r,Xt(r),t)}(_,t))}else{if(!D[C])return i?t:{};_=function(t,r,e,n){var o=t.constructor;switch(r){case j:return Ft(t);case c:case a:return new o(+t);case O:return function(t,r){var e=r?Ft(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case w:case m:case A:case S:case P:case x:case k:case E:case I:return function(t,r){var e=r?Ft(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case l:return function(t,r,e){return R(r?e(z(t),!0):z(t),M,new t.constructor)}(t,n,e);case p:case d:return new o(t);case b:return function(t){var r=new t.constructor(t.source,N.exec(t));return r.lastIndex=t.lastIndex,r}(t);case v:return function(t,r,e){return R(r?e(G(t),!0):G(t),K,new t.constructor)}(t,n,e);case g:return i=t,Pt?Object(Pt.call(i)):{}}var i}(t,C,Dt,r)}}h||(h=new It);var F=h.get(t);if(F)return F;if(h.set(t,_),!T)var B=e?function(t){return function(t,r,e){var n=r(t);return Wt(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,Xt,Lt)}(t):Xt(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(B||t,(function(o,i){B&&(o=t[i=o]),Tt(_,i,Dt(o,r,e,n,i,t,h))})),_}function $t(t){return!(!Qt(t)||(r=t,Z&&Z in r))&&(Ht(t)||V(t)?nt:T).test(Vt(t));var r}function Ft(t){var r=new t.constructor(t.byteLength);return new ut(r).set(new ut(t)),r}function Bt(t,r,e,n){e||(e={});for(var o=-1,i=r.length;++o<i;){var u=r[o],c=n?n(e[u],t[u],u,e,t):void 0;Tt(e,u,void 0===c?t[u]:c)}return e}function Jt(r,e){var n,o,i=r.__data__;return("string"==(o=t(n=e))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?i["string"==typeof e?"string":"hash"]:i.map}function Ut(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return $t(e)?e:void 0}xt.prototype.clear=function(){this.__data__=_t?_t(null):{}},xt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},xt.prototype.get=function(t){var r=this.__data__;if(_t){var e=r[t];return e===n?void 0:e}return rt.call(r,t)?r[t]:void 0},xt.prototype.has=function(t){var r=this.__data__;return _t?void 0!==r[t]:rt.call(r,t)},xt.prototype.set=function(t,r){return this.__data__[t]=_t&&void 0===r?n:r,this},kt.prototype.clear=function(){this.__data__=[]},kt.prototype.delete=function(t){var r=this.__data__,e=Ct(r,t);return!(e<0)&&(e==r.length-1?r.pop():st.call(r,e,1),!0)},kt.prototype.get=function(t){var r=this.__data__,e=Ct(r,t);return e<0?void 0:r[e][1]},kt.prototype.has=function(t){return Ct(this.__data__,t)>-1},kt.prototype.set=function(t,r){var e=this.__data__,n=Ct(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},Et.prototype.clear=function(){this.__data__={hash:new xt,map:new(bt||kt),string:new xt}},Et.prototype.delete=function(t){return Jt(this,t).delete(t)},Et.prototype.get=function(t){return Jt(this,t).get(t)},Et.prototype.has=function(t){return Jt(this,t).has(t)},Et.prototype.set=function(t,r){return Jt(this,t).set(t,r),this},It.prototype.clear=function(){this.__data__=new kt},It.prototype.delete=function(t){return this.__data__.delete(t)},It.prototype.get=function(t){return this.__data__.get(t)},It.prototype.has=function(t){return this.__data__.has(t)},It.prototype.set=function(t,r){var e=this.__data__;if(e instanceof kt){var n=e.__data__;if(!bt||n.length<199)return n.push([t,r]),this;e=this.__data__=new Et(n)}return e.set(t,r),this};var Lt=lt?W(lt,Object):function(){return[]},Mt=function(t){return et.call(t)};function Kt(t,r){return!!(r=null==r?i:r)&&("number"==typeof t||C.test(t))&&t>-1&&t%1==0&&t<r}function Rt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||X)}function Vt(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function zt(t,r){return t===r||t!=t&&r!=r}(ht&&Mt(new ht(new ArrayBuffer(1)))!=O||bt&&Mt(new bt)!=l||vt&&Mt(vt.resolve())!=h||dt&&Mt(new dt)!=v||gt&&Mt(new gt)!=_)&&(Mt=function(t){var r=et.call(t),e=r==y?t.constructor:void 0,n=e?Vt(e):void 0;if(n)switch(n){case jt:return O;case Ot:return l;case wt:return h;case mt:return v;case At:return _}return r});var Wt=Array.isArray;function Gt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!Ht(t)}var qt=pt||function(){return!1};function Ht(t){var r=Qt(t)?et.call(t):"";return r==f||r==s}function Qt(r){var e=t(r);return!!r&&("object"==e||"function"==e)}function Xt(t){return Gt(t)?Nt(t):function(t){if(!Rt(t))return yt(t);var r=[];for(var e in Object(t))rt.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}r.exports=function(t){return Dt(t,!0,!0)}}));function a(t){if("string"==typeof t){if(!t.includes("."))return null;var r=t.lastIndexOf(".");if(!t.slice(0,r).includes("."))return t.slice(0,r);for(var e=r-1;e--;)if("."===t[e])return t.slice(e+1,r)}return null}function f(r,e){return function r(e,o,i,u){var f,s,l,p,y=c(e),h=n({depth:-1,path:""},i);if(h.depth+=1,Array.isArray(y))for(f=0,s=y.length;f<s&&!u.now;f++){var b=h.path?"".concat(h.path,".").concat(f):"".concat(f);void 0!==y[f]?(h.parent=c(y),h.parentType="array",h.parentKey=a(b),l=r(o(y[f],void 0,n(n({},h),{},{path:b}),u),o,n(n({},h),{},{path:b}),u),Number.isNaN(l)&&f<y.length?(y.splice(f,1),f-=1):y[f]=l):y.splice(f,1)}else if((p=y)&&"object"===t(p)&&!Array.isArray(p))for(var v in y){if(u.now&&null!=v)break;var d=h.path?"".concat(h.path,".").concat(v):v;0===h.depth&&null!=v&&(h.topmostKey=v),h.parent=c(y),h.parentType="object",h.parentKey=a(d),l=r(o(v,y[v],n(n({},h),{},{path:d}),u),o,n(n({},h),{},{path:d}),u),Number.isNaN(l)?delete y[v]:y[v]=l}return y}(r,e,{},{now:!1})}var s=Array.isArray;function l(r){return null===r?"null":t(r)}function p(t){return"object"===l(t)}return function t(r,e,o,i,c){var a=n(n({},{skipContainers:!0,arrayStrictComparison:!1}),c);l(r)!==l(e)?i("the first input arg is of a type ".concat(l(r).toLowerCase()," but the second is ").concat(l(e).toLowerCase(),". Values are - 1st:\n").concat(JSON.stringify(r,null,4),"\n2nd:\n").concat(JSON.stringify(e,null,4))):f(e,(function(e,n,c,f){var l=void 0!==n?n:e,y=c.path;if(u.has(r,y))if(!a.arrayStrictComparison&&p(l)&&"array"===c.parentType&&c.parent.length>1)!function(){f.now=!0;var e=Array.from(c.path.includes(".")?u.get(r,function(t){for(var r=t.length;r--;)if("."===t[r])return t.slice(0,r);return t}(y)):r);e.length<c.parent.length?i("the first array: ".concat(JSON.stringify(e,null,4),"\nhas less objects than array we're matching against, ").concat(JSON.stringify(c.parent,null,4))):function(){for(var r=c.parent,n=e.map((function(t,r){return r})),u=(r.map((function(t,r){return r})),[]),f=function(t,r){var e,o,i=[],c=n[t],a=(e=n,o=t,Array.from(e).filter((function(t,r){return r!==o})));i.push(c),a.forEach((function(t){u.push(Array.from(i).concat(t))}))},s=0,l=n.length;s<l;s++)f(s);for(var y=u.map((function(t){return t.map((function(t,r){return[r,t]}))})),h=0,b=0,v=y.length;b<v;b++){var d=0;y[b].forEach((function(t){p(r[t[0]])&&p(e[t[1]])&&Object.keys(r[t[0]]).forEach((function(n){Object.keys(e[t[1]]).includes(n)&&(d+=1,e[t[1]][n]===r[t[0]][n]&&(d+=5))}))})),y[b].push(d),d>h&&(h=d)}for(var g=function(n,u){if(y[n][2]===h)return y[n].forEach((function(u,c){c<y[n].length-1&&t(e[u[1]],r[u[0]],o,i,a)})),"break"},_=0,j=y.length;_<j;_++){if("break"===g(_))break}}()}();else{var h=u.get(r,y);a.skipContainers&&(p(h)||s(h))||o(h,l,y)}else i("the first input: ".concat(JSON.stringify(r,null,4),'\ndoes not have the path "').concat(y,'", we were looking, would it contain a value ').concat(JSON.stringify(l,null,0),"."));return l}))}}));
