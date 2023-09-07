import "./App.css";
import "@google/model-viewer/dist/model-viewer.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Feedback from "./components/Feedback/Feedback";
import Categories from "./components/Categories/Categories";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Custom from "./components/Customize/Custom"; // Import the Custom component

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Slider />
      <FeaturedProducts />
      <Categories />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/custom" element={<Custom />} /> {/* Add a route for Custom */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
