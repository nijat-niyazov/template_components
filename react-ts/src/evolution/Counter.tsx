import { useReducer } from 'react';

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: 'increment' | 'decrement';
  payload: number;
};

type ResetAction = {
  type: 'reset';
};

type ActionParams = UpdateAction | ResetAction;
// ! We can't use optinal because we can get undefined if optinal payload is not sent
// ? if it's updated then payload number will be there, if not no need for payload.

const initialState = { count: 0 };

const reducer = (state: CounterState, action: ActionParams) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <span>Count is: {state?.count}</span>

      <div className="flex gap-2">
        <button
          className="bg-green-300 rounded-md p-2 border-none m-2"
          onClick={() => dispatch({ type: 'increment', payload: 10 })}
        >
          Increment 10
        </button>

        <button
          className="bg-red-300 rounded-md p-2 border-none m-2"
          onClick={() => dispatch({ type: 'decrement', payload: 10 })}
        >
          Decrement 10
        </button>
        <button
          className="bg-blue-300 rounded-md p-2 border-none m-2"
          onClick={() => dispatch({ type: 'reset' })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
