import { useEffect, useState } from 'react';
import { mainApi } from '../api/mainApi';

const useInterObserver = pageNum => {
  const [products, setProducts] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedCount, setFetchedCount] = useState(0);

  useEffect(() => {
    if (hasNextPage) {
      const fetchProductsWithInfinitive = async page => {
        try {
          setIsLoading(true);

          const response = await mainApi.get(
            `pre-products/?_page=${page}&_limit=4`
          );

          const totalProducts = response.headers['x-total-count'];
          setFetchedCount(p => p + response.data.length);

          if (response.data) {
            setIsLoading(false);
            setProducts(p => [...p, ...response.data]);
            setHasNextPage(fetchedCount >= totalProducts ? false : true);
          }
        } catch (err) {
          setIsLoading(false);
          console.log(err.message);
        } finally {
          setIsLoading(false);
        }
      };
      fetchProductsWithInfinitive(pageNum);
    }
  }, [pageNum]);

  return { products, hasNextPage, isLoading, fetchedCount };
};

export default useInterObserver;
