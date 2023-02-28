import { useField } from 'formik';

const Input = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  console.log(field);
  console.log(meta);
  console.log(helpers);

  return (
    <label>
      <div>{label}</div>
      <input {...field} {...props} />
    </label>
  );
};

export default Input;
