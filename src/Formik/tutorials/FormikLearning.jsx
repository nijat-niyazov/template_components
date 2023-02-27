import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from '@mui/material';
import { initialVals } from './utils/initalVal';
import { testSchema } from './utils/validation';

export default function FormikLearning() {
  return (
    <Formik
      initialValues={initialVals}
      validationSchema={testSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {/* {props => {
        console.log(props);

        return (
          <form onSubmit={props.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              {...props.getFieldProps('firstName')}
            />
            {props.touched.firstName && props.errors.firstName ? (
              <div>{props.errors.firstName}</div>
            ) : null}
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              {...props.getFieldProps('lastName')}
            />
            {props.touched.lastName && props.errors.lastName ? (
              <div>{props.errors.lastName}</div>
            ) : null}
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" {...props.getFieldProps('email')} />
            {props.touched.email && props.errors.email ? (
              <div>{props.errors.email}</div>
            ) : null}
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        );
      }} */}

      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" /> <br />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" type="text" />
        <ErrorMessage name="lastName" /> <br />
        <br />
        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Form>
    </Formik>
  );
}
