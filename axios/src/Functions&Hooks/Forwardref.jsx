import React, { forwardRef, useRef } from 'react';

const OuterInput = forwardRef((props, ref) => {
  return (
    <input
      style={{ color: 'black', padding: '5px 10px' }}
      type="text"
      {...props}
      ref={ref}
    />
  );
});

const Forwardref = () => {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <OuterInput ref={inputRef} />
      <button style={{ color: 'black' }} onClick={focusInput}>
        Focus on OuterInput
      </button>
    </>
  );
};

export default Forwardref;
