import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchCountryById } from '../api';

const useCountryHook = id => {
  const queryClient = useQueryClient();
  // client we created on main.jsx which will access to queries on react-query devtolls

  return useQuery({
    queryKey: ['countries', id],
    // id must be attached to key for indiviudal query

    // queryFn: () => fetchSignelHeroeById(id),

    queryFn: fetchCountryById,
    /*
     * useQuery automatically send 3 arguments to function. ({queryKey,meta,page}) that's why we will use in fetched function queryKey[1] which is from array of arguments will be id.
     */

    initialData: () => {
      const city = queryClient
        .getQueryData(['citiesOnMount'])
        /*
         * this key must be eqaul to key in react querydevtool queryKey we want to getData of
         */
        ?.find(hero => hero.id === parseInt(id));
      return city ? city : undefined;
    },

    /*
     * Initial data will be represented instead of loading. Instead of seing loading we will see initialData that we send from initialData return, untill fetched is completed and on mount of component fetched data is will be updated and it will be seen in UI. For example we have cities data but it doesn't contain all info about one. When we click it will start with initialValues we send to DetailsPage and because of Details page has its own query and when fetched is  completed and get new data of its own query on details page it will be replaced with initialData.
     */
  });
};

export default useCountryHook;
