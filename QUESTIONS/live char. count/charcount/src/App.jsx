import React, { useState } from "react";
const CharacterDisplay = ({ count }) => {
  return <h2>Characters Typed: {count}</h2>;
};
const App = () => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div >
      <h1>Live Character Counter</h1>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
        
      />  
      <CharacterDisplay count={text.length} />
    </div>
  );
};

export default App;