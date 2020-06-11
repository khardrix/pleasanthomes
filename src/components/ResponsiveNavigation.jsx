import React, { useState } from 'react'; // pull in "useState" from "React Hooks"
import { Link } from "@reach/router";

function ResponsiveNavigation ({ navLinks, background, hoverBackground, linkColor, logo }) {
    // hoverIndex is "-1" whenever its declared and give us a function to set the state
        // of "hoverIndex"
    const [ hoverIndex, setHoverIndex ] = useState(-1) 
    // Used to open the drawer slider. It will slide the drawer open and closed with 
        // "true" and "false" (can also use "0" for "false")
    const [ navOpen, setNavOpen ] = useState(false)    

    return(
        <nav 
            className="responsive-toolbar"
            style = {{ background: background }}    
        >
            <ul
                style={{ background: background }}
                className={ navOpen ? 'active' : '' }
            >
                <figure className="image-logo" onClick={ () => { setNavOpen(!navOpen) } }>
                    <img src={ logo } height="40px" width="40px" alt="toolbar-logo" />
                </figure> {/* "<figure></figure>" is "Semantic HTML" */}
                { navLinks.map((link, index) => 
                    <li
                        key={ index }
                        onMouseEnter={ () => { setHoverIndex(index) } }
                        onMouseLeave={ () => { setHoverIndex(-1) } }
                        style={{ background: hoverIndex === index ? (hoverBackground || '#999') : '' }}
                    >
                        <Link
                            to={link.path}
                            style={{ color: linkColor }}
                        >   { link.text }
                            <i className={ link.icon } />
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default ResponsiveNavigation