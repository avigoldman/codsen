# edit-package-json

> Edit package.json without parsing, as string, keep indentation etc intact

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
- [TLDR - Our promise](#tldr---our-promise)
- [Idea](#idea)
- [API](#api)
- [Contributing](#contributing)
- [Licence](#licence)

## Install

```bash
npm i edit-package-json
```

Consume via a `require()`:

```js
const { set, del } = require("edit-package-json");
```

or as an ES Module:

```js
import { set, del } from "edit-package-json";
```

or for web pages, as a production-ready minified script file (so-called "UMD build"), straight from CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/edit-package-json/dist/edit-package-json.umd.js"></script>
```

```js
// in which case you get a global variable "editPackageJson" which you consume like this:
const { set, del } = editPackageJson;
```

This package has three builds in `dist/` folder:

| Type                                                                                                    | Key in `package.json` | Path                            | Size  |
| ------------------------------------------------------------------------------------------------------- | --------------------- | ------------------------------- | ----- |
| Main export - **CommonJS version**, transpiled to ES5, contains `require` and `module.exports`          | `main`                | `dist/edit-package-json.cjs.js` | 9 KB  |
| **ES module** build that Webpack/Rollup understands. Untranspiled ES6 code with `import`/`export`.      | `module`              | `dist/edit-package-json.esm.js` | 9 KB  |
| **UMD build** for browsers, transpiled, minified, containing `iife`'s and has all dependencies baked-in | `browser`             | `dist/edit-package-json.umd.js` | 37 KB |

**[⬆ back to top](#)**

## TLDR - Our promise

- write to JSON without parsing, edit string directly
- `object-path` notation (for example, array `key.0.val`, not `key[0].val`)
- passes all unit tests of object-path^

^ some features like setting values on keys which don't exist are not implemented yet, so tests were adapted but commented-out.

**[⬆ back to top](#)**

## Idea

Normally, when editing `package.json` file, it is parsed, its value, a plain object, is tweaked and then it is stringified and written back. The problem is, sometimes that "object tweaking" maintains the original key order but sometimes it does not.

When parsing-editing-stringifying JSON, we can't guarantee the: key order, indentation (tabs vs. spaces) and all other formatting to be intact.

This program gives you interface to edit JSON files as string, without parsing.

IMPORTANT.

**Since this program is still in _a baby state_, it can't create new keys which didn't exist before. `set()` will only change values of existing keys. It is not able to add new keys yet.**

It edits JSON as _string_ but let's you use [object-path](https://www.npmjs.com/package/object-path) notation to set values on any (for now, only already-existing) paths in JSON.

```js
const { set } = require("edit-package-json");
// we defined JSON contents manually, but in real programs you'd read the file,
// as string, without parsing and pass it to set()
const startingJSONContents = `{
  "a": "b",
  "c": {
    "d": "e"
  }
}`;

// amended result:
const result = set(source, "c.d", "f");
// notation is the same as "object-path" from npm
// ^ in real programs you'd write this string back to JSON file

console.log(JSON.stringify(result, null, 4));
// => {
//   "a": "b",
//   "c": {
//     "d": "f"
//   }
// }
```

We wrote quite a few non-parsing string-processing programs ([1](https://gitlab.com/codsen/codsen/tree/master/packages/string-strip-html/), [2](https://gitlab.com/codsen/codsen/tree/master/packages/email-comb/), [3](https://gitlab.com/codsen/codsen/tree/master/packages/html-crush/), [4](https://gitlab.com/codsen/codsen/tree/master/packages/html-img-alt/), [5](https://gitlab.com/codsen/codsen/tree/master/packages/emlint/) for starters) so you could see it coming.

**[⬆ back to top](#)**

## API

### .set()

When you consume `set` (`const { set } = require("edit-package-json");`), it is a _function_.

`set()` can set values by path, on a JSON string.

**THIS IS AN EARLY STAGE OF THIS PROGRAM AND IT CAN'T CREATE NEW KEYS, IT WILL ONLY CHANGE VALUE IF KEY ALREADY EXISTS.**

For now, this is the primary difference (from a more mature and more popular) `object-path`.

---

**Input**

**set(source, path, val)**

| Input argument | Type     | Obligatory? | Description                                                                                               |
| -------------- | -------- | ----------- | --------------------------------------------------------------------------------------------------------- |
| `str`          | String   | yes         | JSON file contents                                                                                        |
| `path`         | String   | yes         | Desired path in the object, must follow [object-path](https://www.npmjs.com/package/object-path) notation |
| `valToInsert`  | Whatever | yes         | What to insert at the given path                                                                          |

---

**Output**

Amended string is returned.

**[⬆ back to top](#)**

## Contributing

- If you see an error, [raise an issue](<https://gitlab.com/codsen/codsen/issues/new?issue[title]=edit-package-json%20package%20-%20put%20title%20here&issue[description]=**Which%20package%20is%20this%20issue%20for**%3A%20%0Aedit-package-json%0A%0A**Describe%20the%20issue%20(if%20necessary)**%3A%20%0A%0A%0A%2Fassign%20%40revelt>).
- If you want a new feature but can't code it up yourself, also [raise an issue](<https://gitlab.com/codsen/codsen/issues/new?issue[title]=edit-package-json%20package%20-%20put%20title%20here&issue[description]=**Which%20package%20is%20this%20issue%20for**%3A%20%0Aedit-package-json%0A%0A**Describe%20the%20issue%20(if%20necessary)**%3A%20%0A%0A%0A%2Fassign%20%40revelt>). Let's discuss it.
- If you tried to use this package, but something didn't work out, also [raise an issue](<https://gitlab.com/codsen/codsen/issues/new?issue[title]=edit-package-json%20package%20-%20put%20title%20here&issue[description]=**Which%20package%20is%20this%20issue%20for**%3A%20%0Aedit-package-json%0A%0A**Describe%20the%20issue%20(if%20necessary)**%3A%20%0A%0A%0A%2Fassign%20%40revelt>). We'll try to help.
- If you want to contribute some code, fork the [monorepo](https://gitlab.com/codsen/codsen/) via GitLab, then write code, then file a pull request on GitLab. We'll merge it in and release.

In monorepo, npm libraries are located in `packages/` folder. Inside, the source code is located either in `src/` folder (normal npm library) or in the root, `cli.js` (if it's a command-line application).

The npm script "`dev`", the `"dev": "rollup -c --dev --silent"` builds the development version retaining all `console.log`s with row numbers. It's handy to have [js-row-num-cli](https://www.npmjs.com/package/js-row-num-cli) installed globally so you can automatically update the row numbers on all `console.log`s.

**[⬆ back to top](#)**

## Licence

MIT License

Copyright (c) 2015-2019 Roy Revelt and other contributors

Passes adapted .set() unit tests from https://github.com/mariocasciaro/object-path/blob/master/test.js, MIT Licence Copyright (c) 2015 Mario Casciaro

[node-img]: https://img.shields.io/node/v/edit-package-json.svg?style=flat-square&label=works%20on%20node
[node-url]: https://www.npmjs.com/package/edit-package-json
[gitlab-img]: https://img.shields.io/badge/repo-on%20GitLab-brightgreen.svg?style=flat-square
[gitlab-url]: https://gitlab.com/codsen/codsen/tree/master/packages/edit-package-json
[cov-img]: https://img.shields.io/badge/coverage-98.37%25-brightgreen.svg?style=flat-square
[cov-url]: https://gitlab.com/codsen/codsen/tree/master/packages/edit-package-json
[deps2d-img]: https://img.shields.io/badge/deps%20in%202D-see_here-08f0fd.svg?style=flat-square
[deps2d-url]: http://npm.anvaka.com/#/view/2d/edit-package-json
[downloads-img]: https://img.shields.io/npm/dm/edit-package-json.svg?style=flat-square
[downloads-url]: https://npmcharts.com/compare/edit-package-json
[runkit-img]: https://img.shields.io/badge/runkit-test_in_browser-a853ff.svg?style=flat-square
[runkit-url]: https://npm.runkit.com/edit-package-json
[prettier-img]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier-url]: https://prettier.io
[license-img]: https://img.shields.io/badge/licence-MIT-51c838.svg?style=flat-square
[license-url]: https://gitlab.com/codsen/codsen/blob/master/LICENSE