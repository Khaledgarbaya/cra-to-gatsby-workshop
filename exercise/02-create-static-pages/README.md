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

## Exercise

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

- > 💡 You can always check the Gatsby [docs](https://www.gatsbyjs.org/docs/creating-and-modifying-pages/) for creating and modifing pages
