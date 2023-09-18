import React, { useState } from "react";
import "./Cart.css"; // Import your CSS file

function Cart() {
  const [items, setItems] = useState([
    { id: 1, name: "T-Shirt", price: 20, quantity: 2, color: "Red" },
    { id: 2, name: "Jeans", price: 40, quantity: 1, color: "Blue" },
  ]);

  const removeItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const addItem = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <span className="item-name">{item.name}</span>
            <span className="item-price">${item.price}</span>
            <span className="item-quantity">Qty: {item.quantity}</span>
            <span className="item-color">Color: {item.color}</span>
            <button className="remove-button" onClick={() => removeItem(item.id)}>
              Remove
            </button>
            <button className="add-button" onClick={() => addItem(item.id)}>
              Add
            </button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <span>Total: ${calculateTotal()}</span>
      </div>
      <button className="checkout-button">Checkout</button>
    </div>
  );
}

export default Cart;
