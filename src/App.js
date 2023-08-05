import "./App.css";
import Navbar from "./Navbar.js";
import Homepage from "./Homepage.js";
import "aos/dist/aos.css";
import Shopping from "./Shopping.js";
import Contact from "./Contact";
import "./Navbar.css";
import product from "./Product";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

import Cards from "./Cards.js";
import { useState } from "react";
import Loginpage from "./Loginpage";

function App() {
  const [showResult, setShowResutl] = useState([]);
  const searchFilter = (a) => {
    if (typeof a !== "string") {
      return [];
    }
    const filterResult = product.filter((value) => {
      return value.name.toLowerCase().includes(a.toLowerCase());
    });
    setShowResutl(filterResult);
  };

  return (
    <>
      <Navbar searchFilter={searchFilter} showResult={showResult} />
      <Router>
        <Routes>
        <Route> <Route path="/Shopping" element={<Shopping />}></Route></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Cards" element={<Cards />}></Route>
        
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
