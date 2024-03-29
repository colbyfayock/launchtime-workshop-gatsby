const path = require('path');

require('dotenv').config({
  path: `../.env.shared`,
});

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-resolve-src',
      options: {
        srcPath: path.resolve(__dirname, 'src'),
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'LaunchTime',
        short_name: 'LaunchTime',
        start_url: '/',
        icon: './src/assets/images/launchtime-one-color.png',
      },
    },
    'gatsby-plugin-react-leaflet'
  ],
};
