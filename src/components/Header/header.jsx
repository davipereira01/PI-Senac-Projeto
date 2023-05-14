import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../pages/contexts/auth';
import UsersService from '../../services/usersService';
import LogoutButton from '../Logout-btn/logoutComponent';

import '../Header/header.scss';
import { FaSearch } from 'react-icons/fa';

const Header = (props) => {
  const { authenticated, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUserClick = (userId) => {
    navigate(`/profile/${userId}`);
  };

  const userPhotoUrl = user ? user.img : '';

  return (
    <div className="layout">
      <header className="header">
        {authenticated && (
          <div className="user-img">
            {user && (
              <img src={userPhotoUrl} alt="User avatar" onClick={() => handleUserClick(user.id)} />
            )}
          </div>
        )}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/friends">Amigos</Link>
            </li>
            <li>
              <a href="#">Conquistas</a>
            </li>
            <li>
              <a href="#">
                <Link to="/explorar">Explorar</Link>
                <FaSearch />
              </a>
            </li>
            {authenticated && (
              <li>
                <LogoutButton />
              </li>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
