import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { fetchColors } from './api';

const PaginatedRQ = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const {
    data: colors,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ['colors', pageNumber],
    /*
     * We have to give dynamic query for key because it will have new data and we need cache this query with givin property
     */
    
    queryFn: fetchColors,
    keepPreviousData: true,
    /*
     * It used for displaying previous data while new updated data comes instead of seing loading for new requested data. For example in scenario where we paginate datas when we change data instead of seing loading while changed pages data comes, we see previous one. Once new data is fetched it will replace with previous data
     */
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  const data = colors?.data;
  const pages = colors?.pages;

  return (
    <>
      <ul className="ml-10 list-decimal">
        {data.map(col => (
          <li
            className={`p-2 bg-${col.label}-500 rounded-lg max-w-min`}
            key={col.id}
          >
            {col.label}
          </li>
        ))}
      </ul>
      <div
        className={`${
          isFetching ? 'opacity-50' : ''
        } w-full mt-4 flex items-center justify-around`}
      >
        <button
          className="bg-gray-700 inline-block rounded-lg text-white p-2 disabled:opacity-50 hover:bg-gray-600"
          disabled={pageNumber === 1}
          onClick={() => setPageNumber(p => p - 1)}
        >
          Prev Page
        </button>
        <h2 className="bg-blue-700 px-4 rounded-lg text-white py-2 text-[20px]">
          {pageNumber}
        </h2>
        <button
          className="bg-gray-700 inline-block rounded-lg text-white p-2 hover:bg-gray-600 disabled:opacity-50"
          disabled={pageNumber === pages}
          onClick={() => setPageNumber(p => p + 1)}
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export default PaginatedRQ;
