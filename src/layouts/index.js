import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// Base CSS
// import './index.css'

// Prism CSS
require("prismjs/themes/prism-tomorrow.css");

// Theming
import '../scss/main.scss';

// Structure Components
import Navigation from '../components/Navigation'

const Layout = ({ children, data }) => {

    console.log(data);
    return (
        <div>
            <Helmet
                title={data.site.siteMetadata.title}
                meta={[
                    { name: 'description', content: 'Sample' },
                    { name: 'keywords', content: 'sample, something' },
                ]}
                link={[
                    { href: 'https://fonts.googleapis.com/css?family=Nunito:400,700|Roboto+Mono', rel: 'stylesheet' }
                ]}
            />
            <div className="page">
                <Navigation nav={data} />
                <div className="documentation-wrapper">
                    {children()}
                </div>
            </div>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.func,
}

export default Layout

export const pageQuery = graphql `
    query IndexQuery {
        allMarkdownRemark (
            sort: { order: ASC, fields: [frontmatter___title]}
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        title
                    }
                }
            }
        }

        site {
            siteMetadata {
                title
            }
        }
    }
`