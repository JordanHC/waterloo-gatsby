var proxy = require("http-proxy-middleware");

module.exports = {
  siteMetadata: {
    title: "Save Waterloo Dock",
    siteUrl: `https://www.savewaterloodock.com`,
    description:
      "This campaign aims to protect Liverpool’s unique heritage against destructive development proposals. Especially that concerning Waterloo Dock."
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-styled-components`,
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static"
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    "gatsby-plugin-sitemap",
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-92018536-3",
        head: true
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Save Waterloo Dock`,
        short_name: `SWD`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#003A9C`,
        display: `standalone`,
        icon: `static/img/icon.png`,
        theme_color_in_head: false,
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: "https://afb407e7c35e4debb76e98b37a26b7ec@sentry.io/1457608",
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() => ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)()
      }
    },
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ],
};
