import React from 'react'
import {Link} from 'react-router-dom'
const Signup = () => {
  return (
    <div id='signup-container'>
      <h1>Lucky.com</h1>
      <p>Select the option depending on your motive of entry to our website.</p>
      <section className="button-for-signup-selection">
        <Link to='/buyers/signup'>Buying</Link>
        <Link to='/sellers/signup'>Selling</Link>
        <Link to='/signin'>Back</Link>
      </section>
    </div>
  );
}

export default Signup
