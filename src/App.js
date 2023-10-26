import "./App.css";
import Navbar from "./Navbar.js";
import Homepage from "./Homepage.js";
import "aos/dist/aos.css";
import Shopping from "./Shopping.js";
import Contact from "./Contact";
import "./Navbar.css";
import product from "./Product";
import Myapi from "./Myapi.js";
import Mycontext from "./Mycontext.js";
import { HashRouter } from "react-router-dom";
import { BrowserRouter, Switch, Route, Routes, Link } from "react-router-dom";

import Cards from "./Cards.js";
import { useEffect, useState } from "react";
import Loginpage from "./Loginpage";
import Productdetails from "./Productdetails";

function App() {
  const [showResult, setShowResutl] = useState([]);
  const [showResultCheck,setShowResutlCheck] = useState(false)
  const [idFilteredData, setIdFilteredData] = useState([])
  const searchFilter = (a) => {
    if (typeof a !== "string" || a === "") {
      return handleClear();
    }

    const filterResult = product.filter((value) => {
      return value.name.toLowerCase().includes(a.toLowerCase());
    });
    setShowResutl(filterResult);
  };
  const [sideBar, setSidebar] = useState(false);

  const handleClear =()=>{
    setShowResutl([])
  }

  const abc = ()=>{
    if(showResult ==! []){
setShowResutlCheck(true)
    }
    if(showResult==[]){
      setShowResutlCheck(false)
    }
   
   
  }

  const sideBarHandler = () => {
    setSidebar(!sideBar);
  };

  const filterById = (id) =>{
   const  newUpdatedData = product.filter((value)=>(
    value.id === id
   ))
   setIdFilteredData(newUpdatedData)
   setShowResutl([])
  }
  const appleData = "i am apple";
  console.log(showResult);

  return (
    <>
      
      {/* <Homepage sideBar={sideBar} sideBarHandler={sideBarHandler}/>
      <Shopping /> */}

      <BrowserRouter>
      <Navbar
        searchFilter={searchFilter}
        showResult={showResult}
        sideBar={sideBar}
        sideBarHandler={sideBarHandler}
        filterById={filterById}
        showResultCheck = {showResultCheck}
        abc = {abc}
      />
        <Routes>
          <Route path="/Shopping" element={<Shopping />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route
            path="/"
            element={
              <Homepage sideBar={sideBar} sideBarHandler={sideBarHandler} />
            }
          ></Route>
          <Route path="/Cards" element={<Cards />}></Route>
          <Route path="/Myapi" element={<Myapi />}></Route>
          <Route path="/Productdetails" element={<Productdetails idFilteredData = {idFilteredData}/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Mycontext.Provider value={appleData}>
        <Myapi />
      </Mycontext.Provider> */}
    </>
  );
}

export default App;
