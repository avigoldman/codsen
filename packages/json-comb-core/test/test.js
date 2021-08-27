import tap from "tap";
import pMap from "p-map";
import {
  getKeysetSync,
  getKeyset,
  enforceKeyset,
  enforceKeysetSync,
  noNewKeysSync,
  findUnusedSync,
  sortAllObjectsSync,
} from "../dist/json-comb-core.esm.js";

function prepArraySync(arr) {
  const keySet = getKeysetSync(arr);
  return arr.map((obj) => enforceKeysetSync(obj, keySet));
}

function prepArray(arr) {
  return getKeyset(arr).then((keySet) =>
    pMap(arr, (obj) => enforceKeyset(obj, keySet))
  );
}

function makePromise(arr) {
  return arr.map((el) => Promise.resolve(el));
}

// -----------------------------------------------------------------------------
// 01. getKeysetSync()
// -----------------------------------------------------------------------------

tap.test("01 - getKeysetSync() - throws when there's no input", (t) => {
  t.throws(() => {
    getKeysetSync();
  }, "01");
  t.end();
});

tap.test("02 - getKeysetSync() - throws when input is not an array", (t) => {
  t.throws(() => {
    getKeysetSync("aa");
  }, "02");
  t.end();
});

tap.test("03 - getKeysetSync() - throws when input array is empty", (t) => {
  t.throws(() => {
    getKeysetSync([]);
  }, "03");
  t.end();
});

tap.test(
  "04 - getKeysetSync() - throws when input array contains not only plain objects",
  (t) => {
    t.throws(() => {
      getKeysetSync([
        {
          a: "a",
          b: "b",
        },
        {
          a: "a",
        },
        "zzzz",
      ]);
    }, "04");
    t.end();
  }
);

tap.test(
  "05 - getKeysetSync() - calculates - three objects - default placeholder",
  (t) => {
    t.strictSame(
      getKeysetSync([
        {
          a: "a",
          b: "c",
          c: {
            d: "d",
            e: "e",
          },
        },
        {
          a: "a",
        },
        {
          c: {
            f: "f",
          },
        },
      ]),
      {
        a: false,
        b: false,
        c: {
          d: false,
          e: false,
          f: false,
        },
      },
      "05"
    );
    t.end();
  }
);

tap.test(
  "06 - getKeysetSync() - calculates - three objects - custom placeholder",
  (t) => {
    t.strictSame(
      getKeysetSync(
        [
          {
            a: "a",
            b: "c",
            c: {
              d: "d",
              e: "e",
            },
          },
          {
            a: "a",
          },
          {
            c: {
              f: "f",
            },
          },
        ],
        { placeholder: true }
      ),
      {
        a: true,
        b: true,
        c: {
          d: true,
          e: true,
          f: true,
        },
      },
      "06.01"
    );
    t.strictSame(
      getKeysetSync(
        [
          {
            a: "a",
            b: "c",
            c: {
              d: "d",
              e: "e",
            },
          },
          {
            a: "a",
          },
          {
            c: {
              f: "f",
            },
          },
        ],
        { placeholder: "" }
      ),
      {
        a: "",
        b: "",
        c: {
          d: "",
          e: "",
          f: "",
        },
      },
      "06.02"
    );
    t.strictSame(
      getKeysetSync(
        [
          {
            a: "a",
            b: "c",
            c: {
              d: "d",
              e: "e",
            },
          },
          {
            a: "a",
          },
          {
            c: {
              f: "f",
            },
          },
        ],
        { placeholder: { a: "a" } }
      ),
      {
        a: { a: "a" },
        b: { a: "a" },
        c: {
          d: { a: "a" },
          e: { a: "a" },
          f: { a: "a" },
        },
      },
      "06.03"
    );
    t.end();
  }
);

tap.test(
  "07 - getKeysetSync() - settings argument is not a plain object - throws",
  (t) => {
    t.throws(() => {
      getKeysetSync([{ a: "a" }, { b: "b" }], "zzz");
    }, /THROW_ID_24/);
    t.end();
  }
);

tap.test("08 - getKeysetSync() - multiple levels of nested arrays", (t) => {
  t.strictSame(
    getKeysetSync([
      {
        key2: [
          {
            key5: "val5",
            key4: "val4",
            key6: [
              {
                key8: "val8",
              },
              {
                key7: "val7",
              },
            ],
          },
        ],
        key1: "val1",
      },
      {
        key1: false,
        key3: "val3",
      },
    ]),
    {
      key1: false,
      key2: [
        {
          key4: false,
          key5: false,
          key6: [
            {
              key7: false,
              key8: false,
            },
          ],
        },
      ],
      key3: false,
    },
    "08"
  );
  t.end();
});

tap.test("09 - getKeysetSync() - objects that are directly in values", (t) => {
  t.strictSame(
    getKeysetSync([
      {
        a: {
          b: "c",
          d: "e",
        },
        k: "l",
      },
      {
        a: {
          f: "g",
          b: "c",
          h: "i",
        },
        m: "n",
      },
    ]),
    {
      a: {
        b: false,
        d: false,
        f: false,
        h: false,
      },
      k: false,
      m: false,
    },
    "09.01"
  );
  t.strictSame(
    getKeysetSync([
      {
        a: {
          f: "g",
          b: "c",
          h: "i",
        },
        m: "n",
      },
      {
        a: {
          b: "c",
          d: "e",
        },
        k: "l",
      },
    ]),
    {
      a: {
        b: false,
        d: false,
        f: false,
        h: false,
      },
      k: false,
      m: false,
    },
    "09.02"
  );
  t.end();
});

tap.test(
  "10 - getKeysetSync() - deeper level arrays containing only strings",
  (t) => {
    t.strictSame(
      getKeysetSync([
        {
          a: false,
          b: {
            c: {
              d: ["eee"],
            },
          },
        },
        {
          a: false,
        },
      ]),
      {
        a: false,
        b: {
          c: {
            d: [],
          },
        },
      },
      "10"
    );
    t.end();
  }
);

tap.test(
  "11 - getKeysetSync() - deeper level array with string vs false",
  (t) => {
    t.strictSame(
      getKeysetSync([
        {
          a: false,
          b: {
            c: {
              d: ["eee"],
            },
          },
        },
        {
          a: false,
        },
      ]),
      {
        a: false,
        b: {
          c: {
            d: [],
          },
        },
      },
      "11 - if arrays contain any strings, result is empty array"
    );
    t.end();
  }
);

tap.test("12 - getKeysetSync() - two deeper level arrays with strings", (t) => {
  t.strictSame(
    getKeysetSync([
      {
        a: false,
        b: {
          c: {
            d: ["eee"],
          },
        },
      },
      {
        b: {
          c: {
            d: ["eee", "fff", "ggg"],
          },
        },
      },
    ]),
    {
      a: false,
      b: {
        c: {
          d: [],
        },
      },
    },
    "12 - if arrays contain any strings, result is empty array"
  );
  t.end();
});

tap.test(
  "13 - getKeysetSync() - two deeper level arrays with mixed contents",
  (t) => {
    t.strictSame(
      getKeysetSync([
        {
          a: false,
          b: {
            c: {
              d: ["eee"],
            },
          },
        },
        {
          b: {
            c: {
              d: [{ a: "zzz" }],
            },
          },
        },
      ]),
      {
        a: false,
        b: {
          c: {
            d: [{ a: false }],
          },
        },
      },
      "13 - plain object vs string"
    );
    t.end();
  }
);

