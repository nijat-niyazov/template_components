import { useEffect, useMemo, useRef, useState } from 'react';
import DATA from '../data/data.json';
import { features } from '../data/tasks';
// import './table.scss';

const headers = Object.keys(DATA[0]);

const Table = () => {
  const [data, setData] = useState([]);
  const [sorting, setSorting] = useState({ clicked: 0, ascending: true });
  const [activePage, setActivePage] = useState(1);
  const [result, setResult] = useState(20);
  const [showTables, setShowTables] = useState(result);
  const [search, setSearch] = useState('');
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) ?? features
  );

  // =============== RESULTS ==============

  useEffect(() => {
    setData(DATA.slice(result - showTables, result));
  }, [result]);

  // ============== FILTERING ===============

  useEffect(() => {
    if (!search) {
      setData(DATA.slice(result - showTables, result));
    } else {
      const debounced = setTimeout(() => {
        setData(
          DATA.filter(d =>
            d.first_name.toLowerCase().includes(search.toLowerCase())
          )
        );
      }, 300);
      return () => {
        clearTimeout(debounced);
      };
    }
  }, [search]);

  // ===== CLEAR SEARCH ON CLICK OUTSIDE OF INPUT =====

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

  // ========== CHANGE SHOW TABLES ===============

  const changeShowTables = e => {
    setShowTables(parseInt(e.target.value));
    setResult(parseInt(e.target.value));
  };

  // ========== SORTING COLUMNS ===============

  const canBeSorted = ['id', 'age'];

  const sortByToggle = key => {
    if (sorting.clicked === 2) {
      setSorting({ clicked: 0, ascending: true });
      setData([...data].sort((a, b) => a.id - b.id));
    } else {
      setSorting({
        clicked: sorting.clicked + 1,
        ascending: !sorting.ascending,
      });
      setData(
        [...data].sort((a, b) =>
          sorting.ascending ? b[key] - a[key] : a[key] - b[key]
        )
      );
    }
  };

  // ==========  PAGINATION ==============

  const activeRef = useRef();

  const pageNums = useMemo(() => {
    return search && data.length !== showTables
      ? Math.ceil(data?.length / showTables)
      : Math.ceil(DATA?.length / showTables);
  }, [showTables, search, data]);

  useEffect(() => {
    const allPages = activeRef.current?.children;

    for (let i = 0; i < allPages.length; i++) {
      allPages[i].classList.remove('active');
    }

    const active = activeRef.current?.children[activePage - 1];

    active.classList.add('active');

    setResult(activePage * showTables);
  }, [activePage]);

  {
    /* <div className="tasks" style={{ marginBottom: '50px' }}>
        {tasks?.map(task => {
          return (
            <div
              className={`task  ${task.checked ? 'checked' : ''}`}
              key={task.id}
            >
              <span>{task.task}</span>
              <button onClick={() => checked(task.id)}>✅</button>
            </div>
          );
        })}
      </div> */
  }

  // ===========================
  {
    /* {header === 'first_name' && (
                      <input
                        className="text-black ml-2 px-2"
                        type="text"
                        autoFocus
                        value={search}
                        ref={searchRef}
                        onChange={e => setSearch(e.target.value)}
                      />
                    )} */
  }
  {
    /* {canBeSorted.includes(header) && (
                    <button onClick={() => sortByToggle(header)}>sort</button>
                  )}
                  {sorting.clicked !== 0 && (
                    <span> {sorting.ascending ? '🔼' : '🔽'} </span>
                  )} */
  }

  return (
    <div className="h-window bg-gray-500 w-full p-10">
      <h1 className="uppercase mb-4 font-bold inline-block">
        Responsive Tables
      </h1>

      <table className="w-full bg-[#323232] p-4 border-collapse text-white">
        <caption className="p-4 text-left bg-gray-900 text-[25px] uppercase font-bold ">
          Show results {data.length !== 0 && data[0].id} -{' '}
          {result > DATA.length ? DATA.length : result} of {DATA.length}
        </caption>

        <thead>
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                className="p-4 text-left bg-gray-900 bg-opacity-50 sm:hidden"
              >
                {header.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((cell, i) => {
            const datas = Object.values(cell);
            // const keys = Object.keys(cell);
            const keys = [
              'ID: ',
              'Name: ',
              'Last Name: ',
              'Email: ',
              'Birth Date: ',
              'Age: ',
              'Phone: ',
            ];
            return (
              <tr
                className={`${i % 2 === 0 ? 'bg-gray-900 bg-opacity-25' : ''}`}
                key={cell.id}
              >
                {datas.map((data, i) => (
                  <td
                    cell={keys[i]}
                    className={`p-4 sm:block sm:before:content-[attr(cell)] sm:before:mr-0.5 before:text-gray-400 before:font-extrabold`}
                    key={i}
                  >
                    {data}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            {headers.map((header, i) => (
              <td className="p-4 sm:hidden" key={i}>
                {header.toUpperCase()}
              </td>
            ))}
          </tr>
        </tfoot>
      </table>

      <div className="showTables sm:hidden">
        <label htmlFor="">Show {showTables} </label> <br />
        <input
          type="range"
          value={showTables}
          max={DATA.length}
          min={5}
          onChange={changeShowTables}
        />
      </div>

      <section className="pagination sm:hidden">
        {activePage !== 1 && (
          <button onClick={() => setActivePage(p => p - 1)}>Previous ⏮</button>
        )}
        <div className="numbs" ref={activeRef}>
          {Array.from({ length: pageNums }, (_, i) => (
            <button
              className="pageNum"
              onClick={e => setActivePage(parseInt(e.target.innerText))}
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
    </div>
  );
};

export default Table;
