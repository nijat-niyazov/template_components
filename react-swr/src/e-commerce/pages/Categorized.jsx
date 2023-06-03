import { useParams } from 'react-router-dom';

const Categorized = () => {
  const { category } = useParams();
  // const navigate = useNavigate();
  // const redirector = redirect();

  // console.log(window.history);

  // const { data, isError, error, isLoading } = useQuery({
  //   queryKey: ['category', category],
  //   queryFn: fetchProductsByCategory,
  //   enabled: !!category,
  //   staleTime: 6 * 60 * 1000,

  //   // select: data => {
  //   //   const cats = data.map(product => product.category);
  //   //   return cats;
  //   // },
  // });

  // if (isLoading) {
  //   return <h2>Loading...</h2>;
  // }

  // if (isError) {
  //   return <h2> {error.message}</h2>;
  // }

  // return (
  //   <div className="">
  //     <section className="mb-10">
  //       <button
  //         onClick={() => navigate.goBack()}
  //         to="/products"
  //         className=" bg-blue-800 p-4 text-2xl rounded-lg text-white "
  //       >
  //         Go Back
  //       </button>
  //     </section>
  //     <h2 className="text-center w-[80%] m-auto font-bold md:text-[30px] text-[20px] mb-10">
  //       Products category of
  //       <span className="text-blue-800 "> {category} </span>
  //     </h2>
  //     <section className="grid grid-cols-2 gap-5 p-4 md:grid-cols-3">
  //       {data?.map(prod => {
  //         return (
  //           <Link
  //             className="bg-gray-300 grid gap-4 px-4 py-2 rounded-lg"
  //             key={prod.id}
  //             to={'/products/' + prod.id}
  //           >
  //             <img
  //               className="w-full h-40 rounded-lg"
  //               src={prod.thumbnail}
  //               alt="product_img"
  //             />
  //             <div className="grid gap-4">
  //               <p className="text-[16px] font-bold">{prod.title}</p>
  //               <span className="font-semibold">
  //                 {convertCurrency(prod.price)} |
  //               </span>

  //               <span className="bg-blue-300 italic  p-2 w-auto rounded-lg text-gray-100">
  //                 Remains: {prod.stock}
  //               </span>

  //               <div className="flex items-center justify-between">
  //                 <span className="text-[10px] tracking-tight">⭐⭐⭐⭐⭐</span>
  //                 <span className="text-[14px]">86.5K sold</span>
  //               </div>

  //               <span className="text-gray-700 tracking-tight text-[14px]">
  //                 Free returns in USA
  //               </span>

  //               <span className="text-gray-700 text-sm">Comment: 7.4k</span>
  //             </div>
  //           </Link>
  //         );
  //       })}
  //     </section>
  //   </div>
  // );
};

export default Categorized;
