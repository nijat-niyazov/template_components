import { useState } from 'react';
import List from './components/List';
import SearchInput from './components/SearchInput';
import useDebounce from './hooks/useDebounce';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const debouncedValue = useDebounce(searchValue, 1000);

  return (
    <>
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <List searchTerm={debouncedValue} />
    </>
  );
}

export default App;
