import React, { useEffect } from "react";
import styled from "styled-components";
import { useTransition, animated, config } from 'react-spring';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  useEffect(() => {
    // Scroll to the bottom of the list when a new task is added
    const taskList = document.getElementById('task-list');
    if (taskList) {
      taskList.scrollTop = taskList.scrollHeight;
    }
  }, [tasks]);

  const taskTransitions = useTransition(tasks, {
    keys: (task) => task.id,
    from: { opacity: 0, transform: 'scale(0.95)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.95)' },
    config: config.gentle, // Adjust animation speed and feel
  });

  return (
    <Main id="task-list">
      {taskTransitions((style, item, tIndex) => (
        <AnimatedTask key={item.id} style={{ ...style }}>
          <Task>
            <TaskHeading>{item.title}</TaskHeading>
            <TaskDesc>{item.description}</TaskDesc>
            <ButtonSection task={item.completed}>
              <button onClick={() => toggleTaskCompletion(item.id)}>
                {item.completed ? "Incomplete" : "Completed"}
              </button>
              <button onClick={() => deleteTask(item.id)}>Delete</button>
            </ButtonSection>
          </Task>
        </AnimatedTask>
      ))}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </Main>
  );
};

export default TaskList;


const Main = styled.div`
  min-height: 30vh;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 1em;
`;

const Task = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 10em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  border: 1px dotted gray;
  border-radius: 5px;
  margin-top: 1em;
  padding: 1em;
  background-color: white; /* Set default background color */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Add box shadow */
`;

const TaskHeading = styled.h3`
  width: 30%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TaskDesc = styled.p`
  width: 30%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ButtonSection = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
  min-width: 10em;
  @media (max-width: 768px) {
    width: 100%;
  }
  button {
    min-width: 8em;
    padding: 0.5em 1em;
    outline: none;
    border: 1px solid gray;
    border-radius: 5px;
    cursor: pointer;
    &:nth-child(1) {
      background-color: ${(props) => (props.task ? "RGB(255, 255, 0)" : "RGB(144, 238, 144)")};
    }
    &:nth-child(2) {
      background-color: RGB(204, 0, 0);
      color: white;
    }
  }
`;

const AnimatedTask = styled(animated.div)`
  /* Animation Styles */
  will-change: transform, opacity;
  transform-origin: center;
`;