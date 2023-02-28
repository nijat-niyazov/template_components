import { useEffect } from 'react';

const useTitleSetter = async page => {
  useEffect(() => {
    document.title = page;

    return () => {
      document.title = 'React App';
    };
  }, [page]);
};

export default useTitleSetter;
