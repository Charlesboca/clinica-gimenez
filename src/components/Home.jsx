import React from 'react';

import frente from '../imagenes/frente-clinica.jpg';


import '../estilos/Home.css';   

export default function Home({ onNavigateBook }) {
  return (
    <>
      <div className="home-container">
        {/* Sección principal de bienvenida */}
        <section className="hero-section">
          <h1>Bienvenidos</h1>
          <p>Excelencia en salud y cuidado profesional.</p>
        </section>

        {/* Sección de Quiénes Somos integrada en el Home */}
        <section className="quienes-somos-section">
          <h2>Quiénes Somos</h2>
          <p>
            En <strong>Clínica Gimenez</strong> nos dedicamos desde hace años a brindar atención médica integral y de alta calidad. 
            Nuestro compromiso es cuidar de tu salud y la de tu familia las 24 horas, contando con un equipo de profesionales 
            altamente capacitados, tecnología de vanguardia y un cálido trato humano que nos avala como referentes en la comunidad.
          </p>
            <div className="quienes-somos-image">
                <img 
                src={frente} alt="Frente de la clínica" 
                className="quienes-somos-img"
                 />
                 
            </div>
        </section>

        {/* Sección de Ubicación / Mapa */}
        <section className="map-section">
          <h2>Dónde Nos Encontramos</h2>
          <p>Te invitamos a visitarnos en nuestras instalaciones.</p>

             {/* Botón de Cómo llegar */}
          <div className="map-button-container">
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Clínica+Giménez%2C+Cosme+Giménez%2C+H3523+Las+Palmas%2C+Chaco" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-como-llegar"
            >
              🚗 ¿Cómo llegar?
            </a>
          </div>
          
          <p></p>

          <div className="map-responsive">
            <iframe
              title="Ubicación Clínica Gimenez"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.4117842744495!2d-58.67724629999999!3d-27.048747100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9444df0048551ec1%3A0xe076896b31ff3528!2zQ2zDrW5pY2EgR2ltw6luZXo!5e0!3m2!1ses!2sar!4v1790614326749!5m2!1ses!2sar"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

  

        </section>
      </div>
    </>
  );
}