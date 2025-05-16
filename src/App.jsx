import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';
import './index.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsLogin(true);
  };

  return (
    <div className="app">
      {isAuthenticated ? (
        <Dashboard onLogout={handleLogout} />
      ) : isLogin ? (
        <LoginForm
          onSwitch={() => setIsLogin(false)}
          onLoginSuccess={() => setIsAuthenticated(true)}
        />
      ) : (
        <RegisterForm
          onSwitch={() => setIsLogin(true)}
          onRegisterSuccess={() => setIsAuthenticated(true)}  // Aquí autenticamos y vamos directo al Dashboard
        />
      )}
    </div>
  );
}

export default App;
