import React, { useState } from 'react';

const Counter = (props) => {
  const { initalState = 0 } = props;
  const [count, setCount] = useState(initalState);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="Counter">
      <div>Counter</div>
      <div data-testid="count">{count}</div>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
