import { useQuery } from 'react-query';
import { useMemo } from 'react';
import { fetchProducts } from './fetchers';

const Info = () => {
  const { isError, isSuccess, isLoading, data, error } = useQuery(
    ['products'],
    fetchProducts,
    { staleTime: 3000 }
  );
  const products = data;
  console.log('Products: ', products);

  const TotalNumberOfProducts = products?.length;
  const numberOfProductsOver300 = useMemo(
    () => products?.filter(p => p.price >= 300).length
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="mt-6 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-black">Products Info:</h1>
      <span className="text-xl font-bold text-blue-500">
        Toltal Products: {TotalNumberOfProducts}
      </span>
      <span className="text-xl font-bold text-red-500">
        Number of Products over 300$: {numberOfProductsOver300}
      </span>
    </div>
  );
};

export default Info;
