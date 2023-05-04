import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
import './floating-cart.css'

const FloatingCart = () => {
  return (
    <div id='floating-cart-container'>
      <div className="container-cart">
        <div className="quantity-in-cart">
            <p id="value">7</p>
        </div>
        <Link to='/cart'>
          <FontAwesomeIcon icon={faShoppingCart} className='icon'/>
        </Link>
      </div>
    </div>
  )
}

export default FloatingCart
