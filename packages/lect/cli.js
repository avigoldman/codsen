#!/usr/bin/env node

import { promises as fs } from "fs";
import objectPath from "object-path";

// import tasks:
import readme from "./src/readme.js";
import examples from "./src/examples.js";
import hardWrite from "./src/hardWrite.js";
import hardDelete from "./src/hardDelete.js";
import pack from "./src/pack.js";
import npmIgnore from "./src/npmIgnore.js";
import rollupConfig from "./src/rollupConfig.js";
import tsconfig from "./src/tsconfig.js";
// import semaphore from "./src/semaphore.js";

// Lect gets called within each monorepo package's root.
// Premise is that all packages are of two kinds:
// 1. programs - processed by Rollup, source in TS/ES
// 2. CLI's - no rollup or TS, source in CommonJS

// Programs with CLI ("bin") count as programs. For example, program emlint
// will have a CLI embedded too.

// SETUP
// -----------------------------------------------------------------------------

const state = {
  isRollup: false,
  isBin: false,
  pack: { name: null, version: null, description: null },
  originalLectrc: {},
};

// ACTION
// -----------------------------------------------------------------------------

// Read package.json - it's blocking, we need to detect is package CLI or not
const packageJson = JSON.parse(await fs.readFile("package.json", "utf8"));
state.pack = packageJson;

// Primary flag which distinguishes between the two types of ours
state.isRollup = objectPath.has(packageJson, "devDependencies.rollup");
state.isBin = objectPath.has(packageJson, "bin");

await Promise.all([examples({ state }), fs.readFile("../.lectrc.json", "utf8")])
  .then((received) => {
    const lectrc = JSON.parse(received[1]);
    // we make a copy of lectrc just in case somewhere we'd mutate it
    // let's try to prevent futile overwrites, we'll try to compare
    // original vs. what's at the end of the pipeline.
    // For the record, npm ignores are being updated in lectrc via inquirer.
    state.originalLectrc = { ...lectrc };

    // write README.md
    readme({ state, examples: received[0], lectrc });
    // write new files
    hardWrite({ lectrc });
    // delete bad files
    hardDelete({ lectrc });
    // write package.json
    pack({ state, lectrc });
    // write .npmignore
    npmIgnore({ state, lectrc });
    // write rollup.config.js
    rollupConfig({ state });
    // write tsconfig.json
    tsconfig({ state });
    // TBC - write ./.semaphore/semaphore.yml
    // semaphore({ state });
  })
  .catch((e) => {
    console.log(
      `074 lect: ${`\u001b[${31}m${`failure`}\u001b[${39}m`}: ${JSON.stringify(
        Object.keys(e),
        null,
        4
      )}`
    );
    process.exit(1);
  });
