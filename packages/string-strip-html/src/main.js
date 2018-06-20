import rangesApply from "ranges-apply";
import Ranges from "ranges-push";
import isObj from "lodash.isplainobject";
import trim from "lodash.trim";
import checkTypes from "check-types-mini";
import ent from "ent";

function stripHtml(str, originalOpts) {
  // constants
  // ===========================================================================
  const isArr = Array.isArray;
  const definitelyTagNames = [
    "!doctype",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "base",
    "bdi",
    "bdo",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "doctype",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "math",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "param",
    "picture",
    "pre",
    "progress",
    "rb",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "samp",
    "script",
    "section",
    "select",
    "slot",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "svg",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "ul",
    "var",
    "video",
    "wbr",
    "xml"
  ];
  const singleLetterTags = ["a", "b", "i", "p", "q", "s", "u"];

  const punctuation = [".", ",", "?", ";", ")", "\u2026", '"', "\u00BB"];
  // \u00BB is &raquo; - guillemet - right angled quote
  // \u2026 is &hellip; - ellipsis

  const stripTogetherWithTheirContentsDefaults = ["script", "style", "xml"];

  const rangesToDelete = new Ranges({ limitToBeAddedWhitespace: true });

  // variables
  // ===========================================================================

  // records the info about the suspected tag:
  let tag = {};

  // records the beginning of the current whitespace chunk:
  let chunkOfWhitespaceStartsAt = null;

  // records the beginning of the current chunk of spaces (strictly spaces-only):
  let chunkOfSpacesStartsAt = null;

  // we'll gather opening tags from ranged-pairs here:
  const rangedOpeningTags = [];

  // temporary variable to assemble the attribute pieces:
  let attrObj = {};

  // marker to store captured href, used in opts.dumpLinkHrefsNearby
  let hrefDump = {}; // 2 keys: "tagName" - where href was spotted, "hrefValue" - URL

  // used to insert extra things when pushing into ranges array
  let stringToInsertAfter = "";

  // state flag
  let hrefInsertionActive;

  // marker to keep a note where does the whitespace chunk that follows closing bracket end.
  // It's necessary for opts.trimOnlySpaces when there's closing bracket, whitespace, non-space
  // whitespace character ("\n", "\t" etc), whitspace, end-of-file. Trim will kick in and will
  // try to trim up until the EOF, be we'll have to pull the end of trim back, back to the first
  // character of aforementioned non-space whitespace character sequence.
  // This variable will tell exactly where it is located.
  let spacesChunkWhichFollowsTheClosingBracketEndsAt = null;

  // functions
  // ===========================================================================

  function isValidAttributeCharacter(char) {
    // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2

    if (char.charCodeAt(0) >= 0 && char.charCodeAt(0) <= 31) {
      // C0 CONTROLS
      return false;
    } else if (char.charCodeAt(0) >= 127 && char.charCodeAt(0) <= 159) {
      // U+007F DELETE to U+009F APPLICATION PROGRAM COMMAND
      return false;
    } else if (char.charCodeAt(0) === 32) {
      // U+0020 SPACE
      return false;
    } else if (char.charCodeAt(0) === 34) {
      // U+0022 (")
      return false;
    } else if (char.charCodeAt(0) === 39) {
      // U+0027 (')
      return false;
    } else if (char.charCodeAt(0) === 62) {
      // U+003E (>)
      return false;
    } else if (char.charCodeAt(0) === 47) {
      // U+002F (/)
      return false;
    } else if (char.charCodeAt(0) === 61) {
      // U+003D (=)
      return false;
    } else if (
      // noncharacter:
      // https://infra.spec.whatwg.org/#noncharacter
      (char.charCodeAt(0) >= 64976 && char.charCodeAt(0) <= 65007) || // U+FDD0 to U+FDEF, inclusive,
      char.charCodeAt(0) === 65534 || // or U+FFFE,
      char.charCodeAt(0) === 65535 || // U+FFFF,
      (char.charCodeAt(0) === 55359 && char.charCodeAt(1) === 57342) || // U+1FFFE, or \uD83F\uDFFE
      (char.charCodeAt(0) === 55359 && char.charCodeAt(1) === 57343) || // U+1FFFF, or \uD83F\uDFFF
      (char.charCodeAt(0) === 55423 && char.charCodeAt(1) === 57342) || // U+2FFFE, or \uD87F\uDFFE
      (char.charCodeAt(0) === 55423 && char.charCodeAt(1) === 57343) || // U+2FFFF, or \uD87F\uDFFF
      (char.charCodeAt(0) === 55487 && char.charCodeAt(1) === 57342) || // U+3FFFE, or \uD8BF\uDFFE
      (char.charCodeAt(0) === 55487 && char.charCodeAt(1) === 57343) || // U+3FFFF, or \uD8BF\uDFFF
      (char.charCodeAt(0) === 55551 && char.charCodeAt(1) === 57342) || // U+4FFFE, or \uD8FF\uDFFE
      (char.charCodeAt(0) === 55551 && char.charCodeAt(1) === 57343) || // U+4FFFF, or \uD8FF\uDFFF
      (char.charCodeAt(0) === 55615 && char.charCodeAt(1) === 57342) || // U+5FFFE, or \uD93F\uDFFE
      (char.charCodeAt(0) === 55615 && char.charCodeAt(1) === 57343) || // U+5FFFF, or \uD93F\uDFFF
      (char.charCodeAt(0) === 55679 && char.charCodeAt(1) === 57342) || // U+6FFFE, or \uD97F\uDFFE
      (char.charCodeAt(0) === 55679 && char.charCodeAt(1) === 57343) || // U+6FFFF, or \uD97F\uDFFF
      (char.charCodeAt(0) === 55743 && char.charCodeAt(1) === 57342) || // U+7FFFE, or \uD9BF\uDFFE
      (char.charCodeAt(0) === 55743 && char.charCodeAt(1) === 57343) || // U+7FFFF, or \uD9BF\uDFFF
      (char.charCodeAt(0) === 55807 && char.charCodeAt(1) === 57342) || // U+8FFFE, or \uD9FF\uDFFE
      (char.charCodeAt(0) === 55807 && char.charCodeAt(1) === 57343) || // U+8FFFF, or \uD9FF\uDFFF
      (char.charCodeAt(0) === 55871 && char.charCodeAt(1) === 57342) || // U+9FFFE, or \uDA3F\uDFFE
      (char.charCodeAt(0) === 55871 && char.charCodeAt(1) === 57343) || // U+9FFFF, or \uDA3F\uDFFF
      (char.charCodeAt(0) === 55935 && char.charCodeAt(1) === 57342) || // U+AFFFE, or \uDA7F\uDFFE
      (char.charCodeAt(0) === 55935 && char.charCodeAt(1) === 57343) || // U+AFFFF, or \uDA7F\uDFFF
      (char.charCodeAt(0) === 55999 && char.charCodeAt(1) === 57342) || // U+BFFFE, or \uDABF\uDFFE
      (char.charCodeAt(0) === 55999 && char.charCodeAt(1) === 57343) || // U+BFFFF, or \uDABF\uDFFF
      (char.charCodeAt(0) === 56063 && char.charCodeAt(1) === 57342) || // U+CFFFE, or \uDAFF\uDFFE
      (char.charCodeAt(0) === 56063 && char.charCodeAt(1) === 57343) || // U+CFFFF, or \uDAFF\uDFFF
      (char.charCodeAt(0) === 56127 && char.charCodeAt(1) === 57342) || // U+DFFFE, or \uDB3F\uDFFE
      (char.charCodeAt(0) === 56127 && char.charCodeAt(1) === 57343) || // U+DFFFF, or \uDB3F\uDFFF
      (char.charCodeAt(0) === 56191 && char.charCodeAt(1) === 57342) || // U+EFFFE, or \uDB7F\uDFFE
      (char.charCodeAt(0) === 56191 && char.charCodeAt(1) === 57343) || // U+EFFFF, or \uDB7F\uDFFF
      (char.charCodeAt(0) === 56255 && char.charCodeAt(1) === 57342) || // U+FFFFE, or \uDBBF\uDFFE
      (char.charCodeAt(0) === 56255 && char.charCodeAt(1) === 57343) || // U+FFFFF, or \uDBBF\uDFFF
      (char.charCodeAt(0) === 56319 && char.charCodeAt(1) === 57342) || // U+10FFFE, or \uDBFF\uDFFE
      (char.charCodeAt(0) === 56319 && char.charCodeAt(1) === 57343) // U+10FFFF, or \uDBFF\uDFFF
    ) {
      return false;
    }
    return true;
  }

  function treatRangedTags(i) {
    if (opts.stripTogetherWithTheirContents.includes(tag.name)) {
      // it depends, is it opening or closing range tag:

      // We could try to distinguish opening from closing tags by presence of
      // slash, but that would be a liability for dirty code cases where clash
      // is missing. Better, instead, just see if an entry for that tag name
      // already exists in the rangesToDelete[].

      if (
        isArr(rangedOpeningTags) &&
        rangedOpeningTags.some(
          obj => obj.name === tag.name && obj.lastClosingBracketAt < i
        )
      ) {
        // if (tag.slashPresent) {
        console.log(
          `260 \u001b[${31}m${`treatRangedTags():`}\u001b[${39}m closing ranged tag`
        );
        // closing tag.
        // filter and remove the found tag
        for (let y = rangedOpeningTags.length; y--; ) {
          if (rangedOpeningTags[y].name === tag.name) {
            // we'll remove from opening tag's opening bracket to closing tag's
            // closing bracket because whitespace will be taken care of separately,
            // when tags themselves will be removed.
            // Basically, for each range tag there will be 3 removals:
            // opening tag, closing tag and all from opening to closing tag.
            // We keep removing opening and closing tags along whole range
            // because of few reasons: 1. cases of broken/dirty code, 2. keeping
            // the algorithm simpler, 3. opts that control whitespace removal
            // around tags.

            // 1. add range without caring about surrounding whitespace around
            // the range
            console.log(
              `rangesToDelete.current(): ${JSON.stringify(
                rangesToDelete.current(),
                null,
                0
              )}`
            );
            console.log(
              `286 ABOUT TO PUSH RANGE: [${
                rangedOpeningTags[y].lastOpeningBracketAt
              }, ${i}]`
            );
            if (punctuation.includes(str[i])) {
              rangesToDelete.push(
                rangedOpeningTags[y].lastOpeningBracketAt,
                i,
                null // null will remove any spaces added so far. Opening and closing range tags might
                // have received spaces as separate entities, but those might not be necessary for range:
                // "text <script>deleteme</script>."
              );
            } else {
              rangesToDelete.push(rangedOpeningTags[y].lastOpeningBracketAt, i);
            }
            // 2. delete the reference to this range from rangedOpeningTags[]
            // because there might be more ranged tags of the same name or
            // different, overlapping or encompassing ranged tags with same
            // or different name.
            rangedOpeningTags.splice(y, 1);
            console.log(
              `307 new \u001b[${33}m${`rangedOpeningTags`}\u001b[${39}m = ${JSON.stringify(
                rangedOpeningTags,
                null,
                4
              )}`
            );
            // 3. stop the loop
            break;
          }
        }
      } else {
        // opening tag.
        console.log(
          `320 \u001b[${31}m${`treatRangedTags():`}\u001b[${39}m opening ranged tag`
        );
        rangedOpeningTags.push(tag);
        console.log(
          `324 pushed tag{} to \u001b[${33}m${`rangedOpeningTags`}\u001b[${39}m\nwhich is now equal to:\n${JSON.stringify(
            rangedOpeningTags,
            null,
            4
          )}`
        );
      }
    }
  }

  function calculateWhitespaceToInsert(
    str, // whole string
    currCharIdx, // current index
    fromIdx, // leftmost whitespace edge around tag
    toIdx, // rightmost whitespace edge around tag
    lastOpeningBracketAt, // tag actually starts here (<)
    lastClosingBracketAt // tag actually ends here (>)
  ) {
    let strToEvaluateForLineBreaks = "";
    if (fromIdx < lastOpeningBracketAt) {
      strToEvaluateForLineBreaks += str.slice(fromIdx, lastOpeningBracketAt);
    }
    if (toIdx > lastClosingBracketAt) {
      strToEvaluateForLineBreaks += str.slice(lastClosingBracketAt, toIdx);
    }
    // if (!punctuation.includes(str[currCharIdx - 1])) {
    if (!punctuation.includes(str[currCharIdx]) && str[currCharIdx] !== "!") {
      return strToEvaluateForLineBreaks.includes("\n") ? "\n" : " ";
    }
    return "";
  }

  function calculateHrefToBeInserted() {
    if (
      opts.dumpLinkHrefsNearby &&
      Object.keys(hrefDump).length &&
      hrefDump.tagName === tag.name &&
      tag.lastOpeningBracketAt &&
      ((hrefDump.openingTagEnds &&
        tag.lastOpeningBracketAt > hrefDump.openingTagEnds) ||
        !hrefDump.openingTagEnds)
    ) {
      hrefInsertionActive = true;
      console.log(
        `368 calculateHrefToBeInserted(): hrefInsertionActive = "${hrefInsertionActive}"`
      );
    }

    if (hrefInsertionActive) {
      stringToInsertAfter = hrefDump.hrefValue;
      console.log(
        `375 calculateHrefToBeInserted(): stringToInsertAfter = ${stringToInsertAfter}`
      );
    }
  }

  // validation
  // ===========================================================================
  if (typeof str !== "string") {
    throw new TypeError(
      `string-strip-html/stripHtml(): [THROW_ID_01] Input must be string! Currently it's: ${typeof str}, equal to:\n${JSON.stringify(
        str,
        null,
        4
      )}`
    );
  }
  if (
    originalOpts !== undefined &&
    originalOpts !== null &&
    !isObj(originalOpts)
  ) {
    throw new TypeError(
      `string-strip-html/stripHtml(): [THROW_ID_02] Optional Options Object must be a plain object! Currently it's: ${typeof originalOpts}, equal to:\n${JSON.stringify(
        originalOpts,
        null,
        4
      )}`
    );
  }

  function resetHrefMarkers() {
    // reset the hrefDump
    if (hrefInsertionActive) {
      hrefDump = {};
      hrefInsertionActive = false;
    }
  }

  // prep opts
  // ===========================================================================
  const defaults = {
    ignoreTags: [],
    stripTogetherWithTheirContents: stripTogetherWithTheirContentsDefaults,
    skipHtmlDecoding: false,
    returnRangesOnly: false,
    trimOnlySpaces: false,
    dumpLinkHrefsNearby: false
  };
  const opts = Object.assign({}, defaults, originalOpts);
  if (!opts.stripTogetherWithTheirContents) {
    opts.stripTogetherWithTheirContents = [];
  } else if (
    typeof opts.stripTogetherWithTheirContents === "string" &&
    opts.stripTogetherWithTheirContents.length > 0
  ) {
    opts.stripTogetherWithTheirContents = [opts.stripTogetherWithTheirContents];
  }
  checkTypes(opts, defaults, {
    msg: "string-strip-html/stripHtml(): [THROW_ID_03*]",
    schema: {
      stripTogetherWithTheirContents: ["array", "null", "undefined"]
    }
  });
  if (!isArr(opts.stripTogetherWithTheirContents)) {
    // means either null or undefined
    opts.stripTogetherWithTheirContents = [];
  }

  const somethingCaught = {};
  if (
    opts.stripTogetherWithTheirContents &&
    isArr(opts.stripTogetherWithTheirContents) &&
    opts.stripTogetherWithTheirContents.length > 0 &&
    !opts.stripTogetherWithTheirContents.every((el, i) => {
      if (!(typeof el === "string")) {
        somethingCaught.el = el;
        somethingCaught.i = i;
        return false;
      }
      return true;
    })
  ) {
    throw new TypeError(
      `string-strip-html/stripHtml(): [THROW_ID_04] Optional Options Object's key stripTogetherWithTheirContents was set to contain not just string elements! For example, element at index ${
        somethingCaught.i
      } has a value ${
        somethingCaught.el
      } which is not string but ${typeof somethingCaught.el}.`
    );
  }

  console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

  // step 0.
  // ===========================================================================
  // End sooner if it's an empty or empty-ish string:

  if (str === "" || str.trim() === "") {
    console.log("473 ENDING EARLY, empty input");
    return str;
  }

  if (!opts.skipHtmlDecoding) {
    while (str !== ent.decode(str)) {
      str = ent.decode(str);
    }
  }

  // step 1.
  // ===========================================================================

  for (let i = 0, len = str.length; i < len; i++) {
    console.log(
      `\u001b[${36}m${`===============================`}\u001b[${39}m \u001b[${35}m${`str[ ${i} ] = ${`\u001b[${31}m${
        str[i].trim() === ""
          ? str[i] === null
            ? "null"
            : str[i] === "\n"
              ? "line break"
              : str[i] === "\t"
                ? "tab"
                : "space"
          : str[i]
      }\u001b[${39}m`}`}\u001b[${39}m \u001b[${36}m${`===============================`}\u001b[${39}m`
    );

    // catch the first ending of the spaces chunk that follows the closing bracket.
    // -------------------------------------------------------------------------
    // There can be no space after bracket, in that case, the result will be that character that
    // follows the closing bracket.
    // There can be bunch of spaces that end with EOF. In that case it's fine, this variable will
    // be null.
    if (
      Object.keys(tag).length &&
      tag.lastClosingBracketAt &&
      tag.lastClosingBracketAt < i &&
      str[i] !== " " &&
      spacesChunkWhichFollowsTheClosingBracketEndsAt === null
    ) {
      spacesChunkWhichFollowsTheClosingBracketEndsAt = i;
    }

    // catch the closing bracket of dirty tags with missing opening brackets
    // -------------------------------------------------------------------------
    if (str[i] === ">") {
      // tend cases where opening bracket of a tag is missing:
      if ((!tag || !Object.keys(tag).length) && i > 1) {
        console.log("522 TRAVERSE BACKWARDS");

        // traverse backwards either until start of string or ">" is found
        for (let y = i; y--; ) {
          console.log(`\u001b[${35}m${`str[${y}] = ${str[y]}`}\u001b[${39}m`);
          if (str[y - 1] === undefined || str[y] === ">") {
            console.log("528 BREAK");

            const startingPoint = str[y - 1] === undefined ? y : y + 1;
            const culprit = str.slice(startingPoint, i + 1);
            console.log(
              `533 CULPRIT: "${`\u001b[${31}m${culprit}\u001b[${39}m`}"`
            );

            // Check if the culprit starts with a tag that's more likely a tag
            // name (like "body" or "article"). Single-letter tag names are excluded
            // because they can be plausible, ie. in math texts and so on.
            // Nobody uses puts comparison signs between words like: "article > ",
            // but single letter names can be plausible: "a > b" in math.

            console.log(
              `543 "${trim(
                culprit
                  .trim()
                  .split(" ")
                  .filter(val => val.trim().length !== 0)
                  .filter((val, i) => i === 0),
                "/>"
              )}"`
            );

            if (
              str !== `<${trim(culprit.trim(), "/>")}>` && // recursion prevention
              definitelyTagNames.some(
                val =>
                  trim(
                    culprit
                      .trim()
                      .split(" ")
                      .filter(val => val.trim().length !== 0)
                      .filter((val, i) => i === 0),
                    "/>"
                  ).toLowerCase() === val
              ) &&
              stripHtml(`<${culprit.trim()}>`, opts) === ""
            ) {
              const whiteSpaceCompensation = calculateWhitespaceToInsert(
                str,
                i,
                startingPoint,
                i + 1,
                startingPoint,
                i + 1
              );
              console.log(
                `577 \u001b[${33}m${`SUBMIT RANGE #3: [${startingPoint}, ${i +
                  1}, "${whiteSpaceCompensation}"]`}\u001b[${39}m`
              );
              let deleteUpTo = i + 1;
              if (
                str[deleteUpTo] !== undefined &&
                str[deleteUpTo].trim().length === 0
              ) {
                for (let z = deleteUpTo; z < len; z++) {
                  if (str[z].trim().length !== 0) {
                    deleteUpTo = z;
                    break;
                  }
                  if (str[z + 1] === undefined) {
                    deleteUpTo = z + 1;
                    break;
                  }
                }
              }
              console.log(
                `601 PUSHING [${startingPoint}, ${deleteUpTo}, "${whiteSpaceCompensation}"]`
              );
              rangesToDelete.push(
                startingPoint,
                deleteUpTo,
                whiteSpaceCompensation
              );
            }
            break;
          }
        }
      }
    }

    // catch slash
    // -------------------------------------------------------------------------
    if (
      str[i] === "/" &&
      !(tag.quotes && tag.quotes.value) &&
      tag.lastOpeningBracketAt !== undefined &&
      tag.lastClosingBracketAt === undefined
    ) {
      console.log(`596 \u001b[${33}m${`tag.slashPresent`}\u001b[${39}m = true`);
      tag.slashPresent = true;
    }

    // catch punctuation, present after alleged tag start:
    // -------------------------------------------------------------------------
    if (
      tag.nameStarts &&
      tag.nameStarts < i &&
      !tag.quotes &&
      punctuation.includes(str[i]) &&
      !attrObj.equalsAt &&
      tag.attributes &&
      tag.attributes.length === 0 &&
      !tag.lastClosingBracketAt // still within a tag
    ) {
      console.log("612 PUNCTUATION! reset tag & attrObj = {}");
      tag = {};
      attrObj = {};
    }

    // catch double or single quotes
    // -------------------------------------------------------------------------
    if (str[i] === '"' || str[i] === "'") {
      if (
        tag.nameStarts &&
        tag.quotes &&
        tag.quotes.value &&
        tag.quotes.value === str[i]
      ) {
        // 1. finish assembling the "attrObj{}"
        attrObj.valueEnds = i;
        attrObj.value = str.slice(attrObj.valueStarts, i);
        console.log(
          `630 PUSHING ${`\u001b[${33}m${`attrObj`}\u001b[${39}m`} = ${JSON.stringify(
            attrObj,
            null,
            4
          )}`
        );
        if (!tag.attributes) {
          tag.attributes = [];
        }
        tag.attributes.push(attrObj);
        // reset:
        attrObj = {};
        // 2. finally, delete the quotes marker, we don't need it any more
        tag.quotes = undefined;
        // 3. if opts.dumpLinkHrefsNearby is on, catch href
        let hrefVal;
        if (
          opts.dumpLinkHrefsNearby &&
          tag.attributes.some(obj => {
            if (obj.name.toLowerCase() === "href") {
              hrefVal = obj.value;
              return true;
            }
          })
        ) {
          hrefDump = {
            tagName: tag.name,
            hrefValue: hrefVal
          };
          console.log(
            `660 SET ${`\u001b[${33}m${`hrefDump`}\u001b[${39}m`} = ${JSON.stringify(
              hrefDump,
              null,
              4
            )}`
          );
        }
      } else if (!tag.quotes && tag.nameStarts) {
        // 1. if it's opening marker, record the type and location of quotes
        console.log(
          `670 SET tag.quotes = {}, tag.quotes.value = ${
            str[i]
          }, tag.quotes.start = ${i}`
        );
        tag.quotes = {};
        tag.quotes.value = str[i];
        tag.quotes.start = i;
        // 2. start assembling the attribute object which we'll dump into tag.attributes[] array:
        if (
          attrObj.nameStarts &&
          attrObj.nameEnds &&
          attrObj.nameEnds < i &&
          attrObj.nameStarts < i &&
          !attrObj.valueStarts
        ) {
          attrObj.name = str.slice(attrObj.nameStarts, attrObj.nameEnds);
          console.log(
            `687 SET ${`\u001b[${33}m${`attrObj`}\u001b[${39}m`} = ${JSON.stringify(
              attrObj,
              null,
              4
            )}`
          );
        }
      }
    }

    // catch the ending of the tag name:
    // -------------------------------------------------------------------------
    if (
      tag.nameStarts !== undefined &&
      tag.nameEnds === undefined &&
      (str[i].trim().length === 0 ||
        str[i] === "/" ||
        str[i] === "<" ||
        str[i] === ">" ||
        (str[i].trim().length !== 0 && str[i + 1] === undefined))
    ) {
      // 1. mark the name ending
      tag.nameEnds = i;
      console.log(
        `711 SET \u001b[${33}m${`tag.nameEnds`}\u001b[${39}m = ${tag.nameEnds}`
      );
      // 2. extract the full name string
      tag.name = str.slice(
        tag.nameStarts,
        tag.nameEnds +
          (str[i] !== ">" && str[i] !== "/" && str[i + 1] === undefined ? 1 : 0)
      );
      console.log(
        `720 SET \u001b[${33}m${`tag.name`}\u001b[${39}m = ${tag.name}`
      );

      // if it's an ignored tag, bail:
      if (opts.ignoreTags.includes(tag.name)) {
        console.log(
          `726 Ignored tag - \u001b[${31}m${`WIPE AND RESET`}\u001b[${39}m`
        );
        tag = {};
        attrObj = {};
        continue;
      }

      // if we caught "----" from "<----" or "---->", bail:
      if (
        str[tag.nameStarts - 1] !== "!" && // protection against <!--
        tag.name.replace(/-/g, "").length === 0
      ) {
        console.log(
          `739 \u001b[${33}m${`ONLY DOTS PRESENT IN TAG NAME`}\u001b[${39}m - reset`
        );
        tag = {};
        continue;
      }
      // 3. submit it for deletion:
      if (!tag.onlyPlausible && (str[i + 1] === undefined || str[i] === "<")) {
        let endingRangeIndex = i + 1;
        if (str[i] === "<") {
          endingRangeIndex = i;
        }
        console.log(
          `751 ${`\u001b[${33}m${`tag.lastClosingBracketAt`}\u001b[${39}m`} = ${JSON.stringify(
            tag.lastClosingBracketAt,
            null,
            4
          )}`
        );
        const whiteSpaceCompensation = calculateWhitespaceToInsert(
          str,
          i,
          tag.leftOuterWhitespace,
          endingRangeIndex,
          tag.lastOpeningBracketAt,
          tag.lastClosingBracketAt || endingRangeIndex
        );
        console.log(
          `766 \u001b[${33}m${`SUBMIT RANGE #3: [${
            tag.leftOuterWhitespace
          }, ${endingRangeIndex}, "${whiteSpaceCompensation}"]`}\u001b[${39}m`
        );
        rangesToDelete.push(
          tag.leftOuterWhitespace,
          endingRangeIndex,
          whiteSpaceCompensation
        );
        // also,
        treatRangedTags(i);

        // then, for continuity, mark everything up accordingly if it's a new bracket:
        tag = {};
        attrObj = {};
      }
    }

    // catch beginning of an attribute value
    // -------------------------------------------------------------------------
    if (
      tag.quotes &&
      tag.quotes.start &&
      tag.quotes.start < i &&
      !tag.quotes.end &&
      attrObj.nameEnds &&
      attrObj.equalsAt &&
      !attrObj.valueStarts
    ) {
      if (attrObj.valueEnds) {
        // TODO - freak out
        console.log(
          `804 \u001b[${31}m${`ENDING OF AN ATTRIBUTE BEFORE STARTING`}\u001b[${39}m`
        );
      } else {
        attrObj.valueStarts = i;
      }
    }

    // catch rare cases when attributes name has some space after it, before equals
    // -------------------------------------------------------------------------
    if (
      !tag.quotes &&
      attrObj.nameEnds &&
      str[i] === "=" &&
      !attrObj.valueStarts
    ) {
      if (!attrObj.equalsAt) {
        attrObj.equalsAt = i;
        console.log(
          `822 SET \u001b[${33}m${`attrObj.equalsAt`}\u001b[${39}m = ${
            attrObj.equalsAt
          }`
        );
      } else {
        // TODO
        console.log(
          `829 \u001b[${33}m${`DOUBLE EQUALS AFTER SPACE!`}\u001b[${39}m ${`\u001b[${31}m${`TODO`}\u001b[${39}m`}`
        );
      }
    }

    // catch the ending of the whole attribute
    // -------------------------------------------------------------------------
    // for example, <a b c> this "c" ends "b" because it's not "equals" sign.
    // We even anticipate for cases where whitespace anywhere between attribute parts:
    // < article class = " something " / >
    if (
      !tag.quotes &&
      attrObj.nameStarts &&
      attrObj.nameEnds &&
      !attrObj.valueStarts &&
      str[i].trim().length !== 0 &&
      str[i] !== "="
    ) {
      if (!tag.attributes) {
        tag.attributes = [];
      }
      tag.attributes.push(attrObj);
      console.log("851 PUSHED attrObj into tag.attributes, reset attrObj");
      attrObj = {};
    }

    // catch the ending of an attribute's name
    // -------------------------------------------------------------------------
    if (!tag.quotes && attrObj.nameStarts && !attrObj.nameEnds) {
      console.log("858");
      if (str[i].trim().length === 0) {
        attrObj.nameEnds = i;
        console.log(
          `862 SET ${`\u001b[${33}m${`attrObj.nameEnds`}\u001b[${39}m`} = ${JSON.stringify(
            attrObj.nameEnds,
            null,
            4
          )}`
        );
        attrObj.name = str.slice(attrObj.nameStarts, attrObj.nameEnds);
      } else if (str[i] === "=") {
        // 1. BAU cases, equal hasn't been met
        if (!attrObj.equalsAt) {
          attrObj.nameEnds = i;
          console.log(
            `874 SET ${`\u001b[${33}m${`attrObj.nameEnds`}\u001b[${39}m`} = ${JSON.stringify(
              attrObj.nameEnds,
              null,
              4
            )}`
          );
          attrObj.equalsAt = i;
          console.log(
            `882 SET ${`\u001b[${33}m${`attrObj.equalsAt`}\u001b[${39}m`} = ${JSON.stringify(
              attrObj.equalsAt,
              null,
              4
            )}`
          );
          attrObj.name = str.slice(attrObj.nameStarts, attrObj.nameEnds);
        } else {
          // 2. there are multiple equals detected
          console.log(
            `892 \u001b[${33}m${`MULTIPLE EQUALS AFTER ATTR NAME`}\u001b[${39}m - ${`\u001b[${31}m${`TODO`}\u001b[${39}m`}`
          );
          // TODO
        }
      } else if (str[i] === "/" || str[i] === ">") {
        console.log(
          `898 SET ${`\u001b[${33}m${`attrObj.nameEnds`}\u001b[${39}m`} = ${JSON.stringify(
            attrObj.nameEnds,
            null,
            4
          )}`
        );
        attrObj.nameEnds = i;
        attrObj.name = str.slice(attrObj.nameStarts, attrObj.nameEnds);
        console.log(`906 \u001b[${33}m${`PUSH attrObj and wipe`}\u001b[${39}m`);
        if (!tag.attributes) {
          tag.attributes = [];
        }
        tag.attributes.push(attrObj);
        attrObj = {};
      } else if (str[i] === "<" || !isValidAttributeCharacter(str[i])) {
        console.log(
          `914 \u001b[${33}m${`ATTR NAME ENDS WITH NEW TAG`}\u001b[${39}m - ${`\u001b[${31}m${`TODO`}\u001b[${39}m`}`
        );
        // TODO - address both cases of onlyPlausible
        attrObj.nameEnds = i;
        attrObj.name = str.slice(attrObj.nameStarts, attrObj.nameEnds);
        if (!tag.attributes) {
          tag.attributes = [];
        }
        tag.attributes.push(attrObj);
        attrObj = {};
      }
    }

    // catch the beginning of an attribute's name
    // -------------------------------------------------------------------------
    if (
      !tag.quotes &&
      tag.nameEnds < i &&
      str[i] !== ">" &&
      str[i] !== "/" &&
      str[i] !== "!" &&
      str[i - 1].trim().length === 0 &&
      str[i].trim().length !== 0 &&
      !attrObj.nameStarts &&
      !tag.lastClosingBracketAt
    ) {
      if (
        isValidAttributeCharacter(`${str[i]}${str[i + 1]}`) &&
        str[i] !== "<"
      ) {
        attrObj.nameStarts = i;
        console.log(
          `943 SET \u001b[${33}m${`attrObj.nameStarts`}\u001b[${39}m = ${
            attrObj.nameStarts
          }`
        );
      } else if (tag.onlyPlausible && str[i] !== "<") {
        // If we have already suspicious tag where there's a space after "<", now it's fine to skip this
        // tag because it's not a tag - attribute starts with a non-legit symbol...
        // Wipe the whole tag record object:
        console.log(`951 \u001b[${33}m${`WIPE tag{}`}\u001b[${39}m`);
        tag = {};
      }
    }

    // catch "< /" - turn off "onlyPlausible"
    // -------------------------------------------------------------------------
    if (
      tag.lastOpeningBracketAt !== null &&
      tag.lastOpeningBracketAt < i &&
      str[i] === "/" &&
      tag.onlyPlausible
    ) {
      tag.onlyPlausible = false;
    }

    // catch character that follows an opening bracket:
    // -------------------------------------------------------------------------
    if (
      tag.lastOpeningBracketAt !== null &&
      tag.lastOpeningBracketAt < i &&
      str[i] !== "/" // there can be closing slashes in various places, legit and not
    ) {
      // 1. identify, is it definite or just plausible tag
      if (tag.onlyPlausible === undefined) {
        if (
          (str[i].trim().length === 0 || str[i] === "<") &&
          !tag.slashPresent
        ) {
          tag.onlyPlausible = true;
        } else {
          tag.onlyPlausible = false;
        }
        console.log(
          `985 SET \u001b[${33}m${`tag.onlyPlausible`}\u001b[${39}m = ${
            tag.onlyPlausible
          }`
        );
      }
      // 2. catch the beginning of the tag name. Consider custom HTML tag names
      // and also known (X)HTML tags:
      if (
        str[i].trim().length !== 0 &&
        tag.nameStarts === undefined &&
        str[i] !== "<" &&
        str[i] !== "/" &&
        str[i] !== ">" &&
        str[i] !== "!"
      ) {
        tag.nameStarts = i;
        tag.nameContainsLetters = false;
        console.log(
          `1003 \u001b[${33}m${`tag.nameStarts`}\u001b[${39}m = ${
            tag.nameStarts
          }`
        );
      }
    }

    // Catch letters in the tag name. Necessary to filter out false positives like "<------"
    if (
      tag.nameStarts &&
      !tag.quotes &&
      str[i].toLowerCase() !== str[i].toUpperCase()
    ) {
      tag.nameContainsLetters = true;
    }

    // catch closing bracket
    // -------------------------------------------------------------------------
    if (str[i] === ">") {
      if (tag.lastOpeningBracketAt !== undefined) {
        // 1. mark the index
        tag.lastClosingBracketAt = i;

        console.log(
          `1027 SET tag.lastClosingBracketAt = ${tag.lastClosingBracketAt}`
        );
        // 2. reset the spacesChunkWhichFollowsTheClosingBracketEndsAt
        spacesChunkWhichFollowsTheClosingBracketEndsAt = null;
        // 3. push attrObj into tag.attributes[]
        if (Object.keys(attrObj).length) {
          console.log(
            `1034 PUSH \u001b[${33}m${`attrObj`}\u001b[${39}m & reset`
          );
          if (!tag.attributes) {
            tag.attributes = [];
          }
          tag.attributes.push(attrObj);
          attrObj = {};
        }
        // 4. if opts.dumpLinkHrefsNearby is on and we just recorded an href,
        if (
          opts.dumpLinkHrefsNearby &&
          hrefDump.tagName &&
          !hrefDump.openingTagEnds
        ) {
          // finish assembling the hrefDump{}
          hrefDump.openingTagEnds = i; // or tag.lastClosingBracketAt, same
          console.log(
            `1051 SET ${`\u001b[${33}m${`hrefDump`}\u001b[${39}m`} = ${JSON.stringify(
              hrefDump,
              null,
              4
            )}`
          );
        }
      }
    }

    // catch the ending of the tag
    // -------------------------------------------------------------------------
    // the tag is "released" into "rangesApply":

    if (tag.lastOpeningBracketAt !== undefined) {
      if (tag.lastClosingBracketAt === undefined) {
        if (
          tag.lastOpeningBracketAt < i &&
          str[i] !== "<" && // to prevent cases like "text <<<<<< text"
          (str[i + 1] === undefined || str[i + 1] === "<")
        ) {
          console.log(`1072 str[i + 1] = ${str[i + 1]}`);
          // find out the tag name earlier than dedicated tag name ending catching section:
          if (str[i + 1] === undefined) {
            const tagName = str
              .slice(tag.nameStarts, tag.nameEnds ? tag.nameEnds : i + 1)
              .toLowerCase();
            console.log(
              `1079 ${`\u001b[${33}m${`tagName`}\u001b[${39}m`} = ${JSON.stringify(
                tagName,
                null,
                4
              )}`
            );

            // if it's an ignored tag, bail:
            if (opts.ignoreTags.includes(tagName)) {
              console.log(
                `1089 Ignored tag - \u001b[${31}m${`WIPE AND RESET`}\u001b[${39}m`
              );
              tag = {};
              attrObj = {};
              continue;
            }

            // if the tag is only plausible (there's space after opening bracket) and it's not among
            // recognised tags, leave it as it is:
            if (
              definitelyTagNames.concat(singleLetterTags).includes(tagName) &&
              (tag.onlyPlausible === false ||
                (tag.onlyPlausible === true && tag.attributes.length))
            ) {
              calculateHrefToBeInserted();
              console.log(
                `1101 ${`\u001b[${33}m${`stringToInsertAfter`}\u001b[${39}m`} = ${JSON.stringify(
                  stringToInsertAfter,
                  null,
                  4
                )}`
              );

              const whiteSpaceCompensation = calculateWhitespaceToInsert(
                str,
                i,
                tag.leftOuterWhitespace,
                i + 1,
                tag.lastOpeningBracketAt,
                tag.lastClosingBracketAt
              );

              console.log(
                `1118 \u001b[${33}m${`SUBMIT RANGE: [${
                  tag.leftOuterWhitespace
                }, ${i +
                  1}, "${whiteSpaceCompensation}${stringToInsertAfter}${whiteSpaceCompensation}"]`}\u001b[${39}m`
              );

              rangesToDelete.push(
                tag.leftOuterWhitespace,
                i + 1,
                `${whiteSpaceCompensation}${stringToInsertAfter}${whiteSpaceCompensation}`
              );

              resetHrefMarkers();

              // also,
              treatRangedTags(i);
            } else {
              continue;
            }
          }
        }
      } else if (
        (i > tag.lastClosingBracketAt && str[i].trim().length !== 0) ||
        str[i + 1] === undefined
      ) {
        // case 2. closing bracket HAS BEEN met
        // we'll look for a non-whitespace character and delete up to it
        // BUT, we'll wipe the tag object only if that non-whitespace character
        // is not a ">". This way we'll catch and delete sequences of closing brackets.

        // part 1.

        let endingRangeIndex = tag.lastClosingBracketAt === i ? i + 1 : i;
        console.log(
          `1152 ${`\u001b[${33}m${`endingRangeIndex`}\u001b[${39}m`} = ${JSON.stringify(
            endingRangeIndex,
            null,
            4
          )}`
        );

        if (
          opts.trimOnlySpaces &&
          endingRangeIndex === len - 1 &&
          spacesChunkWhichFollowsTheClosingBracketEndsAt !== null &&
          spacesChunkWhichFollowsTheClosingBracketEndsAt < i
        ) {
          endingRangeIndex = spacesChunkWhichFollowsTheClosingBracketEndsAt;
        }

        // if it's a dodgy suspicious tag where space follows opening bracket, there's an extra requirement
        // for this tag to be considered a tag - there has to be at least one attribute with equals if
        // the tag name is not recognised.

        console.log(
          `1173 ${`\u001b[${33}m${`tag.name`}\u001b[${39}m`} = ${JSON.stringify(
            tag.name,
            null,
            4
          )}`
        );
        if (
          !tag.onlyPlausible ||
          // tag name is recognised and there are no attributes:
          ((tag.attributes.length === 0 &&
            tag.name &&
            definitelyTagNames
              .concat(singleLetterTags)
              .includes(tag.name.toLowerCase())) ||
            // OR there is at least one equals that follow the attribute's name:
            (tag.attributes &&
              tag.attributes.some(attrObj => attrObj.equalsAt)))
        ) {
          // if it's an ignored tag, bail:
          if (opts.ignoreTags.includes(tag.name)) {
            console.log(
              `1194 Ignored tag - \u001b[${31}m${`WIPE AND RESET`}\u001b[${39}m`
            );
            tag = {};
            attrObj = {};
            continue;
          }

          console.log(
            `1202\n███████████████████████████████████████\ntag.leftOuterWhitespace = ${
              tag.leftOuterWhitespace
            }`
          );
          console.log(`endingRangeIndex = ${endingRangeIndex}`);
          console.log(`tag.lastOpeningBracketAt = ${tag.lastOpeningBracketAt}`);
          console.log(
            `tag.lastClosingBracketAt = ${
              tag.lastClosingBracketAt
            }\n███████████████████████████████████████`
          );

          const whiteSpaceCompensation = calculateWhitespaceToInsert(
            str,
            i,
            tag.leftOuterWhitespace,
            endingRangeIndex,
            tag.lastOpeningBracketAt,
            tag.lastClosingBracketAt
          );

          // calculate optional opts.dumpLinkHrefsNearby HREF to insert
          stringToInsertAfter = "";
          hrefInsertionActive = false;

          calculateHrefToBeInserted();

          console.log(
            `1224 \u001b[${33}m${`SUBMIT RANGE #2: [${
              tag.leftOuterWhitespace
            }, ${endingRangeIndex}, "${whiteSpaceCompensation}" + "${stringToInsertAfter}" + "${whiteSpaceCompensation}"]`}\u001b[${39}m`
          );

          rangesToDelete.push(
            tag.leftOuterWhitespace,
            endingRangeIndex,
            `${whiteSpaceCompensation}${stringToInsertAfter}${whiteSpaceCompensation}`
          );

          resetHrefMarkers();

          // also,
          treatRangedTags(i);
        } else {
          console.log(`1246 \u001b[${33}m${`RESET tag{}`}\u001b[${39}m`);
          tag = {};
        }

        // part 2.
        if (str[i] !== ">") {
          console.log(`1252 \u001b[${33}m${`RESET tag{}`}\u001b[${39}m`);
          tag = {};
        }
      }
    }

    // catch opening bracket
    // -------------------------------------------------------------------------
    if (str[i] === "<" && str[i - 1] !== "<") {
      // cater sequences of opening brackets "<<<<div>>>"
      if (str[i + 1] === ">") {
        // cater cases like: "<><><>"
        continue;
      } else {
        // 1. Before (re)setting flags, check, do we have a case of a tag with a
        // missing closing bracket, and this is a new tag following it.
        if (tag.nameEnds && tag.nameEnds < i && !tag.lastClosingBracketAt) {
          if (
            (tag.onlyPlausible === true &&
              tag.attributes &&
              tag.attributes.length) ||
            tag.onlyPlausible === false
          ) {
            // tag.onlyPlausible can be undefined too
            const whiteSpaceCompensation = calculateWhitespaceToInsert(
              str,
              i,
              tag.leftOuterWhitespace,
              i,
              tag.lastOpeningBracketAt,
              i
            );
            console.log(
              `1279 PUSH range [${
                tag.leftOuterWhitespace
              }, ${i}, "${whiteSpaceCompensation}"]`
            );
            rangesToDelete.push(
              tag.leftOuterWhitespace,
              i,
              whiteSpaceCompensation
            );

            // also,
            treatRangedTags(i);

            // then, for continuity, mark everything up accordingly if it's a new bracket:
            tag = {};
            attrObj = {};
          } else if (
            tag.onlyPlausible &&
            !definitelyTagNames.concat(singleLetterTags).includes(tag.name) &&
            !(tag.attributes && tag.attributes.length)
          ) {
            console.log("1296 RESET tag & attrObj");
            tag = {};
            attrObj = {};
          }
        }

        // 2. if new tag starts, reset:
        if (
          tag.lastOpeningBracketAt !== undefined &&
          tag.onlyPlausible &&
          tag.name &&
          !tag.quotes
        ) {
          // reset:
          tag.lastOpeningBracketAt = undefined;
          tag.onlyPlausible = false;
        }

        if (
          (tag.lastOpeningBracketAt === undefined || !tag.onlyPlausible) &&
          !tag.quotes
        ) {
          tag.lastOpeningBracketAt = i;
          tag.slashPresent = false;
          tag.attributes = [];

          // since 2.1.0 we started to care about not trimming outer whitespace which is not spaces.
          // For example, " \t <a> \n ". Tag's whitespace boundaries should not extend to string
          // edges but until "\t" on the left and "\n" on the right IF opts.trimOnlySpaces is on.

          if (chunkOfWhitespaceStartsAt === null) {
            tag.leftOuterWhitespace = i;
          } else if (opts.trimOnlySpaces && chunkOfWhitespaceStartsAt === 0) {
            // if whitespace extends to the beginning of a string, there's a risk it might include
            // not only spaces. To fix that, switch to space-only range marker:
            tag.leftOuterWhitespace = chunkOfSpacesStartsAt || i;
          } else {
            tag.leftOuterWhitespace = chunkOfWhitespaceStartsAt;
          }

          // tag.leftOuterWhitespace =
          //   chunkOfWhitespaceStartsAt === null ? i : chunkOfWhitespaceStartsAt;

          console.log(
            `1304 SET \u001b[${33}m${`tag.leftOuterWhitespace`}\u001b[${39}m = ${
              tag.leftOuterWhitespace
            }; \u001b[${33}m${`tag.lastOpeningBracketAt`}\u001b[${39}m = ${
              tag.lastOpeningBracketAt
            }; \u001b[${33}m${`tag.slashPresent`}\u001b[${39}m = false`
          );

          // tend the HTML comments: <!-- --> or CDATA: <![CDATA[ ... ]]>
          // if opening comment tag is detected, traverse forward aggressively
          // until EOL or "-->" is reached and offset outer index "i".
          if (
            `${str[i + 1]}${str[i + 2]}${str[i + 3]}` === "!--" ||
            `${str[i + 1]}${str[i + 2]}${str[i + 3]}${str[i + 4]}${str[i + 5]}${
              str[i + 6]
            }${str[i + 7]}${str[i + 8]}` === "![CDATA["
          ) {
            console.log(
              `1321 \u001b[${31}m${`███████████████████████████████████████`}\u001b[${39}m`
            );
            // make a note which one it is:
            let cdata = true;
            if (str[i + 2] === "-") {
              cdata = false;
            }
            console.log("1328 traversing forward");
            let closingFoundAt = undefined;
            for (let y = i; y < len; y++) {
              console.log(
                `${`\u001b[${33}m${`str[${y}]`}\u001b[${39}m`} = ${str[y]}`
              );
              if (
                (!closingFoundAt &&
                  (cdata && `${str[y - 2]}${str[y - 1]}${str[y]}` === "]]>")) ||
                (!cdata && `${str[y - 2]}${str[y - 1]}${str[y]}` === "-->")
              ) {
                closingFoundAt = y;
                console.log(`1340 closingFoundAt = ${closingFoundAt}`);
              }

              if (
                closingFoundAt &&
                ((closingFoundAt < y && str[y].trim().length !== 0) ||
                  str[y + 1] === undefined)
              ) {
                console.log("1348 END detected");
                let rangeEnd = y;
                if (
                  (str[y + 1] === undefined && str[y].trim().length === 0) ||
                  str[y] === ">"
                ) {
                  rangeEnd += 1;
                }
                const whiteSpaceCompensation = calculateWhitespaceToInsert(
                  str,
                  y,
                  tag.leftOuterWhitespace,
                  rangeEnd,
                  tag.lastOpeningBracketAt,
                  closingFoundAt
                );
                console.log(
                  `1357 PUSH range [${
                    tag.leftOuterWhitespace
                  }, ${rangeEnd}, "${whiteSpaceCompensation}"]`
                );
                rangesToDelete.push(
                  tag.leftOuterWhitespace,
                  rangeEnd,
                  whiteSpaceCompensation
                );
                // offset:
                i = y - 1;
                if (str[y] === ">") {
                  i = y;
                }
                // resets:
                tag = {};
                attrObj = {};
                // finally,
                break;
              }
            }
          }
        }
      }
    }

    // catch whitespace
    // -------------------------------------------------------------------------
    if (str[i].trim() === "") {
      // 1. catch chunk boundaries:
      if (chunkOfWhitespaceStartsAt === null) {
        chunkOfWhitespaceStartsAt = i;
        console.log(
          `1404 SET \u001b[${33}m${`chunkOfWhitespaceStartsAt`}\u001b[${39}m = ${chunkOfWhitespaceStartsAt}`
        );

        // TODO
        // some housekeeping
        if (
          tag.lastOpeningBracketAt !== undefined &&
          tag.lastOpeningBracketAt < i &&
          tag.nameStarts &&
          tag.nameStarts < tag.lastOpeningBracketAt &&
          i === tag.lastOpeningBracketAt + 1 &&
          // insurance against tail part of ranged tag being deleted:
          !rangedOpeningTags.some(
            rangedTagObj => rangedTagObj.name === tag.name
          )
        ) {
          console.log(
            `1457 RESET ALL \u001b[${31}m${`███████████████████████████████████████`}\u001b[${39}m`
          );
          tag.onlyPlausible = true;
          tag.name = undefined;
          tag.nameStarts = undefined;
        }
      }
    } else if (chunkOfWhitespaceStartsAt !== null) {
      // 1. piggyback the catching of the attributes with equal and no value
      if (
        !tag.quotes &&
        tag.equalsSpottedAt === chunkOfWhitespaceStartsAt - 1 &&
        tag.attributeNameEnds &&
        tag.equalsSpottedAt > tag.attributeNameEnds &&
        str[i] !== '"' &&
        str[i] !== "'"
      ) {
        if (isObj(attrObj)) {
          // cases where there's just equal after tag name <article = >
          attrObj = {};
        }
        attrObj.equalsAt = tag.equalsSpottedAt;
        console.log(
          `1423 PUSHING ${`\u001b[${33}m${`attrObj`}\u001b[${39}m`} = ${JSON.stringify(
            attrObj,
            null,
            4
          )}`
        );
        if (!tag.attributes) {
          tag.attributes = [];
        }
        tag.attributes.push(attrObj);
        // reset:
        attrObj = {};
        tag.equalsSpottedAt = undefined;
      }
      // 2. reset whitespace marker
      chunkOfWhitespaceStartsAt = null;
      console.log(
        `1440 SET \u001b[${33}m${`chunkOfWhitespaceStartsAt`}\u001b[${39}m = ${chunkOfWhitespaceStartsAt}`
      );
    }

    // catch spaces-only chunks (needed for outer trim option opts.trimOnlySpaces)
    // -------------------------------------------------------------------------

    if (str[i] === " ") {
      // 1. catch spaces boundaries:
      if (chunkOfSpacesStartsAt === null) {
        chunkOfSpacesStartsAt = i;
        console.log(
          `1452 SET \u001b[${33}m${`chunkOfSpacesStartsAt`}\u001b[${39}m = ${chunkOfSpacesStartsAt}`
        );
      }
    } else if (chunkOfSpacesStartsAt !== null) {
      // 2. reset the marker
      chunkOfSpacesStartsAt = null;
      console.log(
        `1459 SET \u001b[${33}m${`chunkOfSpacesStartsAt`}\u001b[${39}m = ${chunkOfSpacesStartsAt}`
      );
    }

    // log all
    // -------------------------------------------------------------------------
    console.log(`\u001b[${32}m${`===============`}\u001b[${39}m`);
    // console.log(
    //   `${`\u001b[${33}m${`chunkOfSpacesStartsAt`}\u001b[${39}m`} = ${JSON.stringify(
    //     chunkOfSpacesStartsAt,
    //     null,
    //     4
    //   )}`
    // );
    console.log(
      `${`\u001b[${33}m${`rangedOpeningTags`}\u001b[${39}m`} = ${JSON.stringify(
        rangedOpeningTags,
        null,
        4
      )}`
    );
    console.log(
      `1474 ${`\u001b[${33}m${`spacesChunkWhichFollowsTheClosingBracketEndsAt`}\u001b[${39}m`} = ${JSON.stringify(
        spacesChunkWhichFollowsTheClosingBracketEndsAt,
        null,
        4
      )}`
    );
    // console.log(
    //   `${`\u001b[${33}m${`chunkOfWhitespaceStartsAt`}\u001b[${39}m`} = ${JSON.stringify(
    //     chunkOfWhitespaceStartsAt,
    //     null,
    //     4
    //   )}`
    // );
    console.log(
      `1488 ${`\u001b[${33}m${`hrefDump`}\u001b[${39}m`} = ${JSON.stringify(
        hrefDump,
        null,
        4
      )}`
    );
    console.log(
      `${
        Object.keys(tag).length
          ? `${`\u001b[${35}m${`tag`}\u001b[${39}m`} = ${Object.keys(tag)
              .map(key => {
                return `${`\u001b[${90}m${`\u001b[${7}m${key}\u001b[${27}m`}\u001b[${39}m`} ${`\u001b[${90}m: ${
                  isObj(tag[key]) || isArr(tag[key])
                    ? JSON.stringify(tag[key], null, 4)
                    : tag[key]
                }\u001b[${39}m`}`;
              })
              .join(",\n")}\n`
          : ""
      }${
        rangesToDelete.current()
          ? `RANGES: ${JSON.stringify(rangesToDelete.current(), null, 0)}`
          : ""
      }`
    );
  }

  console.log("\n\n\n\n\n\n END \n\n\n\n\n\n");

  if (rangesToDelete.current()) {
    if (opts.returnRangesOnly) {
      console.log(
        `1520 RETURNING: ${JSON.stringify(
          rangesToDelete.current(),
          null,
          4
        )}\n\n\n\n\n\n`
      );
      return rangesToDelete.current();
    }
    const untrimmedRes = rangesApply(str, rangesToDelete.current());
    if (opts.trimOnlySpaces) {
      console.log(
        `1531 returning result with only spaces trimmed: "${trim(
          untrimmedRes,
          " "
        )}"\n\n\n\n\n\n`
      );
      return trim(untrimmedRes, " ");
    }
    console.log(
      `1539 returning fully trimmed result: "${untrimmedRes.trim()}"\n\n\n\n\n\n`
    );
    return untrimmedRes.trim();
  }
  if (opts.trimOnlySpaces) {
    console.log(
      `1545 RETURNING original string with only spaces trimmed:\n"${str.trim()}"\n\n\n\n\n\n`
    );
    return trim(str, " ");
  }
  console.log(
    `1550 RETURNING only fully trimmed:\n"${str.trim()}"\n\n\n\n\n\n`
  );
  return str.trim();
}

export default stripHtml;
