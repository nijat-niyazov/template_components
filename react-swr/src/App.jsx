import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Child from './Child';
import { fetchTodos } from './api/mainApi';
import TodoList from './Pages/TodoList';
import Items from './Pages/Items';
import TodoList2 from './project/features/todos/TodoList2';

function App() {
  // const [showChild, setShowChild] = useState(false);
  // useSWR('/api/user', fetchTodos, {
  //   onSuccess: () => console.log('Parent success'),
  // });

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowChild(true);
  //   }, 3000);
  // }, []);

  return (
    <>
      <TodoList />
      {/* {showChild && <Child />} */}
      {/* <Child index={1} />
      <Child index={2} />
      <Child index={3} />
      <Child index={4} /> */}
    </>
  );
}

export default App;
