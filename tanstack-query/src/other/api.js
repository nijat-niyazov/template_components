import axios from 'axios';

export const mainApi = axios.create({
  baseURL: 'http://localhost:3500',
});

export const fetchHeroes = async () => {
  const { data } = await mainApi.get('/heroes');
  return data;
};
