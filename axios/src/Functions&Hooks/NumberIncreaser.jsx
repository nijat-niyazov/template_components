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
    // clear when numbers reached 400

    return () => {
      clearInterval(intervalId);
    };

    // clean previous interval and start new one
  }, [number]);

  return <div>{number >= 400 ? 400 : number}%</div>;
};

export default NummberIncreaser;
