import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Ensure the correct path to App.js
import './index.css'; // Import your custom CSS file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
