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

const path = require("path");
const fs = require("fs").promises;
const chalk = require("chalk");
const { installDependencies, buildProject, cleanup } = require("./utils");

const extensionGenerator = async ({
  templateDirectory,
  _outputDirectory, // TODO remove?
  prompt = Promise.resolve({}),
  finalizeTemplate = (identity) => identity,
  dynamicExtension = ".template",
}) => {
  //Process handlers
  process.on("SIGINT", function () {
    cleanup(answers["projectName"]);
  });
  process.on("exit", (code) => {
    if (code !== 0 && code !== 9102) {
      // Clean up our mess, unless the mess is not caused by the generator.
      cleanup(answers["projectName"]);
    }
  });

  //Generator flow

  console.log(
    chalk.blue.bold(
      "🧪 Welcome to the Looker Extension Generator. Follow the prompts below to create an extension."
    )
  );
  const answers = await prompt;

  //Check if directory already exists`
  try {
    fs.access(path.join(answers["projectName"]))
      .then(() => {
        //Need to always ensure that this does not also run the cleanup code on line 112
        console.error(
          chalk.bold.yellow(
            `Error: Directory ${answers["projectName"]} already exists. Please delete the directory or choose a different name.`
          )
        );
        process.exit(9102);
      })
      .catch(() => false);
    await buildProject(
      answers,
      templateDirectory,
      dynamicExtension,
      finalizeTemplate
    );

    //We yarn install in the script to make the finished project ready to run
    return await installDependencies(answers);
  } catch (e) {
    console.error(
      chalk.bold.yellow("Error receiving answers in generator: "),
      e
    );
  }
};

module.exports = extensionGenerator;
