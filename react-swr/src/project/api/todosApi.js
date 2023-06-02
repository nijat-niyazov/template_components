import axios from 'axios';

const delay = () => new Promise(res => setTimeout(() => res(), 800));

const todosApi = axios.create({
  baseURL: 'http://localhost:3600',
});

export const todosUrlEndpoint = '/todos/';

export const getTodos = async () => {
  //   await delay();
  const response = await todosApi.get(todosUrlEndpoint);
  return response.data;
};

export const addTodo = async data => {
  // await delay();
  if (Math.random() < 0.5) throw new Error('Failed to add new item!');
  // return await todosApi.post(todosUrlEndpoint, data);
  console.log(data);
  const response = await todosApi.post(todosUrlEndpoint, data);
  return response.data;
};

export const updateTodo = async todo => {
  //   await delay();
  const response = await todosApi.patch(todosUrlEndpoint + todo.id, todo);
  return response.data;
};

export const deleteTodo = async ({ id }) => {
  //   await delay();
  const response = await todosApi.delete(todosUrlEndpoint + id);
  return response.data;
};
