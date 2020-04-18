<h1 align="center">01 Bootstrap the simplest gatsby project</h1>
 
> Create a simple Gatsby project manually from scratch

## Gatsby Project Structure

Inside a Gatsby project you may have some of the folowing folders/files:

```sh
|-- /.cache
|-- /plugins
|-- /public
|-- /src
    |-- /pages
    |-- /templates
    |-- html.js
|-- /static
|-- gatsby-config.js
|-- gatsby-node.js
|-- gatsby-ssr.js
|-- gatsby-browser.js
```

### Folders

- `/.cache` Automatically generated. This folder is an internal cache created automatically by Gatsby.

- `/plugins` This folder hosts any project-specific (“local”) plugins that aren’t published as an npm package.

- `/public` Automatically generated. The output of the build process will be exposed inside this folder.

- `/src` This directory will contain all of the code related to what you will see on the frontend of your site (what you see in the browser), like your site header, or a page template. “Src” is a convention for “source code”.

- `/pages` Components under src/pages become pages automatically with paths based on their file name.

- `/templates` Contains templates for programmatically creating pages.

- `html.js` For custom configuration of default .cache/default_html.js.

- `/static` If you put a file into the static folder, it will not be processed by Webpack. Instead it will be copied into the public folder untouched.

### Files

- `gatsby-browser.js`: This file is where Gatsby expects to find any usage of the Gatsby browser APIs (if any). These allow customization/extension of default Gatsby settings affecting the browser.

- `gatsby-config.js`: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc.

- `gatsby-node.js`: This file is where Gatsby expects to find any usage of the Gatsby node APIs (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

- `gatsby-ssr.js`: This file is where Gatsby expects to find any usage of the Gatsby server-side rendering APIs (if any). These allow customization of default Gatsby settings affecting server-side rendering.

## Exercise

Most of the folders and files above are optional.

A Gatsby project is mainly an npm project that has `gatsby`, `react` and `react-dom` as npm dependencies.

the equivalante of `index.html` in a Gatsby project is an `index.js` file inside the `src/pages` folder.

For now you can add the following code in `index.js`

```js
import React from 'react'

const IndexPage = () => <h1>Hello World!</h1>

export default IndexPage
```

To run the project you add an npm script in your package.json to run `gatsby develop`.
Your job will be to create the simplest gatsby project manually from scratch inside the `start` folder using the information provided.The end result will be a project where you can run `npm run develop` and navigate to `localhost:8000` to `Hello World!` printed out.

- > 💡 You can always check the Gatsby [docs](https://www.gatsbyjs.org/docs/gatsby-project-structure/) for the project structure

- > 💡 You can check the npm [docs](https://docs.npmjs.com/cli/init) about initializing an npm project
