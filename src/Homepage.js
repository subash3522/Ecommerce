import React, { useEffect, useState } from "react";
import "./Homepage.css";
import Loginpage from "./Loginpage.js";
import Aos from "aos";
import Shopping from "./Shopping.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function Homepage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [loginChecker, setLoginChecker] = useState("");
  const [dummy, setDUmmy] = useState(0);

  const loginHandler = () => {
    setLoginChecker(true);
  };
  const cancleHandler = () => {
    setLoginChecker(false);
  };

  return (
    <>
      <div className="maincontainer">
        <div className="center">
          <div className="forlogi">
            <h2 className="heading">Shop Like A King...</h2>
          </div>
          <div className="forbutton">
            <button className="reg" onClick={() => loginHandler()}>
              Register{" "}
            </button>
            {loginChecker ? <Loginpage cancleHandler={cancleHandler} /> : null}

            <Link to="/Shopping">
              <button className="reg">Let's Shop</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="secondpart">
        <div className="writtencontent">
          <div data-aos="fade-up">
            <h3>What do we offer?</h3>
            <p>We offer a variety of items.</p>
          </div>
        </div>
        <div className="imagecontent" data-aos="fade-right">
          <img
            src="https://png.pngtree.com/element_pic/00/16/09/0957d18b258cbdc.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="secondpart">
        <div className="writtencontent" data-aos="flip-right">
          <h3>But... the proper question would be</h3>
          <p>What you want?</p>
        </div>
        <div className="imagecontent" data-aos="flip-up">
          <img src="ktm-200.webp" alt="Shoping photo" />
        </div>
      </div>
      <footer>Frontend : Subash Bhandari</footer>
    </>
  );
}

export default Homepage;
