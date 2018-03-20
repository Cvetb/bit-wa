import React, { Component } from 'react';
import PropTypes from "prop-types";
const Header2 = (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
            <a href="#" class="brand-logo center">{props.title}</a>
            <div className = "row">
            <ul className="right hide-on-med-and-down">
                <li><a href="badges.html"><i className="material-icons">refresh</i></a></li>
                <li><a href="badges.html"><i className="material-icons">list</i></a></li>
            </ul>
            </div>
            </div>
        </nav>
    )

};
Header2.propTypes = {
    title: PropTypes.string.isRequired
  };

export default Header2; 