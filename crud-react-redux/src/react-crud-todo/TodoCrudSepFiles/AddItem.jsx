import { useRef, useState } from 'react';
import { mainApi } from './api/api';

const AddItem = ({ setList, list }) => {
  const [item, setItem] = useState('');
  const [sorted, setSorted] = useState(false);

  console.log('add item rendered');

  const inputRef = useRef();

  const addTodo = async e => {
    e.preventDefault();

    const newItem = {
      item,
      id: list.length + 1,
    };

    try {
      const { data } = await mainApi.post('/todos', newItem);
      if (data) {
        setList(p => [...p, data]);
      }
    } catch (err) {
      console.error(err.message);
    } finally {
      setItem('');
      inputRef.current.focus();
    }
  };

  const sort = () => {
    setSorted(p => !p);
    const sortedList = [
      ...list.sort((a, b) => (sorted ? a.id - b.id : b.id - a.id)),
    ];
    setList(sortedList);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-[20px] justify-between">
      <form
        className="flex justify-between items-center sm:w-[80%]"
        onSubmit={addTodo}
      >
        <input
          type="text"
          autoFocus
          ref={inputRef}
          className="w-1/2 sm:w-inline p-2 rounded-xl"
          placeholder="item"
          value={item}
          onChange={e => setItem(e.target.value)}
        />
        <button
          type="submit"
          className="w-content bg-blue-300 p-2 rounded-md text-black"
        >
          Submit
        </button>
      </form>
      <div className="flex items-center justify-around gap-4">
        <button
          className="bg-green-500 px-6 py-2 text-white rounded-md"
          onClick={sort}
        >
          Sort
        </button>
        <button
          className="bg-red-400 p-2 rounded-md"
          onClick={() => setList([])}
        >
          Remove All
        </button>
      </div>
    </div>
  );
};

export default AddItem;
