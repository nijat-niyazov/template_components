import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewItem, findItem } from '../slices/todoSlice';

const AddItem = () => {
  const [item, setItem] = useState('');
  const [sorted, setSorted] = useState(false);
  const [search, setSearch] = useState('');
  const [delayedVal, setDelayedVal] = useState('');

  useEffect(() => {
    let timerDelay = setTimeout(() => {
      setDelayedVal(search);
    }, 500);

    return () => clearTimeout(timerDelay);
  }, [search]);

  useEffect(() => {
    dispatch(findItem(delayedVal));
  }, [delayedVal]);

  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleAddItem = e => {
    e.preventDefault();

    dispatch(addNewItem({ item, date: new Date().toISOString() }));
    setItem('');
    inputRef.current.focus();
  };

  // const sort = () => {
  //   setSorted(p => !p);
  //   const sortedList = [
  //     ...list.sort((a, b) => (sorted ? a.id - b.id : b.id - a.id)),
  //   ];
  //   dispatch( setList(sortedList));
  // };

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
        <input
          type="text"
          className="w-1/4 sm:w-inline p-2 rounded-xl"
          placeholder="Find Item.."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
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
