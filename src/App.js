//Imports
import React from "react";
import { Routes, Route } from "react-router-dom";

//pages & components
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Teams from "./components/Teams/Teams";
import Players from "./components/Players/Players";
import Create from "./components/Create/Create";

//styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/players" element={<Players />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
