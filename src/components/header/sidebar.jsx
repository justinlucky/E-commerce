import React, { useState, useEffect } from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome , faUsers, faEnvelope, faUserCircle, faTools, faNewspaper, faShoppingBasket} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const toggleButton = document.getElementById('toggle-button');
    const navLinks = document.querySelector('.nav-links');

    const closeIcon = document.createElement('i');
    closeIcon.className = 'fa fa-times';

    const handleClick = (event) => {
      if (event.target.tagName === 'A') {
        setSidebarOpen(false);
        navLinks.classList.remove('active');
      }
    };

    const handleToggle = () => {
      setSidebarOpen(!sidebarOpen);
      navLinks.classList.toggle('active');
    };

    toggleButton.addEventListener('click', handleToggle);
    navLinks.addEventListener('click', handleClick);

    return () => {
      toggleButton.removeEventListener('click', handleToggle);
      navLinks.removeEventListener('click', handleClick);
    };
  }, [sidebarOpen]);

  return (
    <div className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <button id="toggle-button" className="sidebar-toggle">
        <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
      </button>
      <ul className="nav-links">
        <Link to='/' className='home'>
          <p>Browse</p>
          <h2>Lucky.<span>com</span></h2>
        </Link>
        <li>
          <Link to='/signup' className='users'><FontAwesomeIcon icon={faUserCircle}/> User, Sign Up</Link>
        </li>
        <li>
         <Link to='/'>Lucky Home &nbsp;<FontAwesomeIcon icon={faHome}/></Link>
        </li>
        <li>
         <Link to="/about">About Us &nbsp;<FontAwesomeIcon icon={faUsers}/></Link>
        </li>
        <li>
          <Link to="/contact">Contact &nbsp;<FontAwesomeIcon icon={faEnvelope}/></Link>
        </li>
        <li>
          <Link to="/products">Products &nbsp; <FontAwesomeIcon icon={faShoppingBasket}/></Link>
        </li>
        <li>
          <Link to='/recent-activities'>News &nbsp; <FontAwesomeIcon icon={faNewspaper}/></Link>
        </li>
        <li>
          <Link to='/services'>Services &nbsp; <FontAwesomeIcon icon={faTools}/></Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Sidebar;