import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Product from '../components/Product';
import useInterObserver from './useInterObserver';

let totalPages = 0;

export const setTotalPages = totalPageNums => (totalPages = totalPageNums);

const InfinitedEffect = () => {
  const [pageNum, setPageNum] = useState(1);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.1,
  });

  const { products, isLoading, hasNextPage } = useInterObserver(pageNum);

  useEffect(() => {
    if (inView && hasNextPage) {
      setPageNum(p => p + 1);
    }
  }, [inView]);

  return (
    <div>
      <section className="grid grid-cols-2 gap-5 p-4 md:grid-cols-3">
        {products?.map((product, i) => {
          return i + 1 === products.length ? (
            <Product product={product} ref={ref} key={product.id} />
          ) : (
            <Product product={product} key={product.id} />
          );
        })}
      </section>
      {isLoading && (
        <p className="block p-4 text-center text-2xl bg-aqua rounded-md m-2">
          Loading...
        </p>
      )}
    </div>
  );
};

export default InfinitedEffect;
