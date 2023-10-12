// src/components/LoginPage.js
import React from 'react';
import LoginForm from './LoginForm';

const LoginPage = () => {
  const handleLogin = (credentials) => {
    console.log('Logging in with credentials:', credentials);
    // Here you would normally authenticate the user...
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;

