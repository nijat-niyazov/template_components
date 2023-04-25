import { memo } from 'react';

const Item = ({ todo }) => {
  console.log('item rendered', todo);

  return <li>{todo}</li>;
};

export default memo(Item);
