
<h1 align="center">
  Use this boilerplate when creating a new Storybook based design system for React applications
</h1>

This boilerplate includes an example React component with its story and unit tests. Accessability tests are enabled through addon: @storybook/addon-a11y.

A base tailwind build is also included, add custom tailwind.config.js if needed.

The boilerplate is intended to be used as a seperate project (design system) and should only contain React components, stories, tests and documentation.
The contents of this project are meant to be distributed by releasing them as an npm package (explained below). Storybook also builds a static app which can be deployed to Vercel, Chromatic,...

##  Run locally

```shell
yarn storybook
```

##  Deploy to Chromatic
Deploying to Chromatic is required as we are going to be accessing the design system in other apps via url. Apart from that, having our storybook accessible online is great for the whole team.

###  Manual deploy

```shell
npx chromatic --project-token=<chromatic-project-token>
```

Get project-token on chromatic.com

###  Automatic deploy

Automatic deploys trigger on push to master branch. Deploys are handled through Github actions, all you need to do is add a Github repo secret with key: CHROMATIC_PROJECT_TOKEN and value: <chromatic-project-token>

##  Distribute the design system as an NPM package

1.  **export components & extras:**

    React components and extras (styles,...) should be exported in file: /src/index.js

2.  **build design system as a package:**

    ```shell
    yarn build
    ```
    Builds contents of /src folder into /dist

3.  **Add NPM package metadata:**

    ```shell
    yarn init
    ```

4.  **Get GitHub & NPM tokens:**
    - generata GitHub personal token with repo access
    - generate NPM token: https://www.npmjs.com/settings/your-username/tokens with Publish permission
    - Add both tokens in .env file: name them GH_TOKEN and NPM_TOKEN

5.  **Create GitHub labels:**

    ```shell
    yarn auto create-labels
    ```

6.  **Create a release:**
    ```shell
    yarn release
    ```
    Troubleshooting error: npm ERR! code ENEEDAUTH when npm adduser doesn't work:
    Make sure your package.json includes:
```shell
"publishConfig": {
  "registry": "https://registry.npmjs.org/"
}
```

##  Publish releases automatically

1.  **Add NPM & GitHub tokens to GitHub Secrets:**
    - Create new secret named NPM_TOKEN and save the token from .env (the token will be available through: secrets.NPM_TOKEN)
    - You don't need to setup another secret for your GitHub token. All GitHub users automatically get a secrets.GITHUB_TOKEN associated with their account.

2.  **Automate releases with GitHub Actions:**
    Uncomment file .github/workflows/push.yml

##  Import the design system in an app

1.  **Import live storybook site via url:**
    The app that is accessing our design system should have the base storybook set up. In the apps .storybook/main.js file reference our design system via url:
```shell
// .storybook/main.js

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  refs: {
    'design-system': {
      title: 'Our design system',
      //👇 The url provided by Vercel when it was deployed
      url: 'https://published-url.com',
    },
  }
};
```

  Adding this reference will combine the apps local storybook with our design system.

2.  **Include our design system as a dependency**

```shell
yarn add <name-of-the-npm-package-that-holds-our-design-system>
```

## Learn Storybook
Official documentation at [Storybook](https://storybook.js.org/).