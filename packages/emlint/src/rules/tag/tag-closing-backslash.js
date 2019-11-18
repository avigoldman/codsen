// rule: tag-closing-backslash
// -----------------------------------------------------------------------------

// it flags up any tags which have whitespace between opening bracket and first
// tag name letter:
//
// < table>
// <   a href="">
// <\n\nspan>

import { left } from "string-left-right";
const BACKSLASH = "\u005C";

function tagClosingBackslash(context) {
  return {
    html: function(node) {
      console.log(
        `███████████████████████████████████████ tagClosingBackslash() ███████████████████████████████████████`
      );
      // since we know the location of the closing bracket,
      // let's look to the left, is there a slash and check the distance
      console.log(
        `${`\u001b[${33}m${`node`}\u001b[${39}m`} = ${JSON.stringify(
          node,
          null,
          4
        )}`
      );
      if (
        Number.isInteger(node.end) &&
        context.str[node.end - 1] === ">" && // necessary because in the future unclosed tags will be recognised!
        context.str[left(context.str, node.end - 1)] === BACKSLASH
      ) {
        let message = node.void
          ? "Replace backslash with slash."
          : "Delete this.";
        const backSlashPos = left(context.str, node.end - 1);

        // So we confirmed there's left slash.
        // Is it completely rogue or is it meant to be self-closing tag's closing?
        let idxFrom = left(context.str, backSlashPos) + 1;
        let whatToInsert = node.void ? "/" : "";
        console.log(
          `044 ${`\u001b[${35}m${`initial`}\u001b[${39}m`} ${`\u001b[${33}m${`idxFrom`}\u001b[${39}m`} = ${JSON.stringify(
            idxFrom,
            null,
            4
          )}; ${`\u001b[${33}m${`whatToInsert`}\u001b[${39}m`} = ${JSON.stringify(
            whatToInsert,
            null,
            4
          )}`
        );

        if (
          context.processedRulesConfig["tag-space-before-closing-slash"] &&
          ((Number.isInteger(
            context.processedRulesConfig["tag-space-before-closing-slash"]
          ) &&
            context.processedRulesConfig["tag-space-before-closing-slash"] >
              0) ||
            (Array.isArray(
              context.processedRulesConfig["tag-space-before-closing-slash"]
            ) &&
              context.processedRulesConfig[
                "tag-space-before-closing-slash"
              ][0] > 0 &&
              context.processedRulesConfig[
                "tag-space-before-closing-slash"
              ][1] === "never"))
        ) {
          // include any and all the whitespace to the left as well
          idxFrom = left(context.str, backSlashPos) + 1;
          console.log(
            `075 SET ${`\u001b[${32}m${`idxFrom`}\u001b[${39}m`} = ${idxFrom}`
          );
        }

        // but if spaces are requested via "tag-space-before-closing-slash",
        // ensure they're added
        if (
          Array.isArray(
            context.processedRulesConfig["tag-space-before-closing-slash"]
          ) &&
          context.processedRulesConfig["tag-space-before-closing-slash"][0] >
            0 &&
          context.processedRulesConfig["tag-space-before-closing-slash"][1] ===
            "always"
        ) {
          idxFrom = left(context.str, backSlashPos) + 1;
          whatToInsert = ` ${whatToInsert}`;
          console.log(
            `093 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`idxFrom`}\u001b[${39}m`} = ${idxFrom}; ${`\u001b[${33}m${`whatToInsert`}\u001b[${39}m`} = "${whatToInsert}"`
          );
          // but if space is already present at the beginning of the range at
          // index left(context.str, backSlashPos) + 1, don't add one there
          if (node.void && context.str[idxFrom + 1] === " ") {
            idxFrom++;
            whatToInsert = whatToInsert.trim();
            console.log(
              `101 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`idxFrom`}\u001b[${39}m`} = ${idxFrom}; ${`\u001b[${33}m${`whatToInsert`}\u001b[${39}m`} = "${whatToInsert}"`
            );
          } else if (!node.void) {
            whatToInsert = whatToInsert.trim();
            console.log(
              `106 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`whatToInsert`}\u001b[${39}m`} = "${whatToInsert}"`
            );
          }
        }

        console.log(
          `112 ${`\u001b[${32}m${`FINAL`}\u001b[${39}m`} ${`\u001b[${33}m${`idxFrom`}\u001b[${39}m`} = ${JSON.stringify(
            idxFrom,
            null,
            4
          )}`
        );

        // maybe slashes are forbidden on void tags?
        if (
          node.void &&
          Array.isArray(context.processedRulesConfig["tag-void-slash"]) &&
          context.processedRulesConfig["tag-void-slash"][0] > 0 &&
          context.processedRulesConfig["tag-void-slash"][1] === "never"
        ) {
          whatToInsert = "";
          idxFrom = left(context.str, backSlashPos) + 1;
          message = "Delete this.";
        }

        context.report({
          ruleId: "tag-closing-backslash",
          message,
          idxFrom,
          idxTo: node.end - 1,
          fix: { ranges: [[idxFrom, node.end - 1, whatToInsert]] }
        });
      }
    }
  };
}

export default tagClosingBackslash;