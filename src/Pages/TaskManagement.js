// App.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import TaskForm from '../Components/TaskForm';
import TaskList from '../Components/TaskList';
import { useTaskContext } from '../Context/TaskContext';

const TaskManagement = ({logout}) => {

  const { tasks, addTask, toggleTaskCompletion, deleteTask } = useTaskContext();

  return (
    <Main>
      <Heading>Task Management System <button onClick={()=>logout()}>Log out</button></Heading>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask}/>
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
justify-content: space-between;
align-items:center;
width: 60%;
font-size:3vw;
button{
    padding: 0.5em 1em;
    background-color: RGB(64, 64, 64);
    outline: none;
    border: 1px solid gray;
    border-radius: 5px;
    color: white;
    cursor: pointer;
}
`