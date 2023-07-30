// App.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
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
    toast.success("Task Added successfully")
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

    toast.success("Task Deleted successfully")
  };

  const reorderTasks = (startIndex, endIndex) => {
    setTasks((prevTasks) => {
      const updatedTasks = Array.from(prevTasks);
      const [reorderedTask] = updatedTasks.splice(startIndex, 1);
      updatedTasks.splice(endIndex, 0, reorderedTask);
      return updatedTasks;
    });
  };

  return (
    <Main>
      <Heading>Task Management System</Heading>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} reorderTasks={reorderTasks}/>
    </Main>
  );
};

export default TaskManagement;


const Main = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`

const Heading = styled.h1`
height: 10vh;
display: flex;
justify-content: center;
align-items:center;
`