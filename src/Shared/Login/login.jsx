import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './login.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  
  const handleContinueClick = () => {
    setShowPasswordInput(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //submitting it to the server
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div id='login-container'>
      <h1>Lucky.<span>com</span></h1>
      <form action="" method="post" className='form-signin-mail' onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <label htmlFor="">Email or mobile phone number</label>
          <input type="text" value={username} onChange={handleUsernameChange}/>
        {showPasswordInput && (
          <label> Password 
            <input type="password" name="" id="password" value={password} onChange={handlePasswordChange}/> 
          </label> 
        )}
        <button type="button" onClick={handleContinueClick}>Continue</button>
        {showPasswordInput && <button type='submit'>Login</button>}
        <p>By clicking the Login button you agree to the <Link to='/terms-and-conditions'>Terms and Conditions</Link></p>
        <p>New to this site</p>
        <Link to='/signup' className='signup-button'>Register</Link>
      </form>
      <button className="back-to-home">
        <Link to='/'>Back</Link>
      </button>
    </div>
  );
}

export default Login
