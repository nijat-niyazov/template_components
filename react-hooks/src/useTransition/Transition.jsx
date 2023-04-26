import { useState } from 'react';

const Transition = () => {
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);

  const handleChange = e => {
    setSearch(e.target.value);

    const l = [];
    for (let i = 0; i < 1e4; i++) {
      l.push(e.target.value);
    }
    setList(l);
  };

  return (
    <>
      <input type="text" value={search} onChange={handleChange} />
      <ul style={{ listStyle: 'none' }}>
        {list?.map((word, i) => {
          return <li key={i}>{word}</li>;
        })}
      </ul>
    </>
  );
};

export default Transition;
