import { useCallback, useRef, useState } from 'react';
import useBookSearch from './useBookSearch';

const InfinitiveScroll = () => {
  const [query, setQuery] = useState('');
  const [pageNum, setPageNum] = useState(1);

  const { loading, error, hasMore, books } = useBookSearch(query, pageNum);

  const observer = useRef();
  // undefined ⤴

  const lastbookElementRef = useCallback(
    lastBookElement => {
      if (loading) return; // if loading is continuning we don't want make infinitive scroll

      if (observer.current) {
        console.log('we have one already', lastBookElement?.innerHTML);
        console.log(observer.current);
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver(books => {
        // let testObserver = new IntersectionObserver(books => {
        if (books[0].isIntersecting && hasMore) {
          setPageNum(p => p + 1);
        }
      });
      console.log(observer.current);

      if (lastBookElement) {
        // console.log(lastBookElement.innerHTML);

        observer.current.observe(lastBookElement);
        // testObserver.observe(lastBookElement);
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
