import { Linter, RuleObjType } from "../../linter";
import { badChars } from "../../util/bad-character-all";

// rule: bad-character-partial-line-backward
// -----------------------------------------------------------------------------

// Catches raw character "PARTIAL LINE BACKWARD":
// https://www.fileformat.info/info/unicode/char/008c/index.htm

function badCharacterPartialLineBackward(context: Linter): RuleObjType {
  const charCode = 140;
  return {
    character({ chr, i }) {
      if (chr.charCodeAt(0) === charCode) {
        context.report({
          ruleId: badChars.get(charCode) as string,
          message: "Bad character - PARTIAL LINE BACKWARD.",
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

export default badCharacterPartialLineBackward;
