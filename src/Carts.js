// import React from "react";
// import './Cards.css'

// function Carts(props) {
//   return (
//     <>
//       <div className="topcart">
        
          
//           <tr>
//             <td>
//               <div className="cartprice">Price:{props.cprice} </div>
//             </td>
//             <td>
//               <div className="cartquantity">Quantiy: {props.cquantity} </div>
//             </td>
//             <td>
//               <div className="cartname">Name:{props.cname}</div>
//             </td>
//             <td>
//               <button onClick={() => props.increment(props.product)}>+</button>
//               <button
//               className="decrement"
//               onClick={() => props.decrement(props.product)}
//             >
//               -
//             </button>

//             </td>
            
//             <td>
//             <button
//               className="remove"
//               onClick={() => props.onRemove(props.index)}
//             >
//               Remove
//             </button>
//             </td>
//             {" "}
//             <br />
//           </tr>
       
//       </div>
//     </>
//   );
// }

// export default Carts;

import React from "react";
import "./Cards.css";

function Carts(props) {
  return (
    <tr>
      <td>{props.cprice}</td>
      <td>{props.cquantity}</td>
      <td>{props.cname}</td>
      <td>
        <button onClick={() => props.increment(props.product)}>+</button>
        <button className="decrement" onClick={() => props.decrement(props.product)}>-</button>
      </td>
      <td>
        <button className="remove" onClick={() => props.onRemove(props.index)}>Remove</button>
      </td>
    </tr>
  );
}

export default Carts;

