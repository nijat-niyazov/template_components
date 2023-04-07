import { ErrorMessage, Field } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TextError from './TextError';

const DateView = ({ label, name, ...rest }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{name}</label>
      <Field name={name}>
        {({ field, form }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DatePicker
              id={name}c
              {...field}
              {...rest}
              selected={value}
              onChange={value => setFieldValue(name, value)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default DateView;
