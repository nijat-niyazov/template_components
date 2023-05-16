import { useQuery } from '@tanstack/react-query';
import { fetchCities } from '../api';

const useListQuery = () => {
  return useQuery({
    queryKey: ['lists'],
    queryFn: fetchCities,
    select: data => {
      const names = data.map(hero => hero.name);
      return names;
    },
  });
};

export default useListQuery;
