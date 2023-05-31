import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useSWR from 'swr';
import { addTodo, deleteTodo, fetchTodos, updateTodo } from '../api/mainApi';

const TodoList = () => {
  const [todo, setTodo] = useState('');
  // const [list, setList] = useState([]);

  const {
    data: todos,
    error,
    isLoading,
    isValidating,
    mutate,
  } = useSWR(
    'todos', // cacheKey
    fetchTodos,
    {
      onSuccess: data => data.sort((a, b) => b.id - a.id),
    }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2> Falied...</h2>;
  }

  const addNewTodo = async (e, todo) => {
    e.preventDefault();
    try {
      const data = { name: todo, checked: false, id: todos.length + 1 };
      await addTodo(data);
      mutate(); // by just writing this we can change optimistic UI

      toast.success('New Item added', {
        duration: '2000',
        position: 'top-right',
        icon: '🔰',
        style: {
          minWidth: '300px',
          background: 'green',
          color: 'white',
          fontWeight: '700',
        },
      });
    } catch (err) {
      toast.error(err.message, {
        duration: '2000',
        position: 'top-right',
        icon: '🔰',
        style: {
          minWidth: '300px',
          background: 'red',
          color: 'white',
          fontWeight: '700',
        },
      });
    }
  };
  const handleDeleteTodo = async id => {
    console.log(id);
    try {
      await deleteTodo(id);
      mutate();

      toast.success('New Item added', {
        duration: '2000',
        position: 'top-right',
        icon: '🔰',
        style: {
          minWidth: '300px',
          background: 'green',
          color: 'white',
          fontWeight: '700',
        },
      });
    } catch (err) {
      toast.error(err.message, {
        duration: '2000',
        position: 'top-right',
        icon: '🔰',
        style: {
          minWidth: '300px',
          background: 'red',
          color: 'white',
          fontWeight: '700',
        },
      });
    }
  };

  const handleUpdateTodo = async todo => {
    console.log(todo);
    try {
      await updateTodo(todo);
      mutate(); // it invalidate cache data we had and revalidates again 

      toast.success('item Updated', {
        duration: '2000',
        position: 'top-right',
        icon: '🔰',
        style: {
          minWidth: '300px',
          background: 'green',
          color: 'white',
          fontWeight: '700',
        },
      });
    } catch (err) {
      toast.error(err.message, {
        duration: '2000',
        position: 'top-right',
        icon: '🔰',
        style: {
          minWidth: '300px',
          background: 'red',
          color: 'white',
          fontWeight: '700',
        },
      });
    }
  };

  return (
    <div>
      <Toaster />
      <div className="w-1/2 m-auto p-4 bg-gray-600 h-screen text-white">
        <h2 className="text-center font-bold text-[50px]">All Products</h2>
        <form
          onSubmit={e => addNewTodo(e, todo)}
          className="grid place-items-center gap-2"
        >
          <label className="block text-xl" htmlFor="">
            Todo
          </label>
          <div className="flex gap-3">
            <input
              type="text"
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
        <section className="bg-blue-400 p-2 rounded-md m-3 ">
          <h2 className="text-4xl text-center mb-4">List</h2>
          <ul className="w-[90%] m-auto grid gap-3 text-black">
            {todos?.map(todo => {
              // console.log(todo);
              return (
                <li
                  className="bg-gray-300 relative grid gap-4 p-4 rounded-lg"
                  key={todo.id}
                >
                  <div className="flex gap-2 flex-row-reverse justify-end">
                    <label htmlFor={todo.id}>
                      {todo.id}. {todo.name}
                    </label>
                    <input
                      type="checkbox"
                      id={todo.id}
                      className="w-6 h-6"
                      checked={todo.checked}
                      onChange={() =>
                        handleUpdateTodo({ ...todo, checked: !todo.checked })
                      }
                    />
                  </div>

                  <aside className="flex absolute right-0 top-1/2 -translate-y-1/2 gap-2 w-1/3">
                    <button
                      onClick={() => handleDeleteTodo(todo.id)}
                      className="p-2 bg-red-300 rounded-md"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleUpdateTodo(todo)}
                      className="p-2 bg-green-400 rounded-md"
                    >
                      Update
                    </button>
                  </aside>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TodoList;
