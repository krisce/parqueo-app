import { useState } from 'react';
import { useFirestore, useAuth } from '../utils/firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

const VehicleForm = () => {
  const [marca, setMarca] = useState('');
  const [color, setColor] = useState('');
  const [placa, setPlaca] = useState('');
  const [tipo, setTipo] = useState('');
  const [ley7600, setLey7600] = useState(false);
  const { currentUser } = useAuth();
  const { db } = useFirestore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Verificar si el usuario ya tiene el máximo de vehículos registrados
      const userVehiclesQuery = query(
        collection(db, 'vehicles'),
        where('dueño', '==', currentUser.uid)
      );
      const userVehiclesSnapshot = await getDocs(userVehiclesQuery);
      if (userVehiclesSnapshot.size >= 2) {
        alert('Has alcanzado el límite de vehículos registrados.');
        return;
      }

      // Guardar el vehículo en Firestore
      await addDoc(collection(db, 'vehicles'), {
        marca,
        color,
        placa,
        tipo,
        ley7600,
        dueño: currentUser.uid,
      });

      // Limpiar los campos del formulario
      setMarca('');
      setColor('');
      setPlaca('');
      setTipo('');
      setLey7600(false);
    } catch (error) {
      console.error('Error al registrar el vehículo:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campos del formulario de registro de vehículos */}
      <button type="submit">Registrar Vehículo</button>
    </form>
  );
};

export default VehicleForm;
