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
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: -300,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill="white" fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
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
    `gatsby-plugin-remove-serviceworker`,
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
