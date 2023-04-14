import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import auth from '../../firebase';

const AuthDetails = () => {
  const [authUser, setauthUser] = useState('');

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setauthUser(user);
      } else {
        setauthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () =>{
    signOut(auth).then(() =>{
      alert('Sign out successful')
    }).catch(error => alert(error))
  }
  return (
    <>
      {authUser ? (
        <>
          <p>{`Signed as ${authUser.email}`}</p> <button onClick={userSignOut}>Sign out</button>
        </>
      ) : (
        <p>Signed out</p>
      )}
    </>
  );
};

export default AuthDetails;
