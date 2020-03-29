const t = require("tap");
const ct = require("../dist/codsen-tokenizer.cjs");
// const BACKSLASH = "\u005C";

// 01. general tests, exact matching via t.same
// -----------------------------------------------------------------------------

t.test(
  `01.01 - ${`\u001b[${33}m${`exact key set matching`}\u001b[${39}m`}`,
  (t) => {
    const gathered = [];
    ct(`<a\n<b>`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.same(
      gathered,
      [
        {
          start: 0,
          end: 2,
          value: "<a",
          tagNameStartsAt: 1,
          tagNameEndsAt: 2,
          tagName: "a",
          recognised: true,
          closing: false,
          void: false,
          pureHTML: true,
          esp: [],
          type: "tag",
          kind: null,
          attribs: [],
        },
        {
          type: "text",
          start: 2,
          end: 3,
          value: "\n",
        },
        {
          type: "tag",
          start: 3,
          end: 6,
          value: "<b>",
          tagNameStartsAt: 4,
          tagNameEndsAt: 5,
          tagName: "b",
          recognised: true,
          closing: false,
          void: false,
          pureHTML: true,
          esp: [],
          kind: null,
          attribs: [],
        },
      ],
      "01.01"
    );
    t.end();
  }
);

t.test(
  `01.02 - ${`\u001b[${33}m${`exact key set matching`}\u001b[${39}m`}`,
  (t) => {
    const gathered = [];
    ct(`<a href="z" click here</a>`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.same(
      gathered,
      [
        {
          start: 0,
          end: 12,
          value: `<a href="z" `,
          type: "tag",
          tagNameStartsAt: 1,
          tagNameEndsAt: 2,
          tagName: "a",
          recognised: true,
          closing: false,
          void: false,
          pureHTML: true,
          esp: [],
          kind: null,
          attribs: [
            {
              attribName: "href",
              attribNameRecognised: true,
              attribNameStartsAt: 3,
              attribNameEndsAt: 7,
              attribOpeningQuoteAt: 8,
              attribClosingQuoteAt: 10,
              attribValue: "z",
              attribValueStartsAt: 9,
              attribValueEndsAt: 10,
              attribStart: 3,
              attribEnd: 11,
            },
          ],
        },
        {
          type: "text",
          start: 12,
          end: 22,
          value: "click here",
        },
        {
          type: "tag",
          start: 22,
          end: 26,
          value: "</a>",
          tagNameStartsAt: 24,
          tagNameEndsAt: 25,
          tagName: "a",
          recognised: true,
          closing: true,
          void: false,
          pureHTML: true,
          esp: [],
          kind: null,
          attribs: [],
        },
      ],
      "01.02"
    );
    t.end();
  }
);

// 02. tag pair
// -----------------------------------------------------------------------------

t.test(
  `02.01 - ${`\u001b[${33}m${`tag pair`}\u001b[${39}m`} - space is melded into tag's range`,
  (t) => {
    const gathered = [];
    // notice space at index 11:
    ct(`<a href="z" click here</a>`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          start: 0,
          end: 12, // not 11
          type: "tag",
        },
        {
          start: 12, // not 11
          end: 22,
          type: "text",
        },
        {
          start: 22,
          end: 26,
          type: "tag",
        },
      ],
      "02.01"
    );
    t.end();
  }
);

t.test(
  `02.02 - ${`\u001b[${33}m${`tag pair`}\u001b[${39}m`} - two spaces`,
  (t) => {
    const gathered = [];
    // notice space at index 11:
    ct(`<a href="z"  click here</a>`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          start: 0,
          end: 11, // not 13
          type: "tag",
        },
        {
          start: 11, // not 13
          end: 23,
          type: "text",
        },
        {
          start: 23,
          end: 27,
          type: "tag",
        },
      ],
      "02.02"
    );
    t.end();
  }
);

t.test(
  `02.03 - ${`\u001b[${33}m${`tag pair`}\u001b[${39}m`} - no spaces`,
  (t) => {
    const gathered = [];
    ct(`<a href="z"click here</a>`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          start: 0,
          end: 11,
          type: "tag",
        },
        {
          start: 11,
          end: 21,
          type: "text",
        },
        {
          start: 21,
          end: 25,
          type: "tag",
        },
      ],
      "02.03"
    );
    t.end();
  }
);

// 03. missing bracket followed by opening bracket
// -----------------------------------------------------------------------------

t.test(
  `03.01 - ${`\u001b[${36}m${`tag follows`}\u001b[${39}m`} - tight`,
  (t) => {
    const gathered = [];
    ct(`<a><b>c</b</a>`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.match(
      gathered,
      [
        {
          type: "tag",
          start: 0,
          end: 3,
          value: "<a>",
          tagNameStartsAt: 1,
          tagNameEndsAt: 2,
          tagName: "a",
          recognised: true,
          closing: false,
          void: false,
          pureHTML: true,
          esp: [],
          kind: null,
          attribs: [],
        },
        {
          type: "tag",
          start: 3,
          end: 6,
          value: "<b>",
          tagNameStartsAt: 4,
          tagNameEndsAt: 5,
          tagName: "b",
          recognised: true,
          closing: false,
          void: false,
          pureHTML: true,
          esp: [],
          kind: null,
          attribs: [],
        },
        {
          type: "text",
          start: 6,
          end: 7,
          value: "c",
        },
        {
          type: "tag",
          start: 7,
          end: 10,
          value: "</b",
          tagNameStartsAt: 9,
          tagNameEndsAt: 10,
          tagName: "b",
          recognised: true,
          closing: true,
          void: false,
          pureHTML: true,
          esp: [],
          kind: null,
          attribs: [],
        },
        {
          type: "tag",
          start: 10,
          end: 14,
          value: "</a>",
          tagNameStartsAt: 12,
          tagNameEndsAt: 13,
          tagName: "a",
          recognised: true,
          closing: true,
          void: false,
          pureHTML: true,
          esp: [],
          kind: null,
          attribs: [],
        },
      ],
      "03.01"
    );
    t.end();
  }
);

// 04. EOL ends the input and tag abruptly ends
// -----------------------------------------------------------------------------

t.test(
  `04.01 - ${`\u001b[${33}m${`various`}\u001b[${39}m`} - abruptly ended after tag name`,
  (t) => {
    const gathered = [];
    ct(`</div`, {
      tagCb: (obj) => {
        gathered.push(obj);
      },
    });
    t.same(
      gathered,
      [
        {
          start: 0,
          end: 5,
          value: "</div",
          tagNameStartsAt: 2,
          tagNameEndsAt: 5,
          tagName: "div",
          recognised: true,
          closing: true,
          void: false,
          pureHTML: true,
          esp: [],
          type: "tag",
          kind: null,
          attribs: [],
        },
      ],
      "04.01"
    );
    t.end();
  }
);

// -----------------------------------------------------------------------------

// TODO

// - tag pair: truncated at the various levels of the attribute:
// <a href</a>
// <a href </a>
// <a href=</a>
// <a href= </a>
// <a href="</a>
// <a href=" </a>
// <a href="z</a>
// <a href="z </a>
// <a href="z"</a>
// <a href="z" </a>
// <a href="z" click</a>
// <a href="z" click here</a>

// - different tags: truncated at the various levels of the attribute:
// <a href<b>
// <a href <b>
// <a href=<b>
// <a href= <b>
// <a href="<b>
// <a href=" <b>
// <a href="z<b>
// <a href="z <b>
// <a href="z"<b>
// <a href="z" <b>
// <a href="z" click<b>
// <a href="z" click here<b>