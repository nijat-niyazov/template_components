import React from 'react';
import ReactDOM from 'react-dom/client';
import AppDrop from './DropDownMenu/AppDrop';
import AppFramMotRout from './framer-mot-router/AppFramMotRout';
import './index.css';
import AppScroll from './ScrollOnAnimation/AppSoa';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AppFramMotRout />
  </>
);
