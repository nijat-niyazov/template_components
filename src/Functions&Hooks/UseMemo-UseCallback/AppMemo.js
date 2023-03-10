import React, { useState, useCallback, useMemo, useReducer } from 'react';
import ActList from './ActList';
import AddTodo from './AddTodo';
import Header from './Header';

const AppMemo = () => {
  console.log('App rendered');

  const [todo, setTodo] = useState('');
  const [acts, setActs] = useState([]);
  const [search, setSearch] = useState('');
  const [count, setCount] = useState(0);

  const onChange = useCallback(e => {
    setTodo(e.target.value);
  }, []);

  const searchHandle = e => {
    setSearch(e.target.value);
  };

  const addAct = useCallback(
    e => {
      e.preventDefault();
      setActs(acts => [...acts, todo]);
      setTodo('');
    },
    [todo]
  );

  const filteredTodos = useMemo(() => {
    return acts.filter(act => act.includes(search));
  }, [acts, search]);

  return (
    <div style={{ padding: '20px' }}>
      <Header />

      <h3>{count}</h3>
      <button onClick={() => setCount(p => p + 1)}>aritr</button>
      <h1>ToDo APp</h1>
      <hr />
      <input value={search} type="text" onChange={searchHandle} />
      <AddTodo onChange={onChange} addAct={addAct} todo={todo} />
      <ActList acts={filteredTodos} />
    </div>
  );
};

export default AppMemo;
