import React from 'react';
import { FiCheck } from 'react-icons/all';

const Checkbox = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  console.log(field, meta, helpers);

  return (
    <label>
      <span>{label}</span>
      <input {...props} {...field} />
    </label>
  );
};

export default Checkbox;
