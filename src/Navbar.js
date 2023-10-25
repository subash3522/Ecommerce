import React, { useState } from "react";
import Shopping from "./Shopping.js";

import "./Navbar.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [search, setSearch] = useState([]);
  const [suggestionClicker, setSuggestionClicker] = useState("");

  const sggClicker = (a) => {};

  return (
    <>
      <nav className="navbar">
        <div className="logo">LOGO</div>
        <div className={props.sideBar ? "sidebar list" : "list"}>
          <ul>
            <li>
              <div className="searchContainer">
                <div className="search">
                  <input
                    type="search"
                    placeholder="product"
                    onChange={(e) => {
                      // setSearch(e.target.value);
                      // props.searchFilter(search);
                      props.searchFilter(e.target.value)
                     
                    }}
                  />
                  <span className="logoSearch">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </span>
                </div>
                <div className="suggestions">
                  {props.showResult.map((value, index) => (
                    <li key={index} onClick={() =>props.filterById(value.id)}><Link to='/Productdetails'>{value.name}</Link></li>
                  ))}
                </div>
              </div>
              <div>
                <a href="/">Home</a>
              </div>
              <div className="dropdown">
                <a href="">Category</a>
                <ul>
                  <li>
                    <a href="./cards">Laptops</a>
                    <a href="./card1">Bikes</a>
                  </li>
                </ul>
              </div>
              <div>
                <a href="">About</a>
              </div>
              <div>
                <a href="./contact">Contact</a>
              </div>
              <div>
                <a href="./Shopping">Shopping</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={() => props.sideBarHandler()}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
