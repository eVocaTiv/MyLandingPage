module.exports = {
  siteMetadata: {
    title: `Kunal Dewan`,
    description: `Kunal Dewan's Landing Page`,
    author: `Kunal Dewan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure color of the scroll indicator
        color: 'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(128,57,102,1) 25%, rgba(137,90,243,1) 56%, rgba(0,194,203,1) 81%)',
        // Height of the scroll indicator
        height: '10px',
        // Configure paths where the scroll indicator will appear
        paths: ['/', '/blog/**'],
        // Configure the z-index of the indicator element
        zIndex: `9999`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@routes': 'src/routes',
          '@appContent': 'src/appContent',
          '@components': 'src/components',
          '@containers': 'src/containers',
          '@constants': 'src/constants',
          '@layouts': 'src/layouts',
          '@pages': 'src/pages',
          '@sass': 'src/sass',
          '@templates': 'src/templates',
          '@posts': 'content/posts',
          '@sagas': 'src/store/sagas',
          '@reducers': 'src/store/reducers',
          '@actionTypes': 'src/store/sagas/actionTypes',
          '@actions': 'src/store/actions',
          '@store': 'src/store',
          '@images': 'src/images',
          '@videos': 'src/videos',
          '@colors': 'src/colors',
          '@styles': 'src/styles',
          '@utils': 'src/utils',
        },
        extensions: ['js', 'jsx'],
      },
    },
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
        name: `Kunal Dewan | Designer & Developer`,
        short_name: `Kunal Dewan`,
        start_url: `/`,
        background_color: `#895AF3`,
        theme_color: `#895AF3`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
