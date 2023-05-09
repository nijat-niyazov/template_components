import { useEffect, useRef, useState } from 'react';
import { mainApi } from './api/api';

const TodoCrud = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState('');
  const [sorted, setSorted] = useState(false);
  const [edit, setEdit] = useState({ opened: false, value: '', id: null });

  const inputRef = useRef();
  const fetchRef = useRef(true);

  useEffect(() => {
    if (fetchRef.current === true) {
      const fetchData = async () => {
        try {
          const { data } = await mainApi.get('/todos');
          setList(data);
        } catch (err) {
          console.error(err.message);
        }
      };
      fetchData();
    }

    return () => {
      fetchRef.current = false;
    };
  }, []);

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

  const removeItem = async id => {
    try {
      await mainApi.delete('/todos/' + id);

      setList(list.filter(li => li.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const updateItem = async id => {
    const changedData = list.find(item => item.id === id);

    const updatedItem = { ...changedData, item: edit.value };

    try {
      const { data } = await mainApi.put('/todos/' + id, updatedItem);
      if (data) {
        const indexOfChangedData = list.findIndex(item => item.id === id);
        list.splice(indexOfChangedData, 1, updatedItem);
        setList(list);
      }
    } catch (err) {
      console.error(err.message);
    } finally {
      setEdit({ opened: false, value: '', id: null });
    }
  };

  const sort = () => {
    setSorted(p => !p);
    const sortedList = [
      ...list.sort((a, b) => (sorted ? a.id - b.id : b.id - a.id)),
    ];
    setList(sortedList);
  };

  // ============== CloseModal Issue =================

  const modalRef = useRef();
  useEffect(() => {
    const escKeyCloseModal = e => {
      e.key === 'Escape' && setEdit(p => ({ ...p, opened: false }));
    };
    document.addEventListener('keydown', escKeyCloseModal);

    const clickOutSideCloseModal = e => {
      modalRef.current &&
        !modalRef.current.contains(e.target) &&
        setEdit(p => ({ ...p, opened: false }));
    };

    document.addEventListener('mousedown', clickOutSideCloseModal);

    return () => {
      document.removeEventListener('keydown', escKeyCloseModal);
      document.removeEventListener('mousedown', clickOutSideCloseModal);
    };
  }, []);

  return (
    <div className="h-screen bg-gray-700 w-full pt-[40px] px-2">
      <div className="bg-gray-300 w-[full]  rounded-xl p-4 m-auto">
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

        <ul className="mt-[40px] flex flex-col gap-[20px] m-auto w-full">
          {list?.length > 0 ? (
            list.map((act, i) => {
              const { id, item } = act;
              return (
                <li
                  key={id}
                  className="bg-red-400 p-2 flex items-center justify-between rounded-xl text-white"
                >
                  {id}. {item}
                  <div>
                    <button
                      className="bg-green-300 p-2 rounded-xl mr-[5px] text-black"
                      onClick={() => setEdit({ opened: true, value: item, id })}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-blue-300 p-2 rounded-xl mr-[5px] text-black"
                      onClick={() => removeItem(id)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              );
            })
          ) : (
            <div className="flex justify-center items-center w-1/2 m-auto p-4 bg-gray-600 rounded-2xl text-white">
              <h2 className=" cursor-grab active:cursor-grabbing">
                Nothing yet
              </h2>
            </div>
          )}
        </ul>
      </div>
      {edit.opened && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div
            ref={modalRef}
            className="bg-white p-8 rounded-lg flex w-1/3  justify-around "
          >
            <input
              className="outline-black outline-1 outline-none mr-4 focus:outline-blue p-2 rounded-xl"
              type="text"
              autoFocus
              value={edit.value}
              onChange={e => setEdit(p => ({ ...p, value: e.target.value }))}
            />
            <button
              onClick={() => updateItem(edit.id)}
              className="bg-green-300 p-2 rounded-xl mr-[5px] text-black"
            >
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoCrud;
