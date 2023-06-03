import { useState } from 'react';

const Infinitive = () => {
  const [pageNum, setpageNum] = useState(1);

  // const { ref, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: 0.3,
  // });

  // const {
  //   data: products,
  //   isLoading,
  //   error,
  //   isValidating,
  // } = useSWR(cacheKey + pageNum, fetchProductsWithInfinitiveScroll);

  // useEffect(() => {
  //   if (inView) setpageNum(p => p + 1);
  // }, [inView]);

  // console.log(isLoading, isValidating);

  // const lastPostId = products?.at(-1).id;

  // return (
  //   <div>
  //     <section className="grid grid-cols-2 gap-5 p-4 md:grid-cols-3">
  //       {products?.map(product => {
  //         return product.id === lastPostId ? (
  //           <Product ref={ref} product={product} key={product.id} />
  //         ) : (
  //           <Product product={product} key={product.id} />
  //         );
  //       })}
  //     </section>
  //     {/* {hasNextPage ? (
  //       <button
  //         disabled={isFetchingNextPage}
  //         onClick={fetchNextPage}
  //         className="bg-green-600 w-[90%] m-4 p-2 block font-bold disabled:opacity-50"
  //       >
  //         Load More...
  //       </button>
  //     ) : (
  //       <h2 className="text-xl bg-amber-400 text-center w-1/3 m-auto p-4 font-bold rounded-xl my-5">
  //         That's all
  //       </h2>
  //     )} */}
  //   </div>
  // );
};

export default Infinitive;
