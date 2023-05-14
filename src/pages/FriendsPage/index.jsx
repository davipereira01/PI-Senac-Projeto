import React from 'react';
import Header from '../../components/Header/header';
import FriendsListComponent from '../../components/FriendsList/FriendsListComponent';

export function FriendsPage() {

  return (


    <div className="layout">
      
      <Header userId={1} />

      <main>
           <FriendsListComponent/>
      </main>
      
      <div className="explorar"><h3>Explorar</h3></div>
    </div>
    
     
      

      
    )
  }