/**
 * is-html-attribute-closing
 * Is a character on a given index a closing of an HTML attribute?
 * Version: 1.0.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/is-html-attribute-closing
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).isHtmlAttributeClosing=e()}(this,(function(){"use strict";function t(t){return"string"==typeof t&&(t.charCodeAt(0)>96&&t.charCodeAt(0)<123||t.charCodeAt(0)>64&&t.charCodeAt(0)<91||t.charCodeAt(0)>47&&t.charCodeAt(0)<58||":"===t||"-"===t)}function e(t){return t&&"object"==typeof t&&!Array.isArray(t)}function r(t){return"string"==typeof t}function i(t,e,r,i,n,o){const a="function"==typeof r?r():r;if(e<0&&n&&"EOL"===a)return a;if(e>=t.length&&!n)return!1;let s=n?1:r.length,h=!1,f=!1,c=i.maxMismatches,l=e,u=!1,g=!1,m=!1;for(;t[l];){const e=o(l);if(i.trimBeforeMatching&&""===t[l].trim()){if(!t[e]&&n&&"EOL"===r)return!0;l=o(l);continue}if(!i.i&&i.trimCharsBeforeMatching.includes(t[l])||i.i&&i.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(t[l].toLowerCase())){if(n&&"EOL"===r&&!t[e])return!0;l=o(l);continue}const a=e>l?r[r.length-s]:r[s-1];if(!i.i&&t[l]===a||i.i&&t[l].toLowerCase()===a.toLowerCase()){if(u||(u=!0),f||(f=!0),s===r.length?g=!0:1===s&&(m=!0),s-=1,s<1)return l}else{if(!(i.maxMismatches&&c&&l))return!(0!==l||1!==s||i.lastMustMatch||!f)&&0;c--;for(let n=0;n<=c;n++){const a=e>l?r[r.length-s+1+n]:r[s-2-n],h=t[o(l)];if(a&&(!i.i&&t[l]===a||i.i&&t[l].toLowerCase()===a.toLowerCase())&&(!i.firstMustMatch||s!==r.length)){s-=2,u=!0;break}if(h&&a&&(!i.i&&h===a||i.i&&h.toLowerCase()===a.toLowerCase())&&(!i.firstMustMatch||s!==r.length)){s-=1,u=!0;break}if(void 0===a&&c>=0&&u&&(!i.firstMustMatch||g)&&(!i.lastMustMatch||m))return l}u||(h=l)}if(!1!==h&&h!==l&&(h=!1),s<1)return l;l=o(l)}return s>0?!(!n||"EOL"!==a)||!!(i.maxMismatches>=s&&f)&&(h||0):void 0}function n(t,n,o,a){return function(t,n,o,a,s){if(e(s)&&Object.prototype.hasOwnProperty.call(s,"trimBeforeMatching")&&"boolean"!=typeof s.trimBeforeMatching)throw new Error(`string-match-left-right/${t}(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!${Array.isArray(s.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""}`);const h=Object.assign({},{i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],maxMismatches:0,firstMustMatch:!1,lastMustMatch:!1},s);var f;if(h.trimCharsBeforeMatching="string"==typeof(f=h.trimCharsBeforeMatching)?f.length>0?[f]:[]:f,h.trimCharsBeforeMatching=h.trimCharsBeforeMatching.map(t=>r(t)?t:String(t)),!r(n))return!1;if(!n.length)return!1;if(!Number.isInteger(o)||o<0)throw new Error(`string-match-left-right/${t}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof o}, equal to:\n${JSON.stringify(o,null,4)}`);let c,l,u,g;if(r(a))c=[a];else if(Array.isArray(a))c=a;else if(a){if("function"!=typeof a)throw new Error(`string-match-left-right/${t}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof a}, equal to:\n${JSON.stringify(a,null,4)}`);c=[],c.push(a)}else c=a;if(s&&!e(s))throw new Error(`string-match-left-right/${t}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof s}", and equal to:\n${JSON.stringify(s,null,4)}`);if(h.trimCharsBeforeMatching.some((t,e)=>t.length>1&&(u=e,g=t,!0)))throw new Error(`string-match-left-right/${t}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${u} is longer than 1 character, ${g.length} (equals to ${g}). Please split it into separate characters and put into array as separate elements.`);if(!c||!Array.isArray(c)||Array.isArray(c)&&!c.length||Array.isArray(c)&&1===c.length&&r(c[0])&&!c[0].trim().length){if("function"==typeof h.cb){let e,r=o;if("matchLeftIncl"!==t&&"matchRight"!==t||(r+=1),"L"===t[5])for(let t=r;t--;){const r=n[t];if((!h.trimBeforeMatching||h.trimBeforeMatching&&void 0!==r&&r.trim().length)&&(!h.trimCharsBeforeMatching.length||void 0!==r&&!h.trimCharsBeforeMatching.includes(r))){e=t;break}}else if(t.startsWith("matchRight"))for(let t=r;t<n.length;t++){const r=n[t];if((!h.trimBeforeMatching||h.trimBeforeMatching&&r.trim().length)&&(!h.trimCharsBeforeMatching.length||!h.trimCharsBeforeMatching.includes(r))){e=t;break}}if(void 0===e)return!1;const i=n[e],a=e+1;let s="";return a&&a>0&&(s=n.slice(0,a)),"L"===t[5]?h.cb(i,s,e):(e&&e>0&&(s=n.slice(e)),h.cb(i,s,e))}let e="";throw s||(e=" More so, the whole options object, the fourth input argument, is missing!"),new Error(`string-match-left-right/${t}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${e}`)}for(let e=0,r=c.length;e<r;e++){l="function"==typeof c[e];const r=c[e];let a,s,f="",u=o;"matchRight"===t?u++:"matchLeft"===t&&u--;const g=i(n,u,r,h,l,e=>"L"===t[5]?e-1:e+1);if(g&&l&&"function"==typeof r&&"EOL"===r())return!(!r()||h.cb&&!h.cb(a,f,s))&&r();if(Number.isInteger(g)&&(s=t.startsWith("matchLeft")?g-1:g+1,f="L"===t[5]?n.slice(0,g):n.slice(s)),s<0&&(s=void 0),n[s]&&(a=n[s]),Number.isInteger(g)&&(!h.cb||h.cb(a,f,s)))return r}return!1}("matchRight",t,n,o,a)}return function(e,r,i){if("string"!=typeof e||!e.trim().length||!Number.isInteger(r)||!Number.isInteger(i)||!e[r]||!e[i]||r>=i)return!1;var o,a="'\"".includes(e[r])?e[r]:null,s=null;a&&(s='"'===a?"'":'"');for(var h=r,f=e.length;h<f;h++)if(h>i){if(e[h].trim().length&&!o)if(t(e[h]))o=h;else{if("/"===e[h]||">"===e[h]||"<"===e[h])return!0;if("="!==e[h])return!1}else o&&!t(e[h])&&(o=null);if(a&&e[r]===e[h])return!1;if(a&&e[i]===s&&e[h]===s)return!1;if("="===e[h]&&n(e,h,["'",'"'],{trimBeforeMatching:!0,trimCharsBeforeMatching:["="]}))return!0}else{var c=void 0;if(e[h-1]&&e[h-1].trim().length&&"="!==e[h-1])c=h-1;else for(var l=h;l--;)if(e[l].trim().length&&"="!==e[l]){c=l;break}if("="===e[h]&&n(e,h,["'",'"'],{cb:function(t){return!"/>".includes(t)},trimBeforeMatching:!0,trimCharsBeforeMatching:["="]})&&t(e[c]))return!1}return!1}}));
