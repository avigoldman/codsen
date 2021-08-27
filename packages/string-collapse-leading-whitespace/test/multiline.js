import tap from "tap";
import { collWhitespace as c } from "../dist/string-collapse-leading-whitespace.esm.js";

tap.test("01 - multiple lines - mac endings", (t) => {
  t.equal(c("  abc  \n  def  \n  ghi  "), " abc  \n  def  \n  ghi ", "01");
  t.end();
});

tap.test("02 - multiple lines - windows endings, clean", (t) => {
  t.equal(
    c("  abc  \r\n  def  \r\n  ghi  "),
    " abc  \r\n  def  \r\n  ghi ",
    "02"
  );
  t.end();
});

tap.test("03 - multiple lines - windows endings, mixed", (t) => {
  t.equal(c("  abc  \n  def  \r\n  ghi  "), " abc  \n  def  \r\n  ghi ", "03");
  t.end();
});
