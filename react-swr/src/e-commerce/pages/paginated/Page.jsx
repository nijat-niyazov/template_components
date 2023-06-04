import useSWR from 'swr';
import { endPoint as cacheKey, fetchWithPagination } from '../../api/api';
import Product from '../../components/Product';

const Page = ({ pageNum, sorted, brands, query }) => {
  console.log({query});

  const {
    data: products,
    isLoading,
    error,
  } = useSWR(
    cacheKey +
      pageNum +
      '/' +
      (sorted || '') +
      '/' +
      brands?.join('+') +
      '/' +
      query,
    fetchWithPagination,
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      {/* <button
        onClick={handleSort}
        className={`${
          sorted ? 'bg-yellow' : 'bg-red'
        } p-2 text-white m-auto flex items-center justify-center rounded-md`}
      >
        Ordered ⬇
      </button> */}
      <section className="grid gap-5 p-4 grid-cols-2">
        {products?.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </section>
    </>
  );
};

export default Page;
