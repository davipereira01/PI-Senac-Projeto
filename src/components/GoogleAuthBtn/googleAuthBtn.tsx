import {useState} from 'react';
import GoogleLogo from '../../assets/search.png';
import { GoogleAuthProvider, signInWithPopup, User} from 'firebase/auth';
import { auth } from '../../services/firebase';
import React from 'react';














export function GoogleAuthBtn() {

  
  // const for set the result user from the login
  const [user, setUser] = useState<User>({} as User);
  
  
  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();
    

    signInWithPopup(auth, provider)
    .then(result => {
      setUser(result.user);
      localStorage.setItem('user', JSON.stringify(user)); // save the user in the local storage
    })
    .catch(error => {
      console.log(error);
    })
   


    
    
  }

  

    return (

      
      

        

            <div className="input-google-container">
              

                <div className="user">
                  {user.photoURL && <img src={user.photoURL} alt="Foto do usuario" />}
                  <strong>{user.displayName}</strong>
                  <small>{user.email}</small>
                </div>

                <div className="wrap-input">

                  <button type='button'  className="input-google" onClick={handleGoogleSignIn}> <img src={GoogleLogo} className='Google-logo' alt="google logo" /> Entrar com o Google</button>

                </div>
                
                
              
            </div>
          





        
     
    )
  }

