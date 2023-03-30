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
        // console.log(observer.current);
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver(books => {
        if (books[0].isIntersecting && hasMore) {
          setPageNum(p => p + 1);
        }
      });
      // console.log(observer.current);

      if (lastBookElement) {
        observer.current.observe(lastBookElement);
      }
    },
    [loading, hasMore]
  );

  const handleChange = e => {
    setQuery(e.target.value);
    setPageNum(1);
  };

  const person = {
    name: 'name',
    soyad: 'soyad',
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleChange} />
      {books?.map((book, i) => {
        // console.log(book);
        if (i + 1 === books.length) {
          return (
            <h2 key={i} style={{ background: 'red' }} ref={lastbookElementRef}>
              {book} <br /> <br />
            </h2>
          );
        }
        return <h4 key={i}>{book}</h4>;
      })}

      {loading && <div className="">Loading...</div>}
      {error && <div className="">Error...</div>}
    </div>
  );
};

export default InfinitiveScroll;
