import { mainApi } from './mainApi';

export const fetchTodos = async () => {
  const { data } = await mainApi.get('/todos');
  return data;
};

export const fetchTodoByTitle = async title => {
  const { data } = await mainApi.get('/todos/?q=' + title);
  return data;
};

export const postTodo = async newPost => {
  const { data } = await mainApi.post('/todos', newPost);
  return data;
};
