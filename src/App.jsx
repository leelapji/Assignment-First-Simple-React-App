import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <div>
        <p>Count App</p>
      <span>{count}</span>
      </div>
      <div className="card">
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

export default App;
