import React, { useState, useEffect } from 'react';
import UsersService from '../../services/usersService';

function UserList(props) { // 1
  const [users, setUsers] = useState([]); // 2

  useEffect(() => {
    UsersService.getUsers().then((response) => {
      const user = response.data.find((user) => user.id === 1);
      setUsers([user]);
    });
  }, []);
  

  return (

    <div className="user-list">
      {users.map((user) => ( // 7
        <div className="user-item" key={user.id}>
          <div className="user-photo">
            <img src={user.img} alt={user.name} />
          </div>
          <div className="user-name">{user.name}</div>
        </div>
      ))}
    </div>
  );



}

export default UserList;

