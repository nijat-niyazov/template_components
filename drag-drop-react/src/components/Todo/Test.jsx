import { useEffect, useRef, useState } from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { StrictModeDroppable as Droppable } from './helpers/StrictModeDnd';

const TodoWithDragDrop = () => {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem('list')) ?? []
  );
  const [item, setItem] = useState('');
  const [sorted, setsorted] = useState(false);

  const inputRef = useRef();

  const addTodo = e => {
    e.preventDefault();

    const newItem = {
      item,
      id: list.length + 1,
    };

    const newList = [...list, newItem];

    setList(newList);
    setItem('');
    inputRef.current.focus();
  };

  const removeItem = id => {
    setList(list.filter(li => li.id !== id));
  };

  const handleOnDragEnd = result => {
    if (!result.destination) {
      return;
    }

    // console.log(result);
    const tasks = [...list];

    const [reorderedItem] = tasks.splice(result.source.index, 1);
    // console.log(reorderedItem);

    tasks.splice(result.destination.index, 0, reorderedItem);
    // console.log(tasks);

    setList(tasks);
  };

  const sort = () => {
    setsorted(p => !p);
    const sortedList = [
      ...list.sort((a, b) => (sorted ? a.id - b.id : b.id - a.id)),
    ];
    setList(sortedList);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

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
              className="w-content bg-blue-300 p-2 rounded-md text-black "
            >
              Submit
            </button>
          </form>
          <div className="flex items-center justify-around gap-4">
            <button
              className="bg-green-500 px-6  py-2 text-white  rounded-md"
              onClick={sort}
            >
              Sort
            </button>
            <button
              className="bg-red-400 p-2  rounded-md"
              onClick={() => setList([])}
            >
              Remove All
            </button>
          </div>
        </div>

        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="list">
            {provided => (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="mt-[40px] flex flex-col gap-[20px] m-auto w-full"
              >
                {list.length > 0 ? (
                  list?.map((item, i) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id.toString()}
                      index={i}
                    >
                      {provided => (
                        <li
                          className="bg-red-400 p-2 flex items-center justify-between rounded-xl text-white"
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                        >
                          {item.id}. {item.item}
                          <div className="">
                            <button
                              className="bg-blue-300 p-2  rounded-xl mr-[5px] text-black"
                              onClick={() => removeItem(item.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </li>
                      )}
                    </Draggable>
                  ))
                ) : (
                  <div className="flex justify-center items-center w-1/2 m-auto p-4 bg-gray-600 rounded-2xl text-white">
                    <h2>Nothing yet</h2>
                  </div>
                )}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default TodoWithDragDrop;
