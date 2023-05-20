import { mainApi } from "./api";

export const fetchProducts = async () => {
  const { data } = await mainApi.get('/products');
  console.log('products', data);
  return data;
};

// export const fetchCard = async () => {
//   const { data } = mainApi.get('/cart');
//   console.log('cart', data);
//   return data;
// };
