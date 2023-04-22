import { useCallback, useMemo, useRef, useState } from 'react';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import List from './components/List';
import { arr } from './components/arr';

function App() {
  console.log('App rendered');

  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState('c');
  const [people, setPeople] = useState(arr);
  const [creator, setCreator] = useState('');
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);
  const inputRef = useRef(null);

  /**
   * * we use USECALLBACK when we pass method by prop to child element. Because on render of parent the method(function) because of fact it is object will render child elemnet that'swhy we need execute function when something in changed on dependency
   */

  const submitForm = useCallback(
    e => {
      e.preventDefault();
      inputRef.current.focus();
      setList(prev => [...prev, todo]);
      /**
       * ! because this todo must be changed and not used of useState initial value
       */
      setTodo('');
    },
    [todo]
  );

  /**
   * ! if dependency is empty todo will be emtpy because in useState initial value is empty and we don't calcucalte this function based on any dependency. so if todo changes useCallBack function will be rendered
   */

  /**
   * * we use USECALLBACK when we pass method by prop to child element. Because on render of parent the method(function) because of fact it is object will render child elemnet that'swhy we need execute function when something in changed on dependency
   */
  const onChange = useCallback(e => setTodo(e.target.value), []);

  /**
   * ! here we don't use any dependency because we don't need value of useState it comes from e.target.value
   */

  const searchTodo = e => {
    setSearch(e.target.value);
  };

  /**
   * ! in every render because it's array&object(NoN-Primitive) it will be stored in different area than previous on memory that's why list will be rendered each time to prevent it we can use USEMEMO
   */

  const filteredTodos = useMemo(() => {
    return list.filter(todo =>
      todo.toLowerCase().includes(search.toLowerCase())
    );
  }, [list, search]);

  // const filteredTodos = list.filter(todo =>
  //   todo.toLowerCase().includes(search.toLowerCase())
  // );

  // const men = people.filter(({ name }) => name.toLowerCase().includes(creator));

  const men = useMemo(() => {
    return people.filter(({ name }) => name.toLowerCase().includes(creator));
  }, [creator]);

  return (
    <div style={{ padding: '20px' }}>
      <input
        id="find"
        type="text"
        placeholder="Creator"
        value={creator}
        onChange={e => setCreator(e.target.value)}
      />
      <Header creator={creator} 
      people={men}
       />
      <h3>{count}</h3>
      <button onClick={() => setCount(p => p + 1)}>increase </button>
      {/* when increase button is clicked AddTodo is rendered because we passed methods by props. They are functions and as we know functions are objects and they stored in different areas in memory */}
      <br />
      <hr />
      <h1>Todo App</h1>
      <label htmlFor="find">Find</label>
      <input
        id="find"
        type="text"
        placeholder="Find Todo"
        value={search}
        onChange={searchTodo}
      />
      <br /> <hr />
      <AddTodo
        onChange={onChange}
        submitForm={submitForm}
        todo={todo}
        ref={inputRef}
        /**
         * * we pas ref and we will acces it by in childElement adding forwardRef
         */
      />
      <List list={filteredTodos} />
    </div>
  );
}

export default App;
