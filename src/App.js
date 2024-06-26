import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; // Ruta correcta al archivo App.js

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
