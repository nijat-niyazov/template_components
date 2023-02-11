import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from './customHooks/dataFetcher';
import Story from './Story';

import styles from '../LayoutLoader.module.css';

const UIStories = () => {
  const { type } = useParams();
  const [displayLimit, setDisplayLimit] = useState(10);
  const { stories, isLoading } = useFetchData(type, displayLimit);
  const [maxHeight, setMaxHeight] = useState(0);
  const [sum, setSum] = useState(0);

  // console.log(document.documentElement.offsetHeight);
  // // // height of website ⤴

  const handleScroll = () => {
    const another = [window.innerHeight, window.scrollY];
    console.log(
      window,
      window.innerHeight,
      window.scrollY,
      document.documentElement.offsetHeight
    );
    setSum(another.reduce((a, b) => a + b, 0));
    if (sum > maxHeight) {
      setMaxHeight(sum);
    } else {
      return sum;
    }
  };

  useEffect(() => {
    setDisplayLimit(c => c + 5);
  }, [maxHeight]);

  // console.log(maxHeight);

  useEffect(() => {
    // console.log('executed');
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [window.scrollY]);

  return (
    <>
      {isLoading ? (
        <div className={styles.overlay}>
          <p className={styles.loading}>Loading...</p>
        </div>
      ) : (
        <React.Fragment>
          {stories.map(({ data: story }) => (
            <Story key={story.id} story={story} />
          ))}
        </React.Fragment>
      )}
    </>
  );
};

export default UIStories;
