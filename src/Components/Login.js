import React, { useState } from "react";
import styled from "styled-components";

const Login = ({ onLogin, onGroupSelect, groups, selectedGroup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleGroupChange = (e) => {
    console.log(e.target.value);
    const selectedGroupId = e.target.value;
    onGroupSelect(selectedGroupId); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
    setUsername(""); 
    setPassword("");
  };

  return (
    <Main>
      <Form onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <InputSection>
        <label>
          <h3>
          Username:</h3>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          <h3>
          Password:</h3>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <label>
          <h3>
          Select Your Group:</h3>
          <select value={selectedGroup} onChange={handleGroupChange}>
            <option value="">-- Select Group --</option>
            {groups.map((group) => (
              <option key={group.id} value={group.id}>
                {group.name}
              </option>
            ))}
          </select>
        </label>
        </InputSection>
        <button type="submit">Login</button>
      </Form>
    </Main>
  );
};

export default Login;


const Main = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: whitesmoke;
`

const Form = styled.form`
width: 50vw;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
border-radius: 5px;
height: 60vh;
background-color: white;
h2{
  font-size: clamp(1em,2vw,2em);
}
button{
  padding: 1em 2em;
  width: 90%;
  background-color: RGB(30, 144, 255);
  color: white;
  outline: none;
  font-size: clamp(0.5em,2vw,1em);
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
}
`

const InputSection = styled.div`
height: 60%;
width: 90%;
display: flex;
flex-direction: column;
justify-content: space-around;
label{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h3{
    font-size: clamp(0.5em,1vw,1em);
  }
  input,select{
    padding: 1em;
    border-radius: 5px;
    border: 1px solid gray;
    outline: none;
    margin-top: 1em;
  }
}
`