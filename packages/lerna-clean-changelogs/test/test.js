import { readFileSync } from "fs";
import path from "path";
import tap from "tap";
import { cleanChangelogs as c } from "../dist/lerna-clean-changelogs.esm.js";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { version } = require("../package.json");

const fixtures = path.resolve("test/fixtures");

function compare(t, name) {
  const changelog = readFileSync(path.join(fixtures, `${name}.md`), "utf8");
  const expected = readFileSync(
    path.join(fixtures, `${name}.expected.md`),
    "utf8"
  );
  return t.equal(c(changelog).res, expected);
}

// 00. insurance
// -----------------------------------------------------------------------------

tap.test(
  `01 - ${`\u001b[${33}m${`basics`}\u001b[${39}m`} - missing 1st arg`,
  (t) => {
    t.throws(() => {
      c();
    }, /THROW_ID_01/g);

    t.throws(() => {
      c(undefined);
    }, /THROW_ID_01/g);
    t.end();
  }
);

tap.test(
  `02 - ${`\u001b[${33}m${`basics`}\u001b[${39}m`} - 1st arg of a wrong type`,
  (t) => {
    t.throws(() => {
      c(1);
    }, /THROW_ID_02/g);

    t.throws(() => {
      c(true);
    }, /THROW_ID_02/g);

    t.throws(() => {
      c([]);
    }, /THROW_ID_02/g);

    t.throws(() => {
      c(null);
    }, /THROW_ID_02/g);

    t.throws(() => {
      c({});
    }, /THROW_ID_02/g);

    t.end();
  }
);

tap.test(
  `03 - ${`\u001b[${33}m${`basics`}\u001b[${39}m`} - 1st arg is empty string`,
  (t) => {
    t.strictSame(
      c(""),
      {
        res: "",
        version,
      },
      "03"
    );

    t.end();
  }
);

// 01. cleaning
// -----------------------------------------------------------------------------

tap.test(
  `04 - ${`\u001b[${35}m${`cleaning`}\u001b[${39}m`} - deletes bump-only entries together with their headings`,
  (t) => {
    compare(t, "01_deletes_bump-only");
    t.end();
  }
);

tap.test(
  `05 - ${`\u001b[${35}m${`cleaning`}\u001b[${39}m`} - turns h1 headings within body into h2`,
  (t) => {
    compare(t, "02_remove_h1_tags_in_body");
    t.end();
  }
);

tap.test(
  `06 - ${`\u001b[${35}m${`cleaning`}\u001b[${39}m`} - cleans whitespace and replaces bullet dashes with asterisks`,
  (t) => {
    compare(t, "03_whitespace");
    t.end();
  }
);

tap.test(
  `07 - ${`\u001b[${35}m${`cleaning`}\u001b[${39}m`} - removes WIP entries`,
  (t) => {
    compare(t, "04_wip");
    t.end();
  }
);

tap.test(
  `08 - ${`\u001b[${35}m${`cleaning`}\u001b[${39}m`} - fixes plural in sourcehut links`,
  (t) => {
    compare(t, "05_sourcehut");
    t.end();
  }
);
