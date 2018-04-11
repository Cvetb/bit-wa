import React, { Component } from 'react';
import PropTypes from "prop-types";

const Header = (props) => {
    return(
       <div> 
<h1 className="Header">{props.headerTitle}</h1>
</div>
    )
}
Header.propTypes = {
    headerTitle: PropTypes.string.isRequired
}
Header.defaultProps = {
    headerTitle: "Naslov"
 }

export default Header;