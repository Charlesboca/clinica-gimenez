import { useState, useEffect } from 'react';
import { collection, addDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

export function useAppointments() {
  const [appointments, setAppointments] = useState([
    { id: '1', patientName: 'Carlos Avalos', dni: '30123456', specialty: 'Cardiología', doctor: 'Dr. Roberto Gómez', date: '2026-04-10', time: '10:00' }
  ]);

  useEffect(() => {
    if (!db) return;
    const unsubscribe = onSnapshot(collection(db, "appointments"), (snapshot) => {
      const docs = [];
      snapshot.forEach((docSnap) => {
        docs.push({ id: docSnap.id, ...docSnap.data() });
      });
      if (docs.length > 0) setAppointments(docs);
    });
    return () => unsubscribe();
  }, []);

  const handleAddAppointment = async (newAppt) => {
    if (db) {
      try {
        await addDoc(collection(db, "appointments"), newAppt);
      } catch (err) {
        console.error("Error al guardar en Firestore:", err);
      }
    } else {
      setAppointments([{ id: Date.now().toString(), ...newAppt }, ...appointments]);
    }
  };

  const handleCancelAppointment = async (id) => {
    if (db) {
      try {
        await deleteDoc(doc(db, "appointments", id));
      } catch (err) {
        console.error("Error al eliminar en Firestore:", err);
      }
    } else {
      setAppointments(appointments.filter(a => a.id !== id));
    }
  };

  return {
    appointments,
    handleAddAppointment,
    handleCancelAppointment
  };
}