import { useState } from 'react';
import List from './List';

const DeferredValue = () => {
  const [text, settext] = useState('');

  const handleChange = e => {
    settext(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={e => handleChange(e)} />
      <List text={text} />
    </div>
  );
};

export default DeferredValue;