tap.test(
  "14 - getKeysetSync() - two deeper level arrays with plain objects",
  (t) => {
    t.strictSame(
      getKeysetSync([
        {
          a: false,
          b: {
            c: {
              d: [{ a: "aaa" }],
            },
          },
        },
        {
          b: {
            c: {
              d: [{ b: "bbb", c: "ccc" }],
            },
          },
        },
        {
          b: {
            c: {
              d: false,
            },
          },
        },
        {
          b: {
            c: false,
          },
        },
      ]),
      {
        a: false,
        b: {
          c: {
            d: [{ a: false, b: false, c: false }],
          },
        },
      },
      "14.01 - object vs object"
    );
    t.strictSame(
      getKeysetSync([
        {
          a: false,
          b: {
            c: {
              d: [],
            },
          },
        },
        {
          b: {
            c: {
              d: [{ b: "bbb", c: "ccc" }],
            },
          },
        },
      ]),
      {
        a: false,
        b: {
          c: {
            d: [{ b: false, c: false }],
          },
        },
      },
      "14.02 - object vs object"
    );
    t.strictSame(
      getKeysetSync([
        {
          a: false,
          b: {
            c: {
              d: false,
            },
          },
        },
        {
          b: {
            c: {
              d: [{ b: "bbb", c: "ccc" }],
            },
          },
        },
      ]),
      {
        a: false,
        b: {
          c: {
            d: [{ b: false, c: false }],
          },
        },
      },
      "14.03 - object vs object"
    );
    t.strictSame(
      getKeysetSync([
        {
          a: false,
          b: {
            c: {
              d: "text",
            },
          },
        },
        {
          b: {
            c: {
              d: [{ b: "bbb", c: "ccc" }],
            },
          },
        },
      ]),
      {
        a: false,
        b: {
          c: {
            d: [{ b: false, c: false }],
          },
        },
      },
      "14.04 - object vs object"
    );
    t.end();
  }
);

// -----------------------------------------------------------------------------
// 02. enforceKeysetSync()
// -----------------------------------------------------------------------------

tap.test("15 - enforceKeysetSync() - enforces a simple schema", (t) => {
  const schema = getKeysetSync([
    {
      a: "aaa",
      b: "bbb",
    },
    {
      a: "ccc",
    },
  ]);
  t.strictSame(
    enforceKeysetSync(
      {
        a: "ccc",
      },
      schema
    ),
    {
      a: "ccc",
      b: false,
    },
    "15"
  );
  t.end();
});

tap.test("16 - enforceKeysetSync() - enforces a more complex schema", (t) => {
  const obj1 = {
    b: [
      {
        c: "ccc",
        d: "ddd",
      },
    ],
    a: "aaa",
  };
  const obj2 = {
    a: "ccc",
    e: "eee",
  };
  const obj3 = {
    a: "zzz",
  };
  const schema = getKeysetSync([obj1, obj2, obj3]);
  t.strictSame(
    schema,
    {
      a: false,
      b: [
        {
          c: false,
          d: false,
        },
      ],
      e: false,
    },
    "16.01 - .getKeysetSync"
  );
  t.strictSame(
    enforceKeysetSync(obj1, schema),
    {
      a: "aaa",
      b: [
        {
          c: "ccc",
          d: "ddd",
        },
      ],
      e: false,
    },
    "16.02 - .enforceKeysetSync"
  );
  t.strictSame(
    enforceKeysetSync(obj2, schema),
    {
      a: "ccc",
      b: [
        {
          c: false,
          d: false,
        },
      ],
      e: "eee",
    },
    "16.03 - .enforceKeysetSync"
  );
  t.strictSame(
    enforceKeysetSync(obj3, schema),
    {
      a: "zzz",
      b: [
        {
          c: false,
          d: false,
        },
      ],
      e: false,
    },
    "16.04 - .enforceKeysetSync"
  );
  t.end();
});

tap.test(
  "17 - enforceKeysetSync() - enforces a schema involving arrays",
  (t) => {
    const obj1 = {
      a: [
        {
          b: "b",
        },
      ],
    };
    const obj2 = {
      a: false,
    };
    const schema = getKeysetSync([obj1, obj2]);
    t.strictSame(
      schema,
      {
        a: [
          {
            b: false,
          },
        ],
      },
      "17.01 - .getKeysetSync"
    );
    t.strictSame(
      enforceKeysetSync(obj1, schema),
      {
        a: [
          {
            b: "b",
          },
        ],
      },
      "17.02 - .enforceKeysetSync"
    );
    t.strictSame(
      enforceKeysetSync(obj2, schema),
      {
        a: [
          {
            b: false,
          },
        ],
      },
      "17.03 - .enforceKeysetSync"
    );
    t.end();
  }
);

tap.test("18 - enforceKeysetSync() - another set involving arrays", (t) => {
  t.strictSame(
    prepArraySync([
      {
        c: "c val",
      },
      {
        b: [
          {
            b2: "b2 val",
            b1: "b1 val",
          },
        ],
        a: "a val",
      },
    ]),
    [
      {
        a: false,
        b: [
          {
            b1: false,
            b2: false,
          },
        ],
        c: "c val",
      },
      {
        a: "a val",
        b: [
          {
            b1: "b1 val",
            b2: "b2 val",
          },
        ],
        c: false,
      },
    ],
    "18"
  );
  t.end();
});

