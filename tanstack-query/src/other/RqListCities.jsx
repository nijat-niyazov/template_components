import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteCity, postNewCity, updateCity } from './api';
import { useCustomHookRQ } from './hooks/useCustomHookRQ';

const RqListCities = () => {
  const [name, setName] = useState('');
  const [capital, setCapital] = useState('');

  const { data, isLoading, isError, error, refetch, isFetching } =
    useCustomHookRQ('citiesOnMount');

  // console.log({ isLoading, isFetching });

  // const { mutate } = useCustomAddCity();
  // /*
  // */

  const queryClient = useQueryClient();
  // this is client we created on main.jsx

  const addNewCity = useMutation({
    mutationFn: postNewCity,

    onSuccess: ({ data }) => {
      // // 1.# ✅ we adding new city and then refetch changed data
      // queryClient.invalidateQueries('cities');
      /*
      * This invalidates query and it makes react query refetch in background again for that query
      ! this query must be same with fetched query or with query of data we got
       */

      console.log(data);

      queryClient.setQueryData(['cities'], oldQueryDataInDevTools => {
        /*
         * setQueryData updates query cache
         */

        return [data, ...oldQueryDataInDevTools];
        /*
         * and returned data of this function will be setted to query
         */
      });

      setCapital('');
      setName('');
    },
  });

  const deleteAddedCity = useMutation({
    mutationFn: data => {
      console.log(data);
      return deleteCity(data);
    },

    onMutate: data => {
      console.log(data);
      queryClient.setQueryData(['cities'], oldQueryDataInDevTools => {
        return oldQueryDataInDevTools.filter(city => city.id !== data);
      });
    },
    onSuccess: ({ data }) => {
      console.log(data);
    },
    onError: ({ data }) => {
      console.log(data);
    },
    //   // 1.# ✅
    //   // queryClient.invalidateQueries('cities');

    //   queryClient.setQueryData(['cities'], oldQueryDataInDevCache => {
    //     // console.log(oldQueryDataInDevCache, data);
    //   });
    // },
  });

  const updateCityQuery = useMutation({
    mutationFn: data => {
      console.log(data);
      return updateCity(data);
    },
    onSuccess: data => {
      console.log(data);
      // queryClient.setQueryData(['cities', { id: 6 }], data);
    },
  });

  const updateBtn = id => {
    updateCityQuery.mutate({
      id: id,
      name: 'Updated City',
    });
  };

  // const { data: city, error: cityError } = useQuery({
  //   queryKey: ['city', 6],
  //   queryFn: () => fetchCityById(6),
  // });

  // const deleteAddedCity = useMutation(deleteCity, {
  //   onSuccess: data => {
  //     console.log(data);

  //     queryClient.setQueryData(['cities'], oldQueryDataInDevCache => {
  //       // console.log(oldQueryDataInDevCache, data);
  //     });
  //   },
  // });

  // ============= EVENTS   ==============

  const handleSubmit = e => {
    e.preventDefault();
    const city = { name, id: capital };

    addNewCity.mutate(city);
    // ! This mutate sends data to api because of mutationFN of addNewCity
  };

  const handleDelete = id => {
    deleteAddedCity.mutate({ id });
  };

  return (
    <div className="p-4 bg-pink-300 mt-3">
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
        <label htmlFor="">ID</label>
        <input
          className="m-4 rounded-lg p-2"
          type="text"
          value={capital}
          onChange={e => setCapital(parseInt(e.target.value))}
        />
        <button className="bg-green-300 p-2">Add</button>
      </form>

      <div className="flex flex-col gap-[20px]">
        <button className="block bg-blue-400 p-2" onClick={refetch}>
          Load Data
        </button>
        {data?.map(city => {
          return (
            <Link
              // to={`/rq_cities/${city.id}`}
              className="bg-green-300 flex justify-between items-center first-letter: border-black border-2 mb-3 p-3 rounded-lg "
              key={city.id}
            >
              <span>
                {city.id}. {city.name}
              </span>
              <button
                onClick={() => handleDelete(city.id)}
                className="bg-red-300 px-4 py-2 rounded-lg hover:bg-red-400"
              >
                Delete
              </button>
              <button
                onClick={() => updateBtn(city.id)}
                className="bg-yellow-300 px-4 py-2 rounded-lg hover:bg-red-400"
              >
                Update
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RqListCities;
