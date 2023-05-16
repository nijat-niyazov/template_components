import axios from 'axios';

export const mainApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});
