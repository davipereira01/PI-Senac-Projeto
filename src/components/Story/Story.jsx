import React, { useState, useEffect } from 'react';
import { UsersService } from '../../services/usersService';
import '../Story/Story.scss';
import { FaPlus } from 'react-icons/fa';

export function StoryComponent(props) {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

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

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 768) {
        const userIds = [2, 4, 5, 8];
        const filteredUsers = users.filter((user) => userIds.includes(user.id));
        setSelectedUsers(filteredUsers);
      } else {
        const userIds = [2, 4, 5, 8, 3, 6];
        const filteredUsers = users.filter((user) => userIds.includes(user.id));
        setSelectedUsers(filteredUsers);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [users]);

  return (
    <div className="container-story">
      <div className="circle">
        <FaPlus />
      </div>
      {selectedUsers.map((user) => (
        <div key={user.id} className="story-card">
          <img src={user.img} alt={`${user.firstname} ${user.lastname}`} />
        </div>
      ))}
    </div>
  );
}

export default StoryComponent;
