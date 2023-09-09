import "./App.css";
import Navbar from "./Navbar.js";
import Homepage from "./Homepage.js";
import "aos/dist/aos.css";
import Shopping from "./Shopping.js";
import Contact from "./Contact";
import "./Navbar.css";
import product from "./Product";
import Myapi from "./Myapi.js";
import Mycontext from "./Mycontext.js"
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
  const [sideBar, setSidebar] = useState(false);

  const sideBarHandler = () => {
    setSidebar(!sideBar);
  };
  const appleData = 'i am apple'

  return (
    <>
      <Navbar
        searchFilter={searchFilter}
        showResult={showResult}
        sideBar={sideBar}
        sideBarHandler={sideBarHandler}
      />
      <Homepage sideBar={sideBar} sideBarHandler={sideBarHandler}/>
      <Shopping />

      <Mycontext.Provider value = {appleData} >
        <Myapi/>
      </Mycontext.Provider>

      <Router>
        <Routes>
          <Route path="/Ecommerce/Shopping" element={<Shopping />}></Route>
          <Route path="/Ecommerce/Contact" element={<Contact />}></Route>
          <Route
            path="/Ecommerce/"
            element={
              <Homepage sideBar={sideBar} sideBarHandler={sideBarHandler} />
            }
          ></Route>
          <Route path="/Ecommerce/Cards" element={<Cards />}></Route>
          <Route path="/Ecommerce/Myapi" element={<Myapi />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
