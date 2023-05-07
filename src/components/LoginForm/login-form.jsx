import React from 'react';
import {useState, useContext} from 'react';
import { GoogleAuthBtn } from '../GoogleAuthBtn/googleAuthBtn';
import {AuthContext} from '../../pages/contexts/auth';
import '../styles.css';


export const LoginForm = () => {
    const { authenticated, login} = useContext(AuthContext); // pega o contexto de autenticação
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("submit", {email, password});
        login(email, password); // chama a função de login do contexto
    };

    return (
    <div className="login" id='login'>
        
        
         <form onSubmit={handleSubmit} className="form login-form">
            <div className="field">
                <GoogleAuthBtn />
            </div>
            <span className='alternative-option'><p>ou</p></span>
            <div className="field">
                
                <input 
                    className="input-user"  
                    placeholder="E-mail"
                    type="email" 
                    name='email' 
                    id='email' 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)} 
                    />

            </div>
            <div className="field">
                
                <input 
                    className="input-password" 
                    placeholder="Senha"
                    type="password" 
                    name='password' 
                    id='password'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}  
                     />

            </div>
            <div className="actions container-login-form-btn">
                <button 
                    className="login-form-btn"
                    type='submit'>Entrar
                </button>
            </div>
            <div className="text-center">
                  <span className="txt1">Não possui conta?</span>
                  <a className="txt2" href="#">Cadastre-se</a>
                </div>
            

        </form>

      </div>
       



      
    )
  }

  export default LoginForm;
  
  
  
  