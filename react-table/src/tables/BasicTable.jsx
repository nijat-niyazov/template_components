import { useMemo } from 'react';
import { useFilters, useGlobalFilter, useSortBy, useTable } from 'react-table';
import { cols } from '../data/cols';
import DATAS from '../data/date';
import FilteringTable from './FIlteredTable';

const BasicTable = () => {
  const columns = useMemo(() => cols, []);
  const data = useMemo(() => DATAS, []);

  // const defaultCol = useMemo(() => {
  //   return {
  //     Filter: FilterByCol,
  //   };
  // }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    state: { globalFilter },
    setGlobalFilter,

    footerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useFilters, useGlobalFilter, useSortBy);

  return (
    <div>
      <FilteringTable filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {...headerGroup.headers.map(col => (
                // each header access its column
                <th
                  {...col.getHeaderProps(col.getSortByToggleProps())}
                  // and column gets its header
                  style={{
                    borderBottom: 'solid 3px red',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                >
                  {col.render('Header')}
                  {/* in data our key   */}

                  {col.canFilter ? col.render('Filter') : null}

                  <span>
                    {col.isSorted ? (col.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',
                        border: 'solid 1px gray',
                        background: 'papayawhip',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map(group => (
            <tr {...group.getFooterGroupProps()}>
              {group.headers.map(col => (
                <td
                  style={{
                    borderTop: 'solid 3px red',
                    background: 'blue',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                  {...col.getFooterProps()}
                >
                  {col.render('foot')}
                </td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
};

export default BasicTable;
