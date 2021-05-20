# create-looker-extension

_Create Looker Extensions with zero manual configuration_

This utility helps you rapidly create new [Looker Extension Framework](https://docs.looker.com/data-modeling/extension-framework/extension-framework-intro) extensions.

It is the easiest way to create a new extension and we recommend it for nearly all projects— The output is intended to be a foundation that you can easily customize and build upon, without having to worry about any of the under-the-hood configuration.

## Example usage:

You must have [Yarn](https://classic.yarnpkg.com/en/docs/install) installed to use this tool.

```
yarn create looker-extension <your-project-name>
cd <your-project-name>
yarn develop
```

_Developing? To run this project locally, just run `./src/index.js <your-project-name>` from the root directory_

## Supported languages & frameworks

Currently, create-looker-extension can bootstrap extensions with:

- React & Javascript
- React & Typescript
- "Vanilla" (plain) Javascript
- "Vanilla" (plain) Typescript

We recommend you use React for the best development experience, but you're welcome to use plain vanilla Javascript or any framework of your choice. PR's are welcome to contribute more frameworks!

## More about the Extension Framework

The Looker extension framework is a development framework that significantly reduces the effort and complexity of building custom JavaScript data applications and tools. Custom applications and tools created with the extension framework can be accessed from within Looker, allowing Looker to handle functions such as authentication, access control and permission management, and API access.

- See example extensions [here](https://github.com/looker-open-source/extension-examples)
- [Extension framework docs](https://docs.looker.com/data-modeling/extension-framework/extension-framework-intro)
