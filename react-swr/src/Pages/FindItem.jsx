import { useState } from 'react';
import useSWR from 'swr';
import { fetchTodo } from '../api/mainApi';

const FindItem = () => {
  const [query, setQuery] = useState('');

  // const {
  //   data: todo,
  //   error,
  //   isLoading,
  //   isValidating,
  //   mutate,
  // } = useSWR(`todo/query=${query}`, fetchTodo);

  // console.log(todo);

  return (
    <div className="flex gap-2 items-center">
      <label htmlFor="search"> Find item </label>
      <input
        type="text"
        className="p-2 rounded-md text-black"
        placeholder="Search..."
        id="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </div>
  );
};

export default FindItem;
