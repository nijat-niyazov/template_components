import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

const Radio = ({ label, name, options }) => {
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name}>
        {({ field }) => {
          // console.log(field);
          {
            return options.map((option, i) => {
              return (
                <React.Fragment key={i}>
                  <input
                    type="radio"
                    {...field}
                    id={option.value}
                    value={option.value}
                    checked={field.value === option.value}
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

export default Radio;
