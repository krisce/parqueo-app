import { useState } from 'react';
import { useAuth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const ChangePasswordPage = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const { updatePassword, signOut } = useAuth();
  const navigate = useNavigate();

  const handleChangePassword = async (e) => {
    e.preventDefault();

    try {
      // Actualizar la contraseña del usuario
      await updatePassword(oldPassword, newPassword);

      // Cerrar sesión para que el usuario inicie sesión nuevamente
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error al cambiar la contraseña:', error);
    }
  };

  return (
    <div>
      <h1>Cambio de Contraseña</h1>
      <form onSubmit={handleChangePassword}>
        <div>
          <label htmlFor="oldPassword">Contraseña Actual:</label>
          <input
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="newPassword">Nueva Contraseña:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cambiar Contraseña</button>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
