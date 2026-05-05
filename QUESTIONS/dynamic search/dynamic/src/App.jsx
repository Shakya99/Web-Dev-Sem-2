
import React,{useState} from "react";

const App = () => {
  const names =["luffy","zoro","nami","ussop","sanji"]
  const [search,setSearch]=useState("");
  const filteredNames=names.filter((names)=>
  names.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div>
      <h2>Dynamic Search</h2>
      
      {/* 4. Input field linked to state */}
      <input
        type="text"
        placeholder="Search name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 5. Conditional Rendering */}
      {filteredNames.length > 0 ? (
        <ul>
          {filteredNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )} 
      
    </div>
  );
};

export default App;
