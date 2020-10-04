import React, { useState } from 'react';

export default function Clickers() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => {
    // mocking asynchronous call with setTimeout
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  };

  return (
    <div>
      <span data-testid="count">{count}</span>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
