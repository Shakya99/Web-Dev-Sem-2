import React, { useState } from 'react';

const TemperatureStatus = ({ temperature }) => {
  // Convert input value properly to a number
  const tempNum = parseFloat(temperature);

  // Handle empty or invalid input
  if (temperature === "" || isNaN(tempNum)) {
    return null;
  }

  // Use conditional rendering
  return (
    <div>
      {tempNum > 35 ? <p>Status: Hot</p> : <p>Status: Normal</p>}
    </div>
  );
};

export default function App() {
  const [temp, setTemp] = useState("");

  return (
    <div>
      <h1>Temperature Tracker</h1>
      {/* Input field to update temperature */}
      <input 
        type="text" 
        value={temp} 
        onChange={(e) => setTemp(e.target.value)} 
        placeholder="Enter temperature"
      />
      {/* Pass temperature value as a prop */}
      <TemperatureStatus temperature={temp} />
    </div>
  );
}