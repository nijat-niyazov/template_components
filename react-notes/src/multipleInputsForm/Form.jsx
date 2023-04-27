import { useState } from 'react';

const initialValue = {
  a: 'aa',
  b: 'bb',
  c: 'cc',
  d: 'dd',
  e: 'ee',
  f: 'ff',
  g: 'gg',
  h: 'hh',
  i: 'ii',
  j: 'jj',
  k: 'k',
  l: 'l',
  m: 'm',
  n: 'n',
  o: 'o',
  p: 'p',
  q: 'q',
  r: 'r',
  s: 's',
  t: 't',
  u: 'u',
  v: 'v',
  w: 'w',
  x: 'x',
  y: 'y',
  z: 'z',
};

const Form = () => {
  const inputs = Object.keys(initialValue);

  const [form, setForm] = useState(initialValue);
  const [errors, setErrors] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
    resetForm();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onChange = (key, val) => {
    setErrors({
      ...errors,
      [key]: Boolean(val === ''),
    });

    setForm({ ...form, [key]: val });
  };

  const resetForm = () => {
    setForm(initialValue);
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      {inputs.map((key, i) => {
        return (
          <div key={i}>
            <label htmlFor={key}>{key}</label>
            <input
              type="text"
              id={key}
              value={form[key]}
              style={{
                borderColor: errors[key] ? 'red' : '',
              }}
              onChange={e => onChange(key, e.target.value)}
            />
            <p>{errors[key] && 'error'}</p>
            <br /> <br />
          </div>
        );
      })}

      <button onClick={resetForm}>Reset form</button>
      <button type="submit" onClick={handleSubmit}>
        Submit form
      </button>
    </form>
  );
};

export default Form;
