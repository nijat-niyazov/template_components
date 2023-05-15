import axios from 'axios';

const postsApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const fetchPosts = async () => {
  const response = await postsApi.get('/posts');
  return response.data;
};

export const fetchPostsById = async id => {
  const { data } = await postsApi.get('/posts/' + id);
  return data;
};

export const addPost = async post => {
  return await postsApi.post('/posts', post);
};

export const updateTodo = async todo => {
  return await postsApi.patch(`/todos/${todo.id}`, todo);
};

export const deleteTodo = async ({ id }) => {
  return await postsApi.delete(`/todos/${id}`, id);
};

export default postsApi;
