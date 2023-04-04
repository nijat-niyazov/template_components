import React, { useEffect, useState } from 'react';

const CopiesArrays_Objects = () => {
  const [first, setFirst] = useState(localStorage.getItem('obj') ?? null);

  const originalArray = [1, 2, 3];

  // copies ⤵
  let spreadCopyArr = [...originalArray];
  let mapCopyArr = originalArray.map(arr => arr);
  let parSeCopyArr = JSON.parse(JSON.stringify(originalArray));
  let assignCopyArr = Object.assign([], originalArray);

  const originalObject = { a: 1, b: 2 };

  // copies ⤵
  let spreadCopyObj = { ...originalObject };
  let parSeCopyObj = JSON.parse(JSON.stringify(originalObject));
  let assignCopyObj = Object.assign({}, originalObject);

  localStorage.setItem('obj', JSON.stringify(assignCopyObj));

  useEffect(() => {
    const menelazim = JSON.parse(localStorage.getItem('obj'));
    setFirst(menelazim);
  }, []);

  console.log(first);

  return (
    <div>
      <div>
        <p> {JSON.stringify(spreadCopyArr)} </p>
        <p> {JSON.stringify(mapCopyArr)} </p>
        <p> {JSON.stringify(parSeCopyArr)} </p>
        <p> {JSON.stringify(assignCopyArr)} </p>
      </div>
      <div>
        <p> {JSON.stringify(spreadCopyObj)} </p>
        <p> {JSON.stringify(parSeCopyObj)} </p>
        <p> {JSON.stringify(assignCopyObj)} </p>
      </div>
    </div>
  );
};

export default CopiesArrays_Objects;
