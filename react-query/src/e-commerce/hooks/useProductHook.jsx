import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchProduct } from '../api/mainApi';

const useProductHook = id => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['product', id],
    queryFn: fetchProduct,
    // staleTime: 3 * 1000,
    initialData: () => {
      const data = queryClient
        .getQueryData(['products'])
        ?.pages?.flat(Infinity)
        .find(product => product.id === parseInt(id));
      console.log(data);

      return data ? data : undefined;
    },
    enabled: !!parseInt(id),
  });
};

export default useProductHook;
