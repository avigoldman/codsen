/**
 * detect-templating-language
 * Detects various templating languages present in string
 * Version: 2.0.10
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/detect-templating-language/
 */

(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
typeof define === 'function' && define.amd ? define(['exports'], factory) :
(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.detectTemplatingLanguage = {}));
}(this, (function (exports) { 'use strict';

/**
 * regex-is-jinja-nunjucks
 * Regular expression for detecting Jinja or Nunjucks code
 * Version: 2.0.10
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/regex-is-jinja-nunjucks/
 */
function isJinjaNunjucksRegex() {
  return /{%|{{|%}|}}/gi;
}

/**
 * regex-is-jsp
 * Regular expression for detecting JSP (Java Server Pages) code
 * Version: 2.0.10
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/regex-is-jsp/
 */
function isJSP() {
  return /<%|%>|<\s*jsp:|<\s*cms:|<\s*c:|\${\s*jsp/gi;
}

/**
 * regex-jinja-specific
 * Regular expression for detecting Python-specific Jinja code
 * Version: 2.0.10
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/regex-jinja-specific/
 */
function isJinjaSpecific() {
  return /(set\s*[\w]+\s*=\s*namespace\()|({{['"][\w]+['"]\s+if)|(['"]%x?[+0]?[.>^<]?\d+[\w%]['"]\|format\()/gi;
}

var version$1 = "2.0.10";

const version = version$1;
function detectLang(str) {
    let name = null;
    if (typeof str !== "string") {
        throw new TypeError(`detect-templating-language: [THROW_ID_01] Input must be string! It was given as ${JSON.stringify(str, null, 4)} (type ${typeof str}).`);
    }
    if (!str) {
        // early ending on empty string
        return {
            name,
        };
    }
    // real action starts
    // ---------------------------------------------------------------------------
    if (isJinjaNunjucksRegex().test(str)) {
        name = "Nunjucks";
        if (isJinjaSpecific().test(str)) {
            name = "Jinja";
        }
    }
    else if (isJSP().test(str)) {
        name = "JSP";
    }
    return {
        name,
    };
}

exports.detectLang = detectLang;
exports.version = version;

Object.defineProperty(exports, '__esModule', { value: true });

})));
