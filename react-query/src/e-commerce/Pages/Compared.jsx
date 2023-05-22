import { useQueries } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { fetchProduct } from '../api/mainApi';
import { idds } from '../redux/slice';
import { convertCurrency } from '../utils/currencyConverter';

const Compared = () => {
  const ids = useSelector(idds);

  const results = useQueries({
    queries: ids?.map(id => {
      return { queryKey: ['comparer', id], queryFn: fetchProduct };
    }),
  });

  console.log(results);

  return (
    <div>
      <h2 className="text-center font-bold text-[50px]">Compared Products</h2>
      <section className="grid gap-5 p-4 grid-cols-2 md:grid-cols-3">
        {results?.map(product => {
          console.log(product);
          return (
            product.data && (
              <article
                key={product.data.id}
                className="bg-gray-300 grid gap-4 px-4 py-2 rounded-lg"
              >
                <img
                  className="w-full h-40 rounded-lg"
                  src={product.data.thumbnail}
                  alt="product.data_img"
                />
                <div className="grid gap-4">
                  <p className="text-[16px] font-bold">
                    {product.data.id}. {product.data.title}
                  </p>
                  <span className="font-semibold">
                    {convertCurrency(product.data.price)} |
                  </span>

                  <span className="bg-blue-300 italic  p-2 w-auto rounded-lg text-gray-100">
                    Remains: {product.data.stock}
                  </span>

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-tight">
                      ⭐⭐⭐⭐⭐
                    </span>
                    <span className="text-[14px]">86.5K sold</span>
                  </div>

                  <span className="text-gray-700 tracking-tight text-[14px]">
                    Free returns in USA
                  </span>

                  <span className="text-gray-700 text-sm">Comment: 7.4k</span>
                </div>
              </article>
            )
          );
        })}
      </section>
    </div>
  );
};

export default Compared;
