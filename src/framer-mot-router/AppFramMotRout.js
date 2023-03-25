import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import Footer from './components/Footer';
import Layout from './components/Layout';
import './style.css';

const AppFramMotRout = () => {
  return (
    <Router>
      <Layout />
      <AnimatedRoutes />

      <Footer />
    </Router>
  );
};

export default AppFramMotRout;
