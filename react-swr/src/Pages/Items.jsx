import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import useSWR, { useSWRConfig } from 'swr';
import { addTodo, endPointApi as cacheKey, fetchTodos } from '../api/mainApi';
import { addNewItemOptions } from '../helpers/todosMutations';
import { toastError, toastSuccess } from '../utils/toasts';
import Item from './Item';

const Items = () => {
  const [todo, setTodo] = useState('');

  const { mutate } = useSWRConfig();

  const {
    data: todos,
    error,
    isLoading,
    isValidating,
  } = useSWR(cacheKey, fetchTodos, {
    onSuccess: data => {
      data.sort((a, b) => b.id - a.id);
    },
  });

  console.log(todos);

  const addNewTodo = async e => {
    e.preventDefault();
    try {
      const newItem = { name: todo, checked: false, id: todos.length + 1 };
      await mutate(cacheKey, addTodo(newItem), addNewItemOptions(newItem));
      // mutate();

      toastSuccess('New Item Added ');
    } catch (err) {
      toastError(err.message);
    }
  };

  return (
    <div>
      <Toaster />
      {/* <div>
        <h1 className="mx-2">
          I am {user?.name} {user?.lastName}
        </h1>
        <button
          className="bg-gray-300 border-black border-[1px] p-2 m-2 rounded-md"
          onClick={async () => {
            const newName = { ...user, name: user.name.toUpperCase() };
            // console.log(newName);
            mutate('user', updateUserName(newName), {
              optimisticTodos: newName,
              rollbackOnError: true,
            });
          }}
        >
          Uppercase my name!
        </button>
      </div> */}
      <div className="w-full m-auto p-4 bg-gray-600 h-full text-white">
        <h2 className="text-center font-bold text-[50px]">All Products</h2>
        <form onSubmit={addNewTodo} className="grid place-items-center gap-2 ">
          <label className="block text-xl" htmlFor="">
            Todo
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              autoFocus
              // ref={inputRef}
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
            {/* <FindItem /> */}
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
    </div>
  );
};

export default Items;
