import React from 'react'
import Link from 'gatsby-link'

import { H1, H4, Text, Separator, palette, ButtonLink, Box } from 'builtin-react'

const IndexPage = () => (
    <div className="homepage">
        <H1 theme={{ heading: palette.blue }}>Rapid React Prototyping</H1>
        <Text>Builtin React is a component library created using <a href="https://www.styled-components.com/">styled-components</a>. It will enable you to create layouts quickly. The components have default styling which makes your project look good while providing you with the flexibility to easily override these styles.</Text>
        <Text>The library is split up into two main parts. Elements and Components. Elements are small building blocks to layout your page and construct the varies components that make up your application. Components are made up of the different Elements and offer more extensive customisation and functionality.</Text>
        
        <Separator />
        <code>npm install builtin-react</code>
        <Separator />

        <ButtonLink 
            theme={{ buttonFill: '#cb3837' }} 
            href="https://www.npmjs.com/package/builtin-react"
        >NPM</ButtonLink>
        <ButtonLink
            theme={{ buttonFill: '#24292e' }}
            href="https://github.com/HurricaneInteractive/builtin-react"
        >Github</ButtonLink>
    </div>
)

export default IndexPage
