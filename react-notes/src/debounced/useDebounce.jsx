import { useEffect, useState } from 'react';

const useDebounce = (value, time = 0.5) => {
  const [delayed, setDelayed] = useState(value);

  useEffect(() => {
    let timer = setTimeout(() => {
      console.log('timeout is finished');
      setDelayed(value);
    }, time * 1000);

    return () => {
      console.log('timeout is cancelled');
      clearTimeout(timer);
    };
  }, [value, time]);

  return delayed;
};

export default useDebounce;
