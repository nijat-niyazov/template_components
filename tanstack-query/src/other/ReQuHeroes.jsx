import { useQuery } from '@tanstack/react-query';
import { fetchHeroes } from './api';

const ReQuHeroes = () => {
  const { data, isError, isLoading, error, isFetching, refetch } = useQuery({
    
    /**
     * ? isLoading becomes true when it uses new updated Data instead of cached data
     * ? data is resolve returned from promise
     * ? isError checks if there is an error or not
     * ? error returns error message
     * ? isFetching is becomes true on each request
     * ? refetch  makes enabled false which is prevent fetching data. used for fetchin data for example by clicking on button and it's a function and if't it's attached to any button it won't update data
     */

    queryKey: ['heroes'],
    queryFn: fetchHeroes,

    cacheTime: 5000,
    /**
     * * clear cache after 5secs leaving page
     */

    // staleTime:10000 //
    /**
     * * it says that after 10 seconds it will show kohne data and isFethcing also be false
     */

    // refetchOnMount: true, // it wont't refetch but it's recommended to use true
    /**
     * * it wont't re-fetch when componetn is mount if it set to false but it's recommended to use true
     */

    // refetchOnWindowFocus: true, //
    /**
     * * it will re-fetch user is focused on window or we can say integrated again with app
     */

    // refetchInterval: 2000,
    /**
     * * for example we need real time data then it will re-fetch it within  each 2 seconds and it must lose its magic when user loose focus on window focus but it doesn't
     */

    // refetchIntervalInBackground: true,
    // enabled: false, //
    /**
     * *  we set it when we don't want get data on mount of component. for example we want it set base on click button which is attached to re-fetch
     */
  });

  console.log({ isLoading, isFetching });

  if (isLoading || isFetching) {
    // isLoading becomes true when it fetches new updated Data isntedf of using cache
    return (
      <h2 className="bg-yellow-300 text-center p-4 w-full mt-2 rounded-lg font-bold">
        Loading...
        {/* <button className="block bg-blue-400 p-2" onClick={refetch}>
          Load Data
        </button> */}
      </h2>
    );
  }

  if (isError) {
    return (
      <h2 className="bg-red-700 font-bold rounded-lg text-white p-4 w-full mt-2">
        {error.message}
      </h2>
    );
  }

  return (
    <div className="p-4 bg-pink-300 mt-3">
      {data?.map(hero => {
        return (
          <div
            className="bg-green-300 border-black border-2 mb-3 p-3 rounded-lg"
            key={hero.id}
          >
            {hero.name}
          </div>
        );
      })}
    </div>
  );
};

export default ReQuHeroes;
