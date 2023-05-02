const FilteringTable = ({ filter, setFilter }) => {
  return (
    <div>
      <label htmlFor="">Search for: {filter}</label>
      <input
        type="text"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
    </div>
  );
};

export default FilteringTable;
