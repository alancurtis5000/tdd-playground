import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div>Sidebar</div>
      <Link to="/">Home</Link>
      <Link to="/Landing">Landing</Link>
      <Link to="/StyleGuide">StyleGuild</Link>
      <Link to="/NotFound">NotFound</Link>
      <Link to="/CounterPage">CounterPage</Link>
    </div>
  );
};

export default Sidebar;
