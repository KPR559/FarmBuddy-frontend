import React from 'react';
import LogoutButton from './logout';

function Dashboard({ user, onLogout }) {
  return (
    <div>
      <h2>Welcome, {user?.email || 'Farmer'}!</h2>
      <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', minWidth: '150px' }}>
          <h4>Soil Health</h4>
          <p>Good</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', minWidth: '150px' }}>
          <h4>Market Prices</h4>
          <p>Check latest</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', minWidth: '150px' }}>
          <h4>Weather</h4>
          <p>Sunny, 28°C</p>
        </div>
        {/* Add more cards as needed */}
      </div>
      <LogoutButton onLogout={onLogout}/>
    </div>
  );
}

export default Dashboard;
