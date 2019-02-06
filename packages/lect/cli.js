#!/usr/bin/env node

/* eslint no-console:0 */

// -----------------------------------------------------------------------------
// SETUP
const meow = require("meow");
const fs = require("fs-extra");
const writeFileAtomic = require("write-file-atomic");
const writeJsonFile = require("write-json-file");
const path = require("path");
const logSymbols = require("log-symbols");
const updateNotifier = require("update-notifier");
const chalk = require("chalk");
// const getPkgRepo = require("get-pkg-repo");
const objectPath = require("object-path");
const deleteKey = require("object-delete-key");
const format = require("format-package");
const mergeAdvanced = require("object-merge-advanced");
const pMap = require("p-map");
const pacote = require("pacote");

const trim = require("lodash.trim");
const isObj = require("lodash.isplainobject");
const clone = require("lodash.clonedeep");
const partition = require("lodash.partition");
const uniq = require("lodash.uniq");
const camelCase = require("lodash.camelcase");
const semverRegex = require("semver-regex");
const semverCompare = require("semver-compare");
const bSlug = require("bitbucket-slug");
const GithubSlugger = require("github-slugger");
const slugger = new GithubSlugger();

const findRecursivelyUp = require("find-file-recursively-up");
const replace = require("replace-string");
const inquirer = require("inquirer");
// const matcher = require('matcher')
const {
  initNpmIgnore,
  npmWillTakeCareOfThese,
  encodeDot,
  decodeDot
} = require("./init-npmignore");
const pull1 = require("array-pull-all-with-glob");

function pull(arg1, arg2) {
  return pull1(arg1, arg2, { caseSensitive: false });
}
const arrayiffy = require("arrayiffy-if-string");

// const flow = require('lodash.flow')

const {
  resolveVars,
  removeRecognisedLintingBadges,
  replaceNpmInstallRow,
  replaceNpxRow,
  piecesHeadingIsNotAmongExcluded,
  extractStringUnderBadges,
  replaceRollupInfoTableAndItsHeader,
  parseReadme,
  getUserInfo,
  standardiseBools,
  contributionTypes
} = require("./util");

const DEBUG = 0;

const log = console.log;
const isArr = Array.isArray;

function isStr(something) {
  return typeof something === "string";
}
function existy(x) {
  return x != null;
}
const meowConf = `
  Usage
    $ chlu

  Options
    --loud, -l  Will not perform all operations silently
    --init, -i  Sets up Lect: creates config in the root, helps with settings

  Example
    Just call it in the root, where your package.json is located
`;
const cli = meow(meowConf, {
  alias: {
    l: "loud",
    i: "init"
  }
});
updateNotifier({ pkg: cli.pkg }).notify();

// -----------------------------------------------------------------------------
// 0. STUFF WE READ

let showCoverageBadge = true; // flipswitch for coverage badges
let coverageValues = null; // the container to place coverage report's content
let readmeData = ""; // readme's contents
let pack = {}; // package.json of the lib located at root
let parsedPack; // package.json parsed through "getPkgRepo"
let lectrc = {}; // .lectrc one level above from root
let contributors = null; // final result of async-fetched contributors from github
let addBackToTopLinks = true; // should we add back-to-top anchor links under sections?

// -----------------------------------------------------------------------------
// 0. STUFF WE SET

// a dozen of possible readme file names
const readmeNames = [
  "readme.md", // normal
  "README.md", // wrong but common, all caps
  "Readme.md", // first capital
  "readMe.md", // strange - some dev got carried away typing camel case all day
  "ReadMe.md", // just cheeky
  "readme.txt", // txt, maybe from Windows
  "README.txt", // txt, all caps, probably from Windows too
  "Readme.txt", // txt, first capital, smells Windows
  "ReadMe.txt", // strange, but possible. Likely on Windows.
  "readme", // small caps, no extension
  "README", // all caps, no extension
  "Readme" // first capital, no extension
];

const packageJsonlectKeyDefaults = {
  babelrc: {
    override: false,
    set: false
  },
  badges: {
    node: true,
    npm: true,
    travis: true,
    cov: true,
    overall: true,
    deps: true,
    deps2d: true,
    dev: true,
    vulnerabilities: true,
    downloads: true,
    runkit: true,
    contributors: true,
    license: true
  },
  contribution_types: contributionTypes,
  contributors: [
    {
      contribution: ["Code", "Documentation", "Tests"],
      username: "revelt"
    }
  ],
  eslintrc: {
    add: [],
    remove: []
  },
  files: {
    delete: [],
    write_hard: [
      {
        name: "",
        contents: ""
      }
    ],
    write_soft: [
      {
        name: "",
        contents: ""
      }
    ]
  },
  header: {
    dontQuoteDescription: false,
    rightFloatedBadge: []
  },
  licence: {
    extras: ["", ""]
  },
  npmignore: {
    badFiles: [],
    badFolders: [],
    goodFiles: [],
    goodFolders: []
  },
  various: {
    travisVersionsOverride: [""],
    devDependencies: []
  }
};

// For every setting fetching, we first look for lectrc if something is set.
// Then, that setting might be overridden in package.json .lect key
// In either outcome, return the promise of the value of that path.
function get(
  pathInEither,
  pathOverrideForPackageJson,
  opts = { mode: "merge" }
) {
  let packContents;
  let res;
  // case 1. package.json uses different path naming (shouldn't be used normally)
  if (existy(pathOverrideForPackageJson)) {
    packContents = objectPath.get(pack, `lect.${pathOverrideForPackageJson}`);
  } else {
    packContents = objectPath.get(pack, `lect.${pathInEither}`);
  }
  const lectrcContents = objectPath.get(lectrc, pathInEither);

  if (opts.mode === "merge") {
    res = mergeAdvanced(lectrcContents, packContents, {
      mergeBoolsUsingOrNotAnd: false
    });
    return res;
  }
  res = mergeAdvanced(lectrcContents, packContents, {
    mergeBoolsUsingOrNotAnd: false
  });
  if (isStr(res) && res.length > 0) {
    return res;
  }
  return null;
}

// primitive tool to turn strings to slugs
function slugify(str) {
  if (typeof str !== "string") {
    return str;
  }
  return str
    .split(" ")[0]
    .replace(" ", "_")
    .toLowerCase();
}

//
//                                            --------------------------,
//                                  A___A    / REAL ACTION STARTS HERE  |
//                      A___A      | o o |  | JUST READ FROM THE BOTTOM |
//                ____ / o o \   ∩  =='== <____________________________/
// _____________/ ____   ='= /___||/    |_______________________________________
//             (______)__m_m_)   |/  ||||
//                               |___||||]
//
//                          LISTEN TO THE CATS!

// -----------------------------------------------------------------------------
// 14. finish

async function step14(receivedPack) {
  // log(`${chalk.white("\nSTEP 14 - Write out package.json and .lectrc.json")}`);
  const formattedPack = await format(receivedPack);

  // finally, write out amended var "lectrc" contents onto .lectrc.json

  if (isObj(lectrc) && Object.keys(lectrc).length) {
    await writeJsonFile(path.join(__dirname, "../.lectrc.json"), lectrc)
      .then(() => {
        // log(`${chalk.green(logSymbols.success, ".lectrc.json OK")}`);
      })
      .catch(err => {
        log(
          `${chalk.red(
            logSymbols.error,
            `could not write .lectrc.json:\n${err}`
          )}`
        );
        process.exit(1);
      });
  } else {
    throw new Error(
      "lect CLI: [THROW_ID_01] something is wrong with newly generated lectrc data, it's empty"
    );
  }

  if (isStr(formattedPack) && formattedPack.length) {
    // and also write out amended var "pack" contents (formattedPack) onto package.json
    writeFileAtomic("package.json", formattedPack, err => {
      if (err) {
        log(
          `${chalk.red(
            logSymbols.error,
            `could not write package.json:\n${err}`
          )}`
        );
        process.exit(1);
      }
      // log(`${chalk.green(logSymbols.success, "package.json OK")}`);
      log(`${chalk.green(logSymbols.success, "LECT OK")}`);
      process.exit(0);
    });
  }
}

// -----------------------------------------------------------------------------
// 13. generate Rollup config file

