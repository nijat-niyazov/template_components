import { useFormik } from 'formik';
import * as Yup from 'yup';

// #1 initialvalues
const initialValues = {
  name: '', // input with name 'name'
  email: '', // input with name 'email'
  channel: '', // input with name 'channel'
};
// they have to be properties of input names

// #2 submit
const onSubmit = values => {
  // it recieves last values of submitted form

  console.log('exectued onsubmit');

  console.log('Submitted values', values);
};

// #3 validation(dogrulama) it takes all values object as its argument and it must return object
const validate = values => {
  let errors = {};

  console.log('exectued validation');

  if (!values.name) {
    errors.name = 'name is required';
  }

  if (!values.email) {
    errors.email = 'email is required';
  } else if (!/^[A-Z0-9. _%+-]+aLA-Z0-9--]+\.LA-z]{2,4}$/i.test(values.email)) {
    errors.email = 'invalid email format';
  }

  if (!values.channel) {
    errors.channel = 'channel is required';
  }

  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  // message of required field ⤴
  email: Yup.string()
    .email('Invalid format of email') // if its passed then give required
    .required('Email is required'),
  channel: Yup.string().required('Channel is required'),
});

const OldForm = () => {
  const formik = useFormik({
    initialValues,

    onSubmit,

    // validate, // if there is no validation Schema

    validationSchema,
  });

  console.log('erros', formik, formik.errors, formik.touched);

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange} // change handler
            onBlur={formik.handleBlur} // checking losing focus
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && (
            // errors.name has value && formik.touched.name attr is true
            <div className="error"> {formik.errors.name}</div>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} // checking losing focus
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="error"> {formik.errors.email}</div>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} // checking losing focus
            value={formik.values.channel}
          />
          {formik.errors.channel && formik.touched.channel && (
            <div className="error"> {formik.errors.channel}</div>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OldForm;
