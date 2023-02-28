import { Button } from '@mui/material';
import { Field, Form, Formik, useFormik } from 'formik';
import React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const FormikLogin = () => {
  const [login, setLogin] = useState(
    JSON.parse(localStorage.getItem('user')) ?? ''
  );
  const location = useLocation();
  const navigate = useNavigate();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      console.log(values);
      setLogin(values);
      localStorage.setItem('user', JSON.stringify(values));
      navigate(location?.state?.return_url || '/', {
        replace: true,
      });
    },
  });

  const logOut = () => {
    localStorage.removeItem('user');
    setLogin('');
  };

  const initialValues = {
    username: '',
    password: '',
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h4>User Reg/Log</h4>

      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          console.log(values);
          setLogin(values);
          localStorage.setItem('user', JSON.stringify(values));
          navigate(location?.state?.return_url || '/', {
            replace: true,
          });
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form>
            <label htmlFor="">Name</label>
            <Field name="username" /> <br />
            <label htmlFor="">Password</label>
            <Field name="password" type="password" />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikLogin;
