import React from 'react';
import { Button } from '@mui/material';
import { initialValues } from '../../utils/initialValues';
import { Field, Form, Formik } from 'formik';
import { File, Input } from '../../components/exporter';

const Contact = () => {
  return (
    <div>
      <h3>Contact</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}
      >
        {props => {
          // console.log(props);

          return (
            <Form>
              {/* <Field name="name" /> <br /> */}
              <Input name="name" /> <br />
              <Field type="textarea" name="about" /> <br />
              <label
                htmlFor=""
                style={{
                  display: 'flex',
                  width: '300px',
                  alignItems: 'center',
                }}
              >
                <Field
                  style={{ width: '20px' }}
                  type="checkbox"
                  name="accept"
                />
                <span> I accept all terms</span>
              </label>
              <br />
              <Field style={{ color: 'black' }} as="select" name="gender">
                <option value="woman">Woman</option>
                <option value="man">Man</option>
              </Field>
              <Field
                style={{ color: 'black' }}
                as="select"
                name="skills"
                multiple={true}
              >
                <option value="html">Html</option>
                <option value="js">Js</option>
                <option value="css">Css</option>
                <option value="react">React</option>
              </Field>
              <Field name="avatar" type="file" />
              <File label="Choose your avatar" name="avatar" />
              <Button
                disabled={!props.values.accept}
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Contact;
