import { useQuery } from '@tanstack/react-query';
import { fetchCities } from '../api';

export const useCustomHookRQ = (query, booelan = true) => {
  
  return useQuery({
    queryKey: [query],
    queryFn: fetchCities,
    enabled: booelan,

    // refetchOnMount: false,
    // select: data => {
    //   const names = data.map(hero => hero.name);
    //   return names;
    // },
    
  });
};

export default useCustomHookRQ;
