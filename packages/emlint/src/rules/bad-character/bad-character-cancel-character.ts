import { Linter, RuleObjType } from "../../linter";
import { badChars } from "../../util/bad-character-all";

// rule: bad-character-cancel-character
// -----------------------------------------------------------------------------

// Catches raw character "CANCEL CHARACTER":
// https://www.fileformat.info/info/unicode/char/0094/index.htm

function badCharacterCancelCharacter(context: Linter): RuleObjType {
  const charCode = 148;
  return {
    character({ chr, i }) {
      if (chr.charCodeAt(0) === charCode) {
        context.report({
          ruleId: badChars.get(charCode) as string,
          message: "Bad character - CANCEL CHARACTER.",
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

export default badCharacterCancelCharacter;
