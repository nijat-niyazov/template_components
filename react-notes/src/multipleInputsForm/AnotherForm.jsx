import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  job: '',
  password: '',
  number: '',
};

const types = ['button', 'email', 'number', 'password', 'text'];

const AnotherForm = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const inputs = Object.keys(form);

  const changeHandler = e => {
    setErrors({ ...errors, [e.target.name]: Boolean(e.target.value === '') });

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm(initialState);
  };

  const onSubmit = e => {
    e.preventDefault();
    resetForm();
    console.log(form);
  };

  return (
    <form onSubmit={onSubmit}>
      {inputs?.map((key, i) => {
        return (
          <div key={i}>
            <label htmlFor={key}>{key}</label>
            <input
              type={types.includes(key) ? [key] : 'text'}
              name={key}
              id={key}
              placeholder={key}
              value={form[key]}
              onChange={e => changeHandler(e)}
              style={errors[key] ? { borderColor: 'red' } : null}
            />
            {errors[key] && <p>You have not make value on {key}</p>}
            <br /> <hr />
          </div>
        );
      })}

      <button type="submit">Submit</button>
    </form>
  );
};

export default AnotherForm;
