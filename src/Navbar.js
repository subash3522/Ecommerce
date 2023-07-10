import React from 'react'

import './Navbar.css'
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

     
   </>
  )
}

export default Navbar