#!/usr/bin/env node

// Copyright 2021 Google LLC

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     https://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const extensionGenerator = require("./generator.js");
const { generatorPrompt } = require("./utils.js");
const path = require("path");

let {
  _: [outputDirectory],
} = require("minimist")(process.argv.slice(2));

const projectName = outputDirectory ? String(outputDirectory) : "app";

extensionGenerator({
  prompt: generatorPrompt(projectName),
  finalizeTemplate: (template) => template,
  templateDirectory: path.resolve(__dirname, "../templates"),
  outputDirectory: path.resolve(process.cwd(), projectName),
});
