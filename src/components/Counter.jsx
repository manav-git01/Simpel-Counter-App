import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  // Initialize counter state with useState hook
  const [count, setCount] = useState(0);
  
  // Function to increment the counter
  const handleIncrement = () => {
    setCount(count + 1);
  };
  
  // Function to decrement the counter
  const handleDecrement = () => {
    setCount(count - 1);
  };
  
  // Function to reset the counter
  const handleReset = () => {
    setCount(0);
  };
  
  return (
    <div className="counter">
      <h1>Simple Counter App</h1>
      
      <div className="counter-display">
        <p className="count-value">{count}</p>
      </div>
      
      <div className="counter-buttons">
        <button className="btn decrement" onClick={handleDecrement}>-</button>
        <button className="btn reset" onClick={handleReset}>Reset</button>
        <button className="btn increment" onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default Counter; 