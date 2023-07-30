import React, { useState } from "react";
import styled from "styled-components";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </Form>
  );
};

export default TaskForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 30vh;
  justify-content: space-around;
  margin-top: 1em;
  input,
  textarea {
    padding: 1em;
    border-radius: 5px;
    min-height: 5em;
  }
  button {
    padding: 1em 2em;
    font-size: clamp(1vw, 1em, 4em);
    border-radius: 5px;
    background-color: RGB(30, 144, 255);
    color: white;
    border: 1px solid gray;
    cursor: pointer;
  }
`;