function step13() {
  function extractImports(str) {
    const contentWithinQuotes = /["'][^"']*["']/;
    return str
      .split("\n")
      .filter(
        row =>
          row.startsWith("import") ||
          (row.startsWith("const") && row.includes("require("))
      )
      .map(
        row =>
          row.match(contentWithinQuotes) ? row.match(contentWithinQuotes) : [] // can come null
      );
  }

  // if Rollup is not used, skip to next step:
  if (!objectPath.has(pack, "devDependencies.rollup")) {
    step14(pack);
    return;
  }

  let allFilesInSrc;

  // /src/ might not exist, for example, in CLI apps that don't need/use transpiling
  try {
    allFilesInSrc = fs
      .readdirSync("src")
      .filter(file => {
        return fs.statSync(path.join("src", file)).isFile();
      })
      .filter(file => file !== "main.js" && file.endsWith(".js"));
    // console.log(
    //   `${`\u001b[${33}m${`allFilesInSrc`}\u001b[${39}m`} = ${JSON.stringify(
    //     allFilesInSrc,
    //     null,
    //     4
    //   )}`
    // );
  } catch (err) {
    step14(pack);
  }

  // console.log(`addon:\n-------\n` + addon + `\n-------`);

  const rollupExtraImports = objectPath.get(
    pack,
    "lect.various.rollupExtraDependenciesImports"
  );
  const rollupExtraPlugins = objectPath.get(
    pack,
    "lect.various.rollupExtraDependenciesPlugins"
  );
  let rollupPluginsStrToInsert = "";
  if (isArr(rollupExtraPlugins) && rollupExtraPlugins.length > 0) {
    // trim any commas
    rollupPluginsStrToInsert = `\n        ${rollupExtraPlugins
      .map(val => trim(val, " ,"))
      .join(",\n        ")},`;
  }

  const addon = allFilesInSrc.reduce((acc, currVal) => {
    return `${acc},

    // ${currVal} build:
    {
      input: "src/${currVal}",
      output: [
        { file: "dist/${path.parse(currVal).name}.esm.js", format: "es" },
      ],
      external: [
        ${extractImports(fs.readFileSync(`./src/${currVal}`, "utf8"))
          .sort()
          .filter(val => !val.includes("./"))
          .join(",\n        ")}
      ],
      plugins: [
        strip({
          sourceMap: false
        })${
          rollupPluginsStrToInsert
            ? `,\n        ${rollupPluginsStrToInsert}`
            : ""
        }${
      pack.devDependencies["rollup-plugin-node-builtins"]
        ? ",\n        builtins()"
        : ""
    },
        resolve()${
          pack.devDependencies["rollup-plugin-json"] ? ",\n        json()" : ""
        },
        cleanup()
      ]
    }`;
  }, "");

  let defaultUmdBit = "";
  if (objectPath.has(pack, "browser")) {
    defaultUmdBit = `
    // browser-friendly UMD build
    {
      input: "src/main.js",
      output: {
        file: pkg.browser,
        format: "umd",
        name: "${camelCase(pack.name)}"
      },
      plugins: [
        strip({
          sourceMap: false
        })${rollupPluginsStrToInsert}${
      pack.devDependencies["rollup-plugin-node-builtins"]
        ? ",\n        builtins()"
        : ""
    },
        resolve()${
          pack.devDependencies["rollup-plugin-json"] ? ",\n        json()" : ""
        },
        commonjs(),
        babel(),
        terser(),
        license({
          banner: licensePiece
        })
      ]
    },
`;
  }

  let defaultCommonJSBit = "";
  if (objectPath.has(pack, "main")) {
    defaultCommonJSBit = `
    // CommonJS build (for Node)
    {
      input: "src/main.js",
      output: [{ file: pkg.main, format: "cjs" }],
      external: [
        "${
          isObj(pack) && pack.dependencies
            ? Object.keys(pack.dependencies).join('",\n        "')
            : ""
        }"
      ],
      plugins: [
        strip({
          sourceMap: false
        })${
          isObj(pack) &&
          pack.devDependencies &&
          pack.devDependencies["rollup-plugin-node-builtins"]
            ? ",\n        builtins()"
            : ""
        }${
      pack.devDependencies["rollup-plugin-json"] ? ",\n        json()" : ""
    }${
      rollupPluginsStrToInsert ? `,\n        ${rollupPluginsStrToInsert}` : ""
    },
        babel(),
        cleanup(),
        license({
          banner: licensePiece
        })
      ]
    },
`;
  }

  let defaultESMBit = "";
  if (objectPath.has(pack, "module")) {
    defaultESMBit = `
    // ES module build (for bundlers)
    {
      input: "src/main.js",
      output: [{ file: pkg.module, format: "es" }],
      external: [
        "${
          isObj(pack) && pack.dependencies
            ? Object.keys(pack.dependencies).join('",\n        "')
            : ""
        }"
      ],
      plugins: [
        strip({
          sourceMap: false
        })${
          pack.devDependencies["rollup-plugin-node-builtins"]
            ? ",\n        builtins()"
            : ""
        }${
      pack.devDependencies["rollup-plugin-json"] ? ",\n        json()" : ""
    }${rollupPluginsStrToInsert ? `,${rollupPluginsStrToInsert}` : ""},
        cleanup(),
        license({
          banner: licensePiece
        })
      ]
    }`;
  }

  const newRollupConfig = `${
    rollupExtraImports ? `${rollupExtraImports}\n` : ""
  }${
    pack.devDependencies["rollup-plugin-node-builtins"]
      ? `import builtins from "rollup-plugin-node-builtins";\n`
      : ""
  }import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import cleanup from "rollup-plugin-cleanup";
import license from "rollup-plugin-license";
import strip from "rollup-plugin-strip";
import babel from "rollup-plugin-babel";
${
  pack.devDependencies["rollup-plugin-json"]
    ? `import json from "rollup-plugin-json";\n`
    : ""
}import pkg from "./package.json";

const licensePiece = \`\${pkg.name}
\${pkg.description}
Version: \${pkg.version}
Author: Roy Revelt, Codsen Ltd
License: \${pkg.license}
Homepage: \${pkg.homepage}\`;

export default commandLineArgs => {
  const finalConfig = [${defaultUmdBit}${defaultCommonJSBit}${defaultESMBit}${addon}
  ];

  if (commandLineArgs.dev) {
    // if rollup was called without a --dev flag,
    // dispose of a comment removal, strip():
    finalConfig.forEach((singleConfigVal, i) => {
      finalConfig[i].plugins.shift();
    });
  }
  return finalConfig;
};
`;
  fs.outputFile("rollup.config.js", newRollupConfig, err => {
    if (err) {
      log(
        `${chalk.red(
          logSymbols.error,
          `We could not write the rollup.config.js! We encountered an error:\n${err}`
        )}`
      );
    }
  });

  step14(pack);
}

// -----------------------------------------------------------------------------
// 12. write .travis.yml file if one was set in .lectrc.json

// function step12() {
//   log(`${chalk.white("\nSTEP 12 - Assemble and write .travis.yml")}`);
//   if (get("travis.yml")) {
//     let newValue = get("travis.yml");
//     if (
//       objectPath.has(pack, "devDependencies.coveralls") &&
//       !newValue.includes("after_success: npm run coverage")
//     ) {
//       newValue += "after_success: npm run coverage\n";
//     }
//     if (!objectPath.has(pack, "engines.node")) {
//       log(
//         `${chalk.red(
//           logSymbols.error,
//           "that's strange, package.json doesn't have an engines.node key! Skipping to the next step"
//         )}`
//       );
//       step13();
//     }
//     const finalVersion = trim(pack.engines.node, "<=>. ")[0];
//
//     // it depends, were there custom Travis Node targets set on package.json >
//     // lect.various.travisVersionsOverride[] or not
//
//     const packTravisOverride = objectPath
//       .get(pack, "lect.various.travisVersionsOverride")
//       .filter(
//         val =>
//           typeof val === "string" && val.length > 0 && val.trim().length !== 0
//       );
//
//     // if the override is set and contains any non-empty values:
//     if (
//       packTravisOverride &&
//       isArr(packTravisOverride) &&
//       packTravisOverride.length > 0
//     ) {
//       newValue = replace(
//         newValue,
//         "%VERSIONSLISTING%",
//         `\n  - '${packTravisOverride.join("'\n  - '")}'`
//       );
//     } else {
//       // newValue = replace(newValue, "%NODEVERSION%", finalVersion);
//       newValue = replace(
//         newValue,
//         "%VERSIONSLISTING%",
//         `\n  - 'node'\n  - '${finalVersion}'`
//       );
//     }
//
//     fs.outputFile(".travis.yml", newValue, err => {
//       if (err) {
//         log(
//           `${chalk.red(
//             logSymbols.error,
//             "there was a problem while writing a new .travis.yml! Skipping to the next step."
//           )}`
//         );
//         step13();
//       }
//       log(`${chalk.green(logSymbols.success, ".travis.yml OK")}`);
//       step13();
//     });
//   } else {
//     log(
//       `${chalk.red(
//         logSymbols.error,
//         ".travis.yml was not set neither in a global .lectrc.json nor in local package.json.\nSkipping to the next step."
//       )}`
//     );
//     step13();
//   }
// }

