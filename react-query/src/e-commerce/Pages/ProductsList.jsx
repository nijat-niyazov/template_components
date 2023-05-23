import { useQuery } from '@tanstack/react-query';
import { fetchAllProducts } from '../api/mainApi';
import Product from '../components/Product';

const ProductsList = ({ admin }) => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['allProducts'],
    queryFn: fetchAllProducts,
    staleTime: 6 * 60 * 1000,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2> {error.message}</h2>;
  }

  return (
    <div>
      <h2 className="text-center font-bold text-[50px] dark:text-blue-300">
        All Products
      </h2>
      <section className="grid gap-5 p-4 md:grid-cols-3">
        {data?.map(product => (
          <Product admin={admin} key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default ProductsList;
