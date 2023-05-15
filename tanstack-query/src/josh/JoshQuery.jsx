import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { mainApi } from '../Components/api';

const JoshQuery = () => {
  console.log('okay');
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      await delay(2000);
      const { data } = mainApi.get('/todos');
      console.log(data);
      return data;
    },
  });

  return <div>{isLoading ? <h2>Loading...</h2> : JSON.stringify(data)}</div>;
};

export default JoshQuery;
