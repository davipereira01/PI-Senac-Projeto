import React, { useState, useEffect } from 'react';
import '../Header/header.scss';
import UsersService from '../../services/usersService';
import {FaSearch} from 'react-icons/fa';


const Header = (props) => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    UsersService.getUsers()
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  const user = users.find(user => user.id === props.userId);
  const userPhotoUrl = user ? user.img : '';
 

return (


    <div className="layout">
            
            <header className='header'>
      <div className="user-img">
        <img src={userPhotoUrl} alt="User avatar" />
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Amigos</a></li>
          <li><a href="#">Conquistas</a></li>
          <li><a href="#">Explorar<FaSearch/></a></li>
        </ul>
      </nav>
    </header>
    
            
            
    </div>



        
        
    


   



      
    )
  }

  export default Header;