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

const spawnSync = require("child_process").spawnSync;
const assert = require("assert");
const expect = require("chai").expect;
const fs = require("fs").promises;
const path = require("path");
const Enquirer = require("enquirer");

const extensionGenerator = require("../src/generator");
const { generatorPrompt } = require("../src/utils");

const projectName = "app";

beforeEach(async function () {
  try {
    spawnSync("rm", ["-rf", projectName], { stdio: "inherit" });
  } catch (err) {
    //This might just error sometimes if there's no dir, that's OK.
    console.log("error cleaning up", err);
  }
});

describe("generates full projects and runs dev server", function () {
  it("generates a react/typescript project", async function () {
    this.timeout(120000);
    const enquirer = new Enquirer(
      {
        show: false,
        autofill: true,
      },
      {
        framework: "react",
        language: "typescript",
        projectName: projectName,
      }
    );
    enquirer.on("prompt", async (prompt) => {
      try {
        await prompt.submit();
      } catch (err) {
        error = err;
      }
    });
    const prompt = generatorPrompt(projectName);
    const result = await extensionGenerator({
      prompt: enquirer.prompt(prompt),
      finalizeTemplate: (template) => template,
      templateDirectory: path.resolve(process.cwd(), "templates"),
      outputDirectory: path.resolve(process.cwd(), projectName),
    });
    const out = spawnSync("cd", [projectName, "&&", "yarn", "develop"], {
      stdio: "pipe",
      shell: true,
      timeout: 10000,
    });
    expect(out.stdout.toString()).to.contain("Project is running");
  });

  it("generates a react/javascript project", async function () {
    this.timeout(120000);
    const enquirer = new Enquirer(
      {
        show: false,
        autofill: true,
      },
      {
        framework: "react",
        language: "javascript",
        projectName: projectName,
      }
    );
    enquirer.on("prompt", async (prompt) => {
      try {
        await prompt.submit();
      } catch (err) {
        error = err;
      }
    });
    const prompt = generatorPrompt(projectName);
    const result = await extensionGenerator({
      prompt: enquirer.prompt(prompt),
      finalizeTemplate: (template) => template,
      templateDirectory: path.resolve(process.cwd(), "templates"),
      outputDirectory: path.resolve(process.cwd(), projectName),
    });
    const out = spawnSync("cd", [projectName, "&&", "yarn", "develop"], {
      stdio: "pipe",
      shell: true,
      timeout: 10000,
    });
    expect(out.stdout.toString()).to.contain("Project is running");
  });

  it("generates a vanilla/typescript project", async function () {
    this.timeout(120000);
    const enquirer = new Enquirer(
      {
        show: false,
        autofill: true,
      },
      {
        framework: "vanilla",
        language: "typescript",
        projectName: projectName,
      }
    );
    enquirer.on("prompt", async (prompt) => {
      try {
        await prompt.submit();
      } catch (err) {
        error = err;
      }
    });
    const prompt = generatorPrompt(projectName);
    const result = await extensionGenerator({
      prompt: enquirer.prompt(prompt),
      finalizeTemplate: (template) => template,
      templateDirectory: path.resolve(process.cwd(), "templates"),
      outputDirectory: path.resolve(process.cwd(), projectName),
    });
    const out = spawnSync("cd", [projectName, "&&", "yarn", "develop"], {
      stdio: "pipe",
      shell: true,
      timeout: 10000,
    });
    expect(out.stdout.toString()).to.contain("Project is running");
  });

  it("generates a vanilla/javascript project", async function () {
    this.timeout(120000);
    const enquirer = new Enquirer(
      {
        show: false,
        autofill: true,
      },
      {
        framework: "vanilla",
        language: "javascript",
        projectName: projectName,
      }
    );
    enquirer.on("prompt", async (prompt) => {
      try {
        await prompt.submit();
      } catch (err) {
        error = err;
      }
    });
    const prompt = generatorPrompt(projectName);
    const result = await extensionGenerator({
      prompt: enquirer.prompt(prompt),
      finalizeTemplate: (template) => template,
      templateDirectory: path.resolve(process.cwd(), "templates"),
      outputDirectory: path.resolve(process.cwd(), projectName),
    });
    const out = spawnSync("cd", [projectName, "&&", "yarn", "develop"], {
      stdio: "pipe",
      shell: true,
      timeout: 10000,
    });
    expect(out.stdout.toString()).to.contain("Project is running");
  });
});

