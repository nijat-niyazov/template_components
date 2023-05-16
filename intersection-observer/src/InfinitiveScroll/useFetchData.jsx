import { useEffect, useState } from 'react';
import { mainApi } from './api';

const useFetchData = (pageNum) => {
  const [data, setData] = useState([]);
  // const [pageNum, setPageNum] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const fetchData = async pageNum => {
      setisLoading(true);

      try {
        const res = await mainApi.get(`/posts?page=${pageNum}&_limit=20`);

        if (res.status !== 200) {
          throw new Error('Something went wrong');
        }

        setisLoading(false);
        setData(prev => [...prev, res.data]);
        // setPageNum(p => p + 1);
      } catch (err) {
        setError(err.message);
      } finally {
        setisLoading(false);
      }
    };

    fetchData(pageNum);
  }, [pageNum]);

  return { data, error, isLoading };
};

export default useFetchData;
