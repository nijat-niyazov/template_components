import React from 'react';
import ReactDOM from 'react-dom/client';
import { preload } from 'swr';
import App from './App.jsx';
import { endPointApi as cacheKey, fetchTodos } from './api/mainApi.js';
import './index.css';

preload(cacheKey, fetchTodos);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
