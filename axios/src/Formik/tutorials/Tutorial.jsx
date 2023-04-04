import React from 'react';
import { useFormik } from 'formik';
import { Button } from '@mui/material';
import { testSchema } from './utils/validation';

// const validate = values => {
//   const errors = {};

//   if (!values.firstName) {
//     errors.firstName = 'Required';
//   } else if (values.firstName.length > 15) {
//     errors.firstName = 'Must be 15 characters or less';
//   }

//   if (!values.lastName) {
//     errors.lastName = 'Required';
//   } else if (values.lastName.length > 20) {
//     errors.lastName = 'Must be 20 characters or less';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

//   return errors;
// };

// // It show all errors if even user is in name field and it's bad user experience and for handle it we use formik's oncChange and onBlur

const Tutorial = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    // validate,
    validationSchema: testSchema,

    onSubmit: values => {
      alert(JSON.stringify(values, null, 4));
    },
  });

  console.log(formik);
  // console.log(formik.errors);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div
          style={{
            marginBottom: '20px',
            border: '1px solid white',
            padding: '10px',
          }}
        >
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.firstName}
            {...formik.getFieldProps('firstName')}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
        </div>

        <div
          style={{
            marginBottom: '20px',
            border: '1px solid white',
            padding: '10px',
          }}
        >
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.lastName}
            {...formik.getFieldProps('lastName')}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}
        </div>

        <div
          style={{
            marginBottom: '20px',
            border: '1px solid white',
            padding: '10px',
          }}
        >
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.email}
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Tutorial;
