/**
 * regex-is-jinja-nunjucks
 * Regular expression for detecting Jinja or Nunjucks code
 * Version: 1.1.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/regex-is-jinja-nunjucks/
 */

var version = "1.1.1";

function isJinjaNunjucksRegex() {
  return /{%|{{|%}|}}/gi;
}

export { isJinjaNunjucksRegex, version };