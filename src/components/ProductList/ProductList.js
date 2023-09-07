import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import productItems from "../../data/ProductItems";
import ModelViewer from "../ModelViewer/ModelViewer";
import "./ProductList.css";

const ProductList = () => {
  return (
    <>
      <h1 style={{ fontSize: '34px', textAlign: 'center' }}>Top products</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas.
      </p>
      <section className="list-view">
        {productItems.map((item) => (
          <div key={item.id} className="product-item">
            <ModelViewer item={item} />
            {/* Use Link to navigate to the Custom component */}
            <Link to="/custom">
              <button className="button">{item.customizeButton}</button>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};

export default ProductList;
