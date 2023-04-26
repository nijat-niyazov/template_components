import React, { useId } from 'react';

const HookID = () => {
  const id = useId();
  const id2 = useId();
  /**
   * ! USEID for using same component in different places with uniqe ID
   */

  return (
    <>
      <label htmlFor={id + 'email'}>Email</label>
      <input type="email" id={id + 'email'} />
      <label htmlFor={id + 'name'}>Name</label>
      <input type="text" id={id + 'name'} />
      <br /> <br />
      <label htmlFor={id + 'email'}>Email</label>
      <input type="email" id={id + 'email'} />
      <label htmlFor={id + 'name'}>Name</label>
      <input type="text" id={id + 'name'} />
      {/* <label htmlFor={id + 'email'}>Email</label>
      <input type="email" id={id + 'email'} />
      <label htmlFor={id + 'name'}>Name</label>
      <input type="text" id={id + 'name'} /> */}
    </>
  );
};

export default HookID;
