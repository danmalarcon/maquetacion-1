import React from 'react';

const LoginForm = ({ onSwitch, onLoginSuccess }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí puedes validar usuario y contraseña antes de autenticar
    onLoginSuccess(); // Autentica y muestra dashboard
  };

  const handleSwitch = (e) => {
    e.preventDefault();
    onSwitch(); // Cambia a registro
  };

  return (
    <div className="form-container">
      <h3>Iniciar sesión</h3>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Usuario" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>
        <a href="#" onClick={handleSwitch}>
          ¿No tienes una cuenta?
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
