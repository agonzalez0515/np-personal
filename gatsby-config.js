module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-glamor`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-google-sheets`,
      options: {
        spreadsheetId: `1bKSiCznut3qpjim1eq5S4GWTOfWOeB3yKH3Gf4s2O80`,
        worksheetTitle: `articles`,
        credentials: require(`./client_secret.json`)
      }
    }
  ],
}
