import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import List from './List';
import { fetchTodoByTitle, fetchTodos, postTodo } from './fetchers';

const MyCom = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState('');
  const [search, setSearch] = useState('');

  const { data, isLoading, error, status, isFetched, isFetching, fetchStatus } =
    useQuery({
      queryKey: ['todos'],
      queryFn: fetchTodos,
    });

  // console.log(
  //   data,
  //   error,
  //   status,
  //   fetchStatus,
  //   isLoading,
  //   isFetching,
  //   isFetched
  // );

  const inputRef = useRef();

  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['todos'] });
      setTitle('');
      inputRef.current.focus();
    },
  });

  const { data: findedPost } = useQuery({
    queryKey: ['todos', search],
    queryFn: ({ queryKey }) => {
      console.log(queryKey);
      return fetchTodoByTitle(queryKey[1]);
    },
  });

  console.log(findedPost);

  return (
    <div className="h-screen w-full bg-gray-300 p-4">
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {!isLoading && data && (
        <div className="bg-pink-300 p-4 w-full h-full flex flex-col gap-4 ">
          <input
            type="text"
            value={title}
            ref={inputRef}
            autoFocus
            className="h-[40px] p-2  "
            onChange={e => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={search}
            className="h-[40px] p-2  "
            onChange={e => setSearch(e.target.value)}
          />
          <button
            className="bg-green-300 p-4 rounded-sm font-bold"
            onClick={() => {
              mutation.mutate({
                id: Date.now(),
                title,
              });
            }}
          >
            Add Todo
          </button>
          <List list={data} />
        </div>
      )}
    </div>
  );
};

export default MyCom;
