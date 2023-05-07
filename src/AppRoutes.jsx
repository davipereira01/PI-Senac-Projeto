import React, {useContext} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';

import { SignInPage } from './pages/SignInPage';
import HomePage  from './pages/HomePage';
import FeedPage  from './pages/FeedPage';
import StorePage from './pages/StorePage';
import Loja from './pages/StorePage/loja/Loja';

import { AuthProvider, AuthContext} from './pages/contexts/auth'; // importa o contexto de autenticação

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
                    <Route exact path="/" element={ <Private><FeedPage /></Private> } />
                    <Route exact path="/home" element={ <Private><HomePage /></Private> } />
                    <Route exact path = "/store" element = { <Private><StorePage /></Private> } />
                    <Route exact path = "/lojas" element = { <Private><Loja /></Private> } />
                    
                    <Route exact path = "/:storeId" element = { <Private><Loja /></Private> } />
                </Routes>
            </AuthProvider>  
        </Router>
    );
};

export default appRoutes;