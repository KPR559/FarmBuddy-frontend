import React from 'react';
import { logoutUser } from '../firebaseAuth';

function LogoutButton({ onLogout }) {
  const handleLogout = async () => {
    await logoutUser();
    onLogout();
  };

  return <button onClick={handleLogout}>Signout</button>;
}

export default LogoutButton;
