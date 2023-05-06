import { useEffect, useRef, useState } from 'react';
import DATA from '../data/data.json';
import { features } from '../data/tasks';
import './table.scss';

const Table = () => {
  const [data, setData] = useState([]);
  const [ascending, setAscending] = useState(true);
  const [sorted, setSorted] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [pageNums, setPageNums] = useState(1);
  const [result, setResult] = useState(20);
  const [showTables, setShowTables] = useState(20);
  const [search, setSearch] = useState('');
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) ?? features
  );

  // ============== FILTERING ===============

  useEffect(() => {
    if (!search) {
      setData(DATA);
    } else {
      const debounced = setTimeout(() => {
        setData(
          data.filter(d =>
            d.first_name.toLowerCase().includes(search.toLowerCase())
          )
        );
      }, 300);
      return () => {
        clearTimeout(debounced);
      };
    }
  }, [search]);

  // ============== CLEAR SEARCH ON CLICK WINDOW ===============

  const searchRef = useRef();

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClickOutside = e => {
    const triggeredElement = e.target;
    if (searchRef.current && !searchRef.current.contains(triggeredElement)) {
      setSearch('');
    }
  };

  // ============== TASKS DONE ===============

  const checked = id => {
    const changed = tasks.map(task =>
      task.id === id ? { ...task, checked: task.checked ? false : true } : task
    );
    setTasks(changed);
    localStorage.setItem('tasks', JSON.stringify(changed));
  };

  // =============== RESULTS ==============

  useEffect(() => {
    setData(DATA.slice(showTables * (activePage - 1), result));
  }, [result]);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  // ========== CHANGE SHOW TABLES ===============

  const changeShowTables = e => {
    setShowTables(Number(e.target.value));
    setResult(Number(e.target.value));
  };

  // ========== SORTING COLUMNS ===============

  const canBeSorted = ['id', 'age'];

  const sortByToggle = key => {
    if (sorted === 2) {
      setSorted(0);
      setData([...data].sort((a, b) => a.id - b.id));
    } else {
      setSorted(p => p + 1);
      setAscending(p => !p);
      setData(
        [...data].sort((a, b) =>
          ascending ? b[key] - a[key] : a[key] - b[key]
        )
      );
    }
  };

  // ==========  PAGINATION ==============

  useEffect(() => {
    setPageNums(Math.ceil(DATA?.length / showTables));
  }, [showTables]);

  const activeRef = useRef();

  // useEffect(() => {
  //   const allPages = activeRef.current?.children;

  //   const activeStyle = 'translate-y opacity-100';

  //   for (let i = 0; i < allPages.length; i++) {
  //     allPages[i].classList.remove(activeStyle);
  //   }

  //   const active = activeRef.current?.children[activePage - 1];

  //   active.classList.add(activeStyle);

  //   setResult(activePage * showTables);
  // }, [activePage]);

  const headers = Object.keys(DATA[0]);

  return (
    <>
      <div className="flex m-auto w-[95%] mt-[10px]">
        {tasks?.map((task, i) => {
          return (
            <div
              key={task.id}
              className="mr-[20px]  width-[150px] text-center flex place-items-center justify-center  "
            >
              <span
                className={`ease-out duration-300   bg-red-400 text-black p-4 rounded-xl ${
                  task.checked && 'opacity-50 brightness-50 line-through'
                }`}
              >
                {task.task}
              </span>
              <button
                className="ml-[5px] bg-none border-none"
                onClick={() => checked(task.id)}
              >
                ✅
              </button>
            </div>
          );
        })}
      </div>
      <div className="w-[30%] my-[20px] mx-auto bg-pink-300 flex items-center justify-center rounded-2xl ">
        <span className="py-[10px] px-[20px] text-[30px]">
          Show results {data.length !== 0 && data[0].id} -{' '}
          {result > DATA.length ? DATA.length : result} of {DATA.length}
        </span>
        <br />
      </div>

      <table className="border-collapse w-[98%] m-auto">
        <thead>
          <tr className="bg-blue-300">
            {headers.map((header, i) => (
              <td
                className="border-black border-solid border-2 p-[10px]"
                key={i}
              >
                <li className="text-white w-full px-[10px] border-none bg-transparent list-none flex items-center justify-center">
                  {header.toUpperCase()}
                  {header === 'first_name' && (
                    <input
                      type="text"
                      autoFocus
                      value={search}
                      ref={searchRef}
                      onChange={e => setSearch(e.target.value)}
                    />
                  )}
                  {canBeSorted.includes(header) && (
                    <button
                      className="ml-[10px] cursor-pointer"
                      onClick={() => sortByToggle(header)}
                    >
                      sort
                    </button>
                  )}
                  {sorted !== 0 && (
                    <span className="ml-[5px]">
                      {' '}
                      {ascending ? '🔼' : '🔽'}{' '}
                    </span>
                  )}
                </li>
              </td>
            ))}
          </tr>
        </thead>
        {/* <thead>
         
        </thead> */}

        <tbody>
          {data.map((cell, i) => {
            const datas = Object.values(cell);
            return (
              <tr
                className={`p-[10px] ${(i + 1) % 2 === 0 && 'bg-pink-300'}`}
                key={cell.id}
              >
                {datas.map((data, i) => (
                  <td
                    className="border-solid border-black border-2 font-bold"
                    key={i}
                  >
                    {data}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>

        <tfoot className="bg-blue-300">
          <tr>
            {headers.map((header, i) => (
              <td key={i}>
                <li>
                  {header.toUpperCase()}
                  {header === 'first_name' && (
                    <input
                      type="text"
                      autoFocus
                      value={search}
                      ref={searchRef}
                      onChange={e => setSearch(e.target.value)}
                    />
                  )}
                  {canBeSorted.includes(header) && (
                    <button onClick={() => sortByToggle(header)}>sort</button>
                  )}
                  {sorted !== 0 && <span> {ascending ? '🔼' : '🔽'} </span>}
                </li>
              </td>
            ))}
          </tr>
        </tfoot>
      </table>

      {activePage === 1 && (
        <div className="w-[20%] m-auto flex flex-col items-center justify-center">
          <label>Show {showTables} </label> <br />
          <input
            type="range"
            value={showTables}
            max={DATA?.length}
            min={5}
            onChange={changeShowTables}
          />
        </div>
      )}
      <section className="w-[50%] my-[20px] mx-auto flex items-center justify-around bg-pink-300 p-[20px] rounded-[20px] ">
        {activePage !== 1 && (
          <button onClick={() => setActivePage(p => p - 1)}>Previous ⏮</button>
        )}
        <div className="numbs" ref={activeRef}>
          {Array.from({ length: pageNums }, (_, i) => (
            <button
              key={i}
            >
              {i + 1}
            </button>
          ))}
        </div>
        {activePage !== pageNums && (
          <button onClick={() => setActivePage(p => p + 1)}>Next ⏭</button>
        )}
      </section>
    </>
  );
};

export default Table;
