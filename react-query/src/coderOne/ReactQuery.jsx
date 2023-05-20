import { useQuery } from 'react-query';
import ProductItem from './Product';
import { fetchProducts } from './fetchers';

const ReactQuery = () => {
  console.log('first render');

  const {
    isError,
    isSuccess,
    isLoading,
    data: products,
    error,
  } = useQuery(
    ['products'], // unique key
    fetchProducts, // fetch function
    // { staleTime: 3000 } // caching time
  );

  // useEffect(() => {
  //   console.log('useeffect');
  // }, []);

  if (isLoading) {
    console.log('Loading...');
    return <div>Loading...</div>;
  }

  if (isError) {
    console.log('Error: ', error);
    return <div>Error...</div>;
  }

  return (
    <div className="w-full h-full flex gap-x-8 gap-y-10 ml-0 flex-wrap items-center justify-center">
      {products &&
        products.map(product => (
          // console.log(product)
          <ProductItem key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ReactQuery;
