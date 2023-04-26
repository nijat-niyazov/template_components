import { useDeferredValue, useMemo } from 'react';

const List = ({ text }) => {
  const delayedValue = useDeferredValue(text);

  /**
   * !DEFERREDVALUE is used when we have no access to state change and got state as prop that's why we delay a little bit value till no chnages happened from parent or element that we have no access to its setState and then react see no changes and happened sets delayed value
   */

  const list = useMemo(() => {
    const l = [];
    for (let i = delayedValue; i <= 1e4; i++) {
      l.push(i);
    }
    return l;
  }, [delayedValue]);

  console.log('text', text, 'delayed', delayedValue);

  return list.map((t, i) => {
    return <div key={i}>{t} </div>;
  });
};

export default List;