tap.test("19 - enforceKeysetSync() - deep-nested arrays", (t) => {
  t.strictSame(
    prepArraySync([
      {
        a: [
          {
            b: [
              {
                c: [
                  {
                    d: [
                      {
                        e: [
                          {
                            f: [
                              {
                                g: [
                                  {
                                    h: "h",
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        a: "zzz",
      },
    ]),
    [
      {
        a: [
          {
            b: [
              {
                c: [
                  {
                    d: [
                      {
                        e: [
                          {
                            f: [
                              {
                                g: [
                                  {
                                    h: "h",
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        a: [
          {
            b: [
              {
                c: [
                  {
                    d: [
                      {
                        e: [
                          {
                            f: [
                              {
                                g: [
                                  {
                                    h: false,
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    "19"
  );
  t.end();
});

tap.test(
  "20 - enforceKeysetSync() - enforces a schema involving arrays",
  (t) => {
    const obj1 = {
      a: [
        {
          b: "b",
        },
      ],
    };
    const obj2 = {
      a: "a",
    };
    const schema = getKeysetSync([obj1, obj2]);
    t.strictSame(
      schema,
      {
        a: [
          {
            b: false,
          },
        ],
      },
      "20.01 - .getKeysetSync"
    );
    t.strictSame(
      enforceKeysetSync(obj1, schema),
      {
        a: [
          {
            b: "b",
          },
        ],
      },
      "20.02 - .enforceKeysetSync"
    );
    t.strictSame(
      enforceKeysetSync(obj2, schema),
      {
        a: [
          {
            b: false,
          },
        ],
      },
      "20.03 - .enforceKeysetSync"
    );
    t.end();
  }
);

tap.test("21 - enforceKeysetSync() - multiple objects within an array", (t) => {
  t.strictSame(
    prepArraySync([
      {
        a: "a",
      },
      {
        a: [
          {
            d: "d",
          },
          {
            c: "c",
          },
          {
            a: "a",
          },
          {
            b: "b",
          },
        ],
      },
    ]),
    [
      {
        a: [
          {
            a: false,
            b: false,
            c: false,
            d: false,
          },
        ],
      },
      {
        a: [
          {
            a: false,
            b: false,
            c: false,
            d: "d",
          },
          {
            a: false,
            b: false,
            c: "c",
            d: false,
          },
          {
            a: "a",
            b: false,
            c: false,
            d: false,
          },
          {
            a: false,
            b: "b",
            c: false,
            d: false,
          },
        ],
      },
    ],
    "21"
  );
  t.end();
});

tap.test("22 - enforceKeysetSync() - multiple levels of arrays", (t) => {
  const obj1 = {
    b: [
      {
        e: [
          {
            f: "fff",
          },
          {
            g: "ggg",
          },
        ],
        d: "ddd",
        c: "ccc",
      },
    ],
    a: "aaa",
  };
  const obj2 = {
    c: "ccc",
    a: false,
  };
  t.strictSame(
    prepArraySync([obj1, obj2]),
    [
      {
        a: "aaa",
        b: [
          {
            c: "ccc",
            d: "ddd",
            e: [
              {
                f: "fff",
                g: false,
              },
              {
                f: false,
                g: "ggg",
              },
            ],
          },
        ],
        c: false,
      },
      {
        a: false,
        b: [
          {
            c: false,
            d: false,
            e: [
              {
                f: false,
                g: false,
              },
            ],
          },
        ],
        c: "ccc",
      },
    ],
    "22"
  );
  t.end();
});

tap.test("23 - enforceKeysetSync() - array vs string clashes", (t) => {
  t.strictSame(
    prepArraySync([
      {
        a: "aaa",
      },
      {
        a: [
          {
            b: "bbb",
          },
        ],
      },
    ]),
    [
      {
        a: [
          {
            b: false,
          },
        ],
      },
      {
        a: [
          {
            b: "bbb",
          },
        ],
      },
    ],
    "23"
  );
  t.end();
});

tap.test("24 - enforceKeysetSync() - all inputs missing - throws", (t) => {
  t.throws(() => {
    enforceKeysetSync();
  }, "24");
  t.end();
});

tap.test(
  "25 - enforceKeysetSync() - second input arg missing - throws",
  (t) => {
    t.throws(() => {
      enforceKeysetSync({ a: "a" });
    }, "25");
    t.end();
  }
);

tap.test(
  "26 - enforceKeysetSync() - second input arg is not a plain obj - throws",
  (t) => {
    t.throws(() => {
      enforceKeysetSync({ a: "a" }, "zzz");
    }, "26");
    t.end();
  }
);

tap.test(
  "27 - enforceKeysetSync() - first input arg is not a plain obj - throws",
  (t) => {
    t.throws(() => {
      enforceKeysetSync("zzz", "zzz");
    }, "27");
    t.end();
  }
);

tap.test("28 - enforceKeysetSync() - array over empty array", (t) => {
  const obj1 = {
    a: [
      {
        d: "d",
      },
      {
        e: "e",
      },
    ],
    c: "c",
  };
  const obj2 = {
    a: [],
    b: "b",
  };
  const schema = getKeysetSync([obj1, obj2]);
  t.strictSame(
    schema,
    {
      a: [
        {
          d: false,
          e: false,
        },
      ],
      b: false,
      c: false,
    },
    "28.01"
  );
  t.strictSame(
    enforceKeysetSync(obj1, schema),
    {
      a: [
        {
          d: "d",
          e: false,
        },
        {
          d: false,
          e: "e",
        },
      ],
      b: false,
      c: "c",
    },
    "28.02"
  );
  t.strictSame(
    enforceKeysetSync(obj2, schema),
    {
      a: [
        {
          d: false,
          e: false,
        },
      ],
      b: "b",
      c: false,
    },
    "28.03"
  );
  t.end();
});

tap.test("29 - enforceKeysetSync() - opts", (t) => {
  const schema = getKeysetSync([
    {
      a: "aaa",
      b: { c: "ccc" },
    },
    {
      a: "ddd",
      b: false,
    },
  ]);
  t.strictSame(
    enforceKeysetSync(
      {
        a: "zzz",
        b: false,
      },
      schema,
      {
        doNotFillThesePathsIfTheyContainPlaceholders: ["b"],
      }
    ),
    {
      a: "zzz",
      b: false,
    },
    "29"
  );
  t.end();
});

tap.test("30 - enforceKeysetSync() - opts", (t) => {
  const schema = getKeysetSync([
    {
      a: "aaa",
      b: { c: "ccc" },
    },
    {
      a: "ddd",
      b: false,
    },
  ]);
  t.strictSame(
    enforceKeysetSync(
      {
        a: "zzz",
      },
      schema,
      {
        doNotFillThesePathsIfTheyContainPlaceholders: ["b"],
      }
    ),
    {
      a: "zzz",
      b: false,
    },
    "30 - opts-targeted key is absent"
  );
  t.end();
});

tap.test("31 - enforceKeysetSync() - opts off", (t) => {
  const schema = getKeysetSync([
    {
      a: "aaa",
      b: { c: "ccc" },
    },
    {
      a: "ddd",
      b: false,
    },
  ]);
  t.strictSame(
    enforceKeysetSync(
      {
        a: "zzz",
      },
      schema,
      {
        doNotFillThesePathsIfTheyContainPlaceholders: [],
      }
    ),
    {
      a: "zzz",
      b: { c: false },
    },
    "31"
  );
  t.end();
});

tap.test(
  "32 - enforceKeysetSync() - opts.doNotFillThesePathsIfTheyContainPlaceholders is wrong",
  (t) => {
    t.throws(() => {
      enforceKeysetSync(
        { a: "a" },
        { a: "a", b: "b" },
        { doNotFillThesePathsIfTheyContainPlaceholders: 1 }
      );
    }, "32.01");
    t.throws(() => {
      enforceKeysetSync(
        { a: "a" },
        { a: "a", b: "b" },
        { doNotFillThesePathsIfTheyContainPlaceholders: [1] }
      );
    }, "32.02");
    t.end();
  }
);

tap.test("33 - enforceKeysetSync() - opts.useNullAsExplicitFalse", (t) => {
  const schema = getKeysetSync([
    {
      a: "aaa",
      b: "bbb",
    },
    {
      a: {
        c: "ccc",
      },
    },
  ]);
  t.strictSame(
    enforceKeysetSync(
      {
        a: null,
      },
      schema
    ),
    {
      a: null,
      b: false,
    },
    "33.01 - default behaviour"
  );
  t.strictSame(
    enforceKeysetSync(
      {
        a: null,
      },
      schema,
      { useNullAsExplicitFalse: false }
    ),
    {
      a: {
        c: false,
      },
      b: false,
    },
    "33.02 - off via opts"
  );
  t.end();
});

// -----------------------------------------------------------------------------
// 03. guards against input arg mutation
// -----------------------------------------------------------------------------

tap.test("34 - enforceKeysetSync() - does not mutate the input args", (t) => {
  const obj1 = {
    b: [
      {
        e: [
          {
            f: "fff",
          },
          {
            g: "ggg",
          },
        ],
        d: "ddd",
        c: "ccc",
      },
    ],
    a: "aaa",
  };
  const obj2 = {
    c: "ccc",
    a: false,
  };
  const dummyResult = enforceKeysetSync(obj2, getKeysetSync([obj1, obj2]));
  t.pass(dummyResult); // necessary to avoid unused vars
  t.strictSame(
    obj2,
    {
      c: "ccc",
      a: false,
    },
    "34.01"
  );
  t.end();
});

// -----------------------------------------------------------------------------
// 04. noNewKeysSync()
// -----------------------------------------------------------------------------

tap.test("35 - noNewKeysSync() - BAU", (t) => {
  t.strictSame(
    noNewKeysSync(
      {
        a: "a",
        c: "c",
      },
      {
        a: "aaa",
        b: "bbb",
        c: "ccc",
      }
    ),
    [],
    "35.01 - no new keys"
  );
  t.strictSame(
    noNewKeysSync(
      {
        a: "a",
        b: "b",
        c: "c",
      },
      {
        a: "aaa",
        c: "ccc",
      }
    ),
    ["b"],
    "35.02 - new key, b"
  );
  t.end();
});

tap.test("36 - noNewKeysSync() - objects within arrays within objects", (t) => {
  t.strictSame(
    noNewKeysSync(
      {
        z: [
          {
            a: "a",
            b: "b",
            c: "c",
          },
          {
            a: false,
            b: false,
            c: "c",
          },
        ],
      },
      {
        z: [
          {
            a: "a",
            b: "b",
            c: "c",
          },
          {
            a: false,
            b: false,
            c: "c",
          },
        ],
      }
    ),
    [],
    "36.01 - same key set, just values differ"
  );
  t.strictSame(
    noNewKeysSync(
      {
        z: [
          {
            a: "a",
            b: "b",
          },
          {
            a: false,
            b: false,
          },
        ],
      },
      {
        z: [
          {
            a: "a",
            b: "b",
            c: "c",
          },
          {
            a: false,
            b: false,
            c: "c",
          },
        ],
      }
    ),
    [],
    "36.02 - less keys"
  );
  t.strictSame(
    noNewKeysSync(
      {
        z: [
          {
            a: "a",
            b: "b",
            c: "c",
          },
          {
            a: false,
            b: false,
            c: "c",
          },
        ],
      },
      {
        z: [
          {
            a: "a",
            b: "b",
          },
          {
            a: false,
            b: false,
          },
        ],
      }
    ),
    ["z[0].c", "z[1].c"],
    "36.03 - key c"
  );
  t.end();
});

tap.test("37 - noNewKeysSync() - various throws", (t) => {
  t.throws(() => {
    noNewKeysSync();
  }, /THROW_ID_51/g);
  t.throws(() => {
    noNewKeysSync({ a: "a" });
  }, /THROW_ID_52/g);
  t.throws(() => {
    noNewKeysSync(1, { a: "a" });
  }, /THROW_ID_53/g);
  t.throws(() => {
    noNewKeysSync(["a"], ["a"]);
  }, /THROW_ID_53/g);
  t.throws(() => {
    noNewKeysSync({ a: "a" }, 1);
  }, /THROW_ID_54/g);
  t.end();
});

// -----------------------------------------------------------------------------
// 05. findUnusedSync()
// -----------------------------------------------------------------------------

tap.test("38 - findUnusedSync() - single-level plain objects", (t) => {
  t.strictSame(
    findUnusedSync([
      {
        a: false,
        b: "bbb1",
        c: false,
      },
      {
        a: "aaa",
        b: "bbb2",
        c: false,
      },
    ]),
    ["c"],
    "38.01 - running on defaults"
  );
  t.strictSame(
    findUnusedSync([
      {
        a: false,
        b: "bbb1",
        c: false,
      },
      {
        a: "aaa",
        b: "bbb2",
        c: false,
      },
      {},
    ]),
    ["c"],
    "38.02 - not normalised is fine as well"
  );
  t.end();
});

tap.test("39 - findUnusedSync() - multiple-level plain objects", (t) => {
  t.strictSame(
    findUnusedSync([
      {
        a: [
          {
            k: false,
            l: false,
            m: false,
          },
          {
            k: "k",
            l: false,
            m: "m",
          },
        ],
        b: "bbb1",
        c: false,
      },
      {
        a: [
          {
            k: "k",
            l: false,
            m: "m",
          },
          {
            k: "k",
            l: false,
            m: "m",
          },
        ],
        b: "bbb2",
        c: false,
      },
    ]),
    ["c", "a[0].l"],
    "39.01 - multiple levels, two objects, two unused keys, defaults"
  );
  t.strictSame(
    findUnusedSync([
      {
        a: [
          {
            k: false,
            l: false,
            m: false,
          },
          {
            k: "k",
            l: false,
            m: "m",
          },
        ],
        b: "bbb1",
        c: false,
      },
      {
        a: [
          {
            k: "k",
            l: false,
            m: "m",
          },
          {
            k: "k",
            l: false,
            m: "m",
          },
        ],
        b: "bbb2",
        c: false,
      },
      { b: false },
      { c: false },
    ]),
    ["c", "a[0].l"],
    "39.02 - not normalised, see third and fourth args, not normalised objects"
  );
  t.end();
});

tap.test("40 - findUnusedSync() - double-nested arrays", (t) => {
  t.strictSame(
    findUnusedSync([
      {
        a: [
          [
            {
              k: false,
              l: false,
              m: false,
            },
            {
              k: "k",
              l: false,
              m: "m",
            },
          ],
        ],
        b: "bbb1",
        c: false,
      },
      {
        a: [
          [
            {
              k: false,
              l: "l",
              m: "m",
            },
            {
              k: false,
              l: "l",
              m: "m",
            },
          ],
        ],
        b: "bbb2",
        c: false,
      },
    ]),
    ["c", "a[0][0].l", "a[0][1].k"],
    "40.01"
  );
  t.strictSame(
    findUnusedSync([
      {
        a: [
          [
            {
              k: false,
              l: false,
              m: false,
            },
            {
              k: "k",
              l: false,
              m: "m",
            },
          ],
        ],
        b: "bbb1",
        c: false,
      },
      {
        a: [
          [
            {
              k: false,
              l: "l",
              m: "m",
            },
            {
              k: false,
              l: "l",
              m: "m",
            },
          ],
        ],
        b: "bbb2",
        c: false,
      },
      {
        a: false,
      },
    ]),
    ["c", "a[0][0].l", "a[0][1].k"],
    "40.02 - value false vs values as arrays - in the context of unused-ness"
  );
  t.end();
});

tap.test("41 - findUnusedSync() - works on empty arrays", (t) => {
  t.strictSame(findUnusedSync([]), [], "41.01");
  t.strictSame(findUnusedSync([{}]), [], "41.02");
  t.strictSame(findUnusedSync([{}, {}]), [], "41.03");
  t.end();
});

tap.test("42 - findUnusedSync() - various throws", (t) => {
  t.throws(() => {
    findUnusedSync(1, { placeholder: false });
  }, "42.01");
  t.doesNotThrow(() => {
    findUnusedSync([1, 2, 3]);
  }, "42.02");
  t.throws(() => {
    findUnusedSync([{ a: "a" }, { a: "b" }], 1);
  }, "42.03");
  t.end();
});

tap.test("43 - findUnusedSync() - case of empty array within an array", (t) => {
  t.strictSame(
    findUnusedSync([
      {
        a: [[]],
        b: "bbb1",
        c: false,
      },
      {
        a: [[]],
        b: "bbb2",
        c: false,
      },
    ]),
    ["c"],
    "43.01 - normal"
  );
  t.strictSame(
    findUnusedSync([
      {
        a: [[]],
        b: "bbb1",
        c: false,
      },
      {
        a: [[]],
        b: "bbb2",
        c: false,
      },
      {},
      {},
    ]),
    ["c"],
    "43.02 - not normalised"
  );
  t.end();
});

tap.test("44 - findUnusedSync() - case of empty array within an array", (t) => {
  t.strictSame(
    findUnusedSync([
      {
        a: [[]],
        b: "bbb1",
        c: false,
      },
    ]),
    [],
    "44.01 - normalised"
  );
  t.strictSame(
    findUnusedSync([
      {
        a: [[]],
        b: "bbb1",
        c: false,
      },
      {},
      { a: false },
    ]),
    ["c"],
    "44.02 - not normalised. Now that there are three inputs (even two of them empty-ish) result is the key c"
  );
  t.end();
});

tap.test(
  "45 - findUnusedSync() - objects containing objects (2 in total)",
  (t) => {
    t.strictSame(
      findUnusedSync([
        {
          a: {
            x: false,
            y: "y",
          },
          b: "bbb1",
          c: false,
        },
        {
          a: {
            x: false,
            y: "z",
          },
          b: "bbb2",
          c: false,
        },
      ]),
      ["c", "a.x"],
      "45.01"
    );
    t.strictSame(
      findUnusedSync([
        {
          a: {
            x: false,
            y: "y",
          },
          b: "bbb1",
          c: false,
          d: {
            y: "y",
            x: false,
          },
          e: false,
        },
        {
          a: {
            x: false,
            y: "z",
          },
          b: "bbb2",
          c: false,
          d: {
            y: "y",
            x: false,
          },
          e: false,
        },
      ]),
      ["c", "e", "a.x", "d.x"],
      "45.02"
    );
    t.strictSame(
      findUnusedSync([
        {
          a: {
            x: false,
            y: "y",
          },
          b: "bbb1",
          c: false,
          d: {
            y: "y",
            x: false,
          },
          e: false,
        },
        {
          a: {
            x: false,
            y: "z",
          },
          b: "bbb2",
          c: false,
          d: {
            y: "y",
            x: false,
          },
          e: false,
        },
        { c: false },
      ]),
      ["c", "e", "a.x", "d.x"],
      "45.03 - not normalised"
    );
    t.end();
  }
);

tap.test(
  "46 - findUnusedSync() - objects containing objects (3 in total)",
  (t) => {
    t.strictSame(
      findUnusedSync([
        {
          a: {
            x: false,
            y: "y",
            k: {
              l: false,
              m: "zzz",
            },
          },
          b: "bbb1",
          c: false,
        },
        {
          a: {
            x: false,
            y: "z",
            k: {
              l: false,
              m: "yyy",
            },
          },
          b: "bbb2",
          c: false,
        },
      ]),
      ["c", "a.x", "a.k.l"],
      "46.01 - normalised, on default placeholder"
    );
    t.strictSame(
      findUnusedSync([
        {
          a: {
            x: false,
            y: "y",
            k: {
              l: false,
              m: "zzz",
            },
          },
          b: "bbb1",
          c: false,
        },
        {
          a: {
            x: false,
            y: "z",
            k: {
              l: false,
              m: "yyy",
            },
          },
          b: "bbb2",
          c: false,
        },
        {},
        { c: false },
      ]),
      ["c", "a.x", "a.k.l"],
      "46.02 - not normalised, on default placeholder"
    );
    t.end();
  }
);

tap.test(
  "47 - findUnusedSync() - objects containing objects, mixed with arrays",
  (t) => {
    t.strictSame(
      findUnusedSync([
        {
          a: {
            x: false,
            y: "y",
            k: {
              l: false,
              m: "zzz",
              p: {
                r: [
                  {
                    w: false,
                    x: "zzz",
                  },
                  {
                    w: false,
                    x: "zzz",
                  },
                ],
              },
            },
          },
          b: "bbb1",
          c: false,
        },
        {
          a: {
            x: false,
            y: "z",
            k: {
              l: false,
              m: false,
              p: {
                r: [
                  {
                    w: "www",
                    x: false,
                  },
                  {
                    w: "zzz",
                    x: false,
                  },
                ],
              },
            },
          },
          b: "bbb2",
          c: false,
        },
      ]),
      ["c", "a.x", "a.k.l"],
      "47.01"
    );
    t.strictSame(
      findUnusedSync([
        {
          a: {
            x: false,
            y: "y",
            k: {
              l: false,
              m: "zzz",
              p: {
                r: [
                  {
                    w: "xxx",
                    x: false,
                  },
                  {
                    w: "w2",
                    x: false,
                  },
                ],
              },
            },
          },
          b: "bbb1",
          c: false,
        },
        {
          a: {
            x: false,
            y: "z",
            k: {
              l: false,
              m: false,
              p: {
                r: [
                  {
                    w: "www",
                    x: false,
                  },
                  {
                    w: "zzz",
                    x: false,
                  },
                ],
              },
            },
          },
          b: "bbb2",
          c: false,
        },
      ]),
      ["c", "a.x", "a.k.l", "a.k.p.r[0].x"],
      "47.02 - even deeper"
    );
    t.strictSame(
      findUnusedSync([
        {
          a: {
            x: false,
            y: "y",
            k: {
              l: false,
              m: "zzz",
              p: {
                r: [
                  {
                    w: "xxx",
                    x: false,
                  },
                  {
                    w: "w2",
                    x: false,
                  },
                ],
              },
            },
          },
          b: "bbb1",
          c: false,
        },
        {
          a: {
            x: false,
            y: "z",
            k: {
              l: false,
              m: false,
              p: {
                r: [
                  {
                    w: "www",
                    x: false,
                  },
                  {
                    w: "zzz",
                    x: false,
                  },
                  {},
                ],
              },
            },
          },
          b: "bbb2",
          c: false,
        },
        {},
      ]),
      ["c", "a.x", "a.k.l", "a.k.p.r[0].x"],
      "47.03 - even deeper plus not normalised in deeper levels"
    );
    t.end();
  }
);

tap.test(
  "48 - findUnusedSync() - array contents are not objects/arrays",
  (t) => {
    t.strictSame(
      findUnusedSync([false, false, false]),
      [],
      "48.01 - topmost level, Booleans"
    );
    t.strictSame(
      findUnusedSync(["zzz", "zzz", "zzz"]),
      [],
      "48.02 - topmost level, strings"
    );
    t.strictSame(
      findUnusedSync([{}, {}, {}]),
      [],
      "48.03 - topmost level, empty plain objects"
    );
    t.end();
  }
);

tap.test(
  "49 - findUnusedSync() - array > single object > array > unused inside",
  (t) => {
    t.strictSame(
      findUnusedSync([
        {
          a: [
            {
              k: false,
              l: "l1",
            },
            {
              k: false,
              l: "l2",
            },
            {
              k: false,
              l: false,
            },
            {
              k: false,
              l: "l4",
            },
          ],
          b: "b",
        },
      ]),
      ["a[0].k"],
      "49.01 - topmost array has a single object"
    );
    t.strictSame(
      findUnusedSync([
        {
          a: [
            {
              k: false,
              l: "l1",
            },
            {
              k: false,
              l: "l2",
            },
            {
              k: false,
              l: false,
            },
            {
              k: false,
              l: "l4",
            },
          ],
          b: "b",
        },
        {
          a: [
            {
              k: false,
              l: "l1",
            },
            {
              k: false,
              l: "l2",
            },
            {
              k: false,
              l: false,
            },
            {
              k: false,
              l: "l4",
            },
          ],
          b: "b",
        },
      ]),
      ["a[0].k"],
      "49.02 - topmost array has multiple objects"
    );
    t.end();
  }
);

tap.test("50 - findUnusedSync() - simple case of not normalised input", (t) => {
  t.strictSame(
    findUnusedSync([
      {
        a: false,
        b: false,
        c: "c",
      },
      {
        a: false,
        b: false,
        c: "c",
      },
      {
        c: "c",
      },
    ]),
    ["a", "b"],
    "50 - default placeholder"
  );
  t.end();
});

tap.test("51 - findUnusedSync() - opts.comments", (t) => {
  t.strictSame(
    findUnusedSync([
      {
        a: false,
        b: "bbb1",
        b__comment__this_is_a_comment_for_key_b: false,
        c: false,
      },
      {
        a: "aaa",
        b: "bbb2",
        b__comment__this_is_a_comment_for_key_b: false,
        c: false,
      },
    ]),
    ["c"],
    "51.01 - defaults recognise the comment substring within the key"
  );
  t.strictSame(
    findUnusedSync(
      [
        {
          a: false,
          b: "bbb1",
          b__comment__this_is_a_comment_for_key_b: false,
          c: false,
        },
        {
          a: "aaa",
          b: "bbb2",
          b__comment__this_is_a_comment_for_key_b: false,
          c: false,
        },
      ],
      { comments: "zzz" }
    ),
    ["b__comment__this_is_a_comment_for_key_b", "c"],
    "51.02 - ignores comment fields because they match default value"
  );
  t.strictSame(
    findUnusedSync(
      [
        {
          a: false,
          b: "bbb1",
          b__comment__this_is_a_comment_for_key_b: false,
          c: false,
        },
        {
          a: "aaa",
          b: "bbb2",
          b__comment__this_is_a_comment_for_key_b: false,
          c: false,
        },
      ],
      { comments: false }
    ),
    ["b__comment__this_is_a_comment_for_key_b", "c"],
    "51.03 - falsey opts.comments - instruction to turn it off"
  );
  t.strictSame(
    findUnusedSync(
      [
        {
          a: false,
          b: "bbb1",
          b__comment__this_is_a_comment_for_key_b: false,
          c: false,
        },
        {
          a: "aaa",
          b: "bbb2",
          b__comment__this_is_a_comment_for_key_b: false,
          c: false,
        },
      ],
      { comments: 0 }
    ),
    ["b__comment__this_is_a_comment_for_key_b", "c"],
    "51.04 - falsey opts.comments - instruction to turn it off"
  );
  t.strictSame(
    findUnusedSync(
      [
        {
          a: false,
          b: "bbb1",
          b__comment__this_is_a_comment_for_key_b: false,
          c: false,
        },
        {
          a: "aaa",
          b: "bbb2",
          b__comment__this_is_a_comment_for_key_b: false,
          c: false,
        },
      ],
      { comments: null }
    ),
    ["b__comment__this_is_a_comment_for_key_b", "c"],
    "51.05 - falsey opts.comments - instruction to turn it off"
  );
  t.strictSame(
    findUnusedSync(
      [
        {
          a: false,
          b: "bbb1",
          b__comment__this_is_a_comment_for_key_b: false,
          c: false,
        },
        {
          a: "aaa",
          b: "bbb2",
          b__comment__this_is_a_comment_for_key_b: false,
          c: false,
        },
      ],
      { comments: undefined }
    ),
    ["b__comment__this_is_a_comment_for_key_b", "c"],
    "51.06 - falsey opts.comments - instruction to turn it off"
  );
  t.strictSame(
    findUnusedSync(
      [
        {
          a: false,
          b: "bbb1",
          b__comment__this_is_a_comment_for_key_b: false,
          c: false,
        },
        {
          a: "aaa",
          b: "bbb2",
          b__comment__this_is_a_comment_for_key_b: false,
          c: false,
        },
      ],
      { comments: "" }
    ),
    ["b__comment__this_is_a_comment_for_key_b", "c"],
    "51.07 - falsey opts.comments - instruction to turn it off"
  );
  t.end();
});

// -----------------------------------------------------------------------------
// 06. sortAllObjectsSync()
// -----------------------------------------------------------------------------

tap.test("52 - sortAllObjectsSync() - plain object", (t) => {
  let original = {
    a: "a",
    c: "c",
    b: "b",
  };
  let sorted = {
    a: "a",
    b: "b",
    c: "c",
  };
  t.notDeepEqual(JSON.stringify(original), JSON.stringify(sorted)); // control
  t.strictSame(
    JSON.stringify(sortAllObjectsSync(original)),
    JSON.stringify(sorted),
    "52.01"
  ); // test
  t.end();
});

tap.test("53 - sortAllObjectsSync() - non-sortable input types", (t) => {
  t.strictSame(sortAllObjectsSync(null), null, "53.01");
  t.strictSame(sortAllObjectsSync(1), 1, "53.02");
  t.strictSame(sortAllObjectsSync("zzz"), "zzz", "53.03");
  t.strictSame(sortAllObjectsSync(undefined), undefined, "53.04");
  const f = (a) => a;
  t.strictSame(sortAllObjectsSync(f), f, "53.05");
  t.end();
});

tap.test("54 - sortAllObjectsSync() - object-array-object", (t) => {
  t.strictSame(
    sortAllObjectsSync({
      a: "a",
      c: [
        {
          m: "m",
          l: "l",
          k: "k",
        },
        {
          s: "s",
          r: "r",
          p: "p",
        },
      ],
      b: "b",
    }),
    {
      a: "a",
      b: "b",
      c: [
        {
          k: "k",
          l: "l",
          m: "m",
        },
        {
          p: "p",
          r: "r",
          s: "s",
        },
      ],
    },
    "54"
  );
  t.end();
});

tap.test("55 - sortAllObjectsSync() - object very deep", (t) => {
  t.strictSame(
    sortAllObjectsSync({
      a: [
        [
          [
            [
              [
                [
                  [
                    [
                      [
                        [
                          [
                            [
                              [
                                [
                                  {
                                    b: {
                                      c: [
                                        [
                                          [
                                            [
                                              [
                                                [
                                                  {
                                                    n: "kdjfsjf;j",
                                                    m: "flslfjlsjdf",
                                                  },
                                                ],
                                              ],
                                            ],
                                          ],
                                        ],
                                      ],
                                    },
                                  },
                                ],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
        ],
      ],
    }),
    {
      a: [
        [
          [
            [
              [
                [
                  [
                    [
                      [
                        [
                          [
                            [
                              [
                                [
                                  {
                                    b: {
                                      c: [
                                        [
                                          [
                                            [
                                              [
                                                [
                                                  {
                                                    m: "flslfjlsjdf",
                                                    n: "kdjfsjf;j",
                                                  },
                                                ],
                                              ],
                                            ],
                                          ],
                                        ],
                                      ],
                                    },
                                  },
                                ],
                              ],
                            ],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
        ],
      ],
    },
    "55"
  );
  t.end();
});

tap.test("56 - sortAllObjectsSync() - nested case", (t) => {
  let original = {
    b: "bbb",
    a: [
      {
        z: "fdggdfg",
        m: "gdfgdf",
        a: "asdasd",
      },
    ],
    c: "ccc",
  };
  let sorted = {
    a: [
      {
        a: "asdasd",
        m: "gdfgdf",
        z: "fdggdfg",
      },
    ],
    b: "bbb",
    c: "ccc",
  };
  t.notDeepEqual(JSON.stringify(original), JSON.stringify(sorted), "06.05.01"); // control
  t.strictSame(
    JSON.stringify(sortAllObjectsSync(original)),
    JSON.stringify(sorted),
    "56.01"
  );
  t.end();
});

tap.test("57 - sortAllObjectsSync() - nested case", (t) => {
  const original = {
    lastRan: 6,
    lastPublished: 5,
    "1.1.10": 2,
    "1.1.9": 1,
    "1.2.1": 4,
    "1.2.0": 3,
  };
  const res = `{
  "1.1.9": 1,
  "1.1.10": 2,
  "1.2.0": 3,
  "1.2.1": 4,
  "lastPublished": 5,
  "lastRan": 6
}`;

  t.equal(JSON.stringify(sortAllObjectsSync(original), null, 2), res, "57");
  t.end();
});

// -----------------------------------------------------------------------------
// 07. input arg mutation tests
// -----------------------------------------------------------------------------

/* eslint prefer-const:0 */
// we deliberately use VAR to "allow" mutation. In theory, of course, because it does not happen.

tap.test("58 - does not mutate input args: enforceKeysetSync()", (t) => {
  let source = {
    a: "a",
  };
  let frozen = {
    a: "a",
  };
  let dummyResult = enforceKeysetSync(source, { a: false, b: false });
  t.pass(dummyResult); // a mickey assertion to trick the Standard
  t.equal(JSON.stringify(source), JSON.stringify(frozen), "58.01");
  t.end();
});

tap.test("59 - does not mutate input args: noNewKeysSync()", (t) => {
  let source = {
    a: "a",
  };
  let frozen = {
    a: "a",
  };
  let dummyResult = noNewKeysSync(source, { a: false, b: false });
  t.pass(dummyResult); // a mickey assertion to trick ESLint to think it's used
  t.equal(JSON.stringify(source), JSON.stringify(frozen), "59.01");
  t.end();
});

tap.test("60 - does not mutate input args: sortAllObjectsSync()", (t) => {
  let source = {
    a: "a",
    c: "c",
    b: "b",
  };
  let frozen = {
    a: "a",
    c: "c",
    b: "b",
  };
  let dummyResult = sortAllObjectsSync(source); // let's try to mutate "source"
  t.pass(dummyResult); // a mickey assertion to trick ESLint to think it's used
  t.equal(JSON.stringify(source), JSON.stringify(frozen), "60.01");
  t.end();
});

// -----------------------------------------------------------------------------
// 08. getKeyset()  - async version of getKeysetSync()
// -----------------------------------------------------------------------------

tap.test("61 - getKeyset() - throws when there's no input", (t) => {
  t.throws(() => {
    getKeyset();
  }, "61");
  t.end();
});

tap.test(
  "62 - getKeyset() - throws when input is not an array of promises",
  (t) => {
    t.throws(() => {
      getKeyset(makePromise("aa"));
    }, "62");
    t.end();
  }
);

tap.test(
  "63 - getKeyset() - resolves to a rejected promise when input array contains not only plain objects",
  async (t) => {
    await getKeyset(
      makePromise([
        {
          a: "a",
          b: "b",
        },
        {
          a: "a",
        },
        "zzzz", // <----- problem!
      ])
    )
      .then(() => {
        t.fail("not ok");
      })
      .catch(() => {
        t.pass("ok");
      });
    t.end();
  }
);

tap.test(
  "64 - getKeyset() - calculates - three objects - default placeholder",
  async (t) => {
    t.strictSame(
      await getKeyset(
        makePromise([
          {
            a: "a",
            b: "c",
            c: {
              d: "d",
              e: "e",
            },
          },
          {
            a: "a",
          },
          {
            c: {
              f: "f",
            },
          },
        ])
      ),
      {
        a: false,
        b: false,
        c: {
          d: false,
          e: false,
          f: false,
        },
      },
      "64"
    );
    t.end();
  }
);

tap.test(
  "65 - getKeyset() - calculates - three objects - custom placeholder",
  async (t) => {
    t.strictSame(
      await getKeyset(
        [
          {
            a: "a",
            b: "c",
            c: {
              d: "d",
              e: "e",
            },
          },
          {
            a: "a",
          },
          {
            c: {
              f: "f",
            },
          },
        ],
        { placeholder: true }
      ),
      {
        a: true,
        b: true,
        c: {
          d: true,
          e: true,
          f: true,
        },
      },
      "65.01"
    );

    t.strictSame(
      await getKeyset(
        [
          {
            a: "a",
            b: "c",
            c: {
              d: "d",
              e: "e",
            },
          },
          {
            a: "a",
          },
          {
            c: {
              f: "f",
            },
          },
        ],
        { placeholder: "" }
      ),
      {
        a: "",
        b: "",
        c: {
          d: "",
          e: "",
          f: "",
        },
      },
      "65.02"
    );

    t.strictSame(
      await getKeyset(
        [
          {
            a: "a",
            b: "c",
            c: {
              d: "d",
              e: "e",
            },
          },
          {
            a: "a",
          },
          {
            c: {
              f: "f",
            },
          },
        ],
        { placeholder: { a: "a" } }
      ),
      {
        a: { a: "a" },
        b: { a: "a" },
        c: {
          d: { a: "a" },
          e: { a: "a" },
          f: { a: "a" },
        },
      },
      "65.03"
    );
    t.end();
  }
);

tap.test(
  "66 - getKeyset() - settings argument is not a plain object - throws",
  (t) => {
    t.throws(() => {
      getKeyset([{ a: "a" }, { b: "b" }], "zzz");
    }, /THROW_ID_12/);
    t.end();
  }
);

tap.test("67 - getKeyset() - multiple levels of nested arrays", async (t) => {
  t.strictSame(
    await getKeyset([
      {
        key2: [
          {
            key5: "val5",
            key4: "val4",
            key6: [
              {
                key8: "val8",
              },
              {
                key7: "val7",
              },
            ],
          },
        ],
        key1: "val1",
      },
      {
        key1: false,
        key3: "val3",
      },
    ]),
    {
      key1: false,
      key2: [
        {
          key4: false,
          key5: false,
          key6: [
            {
              key7: false,
              key8: false,
            },
          ],
        },
      ],
      key3: false,
    },
    "67"
  );
  t.end();
});

tap.test(
  "68 - getKeyset() - objects that are directly in values",
  async (t) => {
    t.strictSame(
      await getKeyset([
        {
          a: {
            b: "c",
            d: "e",
          },
          k: "l",
        },
        {
          a: {
            f: "g",
            b: "c",
            h: "i",
          },
          m: "n",
        },
      ]),
      {
        a: {
          b: false,
          d: false,
          f: false,
          h: false,
        },
        k: false,
        m: false,
      },
      "68.01"
    );
    t.strictSame(
      await getKeyset([
        {
          a: {
            f: "g",
            b: "c",
            h: "i",
          },
          m: "n",
        },
        {
          a: {
            b: "c",
            d: "e",
          },
          k: "l",
        },
      ]),
      {
        a: {
          b: false,
          d: false,
          f: false,
          h: false,
        },
        k: false,
        m: false,
      },
      "68.02"
    );
    t.end();
  }
);

tap.test(
  "69 - getKeyset() - deeper level arrays containing only strings",
  async (t) => {
    t.strictSame(
      await getKeyset([
        {
          a: false,
          b: {
            c: {
              d: ["eee"],
            },
          },
        },
        {
          a: false,
        },
      ]),
      {
        a: false,
        b: {
          c: {
            d: [],
          },
        },
      },
      "69"
    );
    t.end();
  }
);

tap.test(
  "70 - getKeyset() - deeper level array with string vs false",
  async (t) => {
    t.strictSame(
      await getKeyset([
        {
          a: false,
          b: {
            c: {
              d: ["eee"],
            },
          },
        },
        {
          a: false,
        },
      ]),
      {
        a: false,
        b: {
          c: {
            d: [],
          },
        },
      },
      "70 - if arrays contain any strings, result is empty array"
    );
    t.end();
  }
);

tap.test(
  "71 - getKeyset() - two deeper level arrays with strings",
  async (t) => {
    t.strictSame(
      await getKeyset([
        {
          a: false,
          b: {
            c: {
              d: ["eee"],
            },
          },
        },
        {
          b: {
            c: {
              d: ["eee", "fff", "ggg"],
            },
          },
        },
      ]),
      {
        a: false,
        b: {
          c: {
            d: [],
          },
        },
      },
      "71 - if arrays contain any strings, result is empty array"
    );
    t.end();
  }
);

tap.test(
  "72 - getKeyset() - two deeper level arrays with mixed contents",
  async (t) => {
    t.strictSame(
      await getKeyset([
        {
          a: false,
          b: {
            c: {
              d: ["eee"],
            },
          },
        },
        {
          b: {
            c: {
              d: [{ a: "zzz" }],
            },
          },
        },
      ]),
      {
        a: false,
        b: {
          c: {
            d: [{ a: false }],
          },
        },
      },
      "72 - plain object vs string"
    );
    t.end();
  }
);

tap.test(
  "73 - getKeyset() - two deeper level arrays with plain objects",
  async (t) => {
    t.strictSame(
      await getKeyset([
        {
          a: false,
          b: {
            c: {
              d: [{ a: "aaa" }],
            },
          },
        },
        {
          b: {
            c: {
              d: [{ b: "bbb", c: "ccc" }],
            },
          },
        },
        {
          b: {
            c: {
              d: false,
            },
          },
        },
        {
          b: {
            c: false,
          },
        },
      ]),
      {
        a: false,
        b: {
          c: {
            d: [{ a: false, b: false, c: false }],
          },
        },
      },
      "73.01 - object vs object"
    );
    t.strictSame(
      await getKeyset([
        {
          a: false,
          b: {
            c: {
              d: [],
            },
          },
        },
        {
          b: {
            c: {
              d: [{ b: "bbb", c: "ccc" }],
            },
          },
        },
      ]),
      {
        a: false,
        b: {
          c: {
            d: [{ b: false, c: false }],
          },
        },
      },
      "73.02 - object vs object"
    );
    t.strictSame(
      await getKeyset([
        {
          a: false,
          b: {
            c: {
              d: false,
            },
          },
        },
        {
          b: {
            c: {
              d: [{ b: "bbb", c: "ccc" }],
            },
          },
        },
      ]),
      {
        a: false,
        b: {
          c: {
            d: [{ b: false, c: false }],
          },
        },
      },
      "73.03 - object vs object"
    );
    t.strictSame(
      await getKeyset([
        {
          a: false,
          b: {
            c: {
              d: "text",
            },
          },
        },
        {
          b: {
            c: {
              d: [{ b: "bbb", c: "ccc" }],
            },
          },
        },
      ]),
      {
        a: false,
        b: {
          c: {
            d: [{ b: false, c: false }],
          },
        },
      },
      "73.04 - object vs object"
    );
    t.end();
  }
);

// -----------------------------------------------------------------------------
// 09. enforceKeyset()
// -----------------------------------------------------------------------------

tap.test("74 - enforceKeyset() - enforces a simple schema", async (t) => {
  const schema = await getKeyset([
    {
      a: "aaa",
      b: "bbb",
    },
    {
      a: "ccc",
    },
  ]);
  t.strictSame(
    await enforceKeyset(
      {
        a: "ccc",
      },
      schema
    ),
    {
      a: "ccc",
      b: false,
    },
    "74"
  );
  t.end();
});

tap.test("75 - enforceKeyset() - enforces a more complex schema", async (t) => {
  const obj1 = {
    b: [
      {
        c: "ccc",
        d: "ddd",
      },
    ],
    a: "aaa",
  };
  const obj2 = {
    a: "ccc",
    e: "eee",
  };
  const obj3 = {
    a: "zzz",
  };
  const schema = await getKeyset([obj1, obj2, obj3]);
  t.strictSame(
    schema,
    {
      a: false,
      b: [
        {
          c: false,
          d: false,
        },
      ],
      e: false,
    },
    "75.01 - .getKeyset itself"
  );
  t.strictSame(
    await enforceKeyset(obj1, schema),
    {
      a: "aaa",
      b: [
        {
          c: "ccc",
          d: "ddd",
        },
      ],
      e: false,
    },
    "75.02 - .enforceKeyset"
  );
  t.strictSame(
    await enforceKeyset(obj2, schema),
    {
      a: "ccc",
      b: [
        {
          c: false,
          d: false,
        },
      ],
      e: "eee",
    },
    "75.03 - .enforceKeyset"
  );
  t.strictSame(
    await enforceKeyset(obj3, schema),
    {
      a: "zzz",
      b: [
        {
          c: false,
          d: false,
        },
      ],
      e: false,
    },
    "75.04 - .enforceKeyset"
  );
  t.end();
});

tap.test(
  "76 - enforceKeyset() - enforces a schema involving arrays",
  async (t) => {
    const obj1 = {
      a: [
        {
          b: "b",
        },
      ],
    };
    const obj2 = {
      a: false,
    };
    const schema = await getKeyset([obj1, obj2]);
    t.strictSame(
      schema,
      {
        a: [
          {
            b: false,
          },
        ],
      },
      "76.01 - .getKeyset"
    );
    t.strictSame(
      await enforceKeyset(obj1, schema),
      {
        a: [
          {
            b: "b",
          },
        ],
      },
      "76.02 - .enforceKeyset"
    );
    t.strictSame(
      await enforceKeyset(obj2, schema),
      {
        a: [
          {
            b: false,
          },
        ],
      },
      "76.03 - .enforceKeyset"
    );
    t.end();
  }
);

tap.test("77 - enforceKeyset() - another set involving arrays", async (t) => {
  t.strictSame(
    await prepArray(
      makePromise([
        {
          c: "c val",
        },
        {
          b: [
            {
              b2: "b2 val",
              b1: "b1 val",
            },
          ],
          a: "a val",
        },
      ])
    ),
    [
      {
        a: false,
        b: [
          {
            b1: false,
            b2: false,
          },
        ],
        c: "c val",
      },
      {
        a: "a val",
        b: [
          {
            b1: "b1 val",
            b2: "b2 val",
          },
        ],
        c: false,
      },
    ],
    "77"
  );
  t.end();
});

tap.test("78 - enforceKeyset() - deep-nested arrays", async (t) => {
  t.strictSame(
    await prepArray([
      {
        a: [
          {
            b: [
              {
                c: [
                  {
                    d: [
                      {
                        e: [
                          {
                            f: [
                              {
                                g: [
                                  {
                                    h: "h",
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        a: "zzz",
      },
    ]),
    [
      {
        a: [
          {
            b: [
              {
                c: [
                  {
                    d: [
                      {
                        e: [
                          {
                            f: [
                              {
                                g: [
                                  {
                                    h: "h",
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        a: [
          {
            b: [
              {
                c: [
                  {
                    d: [
                      {
                        e: [
                          {
                            f: [
                              {
                                g: [
                                  {
                                    h: false,
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    "78"
  );
  t.end();
});

tap.test(
  "79 - enforceKeyset() - enforces a schema involving arrays",
  async (t) => {
    const obj1 = {
      a: [
        {
          b: "b",
        },
      ],
    };
    const obj2 = {
      a: "a",
    };
    const schema = await getKeyset([obj1, obj2]);
    t.strictSame(
      schema,
      {
        a: [
          {
            b: false,
          },
        ],
      },
      "79.01 - .getKeyset"
    );
    t.strictSame(
      await enforceKeyset(obj1, schema),
      {
        a: [
          {
            b: "b",
          },
        ],
      },
      "79.02 - .enforceKeyset"
    );
    t.strictSame(
      await enforceKeyset(obj2, schema),
      {
        a: [
          {
            b: false,
          },
        ],
      },
      "79.03 - .enforceKeyset"
    );
    t.end();
  }
);

tap.test(
  "80 - enforceKeyset() - multiple objects within an array",
  async (t) => {
    t.strictSame(
      await prepArray([
        {
          a: "a",
        },
        {
          a: [
            {
              d: "d",
            },
            {
              c: "c",
            },
            {
              a: "a",
            },
            {
              b: "b",
            },
          ],
        },
      ]),
      [
        {
          a: [
            {
              a: false,
              b: false,
              c: false,
              d: false,
            },
          ],
        },
        {
          a: [
            {
              a: false,
              b: false,
              c: false,
              d: "d",
            },
            {
              a: false,
              b: false,
              c: "c",
              d: false,
            },
            {
              a: "a",
              b: false,
              c: false,
              d: false,
            },
            {
              a: false,
              b: "b",
              c: false,
              d: false,
            },
          ],
        },
      ],
      "80"
    );
    t.end();
  }
);

tap.test("81 - enforceKeyset() - multiple levels of arrays", async (t) => {
  const obj1 = {
    b: [
      {
        e: [
          {
            f: "fff",
          },
          {
            g: "ggg",
          },
        ],
        d: "ddd",
        c: "ccc",
      },
    ],
    a: "aaa",
  };
  const obj2 = {
    c: "ccc",
    a: false,
  };
  t.strictSame(
    await prepArray([obj1, obj2]),
    [
      {
        a: "aaa",
        b: [
          {
            c: "ccc",
            d: "ddd",
            e: [
              {
                f: "fff",
                g: false,
              },
              {
                f: false,
                g: "ggg",
              },
            ],
          },
        ],
        c: false,
      },
      {
        a: false,
        b: [
          {
            c: false,
            d: false,
            e: [
              {
                f: false,
                g: false,
              },
            ],
          },
        ],
        c: "ccc",
      },
    ],
    "81"
  );
  t.end();
});

tap.test("82 - enforceKeyset() - array vs string clashes", async (t) => {
  t.strictSame(
    await prepArray([
      {
        a: "aaa",
      },
      {
        a: [
          {
            b: "bbb",
          },
        ],
      },
    ]),
    [
      {
        a: [
          {
            b: false,
          },
        ],
      },
      {
        a: [
          {
            b: "bbb",
          },
        ],
      },
    ],
    "82"
  );
  t.end();
});

tap.test(
  "83 - enforceKeyset() - all inputs missing - resolves to rejected promise",
  (t) => {
    t.throws(() => {
      enforceKeyset();
    }, /THROW_ID_31/g);
    t.end();
  }
);

tap.test(
  "84 - enforceKeyset() - second input arg missing - resolves to rejected promise",
  (t) => {
    t.throws(() => {
      enforceKeyset({ a: "a" });
    }, /THROW_ID_32/g);
    t.end();
  }
);

tap.test(
  "85 - enforceKeyset() - second input arg is not a plain obj - resolves to rejected promise",
  async (t) => {
    await enforceKeyset({ a: "a" }, "zzz")
      .then(() => {
        t.fail("not ok");
      })
      .catch(() => {
        t.pass("ok");
      });
    t.end();
  }
);

tap.test(
  "86 - enforceKeyset() - first input arg is not a plain obj - resolves to rejected promise",
  async (t) => {
    await enforceKeyset("zzz", "zzz")
      .then(() => {
        t.fail("not ok");
      })
      .catch(() => {
        t.pass("ok");
      });
    t.end();
  }
);

tap.test("87 - enforceKeyset() - array over empty array", async (t) => {
  const obj1 = {
    a: [
      {
        d: "d",
      },
      {
        e: "e",
      },
    ],
    c: "c",
  };
  const obj2 = {
    a: [],
    b: "b",
  };
  const schema = await getKeyset([obj1, obj2]);
  t.strictSame(
    schema,
    {
      a: [
        {
          d: false,
          e: false,
        },
      ],
      b: false,
      c: false,
    },
    "87.01"
  );
  t.strictSame(
    await enforceKeyset(obj1, schema),
    {
      a: [
        {
          d: "d",
          e: false,
        },
        {
          d: false,
          e: "e",
        },
      ],
      b: false,
      c: "c",
    },
    "87.02"
  );
  t.strictSame(
    await enforceKeyset(obj2, schema),
    {
      a: [
        {
          d: false,
          e: false,
        },
      ],
      b: "b",
      c: false,
    },
    "87.03"
  );
  t.end();
});

tap.test(
  "88 - enforceKeyset() - wrong opts - resolves to rejected promise",
  (t) => {
    t.rejects(async () => {
      await enforceKeyset(
        { a: "a" },
        { a: "false", b: "b" },
        { doNotFillThesePathsIfTheyContainPlaceholders: ["a", 1] }
      );
    }, "88");
    t.end();
  }
);

tap.test("89 - enforceKeyset() - opts.useNullAsExplicitFalse", async (t) => {
  const schema = await getKeyset(
    makePromise([
      {
        a: "aaa",
        b: "bbb",
      },
      {
        a: {
          c: "ccc",
        },
      },
    ])
  );
  t.strictSame(
    await enforceKeyset(
      {
        a: null,
      },
      schema
    ),
    {
      a: null,
      b: false,
    },
    "89.01 - defaults - null is explicit false"
  );
  t.strictSame(
    await enforceKeyset(
      {
        a: null,
      },
      schema,
      { useNullAsExplicitFalse: false }
    ),
    {
      a: {
        c: false,
      },
      b: false,
    },
    "89.02 - off via the opts"
  );
  t.end();
});
