import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormikControl from './Control';

const FormikContainer = () => {
  const selectOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' },
  ];

  const radioOptions = [
    { key: 'Option 1', value: 'rOption1' },
    { key: 'Option 2', value: 'rOption2' },
    { key: 'Option 3', value: 'rOption3' },
  ];

  const checkboxOptions = [
    { key: 'Option 1', value: 'cOption1' },
    { key: 'Option 2', value: 'cOption2' },
    { key: 'Option 3', value: 'cOption3' },
  ];

  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOption: [],
  };
  
  const validationSchema = Yup.object({
    email: Yup.string().required('you have get your email in'),
    description: Yup.string().required('you have to have description'),
    selectOption: Yup.string().required('Option must be chosen'),
    radioOption: Yup.string().required('Radio must be chosen'),
    checkboxOption: Yup.array().required('At leat one of them or multiples must be checked'),
  });

  const onSubmit = values => console.log(values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {props => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="textarea"
              label="Description"
              name="description"
            />
            <FormikControl
              control="select"
              label="Select an option"
              name="selectOption"
              options={selectOptions}
            />
            <FormikControl
              control="radio"
              label="Select one of them"
              name="radioOption"
              options={radioOptions}
            />
            <FormikControl
              control="checkbox"
              label="Chechk one or multiple of them"
              name="checkboxOption"
              options={checkboxOptions}
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
