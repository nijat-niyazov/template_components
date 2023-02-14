import { useEffect, useState } from 'react';
import { getALlStories } from '../apiFunctions';

const useFetchData = (type, limit) => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getALlStories(type, limit)
      .then(response => {
        setStories(prev => [...prev, ...response]);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [type, limit]);
  return { stories, isLoading };
};

export default useFetchData;
