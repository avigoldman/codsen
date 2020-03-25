// rule: bad-character-device-control-four
// https://www.fileformat.info/info/unicode/char/0014/index.htm
// -----------------------------------------------------------------------------

const t = require("tap");
const { Linter } = require("../../../dist/emlint.cjs");

const { applyFixes } = require("../../../t-util/util");

// -----------------------------------------------------------------------------

// 1. basic tests
t.test(`01.01 - detects two DEVICE CONTROL FOUR characters`, (t) => {
  const str = "\u0014dlkgjld\u0014j";
  const linter = new Linter();
  const messages = linter.verify(str, {
    rules: {
      "bad-character-device-control-four": 2,
    },
  });
  t.match(messages, [
    {
      ruleId: "bad-character-device-control-four",
      severity: 2,
      idxFrom: 0,
      idxTo: 1,
      line: 1,
      column: 1, // remember columns numbers start from 1, not zero
      message: "Bad character - DEVICE CONTROL FOUR.",
      fix: {
        ranges: [[0, 1]],
      },
    },
    {
      ruleId: "bad-character-device-control-four",
      severity: 2,
      idxFrom: 8,
      idxTo: 9,
      line: 1,
      column: 9, // remember columns numbers start from 1, not zero
      message: "Bad character - DEVICE CONTROL FOUR.",
      fix: {
        ranges: [[8, 9]],
      },
    },
  ]);
  t.equal(applyFixes(str, messages), "dlkgjldj");
  t.end();
});
