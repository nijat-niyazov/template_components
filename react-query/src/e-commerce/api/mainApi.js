import axios from 'axios';
import { setTotalPages } from '../Pages/Infinited';

const mainApi = axios.create({
  baseURL: 'http://localhost:3600/',
});

export const fetchAllProducts = async () => {
  const { data } = await mainApi.get(`pre-products`);
  return data;
};

export const fetchProduct = async ({ queryKey }) => {
  const id = queryKey[1];
  const { data } = await mainApi.get(`products/${id}`);

  return data;
};

export const fetchProductsPerPage = async ({ queryKey }) => {
  const pageNum = queryKey[1];

  const response = await mainApi.get('pre-products', {
    params: {
      _page: pageNum,
      _limit: 4,
    },
  });

  const totalPages = Math.ceil(response.headers['x-total-count'] / 4);

  const activePage = response.config.params['_page'];

  return {
    data: response.data,
    totalPages,
    activePage,
  };
};

export const fetchProductsWithInfinitive = async ({ pageParam = 1 }) => {
  const response = await mainApi.get('pre-products', {
    params: {
      _page: pageParam,
      _limit: 5,
    },
  });

  const totalPages = Math.ceil(response.headers['x-total-count'] / 5);
  setTotalPages(totalPages);

  return response.data;
};

export const fetchProductsByCategory = async ({ queryKey }) => {
  const category = queryKey[1];
  const { data } = await mainApi.get(`products?category=${category}`);
  return data;
};

// const response = await mainApi.get(`/pre-products?_page=${pageNum}&_limit=4`);

// if (response) {
//   const urlParams = new URLSearchParams(response.config.url.toString());
//   const paramsString = 'q=URLUtils.searchParams&_topic=api';
//   console.log(paramsString,response.config.url);
//   const searchParams = new URLSearchParams(paramsString);
//   console.log(searchParams.has('_topic')); // true

//   const pageFromResponse = urlParams.get('_limit');
//   console.log(pageFromResponse);

//   console.log(`Data retrieved from page ${pageFromResponse}`);

//   const aaa = new URLSearchParams(response.config.url);
//   console.log(aaa.toString());
//   console.log(aaa.has('_page'));
//   console.log(urlParams.has('_page'));

//   for (const p of aaa) {
//     console.log(p);
//   }
// }

//   const totalDataFound = response.headers['x-total-count'];
