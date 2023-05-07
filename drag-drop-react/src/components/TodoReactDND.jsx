import { useAutoAnimate } from '@formkit/auto-animate/react';
import React, { useEffect, useRef, useState } from 'react';

const TodoReactDND = () => {
  const [item, setItem] = useState('');
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem('list')) ?? []
  );
  const [sorted, setsorted] = useState(false);

  const inputRef = useRef();
  const [parent, enableAnimations] = useAutoAnimate();

  const addTodo = e => {
    e.preventDefault();

    const newItem = {
      item,
      id: list.length,
    };

    const newList = [...list, newItem];

    setList(newList);
    setItem('');
    inputRef.current.focus();
  };

  const removeItem = id => {
    setList(list.filter(li => li.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const sort = () => {
    setsorted(p => !p);
    setList(list.sort((a, b) => (sorted ? a.id - b.id : b.id - a.id)));
  };

  return (
    <div className="h-screen bg-gray-700 w-full  flex items-center justify-center">
      <div className="bg-gray-300 w-[600px] rounded-xl p-4 m-auto">
        <form className="flex justify-between items-center" onSubmit={addTodo}>
          <input
            type="text"
            autoFocus
            ref={inputRef}
            className="p-2 rounded-xl"
            placeholder="item"
            value={item}
            onChange={e => setItem(e.target.value)}
          />
          <button
            type="submit"
            className="w-[20%] bg-blue-300 p-2 rounded-md text-black "
          >
            Submit
          </button>
        </form>
        <button className="bg-blue-300 p-2  rounded-xl" onClick={sort}>
          Sort
        </button>
        <section className="mt-[40px]">
          <ul ref={parent} className="flex flex-col gap-[20px] m-auto w-full">
            {list?.map(item => (
              <li
                className="bg-red-400 p-2 flex items-center justify-between rounded-xl text-white"
                key={item.id}
              >
                {item.id}. {item.item}
                <div
                  className="
                "
                >
                  <button
                    // onClick={() => editItem(item.id)}
                    className="mr-2 bg-blue-300 p-2  rounded-xl"
                  >
                    Edit
                  </button>
                  <button
                    className="bg-blue-300 p-2  rounded-xl mr-[5px]"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TodoReactDND;
