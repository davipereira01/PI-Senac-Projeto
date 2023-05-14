import React from 'react';
import '../Explorar/explorarPage.scss';
import '../../components/Posts/Posts.scss';
import Header from '../../components/Header/header';
import StoryComponent from '../../components/Story/Story';
import PostsComponent from '../../components/Posts/Posts';
import CategoriasComponent from '../../components/Categorias/CategoriaComponent';

export function ExplorarPage() {

  const handleLugaresFrequentados = () => {
    // Exibe uma lista dos lugares mais frequentados pelo usuário
  };

  const handleDescontos = () => {
    // Exibe uma lista de descontos disponíveis para o usuário
  };

  const handleCriarRole = () => {
    // Leva o usuário para a página de criação de um novo rolê
  };

  const handleAvisos = () => {
    // Exibe uma lista de avisos importantes para o usuário
  };

  return (
    <div className="layout">   
      <Header userId={1} />

        
        <div className="btn-capsule">

        <button onClick={handleLugaresFrequentados}>Lugares mais frequentados</button>
        <button onClick={handleDescontos}>Descontos</button>
        <button onClick={handleCriarRole}>Criar rolê</button>
        <button onClick={handleAvisos}>Avisos</button>

        </div>
     

      <CategoriasComponent />
      <hr />
      <main className='explorar-main'>
      <h2 id='title-categories'>
        Pessoas, lugares e eventos acontecendo, baseados no seu perfil
      </h2>
      </main>
      <main>
      <PostsComponent />
    </main>
        
    </div>
  );
}
