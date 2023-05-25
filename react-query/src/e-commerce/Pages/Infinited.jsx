import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { fetchProductsWithInfinitive } from '../api/mainApi';
import Product from '../components/Product';

let totalPages = 0;

export const setTotalPages = totalPageNums => (totalPages = totalPageNums);

const Infinited = () => {
  const {
    data,
    isError,
    error,
    isLoading,
    isFetching,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isFetchingPreviousPage,
    hasPreviousPage,
    fetchPreviousPage,
  } = useInfiniteQuery({
    queryKey: ['products'],
    queryFn: fetchProductsWithInfinitive,
    getNextPageParam: (_, pages) => {
      return pages.length < totalPages ? pages.length + 1 : undefined;
    },
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  // console.log(dataDebounced);

  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    // triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (isLoading) {
    return <h2> "Loading..."</h2>;
  }

  if (isError) {
    return <h2> {error.message}</h2>;
  }

  const lastPostId = data.pages.flat(Infinity).at(-1)?.id;

  return (
    <div>
      <section className="mb-10">
        <button
          // onClick={() => navigate.goBack()}
          to="/products"
          className=" bg-blue-800 p-4 text-2xl rounded-lg text-white "
        >
          Go Back
        </button>
      </section>

      <section className="grid grid-cols-2 gap-5 p-4 md:grid-cols-3">
        {data?.pages.flat(Infinity).map(product => {
          return hasNextPage && product.id === lastPostId ? (
            <Product
              product={product}
              key={product.id}
              ref={ref}
              cart={'cart'}
              category={category}
              setCategory={setCategory}
            />
          ) : (
            <Product product={product} key={product.id} />
          );
        })}
      </section>

      {hasNextPage ? (
        <button
          disabled={isFetchingNextPage}
          onClick={fetchNextPage}
          className="bg-green-600 w-[90%] m-4 p-2 block font-bold disabled:opacity-50"
        >
          Load More...
        </button>
      ) : (
        <h2 className="text-xl bg-amber-400 text-center w-1/3 m-auto p-4 font-bold rounded-xl my-5">
          That's all
        </h2>
      )}
    </div>
  );
};

export default Infinited;
