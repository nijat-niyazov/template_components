import { useState, useTransition } from 'react';

const Transition = () => {
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  /**
   * * loading and low priority function
   */

  /**
   * ? But it can be affect performance because we render each time when high prioty changes, that's why we have to be carefull and on handleChange itself it renders once because they all in one function
   */

  const handleChange = e => {
    // urgent (high priority)
    setSearch(e.target.value);

    /**
     * * While something changes on high priority isPending is true
     */

    /**
     * ! LOW priority function which is wait for setSearch. so it don't wait till low priprity function to finished and stop immediately if anything happens in high pripoty function before lower one is finished and after something happened it start again
     */
    startTransition(() => {
      const l = [];
      for (let i = 0; i < 1e4; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  };

  return (
    <>
      <input type="text" value={search} onChange={handleChange} />
      {isPending ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ listStyle: 'none' }}>
          {list?.map((word, i) => {
            return <li key={i}>{word}</li>;
          })}
        </ul>
      )}
    </>
  );
};

export default Transition;
