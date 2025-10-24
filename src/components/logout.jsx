import React from 'react';
import { logoutUser } from '../firebaseAuth';

function LogoutButton({ onLogout }) {
  const handleLogout = async () => {
    await logoutUser();
    alert("Sucessfully Logged out")
    onLogout();

  };

  return <button onClick={handleLogout}  >Sign Out</button>;
}

export default LogoutButton;
