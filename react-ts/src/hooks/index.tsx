import {
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

interface User {
  id: number;
  username: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = n => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 30;

const Home = () => {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);
  const [resultato, setResultato] = useState<number | null>(null);

  const inputRef = useRef<HTMLInputElement>(null!);

  console.log(inputRef?.current, inputRef?.current?.value);

  useEffect(() => {
    return () => {
      console.log('unmounting');
    };
  }, [users]);

  const increaseCount = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => {
      setCount(prev => prev + 1);
    },
    []
  );

  const result = useMemo(() => {
    console.log('memo');

    return fib(myNum);
  }, [myNum]);

  useEffect(() => {
    console.log('effect');
    setResultato(fib(myNum));
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <p>Main result is {result}</p>
      <p>Debounced result is {resultato}</p>
      <input
        type="text"
        ref={inputRef}
        // onChange={e => (inputRef?.current?.value = e.target.value)}
      />
    </div>
  );
};

export default Home;
