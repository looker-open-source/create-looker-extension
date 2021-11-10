# create-looker-extension

_Create Looker Extensions with zero manual configuration_

This utility helps you rapidly create new [Looker Extension Framework](https://docs.looker.com/data-modeling/extension-framework/extension-framework-intro) applications.

We recommend this utility as a quick way to start nearly all extension projects. The output is intended to be a foundation that you can customize and build upon, without having to worry about any of the under-the-hood configuration.

## Example usage:

You must have [Yarn](https://classic.yarnpkg.com/en/docs/install) installed to use this tool.

```shell
yarn create looker-extension <your-project-name>
cd <your-project-name>
yarn develop
```

### Developing this template

To run this project locally (for testing changes, etc.), use the following command from the root folder.

```shell
yarn new <your-project-name>
``` 

The template must be generated to a folder that doesn't exist, so a typical flow to incrementally test the template creation would be:

```shell
yarn new testfoo
# answer prompts
cd testfoo
# look at the generated project, yarn develop, etc.
cd ..
rm -rf testfoo
```

## Supported languages & frameworks

Currently, create-looker-extension can bootstrap extensions with:

- React & Javascript
- React & Typescript
- "Vanilla" (plain) Javascript
- "Vanilla" (plain) Typescript

We recommend you use React for the best development experience, but you're welcome to use plain vanilla Javascript or any framework of your choice. Please feel free to submit a PR for supporting your favorite framework!

## More about the Extension Framework

The Looker extension framework is a development framework that significantly reduces the effort and complexity of building custom JavaScript data applications and tools for Looker. 
Custom applications and tools created with the extension framework can be accessed from within Looker, allowing Looker to handle functions such as authentication, API access, and access control and permission management.

- See example extensions [here](https://github.com/looker-open-source/extension-examples)
- [Extension framework documentation](https://docs.looker.com/data-modeling/extension-framework/extension-framework-intro)
