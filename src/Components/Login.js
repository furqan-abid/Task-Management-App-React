import React, { useState } from "react";

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
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <label>
          Select Your Group:
          <select value={selectedGroup} onChange={handleGroupChange}>
            <option value="">-- Select Group --</option>
            {groups.map((group) => (
              <option key={group.id} value={group.id}>
                {group.name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
