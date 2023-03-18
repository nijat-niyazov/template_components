import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './React-Router@6.4/AppRouter';
import './index.css';
import AppSoa from './SOA/AppSoa';
// import AppImperative from './Functions&Hooks/ImperativeHandle/AppImperative';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AppSoa />
  </>
);
