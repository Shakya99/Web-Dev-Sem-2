import { useState } from 'react'

import './App.css'

import TemperatureStatus from "./components/TemperatureStatus";

function App() {
  const [temperature, setTemperature] = useState("");

  const handleChange = (e) => {
    setTemperature(e.target.value);
  };

  return (
    <div>
      <h1>Temperature Checker</h1>

      <input
        type="text"
        placeholder="Enter temperature"
        value={temperature}
        onChange={handleChange}
      />

      {/* Pass as prop */}
      <TemperatureStatus temp={temperature} />
    </div>
  );
}

export default App
