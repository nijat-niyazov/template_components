import { useEffect, useState } from 'react';
import { getALlStories } from '../apiFunctions';

const useFetchData = (type, prevLim, limit) => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // console.log(`custom rendered `);
    setIsLoading(true);
    getALlStories(type, prevLim, limit)
      .then(response => {
        console.log(response);
        setStories(prev => [...prev,...response]);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [type]);
  return { stories, isLoading };
};

export default useFetchData;
