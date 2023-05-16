import { useEffect, useRef, useState } from 'react';

const ReRender = () => {
  const [object, setObject] = useState({ name: 'Nijat', job: 'Developer' });
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const [text, setText] = useState('');

  const ref = useRef(0);

  useEffect(() => {
    ref.current++;
  }, []);

  const changeName = () => {
    // ❌
    // object.name = 'Ibrahim'; 
    // setObject(object);
    // setArray(array.sort((a, b) => b - a));
    // ✅
    // setObject({ ...object, name: 'Ibrahim' });
    // setArray([...array.sort((a, b) => b - a)]);
  };

  useEffect(() => {
    console.log('rendered');
  }, [text]);

  return (
    <>
      <h1>Hello {object.name}</h1>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <h4>{text}</h4>
      <span>Rendered {ref.current} times</span>
      <h5>
        Sorted Numbers:
        {array.map((n, i) => (
          <div key={i}>{n}</div>
        ))}
      </h5>
      <button onClick={changeName}>Change Name</button>
    </>
  );
};

export default ReRender;
