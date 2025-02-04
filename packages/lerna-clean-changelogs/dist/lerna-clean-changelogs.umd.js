/**
 * @name lerna-clean-changelogs
 * @fileoverview Removes frivolous entries from commitizen generated changelogs
 * @version 3.0.5
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/lerna-clean-changelogs/}
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).lernaCleanChangelogs={})}(this,(function(t){"use strict";const e="3.0.5";function n(t){return"string"==typeof t}t.cleanChangelogs=function(t,r=!1){if(void 0===t)throw new Error("lerna-clean-changelogs: [THROW_ID_01] The first input argument is missing!");if(!n(t))throw new Error(`lerna-clean-changelogs: [THROW_ID_02] The first input argument must be a string! It was given as ${Array.isArray(t)?"array":typeof t}, equal to:\n${JSON.stringify(t,null,4)}`);let i,s=!1;if("string"==typeof t&&t.length&&(!t.includes("\n")||!t.includes("\r"))){const e=n(t)&&t.length&&("\n"===t[t.length-1]||"\r"===t[t.length-1]),o=(t=t.trim().replace(/(https:\/\/git\.sr\.ht\/~[^/]+\/[^/]+\/)commits\//g,"$1commit/")).split(/\r?\n/);r&&o.forEach(((t,e)=>{t.startsWith("#")&&(o[e]=t.replace(/(#+) \[?(\d+\.\d+\.\d+)\s?\]\([^)]*\)/g,"$1 $2")),e&&o[e].startsWith("# ")&&(o[e]=`#${o[e]}`)}));const l=[];for(let t=o.length;t--;){if(o[t].startsWith("**Note:** Version bump only")||r&&o[t].toLowerCase().includes("wip")){for(;n(o[t-1])&&!o[t-1].trim()&&t;)t-=1;for(t&&n(o[t-1])&&o[t-1].trim().startsWith("#")&&(t-=1);n(o[t-1])&&!o[t-1].trim()&&t;)t-=1}else o[t].trim()?l.unshift("*"===o[t][0]&&" "===o[t][1]?`- ${o[t].slice(2)}`:o[t]):s||(l.unshift(o[t].trim()),s=!0);o[t].trim()&&(s=!1)}i=`${l.join("\n")}${e?"\n":""}`}return{version:e,res:i||t}},t.version=e,Object.defineProperty(t,"__esModule",{value:!0})}));
