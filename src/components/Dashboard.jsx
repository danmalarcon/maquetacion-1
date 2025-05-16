import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = ({ onLogout }) => {
  const [currentView, setCurrentView] = useState('home');
  const [showInscripcion, setShowInscripcion] = useState(false);
  const [cursos] = useState([
    { nombre: 'Programación Básica' },
    { nombre: 'Diseño Web' },
    { nombre: 'Base de Datos' },
    { nombre: 'Inteligencia Artificial' }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario (mostrar alerta, limpiar campos, etc.)
    alert('¡Inscripción enviada!');
    setShowInscripcion(false);
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="sidebar-title">Menú</h2>
        <div className="nav-buttons">
          <button 
            className={`nav-button ${currentView === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentView('home')}
          >
            Home
          </button>
          <button 
            className={`nav-button ${currentView === 'servicios' ? 'active' : ''}`}
            onClick={() => setCurrentView('servicios')}
          >
            Servicios
          </button>
          <button 
            className={`nav-button ${currentView === 'contacto' ? 'active' : ''}`}
            onClick={() => setCurrentView('contacto')}
          >
            Contacto
          </button>
          <button 
            className={`nav-button ${currentView === 'acerca' ? 'active' : ''}`}
            onClick={() => setCurrentView('acerca')}
          >
            Acerca de
          </button>
          <button className="nav-button logout-button" onClick={onLogout}>
            Cerrar Sesión
          </button>
        </div>
      </aside>

      <main className="content">
        {/* Sección Home */}
        {currentView === 'home' && (
          <div className="content-section home-section">
            <h1 className="welcome-title">¡Bienvenido, Estudiante!</h1>
            <div className="welcome-card">
              <p>Estamos contentos de tenerte de vuelta. Aquí encontrarás todo lo necesario para tu aprendizaje.</p>
            </div>
            
            <div className="news-container">
              <h2 className="section-title">Últimas Noticias</h2>
              <div className="news-card">
                <h3>Nuevo curso de programación</h3>
                <p>Inicia el 20 de agosto - ¡Inscríbete ahora!</p>
                <span className="news-date">Publicado: 10/08/2023</span>
              </div>
              <div className="news-card">
                <h3>Charla de ciberseguridad</h3>
                <p>Este viernes en el auditorio principal</p>
                <span className="news-date">Publicado: 05/08/2023</span>
              </div>
              <div className="news-card">
                <h3>Evaluaciones finales</h3>
                <p>Recordatorio: Próxima semana</p>
                <span className="news-date">Publicado: 01/08/2023</span>
              </div>
            </div>

            <div className="quick-access">
              <h2 className="section-title">Acceso Rápido</h2>
              <div className="access-buttons">
                <button className="access-button">Material de Estudio</button>
                <button className="access-button">Horario de Clases</button>
                <button className="access-button">Calificaciones</button>
              </div>
            </div>
          </div>
        )}

        {/* Sección Servicios */}
        {currentView === 'servicios' && (
          <div className="content-section services-section">
            <h1 className="section-main-title">Servicios Académicos</h1>
            
            <div className="services-grid">
              <div className="service-card">
                <h2>Cursos Disponibles</h2>
                <ul className="styled-list">
                  <li>Programación Básica</li>
                  <li>Diseño Web</li>
                  <li>Base de Datos</li>
                  <li>Inteligencia Artificial</li>
                </ul>
              </div>

              <div className="service-card">
                <h2>Horarios</h2>
                <div className="schedule">
                  <p><strong>Lunes a Viernes:</strong> 8:00 - 12:00 / 14:00 - 18:00</p>
                  <p><strong>Sábados:</strong> 9:00 - 13:00</p>
                </div>
              </div>

              <div className="service-card">
                <h2>Modalidades</h2>
                <div className="modality-tags">
                  <span className="tag virtual">Virtual</span>
                  <span className="tag presencial">Presencial</span>
                  <span className="tag hibrido">Híbrido</span>
                </div>
              </div>

              <div className="service-card">
                <h2>Inscripciones</h2>
                <button className="enroll-button" onClick={() => setShowInscripcion(!showInscripcion)}>
                  Inscribirse a Cursos
                </button>
                <p className="info-text">Período de inscripción abierto hasta el 15/08</p>
                 {showInscripcion && (
                  <form className="inscription-form" onSubmit={handleSubmit} style={{ marginTop: '15px' }}>
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Nombre completo"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Correo electrónico"
                      required
                    />
                    <select name="curso" required defaultValue="">
                      <option value="" disabled>Selecciona un curso</option>
                      {cursos.map((c, i) => (
                        <option key={i} value={c.nombre}>{c.nombre}</option>
                      ))}
                    </select>
                    <button type="submit" className="submit-button" style={{ marginTop: '8px' }}>
                      Enviar
                    </button>
                  </form>
                 )}
              </div>
            </div>
          </div>
        )}

        {/* Sección Contacto */}
        {currentView === 'contacto' && (
          <div className="content-section contact-section">
            <h1 className="section-main-title">Contacto</h1>
            
            <div className="contact-container">
              <div className="contact-form">
                <h2>Formulario de Contacto</h2>
                <form>
                  <div className="form-group">
                    <label>Nombre:</label>
                    <input type="text" placeholder="Tu nombre" />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input type="email" placeholder="tu@email.com" />
                  </div>
                  <div className="form-group">
                    <label>Asunto:</label>
                    <select>
                      <option>Duda administrativa</option>
                      <option>Consulta docente</option>
                      <option>Información de cursos</option>
                      <option>Otro</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Mensaje:</label>
                    <textarea rows="4" placeholder="Escribe tu mensaje..."></textarea>
                  </div>
                  <button type="submit" className="submit-button">Enviar Mensaje</button>
                </form>
              </div>

              <div className="contact-info">
                <h2>Información de Contacto</h2>
                <div className="info-card">
                  <h3>Sede Principal</h3>
                  <p><strong>Dirección:</strong> Calle Principal 123, Ciudad</p>
                  <p><strong>Teléfono:</strong> (123) 456-7890</p>
                  <p><strong>Email:</strong> info@instituto.edu</p>
                  <p><strong>Horario:</strong> L-V 8:00-18:00</p>
                </div>

                <div className="map-placeholder">
                  <h3>Ubicación</h3>
                  <div className="map">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1417482106926!2d-75.56479827519658!3d6.245043743743333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442859d833cfa3%3A0xa3fca5c91547777f!2sCesde%20-%20Centro%20de%20Estudios%20Especializados!5e0!3m2!1ses!2sco!4v1747192302152!5m2!1ses!2sco" 
                      width="100%" 
                      height="300" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Mapa de la Sede Principal"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sección Acerca de */}
        {currentView === 'acerca' && (
          <div className="content-section about-section">
            <h1 className="section-main-title">Acerca de Nuestra Institución</h1>
            
            <div className="about-content">
              <div className="history-section">
                <h2>Nuestra Historia</h2>
                <p>Fundada en 1990, nuestra institución ha formado a más de 10,000 profesionales en el área tecnológica, siendo pioneros en educación innovadora.</p>
              </div>

              <div className="mission-vision">
                <div className="mission">
                  <h2>Misión</h2>
                  <p>Formar profesionales competentes mediante educación de calidad, con enfoque en las necesidades del mercado laboral actual.</p>
                </div>
                <div className="vision">
                  <h2>Visión</h2>
                  <p>Ser la institución líder en educación tecnológica para 2025, reconocida por nuestra excelencia académica.</p>
                </div>
              </div>

              <div className="gallery-section">
                <h2>Nuestras Instalaciones</h2>
                <div className="image-gallery">
                  <div className="gallery-item"></div>
                  <div className="gallery-item"></div>
                  <div className="gallery-item"></div>
                </div>
              </div>

              <div className="team-section">
                <h2>Conoce Nuestro Equipo</h2>
                <div className="team-grid">
                  <div className="team-member">
                    <div className="member-photo"></div>
                    <h3>Prof. Juan Pérez</h3>
                    <p>Coordinador Académico</p>
                  </div>
                  <div className="team-member">
                    <div className="member-photo"></div>
                    <h3>Prof. María Gómez</h3>
                    <p>Directora de Programas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;