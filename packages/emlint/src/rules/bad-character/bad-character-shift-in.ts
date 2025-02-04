import { Linter, RuleObjType } from "../../linter";
import { badChars } from "../../util/bad-character-all";

// rule: bad-character-shift-in
// -----------------------------------------------------------------------------

// Catches raw character "SHIFT IN":
// https://www.fileformat.info/info/unicode/char/000f/index.htm

function badCharacterShiftIn(context: Linter): RuleObjType {
  const charCode = 15;
  return {
    character({ chr, i }) {
      if (chr.charCodeAt(0) === charCode) {
        context.report({
          ruleId: badChars.get(charCode) as string,
          message: "Bad character - SHIFT IN.",
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

export default badCharacterShiftIn;
