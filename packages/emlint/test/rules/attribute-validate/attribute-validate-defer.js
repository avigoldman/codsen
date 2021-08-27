import tap from "tap";
import { Linter } from "../../../dist/emlint.esm.js";
import { applyFixes } from "../../../t-util/util.js";

// 01. validation
// -----------------------------------------------------------------------------

tap.test(
  `01 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no defer, error level 0`,
  (t) => {
    const str = `<script><div>`; // <---- deliberately a tag names of both kinds, suitable and unsuitable
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-defer": 0,
      },
    });
    t.equal(applyFixes(str, messages), str, "01.01");
    t.strictSame(messages, [], "01.02");
    t.end();
  }
);

tap.test(
  `02 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no defer, error level 1`,
  (t) => {
    const str = `<script><div>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-defer": 1,
      },
    });
    t.equal(applyFixes(str, messages), str, "02.01");
    t.strictSame(messages, [], "02.02");
    t.end();
  }
);

tap.test(
  `03 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - no defer, error level 2`,
  (t) => {
    const str = `<script><div>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-defer": 2,
      },
    });
    t.equal(applyFixes(str, messages), str, "03.01");
    t.strictSame(messages, [], "03.02");
    t.end();
  }
);

tap.test(
  `04 - ${`\u001b[${34}m${`validation`}\u001b[${39}m`} - healthy script`,
  (t) => {
    const str = `<script defer>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-defer": 2,
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
    const str = `<div defer>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-defer": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str, "05.01");
    t.match(
      messages,
      [
        {
          ruleId: "attribute-validate-defer",
          idxFrom: 5,
          idxTo: 10,
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
    const str = `<zzz defer class="yyy">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-defer": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), str, "06.01");
    t.match(
      messages,
      [
        {
          ruleId: "attribute-validate-defer",
          idxFrom: 5,
          idxTo: 10,
          fix: null,
        },
      ],
      "06.02"
    );
    t.end();
  }
);

// 03. wrong value
// -----------------------------------------------------------------------------

tap.test(
  `07 - ${`\u001b[${35}m${`parent`}\u001b[${39}m`} - boolean value`,
  (t) => {
    const str = `<script defer="true">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-defer": 2,
      },
    });
    // can fix:
    t.equal(applyFixes(str, messages), `<script defer>`, "07.01");
    t.match(
      messages,
      [
        {
          ruleId: "attribute-validate-defer",
          idxFrom: 13,
          idxTo: 20,
          message: `Should have no value.`,
          fix: {
            ranges: [[13, 20]],
          },
        },
      ],
      "07.02"
    );
    t.end();
  }
);

tap.test(
  `08 - ${`\u001b[${35}m${`parent`}\u001b[${39}m`} - boolean value`,
  (t) => {
    const str = `<script defer=true>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-defer": 2,
      },
    });
    // can fix:
    t.equal(applyFixes(str, messages), `<script defer>`, "08.01");
    t.match(
      messages,
      [
        {
          ruleId: "attribute-validate-defer",
          idxFrom: 13,
          idxTo: 18,
          message: `Should have no value.`,
          fix: {
            ranges: [[13, 18]],
          },
        },
      ],
      "08.02"
    );
    t.end();
  }
);

tap.test(
  `09 - ${`\u001b[${35}m${`parent`}\u001b[${39}m`} - empty value`,
  (t) => {
    const str = `<script defer="">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-defer": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), `<script defer>`, "09.01");
    t.match(
      messages,
      [
        {
          ruleId: "attribute-validate-defer",
          idxFrom: 13,
          idxTo: 16,
          message: `Should have no value.`,
          fix: {
            ranges: [[13, 16]],
          },
        },
      ],
      "09.02"
    );
    t.end();
  }
);

tap.test(
  `10 - ${`\u001b[${35}m${`parent`}\u001b[${39}m`} - value missing, equal present`,
  (t) => {
    const str = `<script defer=>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-defer": 2,
      },
    });
    // can't fix:
    t.equal(applyFixes(str, messages), `<script defer>`, "10.01");
    t.match(
      messages,
      [
        {
          ruleId: "attribute-validate-defer",
          idxFrom: 13,
          idxTo: 14,
          message: `Should have no value.`,
          fix: {
            ranges: [[13, 14]],
          },
        },
      ],
      "10.02"
    );
    t.end();
  }
);

// 04. XHTML
// -----------------------------------------------------------------------------

tap.test(
  `11 - ${`\u001b[${34}m${`XHTML`}\u001b[${39}m`} - healthy defer checkbox, as HTML`,
  (t) => {
    const str = `<script defer>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-defer": [2, "xhtml"],
      },
    });
    // can fix:
    t.equal(applyFixes(str, messages), `<script defer="defer">`, "11.01");
    t.match(
      messages,
      [
        {
          ruleId: "attribute-validate-defer",
          idxFrom: 8,
          idxTo: 13,
          message: `It's XHTML, add value, ="defer".`,
          fix: {
            ranges: [[13, 13, `="defer"`]],
          },
        },
      ],
      "11.02"
    );
    t.end();
  }
);

tap.test(
  `12 - ${`\u001b[${34}m${`XHTML`}\u001b[${39}m`} - missing after equal, as HTML`,
  (t) => {
    const str = `<script defer=/>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-defer": [2, "xhtml"],
      },
    });
    t.equal(applyFixes(str, messages), `<script defer="defer"/>`, "12");
    t.end();
  }
);

tap.test(
  `13 - ${`\u001b[${34}m${`XHTML`}\u001b[${39}m`} - closing quote and content missing, as HTML`,
  (t) => {
    const str = `<script defer =">`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-defer": [2, "xhtml"],
      },
    });
    t.match(messages[0].fix.ranges, [[13, 16, `="defer"`]], "13.01");
    t.equal(applyFixes(str, messages), `<script defer="defer">`, "13.02");
    t.end();
  }
);

tap.test(
  `14 - ${`\u001b[${34}m${`XHTML`}\u001b[${39}m`} - double quotes, no content, as HTML`,
  (t) => {
    const str = `<script defer=""/>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-defer": [2, "xhtml"],
      },
    });
    t.equal(applyFixes(str, messages), `<script defer="defer"/>`, "14");
    t.end();
  }
);

tap.test(
  `15 - ${`\u001b[${34}m${`XHTML`}\u001b[${39}m`} - single quotes, no content, as HTML`,
  (t) => {
    const str = `<script defer=''/>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-defer": [2, "xhtml"],
      },
    });
    t.equal(applyFixes(str, messages), `<script defer='defer'/>`, "15");
    t.end();
  }
);

tap.test(
  `16 - ${`\u001b[${34}m${`XHTML`}\u001b[${39}m`} - quotes with content missing, as HTML`,
  (t) => {
    const str = `<script defer='>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-defer": [2, "xhtml"],
      },
    });
    t.equal(applyFixes(str, messages), `<script defer='defer'>`, "16");
    t.end();
  }
);

tap.test(
  `17 - ${`\u001b[${34}m${`XHTML`}\u001b[${39}m`} - equal missing, otherwise healthy HTML`,
  (t) => {
    const str = `<script defer"defer"/>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-defer": [2, "xhtml"],
      },
    });
    t.equal(applyFixes(str, messages), `<script defer="defer"/>`, "17");
    t.end();
  }
);

tap.test(
  `18 - ${`\u001b[${34}m${`XHTML`}\u001b[${39}m`} - equal missing, otherwise healthy HTML`,
  (t) => {
    const str = `<script defer'defer'/>`;
    const linter = new Linter();
    const messages = linter.verify(str, {
      rules: {
        "attribute-validate-defer": [2, "xhtml"],
      },
    });
    t.equal(applyFixes(str, messages), `<script defer='defer'/>`, "18");
    t.end();
  }
);
