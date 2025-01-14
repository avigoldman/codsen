/* eslint @typescript-eslint/explicit-module-boundary-types: 0 */

import { left, right, leftSeq, rightSeq } from "string-left-right";

interface Obj {
  [key: string]: any;
}

function isStr(something: any): boolean {
  return typeof something === "string";
}

const headsAndTails = {
  CONFIGHEAD: "GENERATE-ATOMIC-CSS-CONFIG-STARTS",
  CONFIGTAIL: "GENERATE-ATOMIC-CSS-CONFIG-ENDS",
  CONTENTHEAD: "GENERATE-ATOMIC-CSS-CONTENT-STARTS",
  CONTENTTAIL: "GENERATE-ATOMIC-CSS-CONTENT-ENDS",
};

const units = [
  "px",
  "em",
  "%",
  "rem",
  "cm",
  "mm",
  "in",
  "pt",
  "pc",
  "ex",
  "ch",
  "vw",
  "vmin",
  "vmax",
];

const { CONFIGHEAD, CONFIGTAIL, CONTENTHEAD, CONTENTTAIL } = headsAndTails;

const padLeftIfTheresOnTheLeft = [":"];

function extractConfig(
  str: string
): [extractedConfig: string, rawContentAbove: string, rawContentBelow: string] {
  console.log(
    `045 util ███████████████████████████████████████ extractConfig() ███████████████████████████████████████`
  );
  let extractedConfig = str;
  let rawContentAbove = "";
  let rawContentBelow = "";

  if (str.includes(CONFIGHEAD) && str.includes(CONFIGTAIL)) {
    console.log(`052 config calc - case #2`);

    if (
      str.indexOf(CONFIGTAIL) !== -1 &&
      str.indexOf(CONTENTHEAD) !== -1 &&
      str.indexOf(CONFIGTAIL) > str.indexOf(CONTENTHEAD)
    ) {
      throw new Error(
        `generate-atomic-css: [THROW_ID_02] Config heads are after config tails!`
      );
    }
    let sliceFrom = str.indexOf(CONFIGHEAD) + CONFIGHEAD.length;
    let sliceTo = str.indexOf(CONFIGTAIL);
    // if there are opening CSS comments, include them:
    if (
      str[right(str, sliceFrom) as number] === "*" &&
      str[right(str, right(str, sliceFrom) as number) as number] === "/"
    ) {
      sliceFrom = (right(str, right(str, sliceFrom) as number) as number) + 1;
    }
    // if there are closing CSS comments include them too:
    if (
      str[left(str, sliceTo) as number] === "*" &&
      str[left(str, left(str, sliceTo) as number) as number] === "/"
    ) {
      sliceTo = left(str, left(str, sliceTo) as number) as number;
    }

    extractedConfig = str.slice(sliceFrom, sliceTo).trim();
    if (!isStr(extractedConfig) || !extractedConfig.trim().length) {
      console.log(`082 util: return empty`);
      return [extractedConfig, rawContentAbove, rawContentBelow];
    }
    console.log(
      `086 util: ${`\u001b[${36}m${`extractedConfig.trim()`}\u001b[${39}m`} = "${extractedConfig.trim()}"`
    );
  } else if (
    str.includes(CONFIGHEAD) &&
    !str.includes(CONFIGTAIL) &&
    str.includes(CONTENTHEAD)
  ) {
    console.log(`093 config calc - case #3`);
    if (str.indexOf(CONFIGHEAD) > str.indexOf(CONTENTHEAD)) {
      throw new Error(
        `generate-atomic-css: [THROW_ID_03] Config heads are after content heads!`
      );
    }
    extractedConfig = str.slice(
      str.indexOf(CONFIGHEAD) + CONFIGHEAD.length,
      str.indexOf(CONTENTHEAD)
    );
  } else if (
    !str.includes(CONFIGHEAD) &&
    !str.includes(CONFIGTAIL) &&
    (str.includes(CONTENTHEAD) || str.includes(CONTENTTAIL))
  ) {
    // strange case where instead of config heads/tails we have content heads/tails
    console.log(`109 config calc - case #4`);
    extractedConfig = str;

    // remove content head
    if (extractedConfig.includes(CONTENTHEAD)) {
      console.log(`114 CONTENTHEAD present`);
      // if content heads are present, cut off right after the closing comment
      // if such follows, or right after heads if not
      if (left(str, extractedConfig.indexOf(CONTENTHEAD))) {
        console.log(`118 - characters present on the left of contenthead`);
        let sliceTo = extractedConfig.indexOf(CONTENTHEAD);
        // if there are opening or closing comments, don't include those
        if (leftSeq(str, sliceTo, "/", "*")) {
          console.log(`122`);
          sliceTo = (leftSeq(str, sliceTo, "/", "*") as Obj).leftmostChar;
        }
        rawContentAbove = sliceTo === 0 ? "" : str.slice(0, sliceTo);
        console.log(
          `127 ${`\u001b[${33}m${`rawContentAbove`}\u001b[${39}m`} = ${JSON.stringify(
            rawContentAbove,
            null,
            4
          )}; ${`\u001b[${33}m${`rawContentBelow`}\u001b[${39}m`} = ${JSON.stringify(
            rawContentBelow,
            null,
            4
          )}`
        );
      }

      let sliceFrom = extractedConfig.indexOf(CONTENTHEAD) + CONTENTHEAD.length;
      console.log(
        `141 ${`\u001b[${33}m${`sliceFrom`}\u001b[${39}m`} = ${JSON.stringify(
          sliceFrom,
          null,
          4
        )}`
      );
      if (rightSeq(extractedConfig, sliceFrom - 1, "*", "/")) {
        sliceFrom =
          (rightSeq(extractedConfig, sliceFrom - 1, "*", "/") as Obj)
            .rightmostChar + 1;
      }
      let sliceTo = null;

      if (str.includes(CONTENTTAIL)) {
        console.log(`155 content tail detected`);
        sliceTo = str.indexOf(CONTENTTAIL);
        console.log(
          `158 ${`\u001b[${33}m${`sliceTo`}\u001b[${39}m`} = ${JSON.stringify(
            sliceTo,
            null,
            4
          )}`
        );
        // don't include comment on the left
        if (
          str[left(str, sliceTo) as number] === "*" &&
          str[left(str, left(str, sliceTo) as number) as number] === "/"
        ) {
          sliceTo = left(str, left(str, sliceTo));
          console.log(
            `171 ${`\u001b[${33}m${`sliceTo`}\u001b[${39}m`} = ${JSON.stringify(
              sliceTo,
              null,
              4
            )}`
          );
        }

        // is there content afterwards?
        let contentAfterStartsAt =
          str.indexOf(CONTENTTAIL) + CONTENTTAIL.length;
        console.log(
          `183 ${`\u001b[${33}m${`contentAfterStartsAt`}\u001b[${39}m`} = ${JSON.stringify(
            contentAfterStartsAt,
            null,
            4
          )}; slice: "${str.slice(contentAfterStartsAt)}"`
        );
        if (
          str[right(str, contentAfterStartsAt - 1) as number] === "*" &&
          str[
            right(str, right(str, contentAfterStartsAt - 1) as number) as number
          ] === "/"
        ) {
          contentAfterStartsAt =
            (right(
              str,
              right(str, contentAfterStartsAt - 1) as number
            ) as number) + 1;
          console.log(
            `201 ${`\u001b[${33}m${`contentAfterStartsAt`}\u001b[${39}m`} = ${JSON.stringify(
              contentAfterStartsAt,
              null,
              4
            )}; slice: "${str.slice(contentAfterStartsAt)}"`
          );
          // if there are non-whitespace characters, that's rawContentBelow
        }
        if (right(str, contentAfterStartsAt)) {
          rawContentBelow = str.slice(contentAfterStartsAt);
        }
      }

      if (sliceTo) {
        extractedConfig = extractedConfig.slice(sliceFrom, sliceTo).trim();
      } else {
        extractedConfig = extractedConfig.slice(sliceFrom).trim();
      }

      console.log(
        `221 ${`\u001b[${33}m${`extractedConfig`}\u001b[${39}m`} = ${JSON.stringify(
          extractedConfig,
          null,
          4
        )}`
      );
    }

    // remove content tail
    else if (extractedConfig.includes(CONTENTTAIL)) {
      console.log(`231 CONTENTTAIL present`);

      const contentInFront: string[] = [];
      let stopFilteringAndPassAllLines = false;
      extractedConfig = extractedConfig
        .split("\n")
        .filter((rowStr) => {
          if (!rowStr.includes("$$$") && !stopFilteringAndPassAllLines) {
            if (!stopFilteringAndPassAllLines) {
              contentInFront.push(rowStr);
            }
            return false;
          }
          // ... so the row contains $$$
          if (!stopFilteringAndPassAllLines) {
            stopFilteringAndPassAllLines = true;
            return true;
          }
          return true;
        })
        .join("\n");

      let sliceTo = extractedConfig.indexOf(CONTENTTAIL);

      if (leftSeq(extractedConfig, sliceTo, "/", "*")) {
        sliceTo = (leftSeq(extractedConfig, sliceTo, "/", "*") as Obj)
          .leftmostChar;
      }
      extractedConfig = extractedConfig.slice(0, sliceTo).trim();

      if (contentInFront.length) {
        rawContentAbove = `${contentInFront.join("\n")}\n`;
      }

      // retrieve the content after content tails
      let contentAfterStartsAt;
      if (right(str, str.indexOf(CONTENTTAIL) + CONTENTTAIL.length)) {
        console.log(`268 content after CONTENTTAIL detected`);
        contentAfterStartsAt = str.indexOf(CONTENTTAIL) + CONTENTTAIL.length;
        if (
          str[right(str, contentAfterStartsAt) as number] === "*" &&
          str[
            right(str, right(str, contentAfterStartsAt) as number) as number
          ] === "/"
        ) {
          contentAfterStartsAt =
            (right(str, right(str, contentAfterStartsAt) as number) as number) +
            1;
          if (right(str, contentAfterStartsAt)) {
            rawContentBelow = str.slice(contentAfterStartsAt);
          }
        }
      }
    }

    console.log(
      `287 ${`\u001b[${33}m${`rawContentAbove`}\u001b[${39}m`} = ${JSON.stringify(
        rawContentAbove,
        null,
        4
      )}; ${`\u001b[${33}m${`rawContentBelow`}\u001b[${39}m`} = ${JSON.stringify(
        rawContentBelow,
        null,
        4
      )}`
    );

    console.log(
      `299 ${`\u001b[${33}m${`extractedConfig`}\u001b[${39}m`} = ${JSON.stringify(
        extractedConfig,
        null,
        4
      )}`
    );
  } else {
    console.log(`306 config calc - case #5`);

    const contentHeadsRegex = new RegExp(
      `(\\/\\s*\\*\\s*)*${CONTENTHEAD}(\\s*\\*\\s*\\/)*`
    );
    const contentTailsRegex = new RegExp(
      `(\\/\\s*\\*\\s*)*${CONTENTTAIL}(\\s*\\*\\s*\\/)*`
    );
    let stopFiltering = false;
    const gatheredLinesAboveTopmostConfigLine: string[] = [];
    const gatheredLinesBelowLastConfigLine: string[] = [];

    // remove all lines above the first line which contains $$$

    const configLines: string[] = str.split("\n").filter((rowStr) => {
      if (stopFiltering) {
        return true;
      }
      if (
        !rowStr.includes("$$$") &&
        !rowStr.includes("{") &&
        !rowStr.includes(":")
      ) {
        gatheredLinesAboveTopmostConfigLine.push(rowStr);
        return false;
      }
      // but if it does contain $$$...
      stopFiltering = true;
      return true;
    });

    // now we need to separate any rows in the end that don't contain $$$
    for (let i = configLines.length; i--; ) {
      if (
        !configLines[i].includes("$$$") &&
        !configLines[i].includes("}") &&
        !configLines[i].includes(":")
      ) {
        gatheredLinesBelowLastConfigLine.unshift(configLines.pop() as string);
      } else {
        break;
      }
    }

    extractedConfig = configLines
      .join("\n")
      .replace(contentHeadsRegex, "")
      .replace(contentTailsRegex, "");

    if (gatheredLinesAboveTopmostConfigLine.length) {
      rawContentAbove = `${gatheredLinesAboveTopmostConfigLine.join("\n")}\n`;
    }
    if (gatheredLinesBelowLastConfigLine.length) {
      rawContentBelow = `\n${gatheredLinesBelowLastConfigLine.join("\n")}`;
    }
  }

  console.log(
    `364 util ███████████████████████████████████████ extractConfig() ends ███████████████████████████████████████`
  );
  return [extractedConfig, rawContentAbove, rawContentBelow];
}

function trimBlankLinesFromLinesArray(lineArr: string[], trim = true) {
  // killswitch is activated, do nothing
  if (!trim) {
    return lineArr;
  }
  const copyArr = Array.from(lineArr);
  if (copyArr.length && isStr(copyArr[0]) && !copyArr[0].trim().length) {
    do {
      copyArr.shift();
    } while (isStr(copyArr[0]) && !copyArr[0].trim().length);
  }
  if (
    copyArr.length &&
    isStr(copyArr[copyArr.length - 1]) &&
    !copyArr[copyArr.length - 1].trim().length
  ) {
    do {
      copyArr.pop();
    } while (
      copyArr &&
      copyArr[copyArr.length - 1] &&
      !copyArr[copyArr.length - 1].trim().length
    );
  }
  return copyArr;
}

// takes string for example, .mt$$$ { margin-top: $$$px; }|3
// and extracts the parts after the pipe
// also, we use it for simpler format sources that come from wizard on the
// webapp, format .mt|0|500 - same business, extract digits between pipes
function extractFromToSource(
  str: string,
  fromDefault = 0,
  toDefault = 500
): [from: number, to: number, source: string] {
  let from = fromDefault;
  let to = toDefault;
  let source = str;

  let tempArr;
  if (
    str.lastIndexOf("}") > 0 &&
    str.slice(str.lastIndexOf("}") + 1).includes("|")
  ) {
    console.log(`414 util: closing curlie detected`);
    tempArr = str
      .slice(str.lastIndexOf("}") + 1)
      .split("|")
      .filter((val) => val.trim().length)
      .map((val) => val.trim())
      .filter((val) =>
        String(val)
          .split("")
          .every((char) => /\d/g.test(char))
      );
  } else if (str.includes("|")) {
    console.log(`426 util: else case with pipes`);
    tempArr = str
      .split("|")
      .filter((val) => val.trim().length)
      .map((val) => val.trim())
      .filter((val) =>
        String(val)
          .split("")
          .every((char) => /\d/g.test(char))
      );
  }

  console.log(
    `439 util: ${`\u001b[${33}m${`tempArr`}\u001b[${39}m`} = ${JSON.stringify(
      tempArr,
      null,
      4
    )}`
  );
  if (Array.isArray(tempArr)) {
    if (tempArr.length === 1) {
      to = Number.parseInt(tempArr[0], 10);
    } else if (tempArr.length > 1) {
      from = Number.parseInt(tempArr[0], 10);
      to = Number.parseInt(tempArr[1], 10);
    }
  }

  console.log(`454 from=${from}; to=${to}`);

  // extract the source string - it's everything from zero to first pipe
  // that follows the last closing curly brace
  if (
    str.lastIndexOf("}") > 0 &&
    str.slice(str.lastIndexOf("}") + 1).includes("|")
  ) {
    source = str.slice(0, str.indexOf("|", str.lastIndexOf("}") + 1)).trimEnd();
    if (source.trim().startsWith("|")) {
      console.log(`464 util: crop leading pipe`);
      while (source.trim().startsWith("|")) {
        source = source.trim().slice(1);
      }
    }
  } else {
    console.log(`470 ${`\u001b[${36}m${`loop`}\u001b[${39}m`}`);
    let lastPipeWasAt = null;
    let firstNonPipeNonWhitespaceCharMet = false;
    let startFrom = 0;
    let endTo = str.length;

    // null is fresh state, true is met, false is pattern of only digits was broken
    let onlyDigitsAndWhitespaceBeenMet = null;

    for (let i = 0, len = str.length; i < len; i++) {
      console.log(
        `481 ${`\u001b[${36}m${`------ ${`str[${i}] = ${`\u001b[${35}m${
          str[i]
        }\u001b[${39}m`}`} ------`}\u001b[${39}m`}`
      );

      // first "cell" between pipes which contains only digits terminates the
      // loop; its opening pipe is "endTo", we slice up to it
      if ("0123456789".includes(str[i])) {
        // if it's digit...

        if (onlyDigitsAndWhitespaceBeenMet === null && str[i].trim().length) {
          onlyDigitsAndWhitespaceBeenMet = true;
          console.log(`493 SET onlyDigitsAndWhitespaceBeenMet = true`);
        }
      }
      // if not digit...
      else if (str[i] !== "|" && str[i].trim().length) {
        onlyDigitsAndWhitespaceBeenMet = false;
        console.log(`499 SET onlyDigitsAndWhitespaceBeenMet = false`);
      }

      // catch the last character
      if (!str[i + 1] && onlyDigitsAndWhitespaceBeenMet && lastPipeWasAt) {
        endTo = lastPipeWasAt;
        console.log(
          `506 SET ${`\u001b[${33}m${`endTo`}\u001b[${39}m`} = ${endTo}`
        );
      }

      // catch pipe
      if (str[i] === "|") {
        console.log(`512 ${`\u001b[${33}m${`pipe caught`}\u001b[${39}m`}`);
        if (onlyDigitsAndWhitespaceBeenMet && lastPipeWasAt) {
          endTo = lastPipeWasAt;
          console.log(
            `516 set endTo = ${endTo}; ${`\u001b[${31}m${`BREAK`}\u001b[${39}m`}`
          );
          break;
        }

        lastPipeWasAt = i;
        console.log(`522 SET lastPipeWasAt = ${lastPipeWasAt}`);

        // reset:
        onlyDigitsAndWhitespaceBeenMet = null;
        console.log(`526 SET onlyDigitsAndWhitespaceBeenMet = null`);
      } else if (!firstNonPipeNonWhitespaceCharMet && str[i].trim().length) {
        firstNonPipeNonWhitespaceCharMet = true;
        if (lastPipeWasAt !== null) {
          startFrom = lastPipeWasAt + 1;
          console.log(
            `532 SET ${`\u001b[${33}m${`startFrom`}\u001b[${39}m`} = ${startFrom}`
          );
        }
        console.log(
          `536 SET ${`\u001b[${33}m${`firstNonPipeNonWhitespaceCharMet`}\u001b[${39}m`} = ${firstNonPipeNonWhitespaceCharMet};`
        );
      }

      console.log(
        `541 ${`\u001b[${90}m${` ENDING
startFrom = ${startFrom}
endTo = ${endTo}
onlyDigitsAndWhitespaceBeenMet = ${onlyDigitsAndWhitespaceBeenMet}
lastPipeWasAt = ${lastPipeWasAt}
`}\u001b[${39}m`}`
      );
    }
    console.log(`549 startFrom = ${startFrom}; endTo = ${endTo}`);
    source = str.slice(startFrom, endTo).trimEnd();
    console.log(
      `552 FINAL ${`\u001b[${33}m${`source`}\u001b[${39}m`} = ${source}`
    );
  }

  return [from, to, source];
}

function prepLine(
  str: string,
  progressFn: null | ((percDone: number) => void),
  subsetFrom: number,
  subsetTo: number,
  generatedCount: Obj,
  pad: boolean
) {
  //
  //
  //
  //                PART I. Extract from, to and source values
  //
  //
  //

  let currentPercentageDone;
  let lastPercentage = 0;
  console.log(`\n\n\n\n\n`);
  console.log(`578 util: ${`\u001b[${36}m${`===========`}\u001b[${39}m`}`);
  console.log(
    `580 util: prepLine(): str: "${`\u001b[${35}m${str}\u001b[${39}m`}";\n${`\u001b[${35}m${`generatedCount`}\u001b[${39}m`} = ${JSON.stringify(
      generatedCount,
      null,
      0
    )}`
  );

  // we need to extract the "from" and to "values"
  // the separator is vertical pipe, which is a legit CSS selector

  const [from, to, source] = extractFromToSource(str, 0, 500);

  console.log(
    `593 ${`\u001b[${33}m${`from`}\u001b[${39}m`} = ${from}\n${`\u001b[${33}m${`to`}\u001b[${39}m`} = ${to}\n${`\u001b[${33}m${`source`}\u001b[${39}m`} = "${source}"\n`
  );

  //
  //
  //
  //           PART II. extract dollar-dollar-dollar positions and types
  //
  //
  //

  const subsetRange = subsetTo - subsetFrom;
  let res = "";

  // traverse
  for (let i = from; i <= to; i++) {
    let debtPaddingLen = 0;
    console.log("\n");
    console.log(
      `612 ███████████████████████████████████████ row i=${i} ███████████████████████████████████████\n`
    );
    // if (pad) {
    let startPoint = 0;
    for (let y = 0, len = source.length; y < len; y++) {
      const charcode = source[y].charCodeAt(0);
      console.log(
        `\u001b[${36}m${`===============================`}\u001b[${39}m \u001b[${35}m${`source[ ${y} ] = ${
          source[y].trim().length
            ? source[y]
            : JSON.stringify(source[y], null, 0)
        }`}\u001b[${39}m ${`\u001b[${90}m#${charcode}\u001b[${39}m`} \u001b[${36}m${`===============================`}\u001b[${39}m`
      );

      // catch third dollar of three dollars in a row
      // -----------------------------------------------------------------------
      if (source[y] === "$" && source[y - 1] === "$" && source[y - 2] === "$") {
        console.log(
          `630 ${`\u001b[${33}m${`startPoint`}\u001b[${39}m`} = ${JSON.stringify(
            startPoint,
            null,
            4
          )}`
        );
        console.log(`636 $$$ caught`);
        // submit all the content up until now
        const restOfStr = source.slice(y + 1);
        console.log(
          `640 ${`\u001b[${33}m${`restOfStr`}\u001b[${39}m`} = ${JSON.stringify(
            restOfStr,
            null,
            4
          )}`
        );
        let unitFound = "";

        console.log(`648`);
        if (
          i === 0 &&
          // eslint-disable-next-line consistent-return, array-callback-return
          units.some((unit) => {
            if (restOfStr.startsWith(unit)) {
              unitFound = unit;
              return true;
            }
          }) &&
          (source[right(source, y + unitFound.length) as number] === "{" ||
            !source[y + unitFound.length + 1].trim().length)
        ) {
          console.log(`661 push: "${source.slice(startPoint, y - 2)}"`);
          console.log(
            `663 push also: "${
              pad
                ? String(i).padStart(
                    String(to).length - String(i).length + unitFound.length + 1
                  )
                : i
            }"`
          );
          res += `${source.slice(startPoint, y - 2)}${
            pad
              ? String(i).padStart(
                  String(to).length - String(i).length + unitFound.length + 1
                )
              : i
          }`;
          console.log(`678 ${`\u001b[${32}m${`res = "${res}"`}\u001b[${39}m`}`);
          startPoint = y + 1 + (unitFound ? unitFound.length : 0);
        } else {
          // extract units if any follow the $$$
          let unitThatFollow = "";
          console.log(`683`);
          // eslint-disable-next-line consistent-return, array-callback-return
          units.some((unit) => {
            if (source.startsWith(unit, y + 1)) {
              unitThatFollow = unit;
              console.log(`688 return true`);
              return true;
            }
          });
          console.log(
            `693 extracted ${`\u001b[${33}m${`unitThatFollow`}\u001b[${39}m`} = ${JSON.stringify(
              unitThatFollow,
              null,
              4
            )}`
          );

          if (
            !source[y - 3].trim().length ||
            // eslint-disable-next-line
            padLeftIfTheresOnTheLeft.some((val) =>
              source
                .slice(startPoint, y - 2)
                .trim()
                .endsWith(val)
            )
          ) {
            // if left-side padding can be possible:
            console.log(
              `712 source.slice(startPoint, y - 2) = "${source.slice(
                startPoint,
                y - 2
              )}"`
            );
            console.log(
              `718 push ${`${source.slice(startPoint, y - 2)}${
                pad
                  ? String(i).padStart(
                      String(to).length +
                        (i === 0 && unitThatFollow ? unitThatFollow.length : 0)
                    )
                  : i
              }`}`
            );
            // if the chunk we're adding starts with unit, we need to remove it
            // if it's zero'th row
            let temp = 0;
            if (i === 0) {
              // eslint-disable-next-line no-loop-func
              units.some((unit) => {
                if (`${source.slice(startPoint, y - 2)}`.startsWith(unit)) {
                  temp = unit.length;
                }
                return true;
              });
            }

            res += `${source.slice(startPoint + temp, y - 2)}${
              pad
                ? String(i).padStart(
                    String(to).length +
                      (i === 0 && unitThatFollow ? unitThatFollow.length : 0)
                  )
                : i
            }`;
            console.log(
              `749 ${`\u001b[${32}m${`res = "${res}"`}\u001b[${39}m`}`
            );
          } else if (
            !source[y + 1].trim().length ||
            source[right(source, y) as number] === "{"
          ) {
            console.log(
              `756 push ${`${source.slice(startPoint, y - 2)}${
                pad
                  ? String(i).padEnd(
                      String(to).length +
                        (i === 0 && unitThatFollow
                          ? (unitThatFollow as any).length
                          : 0)
                    )
                  : i
              }`}`
            );
            // if right-side padding can be possible:
            res += `${source.slice(startPoint, y - 2)}${
              pad
                ? String(i).padEnd(
                    String(to).length +
                      (i === 0 && unitThatFollow
                        ? (unitThatFollow as any).length
                        : 0)
                  )
                : i
            }`;
            console.log(
              `779 ${`\u001b[${32}m${`res = "${res}"`}\u001b[${39}m`}`
            );
          } else {
            console.log(`782 push ${`${source.slice(startPoint, y - 2)}${i}`}`);
            res += `${source.slice(startPoint, y - 2)}${i}`;
            console.log(
              `785 ${`\u001b[${32}m${`res = "${res}"`}\u001b[${39}m`}`
            );

            // also, make a note of padding which we'll need to do later,
            // in front of the next opening curlie.
            // for example, range is 0-10, so 2 digit padding, and we have
            // .pt0px[lang|=en]
            // this zero above needs to be padded at the next available location
            // that is before opening curlie.
            //

            if (pad) {
              debtPaddingLen = String(to).length - String(i).length;
              console.log(
                `799 ${`\u001b[${32}m${`██`}\u001b[${39}m`} ${`\u001b[${33}m${`debtPaddingLen`}\u001b[${39}m`} = ${JSON.stringify(
                  debtPaddingLen,
                  null,
                  4
                )}`
              );
            }
          }
          startPoint = y + 1;
        }
      }

      // catch opening curlie
      // -----------------------------------------------------------------------
      if (source[y] === "{" && pad) {
        console.log(`814 opening curlie caught`);
        if (debtPaddingLen) {
          res += `${source.slice(startPoint, y)}${` `.repeat(debtPaddingLen)}`;
          startPoint = y;
          debtPaddingLen = 0;
          console.log(
            `820 SET startPoint = ${startPoint}; debtPaddingLen = ${debtPaddingLen}`
          );
        }
      }

      // catch the last character of a line
      if (!source[y + 1]) {
        console.log(`827 last character on a line!`);
        console.log(
          `829 ${`\u001b[${33}m${`startPoint`}\u001b[${39}m`} = ${JSON.stringify(
            startPoint,
            null,
            4
          )}`
        );
        let unitFound = "";
        const restOfStr = source.slice(startPoint);
        console.log(
          `838 restOfStr = "${restOfStr}" --- we'll check, does it start with any elements from units`
        );
        if (
          i === 0 &&
          // eslint-disable-next-line
          units.some((unit) => {
            if (restOfStr.startsWith(unit)) {
              unitFound = unit;
              return true;
            }
          })
        ) {
          console.log(
            `851 push "${source.slice(startPoint + unitFound.length)}"`
          );
          res += `${source.slice(startPoint + unitFound.length)}`;
          console.log(`854 ${`\u001b[${32}m${`res = "${res}"`}\u001b[${39}m`}`);
        } else {
          console.log(`856 last char - submit "${source.slice(startPoint)}"`);
          res += `${source.slice(startPoint)}`;
          console.log(`858 ${`\u001b[${32}m${`res = "${res}"`}\u001b[${39}m`}`);
        }
        // add line break
        res += `${i !== to ? "\n" : ""}`;
        console.log(
          `863 add line break ${`\u001b[${32}m${`res = "${res}"`}\u001b[${39}m`}`
        );
      }
    }
    // eslint-disable-next-line no-param-reassign
    generatedCount.count += 1;

    if (typeof progressFn === "function") {
      currentPercentageDone = Math.floor(
        subsetFrom + (i / (to - from)) * subsetRange
      );

      if (currentPercentageDone !== lastPercentage) {
        lastPercentage = currentPercentageDone;
        progressFn(currentPercentageDone);
      }
    }
  }
  return res;
}

function bump(str: string, thingToBump: Obj) {
  if (/\.\w/g.test(str)) {
    // eslint-disable-next-line no-param-reassign
    thingToBump.count += 1;
  }
  return str;
}

function prepConfig(
  str: string,
  progressFn: null | ((percDone: number) => void),
  progressFrom: number,
  progressTo: number,
  trim = true,
  generatedCount: Obj,
  pad: boolean
) {
  // all rows will report the progress from progressFrom to progressTo.
  // For example, defaults 0 to 100.
  // If there are for example 5 rows, each row will iterate through
  // (100-0)/5 = 20 percent range. This means, progress bar will be jumpy:
  // it will pass rows without $$$ quick but ones with $$$ slow and granular.
  return trimBlankLinesFromLinesArray(
    str
      .split(/\r?\n/)
      .map((rowStr, i, arr) =>
        rowStr.includes("$$$")
          ? prepLine(
              rowStr,
              progressFn,
              progressFrom + ((progressTo - progressFrom) / arr.length) * i,
              progressFrom +
                ((progressTo - progressFrom) / arr.length) * (i + 1),
              generatedCount,
              pad
            )
          : bump(rowStr, generatedCount)
      ),
    trim
  ).join("\n");
}

export {
  Obj,
  prepLine,
  prepConfig,
  isStr,
  extractFromToSource,
  extractConfig,
  headsAndTails,
};
