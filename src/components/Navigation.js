import React from 'react'
import Link from "gatsby-link";

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
                <h2><Link to="/">builtin react</Link></h2>
            </div>
            <nav className="links">
                {
                    NavigationStructure.map((nav, i) => {
                        if (nav.nav.length > 0) {
                            return (
                                <div className="nav-section" key={i}>
                                    <p onClick={(e) => toggleUl(e)}>{nav.title}</p>
                                    <ul>
                                        {
                                            nav.nav.map((item, i) => (
                                                <li key={item.id}><Link activeClassName="active" to={item.frontmatter.path}>{item.frontmatter.title}</Link></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    })
                }
            </nav>
        </div>
    )
}

export default Navigation