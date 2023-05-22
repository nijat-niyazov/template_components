import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchProduct } from '../api/mainApi';

const useProductHook = id => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['product', id],
    queryFn: fetchProduct,
    initialData: () => {
      const data = queryClient
        .getQueryData(['products'])
        ?.pages?.flat(Infinity)
        .find(product => product.id === parseInt(id));

      return data ? data : undefined;
    },
    enabled: !!parseInt(id),
    refetchOnWindowFocus: false,
  });
};

export default useProductHook;
