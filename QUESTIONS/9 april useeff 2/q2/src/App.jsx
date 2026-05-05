import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  // Runs only once (on mount)
  useEffect(() => {
    console.log("Component Mounted (runs once)");
  }, []);

  // Runs whenever 'count' changes
  useEffect(() => {
    console.log("Count Updated:", count);
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>useEffect Dependency Demo</h1>
      <h2>Count: {count}</h2>
      
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default App;