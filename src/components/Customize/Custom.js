import React, { useState, useEffect } from "react";
import iro from "@jaames/iro";
import "./Custom.scss";
//import Test from "../../ShoeCustom/Test";

function Custom() {
  const [shirtImgStyle, setShirtImgStyle] = useState("");
  const [shirtSize, setShirtSize] = useState("M"); // Default size
  const [cartItems, setCartItems] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let sliderPicker = null;

    sliderPicker = new iro.ColorPicker("#sliderPicker", {
      width: 250,
      color: { h: 35, s: 55, l: 91 },
      borderWidth: 1,
      borderColor: "#ccc",
      layout: [
        {
          component: iro.ui.Slider,
          options: {
            sliderType: "hue",
          },
        },
        {
          component: iro.ui.Slider,
          options: {
            sliderType: "saturation",
          },
        },
        {
          component: iro.ui.Slider,
          options: {
            sliderType: "value",
          },
        },
      ],
    });

    sliderPicker.on("color:change", (color) => {
      const hexString = color.hsl;
      let rotateH = color.hsl.h - 35;
      let rotateS = 100 + (color.hsl.s - 55);
      let rotateL = 100 + (color.hsl.l - 91);
      let cssString = `hue-rotate(${rotateH}deg) saturate(${rotateS}%) brightness(${rotateL}%)`;
      setShirtImgStyle(cssString);
    });
  }, []);

  const handleSizeChange = (size) => {
    setShirtSize(size);
  };

  const handleAddToCart = () => {
    const cartItem = {
      size: shirtSize,
      color: shirtImgStyle,
    };
    setCartItems([...cartItems, cartItem]);
    setProductCount(productCount + 1);
    calculateTotalPrice();
  };

  const calculateTotalPrice = () => {
    // Calculate the total price based on the product count
    const unitPrice = 1200; // Adjust this based on your actual product price
    const totalPrice = unitPrice * productCount;
    setTotalPrice(totalPrice);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    setProductCount(productCount - 1);
    calculateTotalPrice();
  };

  const handleCheckout = () => {
    // Implement your checkout logic here, e.g., send the cart data to a server.
    alert("Checkout clicked!");
  };

  return (
    <div id="container" style={{ marginLeft: "120px", marginTop: "520px" }}>
      <div id="customization">
        <h1>Customize Your Dress!!</h1>

        <div id="sliderPicker">
          <div id="picker"></div>
        </div>

        <div id="model">
          <img
            id="shirtImg"
            src="https://assets.codepen.io/11614/shirt_1.png"
            alt="Shirt"
            style={{ filter: shirtImgStyle }}
          />
        </div>

        <div>
          <p>Select Shirt Size:</p>
          <button onClick={() => handleSizeChange("S")}>S</button>
          <button onClick={() => handleSizeChange("M")}>M</button>
          <button onClick={() => handleSizeChange("L")}>L</button>
        </div>

        {/* Display selected size */}
        <p>Selected Size: {shirtSize}</p>

        {/* Add to Cart button */}
        <button onClick={handleAddToCart}>Add to Cart</button>

        {/* Display product count and total price */}
        <div id="productInfo">
          <p>Product Count: {productCount}</p>
          <p>Total Price: Rs: {totalPrice}</p>
        </div>

        {/* Checkout button */}
        <button onClick={handleCheckout}>Checkout</button>

        {/* Display cart items */}
        <div id="cart">
          <h2>Cart</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                Size: {item.size}, Color Filter: {item.color}
                <button onClick={() => handleRemoveFromCart(index)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Custom;
