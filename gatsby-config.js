module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
    resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'material icons',
          'roboto:300,400,500,700',
        ],
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: 'lWbGf7si3D3DSyTrIFjj8gtt',
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
        localAssets: true, // Optional parameter to download the images to use with Gatsby Image Plugin
        // languages: ['de', 'at'] // Optional parameter. Omission will retrieve all languages by default.
      }
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `rubik`,
          `source sans pro:400,500,700`,
        ],
        display: 'swap'
      }
    },
    {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /svgs/ // See below to configure properly
        }
      }
    },
  ],
}