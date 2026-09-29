import React, { useState } from 'react';
import { useAppointments } from './hooks/useAppointments.js';

import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import BookAppointment from './components/BookAppointment.jsx';
import AppointmentList from './components/AppointmentList.jsx';
import Footer from './components/Footer.jsx'; // <--- Importamos el Footer
import Convenio from './components/Convenio.jsx'; // <--- Importamos el componente Convenio
import Servicios from './components/Servicio.jsx'; // <--- Importamos el componente Servicios  
import BotonFlotante from './components/BotonFlotante.jsx'; // (Ajusta la ruta según tu estructura)
import './estilos/App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const { appointments, handleAddAppointment, handleCancelAppointment } = useAppointments();

  return (
    <div className="app-container">
      <Header />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} count={appointments.length} />

      <main className="content-section">
        {activeTab === 'home' && <Home onNavigateBook={() => setActiveTab('book')} />}
        {activeTab === 'book' && <BookAppointment onAddAppointment={handleAddAppointment} />}
        {activeTab === 'list' && <AppointmentList appointments={appointments} onCancelAppointment={handleCancelAppointment} />}
        {activeTab === 'convenio' && <Convenio />} {/* <--- Mostramos el componente Convenio cuando se selecciona la pestaña "Convenios" */}
        {activeTab === 'servicios' && <Servicios />} {/* <--- Mostramos el componente Servicios cuando se selecciona la pestaña "Servicios" */}
      </main>
      <Footer /> {/* <--- Agregamos el Footer al final de la aplicación */}

      {/* Botón flotante para pedir comunicación con la clínica, que cambia la pestaña activa a 'book' al hacer clic */}
{/*       <BotonFlotante onClick={() => setActiveTab('book')} /> {/* Botón flotante para pedir turno */}
   
    </div>
  );
}