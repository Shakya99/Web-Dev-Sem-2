import React, { useState } from 'react';

function CounterApp() {
  // Initialize state 'count' with 0 and a function 'setCount' to update it
  const [count, setCount] = useState(0);

 
  const add = () => setCount(count + 1);
  const sub = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (

    <div >
      <h1>Counter: {count}</h1>
      
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterApp;
