import { useEffect, useState } from 'react';
import DATA from '../data/data.json';

const Table = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [ascending, setAscending] = useState(true);
  const [sorted, setSorted] = useState(0);
  const [tasks, setTasks] = useState([
    'groupHeaders',
    'sorting',
    'filtering',
    'pagination',
    'results',
    'goToPage',
    'hiding-column',
    'changePlace',
  ]);

  useEffect(() => {
    setData(DATA.slice(page, page === 0 ? 20 : page * 2));
  }, [page]);

  const headers = Object.keys(DATA[0]);

  const canBeSorted = ['id', 'age'];

  const sortByToggle = key => {
    if (sorted === 2) {
      console.log('triggered');
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

  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '80%',
          margin: 'auto',
          justifyContent: 'space-between',
        }}
      >
        {tasks?.map((task, i) => {
          return (
            <div key={i} style={{ marginRight: '20px' }}>
              <label htmlFor={task}>{task}</label>
              <input type="checkbox" id={task} name={task} value={task} />
            </div>
          );
        })}
      </div>
      <div
        style={{
          width: '20%',
          margin: '20px auto',
          background: 'pink',
          padding: '20px',
          textAlign: 'center',
          fontSize: '20px',
        }}
      >
        <span>
          Show results {page + 20} of {DATA.length}
        </span>
        <br />
        <button disabled={page === 0} onClick={() => setPage(p => p - 20)}>
          Decrease ➖
        </button>
        <button
          disabled={page + 20 === 100}
          onClick={() => setPage(p => p + 20)}
        >
          Increase ➕
        </button>
      </div>

      <table
        style={{
          borderCollapse: 'collapse',
          width: '100%',
        }}
      >
        <thead>
          <tr
            style={{
              background: 'blue',
            }}
          >
            {headers.map((header, i) => (
              <td
                key={i}
                style={{
                  border: '1px solid white',
                  padding: '10px',
                }}
              >
                <li
                  style={{
                    color: 'white',
                    width: '100%',
                    padding: '0 10px',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                  }}
                  value={header}
                >
                  {header.toUpperCase()}
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
          {data.map(cell => (
            <tr key={cell.id}>
              <td
                style={{
                  border: '1px solid black',
                  padding: '10px',
                  background: cell.id % 2 === 0 ? 'pink' : '',
                }}
              >
                {cell.id}
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '10px',
                  background: cell.id % 2 === 0 ? 'pink' : '',
                }}
              >
                {cell.first_name}
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '10px',
                  background: cell.id % 2 === 0 ? 'pink' : '',
                }}
              >
                {cell.last_name}
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '10px',
                  background: cell.id % 2 === 0 ? 'pink' : '',
                }}
              >
                {cell.email}
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '10px',
                  background: cell.id % 2 === 0 ? 'pink' : '',
                }}
              >
                {cell.birth_date}
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '10px',
                  background: cell.id % 2 === 0 ? 'pink' : '',
                }}
              >
                {cell.age}
              </td>
              <td
                style={{
                  border: '1px solid black',
                  padding: '10px',
                  background: cell.id % 2 === 0 ? 'pink' : '',
                }}
              >
                {cell.phone}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr
            style={{
              background: 'blue',
            }}
          >
            {headers.map((header, i) => (
              <td
                key={i}
                style={{
                  border: '1px solid white',
                  padding: '10px',
                }}
              >
                <li
                  style={{
                    color: 'white',
                    width: '100%',
                    padding: '0 10px',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                  }}
                >
                  {header.toUpperCase()}
                </li>
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default Table;
