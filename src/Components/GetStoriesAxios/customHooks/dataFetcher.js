import { useEffect, useState } from 'react';
import { getALlStories } from '../apiFunctions';

const useFetchData = (type, limit) => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getALlStories(type, limit)
      .then(response => {
        setStories(response);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [type]);
  return { stories, isLoading };
};

export default useFetchData;
