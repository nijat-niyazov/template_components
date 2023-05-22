import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { convertCurrency } from '../utils/currencyConverter';

const Product = ({ product }, ref) => {
  return (
    <Link
      className="bg-gray-300 grid gap-4 px-4 py-2 rounded-lg"
      ref={ref}
      to={'/products/' + product.id}
    >
      <img
        className="w-full h-40 rounded-lg"
        src={product.thumbnail}
        alt="product_img"
      />
      <div className="grid gap-4">
        <p className="text-[16px] font-bold">
          {product.id}. {product.title}
        </p>
        <span className="font-semibold">
          {convertCurrency(product.price)} |
        </span>

        <span className="bg-blue-300 italic  p-2 w-auto rounded-lg text-gray-100">
          Remains: {product.stock}
        </span>

        <div className="flex items-center justify-between">
          <span className="text-[10px] tracking-tight">⭐⭐⭐⭐⭐</span>
          <span className="text-[14px]">86.5K sold</span>
        </div>

        <span className="text-gray-700 tracking-tight text-[14px]">
          Free returns in USA
        </span>

        <span className="text-gray-700 text-sm">Comment: 7.4k</span>
      </div>
    </Link>
  );
};

export default forwardRef(Product);
