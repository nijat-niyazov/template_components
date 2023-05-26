const Error = ({ message }) => {
  return (
    <p className="text-red-800 text-m tracking-tight text-justify font-semibold mt-1 rounded-xl">
      {message}
    </p>
  );
};

export default Error;
