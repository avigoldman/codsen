// rule: bad-character-information-separator-one
// https://www.fileformat.info/info/unicode/char/001f/index.htm
// -----------------------------------------------------------------------------

import tap from "tap";
import { Linter } from "../../../dist/emlint.esm.js";

import { applyFixes } from "../../../t-util/util.js";

// -----------------------------------------------------------------------------

// 1. basic tests
tap.test(`01 - detects two INFORMATION SEPARATOR ONE characters`, (t) => {
  const str = "\u001Fdlkgjld\u001Fj";
  const linter = new Linter();
  const messages = linter.verify(str, {
    rules: {
      "bad-character-information-separator-one": 2,
    },
  });
  t.match(
    messages,
    [
      {
        ruleId: "bad-character-information-separator-one",
        severity: 2,
        idxFrom: 0,
        idxTo: 1,
        line: 1,
        column: 1, // remember columns numbers start from 1, not zero
        message: "Bad character - INFORMATION SEPARATOR ONE.",
        fix: {
          ranges: [[0, 1]],
        },
      },
      {
        ruleId: "bad-character-information-separator-one",
        severity: 2,
        idxFrom: 8,
        idxTo: 9,
        line: 1,
        column: 9, // remember columns numbers start from 1, not zero
        message: "Bad character - INFORMATION SEPARATOR ONE.",
        fix: {
          ranges: [[8, 9]],
        },
      },
    ],
    "01.01"
  );
  t.equal(applyFixes(str, messages), "dlkgjldj", "01.02");
  t.end();
});
