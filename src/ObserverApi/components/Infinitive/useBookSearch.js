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

  useEffect(() => {
    let cancel; // we create a variable and then change it in cancelToken because we want to cancel request if useeffect is called
    setLoading(true);
    setError(false);
    axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json',
      params: { q: searchQuery, page: pageNum }, // these are for url searching parametrs for example like  http://openlibrary.org/search.json?query=martin&pagenum=1 but if we haven't params like query or pagenum we have to implement it into params of url
      cancelToken: new axios.CancelToken(c => (cancel = c)),
    })
      .then(res => {
        setBooks(
          prevBooks => [
            ...new Set([...prevBooks, ...res?.data.docs.map(b => b.title)]),
          ]
          // adding set for unique values
        );
        setHasMore(res.data.docs.length >= 0);
        setLoading(false);
        // console.log(...res.data.docs);
      })
      .catch(e => {
        if (axios.isCancel(e)) return;
        setError(true);
      });

    return () => cancel();
  }, [searchQuery, pageNum]);

  console.log(hasMore);

  return { loading, error, books, hasMore };
};

export default useBookSearch;
