import React from 'react';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => toggleTaskCompletion(task.id)}>
            {task.completed ? 'Incomplete' : 'Completed'}
          </button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
