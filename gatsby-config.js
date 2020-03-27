module.exports = {
  siteMetadata: {
    title: `<Smoldev />`,
    description: `A portfolio, and blog about my coding journey.`,
    author: `@_smolDev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://api.smoldev.dev/",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "pages",
          "projects",
          "posts"
        ],
        queryLimit: 1000,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
