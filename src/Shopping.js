import React, { useEffect, useState } from "react";
import Cards from "./Cards.js";
import "./Cards.css";
import imga from "./logo.svg";
import Carts from "./Carts.js";
import Card1 from "./Card1.js";
import product from './product.js'

function Shopping() {
  const [list, setlist] = useState("");
  const [prc, setprc] = useState("");
  const [cat, setcat] = useState("");

  const [productList, setproductList] = useState([...product]);
  const [productcat, setproductcat] = useState([...product]);
  const [subtotal, setsubtotal] = useState(0);

  const ttl = () => {
    let tltl = 0;
    cart.map((value) => {
      const appl = value.price * value.quantity;
      tltl = tltl + appl;
    });
    setsubtotal(tltl);
  };

  const subb = (a, b) => {
    if (cat === "laptop") {
      let updateProduct = [
        ...productList,
        { id: productList.length + 1, name: a, price: b, img: imga },
      ];
      setproductList(updateProduct);
    }
    if (cat === "bikes") {
      let updatedcat = [
        ...productcat,
        { id: productcat.length + 1, name: a, price: b },
      ];
      setproductcat(updatedcat);
    }
  };

  const [cart, setCart] = useState([]);

  const handelAddToCart = (product) => {
    const indexChecker = cart.findIndex((item) => item.id === product.id);
    console.log(cart);
    if (indexChecker !== -1) {
      const updateCart = [...cart];
      updateCart[indexChecker].quantity += 1;
      setCart(updateCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    ttl();
  };

  const decrement = (a) => {
    const indexChecker = cart.findIndex((item) => (item.id = a.id));

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

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);

  const priceFilter = () => {
    const filteredProducts = productList.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    return filteredProducts;
  };

  useEffect(() => {
    setproductList(priceFilter());
  }, [minPrice, maxPrice]);

  return (
    <>
      <div className="fullpage">
        <div className="overallmain">
          <div className="filter">
            Filter by Price Range:{" "}
            <input
              type="range"
              min={0}
              max={100000}
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <span>${minPrice}</span> - <span>${maxPrice}</span>
          </div>
          <div className="category">Category: Laptops</div>
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
          <div className="category">Category: Bikes</div>
          <div className="allcards">
            {productcat.map((value) => (
              <Card1
                product={value}
                key={value.id}
                Name={value.name}
                Price={value.price}
                handelAddToCart={handelAddToCart}
                img={value.img}
              />
            ))}
          </div>
        </div>
        <div className="width-100">
          <div className="forcenter">
            <h1>Your Cart</h1>
          </div>
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

      <div className="addproduct">
        <input
          onChange={(e) => setlist(e.target.value)}
          value={list}
          type="text"
          placeholder="Product Name"
        />
        <input
          onChange={(e) => setprc(e.target.value)}
          value={prc}
          type="text"
          placeholder="Product Price"
        />
        <input onChange={(e) => setcat(e.target.value)} type="text" />
        <button
          className="subbmit"
          onClick={() => {
            subb(list, prc);
            setlist("");
            setprc("");
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Shopping;
