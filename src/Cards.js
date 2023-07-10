import React, { useEffect, useState } from "react";
import "./Cards.css";

function Cards(props) {
  

  return (
    <>
      <div className={'cards'}>
        <div className="cartimage">
          <img src={props.img} alt="" />
        </div>
        <div className="details">
          <div className="name">Model: {props.Name}</div>
          <div className="price">Rs.{props.Price}</div>
          <button
            className="addto"
            onClick={() => props.handelAddToCart(props.product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Cards;
