import axios from 'axios';
import { findTotalPages } from '../pages/paginated/Paginated';

const url = 'http://localhost:3500/';

export const endPoint = 'products/';

export const mainApi = axios.create({
  baseURL: url,
});

export const fetchProducts = async () => {
  const response = await mainApi.get(endPoint);
  if (response.status !== 200) throw new Error('OOPs something is wong');

  return response.data;
};

export const fetchWithPagination = async cacheKey => {
  const pageNumber = cacheKey.split('/')[1];
  const currentUrl = new URLSearchParams(window.location.search);
  const activePage = currentUrl.get('_page');
  const sorted = currentUrl.get('sorted');
  console.log(sorted);
  const ordered = currentUrl.get('order');
  console.log(currentUrl.toString());

  const params = {
    _page: activePage ?? pageNumber,
    _limit: 5,
    _sort: sorted,
    _order: 'desc',
  };

  !sorted && delete params._sort;

  const getParams = new URLSearchParams(params);
  const limit = parseInt(getParams.get('_limit'));

  // console.log(getParams.toString());

  const response = await mainApi.get(endPoint, { params });
  if (response.status !== 200) throw new Error('OOPs something is wong');

  findTotalPages(
    Math.ceil(parseInt(response.headers['x-total-count']) / limit)
  );

  return response.data;
};
