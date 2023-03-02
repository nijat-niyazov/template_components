import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppRouter from './React-Router@6.4/AppRouter';
import AppNav from './Responsive-Navbar/AppNav';
import AppSass from './Learning-SASS/AppSass';
import AppAxios from './Axios/AppAxios';
import AppFormik from './Formik/AppFormik';
import AppFunctions from './Functions/AppFunctions';
import AppMap from './Leaflet/AppMap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AppMap />
  </>
);
{
  /* <React.StrictMode> */
}
