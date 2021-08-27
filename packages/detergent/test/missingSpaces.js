/* eslint no-template-curly-in-string: 0 */

import tap from "tap";
import { det as det1 } from "../dist/detergent.esm.js";
import { det, mixer, rawNDash, rawNbsp } from "../t-util/util.js";

// -----------------------------------------------------------------------------

tap.test(
  `01 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - missing space after ndash added (space + ndash) - missing space after ndash added`,
  (t) => {
    mixer({
      convertEntities: true,
      convertDashes: true,
      removeWidows: true,
      addMissingSpaces: false, // <-------
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "10am &ndash;11am", opt).res,
        "10am&nbsp;&ndash;11am",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `02 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - missing space after ndash added (space + ndash) - missing space after ndash added`,
  (t) => {
    mixer({
      convertEntities: true,
      convertDashes: true,
      removeWidows: false,
      addMissingSpaces: true, // <-------
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "10am &ndash;11am", opt).res,
        "10am &ndash; 11am",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `03 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - missing space after ndash added (space + ndash) - missing space after ndash added`,
  (t) => {
    mixer({
      convertEntities: true,
      convertDashes: true,
      removeWidows: false,
      addMissingSpaces: false, // <-------
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "10am &ndash;11am", opt).res,
        "10am &ndash;11am",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `04 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - doesn't add spaces within simple URL's - url only`,
  (t) => {
    [
      "http://detergent.io",
      "http://detergent.io?something=zzz%26else=ccc",
      "tel://123",
    ].forEach((src) => {
      mixer().forEach((opt, n) => {
        t.equal(
          det(t, n, src, opt).res,
          src,
          `${src} - ${JSON.stringify(opt, null, 4)}`
        );
      });
    });
    t.end();
  }
);

tap.test(
  `05 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - doesn't add spaces within urls - url + space + text`,
  (t) => {
    mixer({
      removeWidows: false,
      removeLineBreaks: false,
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "http://detergent.io is cool", opt).res,
        "http://detergent.io is cool",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `06 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - doesn't add spaces within urls - adds space before capital letter (line break)`,
  (t) => {
    mixer({
      removeWidows: false,
      replaceLineBreaks: false,
      removeLineBreaks: false,
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "http://detergent.io.\nThis is cool", opt).res,
        "http://detergent.io.\nThis is cool",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `07 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - doesn't add spaces within urls - adds space before capital letter (line break)`,
  (t) => {
    mixer({
      removeWidows: false,
      replaceLineBreaks: false,
      removeLineBreaks: false,
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "http://detergent.io. \nThis is cool", opt).res,
        "http://detergent.io.\nThis is cool",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `08 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - doesn't add spaces within urls - no :// but www instead`,
  (t) => {
    mixer({
      removeWidows: false,
      replaceLineBreaks: false,
      removeLineBreaks: false,
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "Aaaaa.Aaaa www.detergent.io bbbbb.Bbbbb", opt).res,
        "Aaaaa. Aaaa www.detergent.io bbbbb. Bbbbb",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `09 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - doesn't add spaces within urls - url + space + text`,
  (t) => {
    mixer({
      removeWidows: false,
      replaceLineBreaks: false,
      removeLineBreaks: false,
      addMissingSpaces: false,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "http://detergent.io is cool", opt).res,
        "http://detergent.io is cool",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `10 - missing space after ndash added (nbsp + ndash) - space after ndash not added where not needed`,
  (t) => {
    mixer({
      convertDashes: true,
      convertEntities: false,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, `10am&ndash;11am`, opt).res,
        `10am${rawNDash}11am`,
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `11 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - doesn't add spaces within urls - address + full stop + line break`,
  (t) => {
    mixer({
      removeWidows: false,
      replaceLineBreaks: false,
      removeLineBreaks: false,
      addMissingSpaces: false,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "http://detergent.io.\nThis is cool", opt).res,
        "http://detergent.io.\nThis is cool",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `12 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - doesn't add spaces within urls - address + full stop + space + line break`,
  (t) => {
    mixer({
      removeWidows: false,
      replaceLineBreaks: false,
      removeLineBreaks: false,
      addMissingSpaces: false,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "http://detergent.io. \nThis is cool", opt).res,
        "http://detergent.io.\nThis is cool",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `13 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - doesn't add spaces within urls - no :// but www instead`,
  (t) => {
    mixer({
      removeWidows: false,
      replaceLineBreaks: false,
      removeLineBreaks: false,
      addMissingSpaces: false,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "Aaaaa.Aaaa www.detergent.io bbbbb.Bbbbb", opt).res,
        "Aaaaa.Aaaa www.detergent.io bbbbb.Bbbbb",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `14 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - adds space after semicolon, but not in URLs - sentence #1`,
  (t) => {
    mixer({
      removeWidows: false,
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "This is http://detergent.io.This is cool.", opt).res,
        "This is http://detergent.io. This is cool.",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `15 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - adds space after semicolon, but not in URLs - sentence #2`,
  (t) => {
    mixer({
      removeWidows: false,
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "This is http://detergent.io.", opt).res,
        "This is http://detergent.io.",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `16 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - adds space after semicolon, but not in URLs - sentence #3`,
  (t) => {
    mixer({
      removeWidows: true,
      convertEntities: true,
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "This is http://detergent.io.This is cool.", opt).res,
        "This is http://detergent.io. This is&nbsp;cool.",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `17 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - adds space after semicolon, but not in URLs - sentence #4`,
  (t) => {
    mixer({
      removeWidows: true,
      convertEntities: true,
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "This is http://detergent.io.", opt).res,
        "This is http://detergent.io.",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `18 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - adds space after semicolon, but not in URLs - vs widow removal`,
  (t) => {
    mixer({
      removeWidows: true,
      convertEntities: false,
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "This is http://detergent.io.This is cool.", opt).res,
        `This is http://detergent.io. This is${rawNbsp}cool.`,
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `19 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - adds space after semicolon, but not in URLs - trailing full stop #1`,
  (t) => {
    mixer({
      removeWidows: true,
      convertEntities: false,
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "This is http://detergent.io.", opt).res,
        "This is http://detergent.io.",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `20 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - adds space after semicolon, but not in URLs - trailing full stop #2`,
  (t) => {
    mixer({
      removeWidows: false,
      addMissingSpaces: false,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "This is http://detergent.io.This is cool.", opt).res,
        "This is http://detergent.io.This is cool.",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `21 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - adds space after semicolon, but not in URLs - trailing full stop #3`,
  (t) => {
    mixer({
      removeWidows: false,
      addMissingSpaces: false,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "This is http://detergent.io.", opt).res,
        "This is http://detergent.io.",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `22 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - adds space after semicolon, but not in URLs - trailing full stop #4`,
  (t) => {
    mixer({
      removeWidows: true,
      convertEntities: true,
      addMissingSpaces: false,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "This is http://detergent.io.This is cool.", opt).res,
        "This is http://detergent.io.This is&nbsp;cool.",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `23 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - adds space after semicolon, but not in URLs - trailing full stop #5`,
  (t) => {
    mixer({
      removeWidows: true,
      convertEntities: true,
      addMissingSpaces: false,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "This is http://detergent.io.", opt).res,
        "This is http://detergent.io.",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `24 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - adds space after semicolon, but not in URLs - vs widow removal`,
  (t) => {
    mixer({
      removeWidows: true,
      convertEntities: false,
      addMissingSpaces: false,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "This is http://detergent.io.This is cool.", opt).res,
        `This is http://detergent.io.This is${rawNbsp}cool.`,
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `25 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - adds space after semicolon, but not in URLs - trailing full stop #6`,
  (t) => {
    mixer({
      removeWidows: true,
      convertEntities: false,
      addMissingSpaces: false,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "This is http://detergent.io.", opt).res,
        "This is http://detergent.io.",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `26 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - doesn't add spaces within urls, considering emoji and line breaks - emoji #1`,
  (t) => {
    mixer({
      removeWidows: false,
      convertEntities: false,
      replaceLineBreaks: false,
      removeLineBreaks: false,
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(
          t,
          n,
          "Aaaa🦄.bbbbb http://detergent.whatever.a.bd.re.qwe.gf.asdew.v.df.g.er.re ZZZ.🦄YYY",
          opt
        ).res,
        "Aaaa🦄.bbbbb http://detergent.whatever.a.bd.re.qwe.gf.asdew.v.df.g.er.re ZZZ.🦄YYY",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `27 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - doesn't add spaces within urls, considering emoji and line breaks - emoji #2`,
  (t) => {
    mixer({
      removeWidows: false,
      convertEntities: false,
      replaceLineBreaks: false,
      removeLineBreaks: false,
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(
          t,
          n,
          "Aaaa.Bbbbb http://detergent.whatever.a.bd.re.qwe.\ngf.Asdew.V.Df,g;er.Re ZZZ.🦄YYY sfhksdf fgkjhk jhfgkh.",
          opt
        ).res,
        "Aaaa. Bbbbb http://detergent.whatever.a.bd.re.qwe.\ngf. Asdew. V. Df, g; er. Re ZZZ.🦄YYY sfhksdf fgkjhk jhfgkh.",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `28 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - doesn't add spaces within urls, considering emoji and line breaks - emoji #3`,
  (t) => {
    mixer({
      removeWidows: false,
      convertEntities: false,
      replaceLineBreaks: false,
      removeLineBreaks: false,
      addMissingSpaces: false,
    }).forEach((opt, n) => {
      t.equal(
        det(
          t,
          n,
          "Aaaa🦄.bbbbb http://detergent.whatever.a.bd.re.qwe.gf.asdew.v.df.g.er.re ZZZ.🦄YYY",
          opt
        ).res,
        "Aaaa🦄.bbbbb http://detergent.whatever.a.bd.re.qwe.gf.asdew.v.df.g.er.re ZZZ.🦄YYY",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `29 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - doesn't add spaces within urls, considering emoji and line breaks - emoji #4`,
  (t) => {
    mixer({
      removeWidows: false,
      convertEntities: false,
      replaceLineBreaks: false,
      removeLineBreaks: false,
      addMissingSpaces: false,
    }).forEach((opt, n) => {
      t.equal(
        det(
          t,
          n,
          "Aaaa.Bbbbb http://detergent.whatever.a.bd.re.qwe.\ngf.Asdew.V.Df,g;er.Re ZZZ.🦄YYY sfhksdf fgkjhk jhfgkh.",
          opt
        ).res,
        "Aaaa.Bbbbb http://detergent.whatever.a.bd.re.qwe.\ngf.Asdew.V.Df,g;er.Re ZZZ.🦄YYY sfhksdf fgkjhk jhfgkh.",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `30 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - being on the safe side - not adding spaces around detected URLs - add missing spaces`,
  (t) => {
    mixer({
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "http://detergent.io;is cool.", opt).res,
        "http://detergent.io;is cool.",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `31 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - being on the safe side - not adding spaces around detected URLs - semicol`,
  (t) => {
    mixer({
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "aaa;bbb", opt).res,
        "aaa; bbb",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `32 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - being on the safe side - not adding spaces around detected URLs - comma + URL`,
  (t) => {
    mixer({
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "http://detergent.io,is cool.", opt).res,
        "http://detergent.io,is cool.",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `33 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - being on the safe side - not adding spaces around detected URLs - comma + text`,
  (t) => {
    mixer({
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "aaa,bbb", opt).res,
        "aaa, bbb",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `34 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - being on the safe side - not adding spaces around detected URLs - added space because first letter is uppercase`,
  (t) => {
    mixer({
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "http://detergent.io.Cool!", opt).res,
        "http://detergent.io. Cool!",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `35 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - being on the safe side - not adding spaces around detected URLs - all caps will prevent space added`,
  (t) => {
    mixer({
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "http://detergent.io.IS COOL.", opt).res,
        "http://detergent.io.IS COOL.",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `36 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - being on the safe side - not adding spaces around detected URLs - small caps will prevent space added`,
  (t) => {
    mixer({
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "http://detergent.io.is cool.", opt).res,
        "http://detergent.io.is cool.",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `37 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - being on the safe side - not adding spaces around detected URLs - letter after full stop has to be uppercase`,
  (t) => {
    mixer({
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "aaa.bbb", opt).res,
        "aaa.bbb",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `38 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - being on the safe side - not adding spaces around detected URLs - letter after full stop has to be uppercase`,
  (t) => {
    mixer({
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "Aaa.Bbb", opt).res,
        "Aaa. Bbb",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `39 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - non-Latin character after URL #1`,
  (t) => {
    mixer({
      removeWidows: false,
      convertEntities: true,
      dontEncodeNonLatin: true,
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "This is http://detergent.io.Это хорошо.", opt).res,
        "This is http://detergent.io. Это хорошо.",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `40 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - non-Latin character after URL #2`,
  (t) => {
    mixer({
      removeWidows: false,
      convertEntities: true,
      dontEncodeNonLatin: true,
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "This is http://detergent.io,Это хорошо.", opt).res,
        "This is http://detergent.io,Это хорошо.",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `41 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - non-Latin character after URL #3`,
  (t) => {
    mixer({
      removeWidows: false,
      convertEntities: true,
      dontEncodeNonLatin: true,
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "This is http://detergent.io;Это хорошо.", opt).res,
        "This is http://detergent.io;Это хорошо.",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `42 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - non-Latin character after URL - not adding the missing spaces #1`,
  (t) => {
    mixer({
      removeWidows: false,
      convertEntities: true,
      dontEncodeNonLatin: true,
      addMissingSpaces: false,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "This is http://detergent.io.Это хорошо.", opt).res,
        "This is http://detergent.io.Это хорошо.",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `43 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - non-Latin character after URL - not adding the missing spaces #2`,
  (t) => {
    mixer({
      removeWidows: false,
      convertEntities: true,
      dontEncodeNonLatin: true,
      addMissingSpaces: false,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "This is http://detergent.io,Это хорошо.", opt).res,
        "This is http://detergent.io,Это хорошо.",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `44 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - non-Latin character after URL - not adding the missing spaces #3`,
  (t) => {
    mixer({
      removeWidows: false,
      convertEntities: true,
      dontEncodeNonLatin: true,
      addMissingSpaces: false,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "This is http://detergent.io;Это хорошо.", opt).res,
        "This is http://detergent.io;Это хорошо.",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `45 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - leaves file names intact`,
  (t) => {
    mixer().forEach((opt, n) => {
      [
        "image.jpg",
        "image.JPG",
        "image.jpeg",
        "image.JPEG",
        "image.png",
        "image.PNG",
        "image.gif",
        "image.GIF",
        "image.svg",
        "image.SVG",
        "image.json",
        "image.JSON",
        "image.html",
        "image.HTML",
        "image.htm",
        "image.HTM",
      ].forEach((src) => {
        t.equal(det(t, n, src, opt).res, src, JSON.stringify(opt, null, 4));
      });
    });
    t.end();
  }
);

tap.test(
  `46 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - long sentences with file names with extensions #1`,
  (t) => {
    t.equal(
      det(t, 0, "Some text .gitignore").res,
      "Some text .gitignore",
      "46"
    );
    t.end();
  }
);

tap.test(
  `47 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - long sentences with file names with extensions #2`,
  (t) => {
    mixer({
      removeWidows: false,
    }).forEach((opt, n) => {
      t.equal(
        det(
          t,
          n,
          "When you will download header.PNG, file fix.jpg and the dotfiles named .gitignore, check them.",
          opt
        ).res,
        "When you will download header.PNG, file fix.jpg and the dotfiles named .gitignore, check them.",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `48 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - false positive - Dutch "p.st"`,
  (t) => {
    mixer().forEach((opt, n) => {
      t.equal(
        det(t, n, "10eur p.st", opt).res,
        "10eur p.st",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `49 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - missing spaces addition can be turned off - full stop, addMissingSpaces=on`,
  (t) => {
    mixer({
      addMissingSpaces: true,
      dontEncodeNonLatin: true,
      useXHTML: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "Text.More text.", opt).res,
        "Text. More text.",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `50 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - missing spaces addition can be turned off - full stop, addMissingSpaces=off`,
  (t) => {
    mixer({
      addMissingSpaces: false,
      dontEncodeNonLatin: true,
      useXHTML: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "Text.More text.", opt).res,
        "Text.More text.",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `51 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - missing spaces addition can be turned off - full stop, addMissingSpaces=on, dontEncodeNonLatin=on`,
  (t) => {
    mixer({
      addMissingSpaces: true,
      dontEncodeNonLatin: true,
      useXHTML: true,
    }).forEach((opt, n) => {
      t.equal(det(t, n, "Text,more text.", opt).res, "Text, more text.");
      t.equal(
        det(t, n, "Text,more text,", opt).res,
        "Text, more text,",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `52 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - missing spaces addition can be turned off - full stop, addMissingSpaces=off, dontEncodeNonLatin=on`,
  (t) => {
    mixer({
      addMissingSpaces: false,
      dontEncodeNonLatin: true,
      useXHTML: true,
    }).forEach((opt, n) => {
      t.equal(det(t, n, "Text,more text.", opt).res, "Text,more text.");
      t.equal(
        det(t, n, "Text,more text,", opt).res,
        "Text,more text,",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `53 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - missing spaces addition can be turned off - full stop, addMissingSpaces=on, dontEncodeNonLatin=on`,
  (t) => {
    mixer({
      addMissingSpaces: true,
      dontEncodeNonLatin: true,
      useXHTML: true,
    }).forEach((opt, n) => {
      t.equal(det(t, n, "Text;more text.", opt).res, "Text; more text.");
      t.equal(det(t, n, "text;more text.", opt).res, "text; more text.");
      t.equal(det(t, n, "Text;more text", opt).res, "Text; more text");
      t.equal(
        det(t, n, "text;more text", opt).res,
        "text; more text",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `54 - ${`\u001b[${33}m${`opts.addMissingSpaces`}\u001b[${39}m`} - missing spaces addition can be turned off - semicol, addMissingSpaces=off`,
  (t) => {
    mixer({
      addMissingSpaces: false,
      dontEncodeNonLatin: true,
      useXHTML: true,
    }).forEach((opt, n) => {
      t.equal(det(t, n, "Text;more text.", opt).res, "Text;more text.");
      t.equal(det(t, n, "text;more text.", opt).res, "text;more text.");
      t.equal(det(t, n, "Text;more text", opt).res, "Text;more text");
      t.equal(
        det(t, n, "text;more text", opt).res,
        "text;more text",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `55 - missing space after ndash added (nbsp + ndash) - missing space after ndash added`,
  (t) => {
    mixer({
      convertDashes: true,
      removeWidows: true,
      convertEntities: true,
      addMissingSpaces: true, // <-------
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "10am&nbsp;&ndash;11am", opt).res,
        "10am&nbsp;&ndash;&nbsp;11am",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `56 - missing space after ndash added (nbsp + ndash) - missing space after ndash added`,
  (t) => {
    mixer({
      convertDashes: true,
      removeWidows: true,
      convertEntities: true,
      addMissingSpaces: false, // <-------
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "10am&nbsp;&ndash;11am", opt).res,
        "10am&nbsp;&ndash;11am",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `57 - missing space after ndash added (nbsp + ndash) - missing space after ndash added`,
  (t) => {
    mixer({
      convertDashes: true,
      removeWidows: true,
      convertEntities: true,
      addMissingSpaces: false, // <-------
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "10am&nbsp;&ndash;11am and more text", opt).res,
        "10am&nbsp;&ndash;11am and more&nbsp;text",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `58 - missing space after ndash added (nbsp + ndash) - space after ndash not added where not needed`,
  (t) => {
    mixer({
      convertDashes: true,
      convertEntities: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "10am&ndash;11am", opt).res,
        "10am&ndash;11am",
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `59 - missing space after ndash added (nbsp + ndash) - missing space after ndash added`,
  (t) => {
    mixer({
      convertDashes: true,
      removeWidows: true,
      convertEntities: false,
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "10am&nbsp;&ndash;11am", opt).res,
        `10am${rawNbsp}${rawNDash}${rawNbsp}11am`,
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

tap.test(
  `60 - missing space after ndash added (nbsp + ndash) - missing space after ndash added`,
  (t) => {
    mixer({
      convertDashes: true,
      removeWidows: true,
      convertEntities: false,
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "10am&nbsp;&ndash;11am", opt).res,
        `10am${rawNbsp}${rawNDash}${rawNbsp}11am`,
        JSON.stringify(opt, null, 4)
      );
    });
    mixer({
      convertDashes: true,
      removeWidows: false,
      convertEntities: false,
      addMissingSpaces: true,
    }).forEach((opt, n) => {
      t.equal(
        det(t, n, "10am&nbsp;&ndash;11am", opt).res,
        `10am ${rawNDash} 11am`,
        JSON.stringify(opt, null, 4)
      );
    });
    t.end();
  }
);

// 02. whitespace control
// -----------------------------------------------------------------------------

tap.test(`61 - deletes space around n-dash between numbers`, (t) => {
  mixer({
    convertDashes: true,
    convertEntities: false,
  }).forEach((opt, n) => {
    t.equal(
      det(t, n, `1880 ${rawNDash} 1912`, opt).res,
      `1880${rawNDash}1912`,
      JSON.stringify(opt, null, 4)
    );
  });
  t.end();
});

tap.test(`62 - deletes space around n-dash between numbers`, (t) => {
  mixer({
    convertDashes: true,
    convertEntities: false,
  }).forEach((opt, n) => {
    t.equal(
      det(t, n, `1880 &ndash; 1912`, opt).res,
      `1880${rawNDash}1912`,
      JSON.stringify(opt, null, 4)
    );
  });
  t.end();
});

tap.test(`63 - deletes space around n-dash between numbers`, (t) => {
  mixer({
    convertDashes: true,
    convertEntities: true,
  }).forEach((opt, n) => {
    t.equal(
      det(t, n, `1880 ${rawNDash} 1912`, opt).res,
      "1880&ndash;1912",
      JSON.stringify(opt, null, 4)
    );
  });
  t.end();
});

tap.test(`64 - deletes space around n-dash between numbers`, (t) => {
  mixer({
    convertDashes: true,
    convertEntities: true,
  }).forEach((opt, n) => {
    t.equal(
      det(t, n, "1880 &ndash; 1912", opt).res,
      "1880&ndash;1912",
      JSON.stringify(opt, null, 4)
    );
  });
  t.end();
});

tap.test(`65 - space in front of n-dash, missing space after it`, (t) => {
  mixer({
    convertDashes: true,
    convertEntities: false,
  }).forEach((opt, n) => {
    t.equal(
      det(t, n, `1880 ${rawNDash}1912`, opt).res,
      `1880${rawNDash}1912`,
      JSON.stringify(opt, null, 4)
    );
  });
  t.end();
});

tap.test(`66 - jinja/nunjucks code chunk with double quotes`, (t) => {
  const str1 = '{{ "%.2f"|format(total.value) }}';
  mixer().forEach((opt, n) => {
    t.equal(det(t, n, str1, opt).res, str1);
  });

  const str2 = '{% if z == "text" %}{{ text }}{% endif %}';
  mixer().forEach((opt, n) => {
    t.equal(det(t, n, str2, opt).res, str2);
  });

  const str3 = '{%- if z == "text" -%}{{ text }}{%- endif -%}';
  mixer().forEach((opt, n) => {
    t.equal(det(t, n, str3, opt).res, str3, JSON.stringify(opt, null, 4));
  });

  t.end();
});

tap.test(`67`, (t) => {
  t.equal(
    det1(`Abc;${rawNbsp}de fghij klmnop.`, {
      convertEntities: true,
      removeWidows: true,
    }).res,
    `Abc;&nbsp;de fghij&nbsp;klmnop.`,
    "67"
  );
  t.end();
});

tap.test(`68`, (t) => {
  mixer({
    convertEntities: true,
    removeWidows: true,
  }).forEach((opt, n) => {
    t.equal(
      det(t, n, `Abc;${rawNbsp}de fghij klmnop.`, opt).res,
      `Abc;&nbsp;de fghij&nbsp;klmnop.`,
      JSON.stringify(opt, null, 4)
    );
  });
  t.end();
});

tap.test(`69`, (t) => {
  mixer({
    convertEntities: false,
    removeWidows: true,
  }).forEach((opt, n) => {
    t.equal(
      det(t, n, `Abc;${rawNbsp}fghij klm nop.`, opt).res,
      `Abc;${rawNbsp}fghij klm${rawNbsp}nop.`,
      JSON.stringify(opt, null, 4)
    );
  });
  t.end();
});

tap.test(`70`, (t) => {
  mixer({
    removeWidows: false,
  }).forEach((opt, n) => {
    t.equal(
      det(t, n, `Abc;${rawNbsp}de fg.`, opt).res,
      `Abc; de fg.`,
      JSON.stringify(opt, null, 4)
    );
  });
  t.end();
});

tap.test(`71 - sanity check #02`, (t) => {
  mixer({
    convertEntities: false,
  }).forEach((opt, n) => {
    t.equal(
      det(t, n, "Semicolon;&is cool.", opt).res,
      "Semicolon;&is cool.",
      JSON.stringify(opt, null, 4)
    );
  });
  t.end();
});
