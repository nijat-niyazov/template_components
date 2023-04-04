import React from 'react';
import { useField } from 'formik';

const MySelect = props => {
  const [field, meta] = useField(props);

  // console.log(field);
  // console.log(meta);
  // console.log(props);

  return (
    <div>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <select style={{ color: 'black' }} {...field} {...props} />

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MySelect;
