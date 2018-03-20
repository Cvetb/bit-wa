import React, { Component } from 'react';

const Header = (props) => {
    return (
        <nav>
            <h3 className="nav-wrapper">{props.title}</h3>
            <ul className="right hide-on-med-and-down">
                <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
                <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
            </ul>
            
        </nav>
    )

}

export default Header; 