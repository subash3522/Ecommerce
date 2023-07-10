import React from 'react';
import { FaHome, FaShoppingCart, FaUser,  } from 'react-icons/fa';
import { AiOutlineAppstore } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <div className="list">
        <ul>
          <li>
            <div>
              <Link to="/">
                <FaHome className="icon" />
                Home
              </Link>
            </div>
            <div className="dropdown">
              <Link to="#">
                <AiOutlineAppstore className="icon" />
                Category
              </Link>
              <ul>
                <li>
                  <Link to="/cards">Laptops</Link>
                  <Link to="/card1">Bikes</Link>
                </li>
              </ul>
            </div>
            <div>
              <Link to="#">
                <FaUser className="icon" />
                About
              </Link>
            </div>
            <div>
              <Link to="/contact">
                <FaUser className="icon" />
                Contact
              </Link>
            </div>
            <div>
              <Link to="/shopping">
                <FaShoppingCart className="icon" />
                Shopping
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
