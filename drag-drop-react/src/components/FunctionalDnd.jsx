import { useState } from 'react';

function FunctionalDnd() {
  const [widgets, setwidgets] = useState(['Widget A', 'Widget B', 'Widget C']);
  const [selected, setSelected] = useState([]);

  // #1. When we move draggable element we want set its data with any given keyword and info we want to set to data
  const startDrag = e => {
    console.log(e.target);
    e.dataTransfer.setData('widgetType', e.target.innerText);
    e.target.classList.add(
      'opacity-50',
      'border',
      'border-blue-500',
      'border-dashed'
    );
  };

  // we want to remove style from element when we are done with DND
  const endDrag = e => {
    e.target.classList.remove(
      'opacity-50',
      'border',
      'border-blue-500',
      'border-dashed'
    );
  };

  // #3. When we Drop element we want get that data with getData given keyword
  const dropDraggedElement = e => {
    const widgetType = e.dataTransfer.getData('widgetType');

    // and then we set that data to selecteds and remove from initialState
    setwidgets(widgets.filter(widget => widget !== widgetType));
    setSelected(prev => [...prev, widgetType]);
  };

  // 4. It has to be written to and called on element where elements are dropped
  const dragOverOnAnotherElement = e => {
    e.preventDefault();
  };

  return (
    <div className="h-window bg-black">
      <article className="w-[800px] flex gap-[20px] items-center justify-center p-20 m-auto">
        <section className="flex flex-col gap-[10px] content-start ">
          {widgets.map((widget, i) => {
            return (
              <div
                draggable // any data that we want to drag
                onDragStart={startDrag}
                onDragEnd={endDrag}
                className="bg-gray-400 text-left w-[300px] h-[40px] cursor-grab"
                key={i}
              >
                {widget}
              </div>
            );
          })}
        </section>

        <section
          onDrop={dropDraggedElement}
          onDragOver={dragOverOnAnotherElement}
          className="w-[300px] border-white border-[1px] border-dotted h-[400px] text-black p-[4px]"
        >
          {selected?.map((widget, i) => (
            <div
              key={i}
              className="bg-gray-400 text-left w-full h-[40px] cursor-grab mb-[4px] p-[4px]"
            >
              {widget}
            </div>
          ))}
        </section>
      </article>
    </div>
  );
}

export default FunctionalDnd;
