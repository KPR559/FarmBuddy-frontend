
import React, { useState } from 'react';
import LoginPage from './components/loginpage';
import Signup from './components/signuppage';
import LogoutButton from './components/logout';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [LoginFail, setLoginFail] = useState(false);

  return (
    <div>
      <h1>Welcome to FarmBuddy</h1>
      {!isLoggedIn ? (
        <>
          {!isSignedUp ? (
            <>
            <LoginPage onLogin={() => setIsLoggedIn(true)} onLoginFail={() => setLoginFail(true)} />
            <p> Don't have an account {' '} <button onClick={() => setIsSignedUp(true)}>Sign Up</button> </p>
            </>
          ) : (
            <>
            <Signup />
            <p> Already have an account? {' '} <button onClick={() => setIsSignedUp(false)}>Signin</button> </p>
            </>)}
        </>
      ) : (
        <div>
          <LogoutButton onLogout={() => setIsLoggedIn(false)} />
        </div>
      )}
    </div>
  );
}

export default App;
