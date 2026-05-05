import React, { useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const style = {
    height: "100vh",
    backgroundColor: isDark ? "black" : "white",
    color: isDark ? "white" : "black"
  };

  return (
    <div style={style}>
      <h1>{isDark ? "Dark" : "Light"} Mode</h1>
      <button onClick={() => setIsDark(!isDark)}>Toggle</button>
    </div>
  );
};

export default ThemeToggle;