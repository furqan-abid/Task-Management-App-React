import React, { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import { TaskProvider } from "./Context/TaskContext";
import TaskManagement from "./Pages/TaskManagement";
import { groups } from "./MockApi/MockApi";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [user, setUser] = useState(null); 
  const [selectedGroup, setSelectedGroup] = useState(""); 

  const handleLogin = (username, password) => {
    if (isValidUser(username, password, selectedGroup)) {
      setUser({ username });
    } else {
      toast.error("Please Fill all feilds")
    }
  };

  const handleGroupChange = (e) => {
    setSelectedGroup(e);
  };

  const handleLogout = () => {
    setUser(null);
    setSelectedGroup(""); 
  };

  const isValidUser = (username, password, groupId) => {
      return username === "user" && password === "password"
  };

  return (
    <div className="App">
      {user && selectedGroup ? (
        <div>
          <TaskProvider groupId={selectedGroup}>
            <TaskManagement logout={handleLogout} />
          </TaskProvider>
        </div>
      ) : (
        <Login onLogin={handleLogin} onGroupSelect={handleGroupChange} groups={groups} />
      )}
      <ToastContainer/>
    </div>
  );
}

export default App;
