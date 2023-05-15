import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { addTodo, deleteTodo, getTodos, updateTodo } from './api';

const List = () => {
  const [title, setTitle] = useState('');

  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    error,
    data: todos,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
    select: data => data.sort((a, b) => b.id - a.id),
  });

  const addTodoMutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });

  const updateTodoMutation = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });

  const handleSubmit = e => {
    e.preventDefault();
    addTodoMutation.mutate({
      userId: 1,
      title,
      completed: false,
    });
    setTitle('');
  };

  return (
    <div className="p-4 ">
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Enter new item</label>
        <input
          className="border-black border-2 p-2"
          id="todo"
          type="text"
          value={title}
          autoFocus
          onChange={e => setTitle(e.target.value)}
        />
        <button className="bg-green-300 p-4 rounded-sm font-bold">
          Add Todo
        </button>
      </form>

      {!isLoading && (
        <div className="flex flex-col gap-4">
          {todos.map(item => {
            return (
              <article
                key={item.id}
                className="bg-blue-400 flex items-center justify-between p-2 rounded-lg w-full "
              >
                <div className="flex gap-4 ">
                  <label htmlFor={item.id}>{item.title}</label>
                  <input
                    className="w-6"
                    type="checkbox"
                    checked={item.completed}
                    id={item.id}
                    onChange={() => {
                      updateTodoMutation.mutate({
                        ...item,
                        completed: !item.completed,
                      });
                    }}
                  />
                </div>
                <button
                  onClick={() => {
                    deleteTodoMutation.mutate({ id: item.id });
                  }}
                  className="bg-red-500 p-2 rounded-md text-white hover:bg-red-600"
                >
                  Remove
                </button>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default List;
