import React, { useState } from 'react';
import useCustomHookRQ from './hooks/useCustomHookRQ';

const List = () => {
  const [allowed, setAllowed] = useState(false);

  const { data, isLoading, isError, isFetching, error, refetch } =
    useCustomHookRQ('heroesOnClick', false);

  console.log(data);

  if (isLoading) {
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
    <div className="p-4 bg-yellow-300 mt-3">
      <button
        onClick={() => setAllowed(true)}
        className="block bg-green-400 p-2 rounded-xl mb-3 "
      >
        Refresh Data
      </button>
      {data?.map(heroName => {
        return (
          <div
            className="bg-gray-300 border-black border-2 mb-3 p-3 rounded-lg"
            key={heroName}
          >
            {heroName}
          </div>
        );
      })}
    </div>
  );
};

export default List;
