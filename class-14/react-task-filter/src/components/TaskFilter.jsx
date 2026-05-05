import React, { useState } from 'react';

const TaskFilter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter(value);
    onFilterChange(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter tasks..."
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default TaskFilter;