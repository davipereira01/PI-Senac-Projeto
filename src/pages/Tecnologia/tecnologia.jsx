import React from 'react';
import '../Explorar/explorarPage.scss';
import '../../components/Posts/Posts.scss';
import Header from '../../components/Header/header';
import PostsComponent from '../../components/Posts/Posts';
import { TecnologiaPosts } from '../../components/TecnologiaPosts/TecnologiaPosts';


export function TecnologiaPage() {



  return (
    <div className="layout">   
      <Header userId={1} />
      <main>
      <h1 className='tecnologia-title'>Tecnologia</h1>
      <TecnologiaPosts />
    </main>

        
      
    </div>
  );
}

export default TecnologiaPage;
