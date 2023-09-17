import React, { useEffect, useState } from "react";
import Cards from "./Cards.js";
import "./Cards.css";
import Carts from "./Carts.js";
import product from "./Product.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
function Shopping() {
  const [time, setTime] = useState();
  const [cityInput, setCityInpun] = useState("");

  async function fetchActivity() {
    try {
      await axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?q=London&appid=6ad2d93a017ab254e8acc5a331766df9"
        )
        .then((response) => setTime(response.data.wind.speed));
    } catch (error) {
      console.error("Error fetching activity", error);
    }
  }

  useEffect(()=>{
    fetchActivity();
  },[])

  const [productList, setproductList] = useState([...product]);
  const [subtotal, setsubtotal] = useState(0);

  const filterHandler = (a) => {
    const updatedlist = product.filter((value) => {
      return value.category === a;
    });
    setproductList(updatedlist);
  };

  const handleSliderFilter = (a) => {
    const sldValue = a.target.value;
    setSlider(sldValue);
    const sliderValue = product.filter((value) => {
      return value.price <= sldValue;
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
      ttl();
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    ttl();
  };

  const decrement = (a) => {
    const indexChecker = cart.findIndex((item) => item.id === a.id);

    const updateCart = [...cart];
    if (updateCart[indexChecker].quantity > 1) {
      updateCart[indexChecker].quantity -= 1;
      setCart(updateCart);
      ttl();
    }
    return;
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

  const [cartChecker, setCartChecker] = useState(false);

  const handleCartDetails = () => {
    setCartChecker(!cartChecker);
  };

  return (
    <>
      <div>{time}</div>
      <div className="fullpage">
        <div className="cartIcon" onClick={() => handleCartDetails()}>
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <div className="overallmain">
          <input
            type="range"
            min={0}
            max={400000}
            value={slider}
            onChange={handleSliderFilter}
          />
          <span>{slider}</span>
          <div className="filter">
            Filter: <button onClick={() => filterHandler("Bike")}>Bike</button>
            <button onClick={() => filterHandler("Laptop")}>Laptop</button>
            <button onClick={() => setproductList(product)}>All</button>
          </div>

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
        <div className={`width-100 ${cartChecker ? "cartVisible" : ""}`}>
          {/* // <div className="width-100" `width-100 ${cartChecker?'cartVisible':''}`> */}
          <div className="forcenter">
            <h1>Your Cart</h1>
          </div>
          <table>
            <th>Price</th>
            <th>Quantity</th>
            <th>Name</th>
            <th>Action</th>
            <th>Remove</th>
            <tbody>
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
            </tbody>
          </table>
          Total Price: {subtotal}
        </div>
      </div>
    </>
  );
}

export default Shopping;
