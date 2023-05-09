import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, list } from '../redux/slices/mainSlice';

const AddItem = () => {
  const [item, setItem] = useState('');

  const inputRef = useRef();
  const dispatch = useDispatch();
  const data = useSelector(list);

  const handleAddItem = e => {
    e.preventDefault();
    const newItem = { item, id: data.length + 1 };

    dispatch(addItem(newItem));
    setItem('');
    inputRef.current.focus();
  };

  

  return (
    <div className="flex flex-col sm:flex-row gap-[20px] justify-between">
      <form className="flex justify-between items-center sm:w-[80%]">
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
          onClick={handleAddItem}
          className="w-content bg-blue-300 p-2 rounded-md text-black"
        >
          Submit
        </button>
      </form>
      <div className="flex items-center justify-around gap-4">
        <button className="bg-green-500 px-6 py-2 text-white rounded-md">
          Sort
        </button>
        <button className="bg-red-400 p-2 rounded-md">Remove All</button>
      </div>
    </div>
  );
};

export default AddItem;
