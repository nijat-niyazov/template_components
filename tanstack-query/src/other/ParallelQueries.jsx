import { useQuery } from '@tanstack/react-query';
import { fetchCities, fetchCountries } from './api';

const ParallelQueries = () => {
  /*
   ? This used for getting different datas for example we want to fetch when page mounts 2 different datas, for example here we onpageMount loaded countries and cities
   */

  const { data: countries, isLoading: loadingCountries } = useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries,
  });

  const { data: cities, isLoading: loadingCities } = useQuery({
    queryKey: ['cities'],
    queryFn: fetchCities,
  });

  return <div>ParallelQueries</div>;
};

export default ParallelQueries;
