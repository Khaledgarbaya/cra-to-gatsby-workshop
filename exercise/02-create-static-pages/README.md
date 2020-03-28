<h1 align="center">02 Create Static pages in Gatsby</h1>

> Create a static page in Gatsby

## Create a static page in Gatsby

Gatsby pages are created in different ways:

- Gatsby core automatically turns React components in `src/pages` into pages
- Creating Pages programatically using the `createPages` API in your site's `gatsby-node.js`
- Using a Plugin That implement the `createPages` API

## How to list all the pages in a Gatsby site

Gatsby will spawn a GraphQL server along with your dev server and you can use that to list all pages.
Navigate to `HOST:PORT/___graphql` e.g `localhost:8000/___graphql` and past the following query.

```graphql
{
  allSitePage {
    edges {
      node {
        path
        component
        pluginCreator {
          name
          pluginFilepath
        }
      }
    }
  }
}
```

## Exercise 1

Your job will be to add two new pages to your Gatsby project.

An About Page

```js
import React from 'react'

const AboutPage = () => <h1>About Page</h1>

export default AboutPage
```

A Policy Page

```js
import React from 'react'

const PolicyPage = () => <h1>Policy Page</h1>

export default PolicyPage
```

After that run the command `npm run develop` and navigate to `HOST:PORT/about` or `HOST:PORT/policy` e.g `localhost:8000/about` and you should see a page displaying `About Page`

## Exercise 2

Your job is to create a Gatsby page programmatically.

To create a page programmatically you need to a few things.

### 1. Create a template file

under `src` create a folder called `templates` and inside of that create a file called `user-page.js`.
Add the following code.

```js
import React from 'react'

const UserPage = () => <h1>User Page</h1>

export default UserPage
```

#### 2. Use the Gatsby createPage node API

in the root of the project create a `gatsby-node.js` file and add the following code

```js
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const templatePath = path.resolve(
    './src/templates/user-page.js'
  )

  // use the createPage function to create a page.
  // the createPage function accepts an object as a config
  // {
  //   path: // the path to the page, we want it to be `/user`
  //   component: // the path to the component file
  // }
}
```

### Extra Credit

We would like to pass some data to the page that we created programatically.
in addition to `path` and `component` the `createPage` object config also has another property called `context`.
It allows you to pass data to the to be created page. This data will then be available as a react prop called `pageContext`.

Your job is to pass some data to use-page and render it. Make sure to restart the server to apply the new changes.

### Extra Credit 2

Given the following data set

```json
[
  {
    "slug": "bulbasaur",
    "name": "Bulbasaur"
  },
  {
    "slug": "ivysaur",
    "name": "Ivysaur"
  },
  {
    "slug": "charmander",
    "name": "Charmander"
  },
  {
    "slug": "squirtle",
    "name": "Squirtle"
  }
]
```

your job is progrmatically create a page for every item in the array. for the path use the `slug` property and pass the name to page to render it later.

- > 💡 You can always check the Gatsby [docs](https://www.gatsbyjs.org/docs/creating-and-modifying-pages/) for creating and modifing pages
