import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from '../../firebase';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // const user = userCredential.user;
    })
    .catch((error) => {
      alert(error.message)
    });
    name()
  };

  const name = () =>{  
   document.getElementById('eml').value = '';
   document.getElementById('psw').value = '';
   }

  return (
    <div className='sing-in-container'>
      <form onSubmit={signIn}>
        <h1>Log In to your Account</h1>
        <input
          type='email'
          id = 'eml'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type='password'
          id = 'psw'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type='submit'>Log In</button>
      </form>
    </div>
  );
};

export default SignIn;
