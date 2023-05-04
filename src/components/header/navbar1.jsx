import React from 'react';
import './navbar1.css';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from './sidebar';

library.add(faUser, faMagnifyingGlass);

const Navbar1 = () => {
 
  return (
    <div id="navbar1-container">
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className="logo">
        <Link to="/" className="name">
          Lucky.<span>com</span>
        </Link>
      </div>
      <div className="search-items">
        <input type="search" name="item-search" id="text-search" placeholder="Search for products here" />
        <FontAwesomeIcon icon="magnifying-glass" className="search-button" />
      </div>
      <div className="my-account">
        <Link to="/signin" className='account-link'>
          <FontAwesomeIcon icon="user" className="user-icons" />
          <p>Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar1;