const t = require("tap");
const { allHtmlAttribs } = require("../dist/html-all-known-attributes.umd");

t.test(`1 - umd - there are 699 attrib names`, t => {
  t.ok(allHtmlAttribs.length === 699);
  t.end();
});