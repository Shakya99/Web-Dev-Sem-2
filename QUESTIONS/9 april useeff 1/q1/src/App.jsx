import React, { useState, useEffect } from "react";

// Child Component
const DemoComponent = () => {
  useEffect(() => {
    console.log("Component Mounted ✅");

    // Cleanup function (runs on Unmount)
    return () => {
      console.log("Component Unmounted ❌");
    };
  }, []); // Empty array ensures this runs only once on mount

  return <h2>Demo Component is Visible</h2>;
};

// Parent Component
const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>useEffect Demo</h1>
      
      <button onClick={() => setShow(true)}>Show</button>
      <button onClick={() => setShow(false)}>Hide</button>

      {/* Conditional Rendering */}
      {show && <DemoComponent />}
    </div>
  );
};

export default App;