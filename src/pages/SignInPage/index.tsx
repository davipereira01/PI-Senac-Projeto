import {useState} from 'react';
import pacnetLogo from '../../assets/pacnet-logo.svg';
import GoogleLogo from '../../assets/search.png';
import { GoogleAuthProvider, signInWithPopup, User} from 'firebase/auth';
import { auth } from '../../services/firebase';
import React from 'react';
import { LoginForm } from '../../components/LoginForm/login-form';
import {HomePage}  from '../HomePage/index';
import { GoogleAuthBtn } from '../../components/GoogleAuthBtn/googleAuthBtn';












export function SignInPage() {

  
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

      
      <div className='container'>
        <div className='box-container' id='box-action'>

          <span className='pacnet-text'>
            <h1>Retaguarda <br /> Pac net +</h1>
            <h2>Sua gestão inteligente, <br /> em um só lugar</h2>

          </span>


          <img src={pacnetLogo} className='logo-pacnet' alt="pacnet logo" />

        </div>
        <div className='box-container' id='box-form'>

        
          <span className="login-form-title"><h1>Bem vindo(a)</h1></span>
          <div className='container-login'>
          


          
            
            
            
              <div className="login-form">
                <LoginForm />
              </div>
            
          </div>





        </div>
      </div>
    )
  }

