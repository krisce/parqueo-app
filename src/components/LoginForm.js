import { useState } from 'react';
import { useAuth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, getCurrentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signIn(email, password);

      // Obtener información del usuario
      const user = await getCurrentUser();

      // Verificar si es el primer inicio de sesión
      if (user.metadata.creationTime === user.metadata.lastSignInTime) {
        // Redirigir al usuario a la página de cambio de contraseña
        navigate('/change-password');
      } else {
        // Redirigir al usuario a la página principal
        navigate('/');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {/* Campos de correo electrónico y contraseña */}
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default LoginForm;