describe("generates full projects and builds successfully", function () {
  it("generates a react/typescript project", async function () {
    this.timeout(120000);
    const enquirer = new Enquirer(
      {
        show: false,
        autofill: true,
      },
      {
        framework: "react",
        language: "typescript",
        projectName: projectName,
      }
    );
    enquirer.on("prompt", async (prompt) => {
      try {
        await prompt.submit();
      } catch (err) {
        error = err;
      }
    });
    const prompt = generatorPrompt(projectName);
    const result = await extensionGenerator({
      prompt: enquirer.prompt(prompt),
      finalizeTemplate: (template) => template,
      templateDirectory: path.resolve(process.cwd(), "templates"),
      outputDirectory: path.resolve(process.cwd(), projectName),
    });
    const out = spawnSync("cd", [projectName, "&&", "yarn", "build"], {
      stdio: "pipe",
      shell: true,
    });
    expect(out.stdout.toString()).to.contain("compiled with");
  });

  it("generates a react/javascript project", async function () {
    this.timeout(120000);
    const enquirer = new Enquirer(
      {
        show: false,
        autofill: true,
      },
      {
        framework: "react",
        language: "javascript",
        projectName: projectName,
      }
    );
    enquirer.on("prompt", async (prompt) => {
      try {
        await prompt.submit();
      } catch (err) {
        error = err;
      }
    });
    const prompt = generatorPrompt(projectName);
    const result = await extensionGenerator({
      prompt: enquirer.prompt(prompt),
      finalizeTemplate: (template) => template,
      templateDirectory: path.resolve(process.cwd(), "templates"),
      outputDirectory: path.resolve(process.cwd(), projectName),
    });
    const out = spawnSync("cd", [projectName, "&&", "yarn", "build"], {
      stdio: "pipe",
      shell: true,
    });
    expect(out.stdout.toString()).to.contain("compiled with");
  });

  it("generates a vanilla/typescript project", async function () {
    this.timeout(120000);
    const enquirer = new Enquirer(
      {
        show: false,
        autofill: true,
      },
      {
        framework: "vanilla",
        language: "typescript",
        projectName: projectName,
      }
    );
    enquirer.on("prompt", async (prompt) => {
      try {
        await prompt.submit();
      } catch (err) {
        error = err;
      }
    });
    const prompt = generatorPrompt(projectName);
    const result = await extensionGenerator({
      prompt: enquirer.prompt(prompt),
      finalizeTemplate: (template) => template,
      templateDirectory: path.resolve(process.cwd(), "templates"),
      outputDirectory: path.resolve(process.cwd(), projectName),
    });
    const out = spawnSync("cd", [projectName, "&&", "yarn", "build"], {
      stdio: "pipe",
      shell: true,
    });
    expect(out.stdout.toString()).to.contain("compiled successfully");
  });

  it("generates a vanilla/javascript project", async function () {
    this.timeout(120000);
    const enquirer = new Enquirer(
      {
        show: false,
        autofill: true,
      },
      {
        framework: "vanilla",
        language: "javascript",
        projectName: projectName,
      }
    );
    enquirer.on("prompt", async (prompt) => {
      try {
        await prompt.submit();
      } catch (err) {
        error = err;
      }
    });
    const prompt = generatorPrompt(projectName);
    const result = await extensionGenerator({
      prompt: enquirer.prompt(prompt),
      finalizeTemplate: (template) => template,
      templateDirectory: path.resolve(process.cwd(), "templates"),
      outputDirectory: path.resolve(process.cwd(), projectName),
    });
    const out = spawnSync("cd", [projectName, "&&", "yarn", "build"], {
      stdio: "pipe",
      shell: true,
    });
    expect(out.stdout.toString()).to.contain("compiled successfully");
  });
});
