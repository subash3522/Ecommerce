import React, { useEffect } from 'react'
import './Homepage.css';
import Aos from 'aos';


function Homepage() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, []);
    
  return (
    <>
    <div className="maincontainer">
        <div className="center">
            <div className="forlogi">
                <h2 className="heading">Shop Like A King...</h2>
              
            </div>
            <div className="forbutton">
                <button className="reg">Register</button>
                <button className="reg"><a href="/Shopping">Let's Shop</a></button>
            </div>
           
           
        </div>
       

    </div>
    <div className="secondpart">
        <div className="writtencontent">
            <h3>What do we offer?</h3>
            <p>We offer a variety of items.</p>
        </div>
        <div className="imagecontent">
            <img src="https://png.pngtree.com/element_pic/00/16/09/0957d18b258cbdc.jpg" alt="" />
        </div>
    </div>

    <div className="secondpart">
    <div className="writtencontent">
            <h3>But... the proper question would be</h3>
            <p>What you want?</p>
        </div>
        <div className="imagecontent">
            <img src="ktm-200.webp" alt="Shoping photo" />
        </div>
    </div>
    <footer>
        Frontend : Subash Bhandari
    </footer>
   

    </>
  )
}

export default Homepage