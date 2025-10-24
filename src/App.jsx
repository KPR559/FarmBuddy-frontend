
import React, { useState } from 'react';
import LoginPage from './components/loginpage';
import Signup from './components/signuppage';
import Dashboard from './components/dashboard';
import { getAuth } from 'firebase/auth';
import ForgotPassword from './components/forgotpassword';
import './css/App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const user = getAuth().currentUser;

  return (
    <div id ="app-container">
      <video autoPlay loop muted id="background-video">
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>
      <h1>Welcome to FarmBuddy</h1>
      {!isLoggedIn ? (
        <>
          <div id = "auth-container">
          {!isSignedUp ? (
            <>
            {!showForgot ? (
              <>
              <LoginPage onLogin={() => setIsLoggedIn(true)} />
              <button onClick={() => setShowForgot(true)}> Forgot Password?</button>
              <p> Don't have an account {' '} <button onClick={() => setIsSignedUp(true)}>Sign Up</button> </p>
              </>
            ):(
              <>
              {showForgot && <ForgotPassword onClose={() => setShowForgot(false)} />}
              </>
            )}
            </>
          ) : (
            <>
            <Signup />
            <p> Already have an account? {' '} <button onClick={() => setIsSignedUp(false)}>Sign In</button> </p>
            </>)}
          </div>
        </>
      ): (
        <div>
           <Dashboard user={user} onLogout={() => setIsLoggedIn(false)} />
        </div>
      )}
    </div>
  );
}

export default App;
