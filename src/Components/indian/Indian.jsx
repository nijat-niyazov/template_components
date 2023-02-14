import InfiniteScroll from 'react-infinite-scroll-component';

import React, { useState } from 'react';

const style = {
  border: '1px solid green',
  margin: '12px',
  padding: '8px',
};

const Indian = () => {
  const [data, setData] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);
  const fetchMoreData = () => {
    if (data.length < 200) {
      // call Api
      setTimeout(() => {
        setData(data.concat(Array.from({ length: 20 })));
      }, 500);
    } else {
      setHasMore(false);
    }
  };

  return (
    <InfiniteScroll
      dataLength={data.length} // it's important that infinitive must know how much there will be elements
      next={fetchMoreData} // when you reach bottom call function
      hasMore={hasMore} // there is more and we have to set it into last element to false
      loader={<p>Loading...</p>} // while loading component
      endMessage={<p>That all information we have...</p>} // when we reach end of data component
      // height={700} // height of scroll container
    >
      {data.map((item, i) => {
        return (
          <article style={style} key={i}>
            This is article num: {i + 1}
          </article>
        );
      })}
    </InfiniteScroll>
  );
};

export default Indian;
