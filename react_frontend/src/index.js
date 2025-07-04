import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Central Firebase init (side-effects module: only needs to be imported)
import './firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
