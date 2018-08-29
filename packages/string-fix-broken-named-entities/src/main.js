import rangesMerge from "ranges-merge";
import clone from "lodash.clonedeep";

/**
 * stringFixBrokenNamedEntities - fixes broken named HTML entities
 *
 * @param  {string} inputString
 * @return {array}  ranges array OR null
 */
function stringFixBrokenNamedEntities(str) {
  // state flags

  // this one is to mark the exception when current character is not ampersand
  // where should be one, but it is not necessary to add an ampersand here.
  // For example, there was ampersand and bunch of rubbish in between it and
  // current character. Current character should have ampersand in front of it.
  // We don't add one though, because we consult with this flag.
  let state_AmpersandNotNeeded = false;

  // markers:
  // define defaults so that we can reset to objects with keys, not empty objects

  // * nbsp tracking:
  const nbspDefault = {
    nameStartsAt: null, // when we'll insert range, we'll use this or "this - 1"
    ampersandNecessary: null, // default is not Boolean, to mark the state it needs tending
    patience: 1, // one letter can be omitted from name
    matchedN: null, // set the index of the first catch
    matchedB: null, // set the index of the first catch
    matchedS: null, // set the index of the first catch
    matchedP: null, // set the index of the first catch
    matchedSemicol: null // set the index of the first catch
  };
  let nbsp = clone(nbspDefault);
  const nbspWipe = () => {
    nbsp = clone(nbspDefault);
  };

  // insurance:
  if (typeof str !== "string") {
    throw new Error(
      `string-fix-broken-named-entities: [THROW_ID_01] the input must be string! Currently we've been given ${typeof str}, equal to:\n${JSON.stringify(
        str,
        null,
        4
      )}`
    );
  }
  // this is what we'll eventually return (or null):
  const rangesArr = [];

  //                                      |
  //                                      |
  //                                      |
  //                                      |
  //                                      |
  //                                      |
  //                                      |
  //              T   H   E       L   O   O   P       S  T  A  R  T  S
  //                                      |
  //                                      |
  //                                 \    |     /
  //                                  \   |    /
  //                                   \  |   /
  //                                    \ |  /
  //                                     \| /
  //                                      V

  // differently from regex-based approach, we aim to traverse the string only once:
  outerloop: for (let i = 0, len = str.length + 1; i < len; i++) {
    //            |
    //            |
    //            |
    //            |
    //            |
    // PART 1. FRONTAL LOGGING
    //            |
    //            |
    //            |
    //            |
    //            |
    console.log(
      `\u001b[${36}m${`===============================`}\u001b[${39}m \u001b[${35}m${`str[ ${i} ] = ${`\u001b[${31}m${
        str[i]
          ? str[i].trim() === ""
            ? str[i] === null
              ? "null"
              : str[i] === "\n"
                ? "line break"
                : str[i] === "\t"
                  ? "tab"
                  : str[i] === " "
                    ? "space"
                    : "???"
            : str[i]
          : "undefined"
      }\u001b[${39}m`}`}\u001b[${39}m \u001b[${36}m${`===============================`}\u001b[${39}m`
    );

    //            |
    //            |
    //            |
    //            |
    //            |
    // PART 3. RULES AT THE TOP
    //            |
    //            |
    //            |
    //            |
    //            |

    // Catch ending of an nbsp (or messed up set of its characters)
    // It's the character after semicolon or whatever is the last when semicolon
    // itself is missing.

    const matchedLettersCount =
      (nbsp.matchedN !== null ? 1 : 0) +
      (nbsp.matchedB !== null ? 1 : 0) +
      (nbsp.matchedS !== null ? 1 : 0) +
      (nbsp.matchedP !== null ? 1 : 0);
    if (
      nbsp.nameStartsAt !== null &&
      matchedLettersCount > 2 &&
      (nbsp.matchedSemicol !== null ||
        (!str[i] ||
          (nbsp.matchedN !== null &&
            nbsp.matchedB !== null &&
            nbsp.matchedS !== null &&
            nbsp.matchedP !== null &&
            str[i] !== str[i - 1]) ||
          (str[i].toLowerCase() !== "n" &&
            str[i].toLowerCase() !== "b" &&
            str[i].toLowerCase() !== "s" &&
            str[i].toLowerCase() !== "p"))) &&
      str[i] !== ";" &&
      (str[i + 1] === undefined || str[i + 1] !== ";")
    ) {
      if (str.slice(nbsp.nameStartsAt, i) !== "&nbsp;") {
        console.log(
          `\u001b[${32}m${`140 ENDING OF AN NBSP; PUSH [${
            nbsp.nameStartsAt
          }, ${i}, "&nbsp;"]`}\u001b[${39}m`
        );
        rangesArr.push([nbsp.nameStartsAt, i, "&nbsp;"]);
      }
      nbspWipe();
      console.log(`147 WIPE ${`\u001b[${33}m${`nbsp`}\u001b[${39}m`}`);
      continue outerloop;
    }

    //            |
    //            |
    //            |
    //            |
    //            |
    // PART 3. RULES AT THE MIDDLE
    //            |
    //            |
    //            |
    //            |
    //            |

    // catch ampersand
    if (str[i] === "&") {
      console.log("165 & caught");
      // 1. catch recursively-encoded cases. They're easy actually, the task will
      // be deleting sequence of repeated "amp;" between ampersand and letter.
      if (
        str[i + 1] === "a" &&
        str[i + 2] === "m" &&
        str[i + 3] === "p" &&
        str[i + 4] === ";"
      ) {
        // Mark the potential start of the nbsp. If following characters don't
        // match the nbsp pattern, we'll quickly wipe it.
        if (nbsp.nameStartsAt === null) {
          nbsp.nameStartsAt = i;
        }
        // activate the state:
        state_AmpersandNotNeeded = true;
        // catch all subsequent repetitions of "amp;"
        let endingOfAmpRepetition = i + 5;
        while (
          str[endingOfAmpRepetition] === "a" &&
          str[endingOfAmpRepetition + 1] === "m" &&
          str[endingOfAmpRepetition + 2] === "p" &&
          str[endingOfAmpRepetition + 3] === ";"
        ) {
          endingOfAmpRepetition += 4;
        }
        // after loop's ending, submit the rubbish repetitions for deletion
        rangesArr.push([i + 1, endingOfAmpRepetition]);
        console.log(
          `194 PUSH \u001b[${33}m${`[${i +
            1}, ${endingOfAmpRepetition}]`}\u001b[${39}m`
        );
        // shift the index
        i = endingOfAmpRepetition - 1;
        continue outerloop;
      }

      // 2. mark the potential beginning of an nbsp:
      if (nbsp.nameStartsAt === null) {
        if (nbsp.ampersandNecessary === null) {
          // The check above is for not false but null because null means it's
          // not set false is set to false. Thus check can't be "if false".

          // mark the beginning
          nbsp.nameStartsAt = i;
          console.log(
            `211 SET ${`\u001b[${33}m${`nbsp.nameStartsAt`}\u001b[${39}m`} = ${
              nbsp.nameStartsAt
            }`
          );
          nbsp.ampersandNecessary = false;
          console.log(
            `217 SET ${`\u001b[${33}m${`nbsp.ampersandNecessary`}\u001b[${39}m`} = ${
              nbsp.ampersandNecessary
            }`
          );
        }
      }

      // 3. catch some other named HTML entities without semicolons

      if (str[i + 1] === "a" && str[i + 2] === "n" && str[i + 3] === "g") {
        if (str[i + 4] !== "s" && str[i + 4] !== ";") {
          // add missing semicolon on &ang (not &angst)
          rangesArr.push([i, i + 4, "&ang;"]);
          console.log(
            `231 PUSH \u001b[${33}m${`[${i}, ${i + 4}, "&ang;"]`}\u001b[${39}m`
          );
          i += 3;
          continue outerloop;
        } else if (
          str[i + 4] === "s" &&
          str[i + 5] === "t" &&
          str[i + 6] !== ";"
        ) {
          // add missing semicolon on &angst
          rangesArr.push([i, i + 6, "&angst;"]);
          console.log(
            `243 PUSH \u001b[${33}m${`[${i}, ${i +
              6}, "&angst;"]`}\u001b[${39}m`
          );
          i += 5;
          continue outerloop;
        }
      } else if (str[i + 1] === "p" && str[i + 2] === "i") {
        if (str[i + 3] !== "v" && str[i + 3] !== ";") {
          // add missing semicolon on &pi (not &piv)
          rangesArr.push([i, i + 3, "&pi;"]);
          console.log(
            `254 PUSH \u001b[${33}m${`[${i}, ${i + 3}, "&pi;"]`}\u001b[${39}m`
          );
          i += 3;
          continue outerloop;
        } else if (str[i + 3] === "v" && str[i + 4] !== ";") {
          // add missing semicolon on &piv
          rangesArr.push([i, i + 4, "&piv;"]);
          console.log(
            `262 PUSH \u001b[${33}m${`[${i}, ${i + 4}, "&piv;"]`}\u001b[${39}m`
          );
          i += 3;
          continue outerloop;
        }
      } else if (
        str[i + 1] === "P" &&
        str[i + 2] === "i" &&
        str[i + 3] !== ";"
      ) {
        // add missing semicolon on &Pi
        rangesArr.push([i, i + 3, "&Pi;"]);
        console.log(
          `275 PUSH \u001b[${33}m${`[${i}, ${i + 3}, "&Pi;"]`}\u001b[${39}m`
        );
        i += 2;
        continue outerloop;
      } else if (str[i + 1] === "s") {
        if (
          str[i + 2] === "i" &&
          str[i + 3] === "g" &&
          str[i + 4] === "m" &&
          str[i + 5] === "a" &&
          str[i + 6] !== ";" &&
          str[i + 6] !== "f"
        ) {
          // add missing semicolon on &sigma (not &sigmaf)
          rangesArr.push([i, i + 6, "&sigma;"]);
          console.log(
            `291 PUSH \u001b[${33}m${`[${i}, ${i +
              6}, "&sigma;"]`}\u001b[${39}m`
          );
          i += 5;
          continue outerloop;
        } else if (
          str[i + 2] === "u" &&
          str[i + 3] === "b" &&
          str[i + 4] !== ";" &&
          str[i + 4] !== "e"
        ) {
          // add missing semicolon on &sub (not &sube)
          rangesArr.push([i, i + 4, "&sub;"]);
          console.log(
            `305 PUSH \u001b[${33}m${`[${i}, ${i + 4}, "&sub;"]`}\u001b[${39}m`
          );
          i += 3;
          continue outerloop;
        } else if (
          str[i + 2] === "u" &&
          str[i + 3] === "p" &&
          str[i + 4] !== "f" &&
          str[i + 4] !== "e" &&
          str[i + 4] !== "1" &&
          str[i + 4] !== "2" &&
          str[i + 4] !== "3" &&
          str[i + 4] !== ";"
        ) {
          // add missing semicolon on &sup (not &supf, &supe, &sup1, &sup2 or &sup3) without semicol
          rangesArr.push([i, i + 4, "&sup;"]);
          console.log(
            `322 PUSH \u001b[${33}m${`[${i}, ${i + 4}, "&sup;"]`}\u001b[${39}m`
          );
          i += 3;
          continue outerloop;
        }
      } else if (str[i + 1] === "t") {
        if (
          str[i + 2] === "h" &&
          str[i + 3] === "e" &&
          str[i + 4] === "t" &&
          str[i + 5] === "a" &&
          str[i + 6] !== "s" &&
          str[i + 6] !== ";"
        ) {
          // &theta (not &thetasym) without semicol
          rangesArr.push([i, i + 6, "&theta;"]);
          console.log(
            `339 PUSH \u001b[${33}m${`[${i}, ${i +
              6}, "&theta;"]`}\u001b[${39}m`
          );
          i += 5;
          continue outerloop;
        } else if (
          str[i + 2] === "h" &&
          str[i + 3] === "i" &&
          str[i + 4] === "n" &&
          str[i + 5] === "s" &&
          str[i + 6] === "p" &&
          str[i + 7] !== ";"
        ) {
          // &thinsp without semicol
          rangesArr.push([i, i + 7, "&thinsp;"]);
          console.log(
            `355 PUSH \u001b[${33}m${`[${i}, ${i +
              7}, "&thinsp;"]`}\u001b[${39}m`
          );
          i += 6;
          continue outerloop;
        }
      }
    }

    // catch "n"
    if (str[i] && str[i].toLowerCase() === "n") {
      // failsafe
      if (str[i - 1] === "i" && str[i + 1] === "s") {
        console.log("368 pattern ...ins... detected - bail");
        nbspWipe();
        continue outerloop;
      }

      // action
      console.log("374 n caught");
      nbsp.matchedN = i;
      if (nbsp.nameStartsAt === null) {
        // 1. mark it
        nbsp.nameStartsAt = i;
        console.log(
          `380 SET ${`\u001b[${33}m${`nbsp.nameStartsAt`}\u001b[${39}m`} = ${
            nbsp.nameStartsAt
          }`
        );
        // 2. tend the ampersand situation
        if (nbsp.ampersandNecessary === null && !state_AmpersandNotNeeded) {
          // if by now there are signs of ampersand records, it must be added later:
          nbsp.ampersandNecessary = true;
        } else if (nbsp.ampersandNecessary !== true) {
          // in all other cases, set it as not needed
          nbsp.ampersandNecessary = false;
        }
        console.log(
          `393 SET ${`\u001b[${33}m${`nbsp.ampersandNecessary`}\u001b[${39}m`} = ${
            nbsp.ampersandNecessary
          }`
        );
      }
    }

    // catch "b"
    if (str[i] && str[i].toLowerCase() === "b") {
      console.log("402 b caught");
      if (nbsp.nameStartsAt !== null) {
        // clean code, N was already detected
        nbsp.matchedB = i;
        console.log(
          `407 SET ${`\u001b[${33}m${`nbsp.matchedB`}\u001b[${39}m`} = ${
            nbsp.matchedB
          }`
        );
      } else if (nbsp.patience) {
        // dirty code case because ampersand or "n" are missing so far

        // 1. Patience is reduced for every single character missing. There can
        // be only one character missing out of n-b-s-p.
        nbsp.patience--;
        console.log(
          `418 MINUSMINUS ${`\u001b[${33}m${`nbsp.patience`}\u001b[${39}m`}, then it's ${
            nbsp.patience
          }`
        );

        // 2. mark the start
        nbsp.nameStartsAt = i;
        console.log(
          `426 SET ${`\u001b[${33}m${`nbsp.nameStartsAt`}\u001b[${39}m`} = ${
            nbsp.nameStartsAt
          }`
        );
        nbsp.matchedB = i;
        console.log(
          `432 SET ${`\u001b[${33}m${`nbsp.matchedB`}\u001b[${39}m`} = true`
        );

        // 3. tend the ampersand situation
        if (nbsp.ampersandNecessary === null && !state_AmpersandNotNeeded) {
          // if by now there are signs of ampersand records, it must be added later:
          nbsp.ampersandNecessary = true;
          console.log(
            `440 SET ${`\u001b[${33}m${`nbsp.ampersandNecessary`}\u001b[${39}m`} = true`
          );
        } else if (nbsp.ampersandNecessary !== true) {
          // in all other cases, set it as not needed
          nbsp.ampersandNecessary = false;
          console.log(
            `446 SET ${`\u001b[${33}m${`nbsp.ampersandNecessary`}\u001b[${39}m`} = false`
          );
        }
      } else {
        // wipe
        nbspWipe();
        console.log(`452 WIPE ${`\u001b[${33}m${`nbsp`}\u001b[${39}m`}`);
        continue outerloop;
      }
    }

    // catch "s"
    if (str[i] && str[i].toLowerCase() === "s") {
      console.log("459 s caught");
      if (nbsp.nameStartsAt !== null) {
        // clean code
        nbsp.matchedS = i;
        console.log(
          `464 SET ${`\u001b[${33}m${`nbsp.matchedS`}\u001b[${39}m`} = ${
            nbsp.matchedS
          }`
        );
      } else if (nbsp.patience) {
        // dirty code case because ampersand or "n" are missing so far

        // 1. Patience is reduced for every single character missing. There can
        // be only one character missing out of n-b-s-p.
        nbsp.patience--;
        console.log(
          `475 MINUSMINUS ${`\u001b[${33}m${`nbsp.patience`}\u001b[${39}m`}, then it's ${
            nbsp.patience
          }`
        );

        // 2. mark the start
        nbsp.nameStartsAt = i;
        console.log(
          `483 SET ${`\u001b[${33}m${`nbsp.nameStartsAt`}\u001b[${39}m`} = ${
            nbsp.nameStartsAt
          }`
        );
        nbsp.matchedS = i;
        console.log(
          `489 SET ${`\u001b[${33}m${`nbsp.matchedS`}\u001b[${39}m`} = true`
        );

        // 3. tend the ampersand situation
        if (nbsp.ampersandNecessary === null && !state_AmpersandNotNeeded) {
          // if by now there are signs of ampersand records, it must be added later:
          nbsp.ampersandNecessary = true;
          console.log(
            `497 SET ${`\u001b[${33}m${`nbsp.ampersandNecessary`}\u001b[${39}m`} = true`
          );
        } else if (nbsp.ampersandNecessary !== true) {
          // in all other cases, set it as not needed
          nbsp.ampersandNecessary = false;
          console.log(
            `503 SET ${`\u001b[${33}m${`nbsp.ampersandNecessary`}\u001b[${39}m`} = false`
          );
        }
      } else {
        // wipe
        nbspWipe();
        console.log(`509 WIPE ${`\u001b[${33}m${`nbsp`}\u001b[${39}m`}`);
        continue outerloop;
      }
    }

    // catch "p"
    if (str[i] && str[i].toLowerCase() === "p") {
      console.log("516 p caught");
      if (nbsp.nameStartsAt !== null) {
        // clean code
        nbsp.matchedP = i;
        console.log(
          `521 SET ${`\u001b[${33}m${`nbsp.matchedP`}\u001b[${39}m`} = ${
            nbsp.matchedP
          }`
        );
      } else if (nbsp.patience) {
        // dirty code case because ampersand or "n" are missing so far

        // 1. Patience is reduced for every single character missing. There can
        // be only one character missing out of n-b-s-p.
        nbsp.patience--;
        console.log(
          `532 MINUSMINUS ${`\u001b[${33}m${`nbsp.patience`}\u001b[${39}m`}, then it's ${
            nbsp.patience
          }`
        );

        // 2. mark the start
        nbsp.nameStartsAt = i;
        console.log(
          `540 SET ${`\u001b[${33}m${`nbsp.nameStartsAt`}\u001b[${39}m`} = ${
            nbsp.nameStartsAt
          }`
        );
        nbsp.matchedP = i;
        console.log(
          `546 SET ${`\u001b[${33}m${`nbsp.matchedP`}\u001b[${39}m`} = true`
        );

        // 3. tend the ampersand situation
        if (nbsp.ampersandNecessary === null && !state_AmpersandNotNeeded) {
          // if by now there are signs of ampersand records, it must be added later:
          nbsp.ampersandNecessary = true;
          console.log(
            `554 SET ${`\u001b[${33}m${`nbsp.ampersandNecessary`}\u001b[${39}m`} = true`
          );
        } else if (nbsp.ampersandNecessary !== true) {
          // in all other cases, set it as not needed
          nbsp.ampersandNecessary = false;
          console.log(
            `560 SET ${`\u001b[${33}m${`nbsp.ampersandNecessary`}\u001b[${39}m`} = false`
          );
        }
      } else {
        // wipe
        nbspWipe();
        console.log(`566 WIPE ${`\u001b[${33}m${`nbsp`}\u001b[${39}m`}`);
        continue outerloop;
      }
    }

    // catch semicolon
    if (str[i] === ";") {
      if (nbsp.nameStartsAt !== null) {
        nbsp.matchedSemicol = i;
        console.log(
          `576 SET ${`\u001b[${33}m${`nbsp.matchedSemicol`}\u001b[${39}m`} = true`
        );
      }
    }

    // catch whitespace
    if (str[i] && str[i].trim().length === 0 && nbsp.nameStartsAt !== null) {
      nbspWipe();
      console.log(`584 WIPE ${`\u001b[${33}m${`nbsp`}\u001b[${39}m`}`);
    }

    //            |
    //            |
    //            |
    //            |
    //            |
    // PART 3. RULES AT THE BOTTOM
    //            |
    //            |
    //            |
    //            |
    //            |

    // the state state_AmpersandNotNeeded = true lasts only for a single
    // character, hence needs to be at the very bottom:
    if (state_AmpersandNotNeeded) {
      state_AmpersandNotNeeded = false;
      console.log(
        `604 SET ${`\u001b[${33}m${`state_AmpersandNotNeeded`}\u001b[${39}m`} = ${JSON.stringify(
          state_AmpersandNotNeeded,
          null,
          4
        )}`
      );
    }

    //            |
    //            |
    //            |
    //            |
    //            |
    // PART 4. LOGGING:
    //            |
    //            |
    //            |
    //            |
    //            |
    console.log("---------------");
    console.log(`state_AmpersandNotNeeded = ${state_AmpersandNotNeeded}`);
    console.log(
      `${`\u001b[${33}m${`nbsp`}\u001b[${39}m`} = ${JSON.stringify(
        nbsp,
        null,
        4
      )}${
        rangesArr.length
          ? `\n${`\u001b[${32}m${`rangesArr`}\u001b[${39}m`} = ${JSON.stringify(
              rangesArr,
              null,
              4
            )}`
          : ""
      }`
    );
  }

  //                                      ^
  //                                     /|\
  //                                    / | \
  //                                   /  |  \
  //                                  /   |   \
  //                                 /    |    \
  //                                      |
  //                                      |
  //              T   H   E       L   O   O   P       E   N   D   S
  //                                      |
  //                                      |
  //                                      |
  //                                      |
  //                                      |
  //                                      |

  return rangesArr.length ? rangesMerge(rangesArr) : null;
}

export default stringFixBrokenNamedEntities;
