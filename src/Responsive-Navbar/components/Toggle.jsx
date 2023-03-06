import React, { useState } from 'react';

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={toggle ? 'toggle bg' : 'toggle'}>
      <div
        onClick={() => setToggle(!toggle)}
        className={toggle ? 'circle carousel' : 'circle'}
      ></div>
    </div>
  );
};

export default Toggle;
