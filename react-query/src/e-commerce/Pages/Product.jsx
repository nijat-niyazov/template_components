import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useProductHook from '../hooks/useProductHook';

const Product = () => {
  const { id } = useParams();

  console.log(id);

  const { data, isLoading, isError, error } = useProductHook(id);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    data && (
      <article className="w-[90%] m-auto">
        <p>
          This is {data.title} and brand of {data.brand}
          <Link
            className="underline italic blue block "
            to={`/category/${data.category}`}
          >
            {data.category}
          </Link>
        </p>
      </article>
    )
  );
};

export default Product;
