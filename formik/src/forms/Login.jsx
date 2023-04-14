import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../style.css';

const initialValues = {
  email: '',
  password: '',
};

const onSubmit = values => {
  console.log(values);
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid Mail Form').required('U must have email'),
  password: Yup.string()
    .min(3, 'Too Short')
    .max(12, 'You reached maximum')
    .required('Invalid Mail Form'),
});

const Login = () => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {formik => {
        console.log(formik);
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>

              <Field type="text" id="name" name="name" placeholder="name" />
              <ErrorMessage name="name" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Login;
