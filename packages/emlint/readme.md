# EMLint

> Detects errors in HTML/CSS, proposes fixes, email-template friendly

[![Minimum Node version required][node-img]][node-url]
[![Repository is on GitLab][gitlab-img]][gitlab-url]
[![Coverage][cov-img]][cov-url]
[![View dependencies as 2D chart][deps2d-img]][deps2d-url]
[![Downloads/Month][downloads-img]][downloads-url]
[![Test in browser][runkit-img]][runkit-url]
[![Code style: prettier][prettier-img]][prettier-url]
[![MIT License][license-img]][license-url]

## Table of Contents

- [Install](#install)
- [Aim](#aim)
- [Idea](#idea)
- [Description for the final product](#description-for-the-final-product)
- [API](#api)
- [Example #1](#example-1)
- [Breaking the JS best-practice rules](#breaking-the-js-best-practice-rules)
- [Contributing](#contributing)
- [Licence](#licence)

## Install

```bash
npm i emlint
```

```js
const { emlint, version } = require("emlint");
// or:
import { emlint, version } from "emlint";
```

Here's what you'll get:

| Type                                                                                                    | Key in `package.json` | Path                 | Size  |
| ------------------------------------------------------------------------------------------------------- | --------------------- | -------------------- | ----- |
| Main export - **CommonJS version**, transpiled to ES5, contains `require` and `module.exports`          | `main`                | `dist/emlint.cjs.js` | 23 KB |
| **ES module** build that Webpack/Rollup understands. Untranspiled ES6 code with `import`/`export`.      | `module`              | `dist/emlint.esm.js` | 25 KB |
| **UMD build** for browsers, transpiled, minified, containing `iife`'s and has all dependencies baked-in | `browser`             | `dist/emlint.umd.js` | 41 KB |

**[⬆ back to top](#)**

## Aim

To be the most advanced, automated and smart (X)HTML/CSS code linting tool that humanity has ever produced.

## Idea

#### Is it me (Roy) or current HTML/CSS linters on the market (all of them) are both _anaemic_, _aged_ and not really aimed at fixing _messy code_?

- By **anaemic** I mean, for example, at the time of writing, the [HTMLHint](https://github.com/htmlhint/HTMLHint/wiki/Rules) has 23 rules. For comparison, leading JavaScript linter [ESLint](https://github.com/eslint/eslint/tree/master/lib/rules) at the time of writing has 265 rules.

- By **aged** I mean, either the codebases are convoluted, API is often tied with CLI (command line application) features (even `ESLint` is coupled with its CLI - check its `bin/` key in `package.json`).

- By **aged** I also mean, codebases are not fully harnessing the Rollup to produce 3 builds: ES Modules (with `import`/`export`), CJS (with `require`) and UMD (with `iife`s). What's more, it's beneficial to commit builds, so that users can tap the _UMD build_ straight from various [CDNs](https://unpkg.com/emlint) such as `unpkg` and plug front-ends to always-latest, website-friendly code. Same API on UMD build though.

- By **not really aimed at fixing messy code** I mean that _every rule should be fixable_, and the rules should be aiming to at least compete with a human knack of creating code errors. We should try to identify all the possible cases of messed up code before we even move on to checking _code patterns_.

Another example, `PostCSS`. It's a brilliant tool when your code is _valid_. But as a tool, it is not meant to patch up _errors in messed up CSS_. The first thing it will do is it will try to **parse your CSS** and will throw upon the first error. That's the _end of story_ if CSS has any issues. You'll be lucky if parser's error stack will report something meaningful.

**[⬆ back to top](#)**

## Description for the final product

This is a linter API, still in _a baby state_ but eventually it will able to detect **all** of the following:

- HTML/CSS code errors
- Missing tags
- Redundant tags
- Enforce tag patterns such as _Hybrid Email_ or _Outlook Shadow Code_
- If would be nice to detect chunks of _shifted code_ (nobody has done it before)
- Email-specific feature, detect issues with Micro\$oft VML objects (for example, the output of [backgrounds.cm](https://backgrounds.cm)) - both bugs and settings considering surrounding code
- Check the shadow code which is commented-out

**Other features:**

- This is an API. It is a _function_, decoupled from both: CLI operations and anything file-system-related (reading/writing files). Let other CLI's and web apps and Electron apps tap this API.
- Work with as little or as much of HTML file as it is given. Unless you explicitly request to treat input as the final, complete HMTL document. Often linters expect only the latter case and are not suitable to lint snippets, partials and code pieces.
- It would be nice to heuristically recognise logical blocks such as "if" and "for". After all, `%%_if_%%`, `${if(...)}` and `_if__` are just three kinds of the same, "if" statement, right?
- Anticipate and be cool with "blind spots" — areas where algorithm just gave up.

**PS.** This is not a _validator_ (like [W3C Markup Validator](https://validator.w3.org)). It's a tool to patch up errors **BEFORE** you feed your code to a validator. It's a tool to save you time looking for that missing bracket in your email template. It's a tool that will tell you upfront if your template will look messed up in Outlook.

**[⬆ back to top](#)**

## API

This library exports _a plain object_. The main function `emlint()` and other goodies are placed under **keys** of that plain object, which you should consume by [destructuring what you `import`ed/`require`d](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). For example:

```js
const { emlint, version } = require("emlint");
// or:
import { emlint, version } from "emlint";
```

Above, the [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) operation grabs all the values from those keys and dumps them in variable constants. Here they are:

| Key       | Type     | Description                                                                |
| --------- | -------- | -------------------------------------------------------------------------- |
| `emlint`  | Function | Main function to which you feed your code (as a string); see its API below |
| `version` | String   | Taken straight from `package.json`. Should match what's on npm.            |

**[⬆ back to top](#)**

### API - `emlint()` - input

**emlint(str, \[opts])** — in other words, it's a _function_, which takes two arguments:

1. **first** argument — string,
2. optional (marked with square brackets above) **second** argument — _An Optional Options Object_ — a plain object

| `emlint()` input argument | Arbitrary name | Type         | Obligatory? | Description                                        |
| ------------------------- | -------------- | ------------ | ----------- | -------------------------------------------------- |
| 1st                       | `str`          | String       | yes         | The input string of zero or more characters        |
| 2nd                       | `opts`         | Plain object | no          | An Optional Options Object. See below for its API. |

If supplied input arguments are of any other types, an error will be thrown.

**[⬆ back to top](#)**

## Example #1

Below, we tap this API/package/library, feed some code into it and `console.log` what it returns. Optional Options Object (2nd input argument) is omitted:

```js
// consume as normal require():
const { emlint, version } = require("emlint");
// define the input piece of code as string:
const input = "<    table>";
// emlint() is a function, so feed that string with code into it:
const res = emlint(input);
// PS. options are omitted, so we're running on defaults
console.log("res = " + JSON.stringify(res, null, 4));
// PPS. We use JSON.stringify because output is a plain object and we want it
// nicely printed. That "4" above means "indent by 4 spaces".
```

**[⬆ back to top](#)**

## Breaking the JS best-practice rules

If you looked at this or any project code in this monorepo you probably noticed we're breaking many "best practice" rules:

- We use copious amounts of `console.log` for debugging, and we keep all those `console.log`s in the source file (`src/main.js`). Rollup will build UMD, CJS and ESM builds and strip all logs and comments. Line number on each `console.log` is maintained running [js-row-num-cli](https://www.npmjs.com/package/js-row-num-cli). As a result, anytime you come to code, that code is debug-friendly.
- We know functional vs imperative programming styles and actually, prefer imperative. Performance matters.
- We hate when software is split into _gajillion_ of different files. We like **"one library—one file—one package"** way. Ok, sometimes there are two files, `util.js` but only for unit test coverage purposes.

We say "we" but it's me, Roy mainly, addressing himself in 3rd person.

**[⬆ back to top](#)**

## Contributing

- If you see an error, [raise an issue](https://gitlab.com/codsen/codsen/issues/new?issue[title]=emlint%20package%20-%20put%20title%20here&issue[description]=%23%23%20emlint%0A%0Aput%20description%20here).
- If you want a new feature but can't code it up yourself, also [raise an issue](https://gitlab.com/codsen/codsen/issues/new?issue[title]=emlint%20package%20-%20put%20title%20here&issue[description]=%23%23%20emlint%0A%0Aput%20description%20here). Let's discuss it.
- If you tried to use this package, but something didn't work out, also [raise an issue](https://gitlab.com/codsen/codsen/issues/new?issue[title]=emlint%20package%20-%20put%20title%20here&issue[description]=%23%23%20emlint%0A%0Aput%20description%20here). We'll try to help.
- If you want to contribute some code, fork the [monorepo](https://gitlab.com/codsen/codsen/) via GitLab, then write code, then file a pull request on GitLab. We'll merge it in and release.

In monorepo, npm libraries are located in `packages/` folder. Inside, the source code is located either in `src/` folder (normal npm library) or in the root, `cli.js` (if it's a command line application).

The npm script "`dev`", the `"dev": "rollup -c --dev --silent"` builds the development version retaining all `console.log`s with row numbers. It's handy to have [js-row-num-cli](https://www.npmjs.com/package/js-row-num-cli) installed globally so you can automatically update the row numbers on all `console.log`s.

**[⬆ back to top](#)**

## Licence

MIT License

Copyright (c) 2015-2019 Roy Revelt and other contributors

[node-img]: https://img.shields.io/node/v/emlint.svg?style=flat-square&label=works%20on%20node
[node-url]: https://www.npmjs.com/package/emlint
[gitlab-img]: https://img.shields.io/badge/repo-on%20GitLab-brightgreen.svg?style=flat-square
[gitlab-url]: https://gitlab.com/codsen/codsen/tree/master/packages/emlint
[cov-img]: https://img.shields.io/badge/coverage-90.97%25-brightgreen.svg?style=flat-square
[cov-url]: https://gitlab.com/codsen/codsen/tree/master/packages/emlint
[deps2d-img]: https://img.shields.io/badge/deps%20in%202D-see_here-08f0fd.svg?style=flat-square
[deps2d-url]: http://npm.anvaka.com/#/view/2d/emlint
[downloads-img]: https://img.shields.io/npm/dm/emlint.svg?style=flat-square
[downloads-url]: https://npmcharts.com/compare/emlint
[runkit-img]: https://img.shields.io/badge/runkit-test_in_browser-a853ff.svg?style=flat-square
[runkit-url]: https://npm.runkit.com/emlint
[prettier-img]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier-url]: https://prettier.io
[license-img]: https://img.shields.io/badge/licence-MIT-51c838.svg?style=flat-square
[license-url]: https://gitlab.com/codsen/codsen/blob/master/LICENSE