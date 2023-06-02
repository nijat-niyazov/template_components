import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import useSWR from 'swr';

import {
  addTodo,
  todosUrlEndpoint as cacheKey,
  getTodos,
  updateTodo,
} from '../../api/todosApi';

import { addTodoOptions } from '../../api/todosSWROptions';
import { errorTost, success } from '../toasts/toasts';

const TodoList2 = () => {
  const [newTodo, setNewTodo] = useState('');

  const {
    isLoading,
    error,
    data: todos,
    isValidating,
    mutate,
  } = useSWR(cacheKey, getTodos, {
    onSuccess: data => {
      return data.sort((a, b) => b.id - a.id);
    },
    // refreshInterval: 2000,
  });

  const newItem = {
    name: newTodo,
    checked: false,
    id: todos?.length + 1,
  };

  const addTodoMutation = async e => {
    e.preventDefault();

    if (newTodo !== '') {
      try {
        await mutate(addTodo(newItem),addTodoOptions(newItem))
        // , addTodoOptions(newItem));

        setNewTodo('');
        success('Success! Added new item.');
      } catch (err) {
        errorTost('Failed to add the new item.');
      }
    } else {
      errorTost('Empty input');
    }
  };

  const updateTodoMutation = async updatedTodo => {
    try {
      await mutate(updateTodo(updatedTodo), updateTodoOptions(updatedTodo));

      success('Success! Updated new item.');
    } catch (err) {
      errorTost('Failed to update the new item.');
    }
  };

  // console.log(isValidating, isLoading);

  // const deleteTodoMutation = async ({ id }) => {
  //   try {
  //     await mutate(deleteTodo({ id }), deleteTodoOptions({ id }));

  //     toast.success('Success! Deleted item.', {
  //       duration: 1000,
  //     });
  //   } catch (err) {
  //     toast.error('Failed to delete the item.', {
  //       duration: 1000,
  //     });
  //   }
  // };

  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     addTodoMutation({
  //       userId: 1,
  //       title: newTodo,
  //       checked: false,
  //       id: new Date(),
  //     });
  //     setNewTodo('');
  //   };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  console.log(todos);

  return (
    <main className="w-full m-auto p-4 bg-gray-600 h-full text-white">
      <Toaster toastOptions={{ position: 'top-center' }} />

      <h1 className="text-center font-bold text-[50px]">Todo List</h1>

      <form
        onSubmit={addTodoMutation}
        className="grid place-items-center gap-2 "
      >
        <label className="block text-xl" htmlFor="new-todo">
          Enter a new todo item
        </label>
        <div className="flex gap-3">
          <input
            type="text"
            id="new-todo"
            value={newTodo}
            className="text-black p-2 rounded-md"
            onChange={e => setNewTodo(e.target.value)}
            placeholder="Enter new todo"
          />
          <button
            className="bg-green-600 p-2 text-white font-extralight rounded-md"
            type="submit"
          >
            {/* <FontAwesomeIcon icon={faUpload} /> */}
            Sbmit
          </button>
        </div>
      </form>

      <section className="bg-blue-400 w-1/2 m-auto p-2 rounded-md my-3 ">
        <div className="w-[90%] m-auto grid gap-3 text-black">
          {todos.map(todo => {
            return (
              <article
                className="bg-gray-300 relative grid gap-4 p-4 rounded-lg"
                key={todo.id}
              >
                <div className="flex gap-2 flex-row-reverse justify-end">
                  <label className="block text-xl" htmlFor={todo.id}>
                    {todo.id}. {todo.name}
                  </label>
                  <input
                    type="checkbox"
                    checked={todo.checked}
                    id={todo.id}
                    className="text-black p-2 rounded-md"
                    onChange={() =>
                      updateTodoMutation({ ...todo, checked: !todo.checked })
                    }
                  />
                </div>
                {/* <button
                  className="trash"
                  // onClick={() => deleteTodoMutation({ id: todo.id })}
                >
                  ❌
                </button> */}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};
export default TodoList2;
