import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { fetchCities } from './apiTest';

const TestQueryComponent = () => {
  const {
  
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
  } = useInfiniteQuery({
    queryKey: ['cities'], // --> queryKey for cahcing data with key
    queryFn: fetchCities, // --> fetch function
    // useErrorBoundary,
    // cacheTime,
    // context,
    // behavior,
    enabled: false || true, // --> based on condition if enabled is false it won't fetch, and default is true
    getNextPageParam, // --> used for fetching page 
    getPreviousPageParam, // --> used for fetching page
    // initialData,
    // initialDataUpdatedAt,
    // isDataEqual,
    keepPreviousData: true, // --> it's default false, but when we set it to true it means we will se cached data untill new data is fetched or updated
    // meta,
    // networkMode,
    // notifyOnChangeProps,
    // placeholderData,
    // queryHash,
    // queryKeyHashFn,
    refetchInterval: false || 5000, // --> it refetch with interval if false there is no interval or we can set it to given time for example for realTime data it can be 1000ms
    // refetchIntervalInBackground,
    // refetchOnMount,
    // refetchOnReconnect,
    refetchOnWindowFocus: true || false, // --> when user is focused on window or intergrated with app
    retry: false || 10, // --> by defualt its 3 and it means tries fetch for given numver time or false when we want fetch only for 1 time and setting to true means for infinitive requests
    retryDelay: 1000 - 30000, // ms,
    // retryOnMount,
    // select,
    // staleTime,
    // suspense,
    // structuralSharing,
  });

  // console.log(isError,error?.message,isLoading);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p className="bg-red-300 ">{error.message}</p>;
  }

  return (
    <div>
      <h2>Okay</h2>
      {data?.map(data => (
        <article
          className="bg-green-600 p-2 rounded-lg mb-2 text-white"
          key={data.id}
        >
          {data.name}
        </article>
      ))}
    </div>
  );
};

export default TestQueryComponent;
