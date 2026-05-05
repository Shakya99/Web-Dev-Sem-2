import React, { useState } from 'react';

// Child component receives data via props
const ChildComponent = ({ title, itemsArray }) => {
  return (
    <div>
      <h2>{title}</h2>
      {itemsArray.length === 0 ? (
        <p>No items available</p>
      ) : (
        <ul>
          {/* Render list using map() */}
          {itemsArray.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function App() {
  // Use useState to store items and title
  const [items, setItems] = useState(["Apple", "Banana"]);
  const [title] = useState("Parent Component Content");

  const addItem = () => {
    // Add new item to the list on click
    setItems([...items, "New Fruit"]);
  };

  return (
    <div>
      <h1>parent Component</h1>
      <button onClick={addItem}>Add Item</button>
      {/* Pass title and items array as props */}
      <ChildComponent title={title} itemsArray={items} />
    </div>
  );
}