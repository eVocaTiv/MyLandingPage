module.exports = {
  siteMetadata: {
    title: `Kunal Dewan`,
    description: `Kunal Dewan's Landing Page`,
    author: `Kunal Dewan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@routes': 'src/routes',
          '@appContent': 'src/appContent',
          '@components': 'src/components',
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
        },
        extensions: ['js', 'jsx'],
      },
    },
    // scroll-reveal config borrowed from Gatsby docs.
    // https://www.gatsbyjs.org/packages/gatsby-plugin-scroll-reveal
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
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
};
