import React, { useState } from 'react';
import { loginUser, isEmailVerified } from '../firebaseAuth';
import ForgotPassword from './ForgotPassword';

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showForgot, setShowForgot] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      if (!isEmailVerified()) {
        setError('Please verify your email before logging in.');
        return;
      }
      setError('');
      onLogin();
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <h2>Sign in</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Sign in</button>
      </form>
      <button onClick={() => setShowForgot(true)} style={{marginTop: "10px"}}>
        Forgot Password?
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {showForgot && <ForgotPassword onClose={() => setShowForgot(false)} />}
    </div>
  );
}

export default LoginPage;
