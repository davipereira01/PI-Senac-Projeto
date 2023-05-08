import React from 'react';
import '../SignInPage2/SignInPage2.scss';
import Header from '../../components/Header/header';
import StoryComponent from '../../components/Story/Story';
import PostsComponent from '../../components/Posts/Posts';



export function FeedPage() {

  return (


    <div className="layout">
      
      <Header userId={1} />

      <main>
        <StoryComponent />
        <PostsComponent />
      </main>
      
      <div className="explorar"><h3>Explorar</h3></div>
    </div>
    
     
      

      
    )
  }