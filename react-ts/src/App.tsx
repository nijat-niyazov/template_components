import { useState } from 'react';
import toast from 'react-hot-toast';
import Private from './auth/Private';
import Profile from './auth/Profile';
import List from './generics/List';
import CustomComponent from './greet/CustomComponent';
import Greet from './greet/Greet';
import KeyValue from './keyValue/KeyValue';
import RandomNumber from './restrictions/RandomNumber';
import Toast from './templateLiteral/Toast';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn((prev: any) => !prev);
  };

  return (
    <div>
      <button onClick={() => toast.success('Position')}>toast it</button>
      <Toast position="bottom-left" />
      <button onClick={handleLogin}>Log {isLoggedIn ? 'out' : 'in'} </button>
      <Private isLoggedIn={isLoggedIn} component={Profile} />
      <Greet name={'Nijat'} isLoggedIn={isLoggedIn} messageCount={12} />
      <CustomComponent messageCount={12} name="Niki" />
      {/* <List
        items={['nijat', 'nazar', 'masti', 'qmeter']}
        onClick={item => console.log(item)}
      />
      <List items={[21, 23, 27, 25]} onClick={item => console.log(item)} /> */}
      <List
        items={[
          { name: 'nijat', age: 21 },
          { name: 'ibo', age: 23 },
        ]}
        onClick={item => console.log(item)}
      />

      <RandomNumber value={10} isNegative />
      <KeyValue name="Baku" capital="Azerbaijan" population={'1000'} />
    </div>
  );
}

export default App;
