import React, { useState, useEffect } from 'react';
import { firestore, auth } from './firebase';

const VehicleManagement = () => {
  const [vehicles, setVehicles] = useState([]);
  const [newVehicle, setNewVehicle] = useState('');

  useEffect(() => {
    const fetchVehicles = async () => {
      const currentUser = auth.currentUser;
      const vehiclesSnapshot = await firestore.collection('vehicles')
        .where('userId', '==', currentUser.uid)
        .get();
      setVehicles(vehiclesSnapshot.docs.map((doc) => doc.data()));
    };
    fetchVehicles();
  }, []);

  const handleAddVehicle = async (e) => {
    e.preventDefault();
    try {
      const currentUser = auth.currentUser;
      const vehiclesSnapshot = await firestore.collection('vehicles')
        .where('userId', '==', currentUser.uid)
        .get();

      if (vehiclesSnapshot.size >= 3) {
        alert('Has alcanzado el límite de vehículos por usuario.');
        return;
      }

      await firestore.collection('vehicles').add({
        userId: currentUser.uid,
        name: newVehicle,
      });
      setNewVehicle('');
      // Actualizar la lista de vehículos
      const updatedVehiclesSnapshot = await firestore.collection('vehicles')
        .where('userId', '==', currentUser.uid)
        .get();
      setVehicles(updatedVehiclesSnapshot.docs.map((doc) => doc.data()));
    } catch (error) {
      console.error(error);
      // Maneja el error de registro de vehículo
    }
  };

  return (
    <div>
      <h2>Gestión de vehículos</h2>
      <ul>
        {vehicles.map((vehicle, index) => (
          <li key={index}>{vehicle.name}</li>
        ))}
      </ul>
      <form onSubmit={handleAddVehicle}>
        <label>
          Nuevo vehículo:
          <input
            type="text"
            value={newVehicle}
            onChange={(e) => setNewVehicle(e.target.value)}
          />
        </label>
        <button type="submit">Agregar vehículo</button>
      </form>
    </div>
  );
};

export default VehicleManagement;
