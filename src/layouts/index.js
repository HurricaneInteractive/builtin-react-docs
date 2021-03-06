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

import favicon from '../static/builtin-favicon.png'

const Layout = ({ children, data }) => {
    return (
        <div>
            <Helmet
                title={data.site.siteMetadata.title}
                meta={[
                    { name: 'description', content: 'Collection of React Components that can be used to quickly create good looking prototypes.' },
                    { name: 'keywords', content: 'react, component library, react prototype, reactjs, styled components, quick react prototypes' },
                    { name: 'robots', content: 'index, follow'}
                ]}
                link={[
                    { href: 'https://fonts.googleapis.com/css?family=Nunito:400,700|Roboto+Mono', rel: 'stylesheet' },
                    { href: favicon, type: 'image/png', rel: 'icon' }
                ]}
            >
                <html lang="en" />
            </Helmet>
            <div className="page">
                <Navigation nav={data} />
                <section className="documentation-wrapper">
                    {children()}
                </section>
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
                        tags
                        comingSoon
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