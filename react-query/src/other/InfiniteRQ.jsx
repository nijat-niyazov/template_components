import { useInfiniteQuery } from '@tanstack/react-query';
import { Fragment } from 'react';
import { fetchColorsWithInfiniteQuery } from './api';

let limit = null;
export const changeLimit = total => {
  limit = total;
};

const InfiniteRQ = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage, // must be attached to on click button or intersection observer
  } = useInfiniteQuery({
    /*
    ! This is used for load more data as infinite scroll
    */
    queryKey: ['colors'],
    queryFn: fetchColorsWithInfiniteQuery,
    getNextPageParam: (_lastPage, pages) => {
      /*
       * second argument(pages) always is array and responsed data will be in array like [response(array)]
       */

      return pages.length < limit ?? 1e10 ? pages.length + 1 : undefined;

      /*
       * result of pages.length+1 will be send to api as pageParam
       ! if false then undefined is returned and react query knows there is no nextpage
       ! A hasNextPage boolean is true if getNextPageParam returns a value other than undefined
       */
    },
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <ul className="ml-10 list-decimal">
        {data.pages.map((groupColors, i) => (
          <Fragment key={i}>
            {groupColors?.map(color => (
              <li
                className={`p-2 bg-${color.label}-500 rounded-lg max-w-min`}
                key={color.id}
              >
                {color.label}
              </li>
            ))}
          </Fragment>
        ))}
      </ul>
      <div className=" w-full mt-4 flex items-center justify-around">
        <button
          className="bg-green-500 inline-block rounded-lg p-2 disabled:opacity-50 hover:bg-green-600"
          disabled={!hasNextPage || isFetchingNextPage}
          onClick={fetchNextPage}
        >
          Load More
        </button> 
      </div>
      {isFetching ? (
        <p className="w-full p-2 bg-red-300"> 'Fetching...'</p>
      ) : null}
    </>
  );
};

export default InfiniteRQ;
