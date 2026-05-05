import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Component Mounted - Fetching Data...");

    // Simulating API call
    setTimeout(() => {
      try {
        // Dummy data (instead of real API)
        const result = [
          { id: 1, name: "Amit" },
          { id: 2, name: "Neha" },
          { id: 3, name: "Rahul" }
        ];

        setData(result);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    }, 2000); // 2-second delay
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Data Fetching Example</h1>

      {/* Conditional Rendering */}
      {loading && <p>Loading...</p>}
      
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;