import { Field, FieldArray, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import AddSvg from './components/AddButton';
import Error from './components/Error';
import Optional from './components/Optional';
import EyeSvg from './components/ShowEye';
import Spinner from './components/Spinner';
import TrashSvg from './components/TrashSvg';
import UpSvg from './components/UpSvg';

let counter = 0;

const initialValues = {
  name: '',
  email: '',
  password: '',
  message: '',
  socialLinks: {
    github: '',
    linkedn: '',
  },
  phoneNums: ['', ''],
  knowledge: [''],
  parents: [{ name: '', relevance: '', age: '' }],
  gender: '',
  birthDate: '',
  age: '',
};

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  email: Yup.string()
    .email('Invalid email')
    .required("You didn't get your email"),
  password: Yup.string()
    .required('Please enter your password') // on blur

    .matches(
      /^.*(?=.{8,}) ((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1}) (?=.*\d) ((?=.*[a-z]){1}) ((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character'
    ),
  // #1 minimum characters{length} , #2 special case character{length}, #3 number{length}, #4  uppercase character{length}

  // .oneOf([Yup.ref('password'), null])
  // .min(8, 'Must be at least 8 Characters')
  message: Yup.string().min(10, 'At leastmust be 10 characters').required(),
  // phoneNums: Yup.number().matches(/^[0-9]+/ , 'Is not in correct format')
  // parents: Yup.array().of(
  //   Yup.object.shape({
  //     name: Yup.string().min('4', 'Too short').required('Name is required'),
  //     age: Yup.string().min(1, "C'mon 😁"),
  //   })
  // ),
});

const submitHandle = (values, actions) => {
  console.log(values, actions);
};

let savedData = JSON.parse(sessionStorage.getItem('values')) ?? null;

const FormComponent = () => {
  const [show, setShow] = useState(false);

  function formatPhoneNumber(input) {
    // Remove all non-digit characters
    let phoneNumber = input.value.replace(/\D/g, '');

    // Format the phone number as "(+994 __) ___ __ __"
    phoneNumber = phoneNumber.replace(
      /(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/,
      '(+994 $1) $2$3 $4 $5'
    );

    // Update the input value
    input.value = phoneNumber;
  }

  //   useEffect(() => {
  //      // Submit the form imperatively as an effect as soon as form values.token are 6 digits long
  //      if (values.token.length === 6) {
  //        submitForm();
  //      }
  //    }, [values, submitForm]);
  //    return null;
  //  };

  return (
    <div className="bg-[#d9d4da] p-1">
      <section className="bg-[#f6f4f3] border-1  grid gap-5 p-4 rounded-lg my-10 mx-20">
        <header className="grid gap-5">
          <span className="text-xl text-[#e4aa05] font-bold border-b-[1px] border-gray-200 block pb-5">
            Settings
          </span>

          <div className="text-[13px] font-normal tracking-wide text-white text-center flex flex-col items-center">
            <img
              src="https://caspa.az/img/no-photo.jpg"
              alt=""
              className="rounded-full w-20 h-20 mb-5"
            />
            <button className="bg-[#e4aa05] p-2 w-full rounded-md">
              Open Photo
            </button>
          </div>
          <p className="text-black">
            Render: <span> {counter++} </span>
          </p>
        </header>

        <Formik
          initialValues={savedData || initialValues}
          validationSchema={SignupSchema}
          validateOnBlur={false}
          /*
        ? if we haven't changed anything on any field yet it won't validate
        ! true
        */
          // validateOnChange={true}
          /*
       ? if we we want to see validation while true or false while we changing something on field
       ! true
       */
          onSubmit={submitHandle}
        >
          {formik => {
            sessionStorage.setItem('values', JSON.stringify(formik.values));

            return (
              <Form className="">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3   content-center items-start">
                  {/* ================== Name ================== */}

                  <div className="text-[13px] font-normal tracking-wide grid">
                    <label className=" text-gray-400 mb-2" htmlFor="name">
                      Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="placeholder:text-gray-200 p-2 border-1 text-xs border-gray-400  w-full bg-white text-black rounded-md"
                    />
                    <Error
                      message={formik.errors.name}
                      show={formik.touched.name}
                    />
                  </div>

                  {/* ================== Email ================== */}
                  <div className="text-[13px] font-normal tracking-wide  grid">
                    <label className="text-gray-400 mb-2" htmlFor="email">
                      E-mail:
                    </label>
                    <Field name="email">
                      {props => {
                        const { meta, field, form } = props;
                        return (
                          <>
                            <input
                              {...props.field}
                              type="email"
                              placeholder="Your email"
                              className="placeholder:text-gray-200 p-2 w-full bg-white text-black rounded-md text-xs"
                            />
                            <Error message={meta.error} show={meta.touched} />
                          </>
                        );
                      }}
                    </Field>
                  </div>

                  {/* {formik.touched.email && formik.errors.email && (
                <Error message={formik.errors.email} />
                    )} */}

                  {/* ================== Password ================== */}

                  <div className="relative text-[13px] font-normal tracking-wide  grid">
                    <label className="text-gray-400 mb-2" htmlFor="password">
                      Password
                    </label>
                    <Field
                      type={!show ? 'password' : 'text'}
                      name="password"
                      placeholder="Password"
                      className="placeholder:text-gray-200 p-2 w-full bg-white text-black rounded-md   focus:outline-pink-400 "
                    />
                    <button
                      type="button"
                      onClick={() => setShow(p => !p)}
                      className="absolute right-2 top-9"
                    >
                      <EyeSvg show={show} />
                    </button>
                    <Error
                      message={formik.errors.password}
                      show={formik.touched.password}
                    />
                  </div>

                  {/* ================== Message ================== */}

                  <div className="text-[13px] font-normal tracking-wide grid">
                    <label className="text-gray-400 mb-2" htmlFor="message">
                      Your Message
                    </label>
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Any thoughts?"
                      // rows="6"
                      className="p-2 w-full placeholder:text-gray-400 bg-white text-black rounded-md resize-none"
                    />
                    {formik.touched.message && formik.errors.message && (
                      <Error message={formik.errors.message} />
                    )}
                  </div>

                  {/* ================== SocailLinks ================== */}

                  <div className="text-[13px] font-normal tracking-wide  grid">
                    <label className="text-gray-400 mb-2" htmlFor="linkedn">
                      Linkedn
                    </label>
                    <Field
                      type="text"
                      name="socialLinks.linkedn"
                      placeholder="Linkedn profile"
                      className="placeholder:text-gray-200 p-2  bg-white text-black rounded-md"
                    />
                  </div>
                  <div className="text-[13px] font-normal tracking-wide  grid">
                    <label className="text-gray-400 mb-2" htmlFor="github">
                      Github
                    </label>
                    <Field
                      type="text"
                      name="socialLinks.github"
                      placeholder="Github profile"
                      className="placeholder:text-gray-200 p-2 bg-white text-black rounded-md"
                    />
                  </div>

                  {/* ================== Phone Numbers Array ================== */}

                  <div className="text-[13px] font-normal tracking-wide  grid">
                    <div className="grid gap-1">
                      <label className="text-gray-400" htmlFor="main-num">
                        Phone number
                      </label>
                      <Field
                        type="text"
                        id="main-num"
                        name="phoneNums[0]"
                        placeholder="(+994 __) ___ __ __"
                        onChange={(e)=>{
                          formatPhoneNumber(e.target.value)
                        }}
                        className="placeholder:text-gray-200 p-2  bg-white text-black rounded-md"
                      />
                    </div>

                    <div className="grid gap-1">
                      <label className="text-gray-400" htmlFor="second-phone">
                        Second Phone {!formik.errors.phoneNums && <Optional />}
                      </label>
                      <Field
                        type="text"
                        id="second-phone"
                        name="phoneNums[1]"
                        placeholder="Optional"
                        className="placeholder:text-gray-200 p-2  w-full bg-white text-black rounded-md"
                      />
                    </div>
                  </div>

                  {/* ================== Knowledge Additional Array   ================ */}
                  <div className="text-[13px]">
                    <label className="text-gray-400">
                      List of Your Knowledge
                    </label>

                    <FieldArray className="grid" name="knowledge">
                      {fieldArrayProps => {
                        const { push, remove, form, move } = fieldArrayProps;
                        const { knowledge } = form.values;
                        return (
                          <div className="grid gap-2 py-4">
                            {knowledge.map((_, i) => (
                              <div
                                className="flex items-center text-black gap-1 relative transition-colors duration-500"
                                key={i}
                              >
                                <Field
                                  key={i}
                                  type="text"
                                  name={`knowledge[${i}]`}
                                  placeholder="Your knowledge"
                                  className="placeholder:text-gray-200 p-2  w-full bg-white rounded-md"
                                />
                                <button
                                  tabIndex={2}
                                  onClick={() => remove(i)}
                                  disabled={knowledge.length === 1}
                                  className="disabled:opacity-10"
                                >
                                  <TrashSvg />
                                </button>
                                {i !== 0 && (
                                  <button
                                    tabIndex={2}
                                    onClick={() => move(1, 0)}
                                    className="rounded-md bg-green-600"
                                  >
                                    <UpSvg />
                                  </button>
                                )}
                              </div>
                            ))}

                            <div className="flex justify-center mt-3">
                              <button
                                onClick={() => push('')} // we are adding with empty value because it will add input element because of map method and we can change it from empty value
                                disabled={
                                  knowledge.length > 3 ||
                                  knowledge.at(-1).trim() === ''
                                }
                                type="button"
                                className="opacity-80 duration-500 disabled:opacity-30"
                              >
                                <AddSvg />
                              </button>
                            </div>
                          </div>
                        );
                      }}
                    </FieldArray>
                  </div>

                  {/* ================== Parents Array of Objcets  ================== */}

                  <div className="text-black font-semibold">
                    <label htmlFor="parents">
                      Parents will participate in exam
                    </label>

                    <FieldArray name="parents">
                      {fieldsArray => {
                        const { form } = fieldsArray;
                        const { parents: parentsArray } = form.values;

                        return parentsArray.map((parent, i) => (
                          <div key={i} className="grid gap-2">
                            {Object.keys(parent).map((field, index) => (
                              <Field
                                key={index}
                                className="p-2 w-full bg-white text-black rounded-xl"
                                type="text"
                                name={`parents[${i}.${field}]`}
                                placeholder={`Parent ${field}`}
                              />
                            ))}
                          </div>
                        ));
                      }}
                    </FieldArray>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-green-400 mt-4 text-center text-xl font-semibold tracking-wide flex justify-center p-2 w-full rounded-l text-black disabled:opacity-70 disabled:bg-gray-500"
                  disabled={!formik.isValid || !formik.dirty}
                >
                  {formik.isSubmitting ? <Spinner /> : 'Submit'}
                </button>
              </Form>
            );
          }}
        </Formik>
      </section>
    </div>
  );
};

export default FormComponent;
{
  /* <div className="flex border-blue-300 p-3 border-2 items-center gap-4 mt-3">
                                {form.values.knowledge.length > 1 && (
                                  <button
                                    onClick={() => remove(i)}
                                    type="button"
                                    className="p-2 rounded-full bg-red-300 text-xs w-auto"
                                  >
                                    ➖
                                  </button>
                                )}
                                <button
                                  onClick={() => push('')}
                                  type="button"
                                  className="p-2 rounded-full bg-gray-300 text-xs w-auto"
                                >
                                  ➕
                                </button>
                              </div> */
}
