import tap from "tap";
import { Linter } from "../../../dist/emlint.esm.js";
import { applyFixes } from "../../../t-util/util.js";

// 01. validation
// -----------------------------------------------------------------------------

tap.test(
  `01 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no onmouseup, error level 0`,
  (t) => {
    const str = `<input class="z">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-onmouseup": 0,
      },
    });
    t.equal(applyFixes(str, messages), str, "01.01");
    t.strictSame(messages, [], "01.02");
    t.end();
  }
);

tap.test(
  `02 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no onmouseup, error level 1`,
  (t) => {
    const str = `<input class="z">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-onmouseup": 1,
      },
    });
    t.equal(applyFixes(str, messages), str, "02.01");
    t.strictSame(messages, [], "02.02");
    t.end();
  }
);

tap.test(
  `03 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no onmouseup, error level 2`,
  (t) => {
    const str = `<input class="z">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-onmouseup": 2,
      },
    });
    t.equal(applyFixes(str, messages), str, "03.01");
    t.strictSame(messages, [], "03.02");
    t.end();
  }
);

tap.test(
  `04 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - healthy attribute`,
  (t) => {
    const str = `<input onmouseup='js'>`; // <-- notice single quotes
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-onmouseup": 2,
      },
    });
    t.equal(applyFixes(str, messages), str, "04.01");
    t.strictSame(messages, [], "04.02");
    t.end();
  }
);

// 02. wrong parent tag
// -----------------------------------------------------------------------------

tap.test(
  `05 - ${`\u001b[${35}m${`parent`}\u001b[${39}m`} - recognised tag`,
  (t) => {
    const str = `<html onmouseup="something">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-onmouseup": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str, "05.01");
    t.match(
      messages,
      [
        {
          ruleId: "attribute-validate-onmouseup",
          idxFrom: 6,
          idxTo: 27,
          fix: null,
        },
      ],
      "05.02"
    );
    t.end();
  }
);

tap.test(
  `06 - ${`\u001b[${35}m${`parent`}\u001b[${39}m`} - unrecognised tag`,
  (t) => {
    const str = `<zzz onmouseup="something" yyy>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-onmouseup": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str, "06.01");
    t.match(messages, [], "06.02");
    t.end();
  }
);

// 03. whitespace
// -----------------------------------------------------------------------------

tap.test(
  `07 - ${`\u001b[${35}m${`parent`}\u001b[${39}m`} - empty value`,
  (t) => {
    const str = `<input onmouseup="">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-onmouseup": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str, "07.01");
    t.match(
      messages,
      [
        {
          ruleId: "attribute-validate-onmouseup",
          idxFrom: 7,
          idxTo: 19,
          message: `Missing value.`,
          fix: null,
        },
      ],
      "07.02"
    );
    t.end();
  }
);

tap.test(
  `08 - ${`\u001b[${35}m${`parent`}\u001b[${39}m`} - surrounding whitespace`,
  (t) => {
    const str = `<input onmouseup=" something ">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-onmouseup": 2,
      },
    });
    t.equal(
      applyFixes(str, messages),
      `<input onmouseup="something">`,
      "08.01"
    );
    t.match(
      messages,
      [
        {
          ruleId: "attribute-validate-onmouseup",
          idxFrom: 18,
          idxTo: 29,
          message: `Remove whitespace.`,
          fix: {
            ranges: [
              [18, 19],
              [28, 29],
            ],
          },
        },
      ],
      "08.02"
    );
    t.end();
  }
);
