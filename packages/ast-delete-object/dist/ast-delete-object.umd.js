!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.astDeleteObject=e()}(this,function(){"use strict";var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=e(function(e,n){var o=200,i="__lodash_hash_undefined__",a=9007199254740991,c="[object Arguments]",u="[object Boolean]",s="[object Date]",f="[object Function]",l="[object GeneratorFunction]",y="[object Map]",h="[object Number]",p="[object Object]",d="[object RegExp]",g="[object Set]",b="[object String]",v="[object Symbol]",m="[object ArrayBuffer]",_="[object DataView]",j="[object Float32Array]",w="[object Float64Array]",O="[object Int8Array]",S="[object Int16Array]",T="[object Int32Array]",A="[object Uint8Array]",k="[object Uint8ClampedArray]",W="[object Uint16Array]",E="[object Uint32Array]",N=/\w*$/,M=/^\[object .+?Constructor\]$/,I=/^(?:0|[1-9]\d*)$/,x={};x[c]=x["[object Array]"]=x[m]=x[_]=x[u]=x[s]=x[j]=x[w]=x[O]=x[S]=x[T]=x[y]=x[h]=x[p]=x[d]=x[g]=x[b]=x[v]=x[A]=x[k]=x[W]=x[E]=!0,x["[object Error]"]=x[f]=x["[object WeakMap]"]=!1;var F="object"==r(t)&&t&&t.Object===Object&&t,D="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,R=F||D||Function("return this")(),H=n&&!n.nodeType&&n,J=H&&e&&!e.nodeType&&e,P=J&&J.exports===H;function K(t,e){return t.set(e[0],e[1]),t}function $(t,e){return t.add(e),t}function V(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function L(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function C(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function q(t,e){return function(r){return t(e(r))}}function B(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var U,G=Array.prototype,z=Function.prototype,Q=Object.prototype,X=R["__core-js_shared__"],Y=(U=/[^.]+$/.exec(X&&X.keys&&X.keys.IE_PROTO||""))?"Symbol(src)_1."+U:"",Z=z.toString,tt=Q.hasOwnProperty,et=Q.toString,rt=RegExp("^"+Z.call(tt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nt=P?R.Buffer:void 0,ot=R.Symbol,it=R.Uint8Array,at=q(Object.getPrototypeOf,Object),ct=Object.create,ut=Q.propertyIsEnumerable,st=G.splice,ft=Object.getOwnPropertySymbols,lt=nt?nt.isBuffer:void 0,yt=q(Object.keys,Object),ht=Jt(R,"DataView"),pt=Jt(R,"Map"),dt=Jt(R,"Promise"),gt=Jt(R,"Set"),bt=Jt(R,"WeakMap"),vt=Jt(Object,"create"),mt=Lt(ht),_t=Lt(pt),jt=Lt(dt),wt=Lt(gt),Ot=Lt(bt),St=ot?ot.prototype:void 0,Tt=St?St.valueOf:void 0;function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function kt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Wt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){this.__data__=new kt(t)}function Nt(t,e){var n=qt(t)||function(t){return function(t){return function(t){return!!t&&"object"==(void 0===t?"undefined":r(t))}(t)&&Bt(t)}(t)&&tt.call(t,"callee")&&(!ut.call(t,"callee")||et.call(t)==c)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],o=n.length,i=!!o;for(var a in t)!e&&!tt.call(t,a)||i&&("length"==a||$t(a,o))||n.push(a);return n}function Mt(t,e,r){var n=t[e];tt.call(t,e)&&Ct(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function It(t,e){for(var r=t.length;r--;)if(Ct(t[r][0],e))return r;return-1}function xt(t,e,r,n,o,i,a){var M;if(n&&(M=i?n(t,o,i,a):n(t)),void 0!==M)return M;if(!zt(t))return t;var I=qt(t);if(I){if(M=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&tt.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,M)}else{var F=Kt(t),D=F==f||F==l;if(Ut(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(F==p||F==c||D&&!i){if(L(t))return i?t:{};if(M=function(t){return"function"!=typeof t.constructor||Vt(t)?{}:(e=at(t),zt(e)?ct(e):{});var e}(D?{}:t),!e)return function(t,e){return Rt(t,Pt(t),e)}(t,function(t,e){return t&&Rt(e,Qt(e),t)}(M,t))}else{if(!x[F])return i?t:{};M=function(t,e,r,n){var o=t.constructor;switch(e){case m:return Dt(t);case u:case s:return new o(+t);case _:return function(t,e){var r=e?Dt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case j:case w:case O:case S:case T:case A:case k:case W:case E:return function(t,e){var r=e?Dt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case y:return function(t,e,r){return V(e?r(C(t),!0):C(t),K,new t.constructor)}(t,n,r);case h:case b:return new o(t);case d:return(c=new(a=t).constructor(a.source,N.exec(a))).lastIndex=a.lastIndex,c;case g:return function(t,e,r){return V(e?r(B(t),!0):B(t),$,new t.constructor)}(t,n,r);case v:return i=t,Tt?Object(Tt.call(i)):{}}var i;var a,c}(t,F,xt,e)}}a||(a=new Et);var R=a.get(t);if(R)return R;if(a.set(t,M),!I)var H=r?function(t){return function(t,e,r){var n=e(t);return qt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Qt,Pt)}(t):Qt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(H||t,function(o,i){H&&(o=t[i=o]),Mt(M,i,xt(o,e,r,n,i,t,a))}),M}function Ft(t){return!(!zt(t)||Y&&Y in t)&&(Gt(t)||L(t)?rt:M).test(Lt(t))}function Dt(t){var e=new t.constructor(t.byteLength);return new it(e).set(new it(t)),e}function Rt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;Mt(r,a,void 0===c?t[a]:c)}return r}function Ht(t,e){var n,o,i=t.__data__;return("string"==(o=void 0===(n=e)?"undefined":r(n))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?i["string"==typeof e?"string":"hash"]:i.map}function Jt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Ft(r)?r:void 0}At.prototype.clear=function(){this.__data__=vt?vt(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var e=this.__data__;if(vt){var r=e[t];return r===i?void 0:r}return tt.call(e,t)?e[t]:void 0},At.prototype.has=function(t){var e=this.__data__;return vt?void 0!==e[t]:tt.call(e,t)},At.prototype.set=function(t,e){return this.__data__[t]=vt&&void 0===e?i:e,this},kt.prototype.clear=function(){this.__data__=[]},kt.prototype.delete=function(t){var e=this.__data__,r=It(e,t);return!(r<0||(r==e.length-1?e.pop():st.call(e,r,1),0))},kt.prototype.get=function(t){var e=this.__data__,r=It(e,t);return r<0?void 0:e[r][1]},kt.prototype.has=function(t){return It(this.__data__,t)>-1},kt.prototype.set=function(t,e){var r=this.__data__,n=It(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Wt.prototype.clear=function(){this.__data__={hash:new At,map:new(pt||kt),string:new At}},Wt.prototype.delete=function(t){return Ht(this,t).delete(t)},Wt.prototype.get=function(t){return Ht(this,t).get(t)},Wt.prototype.has=function(t){return Ht(this,t).has(t)},Wt.prototype.set=function(t,e){return Ht(this,t).set(t,e),this},Et.prototype.clear=function(){this.__data__=new kt},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var r=this.__data__;if(r instanceof kt){var n=r.__data__;if(!pt||n.length<o-1)return n.push([t,e]),this;r=this.__data__=new Wt(n)}return r.set(t,e),this};var Pt=ft?q(ft,Object):function(){return[]},Kt=function(t){return et.call(t)};function $t(t,e){return!!(e=null==e?a:e)&&("number"==typeof t||I.test(t))&&t>-1&&t%1==0&&t<e}function Vt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Q)}function Lt(t){if(null!=t){try{return Z.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ct(t,e){return t===e||t!=t&&e!=e}(ht&&Kt(new ht(new ArrayBuffer(1)))!=_||pt&&Kt(new pt)!=y||dt&&"[object Promise]"!=Kt(dt.resolve())||gt&&Kt(new gt)!=g||bt&&"[object WeakMap]"!=Kt(new bt))&&(Kt=function(t){var e=et.call(t),r=e==p?t.constructor:void 0,n=r?Lt(r):void 0;if(n)switch(n){case mt:return _;case _t:return y;case jt:return"[object Promise]";case wt:return g;case Ot:return"[object WeakMap]"}return e});var qt=Array.isArray;function Bt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=a}(t.length)&&!Gt(t)}var Ut=lt||function(){return!1};function Gt(t){var e=zt(t)?et.call(t):"";return e==f||e==l}function zt(t){var e=void 0===t?"undefined":r(t);return!!t&&("object"==e||"function"==e)}function Qt(t){return Bt(t)?Nt(t):function(t){if(!Vt(t))return yt(t);var e=[];for(var r in Object(t))tt.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return xt(t,!0,!0)}}),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i="[object Object]";var a,c,u=Function.prototype,s=Object.prototype,f=u.toString,l=s.hasOwnProperty,y=f.call(Object),h=s.toString,p=(a=Object.getPrototypeOf,c=Object,function(t){return a(c(t))});var d=function(t){if(!function(t){return!!t&&"object"==(void 0===t?"undefined":o(t))}(t)||h.call(t)!=i||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=p(t);if(null===e)return!0;var r=l.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&f.call(r)==y},g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b=e(function(e,r){var n,o,i,a,c,u,s,f,l,y,h,p,d,b,v,m,_,j,w,O;e.exports=(n="function"==typeof Promise,o="object"===("undefined"==typeof self?"undefined":g(self))?self:t,i="undefined"!=typeof Symbol,a="undefined"!=typeof Map,c="undefined"!=typeof Set,u="undefined"!=typeof WeakMap,s="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,l=i&&void 0!==Symbol.iterator,y=i&&void 0!==Symbol.toStringTag,h=c&&"function"==typeof Set.prototype.entries,p=a&&"function"==typeof Map.prototype.entries,d=h&&Object.getPrototypeOf((new Set).entries()),b=p&&Object.getPrototypeOf((new Map).entries()),v=l&&"function"==typeof Array.prototype[Symbol.iterator],m=v&&Object.getPrototypeOf([][Symbol.iterator]()),_=l&&"function"==typeof String.prototype[Symbol.iterator],j=_&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,O=-1,function(t){var e=void 0===t?"undefined":g(t);if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===y||!(Symbol.toStringTag in t)))return"Array";if("object"===("undefined"==typeof window?"undefined":g(window))&&null!==window){if("object"===g(window.location)&&t===window.location)return"Location";if("object"===g(window.document)&&t===window.document)return"Document";if("object"===g(window.navigator)){if("object"===g(window.navigator.mimeTypes)&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"===g(window.navigator.plugins)&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"===g(window.HTMLElement))&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var r=y&&t[Symbol.toStringTag];if("string"==typeof r)return r;var i=Object.getPrototypeOf(t);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":n&&i===Promise.prototype?"Promise":c&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":s&&i===WeakSet.prototype?"WeakSet":u&&i===WeakMap.prototype?"WeakMap":f&&i===DataView.prototype?"DataView":a&&i===b?"Map Iterator":c&&i===d?"Set Iterator":v&&i===m?"Array Iterator":_&&i===j?"String Iterator":null===i?"Object":Object.prototype.toString.call(t).slice(w,O)})});function v(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,_,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function m(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function _(t){return t!=t}var j=Array.prototype.splice;function w(t,e,r,n){var o,i=n?m:v,a=-1,c=e.length,u=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(u=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(o=r,function(t){return o(t)})));++a<c;)for(var s=0,f=e[a],l=r?r(f):f;(s=i(u,l,s,n))>-1;)u!==t&&j.call(u,s,1),j.call(t,s,1);return t}var O=function(t,e){return t&&t.length&&e&&e.length?w(t,e):t},S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T=1/0,A="[object Symbol]",k=/^\s+|\s+$/g,W="[\\ud800-\\udfff]",E="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",N="\\ud83c[\\udffb-\\udfff]",M="[^\\ud800-\\udfff]",I="(?:\\ud83c[\\udde6-\\uddff]){2}",x="[\\ud800-\\udbff][\\udc00-\\udfff]",F="(?:"+E+"|"+N+")"+"?",D="[\\ufe0e\\ufe0f]?"+F+("(?:\\u200d(?:"+[M,I,x].join("|")+")[\\ufe0e\\ufe0f]?"+F+")*"),R="(?:"+[M+E+"?",E,I,x,W].join("|")+")",H=RegExp(N+"(?="+N+")|"+R+D,"g"),J=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),P="object"==S(t)&&t&&t.Object===Object&&t,K="object"==("undefined"==typeof self?"undefined":S(self))&&self&&self.Object===Object&&self,$=P||K||Function("return this")();function V(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,L,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function L(t){return t!=t}function C(t){return function(t){return J.test(t)}(t)?function(t){return t.match(H)||[]}(t):function(t){return t.split("")}(t)}var q=Object.prototype.toString,B=$.Symbol,U=B?B.prototype:void 0,G=U?U.toString:void 0;function z(t){if("string"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":S(t))||function(t){return!!t&&"object"==(void 0===t?"undefined":S(t))}(t)&&q.call(t)==A}(t))return G?G.call(t):"";var e=t+"";return"0"==e&&1/t==-T?"-0":e}function Q(t,e,r){var n=t.length;return r=void 0===r?n:r,!e&&r>=n?t:function(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var i=Array(o);++n<o;)i[n]=t[n+e];return i}(t,e,r)}var X=function(t,e,r){var n;if((t=null==(n=t)?"":z(n))&&(r||void 0===e))return t.replace(k,"");if(!t||!(e=z(e)))return t;var o=C(t),i=C(e);return Q(o,function(t,e){for(var r=-1,n=t.length;++r<n&&V(e,t[r],0)>-1;);return r}(o,i),function(t,e){for(var r=t.length;r--&&V(e,t[r],0)>-1;);return r}(o,i)+1).join("")},Y=Array.isArray;function Z(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function tt(t,e){return function t(e,r,o){var i=n(e),a=void 0,c=void 0,u=void 0,s=void 0,f=void 0;if((o=Object.assign({depth:-1,path:""},o)).depth+=1,Y(i))for(a=0,c=i.length;a<c;a++){var l=o.path+"."+a;void 0!==i[a]?(o.parent=n(i),u=t(r(i[a],void 0,Object.assign({},o,{path:Z(l)})),r,Object.assign({},o,{path:Z(l)})),Number.isNaN(u)&&a<i.length?(i.splice(a,1),a-=1):i[a]=u):i.splice(a,1)}else if(d(i))for(a=0,c=(s=Object.keys(i)).length;a<c;a++){f=s[a];var y=o.path+"."+f;0===o.depth&&null!=f&&(o.topmostKey=f),o.parent=n(i),u=t(r(f,i[f],Object.assign({},o,{path:Z(y)})),r,Object.assign({},o,{path:Z(y)})),Number.isNaN(u)?delete i[f]:i[f]=u}return i}(t,e,{})}function et(t){function e(t){return"string"==typeof t}var r=Array.isArray,n=!0;return!!(r(t)||d(t)||e(t))&&(e(t)?0===X(t).length:(t=tt(t,function(t,r){var o=void 0!==r?r:t;return e(o)&&""!==X(o)&&(n=!1),o}),n))}var rt=/[|\\{}()[\]^$+*?.]/g,nt=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(rt,"\\$&")},ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},it=new Map;function at(t,e,r){var n=Object.assign({caseSensitive:!1},r),o=t+e+JSON.stringify(n);if(it.has(o))return it.get(o);var i="!"===t[0];i&&(t=t.slice(1)),t=nt(t).replace(/\\\*/g,".*"),i&&e&&(t="(?!"+t+")");var a=new RegExp("^"+t+"$",n.caseSensitive?"":"i");return a.negated=i,it.set(o,a),a}var ct=function(t,e,r){if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError("Expected two arrays, got "+(void 0===t?"undefined":ot(t))+" "+(void 0===e?"undefined":ot(e)));if(0===e.length)return t;var n="!"===e[0][0];e=e.map(function(t){return at(t,!1,r)});var o=[],i=!0,a=!1,c=void 0;try{for(var u,s=t[Symbol.iterator]();!(i=(u=s.next()).done);i=!0){var f=u.value,l=n,y=!0,h=!1,p=void 0;try{for(var d,g=e[Symbol.iterator]();!(y=(d=g.next()).done);y=!0){var b=d.value;b.test(f)&&(l=!b.negated)}}catch(t){h=!0,p=t}finally{try{!y&&g.return&&g.return()}finally{if(h)throw p}}l&&o.push(f)}}catch(t){a=!0,c=t}finally{try{!i&&s.return&&s.return()}finally{if(a)throw c}}return o};ct.isMatch=function(t,e,r){return at(e,!0,r).test(t)};var ut="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},st="__lodash_hash_undefined__",ft=9007199254740991,lt="[object Function]",yt="[object GeneratorFunction]",ht=/^\[object .+?Constructor\]$/,pt="object"==ut(t)&&t&&t.Object===Object&&t,dt="object"==("undefined"==typeof self?"undefined":ut(self))&&self&&self.Object===Object&&self,gt=pt||dt||Function("return this")();function bt(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,_t,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function vt(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function mt(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function _t(t){return t!=t}function jt(t){return function(e){return t(e)}}function wt(t,e){return t.has(e)}var Ot,St=Array.prototype,Tt=Function.prototype,At=Object.prototype,kt=gt["__core-js_shared__"],Wt=(Ot=/[^.]+$/.exec(kt&&kt.keys&&kt.keys.IE_PROTO||""))?"Symbol(src)_1."+Ot:"",Et=Tt.toString,Nt=At.hasOwnProperty,Mt=At.toString,It=RegExp("^"+Et.call(Nt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),xt=St.splice,Ft=Math.max,Dt=Math.min,Rt=Bt(gt,"Map"),Ht=Bt(Object,"create");function Jt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Pt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Kt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function $t(t){var e=-1,r=t?t.length:0;for(this.__data__=new Kt;++e<r;)this.add(t[e])}function Vt(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function Lt(t){return!(!Gt(t)||Wt&&Wt in t)&&(Ut(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?It:ht).test(function(t){if(null!=t){try{return Et.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function Ct(t){return function(t){return function(t){return!!t&&"object"==(void 0===t?"undefined":ut(t))}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=ft}(t.length)&&!Ut(t)}(t)}(t)?t:[]}function qt(t,e){var r,n,o=t.__data__;return("string"==(n=void 0===(r=e)?"undefined":ut(r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Bt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Lt(r)?r:void 0}function Ut(t){var e=Gt(t)?Mt.call(t):"";return e==lt||e==yt}function Gt(t){var e=void 0===t?"undefined":ut(t);return!!t&&("object"==e||"function"==e)}Jt.prototype.clear=function(){this.__data__=Ht?Ht(null):{}},Jt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Jt.prototype.get=function(t){var e=this.__data__;if(Ht){var r=e[t];return r===st?void 0:r}return Nt.call(e,t)?e[t]:void 0},Jt.prototype.has=function(t){var e=this.__data__;return Ht?void 0!==e[t]:Nt.call(e,t)},Jt.prototype.set=function(t,e){return this.__data__[t]=Ht&&void 0===e?st:e,this},Pt.prototype.clear=function(){this.__data__=[]},Pt.prototype.delete=function(t){var e=this.__data__,r=Vt(e,t);return!(r<0||(r==e.length-1?e.pop():xt.call(e,r,1),0))},Pt.prototype.get=function(t){var e=this.__data__,r=Vt(e,t);return r<0?void 0:e[r][1]},Pt.prototype.has=function(t){return Vt(this.__data__,t)>-1},Pt.prototype.set=function(t,e){var r=this.__data__,n=Vt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Kt.prototype.clear=function(){this.__data__={hash:new Jt,map:new(Rt||Pt),string:new Jt}},Kt.prototype.delete=function(t){return qt(this,t).delete(t)},Kt.prototype.get=function(t){return qt(this,t).get(t)},Kt.prototype.has=function(t){return qt(this,t).has(t)},Kt.prototype.set=function(t,e){return qt(this,t).set(t,e),this},$t.prototype.add=$t.prototype.push=function(t){return this.__data__.set(t,st),this},$t.prototype.has=function(t){return this.__data__.has(t)};var zt=function(t,e){return e=Ft(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=Ft(r.length-e,0),i=Array(o);++n<o;)i[n]=r[e+n];n=-1;for(var a=Array(e+1);++n<e;)a[n]=r[n];return a[e]=i,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,a)}}(function(t){var e=mt(t,Ct);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?vt:bt,o=t[0].length,i=t.length,a=i,c=Array(i),u=1/0,s=[];a--;){var f=t[a];a&&e&&(f=mt(f,jt(e))),u=Dt(f.length,u),c[a]=!r&&(e||o>=120&&f.length>=120)?new $t(a&&f):void 0}f=t[0];var l=-1,y=c[0];t:for(;++l<o&&s.length<u;){var h=f[l],p=e?e(h):h;if(h=r||0!==h?h:0,!(y?wt(y,p):n(s,p,r))){for(a=i;--a;){var d=c[a];if(!(d?wt(d,p):n(t[a],p,r)))continue t}y&&y.push(p),s.push(h)}}return s}(e):[]});function Qt(t){return"string"==typeof t?t.length>0?[t]:[]:t}function Xt(t,e,r){function n(t){return null!=t}function o(t){return"boolean"===b(t)}function i(t){return"string"===b(t)}function a(t){return"Object"===b(t)}var c=["any","anything","every","everything","all","whatever","whatevs"],u=Array.isArray;if(0===arguments.length)throw new Error("check-types-mini: [THROW_ID_01] Missing all arguments!");if(1===arguments.length)throw new Error("check-types-mini: [THROW_ID_02] Missing second argument!");var s=a(e)?e:{},f={ignoreKeys:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"},l=void 0;if(!i((l=n(r)&&a(r)?Object.assign({},f,r):Object.assign({},f)).msg))throw new Error("check-types-mini: [THROW_ID_03] opts.msg must be string! Currently it's: "+b(l.msg)+", equal to "+JSON.stringify(l.msg,null,4));if(l.msg=l.msg.trim(),":"===l.msg[l.msg.length-1]&&(l.msg=l.msg.slice(0,l.msg.length-1)),!i(l.optsVarName))throw new Error("check-types-mini: [THROW_ID_04] opts.optsVarName must be string! Currently it's: "+b(l.optsVarName)+", equal to "+JSON.stringify(l.optsVarName,null,4));if(l.ignoreKeys=Qt(l.ignoreKeys),l.acceptArraysIgnore=Qt(l.acceptArraysIgnore),!u(l.ignoreKeys))throw new TypeError("check-types-mini: [THROW_ID_05] opts.ignoreKeys should be an array, currently it's: "+b(l.ignoreKeys));if(!o(l.acceptArrays))throw new TypeError("check-types-mini: [THROW_ID_06] opts.acceptArrays should be a Boolean, currently it's: "+b(l.acceptArrays));if(!u(l.acceptArraysIgnore))throw new TypeError("check-types-mini: [THROW_ID_07] opts.acceptArraysIgnore should be an array, currently it's: "+b(l.acceptArraysIgnore));if(!o(l.enforceStrictKeyset))throw new TypeError("check-types-mini: [THROW_ID_08] opts.enforceStrictKeyset should be a Boolean, currently it's: "+b(l.enforceStrictKeyset));if(Object.keys(l.schema).forEach(function(t){u(l.schema[t])||(l.schema[t]=[l.schema[t]]),l.schema[t]=l.schema[t].map(String).map(function(t){return t.toLowerCase()}).map(function(t){return t.trim()})}),l.enforceStrictKeyset)if(n(l.schema)&&Object.keys(l.schema).length>0){if(0!==O(Object.keys(t),Object.keys(s).concat(Object.keys(l.schema))).length)throw new TypeError(l.msg+": "+l.optsVarName+".enforceStrictKeyset is on and the following keys are not covered by schema and/or reference objects: "+JSON.stringify(O(Object.keys(t),Object.keys(s).concat(Object.keys(l.schema))),null,4))}else{if(!(n(s)&&Object.keys(s).length>0))throw new TypeError(l.msg+": Both "+l.optsVarName+".schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!");if(0!==O(Object.keys(t),Object.keys(s)).length)throw new TypeError(l.msg+": The input object has keys that are not covered by reference object: "+JSON.stringify(O(Object.keys(t),Object.keys(s)),null,4));if(0!==O(Object.keys(s),Object.keys(t)).length)throw new TypeError(l.msg+": The reference object has keys that are not present in the input object: "+JSON.stringify(O(Object.keys(s),Object.keys(t)),null,4))}Object.keys(t).forEach(function(e){if(n(l.schema)&&Object.prototype.hasOwnProperty.call(l.schema,e)){if(l.schema[e]=Qt(l.schema[e]).map(String).map(function(t){return t.toLowerCase()}),!(zt(l.schema[e],c).length||(!0===t[e]||!1===t[e]||l.schema[e].includes(b(t[e]).toLowerCase()))&&(!0!==t[e]&&!1!==t[e]||l.schema[e].includes(String(t[e]))||l.schema[e].includes("boolean")))){if(!u(t[e])||!l.acceptArrays)throw new TypeError(l.msg+": "+l.optsVarName+"."+e+" was customised to "+JSON.stringify(t[e],null,4)+" which is not among the allowed types in schema ("+l.schema[e]+") but "+b(t[e]));for(var r=0,o=t[e].length;r<o;r++)if(!l.schema[e].includes(b(t[e][r]).toLowerCase()))throw new TypeError(l.msg+": "+l.optsVarName+"."+e+" is of type "+b(t[e][r]).toLowerCase()+", but only the following are allowed in "+l.optsVarName+".schema: "+l.schema[e])}}else if(n(s)&&Object.prototype.hasOwnProperty.call(s,e)&&b(t[e])!==b(s[e])&&!l.ignoreKeys.includes(e)){if(!l.acceptArrays||!u(t[e])||l.acceptArraysIgnore.includes(e))throw new TypeError(l.msg+": "+l.optsVarName+"."+e+" was customised to "+JSON.stringify(t[e],null,4)+" which is not "+b(s[e])+" but "+b(t[e]));if(!t[e].every(function(t){return b(t)===b(s[e])}))throw new TypeError(l.msg+": "+l.optsVarName+"."+e+" was customised to be array, but not all of its elements are "+b(s[e])+"-type")}})}var Yt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zt=Array.isArray;function te(t){return null!=t}function ee(t){return"Object"===b(t)}function re(t){return"string"===b(t)}function ne(t){return ee(t)||re(t)||function(t){return"number"===b(t)}(t)||function(t){return"boolean"===b(t)}(t)||Zt(t)||function(t){return null===t}(t)}var oe=Array.isArray;function ie(t,e,r){if(void 0===t)throw new TypeError("ast-compare/compare(): [THROW_ID_01] first argument is missing!");if(void 0===e)throw new TypeError("ast-compare/compare(): [THROW_ID_02] second argument is missing!");if(te(t)&&!ne(t))throw new TypeError("ast-compare/compare(): [THROW_ID_03] first input argument is of a wrong type, "+b(t)+", equal to: "+JSON.stringify(t,null,4));if(te(e)&&!ne(e))throw new TypeError("ast-compare/compare(): [THROW_ID_04] second input argument is of a wrong type, "+b(e)+", equal to: "+JSON.stringify(e,null,4));if(te(r)&&!ee(r))throw new TypeError("ast-compare/compare(): [THROW_ID_05] third argument, options object, must, well, be an object! Currently it's: "+b(r)+" and equal to: "+JSON.stringify(r,null,4));var o,i=n(e),a=n(t),c=void 0,u=void 0,s=void 0,f=0,l={hungryForWhitespace:!1,matchStrictly:!1,verboseWhenMismatches:!1,useWildcards:!1},y=Object.assign({},l,r);if(Xt(y,l,{msg:"ast-compare/compare(): [THROW_ID_06*]"}),y.hungryForWhitespace&&y.matchStrictly&&ee(t)&&et(t)&&ee(e)&&0===Object.keys(e).length)return!0;if((!y.hungryForWhitespace||y.hungryForWhitespace&&!et(t)&&et(e))&&ee(t)&&0!==Object.keys(t).length&&ee(e)&&0===Object.keys(e).length||b(t)!==b(e)&&(!y.hungryForWhitespace||y.hungryForWhitespace&&!et(t)))return!1;if(re(a)&&re(i))return!!(y.hungryForWhitespace&&et(a)&&et(i))||(y.verboseWhenMismatches?a===i||"Given string "+i+" is not matched! We have "+a+" on the other end.":y.useWildcards?ct.isMatch(a,i,{caseSensitive:!0}):a===i);if(oe(a)&&oe(i)){if(y.hungryForWhitespace&&et(i)&&(!y.matchStrictly||y.matchStrictly&&a.length===i.length))return!0;if(!y.hungryForWhitespace&&i.length>a.length||y.matchStrictly&&i.length!==a.length)return!!y.verboseWhenMismatches&&"The length of a given array, "+JSON.stringify(i,null,4)+" is "+i.length+" but the length of an array on the other end, "+JSON.stringify(a,null,4)+" is "+a.length;if(0===i.length)return 0===a.length||!!y.verboseWhenMismatches&&"The given array has no elements, but the array on the other end, "+JSON.stringify(a,null,4)+" does have some";for(var h=0,p=i.length;h<p;h++){s=!1;for(var d=f,g=a.length;d<g;d++)if(f+=1,!0===ie(a[d],i[h],y)){s=!0;break}if(!s)return!!y.verboseWhenMismatches&&"The given array "+JSON.stringify(i,null,4)+" is not a subset of an array on the other end, "+JSON.stringify(a,null,4)}}else{if(!ee(a)||!ee(i))return!!(y.hungryForWhitespace&&et(a)&&et(i)&&(!y.matchStrictly||y.matchStrictly&&(o=i,ee(o)?0===Object.keys(o).length:(Zt(o)||re(o))&&0===o.length)))||a===i;if(c=Object.keys(i),u=Object.keys(a),y.matchStrictly&&c.length!==u.length){if(!y.verboseWhenMismatches)return!1;var v=O(n(c),n(u)),m=v.length>0?"First object has unique keys: "+JSON.stringify(v,null,4)+".":"",_=O(n(u),n(c));return"When matching strictly, we found that both objects have different amount of keys. "+m+" "+(_.length>0?"Second object has unique keys:\n        "+JSON.stringify(_,null,4)+".":"")}for(var j=function(t,e){if(!te(a[c[e]]))return!y.useWildcards||y.useWildcards&&!c[e].includes("*")?y.verboseWhenMismatches?{v:"The given object has key "+c[e]+" which the other-one does not have."}:{v:!1}:Object.keys(a).some(function(t){return ct.isMatch(t,c[e],{caseSensitive:!0})})?{v:!0}:y.verboseWhenMismatches?{v:"The given object has key "+c[e]+" which the other-one does not have."}:{v:!1};if(void 0!==a[c[e]]&&!ne(a[c[e]]))throw new TypeError("ast-compare/compare(): [THROW_ID_07] The input "+JSON.stringify(a,null,4)+" contains a value of a wrong type, "+b(a[c[e]])+" at index "+e+", equal to: "+JSON.stringify(a[c[e]],null,4));if(!ne(i[c[e]]))throw new TypeError("ast-compare/compare(): [THROW_ID_08] The input "+JSON.stringify(i,null,4)+" contains a value of a wrong type, "+b(i[c[e]])+" at index "+e+", equal to: "+JSON.stringify(i[c[e]],null,4));if(te(a[c[e]])&&b(a[c[e]])!==b(i[c[e]])){if(!(et(a[c[e]])&&et(i[c[e]])&&y.hungryForWhitespace))return y.verboseWhenMismatches?{v:"The given key "+c[e]+" is of a different type on both objects. On the first-one, it's "+b(i[c[e]])+", on the second-one, it's "+b(a[c[e]])}:{v:!1}}else if(!0!==ie(a[c[e]],i[c[e]],y))return y.verboseWhenMismatches?{v:"The given piece "+JSON.stringify(i[c[e]],null,4)+" and "+JSON.stringify(a[c[e]],null,4)+" don't match."}:{v:!1}},w=0,S=c.length;w<S;w++){var T=j(0,w);if("object"===(void 0===T?"undefined":Yt(T)))return T.v}}return!0}return function(t,e,r){function o(t){return null!=t}if(!o(t))throw new Error("ast-delete-object/deleteObj(): Missing input!");if(!o(e))throw new Error("ast-delete-object/deleteObj(): Missing second argument, object to search for and delete!");if(o(r)&&!d(r))throw new Error("ast-delete-object/deleteObj(): Third argument, options object, must be an object!");var i={matchKeysStrictly:!1,hungryForWhitespace:!1},a=Object.assign({},i,r);Xt(a,i,{msg:"ast-delete-object/deleteObj():"});var c=n(t),u=n(e),s=void 0;return ie(c,u,{hungryForWhitespace:a.hungryForWhitespace,matchStrictly:a.matchKeysStrictly})?{}:c=tt(c,function(t,e){if(d(s=void 0!==e?e:t)){if(d(u)&&0===Object.keys(u).length&&d(s)&&0===Object.keys(s).length)return NaN;if(ie(s,u,{hungryForWhitespace:a.hungryForWhitespace,matchStrictly:a.matchKeysStrictly}))return NaN}return s})}});
