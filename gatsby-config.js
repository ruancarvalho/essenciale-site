module.exports = {
  siteMetadata: {
    title: 'Essenciale Manaus',
    logo: 'https://res.cloudinary.com/essencialemanaus/image/upload/c_scale,w_300/v1528044563/essenciale-brand.png',
    footer: 'https://res.cloudinary.com/essencialemanaus/image/upload/c_scale,w_250/v1542290280/essenciale-logo-h-t.png'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
