import React, { useState } from 'react';
import { auth } from './firebase';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const user = auth.currentUser;
      await user.reauthenticateWithCredential(auth.EmailAuthProvider.credential(user.email, currentPassword));
      await user.updatePassword(newPassword);
      alert('Contraseña actualizada con éxito.');
      // Redirige al usuario a la página principal o realiza otras acciones
    } catch (error) {
      console.error(error);
      // Maneja el error de cambio de contraseña
    }
  };

  return (
    <div>
      <h2>Cambiar contraseña</h2>
      <form onSubmit={handleChangePassword}>
        <label>
          Contraseña actual:
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </label>
        <label>
          Nueva contraseña:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
        <button type="submit">Cambiar contraseña</button>
      </form>
    </div>
  );
};

export default ChangePassword;

