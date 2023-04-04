import axios from 'axios';
import { useEffect, useState } from 'react';

const useBookSearch = (searchQuery, pageNum) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  // when we get num_found !== 0

  useEffect(() => {
    setBooks([]);
  }, [searchQuery]);
  // if query changed remove all books

  useEffect(() => {
    setLoading(true);
    setError(false);

    const controller = new AbortController();
    const { signal } = controller;

    // console.log(signal);

    axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json',
      params: { q: searchQuery, page: pageNum }, // these are for url searching parametrs for example like  http://openlibrary.org/search.json?query=martin&pagenum=1 but if we haven't params like query or pagenum we have to implement it into params of url
      signal: signal,
    })
      .then(res => {
        // console.log(
        //   res.data.docs.filter(b => b.title.toLowerCase().includes(searchQuery))
        // );

        console.log(
          [... new Set([...res.data.docs.map(b => b.title)])],
          res.data.numFound
        );

        setBooks(
          prevBooks => [
            // console.log(res.data.docs),
            // ...new Set([
            ...prevBooks,
            ...res?.data.docs.map(b => {
              return b.title;
            }),
            // ]),
          ]
          // adding set for unique values
        );
        setHasMore(res.data.docs.length > 0);
        setLoading(false);
      })
      .catch(e => {
        if (signal.aborted) return;
        console.error(e.message);
        setLoading(false);
        setError(true);
      });

    return () => controller.abort();
  }, [searchQuery, pageNum]);

  console.log(books.length);

  return { loading, error, books, hasMore };
};

export default useBookSearch;
