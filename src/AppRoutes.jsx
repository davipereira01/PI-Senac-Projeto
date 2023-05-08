import React, {useContext} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';

import { SignInPage } from './pages/SignInPage';
import { SignInPage2 } from './pages/SignInPage2';
import { FeedPage } from './pages/FeedPage';

import { AuthProvider, AuthContext} from './pages/contexts/auth'; // importa o contexto de autenticação
import { CadastroPage } from './pages/CadastroPage/cadastroPage';


const appRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext); // pega o contexto de autenticação
        if (loading) {
            return <h1 className='loading'>Carregando...</h1>;
        } 

        if (!authenticated) {
            return <Navigate to="/login" />; // se não estiver autenticado, navega para a rota /login
        }
        return children; // se estiver autenticado, renderiza o componente filho

    }
    
    function HideHandIcon () {

    
        if (window.location.pathname === '/store') {
            
            alert('oi');
            console.log('oi');
        }
    }
    
   
    
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    
                    <Route exact path="/login" element= {<SignInPage />} />
                    <Route exact path="/login2" element= {<SignInPage2 />} />
                    <Route exact path="/" element= {<FeedPage />} />
                    <Route exact path="cadastro" element= {<CadastroPage />} />
                    
                   
                </Routes>
            </AuthProvider>  
        </Router>
    );
};

export default appRoutes;