import axios from 'axios';

import { Suspense, use } from 'react';

const fetchData = async id => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts/' + id
  );

  return data;
};

function App() {
  const Post = ({ id }) => {
    const { identity, title, body } = use(fetchData(id));
    return (
      <div>
        <h2 style={{ color: 'red' }}>
          {identity} {title}
        </h2>
        <section> {body}</section>
      </div>
    );
  };

  return (
    <Suspense
      fallback={
        <p
          style={{
            width: '100%',
            height: '100%',
            opacity: 0.5,
            background: 'gray',
          }}
        >
          Loading... please wait
        </p>
      }
    >
      {/* it checks if any child element have unfullfilled promise */}

      <Post id="1" />
      <Post id="2" />
      <Post id="3" />
    </Suspense>
  );
}

export default App;
