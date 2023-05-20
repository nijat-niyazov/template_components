import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductsByCategory } from '../api/mainApi';

const Categorized = () => {
  const { category } = useParams();

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ['category', category],
    queryFn: fetchProductsByCategory,
    enabled: !!category,
    // select: data => {
    //   const cats = data.map(product => product.category);
    //   return cats;
    // },
  });

  console.log(data);


  return <div>Categorized</div>;
};

export default Categorized;
