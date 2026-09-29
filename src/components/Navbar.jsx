import React from 'react';

export default function Navbar({ activeTab, setActiveTab, count }) {
  return (

    <>  
    <nav className="navbar">
      <div className="nav-links">

        <button className={activeTab === 'home' ? 'active' : ''} onClick={() => setActiveTab('home')}>Inicio</button>
         {/* Nuevo botón para Convenios */}
        <button className={activeTab === 'convenio' ? 'active' : ''} onClick={() => setActiveTab('convenio')}>Convenios</button>
        <button className={activeTab === 'servicios' ? 'active' : ''} onClick={() => setActiveTab('servicios')}>Servicios</button>
      {/*  
        <button className={activeTab === 'book' ? 'active' : ''} onClick={() => setActiveTab('book')}>Pedir Turno</button>
        <button className={activeTab === 'list' ? 'active' : ''} onClick={() => setActiveTab('list')}>Consultar Turnos ({count})</button>
        */}
      </div>
    </nav>
    
    </>
  );
}