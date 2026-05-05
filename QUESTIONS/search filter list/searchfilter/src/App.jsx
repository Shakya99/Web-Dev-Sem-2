import React, { useState } from "react";

const App = () => {
  // 1. Our data source
  const items = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

  // 2. State to track what the user types
  const [search, setSearch] = useState("");

  // 3. Filter logic: This creates a new array based on the search state
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Filter </h2>
      
      {/* 4. Controlled Input */}
      <input
        type="text"
        placeholder="Search fruit..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        
      />

      {/* 5. Rendering the filtered list */}
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;