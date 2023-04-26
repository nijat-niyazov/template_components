import { useDeferredValue, useEffect, useState, useTransition } from 'react';

const bigData = [...Array(20000).keys()];

const Filtering = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(bigData);
  const [isPending, startTransition] = useTransition();

  const delayedValue = useDeferredValue(search);

  useEffect(() => {
    console.log(delayedValue);
  }, [delayedValue]);

  useEffect(() => {
    startTransition(() => {
      // console.log('filtered');
      const filtered = bigData.filter(b => b.toString().includes(delayedValue));

      setData(filtered);
    });
    // console.log('delayed changed');
  }, [delayedValue]);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h1>Search here</h1>
      <div style={isPending ? { opacity: 0.5 } : null}>
        <input
          type="text"
          name=""
          id=""
          value={search}
          onChange={handleChange}
        />
        <h2>Searching for {delayedValue || 'All'} </h2>
        {isPending && <h2>Loading...</h2>}

        {!isPending && <h4>Matched results {data.length} </h4>}
        <ul style={{ listStyle: 'none' }}>
          {data.map(num => (
            <li key={num}> {num}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filtering;