// -----------------------------------------------------------------------------
// 11. generate a fresh .npmignore

function ask(regardingSomePath, what = "folder") {
  return inquirer.prompt(
    regardingSomePath.map((pathName, i, arr) => ({
      type: "list",
      name: pathName,
      message: `${chalk.grey(
        `${i + 1}/${arr.length}`
      )} What should we do with ${what} ${chalk.yellow.bold(
        decodeDot(pathName)
      )}?`,
      choices: [
        {
          name: `${chalk.green("do not put")} onto any .npmignore`,
          value: false
        },
        {
          name: `${chalk.red("put")} onto ${chalk.yellow(
            "local"
          )} lectrc npmignore in package.json`,
          value: 1
        },
        {
          name: `${chalk.red("put")} onto ${chalk.yellow(
            "global"
          )} lectrc npmignore list in .lectrc`,
          value: 2
        }
      ]
    }))
  );
}

async function step11part2(files) {
  let filesList = [];
  let foldersList = [];
  for (let i = files.length; i--; ) {
    if (fs.statSync(files[i]).isDirectory()) {
      foldersList.push(files[i]);
    } else {
      filesList.push(files[i]);
    }
  }

  foldersList = pull(foldersList, npmWillTakeCareOfThese);
  filesList = pull(filesList, npmWillTakeCareOfThese);

  // F O L D E R S   F I R S T

  let badFolders = [];
  let unclearFolders = [];
  [badFolders, unclearFolders] = partition(foldersList, foldersName =>
    get("npmignore.badFolders").includes(foldersName)
  );
  unclearFolders = pull(unclearFolders, get("npmignore.goodFolders"));
  let foldersToAddToLocalList = [];
  let foldersToAddToGlobalList = [];

  if (isArr(unclearFolders) && unclearFolders.length > 0) {
    const folderAnswers = await ask(encodeDot(unclearFolders));
    // remove paths which are equal to "false". Leave only ones with values 1 & 2.
    [foldersToAddToLocalList, foldersToAddToGlobalList] = partition(
      Object.keys(folderAnswers).filter(key1 => folderAnswers[key1]),
      key2 => folderAnswers[key2] === 1
    );
    foldersToAddToLocalList = decodeDot(foldersToAddToLocalList);
    foldersToAddToGlobalList = decodeDot(foldersToAddToGlobalList);
  }

  // F I L E S   S E C O N D

  let badFiles = [];
  let unclearFiles = [];
  [badFiles, unclearFiles] = partition(filesList, filesName =>
    get("npmignore.badFiles").includes(filesName)
  );
  unclearFiles = pull(unclearFiles, get("npmignore.goodFiles"));
  let filesToAddToLocalList = [];
  let filesToAddToGlobalList = [];

  if (isArr(unclearFiles) && unclearFiles.length > 0) {
    const fileAnswers = await ask(encodeDot(unclearFiles), "file");
    // remove paths which are equal to "false". Leave only ones with values 1 & 2.
    [filesToAddToLocalList, filesToAddToGlobalList] = partition(
      Object.keys(fileAnswers).filter(key1 => fileAnswers[key1]),
      key2 => fileAnswers[key2] === 1
    );
    filesToAddToLocalList = decodeDot(filesToAddToLocalList);
    filesToAddToGlobalList = decodeDot(filesToAddToGlobalList);
  }

  // A S S E M B L E   T H E   F I N A L   N P M I G N O R E

  const frontStr =
    "# .... generated using www.npmjs.com/package/lect ....\n#\n#\n#       __         ______     ______     ______  \n#      /\\ \\       /\\  ___\\   /\\  ___\\   /\\__  _\\ \n#      \\ \\ \\____  \\ \\  __\\   \\ \\ \\____  \\/_/\\ \\/ \n#       \\ \\_____\\  \\ \\_____\\  \\ \\_____\\    \\ \\_\\ \n#        \\/_____/   \\/_____/   \\/_____/     \\/_/ \n#  \n#\n";

  const finalNpmIgnoreFile = `${frontStr}\n# folders:\n\n${badFolders
    .concat(foldersToAddToLocalList, foldersToAddToGlobalList)
    .sort()
    .join("\n")}\n\n# files:\n\n${badFiles
    .concat(filesToAddToLocalList, filesToAddToGlobalList)
    .sort()
    .join("\n")}\n`;

  writeFileAtomic(".npmignore", finalNpmIgnoreFile, err => {
    if (err) {
      log(
        `${chalk.red(logSymbols.error, `could not write .npmignore:\n${err}`)}`
      );
    } else {
      // log(`${chalk.green(logSymbols.success, ".npmignore OK")}`);
    }

    if (foldersToAddToLocalList.length) {
      objectPath.set(
        pack,
        "lect.npmignore.badFolders",
        mergeAdvanced(
          objectPath.get(pack, "lect.npmignore.badFolders"),
          foldersToAddToLocalList
        ).sort()
      );
    }
    if (foldersToAddToGlobalList.length) {
      objectPath.set(
        lectrc,
        "npmignore.badFolders",
        mergeAdvanced(
          objectPath.get(lectrc, "npmignore.badFolders"),
          foldersToAddToGlobalList
        ).sort()
      );
    }
    if (filesToAddToLocalList.length) {
      objectPath.set(
        pack,
        "lect.npmignore.badFiles",
        mergeAdvanced(
          objectPath.get(pack, "lect.npmignore.badFiles"),
          filesToAddToLocalList
        ).sort()
      );
    }
    if (filesToAddToGlobalList.length) {
      objectPath.set(
        lectrc,
        "npmignore.badFiles",
        mergeAdvanced(
          objectPath.get(lectrc, "npmignore.badFiles"),
          filesToAddToGlobalList
        ).sort()
      );
    }

    step13();
    // F I N.
  });
}

function step11() {
  // log(`${chalk.white("\nSTEP 11 - Assemble and write a fresh .npmignore")}`);
  fs.readdir("./", (err, files) => {
    if (err) {
      log(
        `${chalk.red(
          logSymbols.error,
          `could not read the root folder:\n${err}`
        )}`
      );
      process.exit(1);
    } else {
      step11part2(files);
    }
  });
}

// -----------------------------------------------------------------------------
// 9. setting the package.json (it will be written in the end)

