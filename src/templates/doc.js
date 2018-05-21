import React from 'react';
import Helmet from 'react-helmet';

export default function Template({ data }) {
    const { markdownRemark: post } = data;

    return (
        <div className="doc-container">
            <Helmet title={`Builtin React - ${post.frontmatter.title}`} />
            <div className="doc">
                <h1>{post.frontmatter.title}</h1>
                <div 
                    className="doc-container"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </div>
        </div>
    )
}

export const docQuery = graphql`
    query DocumentationByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date
                path
                title
            }
        }
    }
`