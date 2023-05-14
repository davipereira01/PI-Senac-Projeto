import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import { SignInPage } from './pages/SignInPage';
import { SignInPage2 } from './pages/SignInPage2';
import { FeedPage } from './pages/FeedPage';

import { AuthProvider, AuthContext } from './pages/contexts/auth';
import { CadastroPage } from './pages/CadastroPage/cadastroPage';
import { FriendsPage } from './pages/FriendsPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { ExplorarPage } from './pages/Explorar/explorarPage';
import { TecnologiaPage } from './pages/Tecnologia/tecnologia';
import NotFoundComponent from './components/404Page/404';

const appRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);
    if (loading) {
      return <h1 className="loading">Carregando...</h1>;
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  function HideHandIcon() {
    if (window.location.pathname === '/store') {
      alert('oi');
      console.log('oi');
    }
  }

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<SignInPage />} />
          <Route exact path="/login2" element={<SignInPage2 />} />
          <Route exact path="/" element={<Private><FeedPage /></Private>} />
          <Route exact path="cadastro" element={<CadastroPage />} />
          <Route exact path="/friends" element={<Private><FriendsPage /></Private>} />
          <Route exact path="/explorar" element={<Private><ExplorarPage /></Private>} />
          <Route exact path="/tecnologia" element={<Private><TecnologiaPage /></Private>} />
          <Route component={<NotFoundComponent />} />
          <Route path="*" element={<NotFoundComponent />} />
          <Route
            exact
            path="profile/:id"
            element={<Private><ProfilePage /></Private>}
          />
        </Routes>
        
      </AuthProvider>
    </Router>
  );
};

export default appRoutes;
