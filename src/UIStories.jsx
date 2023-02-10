import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from './hooks/dataFetcher';
import Story from './Story';

const UIStories = () => {
  const { type } = useParams();
  const { stories, isLoading } = useFetchData(type);

  return (
    <React.Fragment>
      {isLoading ? (
        <div className="overlay">
          <p className="loading">Loading...</p>
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
