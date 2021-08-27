import tap from "tap";
import { findMalformed } from "../dist/string-find-malformed.esm.js";

// -----------------------------------------------------------------------------
// group 01. various throws
// -----------------------------------------------------------------------------

tap.test(
  "01 - throws when the first argument, source string, is not a string",
  (t) => {
    t.throws(() => {
      findMalformed(1);
    }, /THROW_ID_01/);

    // more resembling real-life:
    t.throws(() => {
      findMalformed(
        1,
        "a",
        () => {
          console.log("yo");
        },
        null
      );
    }, /THROW_ID_01/);
    t.end();
  }
);

tap.test(
  "02 - throws when the second argument, ref string, is not a string",
  (t) => {
    t.throws(() => {
      findMalformed("aaa", 1);
    }, /THROW_ID_02/);

    // more resembling real-life:
    t.throws(() => {
      findMalformed(
        "a",
        1,
        () => {
          console.log("yo");
        },
        null
      );
    }, /THROW_ID_02/);
    t.end();
  }
);

tap.test(
  "03 - throws when the third argument, callback, is not a function",
  (t) => {
    t.throws(() => {
      findMalformed("aaa", "zzz", 1);
    }, /THROW_ID_03/);

    t.throws(() => {
      findMalformed("a", "b", "c", null);
    }, /THROW_ID_03/);
    t.end();
  }
);

tap.test(
  "04 - throws when the fourth argument, optional options object, is not a plain object",
  (t) => {
    t.throws(() => {
      findMalformed("aaa", "bbb", () => {}, "ccc");
    }, /THROW_ID_04/);
    t.end();
  }
);

tap.test("05 - throws when opts.stringOffset is not a number", (t) => {
  t.throws(() => {
    findMalformed("aaa", "bbb", () => {}, { stringOffset: "ccc" });
  }, /THROW_ID_05/);
  t.end();
});

tap.test(`06 - empty string`, (t) => {
  const gathered = [];
  findMalformed("", "bde", (obj) => {
    gathered.push(obj);
  });
  t.strictSame(gathered, [], "06");
  t.end();
});

tap.test(`07 - empty string`, (t) => {
  const gathered = [];
  findMalformed("abc", "", (obj) => {
    gathered.push(obj);
  });
  t.strictSame(gathered, [], "07");
  t.end();
});

// -----------------------------------------------------------------------------
// 02. normal use
// -----------------------------------------------------------------------------

tap.test(`08 - rogue character, "c"`, (t) => {
  const gathered = [];
  findMalformed("abcdef", "bde", (obj) => {
    gathered.push(obj);
  });
  t.strictSame(
    gathered,
    [
      {
        idxFrom: 1,
        idxTo: 5,
      },
    ],
    "08"
  );
  t.end();
});

tap.test(`09 - overlapping and extended maxDistance`, (t) => {
  const gathered = [];
  findMalformed(
    "abcabcd.f",
    "abcdef",
    (obj) => {
      gathered.push(obj);
    },
    {
      maxDistance: 2,
    }
  );
  t.strictSame(
    gathered,
    [
      {
        idxFrom: 3,
        idxTo: 9,
      },
    ],
    "09"
  );
  t.end();
});

tap.test(`10 - with opts.stringOffset`, (t) => {
  const gathered = [];
  findMalformed(
    "<div><!-something--></div>",
    "<!--",
    (obj) => {
      gathered.push(obj);
    },
    {
      maxDistance: 1,
      stringOffset: 100,
    }
  );
  t.strictSame(
    gathered,
    [
      {
        idxFrom: 105,
        idxTo: 108,
      },
    ],
    "10"
  );
  t.end();
});

tap.test(`11 - correct, fully matching value is not pinged`, (t) => {
  const gathered = [];
  findMalformed(
    "<div><!--something--></div>",
    "<!--",
    (obj) => {
      gathered.push(obj);
    },
    {
      maxDistance: 1,
      stringOffset: 100,
    }
  );
  t.strictSame(gathered, [], "11");
  t.end();
});

tap.test(`12 - like before but strings in opts`, (t) => {
  const gathered = [];
  findMalformed(
    "<div><!-\n\n\n-something--></div>",
    "<!--",
    (obj) => {
      gathered.push(obj);
    },
    {
      maxDistance: "1",
      stringOffset: "100",
    }
  );
  t.strictSame(
    gathered,
    [
      {
        idxFrom: 105,
        idxTo: 112,
      },
    ],
    "12"
  );
  t.end();
});

tap.test(`13 - whitespace`, (t) => {
  const gathered = [];
  findMalformed(
    "<div>< ! - -something--></div>",
    "<!--",
    (obj) => {
      gathered.push(obj);
    },
    null
  );
  t.strictSame(
    gathered,
    [
      {
        idxFrom: 5,
        idxTo: 12,
      },
    ],
    "13"
  );
  t.end();
});

tap.test(`14 - repeated characters after failed match`, (t) => {
  const gathered = [];
  findMalformed(
    "<--z",
    "<!--",
    (obj) => {
      gathered.push(obj);
    },
    null
  );
  t.strictSame(
    gathered,
    [
      {
        idxFrom: 0,
        idxTo: 3,
      },
    ],
    "14"
  );
  t.end();
});

tap.test(`15 - repeated characters after failed match`, (t) => {
  const gathered = [];
  findMalformed(
    "<!-[if mso]>",
    "<!--[",
    (obj) => {
      gathered.push(obj);
    },
    null
  );
  t.strictSame(
    gathered,
    [
      {
        idxFrom: 0,
        idxTo: 4,
      },
    ],
    "15"
  );
  t.end();
});
