import React from 'react';

const LoginForm = ({ onSwitch, onLoginSuccess }) => {
    const handleLogin = (e) => {
        e.preventDefault();
        onLoginSuccess();
    };

    const handleSwitch = (e) => {
        e.preventDefault();
        onSwitch();
    };

    return (
        <div className="form-container">
            <h3>Iniciar sesión</h3>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Usuario"/>
                <input type="password" placeholder="Contraseña"/>
                <button type="submit">Iniciar Sesión</button>
            </form>
            <p>
                <a href="#" onClick={handleSwitch}>¿No tienes una cuenta?</a>
            </p>
        </div>
    );
};

export default LoginForm;