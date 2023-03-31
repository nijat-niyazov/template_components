import axios from 'axios';
import { useEffect, useState } from 'react';

const useBookSearch = (pageNum, query, startIndex) => {
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
      params: {
        q: query, // query we write
        // page: pageNum, // pageNum
        limit: 10, // how much must seen
        offset: startIndex, // from which index to show
      }, // these are for url searching parametrs for example like  http://openlibrary.org/search.json?query=martin&pagenum=1 but if we haven't params like query or pagenum we have to implement it into params of url
      signal: signal,
    })
      .then(res => {
        setIsLoading(false);
        setHasNextPage(Boolean(res.data.docs.length > 0));
        setError(e => ({ ...e, exist: false }));

        if (startIndex === 40) {
          console.log(res.data.docs.map(t => t.title).length);
        }

        setBooks(prev => {
          if (startIndex === 40) {
            console.log('it rendered');
            return res?.data.docs.map(b => b.title);
          }
          
          return [
            // ...new Set([

            ...prev,
            ...res?.data.docs.map(b => b.title),
            // ]),
          ];
        });
      })
      .catch(e => {
        if (signal.aborted) return;
        console.log(e);
        setError(e => ({ message: e.message, exist: true }));
      });

    return () => controller.abort();
  }, [pageNum, query, startIndex]);

  return { books, error, isLoading, hasNextPage };
};

export default useBookSearch;
