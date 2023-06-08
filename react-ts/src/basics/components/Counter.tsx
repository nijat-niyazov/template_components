import { CounterProps } from '../types';

const Counter = ({ setCount, children }: CounterProps) => {
  // const [count, setCount] = useState<number>(0);

  return (
    <div className="grid gap-2 bg-pink-700 p-2 rounded-md ">
      <button
        className="bg-green-600 p-2"
        onClick={() => setCount(prev => prev + 1)}
      >
        Click me
      </button>
      <p> {children}</p>
    </div>
  );
};

export default Counter;
