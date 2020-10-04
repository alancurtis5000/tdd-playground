import React from 'react';

export default function TestHeader({ text }) {
  return (
    <div>
      <h1 data-testid="header-text" className="specific-class">
        {text}
      </h1>
    </div>
  );
}
