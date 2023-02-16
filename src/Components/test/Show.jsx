import React from 'react';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useParams } from 'react-router-dom';
import useDataFetcher from './dataFetch';
import Story from './Story';

const ShowStories = () => {
  const { type } = useParams();
  const [limit, setLimit] = useState(20);
  const [hasMore, setHasMore] = useState(true);
  // const { type } = props.match.params;
  const { isLoading, stories } = useDataFetcher(type, limit - 19, limit);

  console.log(stories, limit - 19, limit);

  // const getMore = () => {
  //   if (limit < 200) {
  //     setLimit(c => c + 10);
  //   } else {
  //     setHasMore(false);
  //   }
  // };

  window.addEventListener('scroll', function () {
    console.log(
      document.documentElement.offsetHeight,
      window.scrollY,
      window.innerHeight
    );
  });

  // // height of website ⤴

  if (
    window.innerHeight + document.documentElement.scrollTop >
    window.innerHeight
  ) {
    return;
  }

  return (
    <React.Fragment>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <React.Fragment>
          <p>okay</p>
          {stories.map(({ data: story }, i) => (
            <Story key={i} story={story} />
          ))}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ShowStories;

// <InfiniteScroll
//   dataLength={stories.length}
//   hasMore={hasMore}
//   next={getMore}
// >

{
  /* </InfiniteScroll> */
}
