/**
 * @name is-html-attribute-closing
 * @fileoverview Is a character on a given index a closing of an HTML attribute?
 * @version 2.2.7
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/is-html-attribute-closing/}
 */

import { allHtmlAttribs } from 'html-all-known-attributes';
import { isAttrNameChar } from 'is-char-suitable-for-html-attr-name';
import { left, right } from 'string-left-right';
import { matchRight } from 'string-match-left-right';

function makeTheQuoteOpposite(quoteChar) {
  return quoteChar === `'` ? `"` : `'`;
}
function ensureXIsNotPresentBeforeOneOfY(str, startingIdx, x, y = []) {
  for (let i = startingIdx, len = str.length; i < len; i++) {
    if (y.some(oneOfStr => str.startsWith(oneOfStr, i))) {
      return true;
    }
    if (str[i] === x) {
      return false;
    }
  }
  return true;
}
function xBeforeYOnTheRight(str, startingIdx, x, y) {
  for (let i = startingIdx, len = str.length; i < len; i++) {
    if (str.startsWith(x, i)) {
      return true;
    }
    if (str.startsWith(y, i)) {
      return false;
    }
  }
  return false;
}
function plausibleAttrStartsAtX(str, start) {
  if (!isAttrNameChar(str[start]) || !start) {
    return false;
  }
  const regex = /^[a-zA-Z0-9:-]*(\s*[=]?\s*((?:'[^']*')|(?:"[^"]*")))|( [^/>'"=]*['"])/;
  return regex.test(str.slice(start));
}
function guaranteedAttrStartsAtX(str, start) {
  if (!start || !isAttrNameChar(str[start])) {
    return false;
  }
  const regex = /^[a-zA-Z0-9:-]*=(((?:'[^']*')|(?:"[^"]*"))|((?:['"][^'"]*['"]\s*\/?>)))/;
  return regex.test(str.slice(start));
}
function findAttrNameCharsChunkOnTheLeft(str, i) {
  if (!isAttrNameChar(str[left(str, i)])) {
    return;
  }
  for (let y = i; y--;) {
    if (str[y].trim().length && !isAttrNameChar(str[y])) {
      return str.slice(y + 1, i);
    }
  }
}

var version$1 = "2.2.7";

const version = version$1;
function isAttrClosing(str, idxOfAttrOpening, isThisClosingIdx) {
  if (typeof str !== "string" || !str.trim() || !Number.isInteger(idxOfAttrOpening) || !Number.isInteger(isThisClosingIdx) || !str[idxOfAttrOpening] || !str[isThisClosingIdx] || idxOfAttrOpening >= isThisClosingIdx) {
    return false;
  }
  const openingQuote = `'"`.includes(str[idxOfAttrOpening]) ? str[idxOfAttrOpening] : null;
  let oppositeToOpeningQuote = null;
  if (openingQuote) {
    oppositeToOpeningQuote = makeTheQuoteOpposite(openingQuote);
  }
  let chunkStartsAt;
  const quotesCount = new Map().set(`'`, 0).set(`"`, 0).set(`matchedPairs`, 0);
  let lastQuoteAt = null;
  let totalQuotesCount = 0;
  let lastQuoteWasMatched = false;
  let lastMatchedQuotesPairsStartIsAt;
  let lastMatchedQuotesPairsEndIsAt;
  let lastCapturedChunk;
  let secondLastCapturedChunk;
  let lastChunkWasCapturedAfterSuspectedClosing = false;
  let closingBracketMet = false;
  let openingBracketMet = false;
  for (let i = idxOfAttrOpening, len = str.length; i < len; i++) {
    const rightVal = right(str, i);
    const leftVal = left(str, i);
    if (
    `'"`.includes(str[i]) &&
    lastQuoteWasMatched &&
    lastMatchedQuotesPairsStartIsAt === idxOfAttrOpening &&
    lastMatchedQuotesPairsEndIsAt !== undefined && lastMatchedQuotesPairsEndIsAt < i &&
    i >= isThisClosingIdx) {
      const E1 = i !== isThisClosingIdx || guaranteedAttrStartsAtX(str, right(str, isThisClosingIdx)) || `/>`.includes(str[rightVal]);
      const E2 = !(i > isThisClosingIdx && str[idxOfAttrOpening] === str[isThisClosingIdx] && str[idxOfAttrOpening] === str[i] &&
      plausibleAttrStartsAtX(str, i + 1));
      const E31 =
      i === isThisClosingIdx &&
      plausibleAttrStartsAtX(str, isThisClosingIdx + 1);
      const E32 =
      chunkStartsAt && chunkStartsAt < i && allHtmlAttribs.has(str.slice(chunkStartsAt, i).trim());
      if (chunkStartsAt) {
        str.slice(chunkStartsAt, i).trim();
      }
      const E33 = chunkStartsAt && chunkStartsAt < i && str[chunkStartsAt - 1] && !str[chunkStartsAt - 1].trim() &&
      Array.from(str.slice(chunkStartsAt, i).trim()).every(char => isAttrNameChar(char)) &&
      str[idxOfAttrOpening] === str[isThisClosingIdx] && !`/>`.includes(str[rightVal]) && ensureXIsNotPresentBeforeOneOfY(str, i + 1, "=", [`'`, `"`]);
      let attrNameCharsChunkOnTheLeft;
      if (i === isThisClosingIdx) {
        attrNameCharsChunkOnTheLeft = findAttrNameCharsChunkOnTheLeft(str, i);
      }
      const E34 =
      i === isThisClosingIdx && (
      !isAttrNameChar(str[leftVal]) ||
      attrNameCharsChunkOnTheLeft && !allHtmlAttribs.has(attrNameCharsChunkOnTheLeft)) &&
      str[leftVal] !== "=";
      const E41 =
      `/>`.includes(str[rightVal]) && i === isThisClosingIdx;
      const E42 =
      isAttrNameChar(str[rightVal]);
      const E43 =
      lastQuoteWasMatched && i !== isThisClosingIdx;
      const E5 =
      !(
      i >= isThisClosingIdx &&
      str[left(str, isThisClosingIdx)] === ":");
      return !!(E1 && E2 && (E31 || E32 || E33 || E34) && (E41 || E42 || E43) && E5);
    }
    if (`'"`.includes(str[i])) {
      if (str[i] === `'` && str[i - 1] === `"` && str[i + 1] === `"` || str[i] === `"` && str[i - 1] === `'` && str[i + 1] === `'`) {
        continue;
      }
      if (lastQuoteAt && str[i] === str[lastQuoteAt]) {
        quotesCount.set("matchedPairs", quotesCount.get("matchedPairs") + 1);
        lastMatchedQuotesPairsStartIsAt = lastQuoteAt;
        lastMatchedQuotesPairsEndIsAt = i;
        lastQuoteAt = null;
        lastQuoteWasMatched = true;
      } else {
        lastQuoteWasMatched = false;
      }
      quotesCount.set(str[i], quotesCount.get(str[i]) + 1);
      totalQuotesCount = quotesCount.get(`"`) + quotesCount.get(`'`);
    }
    if (str[i] === ">" && !closingBracketMet) {
      closingBracketMet = true;
      if (totalQuotesCount && quotesCount.get(`matchedPairs`) && totalQuotesCount === quotesCount.get(`matchedPairs`) * 2 &&
      i < isThisClosingIdx) {
        return false;
      }
    }
    if (str[i] === "<" &&
    str[rightVal] !== "%" && closingBracketMet && !openingBracketMet) {
      openingBracketMet = true;
      return false;
    }
    if (str[i].trim() && !chunkStartsAt) {
      if (isAttrNameChar(str[i])) {
        chunkStartsAt = i;
      }
    } else if (chunkStartsAt && !isAttrNameChar(str[i])) {
      secondLastCapturedChunk = lastCapturedChunk;
      lastCapturedChunk = str.slice(chunkStartsAt, i);
      lastChunkWasCapturedAfterSuspectedClosing = chunkStartsAt >= isThisClosingIdx;
      if (`'"`.includes(str[i]) && quotesCount.get(`matchedPairs`) === 0 && totalQuotesCount === 3 && str[idxOfAttrOpening] === str[i] && allHtmlAttribs.has(lastCapturedChunk) && !`'"`.includes(str[rightVal])) {
        const A1 = i > isThisClosingIdx;
        const A21 = !lastQuoteAt;
        const A22 = lastQuoteAt + 1 >= i;
        const A23 = str.slice(lastQuoteAt + 1, i).trim().split(/\s+/).every(chunk => allHtmlAttribs.has(chunk));
        const A3 = !lastCapturedChunk || !secondLastCapturedChunk || !secondLastCapturedChunk.endsWith(":");
        const B1 = i === isThisClosingIdx;
        const B21 = totalQuotesCount < 3;
        const B22 = !!lastQuoteWasMatched;
        const B23 = !lastQuoteAt;
        const B24 = lastQuoteAt + 1 >= i;
        const B25 = !str.slice(lastQuoteAt + 1, i).trim().split(/\s+/).every(chunk => allHtmlAttribs.has(chunk));
        return A1 && (A21 || A22 || A23) && A3 || B1 && (B21 || B22 || B23 || B24 || B25);
      }
      if (
      lastCapturedChunk && allHtmlAttribs.has(lastCapturedChunk) && lastMatchedQuotesPairsStartIsAt === idxOfAttrOpening && lastMatchedQuotesPairsEndIsAt === isThisClosingIdx) {
        return true;
      }
    }
    if (
    `'"`.includes(str[i]) && (
    !(quotesCount.get(`"`) % 2) || !(quotesCount.get(`'`) % 2)) &&
    (quotesCount.get(`"`) + quotesCount.get(`'`)) % 2 && (
    lastCapturedChunk &&
    allHtmlAttribs.has(lastCapturedChunk) ||
    i > isThisClosingIdx + 1 && allHtmlAttribs.has(str.slice(isThisClosingIdx + 1, i).trim())) &&
    !(str[i + 1] === str[i] && str[i] === str[idxOfAttrOpening]) &&
    !(
    i > isThisClosingIdx + 1 &&
    str[left(str, isThisClosingIdx)] === ":") &&
    !(lastCapturedChunk && secondLastCapturedChunk && secondLastCapturedChunk.trim().endsWith(":"))) {
      const R0 = i > isThisClosingIdx;
      const R1 = !!openingQuote;
      const R2 = str[idxOfAttrOpening] !== str[isThisClosingIdx];
      const R3 = allHtmlAttribs.has(str.slice(idxOfAttrOpening + 1, isThisClosingIdx).trim());
      const R4 = !xBeforeYOnTheRight(str, i + 1, str[isThisClosingIdx], makeTheQuoteOpposite(str[isThisClosingIdx]));
      return R0 && !(R1 && R2 && R3 && R4);
    }
    if (
    (str[i] === "=" ||
    !str[i].length &&
    str[rightVal] === "=") &&
    lastCapturedChunk &&
    allHtmlAttribs.has(lastCapturedChunk)) {
      const W1 = i > isThisClosingIdx;
      const W2 =
      !(!(
      lastQuoteWasMatched && lastMatchedQuotesPairsStartIsAt === idxOfAttrOpening && lastMatchedQuotesPairsEndIsAt === isThisClosingIdx ||
      guaranteedAttrStartsAtX(str, chunkStartsAt)) &&
      lastQuoteWasMatched && lastMatchedQuotesPairsStartIsAt !== undefined && lastMatchedQuotesPairsStartIsAt <= isThisClosingIdx);
      return W1 && W2;
    }
    if (i > isThisClosingIdx) {
      if (openingQuote && str[i] === openingQuote) {
        const Y1 = !!lastQuoteAt;
        const Y2 = lastQuoteAt === isThisClosingIdx;
        const Y3 = lastQuoteAt + 1 < i && str.slice(lastQuoteAt + 1, i).trim();
        const Y4 = str.slice(lastQuoteAt + 1, i).trim().split(/\s+/).every(chunk => allHtmlAttribs.has(chunk));
        const Y5 = i >= isThisClosingIdx;
        const Y6 = !str[rightVal] || !`'"`.includes(str[rightVal]);
        return !!(Y1 && Y2 && Y3 && Y4 && Y5 && Y6);
      }
      if (
      openingQuote &&
      str[isThisClosingIdx] === oppositeToOpeningQuote &&
      str[i] === oppositeToOpeningQuote) {
        return false;
      }
      if (str[i] === "/" || str[i] === ">" || str[i] === "<") {
        const R0 =
        str[idxOfAttrOpening] === str[isThisClosingIdx] &&
        lastQuoteAt === isThisClosingIdx &&
        !str.slice(idxOfAttrOpening + 1, isThisClosingIdx).includes(str[idxOfAttrOpening]);
        const R11 = quotesCount.get(`matchedPairs`) < 2;
        const attrNameCharsChunkOnTheLeft = findAttrNameCharsChunkOnTheLeft(str, i);
        const R12 = (!attrNameCharsChunkOnTheLeft || !allHtmlAttribs.has(attrNameCharsChunkOnTheLeft)) && (
        !(i > isThisClosingIdx &&
        quotesCount.get(`'`) &&
        quotesCount.get(`"`) &&
        quotesCount.get(`matchedPairs`) > 1) ||
        `/>`.includes(str[rightVal]));
        const R2 = totalQuotesCount < 3 ||
        quotesCount.get(`"`) + quotesCount.get(`'`) - quotesCount.get(`matchedPairs`) * 2 !== 2;
        const R31 = !lastQuoteWasMatched || lastQuoteWasMatched && !(lastMatchedQuotesPairsStartIsAt !== undefined && Array.from(str.slice(idxOfAttrOpening + 1, lastMatchedQuotesPairsStartIsAt).trim()).every(char => isAttrNameChar(char)) && allHtmlAttribs.has(str.slice(idxOfAttrOpening + 1, lastMatchedQuotesPairsStartIsAt).trim()));
        const R32 = !rightVal && totalQuotesCount % 2 === 0;
        const R33 = str[idxOfAttrOpening - 2] && str[idxOfAttrOpening - 1] === "=" && isAttrNameChar(str[idxOfAttrOpening - 2]);
        const R34 = !ensureXIsNotPresentBeforeOneOfY(str, i + 1, "<", [`='`, `="`]);
        return (
          R0 ||
          (R11 || R12) &&
          R2 && (
          R31 ||
          R32 ||
          R33 ||
          R34)
        );
      }
      if (str[i] === "=" && matchRight(str, i, [`'`, `"`], {
        trimBeforeMatching: true,
        trimCharsBeforeMatching: ["="]
      })) {
        return true;
      }
    } else {
      let firstNonWhitespaceCharOnTheLeft;
      if (str[i - 1] && str[i - 1].trim() && str[i - 1] !== "=") {
        firstNonWhitespaceCharOnTheLeft = i - 1;
      } else {
        for (let y = i; y--;) {
          if (str[y].trim() && str[y] !== "=") {
            firstNonWhitespaceCharOnTheLeft = y;
            break;
          }
        }
      }
      if (str[i] === "=" && matchRight(str, i, [`'`, `"`], {
        cb: char => !`/>`.includes(char),
        trimBeforeMatching: true,
        trimCharsBeforeMatching: ["="]
      }) &&
      isAttrNameChar(str[firstNonWhitespaceCharOnTheLeft]) &&
      !str.slice(idxOfAttrOpening + 1).startsWith("http") && !str.slice(idxOfAttrOpening + 1, i).includes("/") && !str.endsWith("src=", idxOfAttrOpening) && !str.endsWith("href=", idxOfAttrOpening)) {
        return false;
      }
      if (i === isThisClosingIdx && guaranteedAttrStartsAtX(str, i + 1)) {
        return true;
      }
      if (i < isThisClosingIdx && `'"`.includes(str[i]) && lastCapturedChunk && str[left(str, idxOfAttrOpening)] && str[left(str, idxOfAttrOpening)] !== "=" && lastMatchedQuotesPairsStartIsAt === idxOfAttrOpening && allHtmlAttribs.has(lastCapturedChunk)) {
        return false;
      }
      if (i === isThisClosingIdx && `'"`.includes(str[i]) && (str[leftVal] === `'` || str[leftVal] === `"`) && lastCapturedChunk && secondLastCapturedChunk && totalQuotesCount % 2 === 0 && secondLastCapturedChunk.endsWith(":")) {
        return true;
      }
      if (i === isThisClosingIdx && `'"`.includes(str[i]) && str.slice(idxOfAttrOpening, isThisClosingIdx).includes(":") && (str[rightVal] === ">" || str[rightVal] === "/" && str[right(str, rightVal)] === ">")) {
        return true;
      }
    }
    if (`'"`.includes(str[i]) &&
    i > isThisClosingIdx) {
      if (
      !lastChunkWasCapturedAfterSuspectedClosing || !lastCapturedChunk ||
      !allHtmlAttribs.has(lastCapturedChunk)) {
        return false;
      }
      return true;
    }
    if (`'"`.includes(str[i])) {
      lastQuoteAt = i;
    }
    if (chunkStartsAt && !isAttrNameChar(str[i])) {
      chunkStartsAt = null;
    }
  }
  return false;
}

export { isAttrClosing, version };
