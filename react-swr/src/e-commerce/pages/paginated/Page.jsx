import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useSWR from 'swr';
import { endPoint as cacheKey, fetchWithPagination } from '../../api/api';
import Product from '../../components/Product';

const Page = ({ pageNum }) => {
  let [searchParams, setSearchParams] = useSearchParams();

  const [sorted, setSorted] = useState(searchParams.get('sorted') ?? false);

  useEffect(() => {
    if (sorted) {
      searchParams.set('sorted', 'id');
    } else {
      searchParams.delete('sorted');
    }
    setSearchParams(searchParams);
  }, [sorted]);

  const handleSort = () => {
    setSorted(sorted ? false : true);
  };

  const {
    data: products,
    isLoading,
    isValidating,
    error,
  } = useSWR(cacheKey + pageNum + sorted || '', fetchWithPagination, {
    keepPreviousData: true,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  // console.log(isLoading, isValidating);

  return (
    <>
      <button
        onClick={handleSort}
        className={`${
          sorted ? 'bg-yellow' : 'bg-red'
        } p-2 text-white m-auto flex items-center justify-center rounded-md`}
      >
        Ordered ⬇
      </button>
      <section className="grid gap-5 p-4 grid-cols-2">
        {products?.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </section>
    </>
  );
};

export default Page;
