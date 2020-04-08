const t = require("tap");
const is = require("../dist/is-html-attribute-closing.cjs");
// const BACKSLASH = "\u005C";

// 00. Weird cases
// -----------------------------------------------------------------------------

t.test(
  `00.01 - ${`\u001b[${34}m${`weird cases`}\u001b[${39}m`} - no input`,
  (t) => {
    t.false(is(), "00.01");
    t.end();
  }
);

t.test(
  `00.02 - ${`\u001b[${34}m${`weird cases`}\u001b[${39}m`} - input is not a string`,
  (t) => {
    t.false(is(2), "00.02");
    t.end();
  }
);

t.test(
  `00.03 - ${`\u001b[${34}m${`weird cases`}\u001b[${39}m`} - input is empty string`,
  (t) => {
    t.false(is(""), "00.03");
    t.end();
  }
);

t.test(
  `00.04 - ${`\u001b[${34}m${`weird cases`}\u001b[${39}m`} - 2nd arg is missing`,
  (t) => {
    t.false(is("a"), "00.04");
    t.end();
  }
);

t.test(
  `00.05 - ${`\u001b[${34}m${`weird cases`}\u001b[${39}m`} - 2nd arg is not integer`,
  (t) => {
    t.false(is("a", "a"), "00.05");
    t.end();
  }
);

t.test(
  `00.06 - ${`\u001b[${34}m${`weird cases`}\u001b[${39}m`} - 3rd arg is missing`,
  (t) => {
    t.false(is("a", 0), "00.06");
    t.end();
  }
);

t.test(
  `00.07 - ${`\u001b[${34}m${`weird cases`}\u001b[${39}m`} - 3rd arg is not integer`,
  (t) => {
    t.false(is("a", 0, "a"), "00.07");
    t.end();
  }
);

t.test(
  `00.08 - ${`\u001b[${34}m${`weird cases`}\u001b[${39}m`} - no character in string at what's given by 2nd arg`,
  (t) => {
    t.false(is("a", 99, 100), "00.08");
    t.end();
  }
);

t.test(
  `00.09 - ${`\u001b[${34}m${`weird cases`}\u001b[${39}m`} - no character in string at what's given by 3rd arg`,
  (t) => {
    t.false(is("a", 0, 100), "00.09");
    t.end();
  }
);

t.test(
  `00.10 - ${`\u001b[${34}m${`weird cases`}\u001b[${39}m`} - indexes equal`,
  (t) => {
    t.false(is("abcde", 2, 2), "00.10");
    t.end();
  }
);

t.test(
  `00.11 - ${`\u001b[${34}m${`weird cases`}\u001b[${39}m`} - 3rd > 2nd`,
  (t) => {
    t.false(is("abcde", 2, 1), "00.11");
    t.end();
  }
);

// 01. healthy code
// -----------------------------------------------------------------------------

t.test(
  `01.01 - ${`\u001b[${33}m${`healthy code`}\u001b[${39}m`} - one tag, one attr, double quotes`,
  (t) => {
    const str = `<a href="zzz">`;
    t.true(is(str, 8, 12), "01.01");
    t.end();
  }
);

t.test(
  `01.02 - ${`\u001b[${33}m${`healthy code`}\u001b[${39}m`} - one tag, one attr, single quotes`,
  (t) => {
    const str = `<a href='zzz'>`;
    t.true(is(str, 8, 12), "01.02");
    t.end();
  }
);

t.test(
  `01.03 - ${`\u001b[${33}m${`healthy code`}\u001b[${39}m`} - one tag, few attrs, double quotes`,
  (t) => {
    const str = `<a href="zzz" target="_blank" style="color: black;">`;
    // 1. starting at the opening of "href":
    t.false(is(str, 8, 8), "01.03.01");
    t.true(is(str, 8, 12), "01.03.02"); // <--
    t.false(is(str, 8, 21), "01.03.03");
    t.false(is(str, 8, 28), "01.03.04");
    t.false(is(str, 8, 36), "01.03.05");
    t.false(is(str, 8, 50), "01.03.06");

    // 2. starting at the opening of "target":
    t.false(is(str, 21, 8), "01.03.07");
    t.false(is(str, 21, 12), "01.03.08");
    t.false(is(str, 21, 21), "01.03.09");
    t.true(is(str, 21, 28), "01.03.10"); // <--
    t.false(is(str, 21, 36), "01.03.11");
    t.false(is(str, 21, 50), "01.03.12");

    // 3. starting at the opening of "style":
    t.false(is(str, 36, 8), "01.03.13");
    t.false(is(str, 36, 12), "01.03.14");
    t.false(is(str, 36, 21), "01.03.15");
    t.false(is(str, 36, 28), "01.03.16");
    t.false(is(str, 36, 36), "01.03.17");
    t.true(is(str, 36, 50), "01.03.18"); // <--

    // fin.
    t.end();
  }
);

t.test(
  `01.04 - ${`\u001b[${33}m${`healthy code`}\u001b[${39}m`} - one tag, few attrs, single quotes`,
  (t) => {
    const str = `<a href='zzz' target='_blank' style='color: black;'>`;
    // 1. starting at the opening of "href":
    t.false(is(str, 8, 8), "01.04.01");
    t.true(is(str, 8, 12), "01.04.02"); // <--
    t.false(is(str, 8, 21), "01.04.03");
    t.false(is(str, 8, 28), "01.04.04");
    t.false(is(str, 8, 36), "01.04.05");
    t.false(is(str, 8, 50), "01.04.06");

    // 2. starting at the opening of "target":
    t.false(is(str, 21, 8), "01.04.07");
    t.false(is(str, 21, 12), "01.04.08");
    t.false(is(str, 21, 21), "01.04.09");
    t.true(is(str, 21, 28), "01.04.10"); // <--
    t.false(is(str, 21, 36), "01.04.11");
    t.false(is(str, 21, 50), "01.04.12");

    // 3. starting at the opening of "style":
    t.false(is(str, 36, 8), "01.04.13");
    t.false(is(str, 36, 12), "01.04.14");
    t.false(is(str, 36, 21), "01.04.15");
    t.false(is(str, 36, 28), "01.04.16");
    t.false(is(str, 36, 36), "01.04.17");
    t.true(is(str, 36, 50), "01.04.18"); // <--

    // fin.
    t.end();
  }
);

t.test(
  `01.05 - ${`\u001b[${33}m${`healthy code`}\u001b[${39}m`} - repeated singles inside doubles`,
  (t) => {
    const str = `<img src="spacer.gif" alt="'''''" width="1" height="1" border="0" style="display:block;"/>`;
    // 0. warmup
    t.true(is(str, 9, 20), "01.05.00");

    // 1. the bizness
    t.false(is(str, 26, 9), "01.05.01");
    t.false(is(str, 26, 20), "01.05.02");
    t.false(is(str, 26, 26), "01.05.03");
    t.false(is(str, 26, 27), "01.05.04");
    t.false(is(str, 26, 28), "01.05.05");
    t.false(is(str, 26, 29), "01.05.06");
    t.false(is(str, 26, 30), "01.05.07");
    t.false(is(str, 26, 31), "01.05.08");
    t.true(is(str, 26, 32), "01.05.09"); // <--
    t.false(is(str, 26, 40), "01.05.10");

    // fin.
    t.end();
  }
);

// 02. mismatching quotes, rest healthy
// -----------------------------------------------------------------------------

//
//
//
//
//
//   LEGEND: S means single, D means double
//
//   For example \u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m means single - double (meaning in that order)
//
//
//
//

t.test(
  `02.01 - ${`\u001b[${35}m${`mismatching quotes`}\u001b[${39}m`} - basic, \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m`,
  (t) => {
    const str = `<img alt="so-called "artists"!' class='yo'/>`;

    // alt opening at 9
    t.false(is(str, 9, 28), "02.17.03");

    // fin.
    t.end();
  }
);

t.test(
  `02.02 - ${`\u001b[${35}m${`mismatching quotes`}\u001b[${39}m`} - basic, \u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m`,
  (t) => {
    const str = `<img src="xyz" alt="="/>`;
    t.true(is(str, 19, 21), "03.01.08"); // <--

    // fin.
    t.end();
  }
);

t.test(
  `02.03 - ${`\u001b[${35}m${`mismatching quotes`}\u001b[${39}m`} - two attr pairs, \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m`,
  (t) => {
    const str = `<div class="c' id="x'>.</div>`;

    // class opening at 11
    t.false(is(str, 11, 11), "02.03.01");
    t.true(is(str, 11, 13), "02.03.02"); // <--
    t.false(is(str, 11, 18), "02.03.03");
    t.false(is(str, 11, 20), "02.03.04");

    // id opening at 18
    t.false(is(str, 18, 11), "02.03.05");
    t.false(is(str, 18, 13), "02.03.06");
    t.false(is(str, 18, 18), "02.03.07");
    t.true(is(str, 18, 20), "02.03.08"); // <--

    // fin.
    t.end();
  }
);

t.test(
  `02.04 - ${`\u001b[${35}m${`mismatching quotes`}\u001b[${39}m`} - two attr pairs, \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m`,
  (t) => {
    const str = `<div class='c" id='x">.</div>`;

    // class opening at 11
    t.false(is(str, 11, 11), "02.04.01");
    t.true(is(str, 11, 13), "02.04.02"); // <--
    t.false(is(str, 11, 18), "02.04.03");
    t.false(is(str, 11, 20), "02.04.04");

    // id opening at 18
    t.false(is(str, 18, 11), "02.04.05");
    t.false(is(str, 18, 13), "02.04.06");
    t.false(is(str, 18, 18), "02.04.07");
    t.true(is(str, 18, 20), "02.04.08"); // <--

    // fin.
    t.end();
  }
);

t.test(
  `02.05 - ${`\u001b[${35}m${`mismatching quotes`}\u001b[${39}m`} - three attr pairs, \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m \u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m`,
  (t) => {
    const str = `<div class="c' id="x' style='c">.</div>`;

    // class opening at 11
    t.false(is(str, 11, 11), "02.05.01");
    t.true(is(str, 11, 13), "02.05.02"); // <--
    t.false(is(str, 11, 18), "02.05.03");
    t.false(is(str, 11, 20), "02.05.04");
    t.false(is(str, 11, 28), "02.05.05");
    t.false(is(str, 11, 30), "02.05.06");

    // class opening at 18
    t.false(is(str, 18, 11), "02.05.07");
    t.false(is(str, 18, 13), "02.05.08");
    t.false(is(str, 18, 18), "02.05.09");
    t.true(is(str, 18, 20), "02.05.10"); // <--
    t.false(is(str, 18, 28), "02.05.11");
    t.false(is(str, 18, 30), "02.05.12");

    // style opening at 28
    t.false(is(str, 28, 11), "02.05.07");
    t.false(is(str, 28, 13), "02.05.08");
    t.false(is(str, 28, 18), "02.05.09");
    t.false(is(str, 28, 20), "02.05.10");
    t.false(is(str, 28, 28), "02.05.11");
    t.true(is(str, 28, 30), "02.05.12"); // <--

    // fin.
    t.end();
  }
);

t.test(
  `02.06 - ${`\u001b[${35}m${`mismatching quotes`}\u001b[${39}m`} - three attr pairs, \u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m \u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m`,
  (t) => {
    const str = `<div class='c" id='x" style="c'>.</div>`;

    // class opening at 11
    t.false(is(str, 11, 11), "02.06.01");
    t.true(is(str, 11, 13), "02.06.02"); // <--
    t.false(is(str, 11, 18), "02.06.03");
    t.false(is(str, 11, 20), "02.06.04");
    t.false(is(str, 11, 28), "02.06.05");
    t.false(is(str, 11, 30), "02.06.06");

    // class opening at 18
    t.false(is(str, 18, 11), "02.06.07");
    t.false(is(str, 18, 13), "02.06.08");
    t.false(is(str, 18, 18), "02.06.09");
    t.true(is(str, 18, 20), "02.06.10"); // <--
    t.false(is(str, 18, 28), "02.06.11");
    t.false(is(str, 18, 30), "02.06.12");

    // style opening at 28
    t.false(is(str, 28, 11), "02.06.07");
    t.false(is(str, 28, 13), "02.06.08");
    t.false(is(str, 28, 18), "02.06.09");
    t.false(is(str, 28, 20), "02.06.10");
    t.false(is(str, 28, 28), "02.06.11");
    t.true(is(str, 28, 30), "02.06.12"); // <--

    // fin.
    t.end();
  }
);

t.test(
  `02.07 - ${`\u001b[${35}m${`mismatching quotes`}\u001b[${39}m`} - healthy singles inside doubles, \u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m`,
  (t) => {
    const str = `<img alt='so-called "artists"!'/>`;

    // alt opening at 9
    t.false(is(str, 9, 9), "02.07.01");
    t.false(is(str, 9, 20), "02.07.02");
    t.false(is(str, 9, 28), "02.07.03");
    t.true(is(str, 9, 30), "02.07.04"); // <--

    // fin.
    t.end();
  }
);

t.test(
  `02.08 - ${`\u001b[${35}m${`mismatching quotes`}\u001b[${39}m`} - healthy singles inside doubles, \u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m`,
  (t) => {
    const str = `<img alt="so-called 'artists'!"/>`;

    // alt opening at 9
    t.false(is(str, 9, 9), "02.08.01");
    t.false(is(str, 9, 20), "02.08.02");
    t.false(is(str, 9, 28), "02.08.03");
    t.true(is(str, 9, 30), "02.08.04"); // <--

    // fin.
    t.end();
  }
);

// S - D - D - S

t.test(
  `02.09 - ${`\u001b[${35}m${`mismatching quotes`}\u001b[${39}m`} - healthy \u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m, \u001b[${33}m${`S`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m follows`,
  (t) => {
    const str = `<img alt='so-called "artists"!' class='yo'/>`;

    // alt opening at 9
    t.false(is(str, 9, 9), "02.09.01");
    t.false(is(str, 9, 20), "02.09.02");
    t.false(is(str, 9, 28), "02.09.03");
    t.true(is(str, 9, 30), "02.09.04"); // <--
    t.false(is(str, 9, 38), "02.09.05");
    t.false(is(str, 9, 41), "02.09.06");

    // fin.
    t.end();
  }
);

t.test(
  `02.10 - ${`\u001b[${35}m${`mismatching quotes`}\u001b[${39}m`} - healthy \u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m, \u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m follows`,
  (t) => {
    const str = `<img alt='so-called "artists"!' class='yo"/>`;

    // alt opening at 9
    t.false(is(str, 9, 9), "02.10.01");
    t.false(is(str, 9, 20), "02.10.02");
    t.false(is(str, 9, 28), "02.10.03");
    t.true(is(str, 9, 30), "02.10.04"); // <--
    t.false(is(str, 9, 38), "02.10.05");
    t.false(is(str, 9, 41), "02.10.06");

    // fin.
    t.end();
  }
);

t.test(
  `02.11 - ${`\u001b[${35}m${`mismatching quotes`}\u001b[${39}m`} - healthy \u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m, \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m follows`,
  (t) => {
    const str = `<img alt='so-called "artists"!' class="yo'/>`;

    // alt opening at 9
    t.false(is(str, 9, 9), "02.11.01");
    t.false(is(str, 9, 20), "02.11.02");
    t.false(is(str, 9, 28), "02.11.03");
    t.true(is(str, 9, 30), "02.11.04"); // <--
    t.false(is(str, 9, 38), "02.11.05");
    t.false(is(str, 9, 41), "02.11.06");

    // fin.
    t.end();
  }
);

t.test(
  `02.12 - ${`\u001b[${35}m${`mismatching quotes`}\u001b[${39}m`} - healthy \u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m, \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m follows`,
  (t) => {
    const str = `<img alt='so-called "artists"!' class="yo"/>`;

    // alt opening at 9
    t.false(is(str, 9, 9), "02.12.01");
    t.false(is(str, 9, 20), "02.12.02");
    t.false(is(str, 9, 28), "02.12.03");
    t.true(is(str, 9, 30), "02.12.04"); // <--
    t.false(is(str, 9, 38), "02.12.05");
    t.false(is(str, 9, 41), "02.12.06");

    // fin.
    t.end();
  }
);

//
//
//
//
//
//
//          M   I   S   M   A   T   C   H   I   N   G
//
//
//
//
//
//

// S - D - D - D

t.test(
  `02.13 - ${`\u001b[${35}m${`mismatching quotes`}\u001b[${39}m`} - healthy \u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m, \u001b[${33}m${`S`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m follows`,
  (t) => {
    const str = `<img alt='so-called "artists"!" class='yo'/>`;

    // alt opening at 9
    t.false(is(str, 9, 9), "02.13.01");
    t.false(is(str, 9, 20), "02.13.02");
    t.false(is(str, 9, 28), "02.13.03");
    t.true(is(str, 9, 30), "02.13.04"); // <--
    t.false(is(str, 9, 38), "02.13.05");
    t.false(is(str, 9, 41), "02.13.06");

    // fin.
    t.end();
  }
);

t.test(
  `02.14 - ${`\u001b[${35}m${`mismatching quotes`}\u001b[${39}m`} - healthy \u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m, \u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m follows`,
  (t) => {
    const str = `<img alt='so-called "artists"!" class='yo"/>`;

    // alt opening at 9
    t.false(is(str, 9, 9), "02.14.01");
    t.false(is(str, 9, 20), "02.14.02");
    t.false(is(str, 9, 28), "02.14.03");
    t.true(is(str, 9, 30), "02.14.04"); // <--
    t.false(is(str, 9, 38), "02.14.05");
    t.false(is(str, 9, 41), "02.14.06");

    // fin.
    t.end();
  }
);

t.test(
  `02.15 - ${`\u001b[${35}m${`mismatching quotes`}\u001b[${39}m`} - healthy \u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m, \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m follows`,
  (t) => {
    const str = `<img alt='so-called "artists"!" class="yo'/>`;

    // alt opening at 9
    t.false(is(str, 9, 9), "02.15.01");
    t.false(is(str, 9, 20), "02.15.02");
    t.false(is(str, 9, 28), "02.15.03");
    t.true(is(str, 9, 30), "02.15.04"); // <--
    t.false(is(str, 9, 38), "02.15.05");
    t.false(is(str, 9, 41), "02.15.06");

    // fin.
    t.end();
  }
);

t.test(
  `02.16 - ${`\u001b[${35}m${`mismatching quotes`}\u001b[${39}m`} - healthy \u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m, \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m follows`,
  (t) => {
    const str = `<img alt='so-called "artists"!" class="yo"/>`;

    // alt opening at 9
    t.false(is(str, 9, 9), "02.16.01");
    t.false(is(str, 9, 20), "02.16.02");
    t.false(is(str, 9, 28), "02.16.03");
    t.true(is(str, 9, 30), "02.16.04"); // <--
    t.false(is(str, 9, 38), "02.16.05");
    t.false(is(str, 9, 41), "02.16.06");

    // fin.
    t.end();
  }
);

// D - D - D - S

t.test(
  `02.17 - ${`\u001b[${35}m${`mismatching quotes`}\u001b[${39}m`} - healthy \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m, \u001b[${33}m${`S`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m follows`,
  (t) => {
    const str = `<img alt="so-called "artists"!' class='yo'/>`;

    // alt opening at 9
    t.false(is(str, 9, 9), "02.17.01");
    t.false(is(str, 9, 20), "02.17.02");
    t.false(is(str, 9, 28), "02.17.03");
    t.true(is(str, 9, 30), "02.17.04"); // <--
    t.false(is(str, 9, 38), "02.17.05");
    t.false(is(str, 9, 41), "02.17.06");

    // fin.
    t.end();
  }
);

t.test(
  `02.18 - ${`\u001b[${35}m${`mismatching quotes`}\u001b[${39}m`} - false positive of 02.18.*`,
  (t) => {
    const str = `<img alt="so-called "artists"class='yo'/>`;

    // alt opening at 9
    t.false(is(str, 9, 9), "02.18.01");
    t.false(is(str, 9, 20), "02.18.02");
    t.true(is(str, 9, 28), "02.18.03"); // <--
    t.false(is(str, 9, 35), "02.18.04");
    t.false(is(str, 9, 38), "02.18.05");

    // fin.
    t.end();
  }
);

t.test(
  `02.19 - ${`\u001b[${35}m${`mismatching quotes`}\u001b[${39}m`} - healthy \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m, \u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m follows`,
  (t) => {
    const str = `<img alt="so-called "artists"!' class='yo"/>`;

    // alt opening at 9
    t.false(is(str, 9, 9), "02.19.01");
    t.false(is(str, 9, 20), "02.19.02");
    t.false(is(str, 9, 28), "02.19.03");
    t.true(is(str, 9, 30), "02.19.04"); // <--
    t.false(is(str, 9, 38), "02.19.05");
    t.false(is(str, 9, 41), "02.19.06");

    // fin.
    t.end();
  }
);

t.test(
  `02.20 - ${`\u001b[${35}m${`mismatching quotes`}\u001b[${39}m`} - healthy \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m, \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m follows`,
  (t) => {
    const str = `<img alt="so-called "artists"!' class="yo'/>`;

    // alt opening at 9
    t.false(is(str, 9, 9), "02.20.01");
    t.false(is(str, 9, 20), "02.20.02");
    t.false(is(str, 9, 28), "02.20.03");
    t.true(is(str, 9, 30), "02.20.04"); // <--
    t.false(is(str, 9, 38), "02.20.05");
    t.false(is(str, 9, 41), "02.20.06");

    // fin.
    t.end();
  }
);

t.test(
  `02.21 - ${`\u001b[${35}m${`mismatching quotes`}\u001b[${39}m`} - healthy \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m, \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m follows`,
  (t) => {
    const str = `<img alt="so-called "artists"!' class="yo"/>`;

    // alt opening at 9
    t.false(is(str, 9, 9), "02.21.01");
    t.false(is(str, 9, 20), "02.21.02");
    t.false(is(str, 9, 28), "02.21.03");
    t.true(is(str, 9, 30), "02.21.04"); // <--
    t.false(is(str, 9, 38), "02.21.05");
    t.false(is(str, 9, 41), "02.21.06");

    // fin.
    t.end();
  }
);

//
//
//
//
//
//
//
//
//                         ONE QUOTE INSIDE
//
//
//
//
//
//
//
//

t.test(
  `02.22 - ${`\u001b[${35}m${`mismatching quotes`}\u001b[${39}m`} - one inside \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m`,
  (t) => {
    const str = `<img alt="Deal is your's!'/>`;

    // alt opening at 9
    t.false(is(str, 9, 9), "02.22.01");
    t.false(is(str, 9, 22), "02.22.02");
    t.true(is(str, 9, 25), "02.22.03"); // <--

    // fin.
    t.end();
  }
);

t.test(
  `02.23 - ${`\u001b[${35}m${`mismatching quotes`}\u001b[${39}m`} - one inside \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m`,
  (t) => {
    const str = `<img alt='Deal is your's!"/>`;

    // alt opening at 9
    t.false(is(str, 9, 9), "02.23.01");
    t.false(is(str, 9, 22), "02.23.02");
    t.true(is(str, 9, 25), "02.23.03"); // <--

    // fin.
    t.end();
  }
);

// 03. cheeky cases
// -----------------------------------------------------------------------------

t.test(
  `03.01 - ${`\u001b[${36}m${`cheeky cases`}\u001b[${39}m`} - the last character in the attr value is "equal", \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m`,
  (t) => {
    const str = `<img src="xyz" alt="="/>`;

    // src opening at 9
    t.false(is(str, 9, 9), "03.01.01");
    t.true(is(str, 9, 13), "03.01.02"); // <--
    t.false(is(str, 9, 19), "03.01.03");
    t.false(is(str, 9, 21), "03.01.04");

    // alt opening at 19
    t.false(is(str, 19, 9), "03.01.05");
    t.false(is(str, 19, 13), "03.01.06");
    t.false(is(str, 19, 19), "03.01.07");
    t.true(is(str, 19, 21), "03.01.08"); // <--

    // fin.
    t.end();
  }
);

t.test(
  `03.02 - ${`\u001b[${36}m${`cheeky cases`}\u001b[${39}m`} - the last character in the attr value is "equal", \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m`,
  (t) => {
    const str = `<img src="xyz" alt='='/>`;

    // src opening at 9
    t.false(is(str, 9, 9), "03.02.01");
    t.true(is(str, 9, 13), "03.02.02"); // <--
    t.false(is(str, 9, 19), "03.02.03");
    t.false(is(str, 9, 21), "03.02.04");

    // alt opening at 19
    t.false(is(str, 19, 9), "03.02.05");
    t.false(is(str, 19, 13), "03.02.06");
    t.false(is(str, 19, 19), "03.02.07");
    t.true(is(str, 19, 21), "03.02.08"); // <--

    // fin.
    t.end();
  }
);

t.test(
  `03.03 - ${`\u001b[${36}m${`cheeky cases`}\u001b[${39}m`} - the last character in the attr value is "equal", \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m`,
  (t) => {
    const str = `<img src="xyz" alt="='/>`;

    // src opening at 9
    t.false(is(str, 9, 9), "03.03.01");
    t.true(is(str, 9, 13), "03.03.02"); // <--
    t.false(is(str, 9, 19), "03.03.03");
    t.false(is(str, 9, 21), "03.03.04");

    // alt opening at 19
    t.false(is(str, 19, 9), "03.03.05");
    t.false(is(str, 19, 13), "03.03.06");
    t.false(is(str, 19, 19), "03.03.07");
    t.true(is(str, 19, 21), "03.03.08"); // <--

    // fin.
    t.end();
  }
);

t.test(
  `03.04 - ${`\u001b[${36}m${`cheeky cases`}\u001b[${39}m`} - the last character in the attr value is "equal", \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m`,
  (t) => {
    const str = `<img src="xyz" alt='="/>`;

    // src opening at 9
    t.false(is(str, 9, 9), "03.04.01");
    t.true(is(str, 9, 13), "03.04.02"); // <--
    t.false(is(str, 9, 19), "03.04.03");
    t.false(is(str, 9, 21), "03.04.04");

    // alt opening at 19
    t.false(is(str, 19, 9), "03.04.05");
    t.false(is(str, 19, 13), "03.04.06");
    t.false(is(str, 19, 19), "03.04.07");
    t.true(is(str, 19, 21), "03.04.08"); // <--

    // fin.
    t.end();
  }
);

//
//                               three attributes
//

t.test(
  `03.05 - ${`\u001b[${36}m${`cheeky cases`}\u001b[${39}m`} - the last character in the attr value is "equal", \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m`,
  (t) => {
    const str = `<img src="xyz" alt="=" class="klm"/>`;

    // src opening at 9
    t.false(is(str, 9, 9), "03.05.01");
    t.true(is(str, 9, 13), "03.05.02"); // <--
    t.false(is(str, 9, 19), "03.05.03");
    t.false(is(str, 9, 21), "03.05.04");
    t.false(is(str, 9, 29), "03.05.05");
    t.false(is(str, 9, 33), "03.05.06");

    // alt opening at 19
    t.false(is(str, 19, 9), "03.05.05");
    t.false(is(str, 19, 13), "03.05.06");
    t.false(is(str, 19, 19), "03.05.07");
    t.true(is(str, 19, 21), "03.05.08"); // <--
    t.false(is(str, 19, 29), "03.05.05");
    t.false(is(str, 19, 33), "03.05.06");

    // class opening at 29
    t.false(is(str, 29, 9), "03.05.07");
    t.false(is(str, 29, 13), "03.05.08");
    t.false(is(str, 29, 19), "03.05.09");
    t.false(is(str, 29, 21), "03.05.10");
    t.false(is(str, 29, 29), "03.05.11");
    t.true(is(str, 29, 33), "03.05.12"); // <--

    // fin.
    t.end();
  }
);

t.test(
  `03.06 - ${`\u001b[${36}m${`cheeky cases`}\u001b[${39}m`} - the last character in the attr value is "equal", \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m`,
  (t) => {
    const str = `<img src="xyz" alt='=' class="klm'/>`;

    // src opening at 9
    t.false(is(str, 9, 9), "03.06.01");
    t.true(is(str, 9, 13), "03.06.02"); // <--
    t.false(is(str, 9, 19), "03.06.03");
    t.false(is(str, 9, 21), "03.06.04");
    t.false(is(str, 9, 29), "03.06.05");
    t.false(is(str, 9, 33), "03.06.06");

    // alt opening at 19
    t.false(is(str, 19, 9), "03.06.05");
    t.false(is(str, 19, 13), "03.06.06");
    t.false(is(str, 19, 19), "03.06.07");
    t.true(is(str, 19, 21), "03.06.08"); // <--
    t.false(is(str, 19, 29), "03.06.05");
    t.false(is(str, 19, 33), "03.06.06");

    // class opening at 29
    t.false(is(str, 29, 9), "03.06.07");
    t.false(is(str, 29, 13), "03.06.08");
    t.false(is(str, 29, 19), "03.06.09");
    t.false(is(str, 29, 21), "03.06.10");
    t.false(is(str, 29, 29), "03.06.11");
    t.true(is(str, 29, 33), "03.06.12"); // <--

    // fin.
    t.end();
  }
);

t.test(
  `03.07 - ${`\u001b[${36}m${`cheeky cases`}\u001b[${39}m`} - the last character in the attr value is "equal", \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m`,
  (t) => {
    const str = `<img src="xyz" alt='=' class='klm"/>`;

    // src opening at 9
    t.false(is(str, 9, 9), "03.07.01");
    t.true(is(str, 9, 13), "03.07.02"); // <--
    t.false(is(str, 9, 19), "03.07.03");
    t.false(is(str, 9, 21), "03.07.04");
    t.false(is(str, 9, 29), "03.07.05");
    t.false(is(str, 9, 33), "03.07.06");

    // alt opening at 19
    t.false(is(str, 19, 9), "03.07.05");
    t.false(is(str, 19, 13), "03.07.06");
    t.false(is(str, 19, 19), "03.07.07");
    t.true(is(str, 19, 21), "03.07.08"); // <--
    t.false(is(str, 19, 29), "03.07.05");
    t.false(is(str, 19, 33), "03.07.06");

    // class opening at 29
    t.false(is(str, 29, 9), "03.07.07");
    t.false(is(str, 29, 13), "03.07.08");
    t.false(is(str, 29, 19), "03.07.09");
    t.false(is(str, 29, 21), "03.07.10");
    t.false(is(str, 29, 29), "03.07.11");
    t.true(is(str, 29, 33), "03.07.12"); // <--

    // fin.
    t.end();
  }
);

t.test(
  `03.08 - ${`\u001b[${36}m${`cheeky cases`}\u001b[${39}m`} - the last character in the attr value is "equal", \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m`,
  (t) => {
    const str = `<img src="xyz" alt='=" class="klm"/>`;

    // src opening at 9
    t.false(is(str, 9, 9), "03.08.01");
    t.true(is(str, 9, 13), "03.08.02"); // <--
    t.false(is(str, 9, 19), "03.08.03");
    t.false(is(str, 9, 21), "03.08.04");
    t.false(is(str, 9, 29), "03.08.05");
    t.false(is(str, 9, 33), "03.08.06");

    // alt opening at 19
    t.false(is(str, 19, 9), "03.08.05");
    t.false(is(str, 19, 13), "03.08.06");
    t.false(is(str, 19, 19), "03.08.07");
    t.true(is(str, 19, 21), "03.08.08"); // <--
    t.false(is(str, 19, 29), "03.08.05");
    t.false(is(str, 19, 33), "03.08.06");

    // class opening at 29
    t.false(is(str, 29, 9), "03.08.07");
    t.false(is(str, 29, 13), "03.08.08");
    t.false(is(str, 29, 19), "03.08.09");
    t.false(is(str, 29, 21), "03.08.10");
    t.false(is(str, 29, 29), "03.08.11");
    t.true(is(str, 29, 33), "03.08.12"); // <--

    // fin.
    t.end();
  }
);

t.test(
  `03.09 - ${`\u001b[${36}m${`cheeky cases`}\u001b[${39}m`} - the last character in the attr value is "equal", \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m`,
  (t) => {
    const str = `<img src="xyz" alt='=" class="klm'/>`;

    // src opening at 9
    t.false(is(str, 9, 9), "03.09.01");
    t.true(is(str, 9, 13), "03.09.02"); // <--
    t.false(is(str, 9, 19), "03.09.03");
    t.false(is(str, 9, 21), "03.09.04");
    t.false(is(str, 9, 29), "03.09.05");
    t.false(is(str, 9, 33), "03.09.06");

    // alt opening at 19
    t.false(is(str, 19, 9), "03.09.05");
    t.false(is(str, 19, 13), "03.09.06");
    t.false(is(str, 19, 19), "03.09.07");
    t.true(is(str, 19, 21), "03.09.08"); // <--
    t.false(is(str, 19, 29), "03.09.05");
    t.false(is(str, 19, 33), "03.09.06");

    // class opening at 29
    t.false(is(str, 29, 9), "03.09.07");
    t.false(is(str, 29, 13), "03.09.08");
    t.false(is(str, 29, 19), "03.09.09");
    t.false(is(str, 29, 21), "03.09.10");
    t.false(is(str, 29, 29), "03.09.11");
    t.true(is(str, 29, 33), "03.09.12"); // <--

    // fin.
    t.end();
  }
);

t.test(
  `03.10 - ${`\u001b[${36}m${`cheeky cases`}\u001b[${39}m`} - the last character in the attr value is "equal", \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m`,
  (t) => {
    const str = `<img src="xyz" alt='=" class='klm"/>`;

    // src opening at 9
    t.false(is(str, 9, 9), "03.10.01");
    t.true(is(str, 9, 13), "03.10.02"); // <--
    t.false(is(str, 9, 19), "03.10.03");
    t.false(is(str, 9, 21), "03.10.04");
    t.false(is(str, 9, 29), "03.10.05");
    t.false(is(str, 9, 33), "03.10.06");

    // alt opening at 19
    t.false(is(str, 19, 9), "03.10.05");
    t.false(is(str, 19, 13), "03.10.06");
    t.false(is(str, 19, 19), "03.10.07");
    t.true(is(str, 19, 21), "03.10.08"); // <--
    t.false(is(str, 19, 29), "03.10.05");
    t.false(is(str, 19, 33), "03.10.06");

    // class opening at 29
    t.false(is(str, 29, 9), "03.10.07");
    t.false(is(str, 29, 13), "03.10.08");
    t.false(is(str, 29, 19), "03.10.09");
    t.false(is(str, 29, 21), "03.10.10");
    t.false(is(str, 29, 29), "03.10.11");
    t.true(is(str, 29, 33), "03.10.12"); // <--

    // fin.
    t.end();
  }
);

t.test(
  `03.11 - ${`\u001b[${36}m${`cheeky cases`}\u001b[${39}m`} - the last character in the attr value is "equal", \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m`,
  (t) => {
    const str = `<img src="xyz" alt='=" class='klm'/>`;

    // src opening at 9
    t.false(is(str, 9, 9), "03.11.01");
    t.true(is(str, 9, 13), "03.11.02"); // <--
    t.false(is(str, 9, 19), "03.11.03");
    t.false(is(str, 9, 21), "03.11.04");
    t.false(is(str, 9, 29), "03.11.05");
    t.false(is(str, 9, 33), "03.11.06");

    // alt opening at 19
    t.false(is(str, 19, 9), "03.11.05");
    t.false(is(str, 19, 13), "03.11.06");
    t.false(is(str, 19, 19), "03.11.07");
    t.true(is(str, 19, 21), "03.11.08"); // <--
    t.false(is(str, 19, 29), "03.11.05");
    t.false(is(str, 19, 33), "03.11.06");

    // class opening at 29
    t.false(is(str, 29, 9), "03.11.07");
    t.false(is(str, 29, 13), "03.11.08");
    t.false(is(str, 29, 19), "03.11.09");
    t.false(is(str, 29, 21), "03.11.10");
    t.false(is(str, 29, 29), "03.11.11");
    t.true(is(str, 29, 33), "03.11.12"); // <--

    // fin.
    t.end();
  }
);

// 04. unclosed tags
// -----------------------------------------------------------------------------

t.test(
  `04.01 - ${`\u001b[${34}m${`unclosed tags`}\u001b[${39}m`} - missing tag ending follows - \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m`,
  (t) => {
    const str = `<a href="z" click here</a>`;
    t.true(is(str, 8, 10), "04.01");

    // fin.
    t.end();
  }
);

t.test(
  `04.02 - ${`\u001b[${34}m${`unclosed tags`}\u001b[${39}m`} - missing tag ending follows - \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m`,
  (t) => {
    const str = `<a href="z' click here</a>`;
    t.true(is(str, 8, 10), "04.02");

    // fin.
    t.end();
  }
);

t.test(
  `04.03 - ${`\u001b[${34}m${`unclosed tags`}\u001b[${39}m`} - missing tag ending follows - \u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m`,
  (t) => {
    const str = `<a href='z" click here</a>`;
    t.true(is(str, 8, 10), "04.03");

    // fin.
    t.end();
  }
);

t.test(
  `04.04 - ${`\u001b[${34}m${`unclosed tags`}\u001b[${39}m`} - missing tag ending follows - \u001b[${33}m${`S`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m`,
  (t) => {
    const str = `<a href='z' click here</a>`;
    t.true(is(str, 8, 10), "04.04");

    // fin.
    t.end();
  }
);

t.test(
  `04.05 - ${`\u001b[${34}m${`unclosed tags`}\u001b[${39}m`} - tight - \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m`,
  (t) => {
    const str = `<a href="z"</a>`;
    t.true(is(str, 8, 10), "04.05");

    // fin.
    t.end();
  }
);

t.test(
  `04.06 - ${`\u001b[${34}m${`unclosed tags`}\u001b[${39}m`} - tight - \u001b[${31}m${`D`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m`,
  (t) => {
    const str = `<a href="z'</a>`;
    t.true(is(str, 8, 10), "04.06");

    // fin.
    t.end();
  }
);

t.test(
  `04.07 - ${`\u001b[${34}m${`unclosed tags`}\u001b[${39}m`} - tight - \u001b[${33}m${`S`}\u001b[${39}m-\u001b[${31}m${`D`}\u001b[${39}m`,
  (t) => {
    const str = `<a href='z"</a>`;
    t.true(is(str, 8, 10), "04.07");

    // fin.
    t.end();
  }
);

t.test(
  `04.08 - ${`\u001b[${34}m${`unclosed tags`}\u001b[${39}m`} - tight - \u001b[${33}m${`S`}\u001b[${39}m-\u001b[${33}m${`S`}\u001b[${39}m`,
  (t) => {
    const str = `<a href='z'</a>`;
    t.true(is(str, 8, 10), "04.08");

    // fin.
    t.end();
  }
);

// 05. attribute starts without a quote
// -----------------------------------------------------------------------------

t.test(
  `05.01 - ${`\u001b[${31}m${`no starting quote`}\u001b[${39}m`} - one tag, one attr`,
  (t) => {
    const str = `<a href=z">click here</a>`;

    t.true(is(str, 8, 9), "05.01");

    // fin.
    t.end();
  }
);

// 06. repeated equals
// -----------------------------------------------------------------------------

t.test(
  `05.01 - ${`\u001b[${31}m${`no starting quote`}\u001b[${39}m`} - one tag, one attr`,
  (t) => {
    const str = `<a b=="c" d=='e'>`;

    // b opening at 6
    t.false(is(str, 6, 6), "05.01.01");
    t.true(is(str, 6, 8), "05.01.02"); // <--
    t.false(is(str, 6, 13), "05.01.03");
    t.false(is(str, 6, 15), "05.01.04");

    // d opening at 13
    t.false(is(str, 13, 6), "05.01.05");
    t.false(is(str, 13, 8), "05.01.06");
    t.false(is(str, 13, 13), "05.01.07");
    t.true(is(str, 13, 15), "05.01.08"); // <--

    // fin.
    t.end();
  }
);

t.test(
  `05.02 - ${`\u001b[${31}m${`no starting quote`}\u001b[${39}m`} - one tag, one attr, three equals`,
  (t) => {
    const str = `<a b==="c" d==='e'>`;

    // b opening at 7
    t.false(is(str, 7, 7), "05.02.01");
    t.true(is(str, 7, 9), "05.02.02"); // <--
    t.false(is(str, 7, 15), "05.02.03");
    t.false(is(str, 7, 17), "05.02.04");

    // d opening at 15
    t.false(is(str, 15, 7), "05.02.05");
    t.false(is(str, 15, 9), "05.02.06");
    t.false(is(str, 15, 15), "05.02.07");
    t.true(is(str, 15, 17), "05.02.08"); // <--

    // fin.
    t.end();
  }
);

t.test(
  `05.03 - ${`\u001b[${31}m${`no starting quote`}\u001b[${39}m`} - one tag, one attr, three spaced equals`,
  (t) => {
    const str = `<a b = = = "c" d = = = 'e'>`;

    // b opening at 11
    t.false(is(str, 11, 11), "05.03.01");
    t.true(is(str, 11, 13), "05.03.02"); // <--
    t.false(is(str, 11, 23), "05.03.03");
    t.false(is(str, 11, 25), "05.03.04");

    // d opening at 23
    t.false(is(str, 23, 11), "05.03.05");
    t.false(is(str, 23, 13), "05.03.06");
    t.false(is(str, 23, 23), "05.03.07");
    t.true(is(str, 23, 25), "05.03.08"); // <--

    // fin.
    t.end();
  }
);