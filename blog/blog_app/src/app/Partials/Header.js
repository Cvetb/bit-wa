import React from 'react';
import { Link } from 'react-router-dom';

 const Header = (props) => {
     return (
    <nav className="deep-purple accent-3">
    <div className="container nav-wrapper deep-purple accent-3">
      <Link to='/' className="brand-logo">Blog</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/authors'>Authors</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </div>
  </nav>
     )
}
 export default Header;