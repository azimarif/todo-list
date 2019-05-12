import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className='navigation-bar'>
    <nav className='nav-bar'>
      <ul className='nav-list'>
        <li className='nav-list-item'>
          <NavLink to='/'>All Tasks</NavLink>
        </li>
        <li className='nav-list-item'>
          <NavLink to='/pending'>Pending Tasks</NavLink>
        </li>
        <li className='nav-list-item'>
          <NavLink to='/completed'>Completed Tasks</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