// second part
async function writePackageJson(receivedPackageJsonObj) {
  if (
    (objectPath.has(lectrc, "various.addBlanks") && lectrc.various.addBlanks) ||
    (objectPath.has(pack, "lect.addBlanks") && pack.lect.addBlanks)
  ) {
    // standardise the value:
    if (
      objectPath.has(receivedPackageJsonObj, "lect.addBlanks") &&
      receivedPackageJsonObj.lect.addBlanks !== true &&
      receivedPackageJsonObj.lect.addBlanks !== false
    ) {
      receivedPackageJsonObj.lect.addBlanks = !!receivedPackageJsonObj.lect
        .addBlanks;
    }

    // Defaults are meant to be set onto `lect` key within package.json, not
    // within the root of it.
    // Therefore, let's "shift" the lect defaults to be within key "lect"
    // This will be the correct default object.

    let defaultlectKeys = {};
    defaultlectKeys = Object.assign({}, {}); // to trick ESLint to accept that it's used
    // and to stop suggesting to set it as const
    objectPath.set(defaultlectKeys, "lect", packageJsonlectKeyDefaults);
    defaultlectKeys.lect.various.travisVersionsOverride = defaultlectKeys.lect.various.travisVersionsOverride.filter(
      val => val.length > 0 && val.trim().length !== 0
    );

    // object-assign the defaults:
    receivedPackageJsonObj = mergeAdvanced(
      clone(defaultlectKeys),
      receivedPackageJsonObj,
      {
        concatInsteadOfMerging: false,
        dedupeStringsInArrayValues: true,
        mergeBoolsUsingOrNotAnd: false,
        ignoreKeys: ["contribution_types"]
      }
    );
  }

  // standardise all bools
  if (objectPath.has(receivedPackageJsonObj, "lect.badges")) {
    receivedPackageJsonObj.lect.badges = standardiseBools(
      receivedPackageJsonObj.lect.badges
    );
  }
  if (
    objectPath.has(receivedPackageJsonObj, "lect.header.dontQuoteDescription")
  ) {
    receivedPackageJsonObj.lect.header.dontQuoteDescription = standardiseBools(
      receivedPackageJsonObj.lect.header.dontQuoteDescription
    );
  }

  // delete unit test-related entries in case those were not present before:
  if (!objectPath.has(pack, "devDependencies.ava")) {
    objectPath.del(receivedPackageJsonObj, "devDependencies.ava");
  }
  if (!objectPath.has(pack, "devDependencies.babel-cli")) {
    objectPath.del(receivedPackageJsonObj, "devDependencies.babel-cli");
  }
  if (!objectPath.has(pack, "devDependencies.babel-preset-env")) {
    objectPath.del(receivedPackageJsonObj, "devDependencies.babel-preset-env");
  }
  // remove any references to coveralls.io:
  objectPath.del(receivedPackageJsonObj, "devDependencies.coveralls");
  if (!objectPath.has(pack, "devDependencies.husky")) {
    objectPath.del(receivedPackageJsonObj, "devDependencies.husky");
  }
  if (!objectPath.has(pack, "devDependencies.nyc")) {
    objectPath.del(receivedPackageJsonObj, "devDependencies.nyc");
  }

  // get rid of gitHead on every package.json - it comes from Lerna and is bad
  objectPath.del(receivedPackageJsonObj, "gitHead");

  // remove unused clear-cli:
  if (
    objectPath.has(pack, "scripts") &&
    objectPath.has(pack, "devDependencies.clear-cli") &&
    !JSON.stringify(pack.scripts).includes("clear")
  ) {
    objectPath.del(receivedPackageJsonObj, "devDependencies.clear-cli");
  }

  // remove unused nodemon:
  if (
    objectPath.has(pack, "scripts") &&
    objectPath.has(pack, "devDependencies.nodemon") &&
    !JSON.stringify(pack.scripts).includes("nodemon")
  ) {
    objectPath.del(receivedPackageJsonObj, "devDependencies.nodemon");
  }

  // remove unused format-package:
  if (
    objectPath.has(pack, "scripts") &&
    objectPath.has(pack, "devDependencies.format-package") &&
    !JSON.stringify(pack.scripts).includes("format-package")
  ) {
    objectPath.del(receivedPackageJsonObj, "devDependencies.format-package");
  }

  // remove unused babel-plugin-external-helpers:
  // existing .babelrc does not matter as it will be overwritten.
  // What matters is lectrc.babelrc contents (keys "override" or "set") or
  // package.json override equivalent for it - package.json>lect.babelrc keys
  // "override" or "set"
  if (
    objectPath.has(pack, "devDependencies.babel-plugin-external-helpers") &&
    (!objectPath.has(lectrc, "babelrc.override") ||
      !JSON.stringify(lectrc.babelrc.override).includes(
        "babel-plugin-external-helpers"
      )) &&
    (!objectPath.has(lectrc, "babelrc.set") ||
      !JSON.stringify(lectrc.babelrc.set).includes(
        "babel-plugin-external-helpers"
      ))
  ) {
    objectPath.del(
      receivedPackageJsonObj,
      "devDependencies.babel-plugin-external-helpers"
    );
  }

  if (pack.bin || (isStr(pack.name) && pack.name.startsWith("gulp"))) {
    // it's a CLI
    // set scripts to the ones set in .lectrc
    const cliScripts = objectPath.get(lectrc, "scripts.cli");
    if (cliScripts) {
      receivedPackageJsonObj.scripts = clone(cliScripts);
    }
  } else {
    // it's not a normal library
    // set scripts to the ones set in .lectrc
    const normalScripts = objectPath.get(lectrc, "scripts.rollup");
    if (normalScripts) {
      receivedPackageJsonObj.scripts = clone(normalScripts);
    }
  }

  // now, the versions in .lectrc.json might be stale.
  // let's overwrite the pack.devDependencies keys with only same or newer versions.
  // Two steps.
  // If lectrc devdep has newer version than pack, lectrc overwrites devdep.
  // If lectrc devdep is older version than pack, letrc does not overwrite pack -
  // instead, pack's version is taken and written to .lectrc.json

  const packDevDeps = pack.devDependencies;
  const lectrcDevDeps = receivedPackageJsonObj.devDependencies;

  Object.keys(packDevDeps)
    .filter(singleDependency => objectPath.has(lectrcDevDeps, singleDependency))
    .forEach(dependency => {
      if (
        semverRegex().test(lectrcDevDeps[dependency]) &&
        semverRegex().test(packDevDeps[dependency])
      ) {
        // console.log(
        //   `dep: ${`\u001b[${33}m${dependency}\u001b[${39}m`} - pack: ${packDevDeps[
        //     dependency
        //   ].match(semverRegex())} vs. lectrc: ${lectrcDevDeps[dependency].match(
        //     semverRegex()
        //   )}`
        // );

        // semverCompare will return 1 when first arg is more than second.
        if (
          semverCompare(
            String(packDevDeps[dependency].match(semverRegex())),
            String(lectrcDevDeps[dependency].match(semverRegex()))
          ) === 1
        ) {
          // 1. set that semver to lectrcDevDeps
          const prefix = lectrcDevDeps[dependency].includes("^") ? "^" : "";
          objectPath.set(
            receivedPackageJsonObj,
            `devDependencies.${dependency}`,
            `${prefix}${packDevDeps[dependency].match(semverRegex())}`
          );
          // 2. update .lectrc.json itself
          objectPath.set(
            lectrc,
            `package.devDependencies.${dependency}`,
            `${prefix}${packDevDeps[dependency].match(semverRegex())}`
          );
        }
      }
    });

  // delete "bugs" key from package.json
  objectPath.del(receivedPackageJsonObj, "bugs");

  //                                S
  //                                S
  //                                S
  //                                S
  //                                S
  //                                S
  //                                S
  //                                S
  //           ADHOC KEY CHANGE REQUESTS COMING FROM CONFIGS:
  //                                S
  //                                S
  //                                S
  //                                S
  //                                S
  //                                S
  //                                S
  //                                S

  //     config format example:

  // "package_keys": {
  //   "write_hard": {
  //     "repository": "https://gitlab.com/codsen/codsen/"
  //   },
  //   "write_soft": {},
  //   "delete": ["", ""]
  // },

  const adhocKeyOpsToDo = get("package_keys");
  // tend key hard write requests:
  if (
    adhocKeyOpsToDo &&
    adhocKeyOpsToDo.write_hard &&
    isObj(adhocKeyOpsToDo.write_hard)
  ) {
    Object.keys(adhocKeyOpsToDo.write_hard).forEach(key => {
      if (isStr(key) && key.trim().length) {
        // console.log(`1044 lect cli: key to write hard =${key}`);
        objectPath.set(
          receivedPackageJsonObj,
          key,
          adhocKeyOpsToDo.write_hard[key]
        );
      }
    });
  }

  //

  pack = receivedPackageJsonObj;

  step11();
}

