- [coder-academy-client](#coder-academy-client)
  - [23 January, 2021](#23-january-2021)
  - [24 January, 2021](#24-january-2021)

# coder-academy-client

## 23 January, 2021

- Set up the basic repository, adding the `README` file.

- Ended up scrapping the previous project, as I was not sure about the way that I wanted to format this whole thing.

- Set up the new projects with the client/server split.

## 24 January, 2021

- Created a basic react project with `create react app`.

- Removed unnecessary files and added `styled-components`.

- Added `craco` for aliasing.

  - ### `craco.config.js`
    Since I keep on coming back to the same file to see how to create the aliasing for `craco`, I will just put in here:

```javascript
const path = require("path");

const alias = (prefix = "src") => ({
  "@components": `${prefix}/components`,
});

const resolvedAliases = Object.fromEntries(
  Object.entries(alias()).map(([alias, location]) => [
    alias,
    path.resolve(__dirname, location),
  ])
);

module.exports = { webpack: { alias: resolvedAliases } };
```

- Added `jsconfig.json` for aliased imports.

  - ### `jsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@components": ["components/index"],
      "@pages": ["pages/index"]
    }
  },
  "include": ["src"]
}
```

- Added `pages` directory.

- Added `components` directory.

- Added task highlighting and the todo tree extension for task tracking.

- Added the default global style that I use for pretty much everything.

- A bunch of index files all over the place. Will need to figure out how I would want to format the export/import of pages to display on the main page.

- Created the **development** branch so that I can get into the habit of doing commits, leaving proper commit messages, merging, and all that other good stuff.

- Adde some styling for this `README` file.
