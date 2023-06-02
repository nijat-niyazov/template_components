import axios from 'axios';

const delay = () => new Promise(res => setTimeout(() => res(), 800));

const mainApi = axios.create({
  baseURL: 'http://localhost:3600',
});

export const endPointApi = '/todos/';

export const fetchTodos = async () => {
  const { data } = await mainApi.get(endPointApi);
  // console.log(data);

  return data;
};

export const fetchTodo = async query => {
  const { data } = await mainApi.get(endPointApi + '?q=' + query);
  return data;
};

export const addTodo = async data => {
  // console.log(data);
  // await delay();

  if (Math.random() < 0.5) throw new Error('Failed to add sorry :(');

  const response = await mainApi.post(endPointApi, data);
  return response.data;
};

export const deleteTodo = async id => {
  console.log(id);
  return await mainApi.delete(endPointApi + id);
};

export const updateTodo = async data => {
  console.log(data);
  return await mainApi.patch(endPointApi + data.id, data);
};

export const getUser = async () => {
  const { data } = await mainApi.get('user');
  return data;
};

export const updateUserName = async name => {
  if (Math.random() < 0.5) throw new Error('Failed to change :(');

  return await mainApi.patch('user', name);
};
