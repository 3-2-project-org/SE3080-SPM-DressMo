import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

//import { useSelector } from "react-redux";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Header = () => {
  const [showMobileSidebar, setShowMobileSidebar] = useState(true);

  const toggleMobileSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar);
  };

  const closeMobileSidebar = () => {
    setShowMobileSidebar(false);
  };

  const [open, setOpen] = useState(false);
  //const products = useSelector((state) => state.cart.products);
  return (
    <>
      <header>
        {/* Mobile Menu Icon */}

        <nav>
          <div className="navtop">
            <h3>
              <Link
                to="/"
                onClick={closeMobileSidebar}
                className="project-title"
              >
                DressMo
              </Link>
            </h3>
            <div className="mobile-menu-icon" onClick={toggleMobileSidebar}>
              <div />
              <div />
              <div />
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className={`desktop-nav ${showMobileSidebar ? "hide" : ""}`}>
            <Link
              to="/"
              // activeStyle={{ color: "blue", textDecoration: "underline" }}
              onClick={toggleMobileSidebar}
            >
              Home
            </Link>
            <Link
              to="#"
              target="_blank"
              onClick={toggleMobileSidebar}
              // activeStyle={{ color: "blue", textDecoration: "underline" }}
            >
              About
            </Link>

            <Link
              to="/feedback"
              onClick={toggleMobileSidebar}
              // activeStyle={{ color: "blue", textDecoration: "underline" }}
            >
              Feedback
            </Link>
            <Link
              to="/contact"
              onClick={toggleMobileSidebar}
              // activeStyle={{ color: "blue", textDecoration: "underline" }}
            >
              Contact Us
            </Link>

            <Link
              to="/cart"
              onClick={toggleMobileSidebar}
              // activeStyle={{ color: "blue", textDecoration: "underline" }}
            >
              <ShoppingCartOutlinedIcon />
            </Link>

            <div className="icons">
              <Link
                to="/favourite"
                onClick={toggleMobileSidebar}
                // activeStyle={{ color: "blue", textDecoration: "underline" }}
              >
                <FavoriteBorderOutlinedIcon />
              </Link>

              <Link
                to="/search"
                onClick={toggleMobileSidebar}
                // activeStyle={{ color: "blue", textDecoration: "underline" }}
              >
                <SearchIcon />
              </Link>

              <Link
                to="/person"
                onClick={toggleMobileSidebar}
                // activeStyle={{ color: "blue", textDecoration: "underline" }}
              >
                <PersonOutlineOutlinedIcon />
              </Link>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
