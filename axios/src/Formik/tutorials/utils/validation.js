import * as Yup from 'yup';

export const testSchema = Yup.object({
  firstName: Yup.string()
    .min(3, 'At least 3 characters must typed in')
    .max(10, 'Only can 10 characters typed in')
    .required('Required'),

  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),

  email: Yup.string().email('Invalid email address').required('Required'),

  acceptedTerms: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions.')
    .required('Required'),

  jobType: Yup.string()
    .oneOf(['designer', 'development', 'product', 'other'], 'Invalid Job Type')
    .required('Required'),
});
