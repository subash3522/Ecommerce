import React, { useState } from "react";
import Shopping from "./Shopping";


import "./Navbar.css";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  const [search, setSearch] = useState([]);
  const [suggestionClicker, setSuggestionClicker] = useState("");

  const sggClicker = (a) => {};

  return (
    <>
      <nav className="navbar">
        <div className="logo">LOGO</div>
        <div className="list">
          <ul>
            <li>
              <div className="searchContainer">
                <div className="search">
                  <input
                    type="search"
                    placeholder="product"
                    onChange={(e) => {
                      setSearch(e.target.value);
                      props.searchFilter(search);
                    }}
                  />
                  <span className="logoSearch"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                </div>
                <div className="suggestions">
                  {props.showResult?.map((value) => (
                    <li>{value}</li>
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
                <a href="/contact">Contact</a>
              </div>
              <div>
                <a href="/shopping">Shopping</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
