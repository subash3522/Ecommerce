import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Shopping from "./Shopping";
import Contact from "./Contact";
import Cards from "./Cards";
import Card1 from "./Card1";

import "./App.css";
import "aos/dist/aos.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Shopping" element={<Shopping />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/Card1" element={<Card1 />} />
      </Routes>
    </Router>
  );
}

export default App;
