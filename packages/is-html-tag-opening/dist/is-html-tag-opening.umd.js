/**
 * @name is-html-tag-opening
 * @fileoverview Does an HTML tag start at given position?
 * @version 3.0.4
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/is-html-tag-opening/}
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).isHtmlTagOpening={})}(this,(function(t){"use strict";
/**
 * @name arrayiffy-if-string
 * @fileoverview Put non-empty strings into arrays, turn empty-ones into empty arrays. Bypass everything else.
 * @version 4.0.4
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/arrayiffy-if-string/}
 */
/**
 * @name string-match-left-right
 * @fileoverview Match substrings on the left or right of a given index, ignoring whitespace
 * @version 8.0.4
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-match-left-right/}
 */
function e(t){return t&&"object"==typeof t&&!Array.isArray(t)}function r(t){return"string"==typeof t}const n={cb:void 0,i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],maxMismatches:0,firstMustMatch:!1,lastMustMatch:!1,hungry:!1},i=t=>t+1;function o(t,e,r,o,a=!1,s=i){const c="function"==typeof r?r():r;if(+e<0&&a&&"EOL"===c)return c;const u={...n,...o};if(e>=t.length&&!a)return!1;let f=a?1:r.length,l=0,h=!1,p=!1,g=!1,y=u.maxMismatches,m=e,d=!1,b=!1,_=!1;function v(){return 1===l&&y<u.maxMismatches-1}for(;t[m];){const e=s(m);if(u.trimBeforeMatching&&""===t[m].trim()){if(!t[e]&&a&&"EOL"===r)return!0;m=s(m);continue}if(u&&!u.i&&u.trimCharsBeforeMatching&&u.trimCharsBeforeMatching.includes(t[m])||u&&u.i&&u.trimCharsBeforeMatching&&u.trimCharsBeforeMatching.map((t=>t.toLowerCase())).includes(t[m].toLowerCase())){if(a&&"EOL"===r&&!t[e])return!0;m=s(m);continue}const n=e>m?r[r.length-f]:r[f-1];if(!u.i&&t[m]===n||u.i&&t[m].toLowerCase()===n.toLowerCase()){if(d||(d=!0),g||(g=!0),f===r.length){if(b=!0,y!==u.maxMismatches)return!1}else 1===f&&(_=!0);if(f-=1,l++,v())return!1;if(!f)return(l!==r.length||y===u.maxMismatches||!h)&&m}else{if(h||l||(h=!0),!(u.maxMismatches&&y&&m))return!(0!==m||1!==f||u.lastMustMatch||!g)&&0;y-=1;for(let n=0;n<=y;n++){const i=e>m?r[r.length-f+1+n]:r[f-2-n],o=t[s(m)];if(i&&(!u.i&&t[m]===i||u.i&&t[m].toLowerCase()===i.toLowerCase())&&(!u.firstMustMatch||f!==r.length)){if(l++,v())return!1;f-=2,d=!0;break}if(o&&i&&(!u.i&&o===i||u.i&&o.toLowerCase()===i.toLowerCase())&&(!u.firstMustMatch||f!==r.length)){if(!l&&!u.hungry)return!1;f-=1,d=!0;break}if(void 0===i&&y>=0&&d&&(!u.firstMustMatch||b)&&(!u.lastMustMatch||_))return m}d||(p=m)}if(!1!==p&&p!==m&&(p=!1),f<1)return m;m=s(m)}return f>0?!(!a||"EOL"!==c)||!!(u&&u.maxMismatches>=f&&g)&&(p||0):void 0}function a(t,i,a,s,c){if(e(c)&&Object.prototype.hasOwnProperty.call(c,"trimBeforeMatching")&&"boolean"!=typeof c.trimBeforeMatching)throw new Error(`string-match-left-right/${t}(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!${Array.isArray(c.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""}`);const u={...n,...c};var f;if("string"==typeof u.trimCharsBeforeMatching&&(u.trimCharsBeforeMatching="string"==typeof(f=u.trimCharsBeforeMatching)?f.length?[f]:[]:f),u.trimCharsBeforeMatching=u.trimCharsBeforeMatching.map((t=>r(t)?t:String(t))),!r(i))return!1;if(!i.length)return!1;if(!Number.isInteger(a)||a<0)throw new Error(`string-match-left-right/${t}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof a}, equal to:\n${JSON.stringify(a,null,4)}`);let l,h;if(r(s))l=[s];else if(Array.isArray(s))l=s;else if(s){if("function"!=typeof s)throw new Error(`string-match-left-right/${t}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof s}, equal to:\n${JSON.stringify(s,null,4)}`);l=[],l.push(s)}else l=s;if(c&&!e(c))throw new Error(`string-match-left-right/${t}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof c}", and equal to:\n${JSON.stringify(c,null,4)}`);let p=0,g="";if(u&&u.trimCharsBeforeMatching&&u.trimCharsBeforeMatching.some(((t,e)=>t.length>1&&(p=e,g=t,!0))))throw new Error(`string-match-left-right/${t}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${p} is longer than 1 character, ${g.length} (equals to ${g}). Please split it into separate characters and put into array as separate elements.`);if(!l||!Array.isArray(l)||Array.isArray(l)&&!l.length||Array.isArray(l)&&1===l.length&&r(l[0])&&!l[0].trim()){if("function"==typeof u.cb){let e,r=a;if("matchLeftIncl"!==t&&"matchRight"!==t||(r+=1),"L"===t[5])for(let t=r;t--;){const r=i[t];if((!u.trimBeforeMatching||u.trimBeforeMatching&&void 0!==r&&r.trim())&&(!u.trimCharsBeforeMatching||!u.trimCharsBeforeMatching.length||void 0!==r&&!u.trimCharsBeforeMatching.includes(r))){e=t;break}}else if(t.startsWith("matchRight"))for(let t=r;t<i.length;t++){const r=i[t];if((!u.trimBeforeMatching||u.trimBeforeMatching&&r.trim())&&(!u.trimCharsBeforeMatching||!u.trimCharsBeforeMatching.length||!u.trimCharsBeforeMatching.includes(r))){e=t;break}}if(void 0===e)return!1;const n=i[e],o=e+1;let s="";return o&&o>0&&(s=i.slice(0,o)),"L"===t[5]?u.cb(n,s,e):(e&&e>0&&(s=i.slice(e)),u.cb(n,s,e))}let e="";throw c||(e=" More so, the whole options object, the fourth input argument, is missing!"),new Error(`string-match-left-right/${t}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${e}`)}for(let e=0,r=l.length;e<r;e++){h="function"==typeof l[e];const r=l[e];let n,s,c="",f=a;"matchRight"===t?f+=1:"matchLeft"===t&&(f-=1);const p=o(i,f,r,u,h,(e=>"L"===t[5]?e-1:e+1));if(p&&h&&"function"==typeof r&&"EOL"===r())return!(!r()||u.cb&&!u.cb(n,c,s))&&r();if(Number.isInteger(p)&&(s=t.startsWith("matchLeft")?p-1:p+1,c="L"===t[5]?i.slice(0,p):i.slice(s)),s<0&&(s=void 0),i[s]&&(n=i[s]),Number.isInteger(p)&&(!u.cb||u.cb(n,c,s)))return r}return!1}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};Function.prototype.toString.call(Object);var c={exports:{}};!function(t,e){var r="__lodash_hash_undefined__",n=9007199254740991,i="[object Arguments]",o="[object Boolean]",a="[object Date]",c="[object Function]",u="[object GeneratorFunction]",f="[object Map]",l="[object Number]",h="[object Object]",p="[object Promise]",g="[object RegExp]",y="[object Set]",m="[object String]",d="[object Symbol]",b="[object WeakMap]",_="[object ArrayBuffer]",v="[object DataView]",w="[object Float32Array]",M="[object Float64Array]",O="[object Int8Array]",j="[object Int16Array]",B="[object Int32Array]",$="[object Uint8Array]",k="[object Uint8ClampedArray]",C="[object Uint16Array]",x="[object Uint32Array]",A=/\w*$/,E=/^\[object .+?Constructor\]$/,R=/^(?:0|[1-9]\d*)$/,L={};L[i]=L["[object Array]"]=L[_]=L[v]=L[o]=L[a]=L[w]=L[M]=L[O]=L[j]=L[B]=L[f]=L[l]=L[h]=L[g]=L[y]=L[m]=L[d]=L[$]=L[k]=L[C]=L[x]=!0,L["[object Error]"]=L[c]=L[b]=!1;var I="object"==typeof self&&self&&self.Object===Object&&self,T="object"==typeof s&&s&&s.Object===Object&&s||I||Function("return this")(),S=e&&!e.nodeType&&e,N=S&&t&&!t.nodeType&&t,D=N&&N.exports===S;function W(t,e){return t.set(e[0],e[1]),t}function P(t,e){return t.add(e),t}function H(t,e,r,n){var i=-1,o=t?t.length:0;for(n&&o&&(r=t[++i]);++i<o;)r=e(r,t[i],i,t);return r}function F(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function U(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function q(t,e){return function(r){return t(e(r))}}function J(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var z,V=Array.prototype,G=Function.prototype,K=Object.prototype,Q=T["__core-js_shared__"],X=(z=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"",Y=G.toString,Z=K.hasOwnProperty,tt=K.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=D?T.Buffer:void 0,nt=T.Symbol,it=T.Uint8Array,ot=q(Object.getPrototypeOf,Object),at=Object.create,st=K.propertyIsEnumerable,ct=V.splice,ut=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=q(Object.keys,Object),ht=Nt(T,"DataView"),pt=Nt(T,"Map"),gt=Nt(T,"Promise"),yt=Nt(T,"Set"),mt=Nt(T,"WeakMap"),dt=Nt(Object,"create"),bt=Ft(ht),_t=Ft(pt),vt=Ft(gt),wt=Ft(yt),Mt=Ft(mt),Ot=nt?nt.prototype:void 0,jt=Ot?Ot.valueOf:void 0;function Bt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function $t(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function kt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Ct(t){this.__data__=new $t(t)}function xt(t,e){var r=qt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Jt(t)}(t)&&Z.call(t,"callee")&&(!st.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var a in t)!e&&!Z.call(t,a)||o&&("length"==a||Pt(a,n))||r.push(a);return r}function At(t,e,r){var n=t[e];Z.call(t,e)&&Ut(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Et(t,e){for(var r=t.length;r--;)if(Ut(t[r][0],e))return r;return-1}function Rt(t,e,r,n,s,p,b){var E;if(n&&(E=p?n(t,s,p,b):n(t)),void 0!==E)return E;if(!Gt(t))return t;var R=qt(t);if(R){if(E=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,E)}else{var I=Wt(t),T=I==c||I==u;if(zt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(I==h||I==i||T&&!p){if(F(t))return p?t:{};if(E=function(t){return"function"!=typeof t.constructor||Ht(t)?{}:(e=ot(t),Gt(e)?at(e):{});var e}(T?{}:t),!e)return function(t,e){return Tt(t,Dt(t),e)}(t,function(t,e){return t&&Tt(e,Kt(e),t)}(E,t))}else{if(!L[I])return p?t:{};E=function(t,e,r,n){var i=t.constructor;switch(e){case _:return It(t);case o:case a:return new i(+t);case v:return function(t,e){var r=e?It(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case w:case M:case O:case j:case B:case $:case k:case C:case x:return function(t,e){var r=e?It(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case f:return function(t,e,r){return H(e?r(U(t),!0):U(t),W,new t.constructor)}(t,n,r);case l:case m:return new i(t);case g:return function(t){var e=new t.constructor(t.source,A.exec(t));return e.lastIndex=t.lastIndex,e}(t);case y:return function(t,e,r){return H(e?r(J(t),!0):J(t),P,new t.constructor)}(t,n,r);case d:return s=t,jt?Object(jt.call(s)):{}}var s}(t,I,Rt,e)}}b||(b=new Ct);var S=b.get(t);if(S)return S;if(b.set(t,E),!R)var N=r?function(t){return function(t,e,r){var n=e(t);return qt(t)?n:function(t,e){for(var r=-1,n=e.length,i=t.length;++r<n;)t[i+r]=e[r];return t}(n,r(t))}(t,Kt,Dt)}(t):Kt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(N||t,(function(i,o){N&&(i=t[o=i]),At(E,o,Rt(i,e,r,n,o,t,b))})),E}function Lt(t){return!(!Gt(t)||(e=t,X&&X in e))&&(Vt(t)||F(t)?et:E).test(Ft(t));var e}function It(t){var e=new t.constructor(t.byteLength);return new it(e).set(new it(t)),e}function Tt(t,e,r,n){r||(r={});for(var i=-1,o=e.length;++i<o;){var a=e[i],s=n?n(r[a],t[a],a,r,t):void 0;At(r,a,void 0===s?t[a]:s)}return r}function St(t,e){var r,n,i=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof e?"string":"hash"]:i.map}function Nt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Lt(r)?r:void 0}Bt.prototype.clear=function(){this.__data__=dt?dt(null):{}},Bt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Bt.prototype.get=function(t){var e=this.__data__;if(dt){var n=e[t];return n===r?void 0:n}return Z.call(e,t)?e[t]:void 0},Bt.prototype.has=function(t){var e=this.__data__;return dt?void 0!==e[t]:Z.call(e,t)},Bt.prototype.set=function(t,e){return this.__data__[t]=dt&&void 0===e?r:e,this},$t.prototype.clear=function(){this.__data__=[]},$t.prototype.delete=function(t){var e=this.__data__,r=Et(e,t);return!(r<0)&&(r==e.length-1?e.pop():ct.call(e,r,1),!0)},$t.prototype.get=function(t){var e=this.__data__,r=Et(e,t);return r<0?void 0:e[r][1]},$t.prototype.has=function(t){return Et(this.__data__,t)>-1},$t.prototype.set=function(t,e){var r=this.__data__,n=Et(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},kt.prototype.clear=function(){this.__data__={hash:new Bt,map:new(pt||$t),string:new Bt}},kt.prototype.delete=function(t){return St(this,t).delete(t)},kt.prototype.get=function(t){return St(this,t).get(t)},kt.prototype.has=function(t){return St(this,t).has(t)},kt.prototype.set=function(t,e){return St(this,t).set(t,e),this},Ct.prototype.clear=function(){this.__data__=new $t},Ct.prototype.delete=function(t){return this.__data__.delete(t)},Ct.prototype.get=function(t){return this.__data__.get(t)},Ct.prototype.has=function(t){return this.__data__.has(t)},Ct.prototype.set=function(t,e){var r=this.__data__;if(r instanceof $t){var n=r.__data__;if(!pt||n.length<199)return n.push([t,e]),this;r=this.__data__=new kt(n)}return r.set(t,e),this};var Dt=ut?q(ut,Object):function(){return[]},Wt=function(t){return tt.call(t)};function Pt(t,e){return!!(e=null==e?n:e)&&("number"==typeof t||R.test(t))&&t>-1&&t%1==0&&t<e}function Ht(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||K)}function Ft(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ut(t,e){return t===e||t!=t&&e!=e}(ht&&Wt(new ht(new ArrayBuffer(1)))!=v||pt&&Wt(new pt)!=f||gt&&Wt(gt.resolve())!=p||yt&&Wt(new yt)!=y||mt&&Wt(new mt)!=b)&&(Wt=function(t){var e=tt.call(t),r=e==h?t.constructor:void 0,n=r?Ft(r):void 0;if(n)switch(n){case bt:return v;case _t:return f;case vt:return p;case wt:return y;case Mt:return b}return e});var qt=Array.isArray;function Jt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}(t.length)&&!Vt(t)}var zt=ft||function(){return!1};function Vt(t){var e=Gt(t)?tt.call(t):"";return e==c||e==u}function Gt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Kt(t){return Jt(t)?xt(t):function(t){if(!Ht(t))return lt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Rt(t,!0,!0)}}(c,c.exports);function u(t,e=0){return function({str:t,idx:e,stopAtNewlines:r,stopAtRawNbsp:n}){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),e<1)return null;if(t[~-e]&&(t[~-e].trim()||r&&"\n\r".includes(t[~-e])||n&&" "===t[~-e]))return~-e;if(t[e-2]&&(t[e-2].trim()||r&&"\n\r".includes(t[e-2])||n&&" "===t[e-2]))return e-2;for(let i=e;i--;)if(t[i]&&(t[i].trim()||r&&"\n\r".includes(t[i])||n&&" "===t[i]))return i;return null}({str:t,idx:e,stopAtNewlines:!1,stopAtRawNbsp:!1})}const f={allowCustomTagNames:!1,skipOpeningBracket:!1},l=["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","doctype","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h1 - h6","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xml"];function h(t){return void 0===t||t.toUpperCase()===t.toLowerCase()&&!/\d/.test(t)&&"="!==t}function p(t,e){return"<"===t[e]||"<"===t[u(t,e)]}t.defaults=f,t.isOpening=function(t,e=0,r){if("string"!=typeof t)throw new Error(`is-html-tag-opening: [THROW_ID_01] the first input argument should have been a string but it was given as "${typeof t}", value being ${JSON.stringify(t,null,4)}`);if(!Number.isInteger(e)||e<0)throw new Error(`is-html-tag-opening: [THROW_ID_02] the second input argument should have been a natural number string index but it was given as "${typeof e}", value being ${JSON.stringify(e,null,4)}`);const n={...f,...r},i="._a-z0-9·À-ÖØ-öø-ͽͿ-῿‌-‍‿-⁀⁰-￿",o=new RegExp(`^<${n.skipOpeningBracket?"?":""}[\\\\ \\t\\r\\n/]*\\w+[\\\\ \\t\\r\\n/]*\\/?[\\\\ \\t\\r\\n/]*>`,"g"),s=new RegExp(`^<${n.skipOpeningBracket?"?":""}[\\\\ \\t\\r\\n/]*[${i}]+[-${i}]*[\\\\ \\t\\r\\n/]*>`,"g"),c=new RegExp(`^<${n.skipOpeningBracket?"?":""}\\s*\\w+\\s+\\w+(?:-\\w+)?\\s*=\\s*['"\\w]`,"g"),g=new RegExp(`^<${n.skipOpeningBracket?"?":""}\\s*\\w+\\s+[${i}]+[-${i}]*(?:-\\w+)?\\s*=\\s*['"\\w]`),y=new RegExp(`^<${n.skipOpeningBracket?"?":""}\\s*\\/?\\s*\\w+\\s*\\/?\\s*>`,"g"),m=new RegExp(`^<${n.skipOpeningBracket?"?":""}\\s*\\/?\\s*[${i}]+[-${i}]*\\s*\\/?\\s*>`,"g"),d=new RegExp(`^<${n.skipOpeningBracket?"?":""}[\\\\ \\t\\r\\n/]*\\w+(?:\\s*\\w+)?\\s*\\w+=['"]`,"g"),b=new RegExp(`^<${n.skipOpeningBracket?"?":""}[\\\\ \\t\\r\\n/]*[${i}]+[-${i}]*\\s+(?:\\s*\\w+)?\\s*\\w+=['"]`,"g"),_=new RegExp(`^<${n.skipOpeningBracket?"?\\/?":""}([\\\\ \\t\\r\\n/]*[${i}]+)+[\\\\ \\t\\r\\n/]*[\\\\/=>]`,""),v=new RegExp("^\\/\\s*\\w+s*>"),w=e?t.slice(e):t,M=u(t,e);let O=!1,j=!1;const B={cb:h,i:!0,trimCharsBeforeMatching:["/","\\","!"," ","\t","\n","\r"]};return n.allowCustomTagNames?((n.skipOpeningBracket&&("<"===t[e-1]||"/"===t[e-1]&&"<"===t[u(t,M)])||"<"===w[0]&&w[1]&&w[1].trim())&&(_.test(w)||/^<\w+$/.test(w))||s.test(w)&&p(t,e)||g.test(w)||m.test(w)&&p(t,e)||b.test(w)||"/"===t[e]&&"<"!==t[M]&&v.test(w))&&(j=!0):(((n.skipOpeningBracket&&("<"===t[e-1]||"/"===t[e-1]&&"<"===t[u(t,M)])||("<"===w[0]||"/"===w[0]&&(!t[M]||"<"!==t[M]))&&w[1]&&w[1].trim())&&_.test(w)||o.test(w)&&p(t,e)||c.test(w)||y.test(w)&&p(t,e)||d.test(w))&&(O=!0),O&&function(t,e,r,n){return a("matchRightIncl",t,e,r,n)}(t,e,l,{cb:r=>void 0===r?(("<"===t[e]&&t[e+1]&&t[e+1].trim()||"<"===t[e-1])&&(j=!0),!0):r.toUpperCase()===r.toLowerCase()&&!/\d/.test(r)&&"="!==r,i:!0,trimCharsBeforeMatching:["<","/","\\","!"," ","\t","\n","\r"]})&&(j=!0)),!j&&"<"===t[e]&&t[e+1]&&t[e+1].trim()&&function(t,e,r,n){return a("matchRight",t,e,r,n)}(t,e,l,B)&&(j=!0),"string"==typeof t&&e<t.length&&j},t.version="3.0.4",Object.defineProperty(t,"__esModule",{value:!0})}));
