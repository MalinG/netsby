module.exports = {
    plugins: [
       `gatsby-plugin-netlify-cms`,
       {
          resolve: `gatsby-source-filesystem`,
          options: {
            path: `${__dirname}/blog/`,
            name: "markdown-pages",
          },
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            path: `${__dirname}/landing`,
            name: 'landing',
          },
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            path: `${__dirname}/person`,
            name: 'person',
          },
        },
      `gatsby-transformer-remark`,
    ]

  };