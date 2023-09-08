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

function Homepage(props) {
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
      <div className={`maincontainer ${props.sideBar?'bgblur':''}`}>
        <div className="center">
          <div className="forlogi">
            <h2 className="heading">Shop Like A King...</h2>
          </div>
          <div className="forbutton">
            <button className="reg" onClick={() => loginHandler()}>
              Register{" "}
            </button>
            {loginChecker ? <Loginpage cancleHandler={cancleHandler} /> : null}

            {/* <Link to="/Shopping">
              <button className="reg">Let's Shop</button>
            </Link> */}
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
            src="https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029_1280.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="secondpart">
        <div className="writtencontent" data-aos="flip-right">
        <img src="https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_1280.jpg" alt="Shoping photo" />
          
        </div>
        <div className="writtencontent" data-aos="flip-up">
        <h3>But... the proper question would be</h3>
          <p>What do you want?</p>
          
        </div>
      </div>
      <footer>Frontend : Subash Bhandari</footer>
    </>
  );
}

export default Homepage;
