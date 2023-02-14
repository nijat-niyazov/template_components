import React, { useState, useEffect } from 'react';
import { getPostPage } from '../api';

const usePosts = (pageNum = 1) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setError({});

    const controller = new AbortController();
    const { signal } = controller;

    getPostPage(pageNum, { signal })
      .then(data => {
        setResults(prev => [...prev, data]);
        setHasNextPage(Boolean(data.length));
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        if (signal.aborted) return;
        setIsError(true);
        setError({ message: err.message });
      });

    return () => controller.abort();
  }, [pageNum]);

  return { results, isLoading, isError, error, hasNextPage };
};

export default usePosts;
