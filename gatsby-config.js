require('env2')('.env')


module.exports = {
  siteMetadata: {
    title: `Natalia Provatas`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACEID,
        accessToken: process.env.TOKEN,
      },
    }
  ],
}
