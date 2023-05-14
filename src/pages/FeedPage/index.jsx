import React, { useContext } from 'react';
import '../SignInPage2/SignInPage2.scss';
import Header from '../../components/Header/header';
import StoryComponent from '../../components/Story/Story';
import PostsComponent from '../../components/Posts/Posts';
import {AuthContext } from '../contexts/auth';
import { Link, useNavigate } from 'react-router-dom';

export function FeedPage() {
  const { user } = useContext(AuthContext); // acessando o contexto de autenticação

  if (!user) {
    // redireciona para a página de login ou exibe uma mensagem de erro
    return <div>Você precisa estar logado para acessar essa página</div>
  }

  return (
    <div className="layout">
      <Header userId={user.id} />
      <main>
        <StoryComponent />
        <PostsComponent />
      </main>
      

      <div className="explorar"><h3><Link to="/explorar">Explorar</Link></h3></div>

    </div>
  )
}
