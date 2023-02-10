import { useEffect, useState } from 'react';
import { getALlStories } from '../apiFunctions';

const useFetchData = type => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getALlStories(type)
      .then(response => {
        setStories(response);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [type]);
  return { stories, isLoading };
};

export default useFetchData;
