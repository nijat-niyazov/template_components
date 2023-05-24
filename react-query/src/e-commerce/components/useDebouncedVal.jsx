import { useEffect, useState } from 'react';

const useDebouncedVal = (query, secs) => {
  const [delayed, setDelayed] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query !== '') setDelayed(query);
    }, secs * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [query, secs]);

  return { delayed };
};

export default useDebouncedVal;
