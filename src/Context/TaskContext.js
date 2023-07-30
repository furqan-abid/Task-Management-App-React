import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getTasksByGroup as mockGetTasksByGroup,
  addTask as mockAddTask,
  updateTask as mockUpdateTask,
  deleteTask as mockDeleteTask,
} from "../MockApi/MockApi";

const TaskContext = createContext();

const initialTasksByGroup = {
  1: [
    { id: 1, title: "Group 1 Task 1", description: "Description for Group 1 Task 1", completed: false },
    { id: 2, title: "Group 1 Task 2", description: "Description for Group 1 Task 2", completed: false },
  ],
  2: [
    { id: 1, title: "Group 2 Task 1", description: "Description for Group 2 Task 1", completed: false },
    { id: 2, title: "Group 2 Task 2", description: "Description for Group 2 Task 2", completed: false },
  ],
};

const TaskProvider = ({ children, groupId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await mockGetTasksByGroup(groupId);
      setTasks(tasks);
    };

    if (groupId && groupId !== "") {
      fetchTasks();
    } else {
      if (initialTasksByGroup[groupId]) {
        setTasks(initialTasksByGroup[groupId]);
      } else {
        setTasks([]);
      }
    }
  }, [groupId]);

  const addTask = async (title, description) => {
    const newTask = await mockAddTask(groupId, title, description); 
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTaskCompletion = async (taskId, completed) => {
    await mockUpdateTask(taskId, completed);
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...task, completed } : task))
    );
  };

  const deleteTask = async (taskId) => {
    await mockDeleteTask(taskId);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        toggleTaskCompletion,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};

export { TaskProvider, useTaskContext };
