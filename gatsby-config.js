module.exports = {
    siteMetadata: {
        title: 'Gatsby Default Starter',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-catch-links',
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/docs`,
                name: 'docs',
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-prismjs',
                        options: {
                            classPrefix: 'language-',
                            inlineCodeMarker: null
                        }
                    }
                ]
            }
        }
    ],
}
