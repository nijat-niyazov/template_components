import React, { useEffect, useState } from 'react';
import { mainApi } from '../api';

const UseEffectCities = () => {
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      const { data } = await mainApi.get('/heroes');

      setData(data);
      setisLoading(false);
    };

    fetchHeroes();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="p-4 bg-pink-300 mt-3">
      {data?.map(hero => {
        console.log(hero);
        return (
          <div
            className="bg-green-300 border-black border-2 mb-3 p-3 rounded-lg"
            key={hero.id}
          >
            {hero.name}
          </div>
        );
      })}
    </div>
  );
};

export default UseEffectCities;
