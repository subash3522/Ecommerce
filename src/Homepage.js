import React, { useEffect } from 'react';
import Aos from 'aos';
import './Homepage.css';
import { Link } from 'react-router-dom';

function Homepage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="center-container">
          <div className="login-container">
            <h2 className="heading">Shop Like A King...</h2>
          </div>
          <div className="button-container">
            <Link to='/Signup'>
            <button className="reg">Register</button>
            </Link>
            <button className="reg"><a href="/Shopping">Let's Shop</a></button>
          </div>
        </div>
      </div>

      <div className="second-part">
        <div className="written-content">
          <h3>What do we offer?</h3>
          <p>We offer a variety of items.</p>
        </div>
        <div className="image-content">
          <img src="https://png.pngtree.com/element_pic/00/16/09/0957d18b258cbdc.jpg" alt="Shop Like A King" />
        </div>
      </div>

      <div className="second-part">
        <div className="written-content">
          <h3>But... the proper question would be</h3>
          <p>What do you want?</p>
        </div>
        <div className="image-content">
          
        </div>
      </div>

      <footer>
        Frontend: Subash Bhandari
      </footer>
    </>
  );
}

export default Homepage;
