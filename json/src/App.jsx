import { useEffect, useRef, useState } from 'react';
import { mainApi } from './api/api';

function App() {
  const fetchRef = useRef(true);
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [findByCats, setFindBycats] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (fetchRef.current === true) {
        const { data } = await mainApi.get('/products');
        console.log(data);
        setProducts(data);
      }
    };

    fetchData();
    return () => {
      fetchRef.current = false;
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (fetchRef.current === true) {
        const { data } = await mainApi.get('/reviews');
        console.log(data);
        setReviews(data);
      }
    };

    fetchData();
    return () => {
      fetchRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (findByCats !== null) {
      const fetchData = async () => {
        const { data } = await mainApi.get(`/products?category=${findByCats}`);
        console.log(data);
        setProducts(data);
      };

      fetchData();
    }
  }, [findByCats]);

  const handleCategory = e => {
    console.log(e.target.innerHTML.toLowerCase());
    setFindBycats(e.target.innerHTML.toLowerCase());
  };

  /**
   * ! 1#. filtering data by its property which is might be categories, prices, anthying
   * * /products?category(property)=electronics(value)
   */

  /**
   * ! 2#.sort data by its property which is might be prices, ages etc.
   * * /products?_sort=price(property)
   * ? in default its ascending order
   * * /products?_sort=price(property)&_oder=desc
   * it will be in descending order ⤴
   */

  /**
   * ! 3#. pagination
   * * /products?_page=1
   * * /products?_page=1&_limit=2
   * ? it shows how much must be per page
   
   */

  /**
   * ! 4#. ranged data by its property which is might be prices,reviews etc
   * * /products?price(property)_gte(greater than eqaul)=2000&price_lte(less than eqaul)=6000
   */

  /**
   * ! 5#. skip data by its property which is might be id etc
   * * /products?id(property)_ne(not eqaul)=1
   */

  /**
   * ! 6#. find data by its property which is might be category and starts with eqauled input
   * * /products?price(property)_like=^1
   */

  /**
   * ! 7#. find data by searching with given query(input) and will return any data that contains query
   * * /products?q=ok(query)
   */
  
  /**
   * ! 8#. children resources of data 
   * * /products?_embed=reviews(property)
   */
  /**
  
  * ! 9#. parent resources of data 
   * * /reviews?_expand=product(property)
   */

  return (
    <div>
      <button
        onClick={handleCategory}
        className=" cursor-pointer p-4 rounded-full text-[20px] bg-yellow-300 hover:bg-yellow-500 m-2"
      >
        electronics
      </button>
      <button
        onClick={handleCategory}
        className=" cursor-pointer p-4 rounded-full text-[20px] bg-yellow-300 hover:bg-yellow-500 m-2"
      >
        Books
      </button>
      <button
        onClick={handleCategory}
        className=" cursor-pointer p-4 rounded-full text-[20px] bg-yellow-300 hover:bg-yellow-500 m-2"
      >
        fitness
      </button>
      <button
        onClick={handleCategory}
        className=" cursor-pointer p-4 rounded-full text-[20px] bg-yellow-300 hover:bg-yellow-500 m-2"
      >
        gardening
      </button>
      <button
        onClick={handleCategory}
        className=" cursor-pointer p-4 rounded-full text-[20px] bg-yellow-300 hover:bg-yellow-500 m-2"
      >
        furniture
      </button>
      <button
        onClick={handleCategory}
        className=" cursor-pointer p-4 rounded-full text-[20px] bg-yellow-300 hover:bg-yellow-500 m-2"
      >
        accessories
      </button>
      <button>Sort by price</button>
      <section className="p-4 min-w-content m-auto flex gap-4 items-center justify-center flex-wrap mt-40">
        {products.map(p => (
          <li
            className="w-[300px] p-4 border-black border-2 border-solid list-none mb-2 flex flex-col justify-center items-center rounded-md"
            key={p.id}
          >
            <h2 className="font-extrabold text-[30px]">
              {p.id}. {p.title}
            </h2>

            <p className="mb-8">{p.description}</p>

            <span className="bg-red-200 px-8 py-2 rounded-md mb-4">
              Price - {p.price}
            </span>

            {p.discount && (
              <span className="bg-yellow-300 px-8 py-2 rounded-md mb-4">
                Price - {p.discount.type}
              </span>
            )}

            <span className="px-4 py-2 bg-green-300 rounded-2xl  font-bold">
              Category - {p.category}
            </span>
          </li>
        ))}
      </section>
    </div>
  );
}

export default App;
