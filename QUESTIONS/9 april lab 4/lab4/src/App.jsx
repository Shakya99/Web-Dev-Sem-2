import React, { useState, useEffect } from 'react';

export default function App() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const takenUsernames = ["admin", "user", "test"]; //

  useEffect(() => {
    if (!input) {
      setResult("");
      setLoading(false);
      return;
    }

    // Display "Checking..." as user types
    setLoading(true);
    setResult("Checking...");

    // Simulate API response using setTimeout
    const timer = setTimeout(() => {
      if (takenUsernames.includes(input.toLowerCase())) {
        setResult("Not available");
      } else {
        setResult("Available");
      }
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type username"
      />
      <p>{result}</p>
    </div>
  );
}