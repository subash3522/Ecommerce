import React, { useEffect, useState } from "react";
import Cards from "./Cards.js";
import "./Cards.css";
import imga from "./logo.svg";
import Carts from "./Carts.js";
import Card1 from "./Card1.js";

function Shopping() {
  let product = [
    {
      id: 1,
      name: "acer",
      price: 20000,
      img: "https://images.unsplash.com/photo-1525971977907-20d22da82d6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHMlMjBhY2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Lenovo",
      price: 60000,
      img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "HP",
      price: 134500,
      img: "https://img.freepik.com/free-psd/laptop-mock-up-isolated_1310-1458.jpg?size=626&ext=jpg",
    },
    {
      id: 4,
      name: "Mac Book",
      price: 200003,
      img: "https://img.freepik.com/free-psd/laptop-mock-up-isolated_1310-1458.jpg?size=626&ext=jpg",
    },
    {
      id: 5,
      name: "Asus",
      price: 50000,
      img: "https://img.freepik.com/free-psd/laptop-mock-up-isolated_1310-1458.jpg?size=626&ext=jpg",
    },
    {
      id: 6,
      name: "Dell",
      price: 23340,
      img: "https://img.freepik.com/free-psd/laptop-mock-up-isolated_1310-1458.jpg?size=626&ext=jpg",
    },
    {
      id: 7,
      name: "Microsoft",
      price: 23532,
      img: "https://img.freepik.com/free-psd/laptop-mock-up-isolated_1310-1458.jpg?size=626&ext=jpg",
    },
    {
      id: 8,
      name: "Huawei",
      price: 90000,
      img: "https://img.freepik.com/free-psd/laptop-mock-up-isolated_1310-1458.jpg?size=626&ext=jpg",
    },
    {
      id: 9,
      name: "Samsung",
      price: 110000,
      img: "https://img.freepik.com/free-psd/laptop-mock-up-isolated_1310-1458.jpg?size=626&ext=jpg",
    },
    {
      id: 10,
      name: "Toshiba",
      price: 30890,
      img: "https://img.freepik.com/free-psd/laptop-mock-up-isolated_1310-1458.jpg?size=626&ext=jpg",
    },
    {
      id: 11,
      name: "LG",
      price: 92893,
      img: "https://img.freepik.com/free-psd/laptop-mock-up-isolated_1310-1458.jpg?size=626&ext=jpg",
    },
    {
      id: 12,
      name: "Lava",
      price: 190999,
      img: "https://img.freepik.com/free-psd/laptop-mock-up-isolated_1310-1458.jpg?size=626&ext=jpg",
    },
    {
      id: 13,
      name: "Nokia",
      price: 40000,
      img: "https://img.freepik.com/free-psd/laptop-mock-up-isolated_1310-1458.jpg?size=626&ext=jpg",
    },
  ];

  let product1 = [
    {
      id: 14,
      name: "Ns200",
      price: 400000,
      img: "https://images.unsplash.com/photo-1591378603223-e15b45a81640?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwZHVrZSUyMDIwMHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    },
    {
      id: 15,
      name: "Duke200",
      price: 400000,
      img: "https://images.unsplash.com/photo-1591378603223-e15b45a81640?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwZHVrZSUyMDIwMHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    },
    {
      id: 16,
      name: "MT-15",
      price: 400000,
      img: "https://images.unsplash.com/photo-1591378603223-e15b45a81640?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwZHVrZSUyMDIwMHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    },
    {
      id: 17,
      name: "Gixer150",
      price: 400000,
      img: "https://images.unsplash.com/photo-1591378603223-e15b45a81640?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwZHVrZSUyMDIwMHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    },
    {
      id: 18,
      name: "X-Pulse",
      price: 400000,
      img: "https://images.unsplash.com/photo-1591378603223-e15b45a81640?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a3RtJTIwZHVrZSUyMDIwMHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    },
  ];
  const [list, setlist] = useState("");
  const [prc, setprc] = useState("");
  const [cat, setcat] = useState("");

  const [productList, setproductList] = useState([...product]);
  const [productcat, setproductcat] = useState([...product1]);
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

 let [filter , setFilter]= useState([...productList]);
 let priceFilter = ()=>{
  
 } 


  return (
    <>
      <div className="fullpage">
          
        <div className="overallmain">
        <input type="range" min={0} max={100} value={productList.price} />
        <div className="filter">Filter: <button >20000</button><button>30000</button><button >50000</button>
          
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
          <div className="category">Category:Bikes</div>
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
          Subbmit
        </button>
      </div>
    </>
  );
}

export default Shopping;
