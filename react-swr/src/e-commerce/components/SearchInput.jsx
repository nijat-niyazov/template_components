const SearchInput = ({ search, setSearch }) => {
  return (
    <div className="text-center grid gap-2 w-1/3 m-auto">
      <label className="text-xl italic text-white" htmlFor="">
        Find Product
      </label>
      <input
        type="text"
        autoFocus
        className="text-black p-2 rounded-xl placeholder:italic placeholder:text-gray-800 block bg-white w-full border border-slate-300  focus:outline-none focus:border-sky-500  placeholder='Search for anything...'"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
