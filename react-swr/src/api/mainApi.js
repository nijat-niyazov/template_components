import axios from 'axios';

const mainApi = axios.create({
  baseURL: 'http://localhost:3600/',
});

export const endPointApi = 'todos/'

export const fetchTodos = async () => {
  const { data } = await mainApi.get(endPointApi);
  return data;
};

export const addTodo = async data => {
  return await mainApi.post(endPointApi, data);
};

export const deleteTodo = async id => {
  console.log(id);
  return await mainApi.delete(endPointApi + id);
};

export const updateTodo = async data => {
  return await mainApi.patch(endPointApi + data.id, data);
};
