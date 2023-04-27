import React from 'react';
import ReactDOM from 'react-dom/client';
import Debounce from './debounce/Debounce.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Debounce />
  </React.StrictMode>
);
