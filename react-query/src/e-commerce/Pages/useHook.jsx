import React from 'react'

const useHook = (query) => {

  const getData = async query => {
    try {
      const { data } = await mainApi.get('products?q=' + query);
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>useHook</div>
  )
}

export default useHook