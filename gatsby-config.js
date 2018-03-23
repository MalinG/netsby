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
        // {
        //   resolve: 'gatsby-source-filesystem',
        //   options: {
        //     path: `${__dirname}/src/landing`,
        //     name: 'landing',
        //   },
        // },
      `gatsby-transformer-remark`,
    ]

  };