import React, { useState } from 'react';
import { useRef } from 'react';
import usePosts from './hooks/usePosts';
import Post from './Post';

const Example = () => {
  const [pageNum, setPageNum] = useState(1);
  const { isLoading, isError, error, results, hasNexPage } = usePosts(pageNum);

  const lastPostRef = useRef();

  const content = results.map((post, i) => {
    if (results.length === i + 1) {
      return <Post ref={lastPostRef} key={i} post={post} />;
    }
    return <Post key={i} post={post} />;
  });

  console.log(content);

  if (isError) return <p>Error: {error.message}</p>;
  return (
    <div>
      <h1>Infinite Sccroll</h1>
      {content}
      {isLoading && <p>Is loading...</p>}
    </div>
  );
};

export default Example;
