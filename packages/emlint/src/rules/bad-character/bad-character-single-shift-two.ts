import { Linter, RuleObjType } from "../../linter";
import { badChars } from "../../util/bad-character-all";

// rule: bad-character-single-shift-two
// -----------------------------------------------------------------------------

// Catches raw character "SINGLE SHIFT TWO":
// https://www.fileformat.info/info/unicode/char/008e/index.htm

function badCharacterSingleShiftTwo(context: Linter): RuleObjType {
  const charCode = 142;
  return {
    character({ chr, i }) {
      if (chr.charCodeAt(0) === charCode) {
        context.report({
          ruleId: badChars.get(charCode) as string,
          message: "Bad character - SINGLE SHIFT TWO.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1]], // just delete it
          },
        });
      }
    },
  };
}

export default badCharacterSingleShiftTwo;
