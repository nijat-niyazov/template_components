const Item = ({ todo, events }) => {
  return (
    <li className="bg-gray-300 relative grid gap-4 p-4 rounded-lg">
      <div className="flex gap-2 flex-row-reverse justify-end">
        <label htmlFor={todo.id}>
          {todo.id}. {todo.name}
        </label>
        {/* <input
          type="checkbox"
          id={todo.id}
          className="w-6 h-6"
          checked={todo.checked}
          onChange={() =>
            events.handleUpdateTodo({ ...todo, checked: !todo.checked })
          }
        /> */}
      </div>

      <aside className="flex absolute right-[10%] top-1/2 -translate-y-1/2 gap-2 w-1/3">
        {/* <button
          onClick={() => events.handleDeleteTodo(todo.id)}
          className="p-2 bg-red-300 rounded-md"
        >
          Delete
        </button>
        <button
          onClick={() => events.handleUpdateTodo(todo)}
          className="p-2 bg-green-400 rounded-md"
        >
          Update
        </button>
        <button
          onClick={async () => {
            const updated = { ...todo, name: todo.name.toUpperCase() };
            await events.handleUpdateTodo(updated);
            // events.mutate(updated);
          }}
          className="p-2 bg-amber-400 rounded-md"
        >
          UpperCase
        </button> */}
      </aside>
    </li>
  );
};

export default Item;
