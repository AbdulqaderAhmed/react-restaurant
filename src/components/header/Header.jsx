import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="banner-img">
        <nav className="transparent">
          <div className="nav-wrapper container">
            <Link to="/" className="brand-logo">
              Side-Hustle
            </Link>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>

            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="header-title">
          <h3>Welcome to our resturant</h3>
          <p>The best place to enjoy your meal!</p>
          <Link
            to="/products"
            className="btn btn-large waves-effect waves-light pulse red"
          >
            Oreder Now
          </Link>
        </div>
      </div>

      <ul className="sidenav" id="mobile-demo">
        <div className="nav-image"></div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", function () {
  var elem = document.querySelectorAll(".sidenav");
  var inst = M.Sidenav.init(elem, { edge: "right" });
});

export default Header;
