import React from "react";

// 1. Child Component: Receives 'name' and 'marks' as props
const StudentResultCard = ({ name, marks }) => {
  
  // 2. Calculate Total using .reduce()
  // sum is the running total, m is the current number in the array
  const total = marks.reduce((sum, m) => sum + m, 0);

  // 3. Calculate Average
  const average = total / marks.length;

  // 4. Determine Status (Pass if 40 or above)
  const status = average >= 40 ? "Pass" : "Fail";

  return (
    <div >
      <h2>Student Result</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Total Marks:</strong> {total}</p>
      <p><strong>Average Marks:</strong> {average.toFixed(2)}</p>
      <p><strong>Status:</strong> {status}</p>
    </div>
  );
};

// 5. Parent Component (Usage)
const App = () => {
  return (
    <div>
      <StudentResultCard 
        name="Amit" 
        marks={[70, 80, 60, 90]} 
      />
    </div>
  );
};

export default App;