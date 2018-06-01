import React from "react";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;

  console.log()

  return (
    <div className="person-container">
      <div className="landfing-post">
        Person
        <h1>{frontmatter.name}</h1>
        <h2>{frontmatter.date}</h2>
        <img src={frontmatter.image} />
        <div
          className="landing-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query PersonPageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        name
        image
      }
    }
  }
`;