import { Linter, RuleObjType } from "../../linter";
import { badChars } from "../../util/bad-character-all";

// rule: bad-character-right-to-left-isolate
// -----------------------------------------------------------------------------

// Catches raw character "RIGHT-TO-LEFT ISOLATE":
// https://www.fileformat.info/info/unicode/char/2067/index.htm

function badCharacterRightToLeftIsolate(context: Linter): RuleObjType {
  const charCode = 8295;
  return {
    character({ chr, i }) {
      if (chr.charCodeAt(0) === charCode) {
        context.report({
          ruleId: badChars.get(charCode) as string,
          message: "Bad character - RIGHT-TO-LEFT ISOLATE.",
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

export default badCharacterRightToLeftIsolate;
