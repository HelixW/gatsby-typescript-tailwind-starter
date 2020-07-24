<!-- PROJECT SHIELDS  -->

<p align="right">
 <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/helixw/gatsby-typescript-tailwind-starter?style=flat-square">
 <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/helixw/gatsby-typescript-tailwind-starter?style=flat-square">
 <img alt="Maintenance" src="https://img.shields.io/maintenance/yes/2020?style=flat-square">
</p>

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://gatsby-typescript-tailwind-starter.tk">
    <img src="./src/images/favicon.svg" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">Gatsby Starter</h3>
  <p align="center">
    Starter template configured with TypeScript and TailwindCSS
    <br />
    <a href="https://github.com/HelixW/gatsby-typescript-tailwind-starter/issues">Report Bug</a>
    ·
    <a href="https://github.com/HelixW/gatsby-typescript-tailwind-starter/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [What is a Starter](#what-is-a-starter)
  - [Built With](#built-with)
- [Installation](#installation)
- [Usage Guide](#usage-guide)
  - [Already Setup](#already-setup)
  - [Needs to be Set Up](#needs-to-be-set-up)
- [Recommended Modifications](#recommended-modifications)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## What is a Starter

This template aims to be the pure starting point for any project utilizInstallationing the same technologies. The goal of this project is to cut down on installation and setup time so that similar projects can be set up to be up and running as soon as possible.

### Built With

This template was built and aims to utilize the best of 3 main technologies.

- [GatsbyJS](https://www.gatsbyjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)

<!-- INSTALLATION -->

## Installation

- To get started on your new project use this template to create a new repository.
- This project uses yarn as the package manager. To install all the dependencies run

```sh
yarn install
```

- It is recommended to update the dependencies to the latest versions upon install. Warning: This may cause bugs, if you wish to stay on the stable version, keep it to the templates defaults. The template will have dependency updates from time to time and will always be hold the stable versions.

```sh
yarn upgrade --latest
# or
yarn upgrade-interactive --latest
```

- Template uses the default scripts of GatsbyJS with a few additions:

  - **Type Check**: Complies TypeScript files for errors.
    ```sh
    yarn type-check
    ```
  - **Linting**: Checks for linting errors
    ```sh
    yarn lint
    ```
  - **Linting :: Fix**: Checks for linting errors and tries to fix them automatically
    ```sh
    yarn lint:fix
    ```
  - **Clean**: Cleans the build code from previous builds
    ```sh
    yarn clean
    ```
  - **Build**: Compiles and builds static files for production
    ```sh
    yarn build
    ```
  - **Serve**: Serves the build files
    ```sh
    yarn serve
    ```
  - **Develop**: Starts the server in developer mode
    ```sh
    yarn develop
    ```
  - **Start**: Alias for the develop command; runs yarn develop
    ```sh
    yarn start
    ```
  - **Format**: Formats files as per prettier configuration
    ```sh
    yarn format
    ```
  - **Testing**: Runs all tests. Note: Testing has not been set up in the template
    ```sh
    yarn test
    ```

- If you wish to use npm as your package manager, check the recommended modifications section of the README.

<!-- USAGE GUIDE -->

## Usage Guide

This guide will briefly cover what has already been set up and to what extent. It will also cover what needs attention before proceeding to work on the project.

### Already Setup

- The template utilizes **yarn** as the package manager, to switch to npm refer to the recommended modifications section.
- **Gatsby** has been set up to be up and running with the config files: `gatsby-browser.js`, `gatsby-config.js`, `gatsby-node.js`, `gatsby-ssr.js`.
- **TypeScript** has been set up with a default configuration of `tsconfig.json`.
- **TailwindCSS** has been set up and by default uses `tailwind.config.js` as the config file. The styles are imported in `/src/css/index.css`.
- **PurgeCSS** has been setup with the help of a Gatsby Plugin to minimize the CSS filesize.
- **PostCSS** has been setup with autoprefixer for maximum browser compability. Relavant files: `postcss.config.js`
- **ESLint** has been set up and configured to use the **Airbnb Styleguide**. It utilizes `.eslintrc.json` as its config file. If you wish to use another styleguide refer to recommended modifications section.
- **Prettier** has been set up and configured to use `.prettierrc` with some default rules which you may want to change as per your need. `.prettierignore` has also been added to ignore build files.
- `.gitignore` has been added and is optimized for a gatsby project.
- An **SEO Component** has been setup to utilize react-helmet for providing dynamic site metadata and social previews for all pages. Filepath: `/src/components/seo.tsx`.
- `MIT LICENSE` has been added.
- Set of gatsby plugins being used in template:
  - **React Helmet**: Provides dynamic meta data for pages. Being used in the seo component. For more information, refer to its [docs](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/).
  - **Robots** Provides a `robots.txt` file for the site. For more information, refer to its [docs](https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/).
  - **Sitemap**: Provides a `sitemap.xml` for the site. For more information, refer to its [docs](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/).
  - **Google Analytics**: Google Analytics has been setup for the site. For more information, refer to its [docs](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/).
  - **Source FileSystem**: Used for accessing the file system in gatsby; in this case being used to access `/src/images`. For more information, refer to its [docs](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/).
  - **PostCSS**: Allows the use of PostCSS in Gatsby. For more information, refer to its [docs](https://www.gatsbyjs.org/docs/post-css/).
  - **PurgeCSS**: Allows the use of PurgeCSS in Gatsby. For more information, refer to its [docs](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/).
  - **TypeScript**: Allows the compilation of typescript. For more information, refer to its [docs](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/).
  - **Sharp**: Offers various image optimizations and capabilities. For more information, refer to [docs[1]](https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/), [docs[2]](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/).
  - **Manifest**: Creates a manifest file for PWA. For more information, refer to [docs](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/).
  - **ESLint**: Offers linting capabilities. For more information, refer to [docs](https://www.gatsbyjs.org/packages/gatsby-plugin-eslint/).
  - **Google Fonts**: Allows importing google fonts directly. For more information, refer to [docs](https://www.gatsbyjs.org/packages/gatsby-plugin-google-fonts/).
  - **Offline**: Allows caching of pages to load pages offline or with weak internet. For more information, refer to [docs](https://www.gatsbyjs.org/packages/gatsby-plugin-offline/).

### Needs to be Set Up

- `TSConfig.json` may need modifications as per your project use case. Uncomment properties accordingly.
- Custom CSS properties will be needed to be set up as per project styling guidelines. It can be done by using `tailwind.config.js`. Refer to [TailwindCSS Docs](https://tailwindcss.com) to know more.
- Default manifest metadata needs to be modified in `gatsby-config.js` under the _gatsby-plugin-manifest_ plugin.
- Default metadata needs to be modified in `gatsby-config.js` under the _gatsby-plugin-react-helmet_ plugin.
- Google Analytics Key needs to be added in `gatsby-config.js` under the _gatsby-plugin-google-analytics_ plugin.
- The host site needs to be modified for all plugins in `gatsby-config.js`.
- Linting may need to be modified, files you may want to modify: `.prettierrc`, `.eslintrc.json`.
- To use the SEO component, please add the required props and use images with the right resolution for proper social previews (1200 x 630).
- Change the name and year in `LICENSE`.

<!-- MODIFICATIONS -->

## Recommended Modifications

You may not wish to use the provided features of the template, hence these are the steps to remove some of the most commonly modified parts:

- **Yarn -> NPM**: You may wish to switch to npm instead of yarn. This can be easily done by deleting the `yarn.lock` file and running
  ```sh
  npm ci
  ```
- **Use a different styleguide**: You may not wish to use the provided Airbnb Styleguide. In order to remove `airbnb` under plugins in `.eslintrc.json` and remove `eslint-config-airbnb` from project dependencies.
- **Remove Gatsby Plugins**: You may not need some of the plugins provided. To safely remove plugins, remove the plugin from `gatsby-config.js` and remove the respective plugin from the project dependencies.

<!-- CONTRIBUTING -->

## Contributing

This project is open for any modifications which you may feel that makes the template a better option over others. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/new-feature`)
3. Commit your Changes. Please use **feat** prefix for new features (`git commit -m 'feat: new feature added'`)
4. Push to the Branch (`git push origin feature/new-feature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Shreyas K. - [@HelixW](https://github.com/helixw) - shreyas.2000@hotmail.com

Project Link: [https://github.com/helixw/gatsby-typescript-tailwind-starter](https://github.com/helixw/gatsby-typescript-tailwind-starter)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Gatsby TypeScript Tailwind](https://www.gatsbyjs.org/starters/impulse/gatsby-typescript-tailwind/)
- [SEO with Gatsby](https://www.gatsbyjs.org/docs/seo/)
- [Gatsby Plugins](https://www.gatsbyjs.org/docs/plugins/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](http://tailwindcss.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Airbnb Styleguide](https://github.com/airbnb/javascript)
- [gitignore.io](https://www.toptal.com/developers/gitignore)
- [shields.io](http://shields.io/)
