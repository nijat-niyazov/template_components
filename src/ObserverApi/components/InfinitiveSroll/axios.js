import axios from 'axios';

const mainApi = axios.create({
  baseURL: 'http://openlibrary.org/',
});

export const getBooks = async (pageNum, query, signal) => {
  try {
    const { data } = await mainApi.get('/search.json', {
      params: { q: query, page: pageNum },
      signal: signal,
    });

    // console.log(data);
    if (data) {
      return data;
    }
  } catch (error) {
    console.log(error.message);
    // return error;
  }
};
