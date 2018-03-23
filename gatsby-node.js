const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`);
  const landingPageTemplate = path.resolve(`src/templates/landingTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.path.match(/^\/page/)) {
        component = landingPageTemplate;
      } else {
        component = blogPostTemplate;
      }

      createPage({
        path: node.frontmatter.path,
        component: component,
        context: {}, // additional data can be passed via context
      });
    });
  });
};