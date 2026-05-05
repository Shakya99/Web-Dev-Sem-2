import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const takenUsernames = ["admin", "user", "test"];

  const handleChange = (e) => {
    const value = e.target.value;
    setUsername(value);

    if (value === "") {
      setMessage("");
      return;
    }

    setLoading(true);
    setMessage("Checking...");

    // Simulate API response with a 1.5 second delay
    setTimeout(() => {
      if (takenUsernames.includes(value.toLowerCase())) {
        setMessage("Not available");
      } else {
        setMessage("Available");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div>
      <h2>Username Checker</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={handleChange}
      />
      <p>{message}</p>
    </div>
  );
};

export default App;