// the logic of prepping the package.json before overwriting it
async function step10() {
  // log(`${chalk.white("\nSTEP 10 - Edit and write package.json")}`);
  let newValues = clone(get("package"));

  if (isObj(newValues) && Object.keys(newValues).length > 0) {
    // detect non-rollup setups and remove rollup if necessary:
    if (!objectPath.has(pack, "devDependencies.rollup")) {
      // 1. delete Rollup-related devdeps:
      ["rollup*", "uglify-es"].forEach(key => {
        newValues = deleteKey(newValues, { key });
      });

      // 2. delete rollup config in the root:
      const rollupConfPath = path.resolve("./rollup.config.js");
      try {
        if (fs.statSync(rollupConfPath)) {
          fs.remove(rollupConfPath)
            .then(() => {
              log(chalk.green(logSymbols.success, "rollup.config.js DELETED"));
              // and move on to the next step
            })
            .catch(err => {
              log(
                `${chalk.red(
                  logSymbols.error,
                  `error deleting rollup.config.js:\n${err}`
                )}`
              );
              // and move on to the next step
            });
        }
      } catch (err) {
        // log(
        //   `${chalk.blue(
        //     logSymbols.info,
        //     `rollup.config.js not detected, that's fine`
        //   )}`
        // );
      }
    }

    // delete any clinton entries from package.json:
    objectPath.del(newValues, "clinton");
    objectPath.del(pack, "clinton");

    const finalThing = mergeAdvanced(newValues, pack, {
      concatInsteadOfMerging: false,
      dedupeStringsInArrayValues: true
    });

    // if there's rollup used, set the right dist paths
    if (objectPath.has(pack, "devDependencies.rollup")) {
      objectPath.set(finalThing, "main", `dist/${pack.name}.cjs.js`);
      objectPath.set(finalThing, "module", `dist/${pack.name}.esm.js`);
      objectPath.set(finalThing, "browser", `dist/${pack.name}.umd.js`);
      if (objectPath.has(lectrc, "scripts.rollup")) {
        objectPath.set(finalThing, "scripts", lectrc.scripts.rollup);
      }
      const defaultDevDeps = get("package.devDependencies");
      if (defaultDevDeps) {
        objectPath.set(finalThing, "devDependencies", defaultDevDeps);
      }
    }

    // delete "files" because that's too big of a liability
    objectPath.del(finalThing, "files");

    // also, remove any of the builds if they don't exist is "pack"
    // that's necessary because we might have done checks on previous steps
    // and removed entries for missing build files etc.
    if (!objectPath.has(pack, "main")) {
      objectPath.del(finalThing, "main");
    }
    if (!objectPath.has(pack, "module")) {
      objectPath.del(finalThing, "module");
    }
    if (!objectPath.has(pack, "browser")) {
      objectPath.del(finalThing, "browser");
    }

    const adhocDevDeps = objectPath.get(pack, "lect.various.devDependencies");
    if (
      existy(adhocDevDeps) &&
      isArr(adhocDevDeps) &&
      adhocDevDeps.length > 0
    ) {
      for (let i = 0, len = adhocDevDeps.length; i < len; i++) {
        const dep = adhocDevDeps[i];
        if (!objectPath.has(finalThing, `devDependencies.${dep}`)) {
          const retrievedVersion = await pacote
            .manifest(dep)
            .then(pkg => pkg.version);
          // console.log(
          //   `1155 lect/cli.js: ${`\u001b[${33}m${`retrievedVersion`}\u001b[${39}m`} = ${JSON.stringify(
          //     retrievedVersion,
          //     null,
          //     4
          //   )}`
          // );
          finalThing.devDependencies[dep] = `^${retrievedVersion}`;
        }
      }
    }

    // then write out whole thing:
    writePackageJson(finalThing);
  } else {
    // just write out sorted:
    writePackageJson(pack);
  }
}

// -----------------------------------------------------------------------------
// 9. writing the .eslintrc.json

function step9() {
  // log(`${chalk.white("\nSTEP 9 - Assemble and write .eslintrc.json")}`);
  // if eslint is used,
  if (
    objectPath.has(pack, "devDependencies.eslint") &&
    objectPath.has(lectrc, "eslintrc")
  ) {
    // log(
    //   chalk.blue(
    //     logSymbols.info,
    //     "eslint used and lectrc given within .lectrc.json"
    //   )
    // );
    // if there's no signs of AVA, exclude all ava ESLint rules:
    let finalEslintRc = clone(lectrc.eslintrc);
    if (!objectPath.has(pack, "devDependencies.ava")) {
      finalEslintRc = deleteKey(finalEslintRc, { key: "ava/*" });
    }

    writeFileAtomic(
      ".eslintrc.json",
      JSON.stringify(finalEslintRc, null, 2),
      err => {
        if (err) {
          log(
            chalk.red(
              logSymbols.error,
              `there was an error writing .eslintrc: ${err}`
            )
          );
        }
        // log(chalk.green(logSymbols.success, ".eslintrc.json OK"));
        step10();
      }
    );
  } else {
    step10();
  }
}

// -----------------------------------------------------------------------------
// 8. ad-hoc delete all files
// (keys files.delete and files.write_soft from .lectrc.json)

function step8() {
  // log(`${chalk.white("\nSTEP 8 - ad-hoc delete files")}`);

  const thingsToDelete = get("files.delete").filter(val => val.trim() !== "");
  pMap(thingsToDelete, path => {
    fs.access(path, fs.constants.F_OK)
      .then(() =>
        fs
          .remove(path)
          .then(
            log(chalk.green(logSymbols.success, path), chalk.red("DELETED"))
          )
      )
      .catch(() => {});
  })
    .then(() => {
      step9();
    })
    .catch(err => {
      log(`${chalk.red(logSymbols.error, `error deleting file:\n${err}`)}`);
      step9();
    });
}

// -----------------------------------------------------------------------------
// 7. hard write all static files
// (key files.write_hard from package.json / .lectrc.json)

function step7() {
  // log(`${chalk.white("\nSTEP 7 - hard writing static files")}`);

  const contentsToWriteHard = get("files.write_hard").filter(obj => {
    return (
      existy(obj.name) &&
      isStr(obj.name) &&
      obj.name.trim() !== "" &&
      existy(obj.contents) &&
      isStr(obj.contents) &&
      obj.contents.trim() !== ""
    );
  });

  // if to-do list is empty, bail early:
  if (
    !contentsToWriteHard ||
    (isArr(contentsToWriteHard) && contentsToWriteHard.length === 0)
  ) {
    step8();
  }

  pMap(contentsToWriteHard, oneToDoObj => {
    fs.outputFile(
      oneToDoObj.name,
      resolveVars(oneToDoObj.contents, pack, parsedPack)
    );
    // .then(() => {
    //   log(chalk.green(logSymbols.success, oneToDoObj.name, "OK"));
    // });
  })
    .then(() => {
      step8();
    })
    .catch(err => {
      log(`${chalk.red(logSymbols.error, `error writing file:\n${err}`)}`);
      step8();
    });
}

// -----------------------------------------------------------------------------
// 6. generating and overwriting the readme

function thereAreContributors() {
  if (
    contributors &&
    isArr(contributors) &&
    contributors.every(el => existy(el)) &&
    objectPath.has(pack, "lect.contributors") &&
    pack.lect.contributors.length > 1
  ) {
    return true;
  }
  return false;
}

