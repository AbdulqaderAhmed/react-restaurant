import React from "react";
import pizza from "../../assets/image/pizza.jpg";
import rice from "../../assets/image/riceWithMeat.jpg";
import burger from "../../assets/image/burger.jpg";

const Slider = () => {
  return (
    <div className="slider">
      <ul className="slides">
        <li>
          <img src={pizza} />
          <div className="caption center-align">
            <h3>This is our big Pizza!</h3>
            <h5 className="light black-text ">
              Here's our pizza with extra cheeze.
            </h5>
          </div>
        </li>
        <li>
          <img src={rice} />
          <div className="caption left-align">
            <h3>This is our rice!</h3>
            <h5 className="light black-text ">Rice with chicken and spice.</h5>
          </div>
        </li>
        <li>
          <img src={burger} />
          <div className="caption right-align">
            <h3>This is our big Burger!</h3>
            <h5 className="light black-text ">With extra chips.</h5>
          </div>
        </li>
        <li>
          <img src={rice} />
          <div className="caption center-align">
            <h3>This is our rice!</h3>
            <h5 className="light black-text ">Rice with salad and spice.</h5>
          </div>
        </li>
      </ul>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".slider");
  var instances = M.Slider.init(elems, {});
});

export default Slider;
