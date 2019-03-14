# ast-monkey-traverse

> Utility library to traverse parsed HTML (AST's) or anything nested (plain objects within arrays within plain objects)

[![Minimum Node version required][node-img]][node-url]
[![Repository is on GitLab][gitlab-img]][gitlab-url]
[![Coverage][cov-img]][cov-url]
[![View dependencies as 2D chart][deps2d-img]][deps2d-url]
[![Downloads/Month][downloads-img]][downloads-url]
[![Test in browser][runkit-img]][runkit-url]
[![Code style: prettier][prettier-img]][prettier-url]
[![MIT License][license-img]][license-url]

- Check out the parent library which does even more: [ast-monkey](https://gitlab.com/codsen/codsen/tree/master/packages/ast-monkey/)

## Table of Contents

- [Install](#install)
- [Idea](#idea)
- [API](#api)
- [Contributing](#contributing)
- [Licence](#licence)

## Install

```bash
npm i ast-monkey-traverse
```

Then, consume either in CommonJS format (`require`) or as an ES Module (`import`):

```js
// as CommonJS require:
const traverse = require("ast-monkey-traverse");
// or as ES Module:
import traverse from "ast-monkey-traverse";
```

Here's what you'll get:

| Type                                                                                                    | Key in `package.json` | Path                              | Size  |
| ------------------------------------------------------------------------------------------------------- | --------------------- | --------------------------------- | ----- |
| Main export - **CommonJS version**, transpiled to ES5, contains `require` and `module.exports`          | `main`                | `dist/ast-monkey-traverse.cjs.js` | 3 KB  |
| **ES module** build that Webpack/Rollup understands. Untranspiled ES6 code with `import`/`export`.      | `module`              | `dist/ast-monkey-traverse.esm.js` | 2 KB  |
| **UMD build** for browsers, transpiled, minified, containing `iife`'s and has all dependencies baked-in | `browser`             | `dist/ast-monkey-traverse.umd.js` | 10 KB |

**[⬆ back to top](#)**

## Idea

Walk through every single element of an array or key of an object or every string in the given input, use familiar callback function interface (just like `Array.forEach` or `Array.map`).

## API

`traverse()` is an inner method meant to be used by other functions. It does the actual traversal of the AST tree (or whatever input you gave, from simplest string to most complex spaghetti of nested arrays and plain objects). This ~method~ function is used via a callback function, similarly to `Array.forEach()`.

```js
const traverse = require("ast-monkey-traverse");
var ast = [{ a: "a", b: "b" }];
ast = traverse(ast, function(key, val, innerObj) {
  let current = val !== undefined ? val : key;
  // if you are traversing and "stumbled" upon an object, it will have both "key" and "val"
  // if you are traversing and "stumbled" upon an array, it will have only "key"
  // you can detect either using the principle above.
  // you can also now change "current" - what you return will be overwritten.
  // return `NaN` to give instruction to delete currently traversed piece of AST.
  return current; // #1 <------ it's obligatory to return it, unless you want to assign it to "undefined"
});
```

It's very important to **return the value of the callback function** (point marked `#1` above) because otherwise whatever you return will be written over the current AST piece being iterated.

If you want to delete, return `NaN`.

**[⬆ back to top](#)**

#### innerObj in the callback

When you call `traverse()` like this:

```js
input = traverse(input, function (key, val, innerObj) {
  ...
})
```

you get three variables:

- `key`
- `val`
- `innerObj`

If `traverse()` is currently traversing a plain object, going each key/value pair, `key` will be the object's current key and `val` will be the value.
If `traverse()` is currently traversing an array, going through all elements, a `key` will be the current element and `val` will be `null`.

| `innerObj` object's key | Type                                                  | Description                                                                                                                                                                                                                                                                                                                                     |
| ----------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{`                     |                                                       |
| `depth`                 | Integer number                                        | Zero is root, topmost level. Every level deeper increments `depth` by `1`.                                                                                                                                                                                                                                                                      |
| `path`                  | String                                                | The path to the current value. The path uses exactly the same notation as the popular [object-path](https://www.npmjs.com/package/object-path) package. For example, `a.1.b` would be: input object's key `a` > value is array, take `1`st index (second element in a row, since indexes start from zero) > value is object, take it's key `b`. |
| `topmostKey`            | String                                                | When you are very deep, this is the topmost parent's key.                                                                                                                                                                                                                                                                                       |
| `parent`                | Type of the parent of current element being traversed | A whole parent (array or a plain object) which contains the current element. Its purpose is to allow you to query the **siblings** of the current element.                                                                                                                                                                                      |
| `parentType`            | String                                                | Either `array` if parent is array or `object` if parent is **a plain object** (not the "object" type, which includes functions, arrays etc.).                                                                                                                                                                                                   |
| `}`                     |                                                       |

**[⬆ back to top](#)**

## Contributing

- If you see an error, [raise an issue](https://gitlab.com/codsen/codsen/issues/new?issue[title]=ast-monkey-traverse%20package%20-%20put%20title%20here&issue[description]=%23%23%20ast-monkey-traverse%0A%0Aput%20description%20here).
- If you want a new feature but can't code it up yourself, also [raise an issue](https://gitlab.com/codsen/codsen/issues/new?issue[title]=ast-monkey-traverse%20package%20-%20put%20title%20here&issue[description]=%23%23%20ast-monkey-traverse%0A%0Aput%20description%20here). Let's discuss it.
- If you tried to use this package, but something didn't work out, also [raise an issue](https://gitlab.com/codsen/codsen/issues/new?issue[title]=ast-monkey-traverse%20package%20-%20put%20title%20here&issue[description]=%23%23%20ast-monkey-traverse%0A%0Aput%20description%20here). We'll try to help.
- If you want to contribute some code, fork the [monorepo](https://gitlab.com/codsen/codsen/) via GitLab, then write code, then file a pull request on GitLab. We'll merge it in and release.

In monorepo, npm libraries are located in `packages/` folder. Inside, the source code is located either in `src/` folder (normal npm library) or in the root, `cli.js` (if it's a command line application).

The npm script "`dev`", the `"dev": "rollup -c --dev --silent"` builds the development version retaining all `console.log`s with row numbers. It's handy to have [js-row-num-cli](https://www.npmjs.com/package/js-row-num-cli) installed globally so you can automatically update the row numbers on all `console.log`s.

**[⬆ back to top](#)**

## Licence

MIT License

Copyright (c) 2015-2019 Roy Revelt and other contributors

[node-img]: https://img.shields.io/node/v/ast-monkey-traverse.svg?style=flat-square&label=works%20on%20node
[node-url]: https://www.npmjs.com/package/ast-monkey-traverse
[gitlab-img]: https://img.shields.io/badge/repo-on%20GitLab-brightgreen.svg?style=flat-square
[gitlab-url]: https://gitlab.com/codsen/codsen/tree/master/packages/ast-monkey-traverse
[cov-img]: https://img.shields.io/badge/coverage-100%25-brightgreen.svg?style=flat-square
[cov-url]: https://gitlab.com/codsen/codsen/tree/master/packages/ast-monkey-traverse
[deps2d-img]: https://img.shields.io/badge/deps%20in%202D-see_here-08f0fd.svg?style=flat-square
[deps2d-url]: http://npm.anvaka.com/#/view/2d/ast-monkey-traverse
[downloads-img]: https://img.shields.io/npm/dm/ast-monkey-traverse.svg?style=flat-square
[downloads-url]: https://npmcharts.com/compare/ast-monkey-traverse
[runkit-img]: https://img.shields.io/badge/runkit-test_in_browser-a853ff.svg?style=flat-square
[runkit-url]: https://npm.runkit.com/ast-monkey-traverse
[prettier-img]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier-url]: https://prettier.io
[license-img]: https://img.shields.io/badge/licence-MIT-51c838.svg?style=flat-square
[license-url]: https://gitlab.com/codsen/codsen/blob/master/LICENSE