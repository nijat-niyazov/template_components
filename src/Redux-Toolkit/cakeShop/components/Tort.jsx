import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderTort, reStockTort } from '../redux/slices/tortSlice';

const Tort = () => {
  const { tort } = useSelector(store => store.tort);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of tort - {tort} </h2>
      <button onClick={() => dispatch(orderTort())}>Order 1 tort - </button>
      <button onClick={() => dispatch(reStockTort(5))}>Add 5 Tort +</button>
    </div>
  );
};

export default Tort;
