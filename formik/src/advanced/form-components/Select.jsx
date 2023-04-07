import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

const Select = ({ label, name, options, ...rest }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...rest} as="select">
        {options.map((option, index) => (
          <option value={option.value} name={option} key={index}>
            {option.key}
          </option>
        ))}
      </Field>

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
