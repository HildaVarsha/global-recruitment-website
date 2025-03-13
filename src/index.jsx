// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Grab the root element from your HTML
const container = document.getElementById('root');

// Create a root and render your app using the new API
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
