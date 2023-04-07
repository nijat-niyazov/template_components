import * as Yup from 'yup';

// ============ Main ===============

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  // message of required field ⤴

  email: Yup.string()
    .email('Invalid format of email') // if its passed then give required
    .required('Email is required'),

  channel: Yup.string().required('Channel is required'),

  // message : Yup.string().required('Message is required'),
  // checkbox: Yup.bool().oneOf(
  //   [true],
  //   'You need to accept the terms and conditions'
  // ),
  address: Yup.string().required('You have to declare adress'),
});

// ============ Message ===============
export const validateMessage = value => {
  let error;
  if (!value) {
    error = 'Message is required !!!';
  }
  return error;
};

// ============ Chekced ===============
export const validationChecked = value => {
  let error;
  if (!value) {
    error = 'You have to accept all terms!!';
  }
  return error;
};
