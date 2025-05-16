import React from 'react';

function RegisterForm({ onSwitch, onRegisterSuccess }) {
  const handleRegister = (e) => {
    e.preventDefault();
    // Aquí puedes validar datos y registrar usuario
    onRegisterSuccess(); // Autentica y muestra dashboard
  };

  const handleSwitch = (e) => {
    e.preventDefault();
    onSwitch(); // Cambia a login
  };

  return (
    <div className="form-container">
      <h3>Registro</h3>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Usuario" required />
        <input type="password" placeholder="Contraseña" required />
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo" required />
        <button type="submit">Registrarse</button>
      </form>
      <p>
        <a href="#" onClick={handleSwitch}>
          ¿Ya tienes una cuenta?
        </a>
      </p>
    </div>
  );
}

export default RegisterForm;
