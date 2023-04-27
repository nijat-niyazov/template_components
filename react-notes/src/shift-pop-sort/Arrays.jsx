import { useState } from 'react';

const Arrays = () => {
  /**
   * ! desctructive methods -  changes data in place
  //  * sort,push,pop,shift,unshift,splice
   */

  /**
   * ! non-desctructive methods - returns new array with mutated data 
  //  * sort,push,pop,shift,unshift,splice
   */

  /**
  // * React prefers non-desctructive methods because it compares nonPrimitive value by its references, not by its contents
   */

  const [arr, setArr] = useState([1, 2, 3, 4, 5]);

  // ❌ sorted and arr now point so same place and it can cause some issues
  const sorted = arr.sort((a, b) => a - b);

  // ✅ sortedArray is newArray and now they are in different places
  const sortedArray = [...arr].sort((a, b) => a - b);

  return;
};

export default Arrays;
