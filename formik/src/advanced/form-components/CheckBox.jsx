import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

const Checkbox = ({ label, name, options }) => {
  return (
    <div className="form-control">
      <label name={name}>{label}</label>
      <Field name={name}>
        {({ field }) => {
          console.log(field);
          {
            return options.map((option, i) => {
              return (
                <React.Fragment key={i}>
                  <input
                    type="checkbox"
                    {...field}
                    id={option.value}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </React.Fragment>
              );
            });
          }
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Checkbox;
