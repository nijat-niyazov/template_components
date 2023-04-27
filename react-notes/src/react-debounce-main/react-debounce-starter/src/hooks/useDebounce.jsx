import { useEffect, useState } from 'react';

const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);


  useEffect(() => {
    const id = setTimeout(() => {
      console.log('created timeOut');
      setDebouncedValue(value);
    }, delay);

    return () => {
      console.log('removed timeOut');
      clearTimeout(id);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
