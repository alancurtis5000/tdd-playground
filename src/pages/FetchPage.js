import React from 'react';
import Fetch01 from '../components/Fetch01';
import Fetch02 from '../components/Fetch02';

const FetchPage = () => {
  return (
    <div className="FetchPage page">
      FetchPage
      <Fetch01 />
      <Fetch02 url={'/api/test'} />
    </div>
  );
};

export default FetchPage;
