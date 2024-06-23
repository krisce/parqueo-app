import React, { useState } from 'react';

const RegisterUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [identification, setIdentification] = useState('');
  const [carnetNumber, setCarnetNumber] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Lógica para registrar el usuario y generar contraseña predeterminada
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      <br />
      <label>Correo electrónico:</label>
      <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      <br />
      <label>Fecha de nacimiento:</label>
      <input type="date" value={birthDate} onChange={(event) => setBirthDate(event.target.value)} />
      <br />
      <label>Identificación:</label>
      <input type="text" value={identification} onChange={(event) => setIdentification(event.target.value)} />
      <br />
      <label>Número de carné:</label>
      <input type="text" value={carnetNumber} onChange={(event) => setCarnetNumber(event.target.value)} />
      <br />
      <label>Rol:</label>
      <select value={role} onChange={(event) => setRole(event.target.value)}>
        <option value="estudiante">Estudiante</option>
        <option value="personal_administrativo">Personal administrativo</option>
        <option value="oficial_seguridad">Oficial de seguridad</option>
      </select>
      <br />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default RegisterUser;
