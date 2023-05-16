import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
// import 'react-credit-cards-2/dist/es/styles-compiled.css';

const initialState = {
  name: '',
  number: '',
  expiry: '',
  cvc: '',
  focus: '',
};

const PaymentForm = () => {
  const [state, setState] = useState(initialState);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped); // toggle the isFlipped state on click
  };

  const handleInputFocus = evt => {
    setState(prev => ({ ...prev, focus: evt.target.name }));
  };

  console.log(Object.keys(state));

  const handleChange = e => {
    console.log(e.target);
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form>
        {Object.keys(state)
          .filter(state => state !== 'focus')
          .map((key, i) => (
            <input
              key={i}
              name={key}
              id={key}
              type={key === 'name' ? 'text' : 'number'}
              max={key !== 'name' && 16}
              value={state[key]}
              onChange={handleChange}
              onFocus={handleInputFocus}
            />
          ))}
      </form>
    </>
  );
};

export default PaymentForm;
