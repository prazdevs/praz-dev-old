module.exports = {
  siteMetadata: {
    title: `praz.dev`,
    description: `Sharing my love and passion for beautiful code and good practices. Positive and pragmatic mindset leads me to remain curious and constantly learning.`,
    author: `Sacha 'PraZ' Bouillez`,
    siteUrl: `https://praz.dev`,
    image: `https://praz.dev/images/icon.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/content/about`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-code-titles`,
            options: { className: `code-title` },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              backgroundColor: `transparent`,
              showCaptions: true,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-reading-time`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `praz.dev | Sacha Bouillez`,
        short_name: `praz.dev`,
        start_url: `/`,
        background_color: `#303030`,
        theme_color: `#f04747`,
        display: `minimal-ui`,
        icon: `content/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/public/**/*.html': [
            'cache-control: no-cache',
            'cache-control: public',
            'cache-control:  max-age=0',
            'cache-control: must-revalidate',
          ],
          '/public/sw.js': [
            'cache-control: no-cache',
            'cache-control:  no-store',
            'cache-control:  max-age=0',
            'cache-control: must-revalidate',
          ],
          '/public/page-data/*': [
            'cache-control: no-cache',
            'cache-control: public',
            'cache-control:  max-age=0',
            'cache-control: must-revalidate',
          ],
        },
      },
    },
  ],
};
