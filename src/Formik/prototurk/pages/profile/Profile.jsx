import { Field, Form, Formik } from 'formik';
import React from 'react';
import Button from '@mui/material/Button';
import { Input, File } from '../../prototurk/components/exporter';
import { initialValues } from '../../utils/initialValues';
initialValues;

const Profile = () => {
  return (
    <div>
      <h3>Login</h3>

      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {props => {
          console.log(props);
          return (
            <Form>
              <Input type="text" label="Name" name="name" id="Name" /> <br />
              <Input
                type="text"
                label="Last Name"
                name="lastName"
                id="Last Name"
              />
              <br />
              <Field type="textarea" name="about" /> <br />
              <label
                htmlFor=""
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <Field
                  type="checkbox"
                  style={{
                    width: '20px',
                    textAlign: 'center',
                    margin: 'auto 10px',
                  }}
                  name="accept"
                />
                I read rules and accept it
              </label>
              <br />
              <Field
                component="select"
                name="gender"
                value={props.values.gender}
                style={{ color: 'black' }}
              >
                <option value="man" style={{ color: 'black' }}>
                  Man
                </option>
                <option value="woman" style={{ color: 'black' }}>
                  Woman
                </option>
              </Field>
              <br />
              <Field
                component="select"
                name="skills"
                value={props.values.skills}
                style={{ color: 'black' }}
                multiple={true}
              >
                <option value="js" style={{ color: 'black' }}>
                  Js
                </option>
                <option value="react" style={{ color: 'black' }}>
                  React
                </option>
                <option value="html" style={{ color: 'black' }}>
                  Html
                </option>
                <option value="css" style={{ color: 'black' }}>
                  Css
                </option>
              </Field>
              <br />
              <File label="Avatar" name="avatar" />
              <Button
                disabled={!props.values.accept}
                type="submit"
                variant="contained"
              >
                Send
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Profile;
