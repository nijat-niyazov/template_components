import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppRouter from './React-Router@6.4/AppRouter';
import AppNav from './Responsive-Navbar/AppNav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppRouter /> */}
    <AppNav />
    {/* <AppSass /> */}
  </React.StrictMode>
);
