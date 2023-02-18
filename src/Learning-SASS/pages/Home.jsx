import React from 'react';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div>
      <h1
      // className={styles.first}
      >
        Hello world
      </h1>
      <a href="#">this is link tag</a>
      <p className="error">this is an error</p>
      <p className="notification">this is new natification</p>
      <button>Button element</button>
    </div>
  );
};

export default Home;
