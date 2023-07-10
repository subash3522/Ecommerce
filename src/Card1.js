import React from 'react'


function Card1(props) {
  return (
    <>
    <div className="cards">
        <div className="cartimage">
          <img src={props.img} alt="" />
        </div>
        <div className="details">
          <div className="name">{props.Name}</div>
          <div className="price">{props.Price}</div>
          <button
            className="addto"
            onClick={() => props.handelAddToCart(props.product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  )
}

export default Card1