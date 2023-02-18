import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppRouter from './React-Router@6.4/AppRouter';
import AppSass from './Learning-SASS/AppSass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppRouter />
    {/* <AppSass /> */}
  </React.StrictMode>
);
