import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderChay } from '../redux/slices/chaySlice';

const Chay = () => {
  const { chay } = useSelector(store => store.chay);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cay</h2>
      <p>Number of drinks: {chay}</p>
      <button onClick={() => dispatch(orderChay())}>Order drink</button>
    </div>
  );
};

export default Chay;
