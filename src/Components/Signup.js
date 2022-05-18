import React from 'react';
import "./Signup.css";

function Signup() {
    const register = (e) => {
        e.preventDefault();
    };

  return (
    <div className='signup'>
      <form>
          <h1>Sign In</h1>
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button type='submit' className=''>Sign In</button>
          <h4>
              <span className='signup_gray'>New to Netflix? </span>
              <span className='signup_link'>Sign Up now.</span>
          </h4>
      </form>
    </div>
  )
}

export default Signup;
