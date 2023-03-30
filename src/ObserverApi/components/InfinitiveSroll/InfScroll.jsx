import { useCallback, useRef, useState } from 'react';
import Book from './Book';
import useBookSearch from './useBookSearch';

const InfScroll = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);

  const { books, error, isLoading, hasNextPage } = useBookSearch(
    page,
    query,
    limit
  );

  console.log(books);

  const observer = useRef();

  const lastElementObserver = useCallback(
    lastElement => {
      if (isLoading) return;

      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver(book => {
        if (book.at(0).isIntersecting && hasNextPage) {
          setLimit(limit => limit + 20);
        }
      });

      if (lastElement) {
        observer.current.observe(lastElement);
      }
    },
    [isLoading, hasNextPage]
  );

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      {error.exist && error.message && <h2>Something got wrong</h2>}
      {isLoading && <h2>Loading</h2>}

      {[...new Set(books)]?.map((b, i) => {
        if (i + 1 === books.length) {
          return <Book ref={lastElementObserver} key={i} book={b} />;
        }
        return <Book key={i} book={b} />;
      })}
    </div>
  );
};

export default InfScroll;
