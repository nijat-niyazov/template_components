import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from './customHooks/dataFetcher';
import Story from './Story';
import styles from '../LayoutLoader.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect } from 'react';

const UIStories = () => {
  const { type } = useParams();
  const [displayLimit, setDisplayLimit] = useState(10);
  const [hasMore, setHasMore] = useState(true);
  const { stories, isLoading } = useFetchData(
    type,
    displayLimit - 9,
    displayLimit
  );

  // console.log(stories, type);

  const getMore = () => {
    if (displayLimit < 200) {
      setDisplayLimit(c => c + 10);
    } else {
      setHasMore(false);
    }
  };

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
        loading={<p>Loading...</p>}
        hasMore={hasMore}
        endMessage={<p>That's all we have</p>}
      >
        {stories?.map(({ data: story }, i) => (
          <Story key={i} story={story} />
        ))}
      </InfiniteScroll>

      {/* )} */}
    </>
  );
};

export default UIStories;
