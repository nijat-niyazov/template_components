import React from 'react';
import { Provider } from 'react-redux';
import Chay from './components/Chay';
import Customer from './components/Customer';
import Marojna from './components/Marojna';
import Tort from './components/Tort';
import { store } from './redux/store';
import './style.css';

const AppCake = () => {
  return (
    <Provider store={store}>
      <div style={{ padding: '20px', background: 'red', color: 'white' }}>
        <h2>1 tort sifarish edende avtamatik 2 chay da sifarish olur</h2>
        <h2>n qeder tort stoklananda avtamatik n*2 chay da stoklanir</h2>
        <br />
        <h2>1 tort sifarish edende avtamatik 1 marojna stoklanir</h2>
        <h2>n qeder tort stoklananda avtamatik n qeder de marojna stoklanir</h2>
        <br />
        <h2>
          yanliz topdan yeni n qeder marojna stoklananda avtamatik n qeder de
          tort stoklanir
        </h2>
        <br />
      </div>
      <Tort />
      <Marojna />
      <Chay />
      <Customer />
    </Provider>
  );
};

export default AppCake;
