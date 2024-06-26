/* eslint-disable no-undef */
import React, { useState } from 'react';
import { auth, firestore } from './firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Verificar si el usuario ha verificado su correo electrónico
      if (!user.emailVerified) {
        await user.sendEmailVerification();
        alert('Por favor, verifica tu correo electrónico antes de iniciar sesión.');
        return;
      }

      // Verificar si el usuario necesita cambiar su contraseña
      if (user.providerData[0].providerId === 'password' && user.providerData[0].email === email && user.providerData[0].displayName === null) {
        // Redirigir al usuario a la página de cambio de contraseña
        // Este código asume que tienes un componente ChangePassword.js
        props.history.push('/change-password');
        return;
      }

      // Obtener el número de vehículos del usuario
      const vehiclesSnapshot = await firestore.collection('vehicles')
        .where('userId', '==', user.uid)
        .get();

      if (vehiclesSnapshot.size >= 3) {
        alert('Has alcanzado el límite de vehículos por usuario.');
        return;
      }

      // Redirigir al usuario a la página principal o realizar otras acciones
      // después del inicio de sesión
    } catch (error) {
      console.error(error);
      // Maneja el error de inicio de sesión
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;

