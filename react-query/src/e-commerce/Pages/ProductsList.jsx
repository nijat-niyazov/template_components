import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchProductsWithURL } from '../api/mainApi';
import Product from '../components/Product';
import SearchInput from '../components/SearchInput';

const ProductsList = ({ admin }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('q') ?? '');
  const [pageNum, setPageNum] = useState(searchParams.get('_page') ?? 1);
  const [category, setCategory] = useState(searchParams.get('category') ?? '');
  const [debounced, setDebounced] = useState(search || '');

  useEffect(() => {
    if (search) {
      searchParams.set('q', search);
    }
    if (category) {
      searchParams.set('category', category);
    }
    if (pageNum > 1) {
      searchParams.set('_page', pageNum);
      if (search) searchParams.delete('_page');
    }

    setSearchParams(searchParams);
  }, [search, category, pageNum]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(search);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const { data, isError, error, isLoading, isFetching } = useQuery({
    queryKey: ['productsForQuery', debounced, pageNum, category],
    queryFn: fetchProductsWithURL,
    staleTime: 6 * 60 * 1000,

    // staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
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
      <SearchInput search={search} setSearch={setSearch} />

      <div className="flex items-center w-1/2 m-auto mt-4 justify-between text-black ">
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
      </div>
      {!search && (
        <section className="flex gap-3 m-auto w-1/5 mt-5">
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
        </section>
      )}
      <button
        onClick={() => {
          setSearch('');
          setCategory('');
          const newUrl = new URLSearchParams();
          setSearchParams(newUrl);
        }}
        className=" mt-4 font-extralight italic rounded-lg text-white m-auto w-1/2 block bg-red p-2"
      >
        RESET FILTERS
      </button>
      <section className="grid gap-5 p-4 md:grid-cols-3">
        {data?.map(product => (
          <Product admin={admin} key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default ProductsList;
