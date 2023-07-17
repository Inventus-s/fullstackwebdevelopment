import './Counter.css';

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
    <h1 className='header'>Counter App</h1>
    <div className='container'>
      
      <h2 className='count'>{count}</h2>
      <div className="button">
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      </div>
      
    </div>
    </>
  );
};

export default Counter;
