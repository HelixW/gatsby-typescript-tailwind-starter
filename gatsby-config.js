module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter',
    description:
      'A Starter Template for projects configured with Gatsby + TypeScript + Tailwind',
    author: '@helixw',
    keywords: [
      'gatsby',
      'starter',
      'typescript',
      'tailwindcss',
      'postcss',
      'purgecss',
    ],
    siteUrl: 'https://gatsby-typescript-tailwind-starter.now.sh/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['src/css/index.css'],
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-typscript-tailwind-starter',
        short_name: 'starter',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#FFFFFF',
        display: 'minimal-ui',
        icon: 'src/images/favicon.svg',
        crossOrigin: 'use-credentials',
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop', 'build-javascript'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
