import tap from "tap";
import { rProcessOutside as p } from "../dist/ranges-process-outside.esm.js";

const femaleWhiteSleuthEmoji = "\uD83D\uDD75\uD83C\uDFFC\u200D\u2640\uFE0F";

// ==============================
// 0. THROWS
// ==============================

// throw pinning:
tap.test(
  `01 - ${`\u001b[${35}m${`throws`}\u001b[${39}m`} - first arg wrong #1`,
  (t) => {
    t.throws(() => {
      p(undefined, [[0, 1]]);
    }, /THROW_ID_01/g);
    t.end();
  }
);

tap.test(
  `02 - ${`\u001b[${35}m${`throws`}\u001b[${39}m`} - first arg wrong #2`,
  (t) => {
    t.throws(() => {
      p(null, [[0, 1]]);
    }, /THROW_ID_02/g);
    t.end();
  }
);

tap.test(
  `03 - ${`\u001b[${35}m${`throws`}\u001b[${39}m`} - first arg wrong #3`,
  (t) => {
    t.throws(() => {
      p(true, [[0, 1]]);
    }, /THROW_ID_02/g);
    t.end();
  }
);

tap.test(
  `04 - ${`\u001b[${35}m${`throws`}\u001b[${39}m`} - second arg wrong #4`,
  (t) => {
    // throw pinning:
    t.throws(() => {
      p("zzz", true);
    }, /THROW_ID_03/g);
    t.end();
  }
);

tap.test(
  `05 - ${`\u001b[${35}m${`throws`}\u001b[${39}m`} - second arg wrong #5`,
  (t) => {
    t.throws(() => {
      p("zzz", ["zzz"], () => {});
    }, /THROW_ID_03/g);
    t.end();
  }
);

tap.test(
  `06 - ${`\u001b[${35}m${`throws`}\u001b[${39}m`} - second arg null means absence of ranges`,
  (t) => {
    t.doesNotThrow(() => {
      p("zzz", null, () => {});
    }, "06");
    t.end();
  }
);

tap.test(
  `07 - ${`\u001b[${35}m${`throws`}\u001b[${39}m`} - third arg wrong`,
  (t) => {
    // throw pinning:
    t.throws(() => {
      p("zzz", [[0, 1]], null);
    }, /THROW_ID_04/g);
    t.end();
  }
);

// ==============================
// 01. Normal use
// ==============================

tap.test(
  `08 - ${`\u001b[${33}m${`one range`}\u001b[${39}m`} - string covers ranges - not touching zero - checks`,
  (t) => {
    const gather = [];
    p("abcdefghij", [[1, 5]], (idx) => {
      gather.push(idx);
    });
    t.strictSame(gather, [0, 5, 6, 7, 8, 9], "08");
    t.end();
  }
);

tap.test(
  `09 - ${`\u001b[${33}m${`one range`}\u001b[${39}m`} - string covers ranges - not touching zero - skip checks`,
  (t) => {
    const gather2 = [];
    p(
      "abcdefghij",
      [[1, 5]],
      (idx) => {
        gather2.push(idx);
      },
      true
    );
    t.strictSame(gather2, [0, 5, 6, 7, 8, 9], "09");
    t.end();
  }
);

tap.test(
  `10 - ${`\u001b[${33}m${`one range`}\u001b[${39}m`} - string covers ranges - touching zero - 1 range - checks`,
  (t) => {
    const gather = [];
    p("abcdefghij", [[0, 5]], (idx) => {
      gather.push(idx);
    });
    t.strictSame(gather, [5, 6, 7, 8, 9], "10");
    t.end();
  }
);

tap.test(
  `11 - ${`\u001b[${33}m${`one range`}\u001b[${39}m`} - string covers ranges - touching zero - 1 range - skip checks`,
  (t) => {
    const gathe2 = [];
    p(
      "abcdefghij",
      [[0, 5]],
      (idx) => {
        gathe2.push(idx);
      },
      true
    );
    t.strictSame(gathe2, [5, 6, 7, 8, 9], "11");
    t.end();
  }
);

tap.test(
  `12 - ${`\u001b[${31}m${`few ranges`}\u001b[${39}m`} - string covers ranges - touching zero - 2 ranges`,
  (t) => {
    const gather = [];
    p(
      "abcdefghij",
      [
        [0, 5],
        [7, 8],
      ],
      (idx) => {
        gather.push(idx);
      }
    );
    t.strictSame(gather, [5, 6, 8, 9], "12");
    t.end();
  }
);

tap.test(
  `13 - ${`\u001b[${31}m${`few ranges`}\u001b[${39}m`} - string covers ranges - touching zero - opposite order (testing ranges-merge)`,
  (t) => {
    const gather2 = [];
    const messy = [
      [7, 8],
      [0, 5],
    ];
    p("abcdefghij", messy, (idx) => {
      gather2.push(idx);
    });
    t.strictSame(
      messy,
      [
        [7, 8],
        [0, 5],
      ],
      "13.01 - inputs were not mutated"
    );
    t.strictSame(
      gather2,
      [5, 6, 8, 9],
      "13.02 - result is the same as in previous test"
    );
    t.end();
  }
);

tap.test(
  `14 - ${`\u001b[${31}m${`few ranges`}\u001b[${39}m`} - string covers ranges - touching zero - throws`,
  (t) => {
    // skipping checking/merges/sorts will trigger safety latches and cause a throw
    const gather2 = [];
    t.throws(() => {
      p(
        "abcdefghij",
        [
          [7, 8],
          [0, 5],
        ],
        (idx) => {
          gather2.push(idx);
        },
        true
      );
    }, /THROW_ID_08/g);
    t.end();
  }
);

// range outside the string length
tap.test(
  `15 - ${`\u001b[${31}m${`few ranges`}\u001b[${39}m`} - string covers ranges - touching zero - protrudes - with checks`,
  (t) => {
    const gather = [];
    p(
      "abcdefghij",
      [
        [0, 5],
        [7, 100],
      ],
      (idx) => {
        gather.push(idx);
      }
    );
    t.strictSame(gather, [5, 6], "15 - result is the same as in previous test");
    t.end();
  }
);

tap.test(
  `16 - ${`\u001b[${31}m${`few ranges`}\u001b[${39}m`} - string covers ranges - touching zero - protrudes - with checks skip`,
  (t) => {
    const gather = [];
    // The problem is, reference string is 10 chars/indexes long and ranges span
    // up to index 100. In practice, on a clean input this should never happen so
    // it is safe and worthy to cut corners and skip checks. For example, this
    // index 100 would not come at the first place if we processed the same string
    // even on many different iterations and different functions. That index 100
    // can't appear from anywhere if reference string's indexes don't span that far.
    t.throws(() => {
      p(
        "abcdefghij",
        [
          [0, 5],
          [7, 100],
        ],
        (idx) => {
          gather.push(idx);
        },
        true
      );
    }, /THROW_ID_08/g);
    t.end();
  }
);

tap.test(
  `17 - ${`\u001b[${33}m${`one range`}\u001b[${39}m`} - absent ranges - empty array given`,
  (t) => {
    const gather = [];
    p("abcdefghij", [], (idx) => {
      gather.push(idx);
    });
    t.strictSame(gather, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "17");
    t.end();
  }
);

tap.test(
  `18 - ${`\u001b[${33}m${`one range`}\u001b[${39}m`} - absent ranges - null given`,
  (t) => {
    const gather2 = [];
    p("abcdefghij", null, (idx) => {
      gather2.push(idx);
    });
    t.strictSame(gather2, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "18");
    t.end();
  }
);

tap.test(
  `19 - ${`\u001b[${33}m${`one range`}\u001b[${39}m`} - absent ranges - null given + true (skip checks)`,
  (t) => {
    const gather = [];
    p(
      "abcdefghij",
      null,
      (idx) => {
        gather.push(idx);
      },
      true
    );
    t.strictSame(gather, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "19");
    t.end();
  }
);

tap.test(
  `20 - ${`\u001b[${33}m${`one range`}\u001b[${39}m`} - ranges completely cover str`,
  (t) => {
    const gather1 = [];
    p("abcdefghij", [[0, 100]], (idx) => {
      gather1.push(idx);
    });
    t.strictSame(gather1, [], "20");
    t.end();
  }
);

tap.test(
  `21 - ${`\u001b[${33}m${`one range`}\u001b[${39}m`} - ranges not cover str at all`,
  (t) => {
    const gather = [];
    p("abcdefghij", [[100, 200]], (idx) => {
      gather.push(idx);
    });
    t.strictSame(gather, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "21");
    t.end();
  }
);

tap.test(
  `22 - ${`\u001b[${33}m${`one range`}\u001b[${39}m`} - string covers ranges - emoji - checks on`,
  (t) => {
    const gather = [];
    p(
      `abcdef\uD834\uDF06ij`,
      [[0, 5]],
      (idxFrom, idxTo) => {
        gather.push([idxFrom, idxTo]);
      },
      false // skip=false so checks are on
    );
    t.strictSame(
      gather,
      [
        [5, 6],
        [6, 8],
        [8, 9],
        [9, 10],
      ],
      "22"
    );
    t.end();
  }
);

tap.test(
  `23 - ${`\u001b[${33}m${`one range`}\u001b[${39}m`} - string covers ranges - emoji - checks on`,
  (t) => {
    t.equal(femaleWhiteSleuthEmoji.length, 7, "23.01 - sanity check");
    const gather = [];
    p(
      `abcdef${femaleWhiteSleuthEmoji}ij`,
      [[0, 5]],
      (idxFrom, idxTo) => {
        gather.push([idxFrom, idxTo]);
      },
      false // skip=false so checks are on
    );
    t.strictSame(
      gather,
      [
        [5, 6],
        [6, 13],
        [13, 14],
        [14, 15],
      ],
      "23.02"
    );
    t.end();
  }
);

// ==============================
// 02. Index offsets
// ==============================

tap.test(
  `24 - ${`\u001b[${35}m${`offsets`}\u001b[${39}m`} - offset once at index 5`,
  (t) => {
    const gather = [];
    p("abcdefghij", [[1, 5]], (idxFrom, idxTo, offsetBy) => {
      gather.push(idxFrom);
      if (idxFrom === 5) {
        offsetBy(1);
      }
    });
    t.strictSame(gather, [0, 5, 7, 8, 9], "24");
    t.end();
  }
);

tap.test(
  `25 - ${`\u001b[${35}m${`offsets`}\u001b[${39}m`} - offset once at index 6`,
  (t) => {
    const gather = [];
    p("abcdefghij", [[1, 5]], (idxFrom, idxTo, offsetBy) => {
      gather.push(idxFrom);
      if (idxFrom === 6) {
        offsetBy(1);
      }
    });
    t.strictSame(gather, [0, 5, 6, 8, 9], "25");
    t.end();
  }
);

tap.test(
  `26 - ${`\u001b[${35}m${`offsets`}\u001b[${39}m`} - sequential offsets`,
  (t) => {
    const gather = [];
    p("abcdefghij", [[1, 5]], (idxFrom, idxTo, offsetBy) => {
      if (idxFrom === 5 || idxFrom === 6) {
        offsetBy(1);
      } else {
        gather.push(idxFrom);
      }
    });
    t.strictSame(gather, [0, 7, 8, 9], "26");
    t.end();
  }
);
