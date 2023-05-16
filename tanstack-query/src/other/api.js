import axios from 'axios';

export const mainApi = axios.create({
  baseURL: 'http://localhost:3500',
});

export const fetchCities = async () => {
  const { data } = await mainApi.get('/cities');
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