function step6() {
  // log(`${chalk.white("\nSTEP 6 - Assemble and write readme.md")}`);
  // log(
  //   `${chalk.blue(
  //     logSymbols.info,
  //     `so lectrc was read OK, total ${Object.keys(lectrc).length} keys read`
  //   )}`
  // );

  const backToTop = `**[${get("various.back_to_top.label") ||
    "⬆  back to top"}](${get("various.back_to_top.url") || "#"})**`;
  if (
    objectPath.has(pack, "various.back_to_top.enabled") &&
    !pack.various.back_to_top.enabled
  ) {
    addBackToTopLinks = false;
  }

  let topBadgesString = "";
  let bottomBadgesString = "";

  // let finalContributorsString;
  //
  // if (thereAreContributors()) {
  //   finalContributorsString = assembleContributors(
  //     contributors,
  //     pack,
  //     parsedPack
  //   );
  //   if (DEBUG) {
  //     console.log(
  //       `\u001b[${32}m${"----------------------------------------------------------------------"}\u001b[${39}m`
  //     );
  //   }
  // }

  // if package.json ("pack" variable) has no "coverage" script, automatically
  // don't add the cov badge.
  if (
    showCoverageBadge &&
    (!objectPath.has(pack, "scripts.coverage") ||
      (objectPath.has(pack, "scripts.unittest") &&
        !pack.scripts.unittest.includes("nyc")))
  ) {
    showCoverageBadge = false;
  }

  // if this is a CLI app ("bin" field is present in package.json), don't showRunkitBadge
  // Runkit badge:
  let showRunkitBadge = true;
  if (objectPath.has(pack, "bin")) {
    showRunkitBadge = false;
  }

  // if the package.json lect.badges is not set to falsey
  if (
    objectPath.get(pack, "lect.badges") !== false &&
    objectPath.get(pack, "lect.badges") !== null &&
    isObj(objectPath.get(pack, "lect.badges")) &&
    Object.keys(objectPath.get(pack, "lect.badges")).length > 0
  ) {
    // 1. get custom badges from package.json > lect.badges_custom
    let customBadges = objectPath.get(pack, "lect.badges_custom");
    if (
      !customBadges ||
      !isObj(customBadges) ||
      (isObj(customBadges) && Object.keys(customBadges).length === 0)
    ) {
      customBadges = null;
    }

    let customBadgesSortedIndexList = [];
    if (customBadges) {
      // if (DEBUG) { console.log(`customBadges = ${JSON.stringify(customBadges, null, 4)}`) }
      customBadgesSortedIndexList = uniq(
        Object.keys(customBadges).map(badgeName =>
          parseInt(customBadges[badgeName].insert_before, 10)
        )
      ).sort();

      // console.log(
      //   `customBadgesSortedIndexList = ${JSON.stringify(
      //     customBadgesSortedIndexList,
      //     null,
      //     4
      //   )}`
      // );
    }

    // 2. assemble the badges string:
    let res;
    topBadgesString = lectrc.badges
      .reduce((totalConcatenatedString, badge) => {
        res = totalConcatenatedString;

        // There's only one object per-badge within "badges" in .lectrc.json.
        // Within that object there's only one key - name of the badge. Get that name.
        const name = Object.keys(badge)[0];

        // if there's no coverage set up, automatically don't show the coverage's badge:
        if (name === "cov" && !showCoverageBadge) {
          return res;
        }

        // if it's a CLI app, automatically don't show the runkit badge:
        if (name === "runkit" && !showRunkitBadge) {
          return res;
        }

        // if package.json doesn't contain contributors, don't show the badge:
        if (
          name === "contributors" &&
          (!objectPath.has(pack, "lect.contributors") ||
            !isArr(pack.lect.contributors) ||
            (isArr(pack.lect.contributors) &&
              pack.lect.contributors.length < 2))
        ) {
          return res;
        }

        // Now reduce into string depending if badges are switched on or off or setting's missing
        if (
          !objectPath.has(pack, `lect.badges.${name}`) ||
          pack.lect.badges[name]
        ) {
          return `${totalConcatenatedString}[![${
            badge[name].alt
          }][${name}-img]][${name}-url]\n`;
        }
        return res;
      }, "")
      .trim();

    // now that we have topBadgesString, let's add custom badges.
    topBadgesString = topBadgesString
      .split("\n")
      .map((el, idx, wholeArr) => {
        if (customBadgesSortedIndexList.includes(idx + 2)) {
          Object.keys(customBadges).forEach(key => {
            if (customBadges[key].insert_before === idx + 2) {
              const slug = slugify(customBadges[key].alt);
              // check, do any of the existing slugs match it, and if so, throw
              if (
                wholeArr.some(
                  oneOfBadgeObjects =>
                    Object.keys(oneOfBadgeObjects)[0] === slug
                )
              ) {
                throw new Error(
                  `${chalk.red(
                    logSymbols.error,
                    ` When we tried to create a slug from your custom badge's "alt" key:\n${JSON.stringify(
                      customBadges[key],
                      null,
                      4
                    )}\nthe slug we generated (${slug}) is clashing with one of existing badges from .lectrc.json:\n${JSON.stringify(
                      wholeArr.filter(obj => obj[slug] !== undefined)[0],
                      null,
                      4
                    )}. Please set a different "alt" value for the custom badge in this package.json.`
                  )}`
                );
              }
              //
              el += `\n[![${customBadges[key].alt}][${slug}-img]][${slug}-url]`;
            }
          });
        }
        return el;
      })
      .join("\n");

    bottomBadgesString = lectrc.badges
      .reduce((totalConcatenatedString, badge, i) => {
        res = totalConcatenatedString;

        // If there are custom badges, add their corresponding footer links too:
        if (customBadgesSortedIndexList.includes(i)) {
          // if (DEBUG) { console.log(`add before this badge: ${JSON.stringify(badge, null, 4)}`) }
          Object.keys(customBadges).forEach(key => {
            if (customBadges[key].insert_before === i) {
              const slug = slugify(customBadges[key].alt);
              // no need to check, do any of the existing slugs match it
              // because the head links would have thrown already
              res += `[${slug}-img]: ${customBadges[key].img}\n[${slug}-url]: ${
                customBadges[key].url
              }\n\n`;
            }
          });
        }

        const name = Object.keys(badge)[0];

        // if there's no coverage set up, automatically don't show the badge:
        if (name === "cov" && !showCoverageBadge) {
          return res;
        }

        // if it's a CLI app, automatically don't show the badge:
        if (name === "runkit" && !showRunkitBadge) {
          return res;
        }

        // if package.json doesn't contain contributors, don't show the badge:
        if (
          name === "contributors" &&
          (!objectPath.has(pack, "lect.contributors") ||
            !isArr(pack.lect.contributors) ||
            (isArr(pack.lect.contributors) &&
              pack.lect.contributors.length < 2))
        ) {
          return res;
        }

        // Now reduce footer badge links into string depending are they switched on or
        // not or setting is missing (means "on")
        if (
          !objectPath.has(pack, `lect.badges.${name}`) ||
          pack.lect.badges[name]
        ) {
          return `${res}[${name}-img]: ${badge[name].img}\n[${name}-url]: ${
            badge[name].url
          }\n\n`;
        }
        return res;
      }, "")
      .trim();
  }

  // start setting up the final readme's string:
  let content = "";

  // description quotes - setting global-level:
  const descriptionQuoteSpaceValue = "> ";
  let descriptionQuoteSpace = descriptionQuoteSpaceValue;
  if (
    objectPath.has(lectrc, "header.dontQuoteDescription") &&
    lectrc.header.dontQuoteDescription
  ) {
    descriptionQuoteSpace = "";
  }

  // description quotes - setting per-library level:
  if (objectPath.has(pack, "lect.header.dontQuoteDescription")) {
    if (pack.lect.header.dontQuoteDescription) {
      descriptionQuoteSpace = "";
    } else {
      descriptionQuoteSpace = descriptionQuoteSpaceValue;
    }
  }

  let firstHeadingIsDone = false;

  // ASSEMBLING THE NEW README:

  let existingContributorsBackup = null;

  readmeData.forEach((readmePiece, indx) => {
    // if (DEBUG) { console.log('') }
    // if (DEBUG) { console.log(`\n\n-----------\n\n#${indx}:\n${JSON.stringify(readmePiece, null, 4)}`) }
    // if (DEBUG) { console.log(`readmePiece.restofit.length = ${JSON.stringify(readmePiece.restofit.length, null, 4)}`) }

    // Back up existing contributors content if such exists.
    // If interwebs were not reachable, we'll stick that back in.
    if (
      objectPath.has(readmePiece, "heading") &&
      readmePiece.heading.includes("# ") &&
      readmePiece.heading.toLowerCase().includes(" contributors")
    ) {
      existingContributorsBackup = readmePiece.restofit;
    }
    // retain any content above the first h1
    if (typeof readmePiece === "string" && indx === 0) {
      content += `${removeRecognisedLintingBadges(readmePiece).trim()}${
        removeRecognisedLintingBadges(readmePiece).trim().length > 0
          ? "\n\n"
          : ""
      }`;
    } else if (
      !firstHeadingIsDone &&
      typeof readmePiece !== "string" &&
      readmePiece.heading.includes("# ")
    ) {
      // prep the first h tag's contents
      firstHeadingIsDone = true;
      // if package's name does not contain hyphens, capitalise the first letter
      let librarysName;
      if (pack.name === "emlint") {
        librarysName = "EMLint";
      } else {
        librarysName =
          pack.name.split("-").length > 1
            ? pack.name
            : pack.name[0].toUpperCase() + pack.name.substr(1);
      }
      const headerTopRightFloatedBadges = get("header.rightFloatedBadge");
      let finalHeaderTopRightFloatedBadges = "";
      if (
        existy(headerTopRightFloatedBadges) &&
        headerTopRightFloatedBadges.length
      ) {
        finalHeaderTopRightFloatedBadges = `${headerTopRightFloatedBadges
          .map(String.prototype.trim)
          .join("  ")}\n\n`;
      }
      content += `# ${librarysName}\n\n${finalHeaderTopRightFloatedBadges}${descriptionQuoteSpace}${
        pack.description
      }${topBadgesString.length > 0 ? `\n\n${topBadgesString.trim()}` : ""}${
        extractStringUnderBadges(readmePiece.restofit).length > 0 ? "\n\n" : ""
      }${extractStringUnderBadges(readmePiece.restofit)}`;
    } else if (piecesHeadingIsNotAmongExcluded(readmePiece.heading)) {
      let btt = "";

      if (readmePiece.heading.toLowerCase().includes("table of contents")) {
        readmePiece.restofit = readmeData
          .map(obj => obj.heading)
          .filter(
            val =>
              isStr(val) &&
              val.includes("##") &&
              !val.includes("###") &&
              !val.includes("###")
          )
          .map(val => replace(val, "##", "").trim())
          .filter(val => !val.toLowerCase().includes("table of contents"))
          .map(val => {
            return {
              fullTitle: val,
              slug: slugger.slug(val)
            };
          })
          .map(({ fullTitle, slug }) => `- [${fullTitle}](#${slug})`)
          .join("\n");
      }

      if (
        addBackToTopLinks &&
        readmePiece.heading.startsWith("##") &&
        readmePiece.restofit.length > 200 &&
        !readmePiece.heading.toLowerCase().includes("table of contents") &&
        readmePiece.restofit.trim().length > 10
      ) {
        btt = `\n\n${backToTop}`;
      }
      let bodyContent = readmePiece.restofit;
      if (trim(readmePiece.heading, "# ").toLowerCase() === "install") {
        const prep = replaceRollupInfoTableAndItsHeader(
          replaceNpmInstallRow(replaceNpxRow(bodyContent, pack), pack),
          pack,
          lectrc
        );
        bodyContent = `${prep}`;
      }
      content += `\n\n${readmePiece.heading.trim()}${
        bodyContent.trim().length > 0 ? `\n\n${bodyContent.trim()}` : ""
      }${addBackToTopLinks ? btt : ""}`;
    }
  });

  // contributing module
  content += `${
    lectrc.contributing.header.length > 0
      ? `\n\n${lectrc.contributing.header}`
      : ""
  }`;
  content += `${
    lectrc.contributing.restofit.length > 0
      ? `\n\n${lectrc.contributing.restofit}${
          addBackToTopLinks ? `\n\n${backToTop}` : ""
        }`
      : ""
  }`;

  // contributors list
  // if (finalContributorsString) {
  //   if (DEBUG) {
  //     console.log(
  //       `${`\u001b[${33}m${"951 finalContributorsString"}\u001b[${39}m`} = ${JSON.stringify(
  //         finalContributorsString,
  //         null,
  //         4
  //       )}`
  //     );
  //   }
  //   let prepend = "";
  //   if (
  //     objectPath.has(lectrc, "contributors.content_above_table") &&
  //     isStr(lectrc.contributors.content_above_table) &&
  //     lectrc.contributors.content_above_table.trim().length > 0
  //   ) {
  //     prepend = `\n\n${lectrc.contributors.content_above_table}`;
  //   }
  //   let append = "";
  //   if (
  //     objectPath.has(lectrc, "contributors.content_below_table") &&
  //     isStr(lectrc.contributors.content_below_table) &&
  //     lectrc.contributors.content_below_table.trim().length > 0
  //   ) {
  //     append = `\n\n${lectrc.contributors.content_below_table}`;
  //   }
  //   content += `\n\n## Contributors${prepend}\n\n${finalContributorsString.trim()}${append}${
  //     addBackToTopLinks ? `\n\n${backToTop}` : ""
  //   }`;
  // } else if (
  //   existingContributorsBackup &&
  //   typeof existingContributorsBackup === "string"
  // ) {
  //   content += `\n\n## Contributors\n\n${existingContributorsBackup.trim()}`;
  // }

  // licence module
  const licenceExtras = get("licence.extras");

  content += `${
    lectrc.licence.header.length > 0 ? `\n\n${lectrc.licence.header}` : ""
  }`;
  content += `${
    lectrc.licence.restofit.length > 0 ? `\n\n${lectrc.licence.restofit}\n` : ""
  }`;

  if (licenceExtras) {
    content += `\n${arrayiffy(licenceExtras)
      .filter(singleExtra => singleExtra.length > 0)
      .join("\n")}`;
  }

  // here go the footer bits:
  content += `${
    bottomBadgesString.length > 0 ? `\n\n${bottomBadgesString}` : ""
  }`;

  // add extra links:
  const contribLinks = get("contributors.links");
  if (
    thereAreContributors() &&
    contribLinks &&
    isObj(contribLinks) &&
    Object.keys(contribLinks).length > 0
  ) {
    content += "\n";
    Object.keys(contribLinks).forEach(key => {
      content += `\n[${key}]: ${contribLinks[key]}`;
    });
  }

  if (!content.endsWith("\n\n")) {
    content += "\n";
  }

  content = resolveVars(content, pack, parsedPack, existingContributorsBackup);
  // also, fix coverage variables, %COVPERC% and %COVBADGECOLOR% which come
  // from .lectrc.json:
  if (content.includes("%COVPERC%")) {
    let colour = "red";
    const perc = objectPath.get(coverageValues, "total.lines.pct");
    if (typeof perc === "number" && perc > 50) {
      colour = perc > 85 ? "brightgreen" : "yellow";
    }

    content = content.replace("%COVPERC%", `${perc}%25` || "n/a");
    content = content.replace("%COVBADGECOLOR%", perc ? colour : "lightgrey");
    // if (perc) {
    //   log(`${chalk.blue(logSymbols.info, `coverage: ${perc} (${colour})`)}`);
    // } else {
    //   log(`${chalk.red(logSymbols.error, `coverage: ${perc} (${colour})`)}`);
    // }
  }

  writeFileAtomic("readme.md", content, err => {
    if (err) {
      throw new Error(`${chalk.red(logSymbols.error, err)}`);
    }
    // log(`${chalk.green(logSymbols.success, "readme.md OK")}`);
    step7();
  });
}

