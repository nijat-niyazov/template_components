import { useCallback, useReducer, useRef } from 'react';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import List from './components/List';

function Reducer() {
  // console.log('Reducer rendered');

  const initialState = {
    count: 0,
    todo: '',
    search: '',
    list: [],
  };

  const valueHandler = (state, action) => {
    console.log(state, action);
    switch (action.type) {
      case 'set_todo':
        return { ...state, todo: action.value };
      case 'make_list':
        return { ...state, todo: '', list: [...state.list, action.value] };
      case 'searching':
        return { ...state, search: action.value };
      case 'increase_count':
        return { ...state, count: state.count + 1 };
      case 'remove_todo':
        return {
          ...state,
          list: [state.list.filter(todo => todo.id !== action)],
        };
      default:
        return state;
    }
  };

  const inputRef = useRef();
  const [state, dispatch] = useReducer(valueHandler, initialState);

  const submitForm = useCallback(
    e => {
      e.preventDefault();
      inputRef.current.focus();
      dispatch({
        type: 'make_list',
        value: { id: 1, name: state.todo },
      });
    },
    [state.todo]
  );

  const onChange = useCallback(
    e => dispatch({ type: 'set_todo', value: e.target.value }),
    []
  );

  const searchTodo = e => {
    dispatch({
      type: 'searching',
      value: e.target.value,
    });
  };

  const increaseCount = () =>
    dispatch({
      type: 'increase_count',
      value: state.count + 1,
    });

  return (
    <div style={{ padding: '20px' }}>
      <Header />
      <h3>{state.count}</h3>
      <button onClick={increaseCount}>increase </button>
      {/* when increase button is clicked AddTodo is rendered because we passed methods by props. They are functions and as we know functions are objects and they stored in different areas in memory */}
      <br />
      <hr />
      <h1>Todo App</h1>
      <label htmlFor="find">Find</label>
      <input
        id="find"
        type="text"
        placeholder="Find Todo"
        value={state.search}
        onChange={searchTodo}
      />
      <br /> <hr />
      <AddTodo
        onChange={onChange}
        submitForm={submitForm}
        todo={state.todo}
        ref={inputRef}
        /**
         * * we pas ref and we will acces it by in childElement adding forwardRef
         */
      />
      <List list={state.list} />
    </div>
  );
}

export default Reducer;
