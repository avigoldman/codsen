import tap from "tap";
import { decode, uncertain, allNamedEntities } from "all-named-html-entities";
import fix from "./util/util.js";

// -----------------------------------------------------------------------------
// programmatic tests
// -----------------------------------------------------------------------------

tap.test(
  `${
    Object.keys(allNamedEntities).length
  } - ${`\u001b[${36}m${`rogue-spaces`}\u001b[${39}m`}`,
  (t) => {
    Object.keys(allNamedEntities)
      .filter(
        (entity) =>
          entity !== "nbsp" && !Object.keys(uncertain).includes(entity)
      )
      .forEach((singleEntity, i, arr) => {
        //
        // insert spaces between each character, once for every position
        // for example:
        // & nbsp; - &n bsp; - &nb sp; - &nbs p; - &nbsp ;
        // there are one count more variations than entity's length

        // if (i < 10) {
        //   console.log("-");
        // }
        for (let y = singleEntity.length + 1; y--; ) {
          const entityWithSpaceInserted = `${`&${singleEntity};`.slice(
            0,
            singleEntity.length - y + 1
          )} ${`&${singleEntity};`.slice(singleEntity.length - y + 1)}`;
          // if (i < 10) {
          //   console.log(
          //     `${`\u001b[${33}m${`entityWithSpaceInserted`}\u001b[${39}m`} = "${entityWithSpaceInserted}"`
          //   );
          // }
          t.strictSame(
            fix(t, entityWithSpaceInserted, {
              cb: (obj) => obj,
            }),
            [
              {
                ruleName: `bad-html-entity-malformed-${singleEntity}`,
                entityName: singleEntity,
                rangeFrom: 0,
                rangeTo: singleEntity.length + 3,
                rangeValEncoded: `&${singleEntity};`,
                rangeValDecoded: decode(`&${singleEntity};`),
              },
            ],
            `"${entityWithSpaceInserted}" - 03; ${i + 1}/${arr.length}`
          );
        }
      });
    t.end();
  }
);

tap.test(
  `02 - ${`\u001b[${36}m${`rogue-spaces`}\u001b[${39}m`} - \u001b[${36}m${`nbsp`}\u001b[${39}m - space after ampersand`,
  (t) => {
    const inp1 = "& nbsp;";
    const outp1 = [
      {
        ruleName: "bad-html-entity-malformed-nbsp",
        entityName: "nbsp",
        rangeFrom: 0,
        rangeTo: 7,
        rangeValEncoded: "&nbsp;",
        rangeValDecoded: "\xA0",
      },
    ];
    t.strictSame(fix(t, inp1, { cb: (obj) => obj }), outp1, "02.01");

    const gathered = [];
    t.strictSame(
      fix(t, inp1, {
        cb: (obj) => obj,
        textAmpersandCatcherCb: (idx) => {
          gathered.push(idx);
        },
      }),
      outp1,
      "02.02"
    );

    t.strictSame(gathered, [], "02.03");
    t.end();
  }
);

tap.test(
  `03 - ${`\u001b[${36}m${`rogue-spaces`}\u001b[${39}m`} - \u001b[${36}m${`nbsp`}\u001b[${39}m - space before semicolon`,
  (t) => {
    const inp5 = "&nbsp ;";
    const outp5 = [
      {
        ruleName: "bad-html-entity-malformed-nbsp",
        entityName: "nbsp",
        rangeFrom: 0,
        rangeTo: 7,
        rangeValEncoded: "&nbsp;",
        rangeValDecoded: "\xA0",
      },
    ];
    t.strictSame(fix(t, inp5, { cb: (obj) => obj }), outp5, "03.01");

    const gathered = [];
    t.strictSame(
      fix(t, inp5, {
        cb: (obj) => obj,
        textAmpersandCatcherCb: (idx) => {
          gathered.push(idx);
        },
      }),
      outp5,
      "03.02"
    );
    t.strictSame(gathered, [], "03.03");
    t.end();
  }
);

tap.test(
  `04 - ${`\u001b[${36}m${`rogue-spaces`}\u001b[${39}m`} - \u001b[${36}m${`nbsp`}\u001b[${39}m - space before and after semicolon`,
  (t) => {
    const inp5 = "& nbsp ;";
    const outp5 = [
      {
        ruleName: "bad-html-entity-malformed-nbsp",
        entityName: "nbsp",
        rangeFrom: 0,
        rangeTo: 8,
        rangeValEncoded: "&nbsp;",
        rangeValDecoded: "\xA0",
      },
    ];
    t.strictSame(fix(t, inp5, { cb: (obj) => obj }), outp5, "04.01");

    const gathered = [];
    t.strictSame(
      fix(t, inp5, {
        cb: (obj) => obj,
        textAmpersandCatcherCb: (idx) => {
          gathered.push(idx);
        },
      }),
      outp5,
      "04.02"
    );
    t.strictSame(gathered, [], "04.03");
    t.end();
  }
);
