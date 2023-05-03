const FilterByCol = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <div>
      <label htmlFor="">Search for: {filterValue}</label>
      <input
        type="text"
        value={filterValue || ''}
        onChange={e => setFilter(e.target.value)}
      />
    </div>
  );
};

export default FilterByCol;
