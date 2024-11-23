import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Notes from "./components/Notes";
import Videos from "./components/Videos";
import Contact from "./components/Contact";
import Login from "./components/Login";
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  // Function to update the login status
  const handleLogin = (status) => {
    setIsLoggedIn(status); // If login is successful, set it to true
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Conditionally render Notes and Videos routes based on login status */}
          <Route path="/notes" element={isLoggedIn ? <Notes /> : <Login onLogin={handleLogin} />} />
          <Route path="/videos" element={isLoggedIn ? <Videos /> : <Login onLogin={handleLogin} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
