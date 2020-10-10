import tap from "tap";
import cparser from "../dist/codsen-parser.esm";

// 00. no error
// -----------------------------------------------------------------------------

tap.test(
  `01 - ${`\u001b[${33}m${`no error`}\u001b[${39}m`} - two tags`,
  (t) => {
    t.strictSame(
      cparser(`<div></div>`),
      [
        {
          type: "tag",
          start: 0,
          end: 5,
          value: `<div>`,
          children: [],
          tagNameStartsAt: 1,
          tagNameEndsAt: 4,
          tagName: "div",
          recognised: true,
          closing: false,
          void: false,
          pureHTML: true,
          kind: null,
          attribs: [],
        },
        {
          start: 5,
          end: 11,
          value: `</div>`,
          children: [],
          type: "tag",
          tagNameStartsAt: 7,
          tagNameEndsAt: 10,
          tagName: "div",
          recognised: true,
          closing: true,
          void: false,
          pureHTML: true,
          kind: null,
          attribs: [],
        },
      ],
      "01"
    );
    t.end();
  }
);

tap.test(
  `02 - ${`\u001b[${33}m${`no error`}\u001b[${39}m`} - two tags, whitespace in between`,
  (t) => {
    t.strictSame(
      cparser(`<style>\n\n</style>`),
      [
        {
          children: [
            {
              type: "text",
              start: 7,
              end: 9,
              value: `\n\n`,
            },
          ],
          type: "tag",
          start: 0,
          end: 7,
          value: `<style>`,
          tagNameStartsAt: 1,
          tagNameEndsAt: 6,
          tagName: "style",
          recognised: true,
          closing: false,
          void: false,
          pureHTML: true,
          kind: null,
          attribs: [],
        },
        {
          children: [],
          type: "tag",
          start: 9,
          end: 17,
          value: `</style>`,
          tagNameStartsAt: 11,
          tagNameEndsAt: 16,
          tagName: "style",
          recognised: true,
          closing: true,
          void: false,
          pureHTML: true,
          kind: null,
          attribs: [],
        },
      ],
      "02"
    );
    t.end();
  }
);

tap.test(
  `03 - ${`\u001b[${33}m${`no error`}\u001b[${39}m`} - two tags, whitespace in between`,
  (t) => {
    t.strictSame(
      cparser(`<div>\n\n</div>`),
      [
        {
          children: [
            {
              type: "text",
              start: 5,
              end: 7,
              value: `\n\n`,
            },
          ],
          type: "tag",
          start: 0,
          end: 5,
          value: `<div>`,
          tagNameStartsAt: 1,
          tagNameEndsAt: 4,
          tagName: "div",
          recognised: true,
          closing: false,
          void: false,
          pureHTML: true,
          kind: null,
          attribs: [],
        },
        {
          children: [],
          type: "tag",
          start: 7,
          end: 13,
          value: `</div>`,
          tagNameStartsAt: 9,
          tagNameEndsAt: 12,
          tagName: "div",
          recognised: true,
          closing: true,
          void: false,
          pureHTML: true,
          kind: null,
          attribs: [],
        },
      ],
      "03"
    );
    t.end();
  }
);

// 01. basic
// -----------------------------------------------------------------------------

tap.test(
  `04 - ${`\u001b[${36}m${`basic`}\u001b[${39}m`} - extra closing tag`,
  (t) => {
    const gatheredErr = [];
    t.match(
      cparser(`<div><a>z</a></div></div>`, {
        errCb: (errObj) => gatheredErr.push(errObj),
      }),
      [
        {
          children: [
            {
              children: [
                {
                  type: "text",
                  start: 8,
                  end: 9,
                },
              ],
              type: "tag",
              start: 5,
              end: 8,
              closing: false,
            },
            {
              type: "tag",
              start: 9,
              end: 13,
              closing: true,
            },
          ],
          type: "tag",
          start: 0,
          end: 5,
          closing: false,
        },
        {
          type: "tag",
          start: 13,
          end: 19,
          closing: true,
        },
        {
          type: "tag",
          start: 19,
          end: 25,
          closing: true,
        },
      ],
      "04.01"
    );
    t.match(
      gatheredErr,
      [
        {
          ruleId: "tag-missing-opening",
          idxFrom: 19,
          idxTo: 25,
        },
      ],
      "04.02"
    );
    t.end();
  }
);

// 02. comment tag, "simple"
// -----------------------------------------------------------------------------

tap.test(
  `05 - ${`\u001b[${33}m${`comment "simple"`}\u001b[${39}m`} - basic`,
  (t) => {
    const gatheredErr = [];
    t.strictSame(
      cparser(`x-->z`, {
        errCb: (errObj) => gatheredErr.push(errObj),
      }),
      [
        {
          type: "text",
          start: 0,
          end: 1,
          value: `x`,
        },
        {
          children: [],
          type: "comment",
          start: 1,
          end: 4,
          value: `-->`,
          kind: "simple",
          closing: true,
          language: "html",
        },
        {
          type: "text",
          start: 4,
          end: 5,
          value: `z`,
        },
      ],
      "05.01"
    );
    t.match(
      gatheredErr,
      [
        {
          ruleId: "comment-simple-missing-opening",
          idxFrom: 1,
          idxTo: 4,
        },
      ],
      "05.02"
    );
    t.end();
  }
);

// 03. (outlook) conditional, "only"
// -----------------------------------------------------------------------------

tap.test(
  `06 - ${`\u001b[${33}m${`conditional "only"`}\u001b[${39}m`} - basic`,
  (t) => {
    const gatheredErr = [];
    t.strictSame(
      cparser(`x<![endif]-->z`, {
        errCb: (errObj) => gatheredErr.push(errObj),
      }),
      [
        {
          type: "text",
          start: 0,
          end: 1,
          value: `x`,
        },
        {
          children: [],
          type: "comment",
          start: 1,
          end: 13,
          value: `<![endif]-->`,
          kind: "only",
          language: "html",
          closing: true,
        },
        {
          type: "text",
          start: 13,
          end: 14,
          value: `z`,
        },
      ],
      "06.01"
    );
    t.match(
      gatheredErr,
      [
        {
          ruleId: "comment-only-missing-opening",
          idxFrom: 1,
          idxTo: 13,
        },
      ],
      "06.02"
    );
    t.end();
  }
);

// 04. outlook conditional, "not"
// -----------------------------------------------------------------------------

tap.test(
  `07 - ${`\u001b[${33}m${`conditional "not"`}\u001b[${39}m`} - basic`,
  (t) => {
    const gatheredErr = [];
    t.strictSame(
      cparser(`x<!--<![endif]-->z`, {
        errCb: (errObj) => gatheredErr.push(errObj),
      }),
      [
        {
          type: "text",
          start: 0,
          end: 1,
          value: `x`,
        },
        {
          children: [],
          type: "comment",
          start: 1,
          end: 17,
          value: `<!--<![endif]-->`,
          kind: "not",
          language: "html",
          closing: true,
        },
        {
          type: "text",
          start: 17,
          end: 18,
          value: `z`,
        },
      ],
      "07.01"
    );
    t.match(
      gatheredErr,
      [
        {
          ruleId: "comment-not-missing-opening",
          idxFrom: 1,
          idxTo: 17,
        },
      ],
      "07.02"
    );
    t.end();
  }
);
