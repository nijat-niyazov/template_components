import { useQuery } from '@tanstack/react-query';
import { fetchProduct } from '../api/mainApi';

const useProductHook = id => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: fetchProduct,
    enabled: !!parseInt(id),
  });
};

export default useProductHook;
