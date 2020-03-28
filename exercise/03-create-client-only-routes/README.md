<h1 align="center">03 Create client only routes</h1>

> Create pages that only render at runtime in Gatsby

Client-only routes will exist on the client only and will not correspond to index.html files in an app’s built assets.

## How to create a client only page?

You can do that in two steps:

1. Create a main entry point page manually. In our example we would like to have a few client side pages a `/app/details` page and a `/app/profile` page. Our entry point page should `/app`.

2. Configure Gatsby to navigate to the client only routes.

## Exercise

Create a new page under `src/pages` called `app.js`.

```js
// src/pages/app.js
import React from "react"
import { Router } from "@reach/router"

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        // Add Profile and Details route here
        // you can use inline components or create ones in seperate files
        // e.g <MyComponent path='/app/mypath'>
      </Router>
    </Layout>
  )
}
export default App
```

Configure Gatsby to navigate to the app page is the path is matching `/app/*`

```js
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // Only update the `/app` page.
  if (page.path.match(/^\/app/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = '/app/*'
    // Update the page.
    createPage(page)
  }
}
```
