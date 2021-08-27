import tap from "tap";
import {
  isHighSurrogate,
  isLowSurrogate,
} from "../dist/string-character-is-astral-surrogate.esm.js";

// -----------------------------------------------------------------------------
// group 01. various throws
// -----------------------------------------------------------------------------

tap.test("01 - wrong/missing input = throw", (t) => {
  t.throws(() => {
    isHighSurrogate(1);
  }, "01.01");
  t.throws(() => {
    isHighSurrogate(null);
  }, "01.02");
  t.throws(() => {
    isHighSurrogate(true);
  }, "01.03");

  t.throws(() => {
    isLowSurrogate(1);
  }, "01.04");
  t.throws(() => {
    isLowSurrogate(null);
  }, "01.05");
  t.throws(() => {
    isLowSurrogate(true);
  }, "01.06");
  t.end();
});

// -----------------------------------------------------------------------------
// 02. normal use
// -----------------------------------------------------------------------------

// undefined must yield false - that's to make the life easier when
// checking the "next character". If it doesn't exist, it will be
// "false" and as far as the issue of surrogates is concerned, it's
// "false". This will save us from otherwise unnecessary if-else
// statements during traversal.
tap.test("02 - undefined yields false", (t) => {
  // no arguments
  t.strictSame(isHighSurrogate(), false, "02.01");
  t.strictSame(isLowSurrogate(), false, "02.02");
  // undefined as primitive value
  t.strictSame(isHighSurrogate(undefined), false, "02.03");
  t.strictSame(isLowSurrogate(undefined), false, "02.04");
  t.end();
});

tap.test("03 - empty string yields false", (t) => {
  t.strictSame(isHighSurrogate(""), false, "03.01");
  t.strictSame(isLowSurrogate(""), false, "03.02");
  t.end();
});

tap.test("04 - isHighSurrogate()", (t) => {
  t.strictSame(isHighSurrogate("zzz"), false, "04.01");
  // 🧢 = \uD83E\uDDE2
  t.strictSame(isHighSurrogate("\uD83E"), true, "04.02");
  t.strictSame(isHighSurrogate("\uDDE2"), false, "04.03");
  t.strictSame(
    isHighSurrogate("\uD83E\uDDE2"),
    true,
    "04.04" // second Unicode code point (and onwards) doesn't matter
  );
  t.end();
});

tap.test("05 - isLowSurrogate()", (t) => {
  t.strictSame(isLowSurrogate("zzz"), false, "05.01");
  // 🧢 = \uD83E\uDDE2
  t.strictSame(isLowSurrogate("\uD83E"), false, "05.02");
  t.strictSame(isLowSurrogate("\uDDE2"), true, "05.03");
  t.strictSame(
    isLowSurrogate("\uD83E\uDDE2"),
    false,
    "05.04" // second Unicode code point (and onwards) doesn't matter
  );
  t.end();
});
