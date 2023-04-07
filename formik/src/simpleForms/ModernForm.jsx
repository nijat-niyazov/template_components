import {
  ErrorMessage,
  FastField,
  Field,
  FieldArray,
  Form,
  Formik,
} from 'formik';
import { useState } from 'react';
import TextError from './components/TextError';
import { validateMessage, validationChecked, validationSchema } from './schema';
import { initialValues, savedValues } from './values';

// #2 submit
const onSubmit = (values, onSubmitProps) => {
  // it recieves last values of submitted form

  console.log('Submitted values', values);
  console.log('on sub props', onSubmitProps);
  onSubmitProps.setSubmitting(false); // while submission  is going make isSubmitting false
  onSubmitProps.resetForm(); //
};

const ModernForm = () => {
  const [formValues, setFormValues] = useState(null);
  
  const [showModal, setShowModal] = useState(false);
  const handlePaste = event => {
    event.preventDefault();
    setShowModal(true);
    setTimeout(() => setShowModal(false), 2000); // hide the modal after 2 seconds
  };

  return (
    <Formik
      initialValues={formValues || initialValues}
      // if formValues is present which we change on saveLoad button

      enableReinitialize // it allows change initialvalues after initailization happened for form
      validationSchema={validationSchema}
      //

      onSubmit={onSubmit}
      // validateOnChange={false} // on change values validation won't be rendered which means show errors till submit

      validateOnBlur={false} // on blur validation won't be seen or rendered
      // we do them because we don't want see validation issues when we typed something and just stopped we only want them see on submit
      // validateOnMount // boolean is true. on page load all validation will be rendered agains each of particular field which means formik.error object will be fulled with comprehensive error and error object won't be rendered which also affects isValid to be false, it's not good practice
    >
      {formik => {
        console.log(formik, formik.values); // formik props which also within in address as form
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>

              <Field type="text" id="name" name="name" placeholder="name" />
              {/* replacing input  */}

              {/* #1 way of creating new textError and make it component ⤵ */}
              {/* <ErrorMessage name="name" component={TextError} /> */}
              <ErrorMessage name="name" component={TextError} />

              {/* error message coming from corresponding name validate */}
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" placeholder="email" />
              {/* replacing input and name has to be equal of initial value  */}

              {/* #2 way is creating func which accept validate error value ⤵  */}
              <ErrorMessage name="email" component="div">
                {errorMessage => {
                  console.log(errorMessage);
                  return <div className="error">{errorMessage}</div>;
                }}
              </ErrorMessage>
              {/*  without component its just message and not any tag */}
            </div>

            {/* <div className="form-control">
              <label htmlFor="confirmEmail">Confirm Email:</label>
              <Field
                type="email"
                id="confirmEmail"
                name="confirmEmail"
                placeholder="Confirm Email"
                onChange={formik.handleChange}
                value={formik.values.confirmEmail}
                onPaste={handlePaste}
              />
              {showModal && (
                <div
                  style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'white',
                    padding: '1rem',
                    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                    zIndex: 9999,
                  }}
                >
                  It can't copy pasted!
                </div>
              )}
              <ErrorMessage name="confirmEmail" />
            </div> */}

            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field
                type="text"
                id="channel"
                name="channel"
                placeholder="channel"
              />
              {/* replacing input  */}

              {/* #3 way is wrap by another component  ⤵  */}
              <TextError>
                <ErrorMessage name="channel" />
              </TextError>
            </div>

            <div className="form-control">
              <label htmlFor="message">Message</label>
              <Field
                as="textarea" // because default it's input and with as we make it teaxtarea
                id="message"
                name="message"
                placeholder="message"
                validate={validateMessage} // for indiividual validation
              />
              <ErrorMessage name="message" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="address">Address</label>
              {/* <Field name="address" placeholder="address"> */}
              <FastField name="address" placeholder="address">
                {props => {
                  // console.log('field rendered');
                  // console.log(props); // field, form, meta
                  const { field, form, meta } = props;

                  // console.log(meta);
                  return (
                    <div>
                      <input type="text" id="address" {...field} />
                      {meta.touched && meta.error && <p>{meta.error}</p>}
                    </div>
                  );
                }}
              </FastField>
              {/* </Field> */}
            </div>

            <div className="form-control">
              <label htmlFor="facebook">Login With Facebook</label>
              <Field type="text" name="social.facebook" id="facebook" />
              {/* because it's nested object ⤴ */}
            </div>

            <div className="form-control">
              <label htmlFor="linkedn">Login With Linkedn</label>
              <Field type="text" name="social.linkedn" id="linkedn" />
              {/* because it's nested object ⤴ */}
            </div>

            <div className="form-control">
              <label htmlFor="mainPhone">Main Phone</label>
              <Field type="text" name="phoneNums[0]" id="mainPhone" />
              {/* because it's nested array ⤴ */}
            </div>

            <div className="form-control">
              <label htmlFor="secPhone">Second Phone</label>
              <Field name="phoneNums[1]" id="secPhone">
                {/* because it's nested array ⤴ */}
                {props => {
                  // console.log(props);
                  const { field, meta, form } = props;
                  return <input type="text" {...field} />;
                }}
              </Field>
            </div>

            <div className="form-control">
              <label htmlFor="telNom">List of Tel noms</label>
              {/* it used for fieldarrays where we can array of inputs e.g when user want add more info on optinoal */}
              <FieldArray name="telNom">
                {fieldArrayProps => {
                  // console.log('fieldArrayProps - ', fieldArrayProps);
                  const { push, remove, form } = fieldArrayProps;
                  const { telNom } = form.values;
                  // console.log('form.errors', form.errors);
                  return (
                    <div className="inputs">
                      {telNom.map((_, i) => {
                        return (
                          <div key={i}>
                            <Field
                              type="text"
                              name={`telNom[${i}]`}
                              id="telNom"
                            />
                            {/* acces values of index with telnom⤴ */}

                            <button
                              type="button"
                              onClick={() => remove(i)}
                              // remove indexed element from array ↖
                              disabled={i === 0 && telNom.length < 2}
                            >
                              -
                            </button>

                            <button
                              type="button"
                              onClick={() => push('')}
                              // push with empty value element to array ↖
                            >
                              +
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  );
                }}
              </FieldArray>
            </div>

            <div className="form-control">
              <label htmlFor="checkbox">I accept all terms</label>
              <Field
                type="checkbox"
                name="checkbox"
                id="checkbox"
                validate={validationChecked}
              />
              {/* {props => {
                  const { field, form, meta } = props;
                  console.log(meta, field);
                  return (
                    <div>
                      <input type="checkbox" {...field} />
                      {meta.touched && meta.error && <p>{meta.error}</p>}
                    </div>
                  );
                }} */}
              {/* </Field> */}
              <ErrorMessage name="checkbox" component={TextError} />
            </div>

            {/* Manually checkking-triggering validation */}
            <div className="manual-validation">
              <button
                type="button"
                onClick={() => {
                  formik.validateField('checkbox');
                  formik.setFieldTouched('checkbox');
                }}
              >
                check validate
              </button>
              {/* <button
              type="button"
              onClick={() => formik.setFieldTouched('checkbox')}
            >
              visit checked
            </button> */}

              <button
                type="button"
                onClick={() => formik.validateField('message')}
                // it returns all errors of field with name ↖
              >
                Validate message
              </button>
              <button
                type="button"
                onClick={() => formik.validateForm()}
                //  it returns all errors of form ⤴
              >
                Validate all
              </button>

              <button
                type="button"
                onClick={() => formik.setFieldTouched('message')}
                // it returns all errors of field with name ↖
              >
                Visit message
              </button>
              <button
                type="button"
                onClick={() =>
                  formik.setTouched({
                    name: true,
                    email: true,
                    channel: true,
                    // message: true,
                    checkbox: true,
                  })
                }
                //  differently than validateForm which takes all field it does't do this. so we pass fields as argument that those fields are touched ⤴
              >
                Visit all inputs
              </button>
            </div>

            {/* formik.dirty=false means not any value has changed yet  */}
            {/* <button
              disabled={!(formik.isValid && formik.dirty)}
              // #1  isValid when error objcet is not empty and isValid is true when all errors are gone or all required sections is writed
              //  isValid on first render doesn't give what we want beacsue when nothing has changed yet isValid is true because empty object is true

              type="submit"
            >
              Submit
            </button> */}
            <button type="reset">Reset</button>
            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting} // while submitting process is going or formik validation is true then disable button
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => {
                setFormValues(savedValues);
              }}
            >
              Load Data
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ModernForm;
