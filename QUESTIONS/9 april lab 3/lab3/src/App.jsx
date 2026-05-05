import React, { useState } from 'react';

export default function App() {
  // Create an array of at least 8-10 names
  const items = [ "Apple", "Banana", "Mango"];
  const [searchQuery, setSearchQuery] = useState("");

  // Filtering should be case-insensitive
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul>
        {filteredItems.length > 0 ? (
          // Use .map() for rendering
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          // Display message if no results
          <p>No results found</p>
        )}
      </ul>
    </div>
  );
}