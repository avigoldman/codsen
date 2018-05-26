!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.stringSlicesArrayPush=t()}(this,function(){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y=function(e,t){if(t){if("object"!==(void 0===t?"undefined":r(t)))throw new TypeError(String(t)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero&&0===e)return!0}}return Number.isSafeInteger(e)&&1<=e},p=function(e,t){if("string"!=typeof e)return!1;if(t&&"includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(e)}return/^[1-9]\d*(\.0+)?$/.test(e)},w="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(e,t){return e(t={exports:{}},t.exports),t.exports}var h=e(function(e,t){(t=e.exports=function(e){return e+t.suffix(+e)}).suffix=function(e){return 1===Math.floor(e/10)?"th":e%10==1?"st":e%10==2?"nd":e%10==3?"rd":"th"}}),_=(h.suffix,"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}),d=e(function(e,t){var o,i,r,a,s,u,c,l,n,f,y,p,h,d,g,m,b,v;e.exports=(o="function"==typeof Promise,i="object"===("undefined"==typeof self?"undefined":_(self))?self:w,r="undefined"!=typeof Symbol,a="undefined"!=typeof Map,s="undefined"!=typeof Set,u="undefined"!=typeof WeakMap,c="undefined"!=typeof WeakSet,l="undefined"!=typeof DataView,n=r&&void 0!==Symbol.iterator,f=r&&void 0!==Symbol.toStringTag,y=s&&"function"==typeof Set.prototype.entries,p=a&&"function"==typeof Map.prototype.entries,h=y&&Object.getPrototypeOf((new Set).entries()),d=p&&Object.getPrototypeOf((new Map).entries()),g=n&&"function"==typeof Array.prototype[Symbol.iterator],m=g&&Object.getPrototypeOf([][Symbol.iterator]()),b=n&&"function"==typeof String.prototype[Symbol.iterator],v=b&&Object.getPrototypeOf(""[Symbol.iterator]()),function(e){var t=void 0===e?"undefined":_(e);if("object"!==t)return t;if(null===e)return"null";if(e===i)return"global";if(Array.isArray(e)&&(!1===f||!(Symbol.toStringTag in e)))return"Array";if("object"===("undefined"==typeof window?"undefined":_(window))&&null!==window){if("object"===_(window.location)&&e===window.location)return"Location";if("object"===_(window.document)&&e===window.document)return"Document";if("object"===_(window.navigator)){if("object"===_(window.navigator.mimeTypes)&&e===window.navigator.mimeTypes)return"MimeTypeArray";if("object"===_(window.navigator.plugins)&&e===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"===_(window.HTMLElement))&&e instanceof window.HTMLElement){if("BLOCKQUOTE"===e.tagName)return"HTMLQuoteElement";if("TD"===e.tagName)return"HTMLTableDataCellElement";if("TH"===e.tagName)return"HTMLTableHeaderCellElement"}}var r=f&&e[Symbol.toStringTag];if("string"==typeof r)return r;var n=Object.getPrototypeOf(e);return n===RegExp.prototype?"RegExp":n===Date.prototype?"Date":o&&n===Promise.prototype?"Promise":s&&n===Set.prototype?"Set":a&&n===Map.prototype?"Map":c&&n===WeakSet.prototype?"WeakSet":u&&n===WeakMap.prototype?"WeakMap":l&&n===DataView.prototype?"DataView":a&&n===d?"Map Iterator":s&&n===h?"Set Iterator":g&&n===m?"Array Iterator":b&&n===v?"String Iterator":null===n?"Object":Object.prototype.toString.call(e).slice(8,-1)})});function g(e,t,r){if(t!=t)return function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,i,r);for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}function m(e,t,r,n){for(var o=r-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}function i(e){return e!=e}var b=Array.prototype.splice;function n(e,t,r,n){var o,i=n?m:g,a=-1,s=t.length,u=e;for(e===t&&(t=function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(t)),r&&(u=function(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}(e,(o=r,function(e){return o(e)})));++a<s;)for(var c=0,l=t[a],f=r?r(l):l;-1<(c=i(u,f,c,n));)u!==e&&b.call(u,c,1),b.call(e,c,1);return e}var v=function(e,t){return e&&e.length&&t&&t.length?n(e,t):e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o="__lodash_hash_undefined__",s=9007199254740991,u="[object Function]",c="[object GeneratorFunction]",l=/^\[object .+?Constructor\]$/,t="object"==a(w)&&w&&w.Object===Object&&w,f="object"==("undefined"==typeof self?"undefined":a(self))&&self&&self.Object===Object&&self,S=t||f||Function("return this")();function O(e,t){return!!(e?e.length:0)&&-1<function(e,t,r){if(t!=t)return function(e,t,r,n){var o=e.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,A,r);var n=r-1,o=e.length;for(;++n<o;)if(e[n]===t)return n;return-1}(e,t,0)}function T(e,t,r){for(var n=-1,o=e?e.length:0;++n<o;)if(r(t,e[n]))return!0;return!1}function j(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function A(e){return e!=e}function E(t){return function(e){return t(e)}}function k(e,t){return e.has(t)}var I,W,H,N=Array.prototype,D=Function.prototype,R=Object.prototype,x=S["__core-js_shared__"],M=(I=/[^.]+$/.exec(x&&x.keys&&x.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"",Z=D.toString,P=R.hasOwnProperty,C=R.toString,J=RegExp("^"+Z.call(P).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),K=N.splice,V=Math.max,L=Math.min,q=ee(S,"Map"),B=ee(Object,"create");function $(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function F(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function z(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Q(e){var t=-1,r=e?e.length:0;for(this.__data__=new z;++t<r;)this.add(e[t])}function G(e,t){for(var r,n,o=e.length;o--;)if((r=e[o][0])===(n=t)||r!=r&&n!=n)return o;return-1}function U(e){return!(!re(e)||(t=e,M&&M in t))&&(te(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?J:l).test(function(e){if(null!=e){try{return Z.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e));var t}function X(e){return(o=t=e)&&"object"==(void 0===o?"undefined":a(o))&&(null!=(r=t)&&("number"==typeof(n=r.length)&&-1<n&&n%1==0&&n<=s)&&!te(r))?e:[];var t,r,n,o}function Y(e,t){var r,n,o=e.__data__;return("string"==(n=void 0===(r=t)?"undefined":a(r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function ee(e,t){var r,n,o=(n=t,null==(r=e)?void 0:r[n]);return U(o)?o:void 0}function te(e){var t=re(e)?C.call(e):"";return t==u||t==c}function re(e){var t=void 0===e?"undefined":a(e);return!!e&&("object"==t||"function"==t)}$.prototype.clear=function(){this.__data__=B?B(null):{}},$.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},$.prototype.get=function(e){var t=this.__data__;if(B){var r=t[e];return r===o?void 0:r}return P.call(t,e)?t[e]:void 0},$.prototype.has=function(e){var t=this.__data__;return B?void 0!==t[e]:P.call(t,e)},$.prototype.set=function(e,t){return this.__data__[e]=B&&void 0===t?o:t,this},F.prototype.clear=function(){this.__data__=[]},F.prototype.delete=function(e){var t=this.__data__,r=G(t,e);return!(r<0||(r==t.length-1?t.pop():K.call(t,r,1),0))},F.prototype.get=function(e){var t=this.__data__,r=G(t,e);return r<0?void 0:t[r][1]},F.prototype.has=function(e){return-1<G(this.__data__,e)},F.prototype.set=function(e,t){var r=this.__data__,n=G(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},z.prototype.clear=function(){this.__data__={hash:new $,map:new(q||F),string:new $}},z.prototype.delete=function(e){return Y(this,e).delete(e)},z.prototype.get=function(e){return Y(this,e).get(e)},z.prototype.has=function(e){return Y(this,e).has(e)},z.prototype.set=function(e,t){return Y(this,e).set(e,t),this},Q.prototype.add=Q.prototype.push=function(e){return this.__data__.set(e,o),this},Q.prototype.has=function(e){return this.__data__.has(e)};var ne=(W=function(e){var t=j(e,X);return t.length&&t[0]===e[0]?function(e,t,r){for(var n=r?T:O,o=e[0].length,i=e.length,a=i,s=Array(i),u=1/0,c=[];a--;){var l=e[a];a&&t&&(l=j(l,E(t))),u=L(l.length,u),s[a]=!r&&(t||120<=o&&120<=l.length)?new Q(a&&l):void 0}l=e[0];var f=-1,y=s[0];e:for(;++f<o&&c.length<u;){var p=l[f],h=t?t(p):p;if(p=r||0!==p?p:0,!(y?k(y,h):n(c,h,r))){for(a=i;--a;){var d=s[a];if(!(d?k(d,h):n(e[a],h,r)))continue e}y&&y.push(h),c.push(p)}}return c}(t):[]},H=V(void 0===H?W.length-1:H,0),function(){for(var e=arguments,t=-1,r=V(e.length-H,0),n=Array(r);++t<r;)n[t]=e[H+t];t=-1;for(var o=Array(H+1);++t<H;)o[t]=e[t];return o[H]=n,function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}(W,this,o)});function oe(e){return"string"==typeof e?0<e.length?[e]:[]:e}function ie(n,e,t){function o(e){return null!=e}function r(e){return"boolean"===d(e)}function i(e){return"string"===d(e)}function a(e){return"Object"===d(e)}var s=["any","anything","every","everything","all","whatever","whatevs"],u=Array.isArray;if(0===arguments.length)throw new Error("check-types-mini: [THROW_ID_01] Missing all arguments!");if(1===arguments.length)throw new Error("check-types-mini: [THROW_ID_02] Missing second argument!");var c=a(e)?e:{},l={ignoreKeys:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"},f=void 0;if(!i((f=o(t)&&a(t)?Object.assign({},l,t):Object.assign({},l)).msg))throw new Error("check-types-mini: [THROW_ID_03] opts.msg must be string! Currently it's: "+d(f.msg)+", equal to "+JSON.stringify(f.msg,null,4));if(f.msg=f.msg.trim(),":"===f.msg[f.msg.length-1]&&(f.msg=f.msg.slice(0,f.msg.length-1)),!i(f.optsVarName))throw new Error("check-types-mini: [THROW_ID_04] opts.optsVarName must be string! Currently it's: "+d(f.optsVarName)+", equal to "+JSON.stringify(f.optsVarName,null,4));if(f.ignoreKeys=oe(f.ignoreKeys),f.acceptArraysIgnore=oe(f.acceptArraysIgnore),!u(f.ignoreKeys))throw new TypeError("check-types-mini: [THROW_ID_05] opts.ignoreKeys should be an array, currently it's: "+d(f.ignoreKeys));if(!r(f.acceptArrays))throw new TypeError("check-types-mini: [THROW_ID_06] opts.acceptArrays should be a Boolean, currently it's: "+d(f.acceptArrays));if(!u(f.acceptArraysIgnore))throw new TypeError("check-types-mini: [THROW_ID_07] opts.acceptArraysIgnore should be an array, currently it's: "+d(f.acceptArraysIgnore));if(!r(f.enforceStrictKeyset))throw new TypeError("check-types-mini: [THROW_ID_08] opts.enforceStrictKeyset should be a Boolean, currently it's: "+d(f.enforceStrictKeyset));if(Object.keys(f.schema).forEach(function(e){u(f.schema[e])||(f.schema[e]=[f.schema[e]]),f.schema[e]=f.schema[e].map(String).map(function(e){return e.toLowerCase()}).map(function(e){return e.trim()})}),f.enforceStrictKeyset)if(o(f.schema)&&0<Object.keys(f.schema).length){if(0!==v(Object.keys(n),Object.keys(c).concat(Object.keys(f.schema))).length)throw new TypeError(f.msg+": "+f.optsVarName+".enforceStrictKeyset is on and the following keys are not covered by schema and/or reference objects: "+JSON.stringify(v(Object.keys(n),Object.keys(c).concat(Object.keys(f.schema))),null,4))}else{if(!(o(c)&&0<Object.keys(c).length))throw new TypeError(f.msg+": Both "+f.optsVarName+".schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!");if(0!==v(Object.keys(n),Object.keys(c)).length)throw new TypeError(f.msg+": The input object has keys that are not covered by reference object: "+JSON.stringify(v(Object.keys(n),Object.keys(c)),null,4));if(0!==v(Object.keys(c),Object.keys(n)).length)throw new TypeError(f.msg+": The reference object has keys that are not present in the input object: "+JSON.stringify(v(Object.keys(c),Object.keys(n)),null,4))}Object.keys(n).forEach(function(t){if(o(f.schema)&&Object.prototype.hasOwnProperty.call(f.schema,t)){if(f.schema[t]=oe(f.schema[t]).map(String).map(function(e){return e.toLowerCase()}),!(ne(f.schema[t],s).length||(!0===n[t]||!1===n[t]||f.schema[t].includes(d(n[t]).toLowerCase()))&&(!0!==n[t]&&!1!==n[t]||f.schema[t].includes(String(n[t]))||f.schema[t].includes("boolean")))){if(!u(n[t])||!f.acceptArrays)throw new TypeError(f.msg+": "+f.optsVarName+"."+t+" was customised to "+JSON.stringify(n[t],null,4)+" which is not among the allowed types in schema ("+f.schema[t]+") but "+d(n[t]));for(var e=0,r=n[t].length;e<r;e++)if(!f.schema[t].includes(d(n[t][e]).toLowerCase()))throw new TypeError(f.msg+": "+f.optsVarName+"."+t+" is of type "+d(n[t][e]).toLowerCase()+", but only the following are allowed in "+f.optsVarName+".schema: "+f.schema[t])}}else if(o(c)&&Object.prototype.hasOwnProperty.call(c,t)&&d(n[t])!==d(c[t])&&!f.ignoreKeys.includes(t)){if(!f.acceptArrays||!u(n[t])||f.acceptArraysIgnore.includes(t))throw new TypeError(f.msg+": "+f.optsVarName+"."+t+" was customised to "+JSON.stringify(n[t],null,4)+" which is not "+d(c[t])+" but "+d(n[t]));if(!n[t].every(function(e){return d(e)===d(c[t])}))throw new TypeError(f.msg+": "+f.optsVarName+"."+t+" was customised to be array, but not all of its elements are "+d(c[t])+"-type")}})}var ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},se=Array.isArray;function ue(e){if(!Array.isArray(e))return e;for(var t=function(e,t){if(!se(e))throw new TypeError("ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: "+(void 0===e?"undefined":ae(e))+", equal to: "+JSON.stringify(e,null,4));if(0===e.length)return e;var r={strictlyTwoElementsInRangeArrays:!1},n=Object.assign({},r,t);ie(n,r,{msg:"ranges-sort: [THROW_ID_02*]"});var o=void 0,i=void 0;if(n.strictlyTwoElementsInRangeArrays&&!e.every(function(e,t){return 2===e.length||(o=t,i=e.length,!1)}))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, "+h(o)+" range ("+JSON.stringify(e[o],null,4)+") has not two but "+i+" elements!");if(!e.every(function(e,t){return!(!y(e[0],{includeZero:!0})||!y(e[1],{includeZero:!0}))||(o=t,!1)}))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, "+h(o)+" range ("+JSON.stringify(e[o],null,4)+") does not consist of only natural numbers!");return Array.from(e).sort(function(e,t){return e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1})}(e),r=t.length-1;0<r;r--)(t[r][0]<=t[r-1][0]||t[r][0]<=t[r-1][1])&&(t[r-1][0]=Math.min(t[r][0],t[r-1][0]),t[r-1][1]=Math.max(t[r][1],t[r-1][1]),void 0!==t[r][2]&&(t[r-1][0]>=t[r][0]||t[r-1][1]<=t[r][1])&&null!==t[r-1][2]&&(null===t[r][2]&&null!==t[r-1][2]?t[r-1][2]=null:void 0!==t[r-1][2]?t[r-1][2]+=t[r][2]:t[r-1][2]=t[r][2]),t.splice(r,1),r=t.length);return t}function ce(e){if("string"==typeof e){if(0===e.length)return"";if(""===e.trim())return e.includes("\n")?"\n":" ";var t="";if(""===e[0].trim()){for(var r=!(t=" "),n=0,o=e.length;n<o&&("\n"===e[n]&&(r=!0),""===e[n].trim());n++);r&&(t="\n")}var i="";if(""===e.slice(-1).trim()){for(var a=!(i=" "),s=e.length;s--&&("\n"===e[s]&&(a=!0),""===e[s].trim()););a&&(i="\n")}return t+e.trim()+i}return e}var le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fe=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();function ye(e){return null!=e}var pe=Array.isArray;function he(e){return"string"==typeof e}function de(e){return p(e,{includeZero:!0})?parseInt(e,10):e}return function(){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t={limitToBeAddedWhitespace:!1},r=Object.assign({},t,e);ie(r,t,{msg:"string-slices-array-push: [THROW_ID_02*]"}),this.opts=r}return fe(n,[{key:"add",value:function(){for(var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:function(e){throw new Error("string-slices-array-push/Slices/add(): [THROW_ID_01] Missing "+h(e)+" input parameter!")}(1),r=this,t=arguments[1],n=arguments[2],o=arguments.length,i=Array(3<o?o-3:0),a=3;a<o;a++)i[a-3]=arguments[a];if(0<i.length)throw new TypeError("string-slices-array-push/Slices/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: "+JSON.stringify(i,null,4));if(null!==e||void 0!==t||void 0!==n){var s=p(e,{includeZero:!0})?parseInt(e,10):e,u=p(t,{includeZero:!0})?parseInt(t,10):t;if(pe(e)&&!ye(t)){var c=void 0,l=void 0;if(0<e.length){if(!e.every(function(e,t){return!!pe(e)||(c=t,l=e,!1)}))throw new TypeError("string-slices-array-push/Slices/add(): [THROW_ID_07] first argument was given as array but it contains not only range arrays. For example, at index "+c+" we have "+(void 0===l?"undefined":le(l))+"-type value:\n"+JSON.stringify(l,null,4)+".");e.forEach(function(e,t){if(!y(de(e[0]),{includeZero:!0}))throw new TypeError("string-slices-array-push/Slices/add(): [THROW_ID_06] The "+h(t)+" ranges array's starting range index, an element at its zero'th index, is not a natural number! It's equal to: "+e[0]+".");if(!y(de(e[1]),{includeZero:!0}))throw new TypeError("string-slices-array-push/Slices/add(): [THROW_ID_05] The "+h(t)+" ranges array's ending range index, an element at its first index, is not a natural number! It's equal to: "+e[1]+".");if(ye(e[2])&&!he(e[2]))throw new TypeError("string-slices-array-push/Slices/add(): [THROW_ID_04] The "+h(t)+' ranges array\'s "to add" value is not string but '+le(e[2])+"! It's equal to: "+e[2]+".");r.add.apply(r,function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(e))})}}else{if(!y(s,{includeZero:!0})||!y(u,{includeZero:!0}))throw y(s,{includeZero:!0})?new TypeError('string-slices-array-push/Slices/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it\'s of a type "'+(void 0===u?"undefined":le(u))+'" equal to: '+JSON.stringify(u,null,4)):new TypeError('string-slices-array-push/Slices/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it\'s of a type "'+(void 0===s?"undefined":le(s))+'" equal to: '+JSON.stringify(s,null,4));if(ye(n)&&!he(n))throw new TypeError("string-slices-array-push/Slices/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but "+(void 0===n?"undefined":le(n))+", equal to:\n"+JSON.stringify(n,null,4));if(void 0!==this.slices&&s===this.last()[1]){if(this.last()[1]=u,null!==this.last()[2]&&ye(n)){var f=ye(this.last()[2])&&0<this.last()[2].length?this.last()[2]+n:n;this.opts.limitToBeAddedWhitespace&&(f=ce(f)),this.last()[2]=f}}else this.slices||(this.slices=[]),this.slices.push(void 0!==n?[s,u,this.opts.limitToBeAddedWhitespace?ce(n):n]:[s,u])}}}},{key:"push",value:function(e,t,r){for(var n=arguments.length,o=Array(3<n?n-3:0),i=3;i<n;i++)o[i-3]=arguments[i];this.add.apply(this,[e,t,r].concat(o))}},{key:"current",value:function(){return null!=this.slices?(this.slices=ue(this.slices),this.opts.limitToBeAddedWhitespace?this.slices.map(function(e){return ye(e[2])?[e[0],e[1],ce(e[2])]:e}):this.slices):null}},{key:"wipe",value:function(){this.slices=void 0}},{key:"last",value:function(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}]),n}()});
