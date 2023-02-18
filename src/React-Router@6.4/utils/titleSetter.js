import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const useTitleSetter = async page => {
  // const [title, setTitle] = useState('Home');
  useEffect(() => {
    document.title = page;

    return () => {
      document.title = 'React App';
    };
  }, [page]);
};

export default useTitleSetter;
