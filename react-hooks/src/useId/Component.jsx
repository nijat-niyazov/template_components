import React from 'react';
import HookID from './useId';

const Component = () => {
  return (
    <>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" />
      <p> </p>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" />
      <br /> <br />
      <hr />
      <br />
      <br />
      <HookID />
      <p> </p>
      <HookID />
    </>
  );
};

export default Component;
