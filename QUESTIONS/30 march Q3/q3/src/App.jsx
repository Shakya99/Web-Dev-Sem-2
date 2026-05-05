import React, { useState } from "react";

// Child Component
const ChildComponent = ({ title, items }) => {
  return (
    <div>
      <h2>{title}</h2>

      {items.length === 0 ? (
        <p>No items available</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Parent Component
const ParentComponent = () => {
  const [items, setItems] = useState(["Apple", "Banana", "Mango"]);
  const title = "Fruit List";

  // Clear all items
  const clearItems = () => {
    setItems([]);
  };

  return (
    <div>
      <h1>Parent Component</h1>

      <button onClick={clearItems}>Clear All Items</button>

      <ChildComponent title={title} items={items} />
    </div>
  );
};

export default ParentComponent;