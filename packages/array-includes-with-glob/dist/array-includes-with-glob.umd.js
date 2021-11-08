/**
 * @name array-includes-with-glob
 * @fileoverview Like _.includes but with wildcards
 * @version 4.0.5
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/array-includes-with-glob/}
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).arrayIncludesWithGlob={})}(this,(function(e){"use strict";const t=new Map,n=(e,t)=>{if(!Array.isArray(e))switch(typeof e){case"string":e=[e];break;case"undefined":e=[];break;default:throw new TypeError(`Expected '${t}' to be a string or an array, but got a type of '${typeof e}'`)}return e.filter((e=>{if("string"!=typeof e){if(void 0===e)return!1;throw new TypeError(`Expected '${t}' to be an array of strings, but found a type of '${typeof e}' in the array`)}return!0}))},r=(e,n)=>{n={caseSensitive:!1,...n};const r=e+JSON.stringify(n);if(t.has(r))return t.get(r);const s="!"===e[0];s&&(e=e.slice(1)),e=function(e){if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(e).replace(/\\\*/g,"[\\s\\S]*");const i=new RegExp(`^${e}$`,n.caseSensitive?"":"i");return i.negated=s,t.set(r,i),i};function s(e,t,s){return((e,t,s,i)=>{if(e=n(e,"inputs"),0===(t=n(t,"patterns")).length)return[];t=t.map((e=>r(e,s)));const{allPatterns:o}=s||{},a=[];for(const n of e){let e;const r=[...t].fill(!1);for(const[s,i]of t.entries())if(i.test(n)&&(r[s]=!0,e=!i.negated,!e))break;if(!(!1===e||void 0===e&&t.some((e=>!e.negated))||o&&r.some(((e,n)=>!e&&!t[n].negated)))&&(a.push(n),i))break}return a})(e,t,s,!0).length>0}const i={arrayVsArrayAllMustBeFound:"any",caseSensitive:!0};e.defaults=i,e.includesWithGlob=function(e,t,n){if(!e.length||!t.length)return!1;const r={...i,...n},o="string"==typeof e?[e]:Array.from(e);return"string"==typeof t?o.some((e=>s(e,t,{caseSensitive:r.caseSensitive}))):"any"===r.arrayVsArrayAllMustBeFound?t.some((e=>o.some((t=>s(t,e,{caseSensitive:r.caseSensitive}))))):t.every((e=>o.some((t=>s(t,e,{caseSensitive:r.caseSensitive})))))},e.version="4.0.5",Object.defineProperty(e,"__esModule",{value:!0})}));
