import React from 'react'

function Productdetails(props) {
   
  return (

    <>
   {props.idFilteredData.map((value,index)=>(

  
    <div className={'cards'} key={value.id}>
        <div className="cartimage">
          <img src={value.img} alt="" />
        </div>
        <div className="details">
          <div className="name">Model: {value.name}</div>
          <div className="price">Rs.{value.price}</div>
         
        </div>
      </div>
       ))}
      </>
  )
}

export default Productdetails
