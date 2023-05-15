import axios from 'axios';
import { useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { mainApi } from './api';

const SecondComponent = () => {
  const queryClient = useQueryClient();

  const [todo, setTodo] = useState('');

  const fetchTodoList = async () => {
    const { data } = await mainApi.get('/todos');
    return data;
  };

  const inputRef = useRef();

  // const result = useQuery('todos', fetchTodoList);
  // console.log(result);
  const { isLoading, isError, data, error } = useQuery('todos', fetchTodoList);

  // const mutation = useMutation(newTodo => {
  //   inputRef.current?.focus();
  //   return mainApi.post('/todos', newTodo);
  // });

  const mutation = useMutation(formData => {
    console.log(formData);
    return axios.post('http://localhost:3500/todos', formData);
  });

  const handleSubmit = e => {
    e.preDefault();
    console.log(e.target);
    mutation.mutate(new FormData(e.target));
  };

  // console.log(mutation);

  return (
    <div className="bg-blue-300 p-4 text-center h-screen w-full flex flex-col  gap-6">
      <h1 className="uppercase bg-blue-600 rounded-xl px-6 py-4 font-bold text-white">
        React Query
      </h1>

      <div>
        {mutation.isLoading ? (
          <h2 className="bg-opacity-50 bg-yellow-200 p-4 w-full">
            Adding todo...
          </h2>
        ) : (
          <div>
            {mutation.isError && (
              <div>An error occurred: {mutation.error.message}</div>
            )}

            {mutation.isSuccess && (
              <div className="bg-green-400 p-2 rounded-xl mb-4">
                Todo added!
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                autoFocus
                className="p-2 placeholder: outline-blue-700 outline-2 focus:border-blue-300 border-2 rounded-lg mb-4"
                type="text"
                onChange={e => setTodo(e.target.value)}
              />

              <button
                className="bg-green-300 p-2 rounded-lg w-full disabled:opacity-5 disabled:bg-green-200"
                disabled={isLoading}
                onClick={e => {
                  mutation.mutate({ id: new Date(), title: todo });
                }}
              >
                Create Todo
              </button>
            </form>
          </div>
        )}
      </div>

      {isLoading && <span>Loading...</span>}
      {error && <span>{error.message}</span>}
      {!isLoading && !isError && (
        <ul>
          {data.map(todo => (
            <li className="bg-pink-400 p-4 rounded-sm" key={todo.id}>
              {todo.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SecondComponent;

{
  /* <div
        className={`bg-red-300 flex flex-col gap-4 p-4 mt-4 ronded-xl ${
          isLoading && 'bg-opacity-10'
        }`}
      >
        {isLoading && (
          <h2 className=" bg-blue-400 rounded-sm p-4 bg-opacity-50">
            Loading...
          </h2>
        )}

        {!isLoading &&
          data?.map(p => (
            <article className=" text-justify flex flex-col gap-2 capitalize border-black border-2 p-2 rounded-lg">
              <h2>{p.title}</h2>
              <p>{p.body}</p>
              <span>Written by {p.id}</span>
            </article>
          ))}
      </div> */
}
