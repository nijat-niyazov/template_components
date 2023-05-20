import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { fetchAllProducts } from './api/mainApi';

const ProductsList = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: fetchAllProducts,
  });

  if (isLoading) {
    <h2>Loading...</h2>;
  }

  if (isError) {
    <h2> {error.message}</h2>;
  }

  let formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="">
      <h2 className="text-center font-bold text-[50px]">All Products</h2>
      <section className="grid gap-5 p-4 md:grid-cols-3">
        {data?.map(prod => {
          return (
            <article
              className="bg-amber-400 grid gap-4 px-4 py-2 rounded-lg"
              key={prod.id}
            >
              <Link to={'/products/' + prod.id}>
                <div className="flex items-start justify-between">
                  <p className="text-[25px] font-semibold">
                    {prod.id}. {prod.title}
                  </p>
                  <img
                    className="w-40 h-20 rounded-lg"
                    src={prod.thumbnail}
                    alt="product_img"
                  />
                </div>
                <div className="flex items-center justify-between ">
                  <span className="bg-blue-300 italic  p-2 w-auto rounded-lg text-gray-100">
                    Remains: {prod.stock}
                  </span>
                  <span className="font-bold">
                    {formattedPrice.format(prod.price)}
                  </span>
                </div>
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default ProductsList;
