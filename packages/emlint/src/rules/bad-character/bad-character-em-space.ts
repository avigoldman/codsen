import { Linter, RuleObjType } from "../../linter";
import { badChars } from "../../util/bad-character-all";

// rule: bad-character-em-space
// -----------------------------------------------------------------------------

// Catches raw character "EM SPACE":
// https://www.fileformat.info/info/unicode/char/2003/index.htm

function badCharacterEmSpace(context: Linter): RuleObjType {
  const charCode = 8195;
  return {
    character({ chr, i }) {
      if (chr.charCodeAt(0) === charCode) {
        context.report({
          ruleId: badChars.get(charCode) as string,
          message: "Bad character - EM SPACE.",
          idxFrom: i,
          idxTo: i + 1,
          fix: {
            ranges: [[i, i + 1, " "]], // replace with a normal space
          },
        });
      }
    },
  };
}

export default badCharacterEmSpace;
