const Error = ({ message, show }) => {
  return (
    <p
      className={`${
        show ? 'opacity-100' : 'opacity-0'
      }  text-red-800 text-m tracking-tight text-justify font-semibold mt-1`}
    >
      {message}
    </p>
  );
};

export default Error;
