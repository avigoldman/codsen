/**
 * string-find-heads-tails
 * Finds where are arbitrary templating marker heads and tails located
 * Version: 3.17.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-find-heads-tails/
 */

import{matchRightIncl as e}from"string-match-left-right";import{arrayiffy as t}from"arrayiffy-if-string";var r="3.17.0";function n(e){return"string"==typeof e}const i={fromIndex:0,throwWhenSomethingWrongIsDetected:!0,allowWholeValueToBeOnlyHeadsOrTails:!0,source:"string-find-heads-tails",matchHeadsAndTailsStrictlyInPairsByTheirOrder:!1,relaxedAPI:!1};function a(r,a,s,o){if(o&&(!(h=o)||"object"!=typeof h||Array.isArray(h)))throw new TypeError(`string-find-heads-tails: [THROW_ID_01] the fourth input argument, an Optional Options Object, must be a plain object! Currently it's equal to: ${o} (type: ${typeof o})`);var h;const l={...i,...o};if("string"==typeof l.fromIndex&&/^\d*$/.test(l.fromIndex))l.fromIndex=Number(l.fromIndex);else if(!Number.isInteger(l.fromIndex)||0>l.fromIndex)throw new TypeError(`${l.source} [THROW_ID_18] the fourth input argument must be a natural number or zero! Currently it's: ${l.fromIndex}`);if(!n(r)||0===r.length){if(l.relaxedAPI)return[];throw new TypeError(`string-find-heads-tails: [THROW_ID_02] the first input argument, input string, must be a non-zero-length string! Currently it's: ${typeof r}, equal to: ${r}`)}let d,f;if("string"!=typeof a&&!Array.isArray(a)){if(l.relaxedAPI)return[];throw new TypeError(`string-find-heads-tails: [THROW_ID_03] the second input argument, heads, must be either a string or an array of strings! Currently it's: ${typeof a}, equal to:\n${JSON.stringify(a,null,4)}`)}if("string"==typeof a){if(0===a.length){if(l.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_04] the second input argument, heads, must be a non-empty string! Currently it's empty.")}a=t(a)}else if(Array.isArray(a)){if(0===a.length){if(l.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_05] the second input argument, heads, must be a non-empty array and contain at least one string! Currently it's empty.")}if(a.every(((e,t)=>(d=e,f=t,n(e))))){if(!a.every(((e,t)=>(f=t,n(e)&&e.length>0&&""!==e.trim())))){if(!l.relaxedAPI)throw new TypeError(`string-find-heads-tails: [THROW_ID_07] the second input argument, heads, should not contain empty strings! For example, there's one detected at index ${f} of heads array:\n${JSON.stringify(a,null,4)}.`);if(0===(a=a.filter((e=>n(e)&&e.length>0))).length)return[]}}else{if(!l.relaxedAPI)throw new TypeError(`string-find-heads-tails: [THROW_ID_06] the second input argument, heads, contains non-string elements! For example, element at ${f}th index is ${typeof d}, equal to:\n${JSON.stringify(d,null,4)}. Whole heads array looks like:\n${JSON.stringify(a,null,4)}`);if(0===(a=a.filter((e=>n(e)&&e.length>0))).length)return[]}}if(!n(s)&&!Array.isArray(s)){if(l.relaxedAPI)return[];throw new TypeError(`string-find-heads-tails: [THROW_ID_08] the third input argument, tails, must be either a string or an array of strings! Currently it's: ${typeof s}, equal to:\n${JSON.stringify(s,null,4)}`)}if(n(s)){if(0===s.length){if(l.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_09] the third input argument, tails, must be a non-empty string! Currently it's empty.")}s=t(s)}else if(Array.isArray(s)){if(0===s.length){if(l.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_10] the third input argument, tails, must be a non-empty array and contain at least one string! Currently it's empty.")}if(s.every(((e,t)=>(d=e,f=t,n(e))))){if(!s.every(((e,t)=>(f=t,n(e)&&e.length>0&&""!==e.trim())))){if(!l.relaxedAPI)throw new TypeError(`string-find-heads-tails: [THROW_ID_12] the third input argument, tails, should not contain empty strings! For example, there's one detected at index ${f}. Whole tails array is equal to:\n${JSON.stringify(s,null,4)}`);if(0===(s=s.filter((e=>n(e)&&e.length>0))).length)return[]}}else{if(!l.relaxedAPI)throw new TypeError(`string-find-heads-tails: [THROW_ID_11] the third input argument, tails, contains non-string elements! For example, element at ${f}th index is ${typeof d}, equal to:\n${JSON.stringify(d,null,4)}. Whole tails array is equal to:\n${JSON.stringify(s,null,4)}`);if(0===(s=s.filter((e=>n(e)&&e.length>0))).length)return[]}}const u=l.source===i.source;if(l.throwWhenSomethingWrongIsDetected&&!l.allowWholeValueToBeOnlyHeadsOrTails){if(t(a).includes(r))throw Error(`${l.source}${u?": [THROW_ID_16]":""} the whole input string can't be equal to ${n(a)?"":"one of "}heads (${r})!`);if(t(s).includes(r))throw Error(`${l.source}${u?": [THROW_ID_17]":""} the whole input string can't be equal to ${n(s)?"":"one of "}tails (${r})!`)}const g=a.concat(s).map((e=>e.charAt(0))).reduce(((e,t)=>t.charCodeAt(0)>e[1]?[e[0],t.charCodeAt(0)]:t.charCodeAt(0)<e[0]?[t.charCodeAt(0),e[1]]:e),[a[0].charCodeAt(0),a[0].charCodeAt(0)]),y=[];let c,m=!1,p={},$="";for(let t=l.fromIndex,n=r.length;n>t;t++){const i=r[t].charCodeAt(0);if(g[1]>=i&&i>=g[0]){const i=e(r,t,a);if(i&&l.matchHeadsAndTailsStrictlyInPairsByTheirOrder)for(let e=a.length;e--;)if(a[e]===i){c=e;break}if(i){if(!m){p={},p.headsStartAt=t,p.headsEndAt=t+i.length,m=!0,t+=i.length-1,$&&($="");continue}if(l.throwWhenSomethingWrongIsDetected)throw new TypeError(`${l.source}${u?": [THROW_ID_19]":""} When processing "${r}", we found heads (${r.slice(t,t+i.length)}) starting at character with index number "${t}" and there was another set of heads before it! Generally speaking, there should be "heads-tails-heads-tails", not "heads-heads-tails"!\nWe're talking about the area of the code:\n\n\n--------------------------------------starts\n${r.slice(Math.max(t-200,0),t)}\n      [33m-------\x3e[39m [31m${r.slice(t,t+i.length)}[39m [33m<-------[39m\n${r.slice(t+i.length,Math.min(n,t+200))}\n--------------------------------------ends\n\n\nTo turn off this error being thrown, set opts.throwWhenSomethingWrongIsDetected to Boolean false.`)}const o=e(r,t,s);if(m&&o&&l.matchHeadsAndTailsStrictlyInPairsByTheirOrder&&void 0!==c&&void 0!==s[c]&&s[c]!==o){let e;for(let t=s.length;t--;)if(s[t]===o){e=t;break}throw new TypeError(`${l.source}${u?": [THROW_ID_20]":""} When processing "${r}", we had "opts.matchHeadsAndTailsStrictlyInPairsByTheirOrder" on. We found heads (${a[c]}) but the tails the followed it were not of the same index, ${c} (${s[c]}) but ${e} (${o}).`)}if(o){if(m){p.tailsStartAt=t,p.tailsEndAt=t+o.length,y.push(p),p={},m=!1,t+=o.length-1;continue}l.throwWhenSomethingWrongIsDetected&&($=`${l.source}${u?": [THROW_ID_21]":""} When processing "${r}", we found tails (${r.slice(t,t+o.length)}) starting at character with index number "${t}" but there were no heads preceding it. That's very naughty!`)}}if(l.throwWhenSomethingWrongIsDetected&&t===n-1){if(0!==Object.keys(p).length)throw new TypeError(`${l.source}${u?": [THROW_ID_22]":""} When processing "${r}", we reached the end of the string and yet didn't find any tails (${JSON.stringify(s,null,4)}) to match the last detected heads (${r.slice(p.headsStartAt,p.headsEndAt)})!`);if($)throw Error($)}}return y}export{i as defaults,a as strFindHeadsTails,r as version};