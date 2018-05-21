import React from 'react'
import Link from 'gatsby-link'

import { H1 } from 'builtin-react'

const IndexPage = () => (
  <div>
    <H1>Hi people</H1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
