import React, { useState } from 'react';

export default function BookAppointment({ onAddAppointment }) {
  const [patientName, setPatientName] = useState('');
  const [dni, setDni] = useState('');
  const [specialty, setSpecialty] = useState('Cardiología');
  const [doctor, setDoctor] = useState('Dr. Roberto Gómez');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!patientName || !dni || !date || !time) return;

    onAddAppointment({
      patientName,
      dni,
      specialty,
      doctor,
      date,
      time,
      createdAt: new Date().toISOString()
    });

    setSuccessMsg(true);
    setPatientName('');
    setDni('');
    setDate('');
    setTime('');
    setTimeout(() => setSuccessMsg(false), 4000);
  };

  return (
    <div className="form-card">
      <h2>Reserva de Turno Médico</h2>
      {successMsg && <div className="success-message">¡Turno registrado con éxito!</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre y Apellido</label>
          <input type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} placeholder="Ej: Juan Pérez" required />
        </div>
        <div className="form-group">
          <label>DNI</label>
          <input type="text" value={dni} onChange={(e) => setDni(e.target.value)} placeholder="Ej: 35123456" required />
        </div>
        <div className="form-group">
          <label>Especialidad</label>
          <select value={specialty} onChange={(e) => {
            setSpecialty(e.target.value);
            if (e.target.value === 'Cardiología') setDoctor('Dr. Roberto Gómez');
            if (e.target.value === 'Pediatría') setDoctor('Dra. Ana Martínez');
            if (e.target.value === 'Traumatología') setDoctor('Dr. Carlos Benítez');
            if (e.target.value === 'Odontología') setDoctor('Dra. Laura Sosa');
          }}>
            <option value="Cardiología">Cardiología</option>
            <option value="Pediatría">Pediatría</option>
            <option value="Traumatología">Traumatología</option>
            <option value="Odontología">Odontología</option>
          </select>
        </div>
        <div className="form-group">
          <label>Médico Asignado</label>
          <input type="text" value={doctor} disabled style={{ backgroundColor: '#edf2f7' }} />
        </div>
        <div className="form-group">
          <label>Fecha</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Hora</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
        <button type="submit" className="btn-primary">Confirmar Turno</button>
      </form>
    </div>
  );
}