/**
 * @name string-apostrophes
 * @fileoverview Comprehensive, HTML-entities-aware tool to typographically-correct the apostrophes and single/double quotes
 * @version 2.0.4
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-apostrophes/}
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).stringApostrophes={})}(this,(function(e){"use strict";
/**
 * @name ranges-sort
 * @fileoverview Sort string index ranges
 * @version 5.0.4
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-sort/}
 */const r={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function s(e,s){if(!Array.isArray(e)||!e.length)return e;const o={...r,...s};let t,n;if(o.strictlyTwoElementsInRangeArrays&&!e.filter((e=>e)).every(((e,r)=>2===e.length||(t=r,n=e.length,!1))))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${t}th range (${JSON.stringify(e[t],null,4)}) has not two but ${n} elements!`);if(!e.filter((e=>e)).every(((e,r)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(t=r,!1))))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${t}th range (${JSON.stringify(e[t],null,4)}) does not consist of only natural numbers!`);const i=e.filter((e=>e)).length**2;let u=0;return Array.from(e).filter((e=>e)).sort(((e,r)=>(o.progressFn&&(u+=1,o.progressFn(Math.floor(100*u/i))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1)))}
/**
 * @name ranges-merge
 * @fileoverview Merge and sort string index ranges
 * @version 8.0.4
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-merge/}
 */const o={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function t(e,r){function t(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return null;let n;if(r){if(!t(r))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(r,null,4)} (type ${typeof r})`);if(n={...o,...r},n.progressFn&&t(n.progressFn)&&!Object.keys(n.progressFn).length)n.progressFn=null;else if(n.progressFn&&"function"!=typeof n.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof n.progressFn}", equal to ${JSON.stringify(n.progressFn,null,4)}`);if(n.mergeType&&1!=+n.mergeType&&2!=+n.mergeType)throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof n.mergeType}", equal to ${JSON.stringify(n.mergeType,null,4)}`);if("boolean"!=typeof n.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof n.joinRangesThatTouchEdges}", equal to ${JSON.stringify(n.joinRangesThatTouchEdges,null,4)}`)}else n={...o};const i=e.filter((e=>e)).map((e=>[...e])).filter((e=>void 0!==e[2]||e[0]!==e[1]));let u,l,a;if(u=n.progressFn?s(i,{progressFn:e=>{a=Math.floor(e/5),a!==l&&(l=a,n.progressFn(a))}}):s(i),!u)return null;const p=u.length-1;for(let e=p;e>0;e--)n.progressFn&&(a=Math.floor(78*(1-e/p))+21,a!==l&&a>l&&(l=a,n.progressFn(a))),(u[e][0]<=u[e-1][0]||!n.joinRangesThatTouchEdges&&u[e][0]<u[e-1][1]||n.joinRangesThatTouchEdges&&u[e][0]<=u[e-1][1])&&(u[e-1][0]=Math.min(u[e][0],u[e-1][0]),u[e-1][1]=Math.max(u[e][1],u[e-1][1]),void 0!==u[e][2]&&(u[e-1][0]>=u[e][0]||u[e-1][1]<=u[e][1])&&null!==u[e-1][2]&&(null===u[e][2]&&null!==u[e-1][2]?u[e-1][2]=null:null!=u[e-1][2]?2==+n.mergeType&&u[e-1][0]===u[e][0]?u[e-1][2]=u[e][2]:u[e-1][2]+=u[e][2]:u[e-1][2]=u[e][2]),u.splice(e,1),e=u.length);return u.length?u:null}
/**
 * @name ranges-apply
 * @fileoverview Take an array of string index ranges, delete/replace the string according to them
 * @version 6.0.4
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-apply/}
 */function n(e,r,s){let o,n=0,i=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof e)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(r&&!Array.isArray(r))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(s&&"function"!=typeof s)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof s}, equal to: ${JSON.stringify(s,null,4)}`);if(!r||!r.filter((e=>e)).length)return e;o=Array.isArray(r)&&Number.isInteger(r[0])&&Number.isInteger(r[1])?[Array.from(r)]:Array.from(r);const u=o.length;let l=0;o.filter((e=>e)).forEach(((e,r)=>{if(s&&(n=Math.floor(l/u*10),n!==i&&(i=n,s(n))),!Array.isArray(e))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${r}th element not an array: ${JSON.stringify(e,null,4)}, which is ${typeof e}`);if(!Number.isInteger(e[0])){if(!Number.isInteger(+e[0])||+e[0]<0)throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${r}th element, array ${JSON.stringify(e,null,0)}. Its first element is not an integer, string index, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0],null,4)}.`);o[r][0]=+o[r][0]}if(!Number.isInteger(e[1])){if(!Number.isInteger(+e[1])||+e[1]<0)throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${r}th element, array ${JSON.stringify(e,null,0)}. Its second element is not an integer, string index, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1],null,4)}.`);o[r][1]=+o[r][1]}l+=1}));const a=t(o,{progressFn:e=>{s&&(n=10+Math.floor(e/10),n!==i&&(i=n,s(n)))}}),p=Array.isArray(a)?a.length:0;if(p>0){const r=e.slice(a[p-1][1]);e=a.reduce(((r,o,t,u)=>{s&&(n=20+Math.floor(t/p*80),n!==i&&(i=n,s(n)));return r+e.slice(0===t?0:u[t-1][1],u[t][0])+(u[t][2]||"")}),""),e+=r}return e}function i(e,{from:r,to:s,value:o,convertEntities:t=!0,convertApostrophes:n=!0,offsetBy:i}){if(!Number.isInteger(r)||r<0)throw new Error(`string-apostrophes: [THROW_ID_01] options objects key "to", a starting string index, is wrong! It was given as ${r} (type ${typeof r})`);Number.isInteger(s)||(s=r+1);const u=[],l="‘",a="’",p="“",g="”",c="′",h="″",f=[".",",",";","!","?"];function y(e){return"string"==typeof e&&e.charCodeAt(0)>=48&&e.charCodeAt(0)<=57}function m(e){return"string"==typeof e&&!!e.length&&e.toUpperCase()!==e.toLowerCase()}return o&&["'",l,a,c].includes(o)||s===r+1&&["'",l,a,c].includes(e[r])?e[r-1]&&e[s]&&y(e[r-1])&&!m(e[s])?n&&e.slice(r,s)!==(t?"&prime;":c)&&o!==(t?"&prime;":c)?u.push([r,s,t?"&prime;":c]):n||"'"===e.slice(r,s)||"'"===o||u.push([r,s,"'"]):e[s]&&e[s+1]&&"n"===e[s]&&e.slice(r,s)===e.slice(s+1,s+1+(s-r))?n&&e.slice(r,s+2)!==(t?"&rsquo;n&rsquo;":`${a}n${a}`)&&o!==(t?"&rsquo;n&rsquo;":`${a}n${a}`)?(u.push([r,s+2,t?"&rsquo;n&rsquo;":`${a}n${a}`]),"function"==typeof i&&i(2)):n||"'n'"===e.slice(r,s+2)||"'n'"===o||(u.push([r,s+2,"'n'"]),"function"==typeof i&&i(2)):e[s]&&"t"===e[s].toLowerCase()&&(!e[s+1]||!e[s+1].trim()||"i"===e[s+1].toLowerCase())||e[s]&&e[s+2]&&"t"===e[s].toLowerCase()&&"w"===e[s+1].toLowerCase()&&("a"===e[s+2].toLowerCase()||"e"===e[s+2].toLowerCase()||"i"===e[s+2].toLowerCase()||"o"===e[s+2].toLowerCase())||e[s]&&e[s+1]&&"e"===e[s].toLowerCase()&&"m"===e[s+1].toLowerCase()||e[s]&&e[s+4]&&"c"===e[s].toLowerCase()&&"a"===e[s+1].toLowerCase()&&"u"===e[s+2].toLowerCase()&&"s"===e[s+3].toLowerCase()&&"e"===e[s+4].toLowerCase()||e[s]&&y(e[s])?n&&e.slice(r,s)!==(t?"&rsquo;":a)&&o!==(t?"&rsquo;":a)?u.push([r,s,t?"&rsquo;":a]):n||"'"===e.slice(r,s)||"'"===o||u.push([r,s,"'"]):e[r-1]&&e[s]&&f.includes(e[r-1])?e[s].trim()?'"'===e[s]&&e[s+1]&&!e[s+1].trim()&&(n&&e.slice(r,s+1)!==(t?"&rsquo;&rdquo;":`${a}${g}`)&&o!==(t?"&rsquo;&rdquo;":`${a}${g}`)?(u.push([r,s+1,""+(t?"&rsquo;&rdquo;":`${a}${g}`)]),"function"==typeof i&&i(1)):n||"'\""===e.slice(r,s+1)||"'\""===o||(u.push([r,s+1,"'\""]),"function"==typeof i&&i(1))):n&&e.slice(r,s)!==(t?"&rsquo;":a)&&o!==(t?"&rsquo;":a)?u.push([r,s,t?"&rsquo;":a]):n||"'"===e.slice(r,s)||"'"===o||u.push([r,s,"'"]):0===r&&e.slice(s).trim()?n&&e.slice(r,s)!==(t?"&lsquo;":l)&&o!==(t?"&lsquo;":l)?u.push([r,s,t?"&lsquo;":l]):n||"'"===e.slice(r,s)||"'"===o||u.push([r,s,"'"]):!e[s]&&e.slice(0,r).trim()?n&&e.slice(r,s)!==(t?"&rsquo;":a)&&o!==(t?"&rsquo;":a)?u.push([r,s,t?"&rsquo;":a]):n||"'"===e.slice(r,s)||"'"===o||u.push([r,s,"'"]):e[r-1]&&e[s]&&(m(e[r-1])||y(e[r-1]))&&(m(e[s])||y(e[s]))?n?(e[s]&&e[r-5]&&"h"===e[r-5].toLowerCase()&&"a"===e[r-4].toLowerCase()&&"w"===e[r-3].toLowerCase()&&"a"===e[r-2].toLowerCase()&&"i"===e[r-1].toLowerCase()&&"i"===e[s].toLowerCase()||e[r-1]&&"o"===e[r-1].toLowerCase()&&e[s+2]&&"a"===e[s].toLowerCase()&&"h"===e[s+1].toLowerCase()&&"u"===e[s+2].toLowerCase())&&e.slice(r,s)!==(t?"&lsquo;":l)&&o!==(t?"&lsquo;":l)?u.push([r,s,t?"&lsquo;":l]):e.slice(r,s)!==(t?"&rsquo;":a)&&o!==(t?"&rsquo;":a)&&u.push([r,s,t?"&rsquo;":a]):"'"!==e.slice(r,s)&&"'"!==o&&u.push([r,s,"'"]):e[s]&&(m(e[s])||y(e[s]))?n&&e.slice(r,s)!==(t?"&lsquo;":l)&&o!==(t?"&lsquo;":l)?u.push([r,s,t?"&lsquo;":l]):n||"'"===e.slice(r,s)||"'"===o||u.push([r,s,"'"]):m(e[r-1])||y(e[r-1])?n&&e.slice(r,s)!==(t?"&rsquo;":a)&&o!==(t?"&rsquo;":a)?u.push([r,s,t?"&rsquo;":a]):n||"'"===e.slice(r,s)||"'"===o||u.push([r,s,"'"]):e[r-1]&&!e[r-1].trim()?n&&e.slice(r,s)!==(t?"&lsquo;":l)&&o!==(t?"&lsquo;":l)?u.push([r,s,t?"&lsquo;":l]):n||"'"===e.slice(r,s)||"'"===o||u.push([r,s,"'"]):e[s]&&!e[s].trim()&&(n&&e.slice(r,s)!==(t?"&rsquo;":a)&&o!==(t?"&rsquo;":a)?u.push([r,s,t?"&rsquo;":a]):n||"'"===e.slice(r,s)||"'"===o||u.push([r,s,"'"])):(['"',p,g,h].includes(o)||s===r+1&&['"',p,g,h].includes(e[r]))&&(e[r-1]&&y(e[r-1])&&e[s]&&"'"!==e[s]&&'"'!==e[s]&&e[s]!==a&&e[s]!==g&&e[s]!==l&&e[s]!==p?n&&e.slice(r,s)!==(t?"&Prime;":h)&&o!==(t?"&Prime;":h)?u.push([r,s,t?"&Prime;":h]):n||'"'===e.slice(r,s)||'"'===o||u.push([r,s,'"']):e[r-1]&&e[s]&&f.includes(e[r-1])?e[s].trim()?"'"===e[s]&&e[s+1]&&!e[s+1].trim()&&(n&&e.slice(r,s+1)!==(t?"&rdquo;&rsquo;":`${g}${a}`)&&o!==(t?"&rdquo;&rsquo;":`${g}${a}`)?(u.push([r,s+1,t?"&rdquo;&rsquo;":`${g}${a}`]),"function"==typeof i&&i(1)):n||"\"'"===e.slice(r,s+1)||"\"'"===o||(u.push([r,s+1,"\"'"]),"function"==typeof i&&i(1))):n&&e.slice(r,s)!==(t?"&rdquo;":g)&&o!==(t?"&rdquo;":g)?u.push([r,s,t?"&rdquo;":g]):n||'"'===e.slice(r,s)||'"'===o||u.push([r,s,'"']):0===r&&e[s]&&e.slice(s).trim()?n&&e.slice(r,s)!==(t?"&ldquo;":p)&&o!==(t?"&ldquo;":p)?u.push([r,s,t?"&ldquo;":p]):n||'"'===e.slice(r,s)||'"'===o||u.push([r,s,'"']):!e[s]&&e.slice(0,r).trim()?n&&e.slice(r,s)!==(t?"&rdquo;":g)&&o!==(t?"&rdquo;":g)?u.push([r,s,t?"&rdquo;":g]):n||'"'===e.slice(r,s)||'"'===o||u.push([r,s,'"']):e[s]&&(m(e[s])||y(e[s]))?n&&e.slice(r,s)!==(t?"&ldquo;":p)&&o!==(t?"&ldquo;":p)?u.push([r,s,t?"&ldquo;":p]):n||'"'===e.slice(r,s)||'"'===o||u.push([r,s,'"']):e[r-1]&&(m(e[r-1])||y(e[r-1]))?n&&e.slice(r,s)!==(t?"&rdquo;":g)&&o!==(t?"&rdquo;":g)?u.push([r,s,t?"&rdquo;":g]):n||'"'===e.slice(r,s)||'"'===o||u.push([r,s,'"']):e[r-1]&&!e[r-1].trim()?n&&e.slice(r,s)!==(t?"&ldquo;":p)&&o!==(t?"&ldquo;":p)?u.push([r,s,t?"&ldquo;":p]):n||'"'===e.slice(r,s)||'"'===o||u.push([r,s,'"']):e[s]&&!e[s].trim()&&(n&&e.slice(r,s)!==(t?"&rdquo;":g)&&o!==(t?"&rdquo;":g)?u.push([r,s,t?"&rdquo;":g]):n||'"'===e.slice(r,s)||'"'===o||u.push([r,s,'"']))),u}e.convertAll=function(e,r){let s=[];const o={convertApostrophes:!0,convertEntities:!1,...r};for(let r=0,t=e.length;r<t;r++){o.from=r,o.offsetBy=e=>{r+=e};const t=i(e,o);Array.isArray(t)&&t.length&&(s=s.concat(t))}return{result:n(e,s),ranges:s}},e.convertOne=i,e.version="2.0.4",Object.defineProperty(e,"__esModule",{value:!0})}));
