import React, { useState } from "react";

// Child Component
// Receives 'title' and 'items' as props from the Parent
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
  // 1) Initialize state for title and a list of items
  const [title] = useState("Fruit List");
  const [items, setItems] = useState(["Apple", "Banana"]);

  // 4) Function to add a new item to the list
  const addItem = () => {
    const newItem = "Mango";
    // Updates state using the spread operator to preserve previous items
    setItems(prev => [...prev, newItem]);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      
      {/* Button to trigger state update */}
      <button onClick={addItem}>Add Item</button>

      {/* 2) Passing data to Child via props */}
      <ChildComponent title={title} items={items} />
    </div>
  );
};

export default ParentComponent;