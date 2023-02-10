import React, { useEffect, useState } from 'react';

const NummberIncreaser = () => {
  const [number, setNumber] = useState(200);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumber(prevNumber => prevNumber + 1);
    }, 3);

    if (number >= 400) {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [number]);

  return <div>{number >= 400 ? 400 : number}%</div>;
};

export default NummberIncreaser;
