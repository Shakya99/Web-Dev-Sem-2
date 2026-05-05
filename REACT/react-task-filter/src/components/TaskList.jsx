import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;