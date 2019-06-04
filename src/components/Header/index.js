import React from 'react';
import {NavLink} from 'react-router-dom';
import Search from '../../container/Search/';
import logo from '../../resources/Group 3.svg';

const Header = () => {
  return (
    <header>
      <NavLink exact to='/'>
        <img src={logo} 
          alt="HomeAwayfromHome Logo" 
          title="Back to Dashboard" />
      </NavLink>
      <h1>H.A.H</h1>
      <Search />
    </header>
  )
}

export default Header;