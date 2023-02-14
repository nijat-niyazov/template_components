import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from './customHooks/dataFetcher';
import Story from './Story';
import styles from '../LayoutLoader.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';

const UIStories = () => {
  const { type } = useParams();
  const [displayLimit, setDisplayLimit] = useState(10);
  const [hasMore, setHasMore] = useState(true);
  const { stories, isLoading } = useFetchData(type, displayLimit);

  console.log(stories.length);

  const getMore = () => {
    if (displayLimit < 200) {
      setDisplayLimit(c => c + 20);
    } else {
      setHasMore(false);
    }
  };

  const loading = (
    <div className={styles.overlay}>
      <p className={styles.loading}>Loading...</p>
    </div>
  );

  return (
    <>
      {/* {isLoading ? (
        <div className={styles.overlay}>
          <p className={styles.loading}>Loading...</p>
        </div>
      ) : ( */}
      <InfiniteScroll
        dataLength={stories.length}
        next={getMore}
        loading={loading}
        hasMore={hasMore}
        endMessage={<p>That's all we have</p>}
      >
        {stories.map(({ data: story }) => (
          <Story key={story.id} story={story} />
        ))}
      </InfiniteScroll>
      {/* )} */}
    </>
  );
};

export default UIStories;
