import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../../firebase';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // const user = userCredential.user;
          console.log(userCredential)
        })
        .catch((error) => {
          alert(error.message)
        });
  };

  return (
    <div className='sing-up-container'>
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
        <input
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type='password'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
