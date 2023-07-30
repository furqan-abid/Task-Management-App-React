// App.js
import React, { useState } from 'react';
import TaskForm from '../Components/TaskForm';
import TaskList from '../Components/TaskList';

const TaskManagement = () => {
  // Sample initial data for tasks and user groups
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description for Task 1', completed: false },
    { id: 2, title: 'Task 2', description: 'Description for Task 2', completed: true },
  ]);

  // Function to add a new task
  const addTask = (title, description) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Function to toggle the task's completion status
  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <h1>Task Management System</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
    </div>
  );
};

export default TaskManagement;
