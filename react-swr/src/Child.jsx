import useSWR from 'swr';
import { fetchTodos } from './api/mainApi';

function Child({ index }) {
  const { data } = useSWR('users', fetchTodos, {
    onSuccess: () => console.log(`Child success`),
  });

  return index;
}

export default Child;
