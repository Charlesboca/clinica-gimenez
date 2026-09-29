import React from 'react';
import '../estilos/Servicio.css';

export default function Servicios() {
  const listaServicios = [
    { title: 'Consultorios Externos', description: 'Atención en múltiples especialidades médicas con profesionales de trayectoria.' },
    { title: 'Guardia y Urgencias', description: 'Servicio de atención médica presencial disponible las 24 horas, todo el año.' },
    { title: 'Laboratorio de Análisis', description: 'Extracciones y análisis clínicos completos con resultados rápidos y confiables.' },
    { title: 'Diagnóstico por Imágenes', description: 'Estudios de alta complejidad equipados con tecnología de última generación.' }
  ];

  return (
    <div className="servicios-section">
      <h2>Servicios Médicos</h2>
      <p className="servicios-subtitle">
        Conocé todas las prestaciones y especialidades que tenemos a tu disposición para cuidar de tu salud.
      </p>

      <div className="servicios-grid">
        {listaServicios.map((servicio, index) => (
          <div key={index} className="servicio-card">
            <h3>{servicio.title}</h3>
            <p>{servicio.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}