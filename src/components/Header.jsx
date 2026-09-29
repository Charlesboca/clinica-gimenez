import React from 'react';
import logo from '../imagenes/logo-institucional.jpg';
import '../estilos/Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-brand">

        <img 
        src={logo} alt="Logo de la clínica" 
        className="header-logo"
        />

        <div className="header-titles">
          <h1>Clínica Gimenez</h1>
{/*           <p>Excelencia en salud y cuidado profesional</p>
 */}        </div>
      </div>
    </header>
  );
}