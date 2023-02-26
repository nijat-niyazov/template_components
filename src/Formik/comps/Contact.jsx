import { Field, Form, Formik } from 'formik';
import React from 'react';

const Contact = () => {
  const initialValues = {
    name: 'Nicat',
    accept: true,
    about: 'Front End Engineer',
    gender: 'man',

    skills: ['js', 'react'],
  };

  console.log('okay');

  return (
    <div>
      <h3>Contact</h3>
      <h5>nOT WORKING</h5>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {props => (
          <Form>
            <Field type="email" name="email" placeholder="Email" />
            <Field name="name" /> <br />
            <Field type="textarea" name="about" /> <br />
            <Field type="checkbox" name="accept" /> <br />
            <button type="submit">Send</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
