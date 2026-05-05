import React, { useState } from "react";

// 1. Child Component: Receives 'temperature' as a prop
const TemperatureStatus = ({ temperature }) => {
  // Handle invalid or empty input first (Early Return)
  if (temperature === "" || isNaN(temperature)) {
    return <p>Please enter a valid temperature</p>;
  }

  return (
    <div>
      {/* Conditional Rendering using Ternary Operator */}
      {temperature > 35 ? (
        <h2 style={{ color: "red" }}>Status: Hot 🔥</h2>
      ) : (
        <h2 style={{ color: "blue" }}>Status: Normal 😊</h2>
      )}
    </div>
  );
};

// 2. Parent Component
const App = () => {
  const [temp, setTemp] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    
    // Convert to number safely. If empty, keep it as empty string.
    setTemp(value === "" ? "" : Number(value));
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Temperature Checker</h1>
      
      <input
        type="text"
        placeholder="Enter temperature"
        onChange={handleChange}
        style={{ padding: "8px", fontSize: "16px" }}
      />

      {/* Pass the temp state down as a prop */}
      <TemperatureStatus temperature={temp} />
    </div>
  );
};

export default App;