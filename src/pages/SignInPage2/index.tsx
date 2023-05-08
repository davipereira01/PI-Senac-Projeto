import {useState} from 'react';
import pacnetLogo from '../../assets/pacnet-logo.svg';
import GoogleLogo from '../../assets/search.png';
import { GoogleAuthProvider, signInWithPopup, User} from 'firebase/auth';
import { auth } from '../../services/firebase';
import React from 'react';
import { LoginForm } from '../../components/LoginForm/login-form';
import { GoogleAuthBtn } from '../../components/GoogleAuthBtn/googleAuthBtn';
import FooterComponent from '../../components/Footer/footer';
import '../SignInPage2/';













export function SignInPage2() {



  

    return (

        <div className='container-capsule'>
     
        <div className='box-container' id='box-form'>

        
          <span className="login-form-title"><h1>Bem vindo!</h1></span>
          <div className='container-login'>
          


          
            
            
            
              <div className="login-form">
                <LoginForm />
              </div>

            
          </div>

          





        </div>

        <div className="cadastro-box">
                <p>Ainda não tem conta? Cadastre-se</p>
              </div>

         <div className="footer-container">

         <FooterComponent />

         </div>
      </div>
     
      
    )
  }
