// rule: bad-character-narrow-no-break-space
// -----------------------------------------------------------------------------

// Catches raw character "NARROW NO-BREAK SPACE":
// https://www.fileformat.info/info/unicode/char/202f/index.htm

function badCharacterNarrowNoBreakSpace(context) {
  return {
    character: function ({ chr, i }) {
      if (chr.charCodeAt(0) === 8239) {
        context.report({
          ruleId: "bad-character-narrow-no-break-space",
          message: "Bad character - NARROW NO-BREAK SPACE.",
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

export default badCharacterNarrowNoBreakSpace;
