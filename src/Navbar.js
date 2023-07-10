import React from 'react'
import Shopping from './Shopping.js'
import Contact from './Contact'
import './Navbar.css'
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';
import Homepage from './Homepage.js';
import Cards from './Cards.js';
import Card1 from './Card1.js';
function Navbar() {
  return (
   <>
   <nav className="navbar">
      <div className="logo">LOGO</div>
      <div className="list">
        <ul>
          <li>
            <div><a href="/">Home</a></div>
            <div className='dropdown'><a href="">Category</a>
            <ul>
              <li>
                <a href="./cards">Laptops</a>
                <a href="./card1">Bikes</a>
              </li>
            </ul>
            </div>
            <div><a href=''>About</a></div>
            <div><a href="/contact">Contact</a></div>
            <div><a href="/shopping">Shopping</a></div>
          </li>
        </ul>
      </div>
     </nav>
     <Router>
        <Routes>
            <Route path='/Shopping' element={<Shopping/>}></Route>
            <Route path='/Contact' element={<Contact/>}></Route>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/Cards' element={<Cards/>}></Route>
            <Route path='/Card1' element={<Card1/>}></Route>

        </Routes>
     </Router>
     
   </>
  )
}

export default Navbar