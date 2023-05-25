import axios from 'axios';
const url = 'http://localhost:3600/products';

export const mainApi = axios.create({
  baseURL: url, 
});
