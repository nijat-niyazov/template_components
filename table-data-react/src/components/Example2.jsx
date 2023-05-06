import React, { useEffect, useState } from 'react';

function Example2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed to ${count}`);
  }, [count]);

  return (
    <div className="m-10">
      <p>You clicked {count} times</p>
      <button className="bg-red-300 p-5" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example2;
