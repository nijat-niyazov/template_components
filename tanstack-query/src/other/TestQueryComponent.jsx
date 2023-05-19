import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchCities } from './apiTest';

const TestQueryComponent = () => {

  const queryClient = useQueryClient()
  const queryCache = useQueryCache();

  const {
    data,
    failureCount, // --> how many times it failed from fetching
    failureReason, // --> failure reason for the query retry.
    isInitialLoading, // --> used in scenario where you first time has not downloaded yet
    error, // -->  show an error
    isError, // --> error got
    isLoading, // --> loads query
    status, // --> (loading,error,success)
    isSuccess, // ❌ --> sucessfully
    fetchStatus, // --> ❌ (fetching, paused,idle )  fetching we know, paused fetch has stopped, idle(not doing anything)
    isFetching, // --> ❌
    isPaused, // --> if there is no connection
    isPlaceholderData, // --> is true if shown data is placeHolderData instead of needed data
    isPreviousData, // --> Will be true when keepPreviousData is true and used for disable next,prev pages while we see previousData
    isRefetching, // --> will be true if fetch happens again
    refetch, //--> is function which might to be assigned to click button onLoad 
    // isStale,
    // remove,
  } = useQuery({
    queryKey: ['cities'], // --> queryKey for cahcing data with key
    queryFn: fetchCities, // --> fetch function
    cacheTime: milliseconds, // --> it removes data from cache after giving time
    initialData:(id)=>{
      const prevData = queryClient.getQueryData(['query'])
      // it returns data

      const initialWhileNew = prevData.find(p=>p.id===id)
      return initialWhileNew ? initialWhileNew : undefined 
      // it has to be itself or undefined 
    },
    placeholderData:
    //object data for example 
    {
      name:'Something',
      lastName: "another"
    }
  }, // --> it used for if there is no initialData we can set and show this data till new one is got,
  keepPreviousData: Boolean(false), // --> it's default false, but when we set it to true it means we will se cached data untill new data is fetched or updated
  enabled: Boolean(true), // --> based on condition if enabled is false it won't fetch, and default is true
  refetchInterval: Boolean(false) || milliseconds, // --> it refetch with interval if false there is no interval or we can set it to given time for example for realTime data it can be 1000ms
  refetchIntervalInBackground: Boolean(false), // --> to use this you need to set to Boolean first refetchInterval to even fetch if user has lost focus.
  refetchOnMount: false || true, // --> it means refetchs when component mounts and deafult is true
  // refetchOnReconnect,
  refetchOnWindowFocus: false || true, // --> when user is focused on window or intergrated with app default is true
  retry: false || 10, // --> by defualt its 3 and it means tries fetch for given numver time or false when we want fetch only for 1 time and setting to true means for infinitive requests
  retryDelay: 1000 - 30000, // ms,
  retryOnMount: Boolean(true), // it refetch when component mounts
  select: data => {
    const names = data.filter(d => d.includes('query'));
    return names;
  }, // --> it used for changing data for example if we want change data we got and used already changed one instead of filter or map or do something within jsx
  staleTime: milliseconds, // --> it takes time untill data will be cached and refetced usually used for rarely changed datas

  // initialDataUpdatedAt:5000,
  // isDataEqual,
  // useErrorBoundary,
  // context,
  // behavior,
  // meta,
  // networkMode,
  // notifyOnChangeProps,
    // queryHash,
    // queryKeyHashFn,
    // structuralSharing,
    onSuccess: () => {
      // it is try block of common fetch
    },
    onError: () => {
      // it is сatch block of common fetch
    },
    onSettled: () => {
      // it is finally block of common fetch
    },
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
