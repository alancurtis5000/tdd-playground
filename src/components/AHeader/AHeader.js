import React from 'react';
import { Link } from 'react-router-dom';

const AHeader = () => {
  return (
    <div className="AHeader">
      AHeader
      <Link to="/">Home /</Link>
      <Link to="APage01">APage01</Link>
      <Link to="NotFound">NotFound</Link>
      <Link to="Landing">Landing</Link>
      <Link to="StyleGuide">StyleGuide</Link>
    </div>
  );
};

export default AHeader;
