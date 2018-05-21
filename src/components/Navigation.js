import React from 'react'
import Link from "gatsby-link";

const Navigation = (props) => {
    
    const { edges: posts } = props.nav.allMarkdownRemark;

    return (
        <div className="navigation">
            <div className="logo">
                <h2><Link to="/">builtin react</Link></h2>
            </div>
            <nav className="links">
                <ul>
                    {
                        posts.map(({ node: post }) => {
                            return (
                                <li key={post.id}><Link activeClassName="active" to={post.frontmatter.path}>{post.frontmatter.title}</Link></li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navigation