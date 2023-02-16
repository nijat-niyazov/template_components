import { useState, useEffect } from 'react';
import { getStories } from './apis';

const useDataFetcher = (type, prev, lim) => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getStories(type, prev, lim)
      .then(stories => {
        console.log(stories);
        setStories(prev => [...prev, ...stories]);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [type, prev, lim]);

  return { isLoading, stories };
};

export default useDataFetcher;
