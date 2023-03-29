import { useCallback, useEffect, useRef, useState } from 'react';
import useBookSearch from './useBookSearch';

const InfinitiveScroll = () => {
  const [query, setQuery] = useState('');
  const [pageNum, setPageNum] = useState(1);

  const { loading, error, hasMore, books } = useBookSearch(query, pageNum);

  useEffect(() => {
    console.log(hasMore);
  }, [hasMore]);

  const observer = useRef();
  // undefined ⤴

  const lastbookElementRef = useCallback(
    node => {
      if (loading) return; // if loading is continuning we don't want make infinitive scroll

      if (observer?.current) {
        console.log(observer.current);
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver(entries => {
      // let testObserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNum(p => p + 1);
        }
      });

      if (node) {
        observer.current.observe(node);
        // testObserver.observe(node);
      }
    },
    [loading, hasMore]
  );

  const handleChange = e => {
    setQuery(e.target.value);
    setPageNum(1);
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleChange} />
      {books.lenght !== 0 &&
        books?.map((book, i) => {
          if (i + 1 === books.length) {
            return (
              <div
                style={{ background: 'red' }}
                ref={lastbookElementRef}
                key={i}
              >
                {book} <br /> <br />
              </div>
            );
          }
          return <div key={i}>{book}</div>;
        })}

      {loading && <div className="">Loading...</div>}
      {error && <div className="">Error...</div>}
    </div>
  );
};

export default InfinitiveScroll;
