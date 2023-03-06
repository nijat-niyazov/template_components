import React, { memo } from 'react';

const Item = ({ act }) => {
  console.log('item rendered', act);

  return <li>{act}</li>;
};

export default memo(Item);
