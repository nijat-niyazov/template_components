import { useField } from 'formik';
import React from 'react';

export default function File({ label, ...props }) {
  const [field, meta, helpers] = useField(props);

  // console.log(field, meta, helpers);

  const changeHandle = e => {
    helpers.setValue(e.target.files[0]);
  };

  return (
    <label>
      <div>{label}</div>
      <input type="file" onChange={changeHandle} {...props} />
    </label>
  );
}
