import React, { useState, useEffect } from 'react';
import { UsersService } from '../../services/usersService';
import '../Story/Story.scss';
import {FaPlus} from 'react-icons/fa';

export function StoryComponent(props) {
    const [users, setUsers] = useState([]);

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

    // Filtro para mostrar 5 amigos
    const userIds = [2, 4, 5, 8, 3, 6];
    const selectedUsers = users.filter(user => userIds.includes(user.id));

    return (
        <div className="container-story">
          <div className="circle">
                <FaPlus />
          </div>
            {selectedUsers.map(user => (
                <div key={user.id} className="story-card">
                    <img src={user.img} alt={`${user.firstname} ${user.lastname}`} />
                    
                    
                </div>
            ))}
        </div>
    );
}

  
  export default StoryComponent;