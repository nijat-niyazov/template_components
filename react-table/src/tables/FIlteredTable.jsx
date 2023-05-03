import { useDeferredValue, useEffect, useState, useTransition } from 'react';

const FilteringTable = ({ filter, setFilter }) => {
  const [value, setValue] = useState();
  const [isPending, startTransiiton] = useTransition();
  const delayedVal = useDeferredValue(filter);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setValue(filter);
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [filter]);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      <label htmlFor="">Search for: </label>
      <input
        type="text"
        value={value}
        onChange={e => setFilter(e.target.value)}
      />
    </div>
  );
};

export default FilteringTable;
