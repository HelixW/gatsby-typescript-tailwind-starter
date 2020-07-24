module.exports = {
  siteMetadata: {
    title: 'Gatsby TypeScript Tailwind Starter',
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
    siteUrl: 'https://gatsby-typescript-tailwind-starter.tk/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://gatsby-typescript-tailwind-starter.tk/',
        sitemap: 'https://gatsby-typescript-tailwind-starter.tk/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 5000,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-173128476-1',
        head: true,
        anonymize: true,
        respectDNT: true,
        exclude: [],
        pageTransitionDelay: 0,
        defer: true,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
      },
    },
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
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Monoton'],
        display: 'swap',
      },
    },
    `gatsby-plugin-offline`,
  ],
}
