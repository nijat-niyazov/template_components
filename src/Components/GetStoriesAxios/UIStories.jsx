import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from './customHooks/dataFetcher';
import Story from './Story';

import styles from '../LayoutLoader.module.css';

const UIStories = () => {
  const { type } = useParams();
  const { stories, isLoading } = useFetchData(type);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default UIStories;
