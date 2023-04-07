import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

const TextArea = ({ name, label, ...rest }) => {
  console.log(label);

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field 
      as="textarea" // default it's input
      name={name} id={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default TextArea;
