/**
 * ast-compare
 * Compare anything: AST, objects, arrays, strings and nested thereof
 * Version: 1.14.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ast-compare/
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).astCompare=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function o(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=i(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){u=!0,a=t},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw a}}}}var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function f(t){var e={exports:{}};return t(e,e.exports),e.exports}var s=f((function(e,r){e.exports=function(){var e="function"==typeof Promise,r="object"===("undefined"==typeof self?"undefined":t(self))?self:u,n="undefined"!=typeof Symbol,o="undefined"!=typeof Map,i="undefined"!=typeof Set,a="undefined"!=typeof WeakMap,c="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,s=n&&void 0!==Symbol.iterator,l=n&&void 0!==Symbol.toStringTag,y=i&&"function"==typeof Set.prototype.entries,p=o&&"function"==typeof Map.prototype.entries,h=y&&Object.getPrototypeOf((new Set).entries()),d=p&&Object.getPrototypeOf((new Map).entries()),b=s&&"function"==typeof Array.prototype[Symbol.iterator],v=b&&Object.getPrototypeOf([][Symbol.iterator]()),g=s&&"function"==typeof String.prototype[Symbol.iterator],m=g&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,_=-1;function j(n){var u=t(n);if("object"!==u)return u;if(null===n)return"null";if(n===r)return"global";if(Array.isArray(n)&&(!1===l||!(Symbol.toStringTag in n)))return"Array";if("object"===("undefined"==typeof window?"undefined":t(window))&&null!==window){if("object"===t(window.location)&&n===window.location)return"Location";if("object"===t(window.document)&&n===window.document)return"Document";if("object"===t(window.navigator)){if("object"===t(window.navigator.mimeTypes)&&n===window.navigator.mimeTypes)return"MimeTypeArray";if("object"===t(window.navigator.plugins)&&n===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"===t(window.HTMLElement))&&n instanceof window.HTMLElement){if("BLOCKQUOTE"===n.tagName)return"HTMLQuoteElement";if("TD"===n.tagName)return"HTMLTableDataCellElement";if("TH"===n.tagName)return"HTMLTableHeaderCellElement"}}var s=l&&n[Symbol.toStringTag];if("string"==typeof s)return s;var y=Object.getPrototypeOf(n);return y===RegExp.prototype?"RegExp":y===Date.prototype?"Date":e&&y===Promise.prototype?"Promise":i&&y===Set.prototype?"Set":o&&y===Map.prototype?"Map":c&&y===WeakSet.prototype?"WeakSet":a&&y===WeakMap.prototype?"WeakMap":f&&y===DataView.prototype?"DataView":o&&y===d?"Map Iterator":i&&y===h?"Set Iterator":b&&y===v?"Array Iterator":g&&y===m?"String Iterator":null===y?"Object":Object.prototype.toString.call(n).slice(w,_)}return j}()})),l=f((function(e,r){var n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",a="[object Boolean]",c="[object Date]",f="[object Function]",s="[object GeneratorFunction]",l="[object Map]",y="[object Number]",p="[object Object]",h="[object Promise]",d="[object RegExp]",b="[object Set]",v="[object String]",g="[object Symbol]",m="[object WeakMap]",w="[object ArrayBuffer]",_="[object DataView]",j="[object Float32Array]",O="[object Float64Array]",S="[object Int8Array]",A="[object Int16Array]",T="[object Int32Array]",W="[object Uint8Array]",M="[object Uint8ClampedArray]",E="[object Uint16Array]",k="[object Uint32Array]",P=/\w*$/,x=/^\[object .+?Constructor\]$/,N=/^(?:0|[1-9]\d*)$/,I={};I[i]=I["[object Array]"]=I[w]=I[_]=I[a]=I[c]=I[j]=I[O]=I[S]=I[A]=I[T]=I[l]=I[y]=I[p]=I[d]=I[b]=I[v]=I[g]=I[W]=I[M]=I[E]=I[k]=!0,I["[object Error]"]=I[f]=I[m]=!1;var D="object"==t(u)&&u&&u.Object===Object&&u,F="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,H=D||F||Function("return this")(),J=r&&!r.nodeType&&r,$=J&&e&&!e.nodeType&&e,R=$&&$.exports===J;function L(t,e){return t.set(e[0],e[1]),t}function C(t,e){return t.add(e),t}function U(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function z(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function B(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function q(t,e){return function(r){return t(e(r))}}function V(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var K,G=Array.prototype,Q=Function.prototype,X=Object.prototype,Y=H["__core-js_shared__"],Z=(K=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+K:"",tt=Q.toString,et=X.hasOwnProperty,rt=X.toString,nt=RegExp("^"+tt.call(et).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=R?H.Buffer:void 0,it=H.Symbol,at=H.Uint8Array,ct=q(Object.getPrototypeOf,Object),ut=Object.create,ft=X.propertyIsEnumerable,st=G.splice,lt=Object.getOwnPropertySymbols,yt=ot?ot.isBuffer:void 0,pt=q(Object.keys,Object),ht=$t(H,"DataView"),dt=$t(H,"Map"),bt=$t(H,"Promise"),vt=$t(H,"Set"),gt=$t(H,"WeakMap"),mt=$t(Object,"create"),wt=zt(ht),_t=zt(dt),jt=zt(bt),Ot=zt(vt),St=zt(gt),At=it?it.prototype:void 0,Tt=At?At.valueOf:void 0;function Wt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Mt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function kt(t){this.__data__=new Mt(t)}function Pt(e,r){var n=qt(e)||function(e){return function(e){return function(e){return!!e&&"object"==t(e)}(e)&&Vt(e)}(e)&&et.call(e,"callee")&&(!ft.call(e,"callee")||rt.call(e)==i)}(e)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(e.length,String):[],o=n.length,a=!!o;for(var c in e)!r&&!et.call(e,c)||a&&("length"==c||Ct(c,o))||n.push(c);return n}function xt(t,e,r){var n=t[e];et.call(t,e)&&Bt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Nt(t,e){for(var r=t.length;r--;)if(Bt(t[r][0],e))return r;return-1}function It(t,e,r,n,o,u,h){var m;if(n&&(m=u?n(t,o,u,h):n(t)),void 0!==m)return m;if(!Qt(t))return t;var x=qt(t);if(x){if(m=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&et.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,m)}else{var N=Lt(t),D=N==f||N==s;if(Kt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(N==p||N==i||D&&!u){if(z(t))return u?t:{};if(m=function(t){return"function"!=typeof t.constructor||Ut(t)?{}:(e=ct(t),Qt(e)?ut(e):{});var e}(D?{}:t),!e)return function(t,e){return Ht(t,Rt(t),e)}(t,function(t,e){return t&&Ht(e,Xt(e),t)}(m,t))}else{if(!I[N])return u?t:{};m=function(t,e,r,n){var o=t.constructor;switch(e){case w:return Ft(t);case a:case c:return new o(+t);case _:return function(t,e){var r=e?Ft(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case j:case O:case S:case A:case T:case W:case M:case E:case k:return function(t,e){var r=e?Ft(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return U(e?r(B(t),!0):B(t),L,new t.constructor)}(t,n,r);case y:case v:return new o(t);case d:return function(t){var e=new t.constructor(t.source,P.exec(t));return e.lastIndex=t.lastIndex,e}(t);case b:return function(t,e,r){return U(e?r(V(t),!0):V(t),C,new t.constructor)}(t,n,r);case g:return i=t,Tt?Object(Tt.call(i)):{}}var i}(t,N,It,e)}}h||(h=new kt);var F=h.get(t);if(F)return F;if(h.set(t,m),!x)var H=r?function(t){return function(t,e,r){var n=e(t);return qt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Xt,Rt)}(t):Xt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(H||t,(function(o,i){H&&(o=t[i=o]),xt(m,i,It(o,e,r,n,i,t,h))})),m}function Dt(t){return!(!Qt(t)||(e=t,Z&&Z in e))&&(Gt(t)||z(t)?nt:x).test(zt(t));var e}function Ft(t){var e=new t.constructor(t.byteLength);return new at(e).set(new at(t)),e}function Ht(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;xt(r,a,void 0===c?t[a]:c)}return r}function Jt(e,r){var n,o,i=e.__data__;return("string"==(o=t(n=r))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?i["string"==typeof r?"string":"hash"]:i.map}function $t(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Dt(r)?r:void 0}Wt.prototype.clear=function(){this.__data__=mt?mt(null):{}},Wt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Wt.prototype.get=function(t){var e=this.__data__;if(mt){var r=e[t];return r===n?void 0:r}return et.call(e,t)?e[t]:void 0},Wt.prototype.has=function(t){var e=this.__data__;return mt?void 0!==e[t]:et.call(e,t)},Wt.prototype.set=function(t,e){return this.__data__[t]=mt&&void 0===e?n:e,this},Mt.prototype.clear=function(){this.__data__=[]},Mt.prototype.delete=function(t){var e=this.__data__,r=Nt(e,t);return!(r<0)&&(r==e.length-1?e.pop():st.call(e,r,1),!0)},Mt.prototype.get=function(t){var e=this.__data__,r=Nt(e,t);return r<0?void 0:e[r][1]},Mt.prototype.has=function(t){return Nt(this.__data__,t)>-1},Mt.prototype.set=function(t,e){var r=this.__data__,n=Nt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Et.prototype.clear=function(){this.__data__={hash:new Wt,map:new(dt||Mt),string:new Wt}},Et.prototype.delete=function(t){return Jt(this,t).delete(t)},Et.prototype.get=function(t){return Jt(this,t).get(t)},Et.prototype.has=function(t){return Jt(this,t).has(t)},Et.prototype.set=function(t,e){return Jt(this,t).set(t,e),this},kt.prototype.clear=function(){this.__data__=new Mt},kt.prototype.delete=function(t){return this.__data__.delete(t)},kt.prototype.get=function(t){return this.__data__.get(t)},kt.prototype.has=function(t){return this.__data__.has(t)},kt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof Mt){var n=r.__data__;if(!dt||n.length<199)return n.push([t,e]),this;r=this.__data__=new Et(n)}return r.set(t,e),this};var Rt=lt?q(lt,Object):function(){return[]},Lt=function(t){return rt.call(t)};function Ct(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||N.test(t))&&t>-1&&t%1==0&&t<e}function Ut(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||X)}function zt(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Bt(t,e){return t===e||t!=t&&e!=e}(ht&&Lt(new ht(new ArrayBuffer(1)))!=_||dt&&Lt(new dt)!=l||bt&&Lt(bt.resolve())!=h||vt&&Lt(new vt)!=b||gt&&Lt(new gt)!=m)&&(Lt=function(t){var e=rt.call(t),r=e==p?t.constructor:void 0,n=r?zt(r):void 0;if(n)switch(n){case wt:return _;case _t:return l;case jt:return h;case Ot:return b;case St:return m}return e});var qt=Array.isArray;function Vt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Gt(t)}var Kt=yt||function(){return!1};function Gt(t){var e=Qt(t)?rt.call(t):"";return e==f||e==s}function Qt(e){var r=t(e);return!!e&&("object"==r||"function"==r)}function Xt(t){return Vt(t)?Pt(t):function(t){if(!Ut(t))return pt(t);var e=[];for(var r in Object(t))et.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return It(t,!0,!0)}}));function y(t){if("string"==typeof t){if(!t.includes("."))return null;var e=t.lastIndexOf(".");if(!t.slice(0,e).includes("."))return t.slice(0,e);for(var r=e-1;r--;)if("."===t[r])return t.slice(r+1,e)}return null}function p(e,r){return function e(r,o,i,a){var c,u,f,s,p=l(r),h=n({depth:-1,path:""},i);if(h.depth+=1,Array.isArray(p))for(c=0,u=p.length;c<u&&!a.now;c++){var d=h.path?"".concat(h.path,".").concat(c):"".concat(c);void 0!==p[c]?(h.parent=l(p),h.parentType="array",h.parentKey=y(d),f=e(o(p[c],void 0,n(n({},h),{},{path:d}),a),o,n(n({},h),{},{path:d}),a),Number.isNaN(f)&&c<p.length?(p.splice(c,1),c-=1):p[c]=f):p.splice(c,1)}else if((s=p)&&"object"===t(s)&&!Array.isArray(s))for(var b in p){if(a.now&&null!=b)break;var v=h.path?"".concat(h.path,".").concat(b):b;0===h.depth&&null!=b&&(h.topmostKey=b),h.parent=l(p),h.parentType="object",h.parentKey=y(v),f=e(o(b,p[b],n(n({},h),{},{path:v}),a),o,n(n({},h),{},{path:v}),a),Number.isNaN(f)?delete p[b]:p[b]=f}return p}(e,r,{},{now:!1})}function h(e){if("string"==typeof e)return!e.trim();if(!["object","string"].includes(t(e))||!e)return!1;var r=!0;return e=p(e,(function(t,e,n,o){var i=void 0!==e?e:t;return"string"==typeof i&&i.trim()&&(r=!1,o.now=!0),i})),r}var d=new Map;function b(t,e){e=n({caseSensitive:!1},e);var r=t+JSON.stringify(e);if(d.has(r))return d.get(r);var o="!"===t[0];o&&(t=t.slice(1)),t=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(t).replace(/\\\*/g,"[\\s\\S]*");var i=new RegExp("^".concat(t,"$"),e.caseSensitive?"":"i");return i.negated=o,d.set(r,i),i}var v=function(e,r,n){if(!Array.isArray(e)||!Array.isArray(r))throw new TypeError("Expected two arrays, got ".concat(t(e)," ").concat(t(r)));if(0===r.length)return e;var o="!"===r[0][0];r=r.map((function(t){return b(t,n)}));var i,a=[],u=c(e);try{for(u.s();!(i=u.n()).done;){var f,s=i.value,l=o,y=c(r);try{for(y.s();!(f=y.n()).done;){var p=f.value;p.test(s)&&(l=!p.negated)}}catch(t){y.e(t)}finally{y.f()}l&&a.push(s)}}catch(t){u.e(t)}finally{u.f()}return a};v.isMatch=function(t,e,r){var n=Array.isArray(t)?t:[t],o=Array.isArray(e)?e:[e];return n.some((function(t){return o.every((function(e){var n=b(e,r),o=n.test(t);return n.negated?!o:o}))}))};var g=Array.isArray;function m(t){return null!=t}function w(e){return e&&"object"===t(e)&&!Array.isArray(e)}function _(t){return"string"==typeof t}function j(t){return w(t)||_(t)||function(t){return"number"==typeof t}(t)||function(t){return"boolean"==typeof t}(t)||g(t)||function(t){return null===t}(t)}return function e(r,i,a){if(void 0===r)throw new TypeError("ast-compare/compare(): [THROW_ID_01] first argument is missing!");if(void 0===i)throw new TypeError("ast-compare/compare(): [THROW_ID_02] second argument is missing!");if(m(r)&&!j(r))throw new TypeError("ast-compare/compare(): [THROW_ID_03] first input argument is of a wrong type, ".concat(s(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(m(i)&&!j(i))throw new TypeError("ast-compare/compare(): [THROW_ID_04] second input argument is of a wrong type, ".concat(s(i),", equal to: ").concat(JSON.stringify(i,null,4)));if(m(a)&&!w(a))throw new TypeError("ast-compare/compare(): [THROW_ID_05] third argument, options object, must, well, be an object! Currently it's: ".concat(s(a)," and equal to: ").concat(JSON.stringify(a,null,4)));var u,f,l,y,p=0,d=n(n({},{hungryForWhitespace:!1,matchStrictly:!1,verboseWhenMismatches:!1,useWildcards:!1}),a);if(d.hungryForWhitespace&&d.matchStrictly&&w(r)&&h(r)&&w(i)&&!Object.keys(i).length)return!0;if((!d.hungryForWhitespace||d.hungryForWhitespace&&!h(r)&&h(i))&&w(r)&&0!==Object.keys(r).length&&w(i)&&0===Object.keys(i).length||s(r)!==s(i)&&(!d.hungryForWhitespace||d.hungryForWhitespace&&!h(r)))return!1;if(_(r)&&_(i))return!!(d.hungryForWhitespace&&h(r)&&h(i))||(d.verboseWhenMismatches?r===i||"Given string ".concat(i," is not matched! We have ").concat(r," on the other end."):d.useWildcards?v.isMatch(r,i,{caseSensitive:!0}):r===i);if(g(r)&&g(i)){if(d.hungryForWhitespace&&h(i)&&(!d.matchStrictly||d.matchStrictly&&r.length===i.length))return!0;if(!d.hungryForWhitespace&&i.length>r.length||d.matchStrictly&&i.length!==r.length)return!!d.verboseWhenMismatches&&"The length of a given array, ".concat(JSON.stringify(i,null,4)," is ").concat(i.length," but the length of an array on the other end, ").concat(JSON.stringify(r,null,4)," is ").concat(r.length);if(0===i.length)return 0===r.length||!!d.verboseWhenMismatches&&"The given array has no elements, but the array on the other end, ".concat(JSON.stringify(r,null,4)," does have some");for(var b=0,O=i.length;b<O;b++){l=!1;for(var S=p,A=r.length;S<A;S++)if(p+=1,!0===e(r[S],i[b],d)){l=!0;break}if(!l)return!!d.verboseWhenMismatches&&"The given array ".concat(JSON.stringify(i,null,4)," is not a subset of an array on the other end, ").concat(JSON.stringify(r,null,4))}}else{if(!w(r)||!w(i))return!(!(d.hungryForWhitespace&&h(r)&&h(i))||d.matchStrictly&&(!d.matchStrictly||(y=i,w(y)?Object.keys(y).length:!g(y)&&!_(y)||y.length)))||r===i;if(u=new Set(Object.keys(i)),f=new Set(Object.keys(r)),d.matchStrictly&&u.size!==f.size){if(!d.verboseWhenMismatches)return!1;var T=new Set(o(u).filter((function(t){return!f.has(t)}))),W=T.size?" First object has unique keys: ".concat(JSON.stringify(T,null,4),"."):"",M=new Set(o(f).filter((function(t){return!u.has(t)}))),E=M.size?" Second object has unique keys:\n        ".concat(JSON.stringify(M,null,4),"."):"";return"When matching strictly, we found that both objects have different amount of keys.".concat(W).concat(E)}var k,P=c(u);try{var x=function(){var t=k.value;if(!Object.prototype.hasOwnProperty.call(r,t))return!d.useWildcards||d.useWildcards&&!t.includes("*")?d.verboseWhenMismatches?{v:'The given object has key "'.concat(t,'" which the other-one does not have.')}:{v:!1}:Object.keys(r).some((function(e){return v.isMatch(e,t,{caseSensitive:!0})}))?{v:!0}:d.verboseWhenMismatches?{v:'The given object has key "'.concat(t,'" which the other-one does not have.')}:{v:!1};if(m(r[t])&&s(r[t])!==s(i[t])){if(!(h(r[t])&&h(i[t])&&d.hungryForWhitespace))return d.verboseWhenMismatches?{v:"The given key ".concat(t," is of a different type on both objects. On the first-one, it's ").concat(s(i[t]),", on the second-one, it's ").concat(s(r[t]))}:{v:!1}}else if(!0!==e(r[t],i[t],d))return d.verboseWhenMismatches?{v:"The given piece ".concat(JSON.stringify(i[t],null,4)," and ").concat(JSON.stringify(r[t],null,4)," don't match.")}:{v:!1}};for(P.s();!(k=P.n()).done;){var N=x();if("object"===t(N))return N.v}}catch(t){P.e(t)}finally{P.f()}}return!0}}));
