import { useEffect, useState } from 'react';
import DATA from '../data/data.json';

const Table = () => {
  const [data, setData] = useState(DATA);
  const [ascending, setAscending] = useState(true);
  const [sorted, setSorted] = useState(0);

  const headers = Object.keys(data[0]);

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
          ascending ? a[key] - b[key] : b[key] - a[key]
        )
      );
    }
  };

  useEffect(() => {
    console.log(sorted, ascending);
  }, [sorted, ascending]);

  return (
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
                {header.toUpperCase()}{' '}
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
  );
};

export default Table;
