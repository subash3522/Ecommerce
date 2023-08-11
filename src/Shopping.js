import React, { useEffect, useState } from "react";
import Cards from "./Cards.js";
import "./Cards.css";
import imga from "./logo.svg";
import Carts from "./Carts.js";

import product from "./Product.js";
import Navbar from "./Navbar.js";

function Shopping() {
  const [productList, setproductList] = useState([...product]);
  const [subtotal, setsubtotal] = useState(0);
  

  const filterHandler = (a) => {
    const updatedlist = product.filter((value) => {
      return value.category === a;
    });
    setproductList(updatedlist);
  };

  const handleSliderFilter = (a) => {
    const sliderValue = product.filter((value) => {
      return value.price == a;
    });
    setproductList(sliderValue);
  };

  const ttl = () => {
    let tltl = 0;
    cart.map((value) => {
      const appl = value.price * value.quantity;
      tltl = tltl + appl;
    });
    setsubtotal(tltl);
    
  };
  

  const getLocalItem = () => {
    let list = localStorage.getItem("lis");
    if (list) {
      return JSON.parse(localStorage.getItem("lis"));
    }
  };

  const [cart, setCart] = useState(getLocalItem() || []);


  const handelAddToCart = (product) => {
    const indexChecker = cart.findIndex((item) => item.id === product.id);
    console.log(cart);
    if (indexChecker !== -1) {
      const updateCart = [...cart];
      updateCart[indexChecker].quantity += 1;
      setCart(updateCart);
      ttl()
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    ttl();
  };

  const decrement = (a) => {
    const indexChecker = cart.findIndex((item) => (item.id === a.id));

    const updateCart = [...cart];
    updateCart[indexChecker].quantity -= 1;
    setCart(updateCart);
    ttl();
  };

  const onRemove = (key) => {
    const removeCart = [...cart];

    removeCart.splice(key, 1);
    setCart(removeCart);
    ttl();
  };

  const increment = (a) => {
    const indexChecker = cart.findIndex((item) => item.id === a.id);
    const updateCart = [...cart];
    updateCart[indexChecker].quantity += 1;
    setCart(updateCart);
    ttl();
  };

  useEffect(() => {
    localStorage.setItem("lis", JSON.stringify(cart));
  }, [cart]);
  

  const [slider, setSlider] = useState("");

  return (
    <>
   
      <div className="fullpage">
        <div className="overallmain">
          <input
            type="range"
            min={0}
            max={400000}
            value={slider}
            onChange={(e) => {
              setSlider(e.target.value);
              handleSliderFilter(slider);
            }}
          />
          <span>{slider}</span>
          <div className="filter">
            Filter: <button onClick={() => filterHandler("Bike")}>Bike</button>
            <button onClick={() => filterHandler("Laptop")}>Laptop</button>
          </div>
          <div className="category">Category:Laptops</div>
          <div className="allcards">
            {productList.map((value, index) => (
              <Cards
                product={value}
                Name={value.name}
                Price={value.price}
                key={value.id}
                img={value.img}
                handelAddToCart={handelAddToCart}
              />
            ))}
          </div>
        </div>
        <div className="width-100">
          <div className="forcenter">
            <h1>Your Cart</h1>
          </div>
          <table>
            <th>Price</th>
            <th>Quantity</th>
            <th>Name</th>
            <th>Action</th>
            <th>Remove</th>
          </table>
          {cart.map((value, index) => (
            <Carts
              cname={value.name}
              cprice={value.price}
              cquantity={value.quantity}
              key={value.id}
              index={index}
              onRemove={onRemove}
              increment={increment}
              decrement={decrement}
              product={value}
            />
          ))}
          Total Price: {subtotal}
        </div>
      </div>
    </>
  );
}

export default Shopping;
