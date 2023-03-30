import axios from 'axios';
import { useEffect, useState } from 'react';

const useBookSearch = (pageNum, query, limit) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState({ message: '', exist: false });
  const [isLoading, setIsLoading] = useState(true);
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    setBooks([]);
  }, [query]);

  useEffect(() => {
    setIsLoading(true);
    setError(e => ({ ...e, exist: true }));
    setHasNextPage(false);

    const controller = new AbortController();
    const { signal } = controller;

    axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json',
      params: { q: query, page: pageNum, limit: limit }, // these are for url searching parametrs for example like  http://openlibrary.org/search.json?query=martin&pagenum=1 but if we haven't params like query or pagenum we have to implement it into params of url
      signal: signal,
    })
      .then(res => {
        console.log(limit, res.data.docs, res.data.numFound);
        setIsLoading(false);
        setHasNextPage(Boolean(res.data.docs.length > 0));
        setError(e => ({ ...e, exist: false }));
        setBooks(prev => [
          ...new Set([
            ...prev,
            ...res?.data.docs.map(b => {
              const { title, author_name, first_publish_year } = b;
              return { title, author_name, first_publish_year };
            }),
          ]),
        ]);
      })
      .catch(e => {
        if (signal.aborted) return;
        console.log(e);
        setError(e => ({ message: e.message, exist: true }));
      });

    return () => controller.abort();
  }, [pageNum, query, limit]);

  if (books.length !== 0) {
    console.log(books);
  }

  return { books, error, isLoading, hasNextPage };
};

export default useBookSearch;
