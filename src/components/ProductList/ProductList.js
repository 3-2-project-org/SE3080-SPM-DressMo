import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import productItems from "../../data/ProductItems";
import ModelViewer from "../ModelViewer/ModelViewer";
import "./ProductList.css";
import Slider from "../Slider/Slider";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Categories from "../Categories/Categories";
import Header from "../Header/Header";

const ProductList = () => {
  // Define handleButtonClick as a function within the component
  const handleButtonClick = () => {
    window.location.href = "http://localhost:3001/";
  };


  const handleButtonClickShirtCustom = () => {
    window.location.href = "http://localhost:3001/";
  };

  const handleButtonClickShoesCustom = () => {
    window.location.href = "/CanvasSpace";
  };

  return (
    <>
 <Header/>
      <Slider />
      <FeaturedProducts />
      <button className="button" onClick={handleButtonClickShirtCustom}>
           Shirt Studio
            </button>

            <button className="button" onClick={handleButtonClickShoesCustom}>
           Shoes Studio
            </button>
      <Categories />
      <h1 style={{ fontSize: "34px", textAlign: "center" }}>Top products</h1>
      <p
        style={{
          marginLeft: "15%",
          width: "70%",
          textAlign: "center",
          fontSize: "16px",
          color: "gray",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
        ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
        facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
        gravida. Risus commodo viverra maecenas.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
        commodo viverra maecenas accumsan lacus vel facilisis labore et dolore
        magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
        viverra maecenas.
      </p>
      <section className="list-view">
        {productItems.map((item) => (
          <div key={item.id} className="product-item">
            <ModelViewer item={item} />
            <button className="button" onClick={handleButtonClick}>
              {item.customizeButton}
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default ProductList;
