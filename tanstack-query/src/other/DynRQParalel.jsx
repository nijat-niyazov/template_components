import { useQueries } from '@tanstack/react-query';
import { fetchCountryById } from './api';

const DynRQParalel = ({ cityIdies }) => {
   /*
   ? This might be usefull \ in scenario where we select array of multiple elements and want to maybe compare them. So we select an array and this array will return its own queryKey and function 
   */

  let queryResults = useQueries({
    queries: cityIdies?.map(id => {
      return {
        queryKey: ['city', id],
        queryFn: fetchCountryById,
      };
    }),
  });

  return (
    <div className="flex justify-between items-center w-1/2 m-auto bg-yellow-300 p-2 ">
      {queryResults.map(result => {
        return (
          <article className="border-black border-2 p-4" key={result.data.id}>
            {result.data.name}
          </article>
        );
      })}
    </div>
  );
};

export default DynRQParalel;
