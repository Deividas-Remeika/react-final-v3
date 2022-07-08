import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Login from "./Login";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./Register";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./Home";
import Add from "./Add";

function App() {
  const [token, setToken] = useState()
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar token={token} />
        <Routes>
          <Route path="/" element={<Login token={token} setToken={setToken} />} />
          <Route path="register" element={<Register />} />
          <Route path="/home" element={<Home token={token} setToken={setToken} />} />
          <Route path="/add" element={<Add token={token} setToken={setToken} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
