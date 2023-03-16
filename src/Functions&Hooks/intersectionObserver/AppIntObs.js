// import './App.css';
import { useState } from 'react';
import LazyLoader from './lazyLoading';

const AppIntObs = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  LazyLoader();

  return (
    <div className="Indian">
      <h2>Lazy Load Images</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
        alt="img"
        width={500}
        height={250}
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/36/Large_bonfire.jpg"
        alt="img"
        width={500}
        height={250}
      />
      <img
        src="https://img.rasset.ie/0015d72f-1600.jpg"
        alt="img"
        width={500}
        height={250}
      />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <img
        src={''}
        data-src="https://i.ytimg.com/vi/IBOrp-ZU_pE/maxresdefault.jpg"
        alt=""
        width={500}
        height={250}
        onLoad={() => setIsLoaded(true)}
        className={!isLoaded ? 'loading' : 'loader'}
      />
      <img
        src={''}
        data-src="https://m.media-amazon.com/images/M/MV5BNzllYWYxNTktODUwYi00ODNhLWE1NzktOGU3MWEzMmU3MDY4XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
        alt=""
        width={500}
        height={250}
        onLoad={() => setIsLoaded(true)}
        className={!isLoaded ? 'loading' : 'loader'}
      />
    </div>
  );
};

export default AppIntObs;
