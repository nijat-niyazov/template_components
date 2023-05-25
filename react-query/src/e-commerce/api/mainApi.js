import axios from 'axios';
import { setTotalPages } from '../pages/Infinited';

export const mainApi = axios.create({
  baseURL: 'http://localhost:3600/',
});

export const fetchAllProducts = async () => {
  const { data } = await mainApi.get(`products`);
  return data;
};

export const fetchProductsWithURL = async () => {
  const url = new URLSearchParams(window.location.search);
  const query = url.get('q');
  const pageNum = url.get('_page');
  const category = url.get('category');

  const params = {
    q: query,
    _page: pageNum,
    _limit: 4,
    category: category,
  };

  !query && delete params.q;
  query && delete params._page;
  !pageNum && delete params._page;
  !category && delete params.category;

  const response = await mainApi.get('products?', { params });
  return response.data;
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

export const updateProductOnServer = async updatedProduct => {
  const { id } = updatedProduct;

  return await mainApi.patch('/products/' + id, updatedProduct);
};
