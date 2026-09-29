import React from 'react';
import '../estilos/Convenio.css';

export default function Convenio() {
  const convenios = [
    { name: 'OSDE', description: 'Planes 210, 310, 410 y 510' },
    { name: 'Swiss Medical', description: 'Cartilla completa de medicina prepaga' },
    { name: 'PAMI', description: 'Atención especializada para jubilados y pensionados' },
    { name: 'InSSSeP', description: 'Obra social provincial de Chaco' },
    { name: 'OSPAT', description: 'Cobertura para afiliados titulares y grupo familiar' }
  ];

  return (
    <div className="convenio-section">
      <h2>Convenios y Obras Sociales</h2>
      <p className="convenio-subtitle">
        Trabajamos con las principales prepagas y obras sociales para garantizar una cobertura de calidad a todos nuestros pacientes.
      </p>

      <div className="convenio-grid">
        {convenios.map((item, index) => (
          <div key={index} className="convenio-card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}

        {/* Tarjeta especial para consulta de otras obras sociales */}
        <div className="convenio-card convenio-consulta">
          <h3>¿No encontrás tu obra social?</h3>
          <p>Consultá con nosotros si trabajamos con tu cobertura o prepaga particular.</p>
        </div>
      </div>
    </div>
  );
}