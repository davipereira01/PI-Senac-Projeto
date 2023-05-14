import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { findUserByEmailAndPassword } from '../../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate(); // navegação entre rotas
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // estado de carregamento

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user'); // pega o usuário do localStorage
    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser)); // se existir, seta o usuário
    }
    setLoading(false); // se não existir, seta o usuário como null
  }, []); // executa uma única vez

  const login = async (email, password) => {
    console.log('login auth', { email, password });

    try {
        const user = await findUserByEmailAndPassword(email, password);

      if (user) {
        localStorage.setItem('user', JSON.stringify(user)); // salva o usuário no localStorage
        setUser(user); // seta o usuário no estado
        navigate('/'); // navega para a rota raiz
      } else {
        alert('Senha incorreta');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao tentar realizar o login');
    }
  };

  const logout = () => {
    console.log('logout');
    setUser(null); // remove o usuário do estado
    localStorage.removeItem('user'); // remove o usuário do localStorage
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );

  //console.log AuthProvider
  console.log('AuthProvider', { user, loading });
};
