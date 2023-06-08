import { useState } from 'react';
import Counter from './components/Counter';
import Heading from './components/Heading';
import List from './components/List';
import Section from './sections/Section';

const Home = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="bg-gray-700 font-sans h-screen text-white text-center">
      <Heading title="Welcome" />
      <Section>Footer section</Section>
      <Counter setCount={setCount}>
        You clicked into button {count} times
      </Counter>
      <List
        render={(item: string) => <span> {item} </span>}
        items={['Coffee', 'Lemonade', 'Beer']}
      />
    </div>
  );
};

export default Home;
