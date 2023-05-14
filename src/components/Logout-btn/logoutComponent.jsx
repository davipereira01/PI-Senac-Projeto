import React, { useContext } from 'react';
import { AuthContext } from '../../pages/contexts/auth';

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);

  const handleLogoutClick = () => {
    logout();
  };

  return (
    <button id='btn-logout' onClick={handleLogoutClick}>
      Sair
    </button>
  );
};

export default LogoutButton;
