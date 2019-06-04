import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="Nav">
      <NavLink exact to="/" title="Dashboard">
        <i className="fas fa-columns"></i>
      </NavLink>
      <NavLink to="/jobs" title="Job Search">
        <i className="fas fa-briefcase"></i>
      </NavLink>
      <NavLink to="/fav" title="Bookmarked Jobs">
        <i className="fas fa-bookmark"></i>
      </NavLink>
    </nav>
  );
}

export default NavBar;