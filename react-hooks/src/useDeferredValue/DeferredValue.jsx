import { useState } from 'react';
import List from './List';

const DeferredValue = () => {
  const [text, settext] = useState(0);

  const handleChange = e => {
    settext(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={e => handleChange(e)} />
      <button onClick={() => settext(p => p + 1)}>increase</button>
      <List text={text} />
    </div>
  );
};

export default DeferredValue;
