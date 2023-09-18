import "./App.css";
import "@google/model-viewer/dist/model-viewer.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Feedback from "./components/Feedback/Feedback";
import Custom from "./components/Customize/Custom"; // Import the Custom component
import CanSpace from "./components/TshirtCustom/CanSpace";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/CanvasSpace" element={<CanSpace />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/custom" element={<Custom />} />{" "}
        {/* Add a route for Custom */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
     
    </BrowserRouter>
  );
};

export default App;
