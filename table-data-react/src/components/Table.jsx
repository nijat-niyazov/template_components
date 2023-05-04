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

  useEffect(() => {
    console.log(data);
  }, [data]);

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

  useEffect(() => {
    const allPages = activeRef.current?.children;

    for (let i = 0; i < allPages.length; i++) {
      allPages[i].classList.remove('active');
    }

    const active = activeRef.current?.children[activePage - 1];

    active.classList.add('active');

    setResult(activePage * showTables);
  }, [activePage]);

  const headers = Object.keys(DATA[0]);

  return (
    <>
      <div className="tasks">
        {tasks?.map((task, i) => {
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
      </div>
      <div className="results">
        <span>
          Show results {data.length !== 0 && data[0].id} -{' '}
          {result > DATA.length ? DATA.length : result} of {DATA.length}
        </span>
        <br />
      </div>

      <table>
        <thead>
          <tr className="header-row">
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
        </thead>

        <tbody>
          {data.map(cell => {
            const datas = Object.values(cell);
            return (
              <tr key={cell.id}>
                {datas.map((data, i) => (
                  <td key={i}>{data}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            {headers.map((header, i) => (
              <td key={i}>
                <li>{header.toUpperCase()}</li>
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
      {activePage === 1 && (
        <div className="showTables">
          <label htmlFor="">Show {showTables} </label> <br />
          <input
            type="range"
            value={showTables}
            max={DATA.length}
            min={5}
            onChange={changeShowTables}
          />
        </div>
      )}
      <section className="pagination">
        {activePage !== 1 && (
          <button onClick={() => setActivePage(p => p - 1)}>Previous ⏮</button>
        )}
        <div className="numbs" ref={activeRef}>
          {Array.from({ length: pageNums }, (_, i) => (
            <button
              className="pageNum"
              onClick={e => setActivePage(Number(e.target.innerText))}
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
