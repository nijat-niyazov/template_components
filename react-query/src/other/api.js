import axios from 'axios';
import { changeLimit } from './InfiniteRQ';

const mainApi = axios.create({
  baseURL: 'http://localhost:3500',
});

export const fetchCities = async () => {
  const { data } = await mainApi.get('/cities', {
    params: {
      _sort: 'id',
      _order: 'desc',
    },
  });
  return data;
};

export const fetchCountries = async () => {
  const { data } = await mainApi.get('/countries');
  return data;
};

export const fetchCountryById = async ({ queryKey }) => {
  let id = queryKey[1];
  const { data } = await mainApi.get('/countries/' + id);
  return data;
};

export const fetchUserByEmail = async ({ queryKey }) => {
  let email = queryKey[1];
  const { data } = await mainApi.get('/users/' + email);
  return data;
};

export const fetchTopicsByChannelId = async ({ queryKey }) => {
  let channelId = queryKey[1];
  const { data } = await mainApi.get('/channels/' + channelId);
  return data;
};

export const fetchColorsWithPagination = async ({ queryKey }) => {
  let pageNum = queryKey[1];
  // const { data } = await mainApi.get(`/colors?_page=${pageNum}&_limit=2`);

  const response = await mainApi.get(`/colors`, {
    params: {
      _page: pageNum,
      _limit: 2,
    },
  });

  const totalDataCount = response.headers['x-total-count'];
  /*
   * Extractes the total count of returned data ↖
   */

  return { data: response.data, pages: Math.ceil(totalDataCount / 2) };
};

export const fetchColorsWithInfiniteQuery = async ({ pageParam = 1 }) => {
  if (pageParam !== 1) {
    console.log(pageParam);
  }

  const response = await mainApi.get(`/colors?_page=${pageParam}&_limit=2`);

  const totalPages = Math.ceil(response.headers['x-total-count']) / 2;

  changeLimit(totalPages);

  return response.data;
};

export const fetchCityById = async id => {
  const { data } = await mainApi.get('/cities/' + id);

  return data;
};

export const postNewCity = city => {
  return mainApi.post('/cities', city);
};

export const deleteCity = id => {
  return mainApi.delete('/cities/' + id);
};

export const updateCity = data => {
  console.log(data);
  return mainApi.patch('/cities/' + data.id, data);
};