// -----------------------------------------------------------------------------
// 5. manage babelrc

function step5() {
  // log(`${chalk.white("\nSTEP 5 - Assemble and write .babelrc")}`);
  let finalBabelrc = null;

  if (
    (objectPath.has(pack, "bin") && Object.keys(pack.bin).length > 0) ||
    pack.name.startsWith("gulp")
  ) {
    // log(
    //   `${chalk.yellow(
    //     logSymbols.info,
    //     "this project does not use transpiling!"
    //   )}`
    // );
    step6();
  } else {
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    // if it's a CLI app:
    if (
      objectPath.has(lectrc, "babelrc.override") &&
      isObj(lectrc.babelrc.override) &&
      Object.keys(lectrc.babelrc.override).length > 0
    ) {
      finalBabelrc = clone(lectrc.babelrc.override);
    } else if (
      objectPath.has(lectrc, "babelrc.set") &&
      isObj(lectrc.babelrc.set) &&
      Object.keys(lectrc.babelrc.set).length > 0
    ) {
      finalBabelrc = clone(lectrc.babelrc.set);
    }

    if (
      finalBabelrc &&
      (objectPath.has(pack, "devDependencies.rollup") ||
        (objectPath.has(pack, "devDependencies") &&
          isObj(pack.devDependencies) &&
          Object.keys(pack.devDependencies).length > 0 &&
          Object.keys(pack.devDependencies).some(key =>
            key.startsWith("babel")
          )))
    ) {
      // set this babelrc template coming from lectrc as a base, which we
      // might or might not tweak later:

      // So the source of the new babelrc contents are given.
      // Let's check are there any overrides per-library level:

      // ***
      // first - overrides. If any are provided, the current babelrc is kept and
      // package.json overrides are hard-merged (overwriting everything that has
      // the same key names, no matter the value type hierarchy, to which normally
      // standard merge-advanced adheres)

      if (
        objectPath.has(pack, "lect.babelrc.override") &&
        isObj(pack.lect.babelrc.override) &&
        Object.keys(pack.lect.babelrc.override).length > 0
      ) {
        finalBabelrc = mergeAdvanced(finalBabelrc, pack.lect.babelrc.override, {
          hardMergeEverything: true,
          mergeObjectsOnlyWhenKeysetMatches: false
        });
      }

      // ***
      // second - hard "set". If the key is present, babelrc will be set to its value,
      // provided it's an object (empty or non-empty)
      if (
        objectPath.has(pack, "lect.babelrc.set") &&
        isObj(pack.lect.babelrc.set)
      ) {
        finalBabelrc = clone(pack.lect.babelrc.set);
      }

      // Write out whatever we got so far:
      writeFileAtomic(
        ".babelrc",
        JSON.stringify(finalBabelrc, null, 2),
        err => {
          if (err) {
            log(
              `${chalk.red(
                logSymbols.error,
                `could not write .babelrc:\n${err}`
              )}`
            );
          } else {
            // log(`${chalk.green(logSymbols.success, ".babelrc OK")}`);
          }
          step6();
        }
      );
    } else if (pack.bin) {
      //    SO IT'S A CLI !

      // remove cli-es5.js from bin entry:
      const binKeys = Object.keys(pack.bin);
      if (binKeys.length === 1) {
        pack.bin[binKeys[0]] = "cli.js";
      }

      // remove cli.js from "lect.npmignore.badFiles"
      const badFiles = objectPath.get(pack, "lect.npmignore.badFiles");
      if (isArr(badFiles) && badFiles.includes("cli.js")) {
        objectPath.set(
          pack,
          "lect.npmignore.badFiles",
          badFiles.filter(val => val !== "cli.js")
        );
      }

      objectPath.set(
        pack,
        "devDependencies",
        deleteKey(objectPath.get(pack, "devDependencies"), { key: "babel*" })
      );

      // delete any existing .babelrc
      fs.remove(path.resolve("./.babelrc"))
        .then(() => {
          log(chalk.green(logSymbols.success, ".babelrc DELETED"));
          // and move on to the next step
          step6();
        })
        .catch(err => {
          log(
            `${chalk.red(logSymbols.error, `error deleting .babelrc:\n${err}`)}`
          );
          // and move on to the next step
          step6();
        });
    }

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
  }
}

