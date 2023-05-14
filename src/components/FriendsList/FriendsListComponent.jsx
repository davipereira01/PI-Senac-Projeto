import React, { useState, useEffect, useContext } from 'react';
import { UsersService } from '../../services/usersService';
import { FaPlus } from 'react-icons/fa';
import { AuthContext } from '../../pages/contexts/auth';
import '../FriendsList/FriendsList.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export function FriendsListComponent(props) {
  const [users, setUsers] = useState([]);
  const { user } = useContext(AuthContext); // acessando o contexto de autenticação

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await UsersService.getUsers();
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  }, []);

// Filtra os amigos do usuário logado
const loggedUserFriends = users.filter(
    (friend) => friend.id !== user.id && friend.connections && friend.connections.includes(user.id)
  );

  return (
    <div className="container-fluid">
      <div className="row">
        {loggedUserFriends.map((user) => (
          <div key={user.id} className="col-md-3 mb-3">
            <div className="card">
        
                <a href={`/profile/${user.id}`}>

                <img 
                src={user.img}
                alt={`${user.firstname} ${user.lastname}`}
                className="card-img-top"

              />

                </a>
                
          
              <div className="card-body">
                <h5 className="card-title">{`${user.firstname} ${user.lastname}`}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FriendsListComponent;
