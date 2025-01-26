import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Optional, if you have styles in index.css
import App from './App'; // Import the App component from App.js
import reportWebVitals from './reportWebVitals';

// Render the App component inside the div with id 'root' in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This links React with the root element in index.html
);

// For performance measurement (optional)
reportWebVitals();
