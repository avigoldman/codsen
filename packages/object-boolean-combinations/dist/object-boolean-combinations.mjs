/**
 * object-boolean-combinations
 * Consumes a defaults object with booleans, generates all possible variations of it
 * Version: 4.0.8
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/object-boolean-combinations/
 */

import t from"lodash.intersection";import e from"lodash.pull";import o from"lodash.isplainobject";import r from"lodash.clonedeep";const c="4.0.8";function s(c,s={}){if(!c)throw new Error("[THROW_ID_01] missing input object");if(!o(c))throw new Error("[THROW_ID_02] the first input object must be a true object");if(s&&!o(s))throw new Error("[THROW_ID_03] the second override object must be a true object");const n=r(c),h=r(s),i=Object.keys(n),f=[];let l=[];o(h)&&Object.keys(h).length&&(l=t(Object.keys(h),Object.keys(n)),l.forEach((t=>e(i,t))));const b=function(t){const e=[];for(let o=0;o<1<<t;o++){const r=[];for(let e=0;e<t;e++)r.push(o&1<<e?1:0);e.push(r)}return e}(Object.keys(i).length);let u;return b.forEach(((t,e)=>{u={},i.forEach(((t,o)=>{u[t]=1===b[e][o]})),f.push(u)})),o(h)&&Object.keys(h).length&&f.forEach((t=>l.forEach((e=>{t[e]=h[e]})))),f}export{s as combinations,c as version};
