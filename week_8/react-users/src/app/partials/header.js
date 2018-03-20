import React, { Component } from 'react';
import PropTypes from "prop-types";
const Header = (props) => {
    return (
        <nav>
        <div className="nav-wrapper">
        <a href="#" class="brand-logo center">{props.title}</a>
            <ul className="right hide-on-med-and-down">
            <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
            </ul>
            </div>
        </nav>
    )

}
Header.propTypes = {
    title: PropTypes.string.isRequired
  };

export default Header; 