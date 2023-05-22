import { Link, useParams } from 'react-router-dom';
import useProductHook from '../hooks/useProductHook';
import { convertCurrency } from '../utils/currencyConverter';

const ProductDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error, isFetching } = useProductHook(id);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    data && (
      <article className={` ${isFetching && 'opacity-50'} w-[90%] m-auto`}>
        <img
          className="w-full h-40 rounded-lg"
          src={data.thumbnail}
          alt="data_img"
        />
        <div className="grid gap-4">
          <div className="flex m-4 justify-between">
            <p className="text-[25px] font-bold">
              {data.id}. {data.title}
            </p>

            <Link
              to={'/category/' + data.category?.toLowerCase()}
              className="bg-gray-400 p-2  rounded-lg text-white font-bold"
              title="click for seing this brands products"
            >
              Brand Of {data.brand}
            </Link>
          </div>

          <h2 className="text-center text-xl font-extralight ">
            {data.description}
          </h2>

          <div className="flex gap-2 m-auto">
            {data.images?.map((img, i) => (
              <img src={img} key={i} alt="" className="w-30 h-20" />
            ))}
          </div>

          <span className="font-semibold text-xl">
            {convertCurrency(data.price)} |
          </span>

          <span className="bg-blue-300 italic  p-2 w-auto rounded-lg text-gray-100">
            Remains: {data.stock}
          </span>

          <div className="flex items-center justify-between">
            <span className="text-[20px] tracking-tight">
              ⭐⭐⭐⭐⭐ Rating: {data.rating}
            </span>
            <span className="text-[24px]">86.5K sold</span>
          </div>

          <span className="text-gray-700 tracking-tight text-[14px]">
            Free returns in USA
          </span>

          <span className="text-gray-700 text-sm">Comment: 7.4k</span>
        </div>
      </article>
    )
  );
};

export default ProductDetails;
