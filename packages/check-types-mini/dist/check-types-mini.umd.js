!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.checkTypesMini=e()}(this,function(){"use strict";function t(t){return t!=t}function e(t,e){return function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(e,function(e){return t[e]})}function r(t,e){var r=X(t)||function(t){return function(t){return c(t)&&o(t)}(t)&&q.call(t,"callee")&&(!Q.call(t,"callee")||G.call(t)==x)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,i=!!n;for(var a in t)!e&&!q.call(t,a)||i&&("length"==a||function(t,e){return!!(e=null==e?K:e)&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<e}(a,n))||r.push(a);return r}function n(t){if(!function(t){var e=t&&t.constructor,r="function"==typeof e&&e.prototype||R;return t===r}(t))return U(t);var e=[];for(var r in Object(t))q.call(t,r)&&"constructor"!=r&&e.push(r);return e}function o(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=K}(t.length)&&!function(t){var e=i(t)?G.call(t):"";return e==I||e==L}(t)}function i(t){var e=void 0===t?"undefined":M(t);return!!t&&("object"==e||"function"==e)}function c(t){return!!t&&"object"==(void 0===t?"undefined":M(t))}function a(t){return t!=t}function u(t,e,r,n){var o=n?function(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}:function(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,a,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1},i=-1,c=e.length,u=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(u=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,function(t){return function(e){return t(e)}}(r)));++i<c;)for(var f=0,s=e[i],y=r?r(s):s;(f=o(u,y,f,n))>-1;)u!==t&&Z.call(u,f,1),Z.call(t,f,1);return t}function f(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,y,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function s(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function y(t){return t!=t}function l(t){return function(e){return t(e)}}function p(t,e){return t.has(e)}function h(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function g(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function m(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function d(t){var e=-1,r=t?t.length:0;for(this.__data__=new m;++e<r;)this.add(t[e])}function b(t,e){for(var r=t.length;r--;)if(function(t,e){return t===e||t!=t&&e!=e}(t[r][0],e))return r;return-1}function v(t){if(!S(t)||function(t){return!!ht&&ht in t}(t))return!1;return(O(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?bt:ct).test(function(t){if(null!=t){try{return gt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function w(t){return function(t){return function(t){return!!t&&"object"==(void 0===t?"undefined":et(t))}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=nt}(t.length)&&!O(t)}(t)}(t)?t:[]}function _(t,e){var r=t.__data__;return function(t){var e=void 0===t?"undefined":et(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?r["string"==typeof e?"string":"hash"]:r.map}function j(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return v(r)?r:void 0}function O(t){var e=S(t)?dt.call(t):"";return e==ot||e==it}function S(t){var e=void 0===t?"undefined":et(t);return!!t&&("object"==e||"function"==e)}function k(t){return"string"==typeof t?t.length>0?[t]:[]:t}var T="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E=function(t,e){return e={exports:{}},t(e,e.exports),e.exports}(function(t,e){t.exports=function(){var t="function"==typeof Promise,e="object"===("undefined"==typeof self?"undefined":A(self))?self:T,r="object"===("undefined"==typeof window?"undefined":A(window))&&"document"in window&&"navigator"in window&&"HTMLElement"in window,n="undefined"!=typeof Symbol,o="undefined"!=typeof Map,i="undefined"!=typeof Set,c="undefined"!=typeof WeakMap,a="undefined"!=typeof WeakSet,u="undefined"!=typeof DataView,f=n&&void 0!==Symbol.iterator,s=n&&void 0!==Symbol.toStringTag,y=i&&"function"==typeof Set.prototype.entries,l=o&&"function"==typeof Map.prototype.entries,p=y&&Object.getPrototypeOf((new Set).entries()),h=l&&Object.getPrototypeOf((new Map).entries()),g=f&&"function"==typeof Array.prototype[Symbol.iterator],m=g&&Object.getPrototypeOf([][Symbol.iterator]()),d=f&&"function"==typeof String.prototype[Symbol.iterator],b=d&&Object.getPrototypeOf(""[Symbol.iterator]()),v=8,w=-1;return function(n){var f=void 0===n?"undefined":A(n);if("object"!==f)return f;if(null===n)return"null";if(n===e)return"global";if(Array.isArray(n)&&(!1===s||!(Symbol.toStringTag in n)))return"Array";if(r){if(n===e.location)return"Location";if(n===e.document)return"Document";if(n===(e.navigator||{}).mimeTypes)return"MimeTypeArray";if(n===(e.navigator||{}).plugins)return"PluginArray";if(n instanceof e.HTMLElement&&"BLOCKQUOTE"===n.tagName)return"HTMLQuoteElement";if(n instanceof e.HTMLElement&&"TD"===n.tagName)return"HTMLTableDataCellElement";if(n instanceof e.HTMLElement&&"TH"===n.tagName)return"HTMLTableHeaderCellElement"}var y=s&&n[Symbol.toStringTag];if("string"==typeof y)return y;var l=Object.getPrototypeOf(n);if(l===RegExp.prototype)return"RegExp";if(l===Date.prototype)return"Date";if(t&&l===Promise.prototype)return"Promise";if(i&&l===Set.prototype)return"Set";if(o&&l===Map.prototype)return"Map";if(a&&l===WeakSet.prototype)return"WeakSet";if(c&&l===WeakMap.prototype)return"WeakMap";if(u&&l===DataView.prototype)return"DataView";if(o&&l===h)return"Map Iterator";if(i&&l===p)return"Set Iterator";if(g&&l===m)return"Array Iterator";if(d&&l===b)return"String Iterator";if(null===l)return"Object";return Object.prototype.toString.call(n).slice(v,w)}}()}),M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N=1/0,K=9007199254740991,P=1.7976931348623157e308,V=NaN,x="[object Arguments]",I="[object Function]",L="[object GeneratorFunction]",C="[object String]",$="[object Symbol]",H=/^\s+|\s+$/g,D=/^[-+]0x[0-9a-f]+$/i,J=/^0b[01]+$/i,W=/^0o[0-7]+$/i,F=/^(?:0|[1-9]\d*)$/,B=parseInt,R=Object.prototype,q=R.hasOwnProperty,G=R.toString,Q=R.propertyIsEnumerable,U=function(t,e){return function(r){return t(e(r))}}(Object.keys,Object),z=Math.max,X=Array.isArray,Y=function(a,u,f,s){a=o(a)?a:function(t){return t?e(t,function(t){return o(t)?r(t):n(t)}(t)):[]}(a),f=f&&!s?function(t){var e=function(t){if(!t)return 0===t?t:0;if((t=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":M(t))||c(t)&&G.call(t)==$}(t))return V;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(H,"");var r=J.test(t);return r||W.test(t)?B(t.slice(2),r?2:8):D.test(t)?V:+t}(t))===N||t===-N){var e=t<0?-1:1;return e*P}return t==t?t:0}(t),r=e%1;return e==e?r?e-r:e:0}(f):0;var y=a.length;return f<0&&(f=z(y+f,0)),function(t){return"string"==typeof t||!X(t)&&c(t)&&G.call(t)==C}(a)?f<=y&&a.indexOf(u,f)>-1:!!y&&function(e,r,n){if(r!=r)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(e,t,n);for(var o=n-1,i=e.length;++o<i;)if(e[o]===r)return o;return-1}(a,u,f)>-1},Z=Array.prototype.splice,tt=function(t,e){return t&&t.length&&e&&e.length?u(t,e):t},et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rt="__lodash_hash_undefined__",nt=9007199254740991,ot="[object Function]",it="[object GeneratorFunction]",ct=/^\[object .+?Constructor\]$/,at="object"==et(T)&&T&&T.Object===Object&&T,ut="object"==("undefined"==typeof self?"undefined":et(self))&&self&&self.Object===Object&&self,ft=at||ut||Function("return this")(),st=Array.prototype,yt=Function.prototype,lt=Object.prototype,pt=ft["__core-js_shared__"],ht=function(){var t=/[^.]+$/.exec(pt&&pt.keys&&pt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),gt=yt.toString,mt=lt.hasOwnProperty,dt=lt.toString,bt=RegExp("^"+gt.call(mt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),vt=st.splice,wt=Math.max,_t=Math.min,jt=j(ft,"Map"),Ot=j(Object,"create");h.prototype.clear=function(){this.__data__=Ot?Ot(null):{}},h.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},h.prototype.get=function(t){var e=this.__data__;if(Ot){var r=e[t];return r===rt?void 0:r}return mt.call(e,t)?e[t]:void 0},h.prototype.has=function(t){var e=this.__data__;return Ot?void 0!==e[t]:mt.call(e,t)},h.prototype.set=function(t,e){return this.__data__[t]=Ot&&void 0===e?rt:e,this},g.prototype.clear=function(){this.__data__=[]},g.prototype.delete=function(t){var e=this.__data__,r=b(e,t);return!(r<0||(r==e.length-1?e.pop():vt.call(e,r,1),0))},g.prototype.get=function(t){var e=this.__data__,r=b(e,t);return r<0?void 0:e[r][1]},g.prototype.has=function(t){return b(this.__data__,t)>-1},g.prototype.set=function(t,e){var r=this.__data__,n=b(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},m.prototype.clear=function(){this.__data__={hash:new h,map:new(jt||g),string:new h}},m.prototype.delete=function(t){return _(this,t).delete(t)},m.prototype.get=function(t){return _(this,t).get(t)},m.prototype.has=function(t){return _(this,t).has(t)},m.prototype.set=function(t,e){return _(this,t).set(t,e),this},d.prototype.add=d.prototype.push=function(t){return this.__data__.set(t,rt),this},d.prototype.has=function(t){return this.__data__.has(t)};var St=function(t,e){return e=wt(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=wt(r.length-e,0),i=Array(o);++n<o;)i[n]=r[e+n];n=-1;for(var c=Array(e+1);++n<e;)c[n]=r[n];return c[e]=i,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,c)}}(function(t){var e=s(t,w);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?function(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}:f,o=t[0].length,i=t.length,c=i,a=Array(i),u=1/0,y=[];c--;){var h=t[c];c&&e&&(h=s(h,l(e))),u=_t(h.length,u),a[c]=!r&&(e||o>=120&&h.length>=120)?new d(c&&h):void 0}h=t[0];var g=-1,m=a[0];t:for(;++g<o&&y.length<u;){var b=h[g],v=e?e(b):b;if(b=r||0!==b?b:0,!(m?p(m,v):n(y,v,r))){for(c=i;--c;){var w=a[c];if(!(w?p(w,v):n(t[c],v,r)))continue t}m&&m.push(v),y.push(b)}}return y}(e):[]});return function(t,e,r){function n(t){return null!=t}function o(t){return"boolean"===E(t)}function i(t){return"string"===E(t)}function c(t){return"Object"===E(t)}var a=["any","anything","every","everything","all","whatever","whatevs"],u=Array.isArray;if(0===arguments.length)throw new Error("check-types-mini/checkTypes(): Missing all arguments!");if(1===arguments.length)throw new Error("check-types-mini/checkTypes(): Missing second argument!");var f=c(e)?e:{},s={ignoreKeys:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini/checkTypes()",optsVarName:"opts"},y=void 0;if(y=n(r)&&c(r)?Object.assign({},s,r):Object.assign({},s),!i(y.msg))throw new Error("check-types-mini/checkTypes(): opts.msg must be string! Currently it's: "+E(y.msg)+", equal to "+JSON.stringify(y.msg,null,4));if(y.msg=y.msg.trim(),":"===y.msg[y.msg.length-1]&&(y.msg=y.msg.slice(0,y.msg.length-1)),!i(y.optsVarName))throw new Error("check-types-mini/checkTypes(): opts.optsVarName must be string! Currently it's: "+E(y.optsVarName)+", equal to "+JSON.stringify(y.optsVarName,null,4));if(y.ignoreKeys=k(y.ignoreKeys),y.acceptArraysIgnore=k(y.acceptArraysIgnore),!u(y.ignoreKeys))throw new TypeError("check-types-mini/checkTypes(): opts.ignoreKeys should be an array, currently it's: "+E(y.ignoreKeys));if(!o(y.acceptArrays))throw new TypeError("check-types-mini/checkTypes(): opts.acceptArrays should be a Boolean, currently it's: "+E(y.acceptArrays));if(!u(y.acceptArraysIgnore))throw new TypeError("check-types-mini/checkTypes(): opts.acceptArraysIgnore should be an array, currently it's: "+E(y.acceptArraysIgnore));if(!o(y.enforceStrictKeyset))throw new TypeError("check-types-mini/checkTypes(): opts.enforceStrictKeyset should be a Boolean, currently it's: "+E(y.enforceStrictKeyset));if(Object.keys(y.schema).forEach(function(t){u(y.schema[t])||(y.schema[t]=[y.schema[t]]),y.schema[t]=y.schema[t].map(String).map(function(t){return t.toLowerCase()}).map(function(t){return t.trim()})}),y.enforceStrictKeyset)if(n(y.schema)&&Object.keys(y.schema).length>0){if(0!==tt(Object.keys(t),Object.keys(f).concat(Object.keys(y.schema))).length)throw new TypeError(y.msg+": "+y.optsVarName+".enforceStrictKeyset is on and the following keys are not covered by schema and/or reference objects: "+JSON.stringify(tt(Object.keys(t),Object.keys(f).concat(Object.keys(y.schema))),null,4))}else{if(!(n(f)&&Object.keys(f).length>0))throw new TypeError(y.msg+": Both "+y.optsVarName+".schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!");if(0!==tt(Object.keys(t),Object.keys(f)).length)throw new TypeError(y.msg+": The input object has keys that are not covered by reference object: "+JSON.stringify(tt(Object.keys(t),Object.keys(f)),null,4));if(0!==tt(Object.keys(f),Object.keys(t)).length)throw new TypeError(y.msg+": The reference object has keys that are not present in the input object: "+JSON.stringify(tt(Object.keys(f),Object.keys(t)),null,4))}Object.keys(t).forEach(function(e){if(n(y.schema)&&Object.prototype.hasOwnProperty.call(y.schema,e)){if(y.schema[e]=k(y.schema[e]).map(String).map(function(t){return t.toLowerCase()}),!St(y.schema[e],a).length&&!Y(y.schema[e],E(t[e]).toLowerCase())){if(!u(t[e])||!y.acceptArrays)throw new TypeError(y.msg+": "+y.optsVarName+"."+e+" was customised to "+JSON.stringify(t[e],null,4)+" which is not among the allowed types in schema ("+y.schema[e]+") but "+E(t[e]));for(var r=0,o=t[e].length;r<o;r++)if(!Y(y.schema[e],E(t[e][r]).toLowerCase()))throw new TypeError(y.msg+": "+y.optsVarName+"."+e+" is of type "+E(t[e][r]).toLowerCase()+", but only the following are allowed in "+y.optsVarName+".schema: "+y.schema[e])}}else if(n(f)&&Object.prototype.hasOwnProperty.call(f,e)&&E(t[e])!==E(f[e])&&!Y(y.ignoreKeys,e)){if(!y.acceptArrays||!u(t[e])||Y(y.acceptArraysIgnore,e))throw new TypeError(y.msg+": "+y.optsVarName+"."+e+" was customised to "+JSON.stringify(t[e],null,4)+" which is not "+E(f[e])+" but "+E(t[e]));if(!t[e].every(function(t){return E(t)===E(f[e])}))throw new TypeError(y.msg+": "+y.optsVarName+"."+e+" was customised to be array, but not all of its elements are "+E(f[e])+"-type")}})}});
