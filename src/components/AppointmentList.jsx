import React from 'react';

export default function AppointmentList({ appointments, onCancelAppointment }) {
  return (
    <div>
      <h2 style={{ marginBottom: '20px', color: '#1a365d' }}>Turnos Registrados</h2>
      {appointments.length === 0 ? (
        <div className="empty-state">No hay turnos registrados actualmente.</div>
      ) : (
        <div className="appointments-list">
          {appointments.map((appt) => (
            <div key={appt.id} className="appointment-item">
              <div className="appointment-info">
                <h4>{appt.patientName} <span style={{ fontSize: '0.85rem', color: '#718096' }}>(DNI: {appt.dni})</span></h4>
                <p><strong>{appt.specialty}</strong> con {appt.doctor} — 📅 {appt.date} a las ⏰ {appt.time}</p>
              </div>
              <button onClick={() => onCancelAppointment(appt.id)} className="btn-danger">Cancelar</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}