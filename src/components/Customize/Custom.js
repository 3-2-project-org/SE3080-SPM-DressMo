import React, { useState, useEffect } from "react";
import iro from "@jaames/iro";

function Custom() {
  const [shirtImgStyle, setShirtImgStyle] = useState("");

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

    // Clean up when the component unmounts
    return () => {
      if (sliderPicker) {
        sliderPicker.destroy();
      }
    };
  }, []);

  return (
    <div id="container" style={{marginLeft:'120px', marginTop:'520px'}}>
      <div id="customization">
        <h1>Customize Your Dress</h1>

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
      </div>
    </div>
  );
}

export default Custom;
