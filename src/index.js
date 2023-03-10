import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppNavbar from './Responsive-Navbar/AppNavbar';
import AppRouter from './React-Router@6.4/AppRouter';
import AppAxios from './Axios/AppAxios';
import AppFormik from './Formik/AppFormik';
import AppFunctions from './Functions&Hooks/AppFunctions';
import AppMap from './Leaflet/AppMap';
import AppMemo from './Functions&Hooks/UseMemo-UseCallback/AppMemo';
import AppToggle from './ToggleMode/AppToggle';
// import AppImperative from './Functions&Hooks/ImperativeHandle/AppImperative';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AppToggle />
  </>
);
