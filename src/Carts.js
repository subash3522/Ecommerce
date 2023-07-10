import React from "react";

function Carts(props) {
  return (
    <>
      <div className="topcart">
        <div className="cartprice">Price:{props.cprice} </div>
        <div className="cartquantity">Quantiy: {props.cquantity} </div>
        <div className="cartname">Name:{props.cname}</div>
        <button
          className="increment"
          onClick={() => props.increment(props.product)}
        >
          +
        </button>
        <button
          className="decrement"
          onClick={() => props.decrement(props.product)}
        >
          -
        </button>
        <button className="remove" onClick={() => props.onRemove(props.index)}>
          Remove
        </button>{" "}
        <br />
      </div>
    </>
  );
}

export default Carts;
