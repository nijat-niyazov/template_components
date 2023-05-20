import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchCountryById } from '../api';

const useCountryHook = id => {
  const queryClient = useQueryClient();
  // client we created on main.jsx which will access to queries on react-query devtolls

  return useQuery({
    queryKey: ['country', id],
    /*
    ! ID must be attached to key for indiviudal query
    */

    // queryFn: () => fetchSignelHeroeById(id),

    queryFn: fetchCountryById,
    /*
     * useQuery automatically send 3 arguments to function. ({queryKey,meta,pageParam}) that's why we will use in fetched function queryKey[1] which is from array of arguments will be id.
     */

    // initialData:  {
    //    capitalOf: 'Secret',
    //   name: 'We are excited too',
    // },

    initialData: () => {
      /*
       * Initial data will be represented instead of loading. Instead of seing loading we will see initialData that we send from initialData return, untill fetched is completed and on mount of component fetched data is will be updated and it will be seen in UI. For example we have cities data but it doesn't contain all info about one. When we click it will start with initialValues we send to DetailsPage and because of Details page has its own query and when fetched is  completed and get new data of its own query on details page it will be replaced with initialData.
       */
      const city = queryClient
        .getQueryData(['cities'])
        /*
         * this key must be eqaul to key in react querydevtool queryKey we want to getData of and this data will be displayed if error occured in details page. Showing initialData differs it from placeHolder data because placeHolder data will be gone even if error occured.
         */
        ?.find(hero => hero.id === parseInt(id));
      return city ? city : undefined;
    },

    // staleTime: 1000,
    // initialDataUpdatedAt: () => Date.now(),
    placeholderData: () => {
      const city = queryClient
        .getQueryData(['cities'])
        /*
         * It's similar to placeHolderData but it will act differently on error occuring. PlaceHolderData will be gone if error is occured but initialData will be displayed.
         */

        ?.find(hero => hero.id === parseInt(id));
      return city ? city : undefined;
    },

    // 2.# ✅
    placeholderData: {
      /*
       * placeHolder can be used for showing ui till new data is fetched.
       */

      capitalOf: 'Secret',
      name: 'We are excited too',
    },
  });
};

export default useCountryHook;

// const [duration, setDuration] = useState(2000);

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
