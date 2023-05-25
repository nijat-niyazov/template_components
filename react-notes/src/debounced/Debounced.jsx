import React, { useState } from 'react';
import List from './List';
import useDebounce from './useDebounce';

const Debounced = () => {
  const [search, setSearch] = useState('');

  const delayed  = useDebounce(search, 3);

  console.log(delayed);

  return (
    <div>
      <label htmlFor="search">Search here</label>
      <input
        type="text"
        value={search}
        id="search"
        onChange={e => setSearch(e.target.value)}
      />
      <List searchValue={delayed} />
    </div>
  );
};

export default Debounced;
