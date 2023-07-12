import React, { useState } from "react";

const Shop = () => {
  const [cart, setCart] = useState([]);

  const items = [
    {
      id: 1,
      name: "Watch",
      price: 2000,
    },
    {
      id: 2,
      name: "Shoes",
      price: 3200,
    },
    {
      id: 3,
      name: "Dress",
      price: 2000,
    },
  ];

  const addToCart = (i) => {
    setCart([...cart, i]);
  };

  const removeFromCart = (i) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== i.id);
    setCart(hardCopy);
  };

  const listItems = items.map((i) => (
    <div key={i.id}>
      {`${i.name}: ${i.price}`}
      <input type="submit" value="add" onClick={() => addToCart(i)} />
    </div>
  ));

  const cartItems = cart.map((i) => (
    <div key={i.id}>
      {`${i.name}: ${i.price}`}
      <input type="submit" value="remove" onClick={() => removeFromCart(i)} />
    </div>
  ));

  return (
    <div style={{ backgroundColor: "purple" }}>
      STORE
      <div>{listItems}</div>
      <div>CART</div>
      <div>{cartItems}</div>
    </div>
  );
};

export default Shop;
