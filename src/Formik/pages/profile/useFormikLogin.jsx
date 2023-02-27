import { useFormik } from 'formik';
import React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginUseFormik = () => {
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

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h4>User Reg/Log</h4>

      {!login ? (
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            alignItems: 'center',
            border: '2px solid black',
          }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="username">
            User Name
            <input
              id="username"
              name="username"
              type="text"
              value={values.username}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Welcome {login.username}</p>
          <button onClick={logOut}>log out</button>
        </div>
      )}
    </div>
  );
};

export default LoginUseFormik;
