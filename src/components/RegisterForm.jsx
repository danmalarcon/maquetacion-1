import React from 'react';

function RegisterForm({ onSwitch, onRegisterSuccess }) {
  const handleRegister = (e) => {
    e.preventDefault();
    onRegisterSuccess();
  };

  return (
    <div className="form-container">
      <h3>Registro</h3>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Usuario"/>
        <input type="password" placeholder="Contraseña"/>
        <input type="text" placeholder="Nombre"/>
        <input type="email" placeholder="Correo" />
        <button type="submit">Registrarse</button>
      </form>
      <p>
        <a href="#" onClick={(e) => {
          e.preventDefault();
          onSwitch();
        }}>¿Ya tienes una cuenta?</a>
      </p>
    </div>
  );
}

export default RegisterForm;