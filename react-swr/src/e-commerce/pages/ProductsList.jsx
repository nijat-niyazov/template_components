import { useState } from 'react';
import useSWR from 'swr';
import { endPoint as cacheKey, fetchProducts } from '../api/api';
import Product from '../components/Product';
// import SearchInput from '../components/SearchInput';

const ProductsList = ({ admin }) => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [pageNum, setPageNum] = useState(1);
  const [category, setCategory] = useState('');

  const list = []


  const {
    data: products,
    error,
    isLoading,
    isValidating,
  } = useSWR(cacheKey, fetchProducts);

  console.log(products);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h2 className="text-center font-bold text-[50px] dark:text-blue-300">
        All Products
      </h2>
      {/* <SearchInput search={search} setSearch={setSearch} /> */}

      {/* <div className="flex items-center w-1/2 m-auto mt-4 justify-between text-black ">
        <button
          className="bg-light_gray p-2 font-bold rounded-xl"
          onClick={e => setCategory(e.currentTarget.innerHTML)}
          value={category}
        >
          smartphones
        </button>
        <button
          className="bg-light_gray p-2 font-bold rounded-xl"
          onClick={e => setCategory(e.currentTarget.innerHTML)}
          value={category}
        >
          laptops
        </button>
        <button
          onClick={e => setCategory(e.currentTarget.innerHTML)}
          className="bg-light_gray p-2 font-bold rounded-xl"
        >
          fragrances
        </button>
      </div> */}
      {/* <section className="flex gap-3 m-auto w-1/5 mt-5">
        <button
          disabled={pageNum === 1}
          onClick={() => setPageNum(p => p - 1)}
          className="bg-red p-2 rounded-xl font-bold text-white disabled:opacity-50"
        >
          Prev Page
        </button>
        <button
          disabled={pageNum === 8}
          onClick={() => setPageNum(p => p + 1)}
          className="bg-blue p-2 rounded-xl font-bold text-white disabled:opacity-50"
        >
          Next Page
        </button>
      </section> */}
      {/* <button className=" mt-4 font-extralight italic rounded-lg text-white m-auto w-1/2 block bg-red p-2">
        RESET FILTERS
      </button> */}
      <section className="grid gap-5 p-4 md:grid-cols-3">
        {products?.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default ProductsList;