// -----------------------------------------------------------------------------
// 4. fetch github contributors user data

function step4() {
  // log(`${chalk.white("\nSTEP 4 - Fetch Github contributors data")}`);

  if (
    objectPath.has(pack, "lect.contributors") &&
    pack.lect.contributors.length > 0
  ) {
    const names = pack.lect.contributors.map(obj => obj.username);
    pMap(names, getUserInfo, { concurrency: 2 })
      .then(result => {
        contributors = result;
        return Promise.resolve(step5());
      })
      .catch(() => {
        log(`${chalk.red(logSymbols.error, "error fetching from GitHub!")}`);
        log(
          `${chalk.yellow(
            logSymbols.warning,
            "contributors' data will be stale"
          )}`
        );
        contributors = null;
        return Promise.resolve(step5());
      });
  } else {
    contributors = null;
    step5();
  }
}

// -----------------------------------------------------------------------------
// 3. Read the lectrc file one level above, the .lectrc

function step3() {
  // log(
  // 	`1989 ${chalk.blue(
  // 		logSymbols.info,
  // 		`so pack was read OK, total ${Object.keys(pack).length} keys read`
  // 	)}`
  // );
  // log(`${chalk.white("\nSTEP 3 - Read the .lectrc.json")}`);

  findRecursivelyUp(".lectrc.json", (err, foundPath) => {
    // If lectrc was not found, that's a dealbreaker. Will exit with a non-zero code.
    if (err) {
      log(
        `${chalk.red(
          logSymbols.error,
          "couldn't find the .lectrc.json anywhere!"
        )}`
      );
      process.exit(1);
    }
    // Otherwise, read the config on the found path:
    try {
      fs.readJson(path.resolve(foundPath), { throws: false }, (err2, obj) => {
        if (err2) {
          log(
            `${chalk.red(
              logSymbols.error,
              `couldn't read the .lectrc.json!\n${err2}`
            )}`
          );
          process.exit(1);
        }
        lectrc = obj;
        step4();
      });
    } catch (e) {
      log(
        `${chalk.red(
          logSymbols.error,
          "Computer couldn't find the .lectrc.json anywhere! Exiting.\n"
        )}`
      );
      process.exit(1);
    }
  });
}

// -----------------------------------------------------------------------------
// 2. We fetched the contents of readme successfully.

function step2() {
  // if (readmeData) {
  //   log(
  //     `${chalk.blue(
  //       logSymbols.info,
  //       `${readmeName} was read OK, parsed readme components found (readmeData.length): ${
  //         readmeData.length
  //       }`
  //     )}`
  //   );
  // } else {
  //   log(`${chalk.blue(logSymbols.info, "we'll create a new readme")}`);
  // }

  // log(
  //   `${chalk.white(
  //     "\nSTEP 2 - Now let's try to get the contents of package.json"
  //   )}`
  // );

  fs.readJson("package.json", { throws: false }, (err, obj) => {
    if (err) {
      log(
        `${chalk.red(
          logSymbols.error,
          `couldn't read the package.json!\n${err}`
        )}`
      );
      process.exit(1);
    }

    // const user = getPkgRepo(clone(obj)).user;
    // console.log(
    // 	`${`\u001b[${33}m${`user`}\u001b[${39}m`} = ${JSON.stringify(
    // 		user,
    // 		null,
    // 		4
    // 	)}`
    // );
    //
    // if (objectPath.has(obj, "name") && isStr(obj.name) && obj.name.length > 0) {
    // 	if (isStr(user) && user.length > 0) {
    // 		pack = normalisePackageJson(clone(obj), user, obj.name);
    // 	} else {
    // 		throw new Error(
    // 			`${chalk.red(
    // 				logSymbols.error,
    // 				"we could not recognise the GitHub user from the given repo paths in package.json"
    // 			)}`
    // 		);
    // 	}
    // } else {
    // 	throw new Error(
    // 		`${chalk.red(logSymbols.error, "package.json does not have a name!")}`
    // 	);
    // }
    // parsedPack = getPkgRepo(clone(pack));

    parsedPack = clone(obj);
    pack = clone(obj);
    step3();
  });
}

// -----------------------------------------------------------------------------
// 1. Read coverage report

function step1() {
  // log(
  //   `${chalk.white(
  //     "\nSTEP 1 - Attempt to read coverage/coverage-summary.json"
  //   )}`
  // );
  fs.readFile("coverage/coverage-summary.json", "utf8", (err, content) => {
    if (err) {
      log(
        `${chalk.red(
          logSymbols.error,
          `couldn't read coverage/coverage-summary.json!\n${err}`
        )}`
      );
      showCoverageBadge = false;
    } else {
      // console.log(`received coverage:\n${JSON.stringify(content, null, 4)}`);
      try {
        coverageValues = JSON.parse(content);
        if (
          !(
            isObj(coverageValues) &&
            objectPath.get(coverageValues, "total.lines.pct") !== "Unknown"
          )
        ) {
          showCoverageBadge = false;
          log(`${chalk.yellow(logSymbols.info, `skipping coverage`)}`);
        }
      } catch (e) {
        showCoverageBadge = false;
        log(
          `${chalk.yellow(
            logSymbols.info,
            `did read coverage/coverage-summary.json but could not parse!\n${e}`
          )}`
        );
      }
    }
  });
  step2();
}

// -----------------------------------------------------------------------------
// 0. Get the readme name and contents

function tryToReadAFile(obj, i) {
  fs.readFile(readmeNames[i], "utf8", (err, originalReadmeData) => {
    if (err) {
      obj.onerror();
    } else if (originalReadmeData) {
      obj.onload(readmeNames[i], originalReadmeData);
    }
  });
}

function checkOneOfNames(i) {
  if (i > 11) {
    readmeData = null;
    step1();
  } else {
    tryToReadAFile(
      {
        onload(receivedReadmeName, receivedReadmeData) {
          readmeData = parseReadme(receivedReadmeData);
          step1();
        },
        onerror() {
          checkOneOfNames(i + 1);
        }
      },
      i
    );
  }
}

// START:

if (cli.flags.init) {
  if (DEBUG) {
    console.log("INIT MODE");
  }
  fs.access("package.json", fs.constants.F_OK, err => {
    if (err) {
      // GOOD, no package.json
      // CALL INIT
      initNpmIgnore();
    } else {
      // BAD, there's package.json in the root so it's probably false root!
      log(
        `${chalk.red(
          logSymbols.error,
          "Computer discovered package.json in this folder's root. Real root folder should contain projects, not be a project!"
        )}`
      );
      process.exit(1);
    }
  });
} else {
  // log(`${chalk.white("\nSTEP 0 - Get the readme name and contents")}`);
  checkOneOfNames(0); // will start from 0-th index of readmeNames[]
}