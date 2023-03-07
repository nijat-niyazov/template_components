import React, { memo } from 'react';

const Header = () => {
  console.log('header rendred');

  return <div>Header</div>;
};

export default memo(Header);
