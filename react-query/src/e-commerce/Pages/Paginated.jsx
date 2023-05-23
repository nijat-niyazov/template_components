import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { fetchProductsPerPage } from '../api/mainApi';
import Product from '../components/Product';

const Paginated = () => {
  const [pageNum, setPageNum] = useState(1);

  const { data, isLoading, isError, error, isPreviousData, refetch } = useQuery(
    {
      queryKey: ['productsPage', pageNum],
      queryFn: fetchProductsPerPage,
      keepPreviousData: true,
      staleTime: 1000 * 60 * 5, // because of it not changes oftenly and we want to save it as fresh(means fetched latest data) to prevent refetch for fresh (last fetched) data
      cacheTime: 1000 * 10 * 60,
    }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2> {error.message}</h2>;
  }

  const handlePageNumber = type => {
    const newPage = pageNum + (type === 'increase' ? 1 : -1);
    setPageNum(newPage);
  };

  return (
    <div>
      <h2 className="text-center font-bold text-[50px]">Paginated</h2>
      <section className="grid gap-5 p-4 grid-cols-2">
        {data?.data.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </section>
      <button
        onClick={refetch}
        disabled={isPreviousData}
        className="bg-green-600 text-white block rounded-xl p-2 w-1/3  font-bold text-center m-auto my-5 disabled:opacity-50"
      >
        Load Data
      </button>
      <aside className="bg-blue-300 m-2 p-2 flex justify-between items-center ">
        <button
          disabled={isPreviousData || pageNum === 1}
          onClick={() => handlePageNumber()}
          className="bg-amber-400 p-2 rounded-lg font-bold italic disabled:opacity-50"
        >
          Prev Page
        </button>

        <div className="w-1/2 flex gap-2">
          {Array.from({ length: data.totalPages }, (_, p) => {
            return (
              <button
                key={p}
                disabled={isPreviousData}
                className={`${
                  data.activePage === p + 1
                    ? 'bg-red-500 text-white'
                    : 'bg-amber-400'
                } w-full text-ellipsis p-2 rounded-lg font-bold italic disabled:opacity-50`}
              >
                {p + 1}
              </button>
            );
          })}
        </div>

        <button
          disabled={isPreviousData || pageNum === data.totalPages}
          onClick={() => handlePageNumber('increase')}
          className="bg-amber-400 p-2 rounded-lg font-bold italic disabled:opacity-50"
        >
          Next Page
        </button>
      </aside>
    </div>
  );
};

export default Paginated;
