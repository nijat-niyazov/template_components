import { useEffect, useState } from 'react';

const useDebouncedValue = (value ) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      // console.log('finished');
      setDebounced(value);
    }, 500);

    return () => {
      // console.log('cancelled');
      clearTimeout(timer);
    };
  }, [value]);

  return debounced;
};

export default useDebouncedValue;
