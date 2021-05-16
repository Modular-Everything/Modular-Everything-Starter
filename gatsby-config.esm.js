import dotenv from 'dotenv';

//

dotenv.config({ path: '.env' });
const isProd = process.env.NODE_ENV === 'production';

//

export default {
  siteMetadata: {
    title: 'Default Title',
    siteUrl: 'http://localhost:8000',
    titleTemplate: 'Website Name',
    description: 'Website Description',
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-axe`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Website Name`,
        short_name: `Website Name`,
        start_url: `/`,
        background_color: `#111`,
        theme_color: `#adff00`,
        display: `standalone`,
        icon: `./src/images/favicon.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#adff00`,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-svgr-svgo',
      options: {
        inlineSvgOptions: [
          {
            test: /\.inline.svg$/,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
  ],
};
