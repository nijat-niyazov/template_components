import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { convertCurrency } from '../utils/currencyConverter';

const Product = ({ product }, ref) => {
  return (
    <article
      className="bg-gray grid gap-4 p-4 text-white dark:text-black dark:bg-light_gray rounded-lg transition-colors duration-300"
      ref={ref}
    >
      <Link className="z-10" to={'/products/' + product.id}>
        <img
          className="w-full h-40 rounded-lg"
          src={product.thumbnail}
          alt="product_img"
        />
        <div className="grid gap-4">
          <p className="text-[16px] font-bold dark:text-black">
            {product.id}. {product.title}{' '}
            <span className="ml-auto font-extralight">
              Brand of {product.brand}
            </span>
          </p>
          <span className="font-semibold">
            {convertCurrency(product.price)} |
          </span>
          <span className="dark:bg-blue bg-aqua italic  p-2 w-auto rounded-lg text-gray-100">
            Remains: {product.stock}
          </span>
          <div className="flex items-center justify-between">
            <span className="text-[10px] tracking-tight">⭐⭐⭐⭐⭐</span>
            <span className="text-[14px]">86.5K sold</span>
          </div>
          <span className="tracking-tight text-[14px]">
            Free returns in USA
          </span>
          <span className=" text-sm">Comment: 7.4k</span>
        </div>
      </Link>
    </article>
  );
};

export default forwardRef(Product);

// {admin && (
//   <section className="flex items-center justify-around ">
//     <button
//       type="button"
//       onClick={openModal}
//       className=" z-20 px-6 py-2 w-1/3 text-xl font-bold bg-green-400 rounded-xl  transit duration-300 hover:bg-green-600"
//     >
//       Edit
//     </button>
//     {isOpen && (
//       <Modal isOpen={isOpen} closeModal={closeModal} product={product} />
//     )}
//     <button className="px-6 z-20 py-2 w-1/3 text-xl font-bold bg-red rounded-xl  transit duration-300 hover:bg-hoverRed">
//       Delete
//     </button>
//   </section>
// )}
