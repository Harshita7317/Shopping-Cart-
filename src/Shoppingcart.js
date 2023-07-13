import React from "react";
import { useState } from "react";

const Shop = () => {
  const [cart, setcart] = useState([]);
  const [item, setitem] = useState("");
  const [brandname, setbrandname] = useState("");
  const [price, setprice] = useState("");

  const createcart = () => {
    const oldcart = [...cart];
    const newcart = {
      productname: item,
      productbrand: brandname,
      productprice: price,
      addtowishlist: "Add to Wishlist ",
    };
    oldcart.push(newcart);
    setcart(oldcart);
  };
  const update = (c) => {
    const oldcart = [...cart];
    oldcart[c].addtowishlist = "Added to Wishlist ❤ ";
    setcart(oldcart);
  };

  const removefromcart = (c) => {
    let oldcart = [...cart];
    const removeitem = oldcart.filter((v, i) => i !== c);
    setcart(removeitem);
  };
  return (
    <>
      <div className="body">
        <h1 className="heading"> My Shopping Cart</h1>
        <br />

        <div className="inner">
          <label> Product Name : </label>

          <input
            value={item}
            onChange={(e) => setitem(e.target.value)}
            type="text"
            placeholder="Enter product name"
          />

          <br />
          <label> Product Brand : </label>
          <input
            value={brandname}
            onChange={(e) => setbrandname(e.target.value)}
            type="text"
            placeholder="Enter brand name"
          />
          <br />
          <label> Price: </label>
          <input
            value={price}
            onChange={(e) => setprice(e.target.value)}
            type="text"
            placeholder="Enter product price"
          />
          <br />

          <div className="bttn">
            <button onClick={() => createcart()}>Add to cart</button>
          </div>
        </div>
      </div>

      {cart.map((v, i) => {
        return (
          <div key={i}>
            <h2> Cart Items :</h2>
            <ul>
              <li>Product Name: {v.productname}</li>
              <li>Product Brand: {v.productbrand}</li>
              <li>Product Prcie: {v.productprice}</li>
              <li>Wishlist: {v.addtowishlist}</li>
            </ul>

            <button onClick={() => removefromcart(i)} type="button">
              Remove from Cart
            </button>
            <button onClick={() => update(i)} type="button">
              Update
            </button>
          </div>
        );
      })}
    </>
  );
};
export default Shop;
