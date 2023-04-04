import React from 'react';
import { useField } from 'formik';

export default function MyCheckbox({ children, ...props }) {
  const [field, meta] = useField(props);

  console.log(field);
  console.log(meta);
  console.log(props);

  return (
    <div>
      <label
        className="checkbox-input"
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '400px',
          justifyContent: 'space-between',
        }}
      >
        <input style={{ width: '20px' }} {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}
