import tap from "tap";
import { extractVars as e } from "../dist/string-extract-sass-vars.esm.js";

// -----------------------------------------------------------------------------

tap.test("01 - opts.cb - custom override of a value", (t) => {
  t.strictSame(
    e(`$grey: #ccc;`, {
      cb: (val) => {
        if (val === "#ccc") {
          return `#cccccc`;
        }
        return val;
      },
    }),
    {
      grey: "#cccccc",
    },
    "01"
  );
  t.end();
});
