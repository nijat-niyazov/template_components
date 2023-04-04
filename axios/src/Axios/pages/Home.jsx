import React from 'react';
import CustomInstance from '../reqs/Custom';
import { FirstRequest, Headers } from '../reqs/exporter';
import GlobalInstance from '../reqs/Global';
import PostRequest from '../reqs/PostReq';

const Home = () => {
  return (
    <div style={{ marginTop: '140px' }}>
      {/* <FirstRequest /> */}
      {/* <Headers /> */}
      {/* <PostRequest /> */}
      {/* <GlobalInstance /> */}
      <CustomInstance />
    </div>
  );
};

export default Home;
