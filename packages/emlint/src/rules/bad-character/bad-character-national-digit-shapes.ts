import { Linter, RuleObjType } from "../../linter";
import { badChars } from "../../util/bad-character-all";

// rule: bad-character-national-digit-shapes
// -----------------------------------------------------------------------------

// Catches raw character "NATIONAL DIGIT SHAPES":
// https://www.fileformat.info/info/unicode/char/206e/index.htm

function badCharacterNationalDigitShapes(context: Linter): RuleObjType {
  const charCode = 8302;
  return {
    character({ chr, i }) {
      if (chr.charCodeAt(0) === charCode) {
        context.report({
          ruleId: badChars.get(charCode) as string,
          message: "Bad character - NATIONAL DIGIT SHAPES.",
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

export default badCharacterNationalDigitShapes;
