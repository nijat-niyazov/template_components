import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from '@mui/material';
import { initialVals } from './utils/initalVal';
import { testSchema } from './utils/validation';
import { MytextInput, MyCheckbox, MySelect } from './commons/exporter';

<Button type="submit" variant="contained">
  Submit
</Button>;

const SignupForm = () => {
  return (
    <>
      <h1>Subscribe!</h1>
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
        <Form>
          <MytextInput
            label="First Name"
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Jane"
          />
          <MytextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          <MytextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />

          <MySelect label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
            <option value="logistics">Logistics</option>
          </MySelect>

          <MyCheckbox name="acceptedTerms" type="checkbox">
            I accept the terms and conditions
          </MyCheckbox>

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Form>
      </Formik>
    </>
  );
};

export default SignupForm;
