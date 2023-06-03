const CompareSelector = () => {
  // const navigate = useNavigate();
  // const ids = useSelector(idds);
  // const { isLoading, isError, error, data } = useQuery({
  //   queryKey: ['compared'],
  //   queryFn: fetchAllProducts,
  //   staleTime: 6 * 60 * 1000,
  // });
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (ids.length === 2) {
  //     navigate('/compared');
  //   }
  // }, [ids]);
  // if (isLoading) {
  //   return <h2>Loading...</h2>;
  // }
  // if (isError) {
  //   return <h2> {error.message}</h2>;
  // }
  // const selectForCompare = (e, id) => {
  //   if (e.ctrlKey) {
  //     if (!ids.includes(id)) {
  //       e.currentTarget.classList.add('opacity-50');
  //       dispatch(selectIds(id));
  //     } else {
  //       alert('You have already selected this element.');
  //     }
  //   } else {
  //     alert('Please click with the Ctrl key.');
  //   }
  // };
  // return (
  //   <div>
  //     <h2 className="text-center font-bold text-amber-500 text-[25px]">
  //       Click ctrl+click to select products for comparing
  //     </h2>
  //     <section className="grid gap-5 p-4 grid-cols-2 md:grid-cols-3">
  //       {data?.map(product => (
  //         <article
  //           onClick={e => selectForCompare(e, product.id)}
  //           key={product.id}
  //           className="bg-gray-300 grid gap-4 px-4 py-2 rounded-lg transition-opacity duration-300"
  //         >
  //           <img
  //             className="w-full h-40 rounded-lg"
  //             src={product.thumbnail}
  //             alt="product_img"
  //           />
  //           <div className="grid gap-4">
  //             <p className="text-[16px] font-bold">
  //               {product.id}. {product.title}
  //             </p>
  //             <span className="font-semibold">
  //               {convertCurrency(product.price)} |
  //             </span>
  //             <span className="bg-blue-300 italic  p-2 w-auto rounded-lg text-gray-100">
  //               Remains: {product.stock}
  //             </span>
  //             <div className="flex items-center justify-between">
  //               <span className="text-[10px] tracking-tight">⭐⭐⭐⭐⭐</span>
  //               <span className="text-[14px]">86.5K sold</span>
  //             </div>
  //             <span className="text-gray-700 tracking-tight text-[14px]">
  //               Free returns in USA
  //             </span>
  //             <span className="text-gray-700 text-sm">Comment: 7.4k</span>
  //           </div>
  //         </article>
  //       ))}
  //     </section>
  //   </div>
  // );
};

export default CompareSelector;
