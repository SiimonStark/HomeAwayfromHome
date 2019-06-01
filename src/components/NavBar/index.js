import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="Nav">
      <NavLink to="/">Dash</NavLink>
      <NavLink to="/">Jobs</NavLink>
      <NavLink to="/">Faves</NavLink>
    </nav>
  );
}

export default NavBar;