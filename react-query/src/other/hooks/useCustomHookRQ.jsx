import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchCities, postNewCity } from '../api';

export const useCitiesHookRQ = () => {
  return useQuery({
    queryKey: ['cities'],
    queryFn: fetchCities,
    staleTime: 10 * 2 * 1000,
  });
};

// export const useCustomHookRQ = (query, booelan = true) => {
//   return useQuery({
//     queryKey: [query],
//     queryFn: fetchCities,
//     enabled: booelan,

//     // refetchOnMount: false,
//     // select: data => {
//     //   const names = data.map(hero => hero.name);
//     //   return names;
//     // },
//   });
// };

export const useCustomAddCity = () => {
  return useMutation({
    mutationFn: postNewCity,
  });
};
