import React, { useId } from 'react';

const HookID = () => {
  const id = useId();
  /**
   * ! USEID for using same component in different places with uniqe ID
   */

  return (
    <>
      <label htmlFor={id}>Email</label>
      <input type="text" id={id} />
    </>
  );
};

export default HookID;
