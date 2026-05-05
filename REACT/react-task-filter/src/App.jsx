import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import tasksData from './data/tasks';

const App = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div>
      <h1>Task Filter Application</h1>
      <TaskFilter setFilter={setFilter} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default App;