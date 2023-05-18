import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { postNewCity } from './api';
import { useCitiesHookRQ } from './hooks/useCustomHookRQ';

const RqListCities = () => {
  const [name, setName] = useState('');
  const [capital, setCapital] = useState('');

  const { data, isLoading, isError, error, refetch } =
    useCitiesHookRQ('citiesOnMount');

  const queryClient = useQueryClient();
  // this is client we created on main.jsx

  const addNewCity = useMutation({
    // onSuccess: ({ data }) => {
    //   // // #1. ✅ we adding new city and then refetch changed data
    //   // queryClient.invalidateQueries('cities');
    //   /*
    //   * This invalidates query and it makes react query refetch in background again for that query
    //   ! this query must be same with fetched query or with query of data we got
    //    */

    //   // console.log(data);

    //   queryClient.setQueryData(['cities'], oldQueryDataInDevTools => {
    //     /*
    //      * setQueryData updates query cache
    //      */

    //     return [data, ...oldQueryDataInDevTools];
    //     /*
    //      * and returned data of this function will be setted to query
    //      */
    //   });

    //   setCapital('');
    //   setName('');
    // },
    /*
     * First way of adding ⤴
     */

    mutationFn: postNewCity,
    onMutate: async city => {
      await queryClient.cancelQueries(['cities']);
      /*
      ! it has to be async and awaited
       * Firstly we cancel any potential refetches with cities to be sure they don't overwrite our optimistic update, which means cancel all fetch request on our given query while mutation is going.. write this code because we want to keep previousData before make any update, it will help to roll back our data in case of mutation fails
       */

      const { capital, name } = city;

      const previousData = queryClient.getQueryData(['cities']);
      /*
      ! This has to be written before updating because we want to keep previousData before updating in case of mutation fails 
      */

      queryClient.setQueryData(['cities'], oldDataValuesOnDevTools => {
        return [
          { id: oldDataValuesOnDevTools.length + 1, capital, name },
          ...oldDataValuesOnDevTools,
        ];
      });
      /*
       * We've updated our list with adding new one and joined other spreaded components
       */

      return {
        previousData,
      };
      /*
         ! This has to be written because we need to reach this data onError if  any problem on update happened or mutation failed 
         */
    },
    onError: (_error, _city, context) => {
      queryClient.setQueryData(['cities'], context.previousData);
    },
    onSettled: () => {
      queryClient.invalidateQueries('cities');
      setCapital('');
      setName('');
    },
  });

  const deleteAddedCity = useMutation({
    mutationFn: deleteCity,
    onMutate: async id => {
      await queryClient.cancelQueries(['cities']);
      const prevData = queryClient.getQueryData(['cities']);

      queryClient.setQueryData(['cities'], oldDataValuesOnDevTools => {
        return oldDataValuesOnDevTools.filter(city => city.id !== id);
      });
      return {
        prevData,
      };
    },

    onError: (_error, _id, context) => {
      queryClient.setQueryData(['cities'], context.prevData);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['cities']);
    },
  });

  const updateCityQuery = useMutation({
    mutationFn: updateCity,

    onMutate: async data => {
      await queryClient.cancelQueries(['cities']);
      console.log(data);

      const prevData = queryClient.getQueryData(['cities']);

      queryClient.setQueryData(['cities'], oldDataValuesOnDevTools => {
        console.log(oldDataValuesOnDevTools);
        const updatedIndex = oldDataValuesOnDevTools.findIndex(
          city => city.id === data.id
        );

        oldDataValuesOnDevTools.splice(updatedIndex, 1, data);
        console.log(updatedIndex, oldDataValuesOnDevTools);
      });

      return {
        prevData,
      };
    },
    onError: (_error, _data, context) => {
      queryClient.setQueryData(['cities'], context.prevData);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['cities']);
    },
  });

  // ============= EVENTS   ==============

  const handleSubmit = e => {
    e.preventDefault();
    const city = { name, capital };

    addNewCity.mutate(city);
    // ! This mutate sends data to api because of mutationFN of addNewCity
  };

  const handleDelete = id => {
    deleteAddedCity.mutate(id);
  };

  const handleUpdate = id => {
    const city = { name: 'paris', capital: 'france', id };
    updateCityQuery.mutate(city);
  };

  return (
    <div className="p-4 bg-pink-300 mt-3 rounded-lg">
      {isLoading && (
        <h2 className="bg-yellow-300 text-center p-4 w-full mt-2 rounded-lg font-bold">
          Loading...
          <button className="block bg-blue-400 p-2" onClick={refetch}>
            Load Data
          </button>
        </h2>
      )}

      {isError && (
        <h2 className="bg-red-700 font-bold rounded-lg text-white p-4 w-full mt-2">
          {error.message}
        </h2>
      )}

      <form onSubmit={handleSubmit}>
        <label htmlFor="">City</label>
        <input
          className="m-4 rounded-lg p-2"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="">Capital Of</label>
        <input
          className="m-4 rounded-lg p-2"
          type="text"
          value={capital}
          onChange={e => setCapital(e.target.value)}
        />
        <button className="bg-green-300 p-2">Add</button>
      </form>

      <button className="block w-full m-3 bg-blue-400 p-2" onClick={refetch}>
        Load Data
      </button>

      <ul className="grid grid-rows-[0fr] gap-[20px] transition-all duration-300">
        {data?.map(city => {
          return (
            <li
              key={city.id}
              className="bg-green-300 flex justify-between items-center first-letter: border-black border-2 mb-3 p-3 rounded-lg"
            >
              <Link className="z-10 w-full" to={`/rq_cities/${city.id}`}>
                {city.id}. {city.name}
              </Link>
              <div className="z-30 flex items-center justify-center">
                <button
                  onClick={() => handleDelete(city.id)}
                  className="bg-red-300 px-4 mr-2 py-2 rounded-lg hover:bg-red-400"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleUpdate(city.id)}
                  className="bg-yellow-300 px-4 py-2 rounded-lg hover:bg-red-400"
                >
                  Update
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RqListCities;
