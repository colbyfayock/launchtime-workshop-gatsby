const path = require('path');

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
    /**
     * @lesson-02-answer
     * In order to take advantage of some of the Webpack fixes
     * for Leaflet without taking care of it ourselves, we can use
     * the React Leaflet Gatsby Plugin in our project.
     */
    'gatsby-plugin-react-leaflet'
  ],
};
