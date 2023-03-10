import React, { useReducer } from 'react';

const reducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case 'set-todo':
      return { ...state, todo: action.value };

    case 'add-todo':
      return { ...state, todo: '', acts: [...state.acts, action.todo] };
  }
};

const AppReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    todo: '',
    acts: [],
  });

  const onChange = e => {
    dispatch({
      type: 'set-todo',
      value: e.target.value,
    });
  };

  const submitHandle = e => {
    e.preventDefault();
    dispatch({
      type: 'add-todo',
      todo: state.todo,
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <form action="" onSubmit={submitHandle}>
        <input type="text" value={state.todo} onChange={onChange} />
        <button disabled={!state.todo} type="submit">
          Add
        </button>
      </form>

      <ul>
        {state.acts?.map((act, i) => (
          <li key={i}>{act}</li>
        ))}
      </ul>
    </div>
  );
};

export default AppReducer;
