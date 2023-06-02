import { useRef, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import useSWR from 'swr';
import { addTodo, endPointApi as cacheKey, fetchTodos } from '../api/mainApi';
import { addNewItemOptions } from '../helpers/todosMutations';
import { toastError, toastSuccess } from '../utils/toasts';
import FindItem from './FindItem';
import Item from './Item';

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const inputRef = useRef();

  const {
    error,
    isLoading,
    data: todos,
    isValidating,
    mutate,
  } = useSWR(
    cacheKey, // cacheKey
    fetchTodos, // function
    {
      // configs
      onSuccess: (data, key) => {
        // or got data, and cacheKey
        // console.log(data);

        return data.sort((a, b) => b.id - a.id);
      },
      // onError: (err, key) => {
      //   console.log(err.message);
      // },
      // refreshInterval: () => 2000, // it's refetchInterval
      // revalidateIfStale:()=> false,
      // revalidateOnFocus: () => false, // disable fetch when user is focused (default: true)
      // revalidateOnReconnect: () => false, // disable if connection is set (default: true)
      // revalidateOnMount: () => false,
      // refreshWhenHidden: () => true,
      // keepPreviousData: () => true, // show prev data till new one has came (default: false)
      // shouldRetryOnError: () => false, // if don't want to refetch on error (default: true)
      // errorRetryCount: () => 3, // how much time must be fetched if error happened
      // errorRetryInterval: () => 2000, // interval for refetch when  error occured

      // ======================

      // refreshWhenOffline,
      // suspense: () => true,
      // compare,
      // dedupingInterval,
      // fallback, // next js issue
      // fallbackData,
      // fetcher,
      // focusThrottleInterval,
      // isOnline,
      // isPaused,
      // isVisible,
      // loadingTimeout,
      // onDiscarded,
      // onErrorRetry,
      // onLoadingSlow,
      // use,
    }
  );

  const addNewTodo = async e => {
    e.preventDefault();

    // await addTodo(newTodo);
    // mutate(); // it invalidate and then revalidates query that's why we see changed data.

    if (todo !== '') {
      try {
        const newTodo = { name: todo, checked: false, id: todos?.length + 1 };

        await mutate(addTodo(newTodo), addNewItemOptions(newTodo));
        setTodo('');
        inputRef.current?.focus();

        toastSuccess('New Item added');
      } catch (err) {
        toastError(err.message);
      }
    } else {
      toastError('Empty input');
    }
  };

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Failed</h2>}
      <Toaster />
      {!isLoading && !error && todos && (
        <div className="w-full m-auto p-4 bg-gray-600 h-full text-white">
          <h2 className="text-center font-bold text-[50px]">All Products</h2>
          <form
            onSubmit={addNewTodo}
            className="grid place-items-center gap-2 "
          >
            <label className="block text-xl" htmlFor="">
              Todo
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                autoFocus
                ref={inputRef}
                value={todo}
                placeholder="Todo.."
                className="text-black p-2 rounded-md"
                onChange={e => setTodo(e.target.value)}
              />
              <button className="bg-green-600 p-2 text-white font-extralight rounded-md">
                Submit
              </button>
            </div>
          </form>

          <section className="bg-blue-400 w-1/2 m-auto p-2 rounded-md my-3 ">
            <div className="flex mx-10 my-4 items-center justify-between">
              <h2 className="text-4xl text-center mb-4">List</h2>
              <FindItem />
            </div>
            <ul className="w-[90%] m-auto grid gap-3 text-black">
              {todos?.map(todo => {
                return (
                  <Item
                    key={todo.id}
                    todo={todo}
                    // events={{ handleDeleteTodo, handleUpdateTodo, mutate }}
                  />
                );
              })}
            </ul>
          </section>
        </div>
      )}
    </div>
  );
};

export default TodoList;
