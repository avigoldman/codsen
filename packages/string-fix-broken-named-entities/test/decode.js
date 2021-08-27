import tap from "tap";
import { decode, allNamedEntities } from "all-named-html-entities";
import fix from "./util/util.js";

// -----------------------------------------------------------------------------
// programmatic tests
// -----------------------------------------------------------------------------

tap.test(
  `${
    Object.keys(allNamedEntities).length
  } - ${`\u001b[${36}m${`programmatic tests`}\u001b[${39}m`}`,
  (t) => {
    Object.keys(allNamedEntities)
      .filter((entity) => entity !== "nbsp")
      .forEach((singleEntity, i, arr) => {
        //
        // healthy entity but decode requested:
        //
        t.strictSame(
          fix(t, `&${singleEntity};`, {
            decode: true,
            cb: (obj) => obj,
          }),
          [
            {
              ruleName: `bad-html-entity-encoded-${singleEntity}`,
              entityName: singleEntity,
              rangeFrom: 0,
              rangeTo: singleEntity.length + 2,
              rangeValEncoded: `&${singleEntity};`,
              rangeValDecoded: decode(`&${singleEntity};`),
            },
          ],
          `${singleEntity} - 05; ${i + 1}/${arr.length}`
        );
      });
    t.end();
  }
);

tap.test(
  `02 - ${`\u001b[${36}m${`decode`}\u001b[${39}m`} - one of entities`,
  (t) => {
    const gathered = [];
    t.strictSame(
      fix(t, `&EmptyVerySmallSquare;`, {
        decode: true,
        cb: (obj) => obj,
        textAmpersandCatcherCb: (idx) => {
          gathered.push(idx);
        },
      }),
      [
        {
          ruleName: `bad-html-entity-encoded-EmptyVerySmallSquare`,
          entityName: "EmptyVerySmallSquare",
          rangeFrom: 0,
          rangeTo: 22,
          rangeValEncoded: `&EmptyVerySmallSquare;`,
          rangeValDecoded: decode(`&EmptyVerySmallSquare;`),
        },
      ],
      `02`
    );
    t.strictSame(gathered, [], "02.02");
    t.end();
  }
);
