// Nav Header Component

import React, {PropTypes} from 'react';
import {Link, IndexLink } from 'react-router';


const HeaderNav = () => {
  return (
    <nav className="navbar grey darken-3">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo"><span className="yellow-text accent-4">Aurity</span></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><IndexLink to="/" activeClassName="active yellow accent-4"><span>HOME</span></IndexLink></li>
          <li><Link to="/devs" activeClassName="active yellow accent-4"><span>DEVS</span></Link></li>
        </ul>
      </div>
    </nav>   
  );
};


export default HeaderNav;