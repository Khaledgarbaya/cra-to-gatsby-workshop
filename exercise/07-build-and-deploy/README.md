<h1 align="center">07 Build an deploy a Gatsby website</h1>

> How to Deploy a Gatsby website to Netlify

## Using the Git setup

Login to Netlify and you will see a `New site from git` button at the top right corner of the screen. Click on it and connect with the same git provider that you used to host your website and authorize Netlify to use your account. Choose your website repository and it will take you to deploy settings with the below options.

Branch to deploy: You can specify a branch to monitor. When you push to that particular branch, only then will Netlify build and deploy the site. The default is `master`.

Build Command: You can specify the command you want Netlify to run when you push to the above branch. The default is `npm run build`.

Publish directory: You can specify which folder Netlify should use to host the website, e.g., public, dist, build. The default is `public`.

Click on the Deploy site button and Netlify will start the build and deploy process you have specified. You can go to the Deploys tab and see the process unfold in the Deploy log. After a few moments, it will give you the live site URL, e.g., random-name.netlify.com.

## Exercise

Your job is to deploy your Gatsby app to Netlify.
