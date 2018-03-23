import React from 'react'
import graphql from 'graphql'

export default (data) => {
    console.log(data);


    return (
        <div>
            <h2>Hello!</h2>
        </div>
    )
}

export const pageQuery = graphql`
    query MyQueryName {
        allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        ) {
            edges {
                node {
                html
                frontmatter {
                    path
                    title
                }
                }
            }
        }
    }
    `;

