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
     * @lesson-02-todo
     * When trying to build our app, we run into issues with our
     * libraries requiring the Window. The Window doesn't exist
     * during the build process because we're not in a browser,
     * we're in Node. How can we use a plugin to fix this?
     */
  ],
};
