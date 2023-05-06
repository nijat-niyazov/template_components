import React, { useEffect, useState } from 'react';

function Example1() {
  const [count, setCount] = useState(0);

  // const calculation = useMemo(() => {
  //   console.log('recalculating...');
  //   return count * 2;
  // }, [count]);

  useEffect(() => setCount(count * 2), [count]);

  return (
    <div className="m-10">
      <p>You clicked {count} times</p>
      <p>
        2*{count} ----- {count}
      </p>
      <button className="bg-red-500 p-2" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example1;
