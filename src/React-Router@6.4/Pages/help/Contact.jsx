import React from 'react';
import { Form, redirect, useActionData } from 'react-router-dom';

const Contact = () => {
  const testData = useActionData();

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
        {testData && testData.error && <p> {testData.error} </p>}
      </Form>
    </div>
  );
};

export default Contact;

export const contactAction = async ({ request }) => {
  console.log(request);

  const data = await request.formData();

  const submission = {
    email: data.get('email'), // value will be equal of data get name attribute
    message: data.get('message'),
  };

  console.log(submission);

  // send post request

  if (submission.message.length < 10) {
    return {
      error: 'Message is too short, please provide at least 10 chars',
    };
  }

  return redirect('/');
};
