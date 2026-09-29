import React from 'react';
import logo from '../imagenes/logo-institucional.jpg';
import '../estilos/Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={logo} alt="Logo de la clínica" className="footer-logo" />
          <h3>Clínica Gimenez</h3>
        </div>

        <div className="footer-section">
          <h4>Seguinos en nuestras redes</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/medicasgimenezlaspalmas" target="_blank" rel="noopener noreferrer">
              📘 Facebook
            </a>
            <a href="https://www.instagram.com/medicasgimenezlaspalmas/" target="_blank" rel="noopener noreferrer">
              📷 Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Clínica Gimenez. Todos los derechos reservados.</p>
        <p className="developer-credit">
          Desarrollado por <a href="https://mi-portfolio-carlos-avalos.vercel.app/" target="_blank" rel="noopener noreferrer">Carlos Avalos</a>
        </p>
      </div>
    </footer>
  );
}