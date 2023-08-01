import { toast } from "react-toastify";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const groups = [
  { id: 1, name: "Group 1" },
  { id: 2, name: "Group 2" },
];

const tasksByGroup = {
};

const getTasksByGroup = async (groupId) => {
  await delay(500); 
  return tasksByGroup[groupId] || [];
};

const addTask = async (groupId, title, description) => {
  await delay(500); 
  const newTask = {
    id: Date.now(), 
    groupId,
    title,
    description,
    completed: false,
  };

  if (!tasksByGroup[groupId]) {
    tasksByGroup[groupId] = [];
  }

  tasksByGroup[groupId].push(newTask);
  toast.success("Task Added successfully");
  return newTask;
};

const updateTask = async (taskId, completed) => {
  await delay(500); 
  for (const groupId in tasksByGroup) {
    const task = tasksByGroup[groupId].find((t) => t.id === taskId);
    if (task) {
      task.completed = completed;
      return task;
    }
  }
  return null; // Task not found
};

const deleteTask = async (taskId) => {
  await delay(500); 
  for (const groupId in tasksByGroup) {
    const taskIndex = tasksByGroup[groupId].findIndex((t) => t.id === taskId);
    if (taskIndex !== -1) {
      tasksByGroup[groupId].splice(taskIndex, 1);
      toast.success("Task Deleted successfully");
      return;
    }
  }
  toast.error("Task not found");
};

export { groups, getTasksByGroup, addTask, updateTask, deleteTask };
