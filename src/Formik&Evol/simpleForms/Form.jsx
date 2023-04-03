import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

// #1 initialvalues
const initialValues = {
  name: '', // input with name 'name'
  email: '', // input with name 'email'
  channel: '', // input with name 'channel'
  message: '',
  address: '',
};
// they have to be properties of input names

// #2 submit
const onSubmit = values => {
  // it recieves last values of submitted form

  console.log('Submitted values', values);
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  // message of required field ⤴

  email: Yup.string()
    .email('Invalid format of email') // if its passed then give required
    .required('Email is required'),

  channel: Yup.string().required('Channel is required'),
});

const ModernForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" placeholder="name" />
          {/* replacing input  */}

          <ErrorMessage name="name" />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" placeholder="email" />
          {/* replacing input  */}

          <ErrorMessage name="email" />
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field
            type="text"
            id="channel"
            name="channel"
            placeholder="channel"
          />
          {/* replacing input  */}

          <ErrorMessage name="channel" />
        </div>

        <div className="form-control">
          <label htmlFor="message">Message</label>
          <Field
            as="textarea" // because default it's input and with as we make it teaxtarea
            id="message"
            name="message"
            placeholder="message"
          />
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address" placeholder="address">
            {props => {
              console.log(props); // field, form, meta
              const { field, form, meta } = props;
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error && <p>{meta.error}</p>}
                </div>
              );
            }}
          </Field>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ModernForm;
