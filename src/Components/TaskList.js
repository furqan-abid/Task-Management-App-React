import React from "react";
import styled from "styled-components";

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <Main>
      {tasks.map((task) => (
        <Task key={task.id}>
          <TaskHeading>{task.title}</TaskHeading>
          <TaskDesc>{task.description}</TaskDesc>
          <ButtonSection task={task.completed}>
            <button onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? "Incomplete" : "Completed"}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </ButtonSection>
        </Task>
      ))}
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
  border-radius: 5px ;
  margin-top: 1em;
  padding: 1em;

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
button{
    min-width: 8em;
    padding: 0.5em 1em;
    outline: none;
    border: 1px solid gray;
    border-radius: 5px;
    cursor: pointer;
    &:nth-child(1){
        background-color: ${props=>props.task?"RGB(255, 255, 0)":'RGB(144, 238, 144)'};
    }
    &:nth-child(2){
        background-color: RGB(204, 0, 0);
        color: white;
    }
}
`

