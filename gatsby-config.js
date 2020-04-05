module.exports = {
  siteMetadata: {
    title: `Kunal Dewan`,
    description: `Kunal Dewan's Website`,
    author: `Kunal Dewan`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@routes': 'src/routes',
          '@appContent': 'src/appContent',
          '@components': 'src/components',
          '@containers': 'src/containers',
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
  ],
};
