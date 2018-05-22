import React from 'react'
import Link from "gatsby-link";
import { ButtonPill, palette } from 'builtin-react';
import logo from '../static/builtin-logo.svg';

const Navigation = (props) => {
    
    const { edges: posts } = props.nav.allMarkdownRemark;

    let topLevel = [], elements = [], components = [];

    posts.forEach(({node : post}) => {
        let tag = post.frontmatter.tags;
        if (tag !== null) {
            if (tag.indexOf('element') !== -1) {
                elements.push(post);
                return false;
            }
            else if (tag.indexOf('component') !== -1) {
                components.push(post);
                return false;
            }
        } else {
            topLevel.push(post);
        }
    });

    const NavigationStructure = [
        {
            title: "Utility",
            nav: topLevel
        },
        {
            title: "Elements",
            nav: elements
        },
        {
            title: 'Components',
            nav: components
        }
    ]

    const toggleUl = (e) => {
        e.preventDefault();
        let parent = e.target.parentNode;
        let ul = parent.querySelector('ul');
        ul.classList.toggle('toggled');
    }

    return (
        <div className="navigation">
            <div className="logo">
                <h1><span>builtin-react</span><Link to="/"><img src={logo} alt="builtin react logo" /></Link></h1>
            </div>
            <nav className="links">
                {
                    NavigationStructure.map((nav, i) => {
                        if (nav.nav.length > 0) {
                            return (
                                <div className="nav-section" key={i}>
                                    <p onClick={(e) => toggleUl(e)}>{nav.title}</p>
                                    <ul className={ i === 0 ? 'toggled' : '' }>
                                        {
                                            nav.nav.map((item, i) => (
                                                <li key={item.id}>
                                                    <Link activeClassName="active" to={item.frontmatter.path}>
                                                        {item.frontmatter.title}
                                                        { item.frontmatter.comingSoon ? <ButtonPill theme={{ pillFill: palette.lightGrey, pillFont: palette.grey }}>coming soon</ButtonPill> : '' }
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    })
                }
            </nav>
            <p className="credit">Created by <a href="https://www.winkingowl.digital/">WinkingOwl Digital</a></p>
        </div>
    )
}

export default Navigation