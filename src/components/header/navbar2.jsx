import React from 'react'
import { Link } from 'react-router-dom';
import './navbar2.css';

const Navbar2 = () => {
  return (
    <div id='navbar2-container'>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/recent-activities'>Activity</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar2
