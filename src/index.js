import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppObserver from './ObserverApi/AppObserver';
import Index from './Css/Index';
import AppRouter from './React-Router@6.4/AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AppRouter />
  </>
);
