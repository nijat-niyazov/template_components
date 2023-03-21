import { useCallback, useEffect, useRef, useState } from 'react';
import Book from './Book';
import useBookSearch from './useBookSearch';

const InfScroll = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);

  const { books, error, isLoading, hasNextPage } = useBookSearch(
    page,
    query,
    startIndex
  );

  const observer = useRef();

  const startChanger = () => {
    if (startIndex === 40) {
      window.scrollTo({ top: 0 });
    }
    setTimeout(() => {
      setStartIndex(i => i + 10);
    }, 100);
  };

  const lastElementObserver = useCallback(
    lastElement => {
      if (isLoading) return;

      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver(book => {
        if (book.at(0).isIntersecting && hasNextPage) {
          // console.log(startIndex);
          startChanger();
        }
      });

      if (lastElement) {
        observer.current.observe(lastElement);
      }
    },
    [isLoading, hasNextPage]
  );

  useEffect(() => {
    if (books.length !== 0) console.log('books.length', books.length);
  }, [books]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      {error.exist && error.message && <h2>Something got wrong</h2>}
      {isLoading && <h2>Loading</h2>}

      {books?.map((b, i) => {
        if (i + 1 === books.length) {
          return (
            <Book
              startChanger={startChanger}
              i={i + 1}
              ref={lastElementObserver}
              key={i}
              book={b}
            />
          );
        }
        return <Book key={i} book={b} />;
      })}
    </div>
  );
};

export default InfScroll;
