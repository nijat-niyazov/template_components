

import React from 'react';
import { useInView } from 'react-intersection-observer';

const Yes = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  console.log(ref.current);

  return (
    <div>
      <section className="h-[102vh] bg-blue-400 text-center flex flex-col items-center justify-center ">
        <h1>Scroll down</h1>
      </section>
      <div ref={ref} className="inview-block">
        <h2 className="h-40 flex items-center justify-center">
          Element is inside the viewport: <strong>{inView.toString()}</strong>
        </h2>
      </div>
      <section className="h-[102vh] bg-blue-400 text-center flex flex-col items-center justify-center ">
        <h1>Scroll up</h1>
      </section>
    </div>
  );
};

export default Yes;

