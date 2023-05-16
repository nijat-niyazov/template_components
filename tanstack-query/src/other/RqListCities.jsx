import { useState } from 'react';
import { Link } from 'react-router-dom';
import useCustomHookRQ from './hooks/useCustomHookRQ';

const RqListCities = () => {
  const [duration, setDuration] = useState(2000);

  // console.log(Boolean(length === 4));

  // const {
  //   data,
  //   isError,
  //   isLoading,
  //   error,
  //   isFetching,
  //   refetch,
  //   isInitialLoading,
  // } = useQuery({
  //   /**
  //    * ? data is resolve returned from promise
  //    * ? isError checks if there is an error or not
  //    * ? error returns error message
  //    * ? isLoading becomes true when it has no query or it uses new updated Data instead of cached data
  //    * ? isFetching is becomes true on each fetching on react query devtools or network request
  //    * ? refetch  makes enabled false which is prevent fetching data. used for fetchin data for example by clicking on button and it's a function and if't it's attached to any button it won't update data
  //    */

  //   queryKey: ['heroes'],
  //   queryFn: fetchHeroes,

  //   // cacheTime: 5000,
  //   /*
  //    * clear query after 5secs leaving page, while is cached data exist isLoading will be false but it will be fetched in background to update changed info, usually used for often changed data to update info in background
  //    */

  //   // staleTime: 15000,
  //   /*
  //    * it prevents re-fetching after first fetch for 15 seconds. For example in cached value we fetch and change current with updated data  because in each component mount it fetches data in background. but with stale(fresh) first we fetch then it prevents from again request or fetch for 20 secs.  If data has changed on 10sec we need to wait it be stale(cached) and when on component mount it will fetching and we will see updated data. And cycle will go like that. It doesn't matter if we lose focus on mounted component. for example within 15 seconds we can navigate to another page and it won't intterrupt 15 seconds. usually used for not often changed data
  //    */

  //   // refetchOnMount: true,
  //   /*
  //    * it wont't re-fetch when component is mount if it set to false but it's recommended to use true
  //    */

  //   // refetchOnWindowFocus: true,
  //   /*
  //    * it will re-fetch user is focused on window or integrated again with app.. in usual way fetching data in react it has refetchOnWindowFocus
  //    */

  //   // refetchInterval: duration,
  //   // refetchInterval: 3000,
  //   /*
  //    * for example we need real time data then it will re-fetch it within  each givin seconds if it false it won't re-fetch
  //    */

  //   // refetchIntervalInBackground: true,
  //   /*
  //    ? refecth may loose not re-fetch if user loose focus on window actually it doesn't
  //    */

  //   enabled: false,
  //   /*
  //    *  we set it when we don't want get data on mount of component. for example we want it set base on click button which is attached to re-fetch
  //    */

  //   // onSuccess: data => {
  //   //   data.length === 4 && setDuration(false);
  //   // },
  //   /*
  //    * do anything while fetched succesfully
  //    */

  //   // onError: err => {
  //   //   console.log(err);
  //   //   setDuration(false);
  //   // },
  //   /**
  //    * * do anything while fetched error
  //    */

  //   select: data => {
  //     const names = data.map(hero => hero.name);
  //     return names;
  //   },
  //   /*
  //    *  This allow to us working on already changed data within query for example we need only names and in the end have to return what we want as data
  //    */
  // });

  // const onSuccess = data => {
  //   console.log('yes', data);
  // };
  // const onError = error => {
  //   console.log('false', error);
  // };

  const { data, isLoading, isError, error, refetch, isFetching } =
    useCustomHookRQ('citiesOnMount');

  console.log({ isLoading, isFetching });

  if (isLoading) {
    // isLoading becomes true when it fetches new updated Data isntedf of using cache
    return (
      <h2 className="bg-yellow-300 text-center p-4 w-full mt-2 rounded-lg font-bold">
        Loading...
        <button className="block bg-blue-400 p-2" onClick={refetch}>
          Load Data
        </button>
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
      <button
        className="block bg-blue-400 p-2 rounded-xl mb-3 "
        onClick={refetch}
      >
        Refresh Data
      </button>
      <div className="flex flex-col gap-[20px]">
        {data?.map(city => {
          return (
            // <div
            //   className="bg-green-300 border-black border-2 mb-3 p-3 rounded-lg"
            //   key={heroName}
            // >
            //   {heroName}
            // </div>
            <Link
              to={`/rq_cities/${city.id}`}
              className="bg-green-300 border-black border-2 mb-3 p-3 rounded-lg"
              key={city.id}
            >
              {city.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RqListCities;
