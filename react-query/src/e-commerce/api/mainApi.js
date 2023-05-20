import axios from 'axios';

const mainApi = axios.create({
  baseURL: 'http://localhost:3600/',
});

export const fetchAllProducts = async () => {
  const { data } = await mainApi.get(`/pre-products`);
  return data;
};

export const fetchProduct = async ({ queryKey }) => {
  const id = queryKey[1];
  const { data } = await mainApi.get(`/products/${id}`);
  console.log(data);
  return data;
};

export const fetchProductsByCategory = async ({ queryKey }) => {
  const category = queryKey[1];
  const { data } = await mainApi.get(`/products?category=${category}`);
  return data;
};

//   const totalDataFound = response.headers['x-total-count'];
