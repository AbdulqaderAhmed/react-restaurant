import React from "react";
import pizza from "../../assets/image/pizza.jpg";
import rice from "../../assets/image/riceWithMeat.jpg";
import burger from "../../assets/image/burger.jpg";

const Cards = () => {
  return (
    <div className="cards">
      <h3 className="center">Favorite Of All Time</h3>
      <div className="row">
        <div class="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src={pizza} />
              <a class="btn-floating halfway-fab waves-effect waves-light red">
                <i class="material-icons">add</i>
              </a>
            </div>
            <div class="card-content">
              <p class="card-title">
                Pizza
                <small>(15 pecies)</small>
                <small className="right">$10</small>
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam voluptate aliquam dolor debitis facere maiores culpa
                exercitationem labore tenetur!
              </p>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img src={rice} alt="rice" />
              <a class="btn-floating halfway-fab waves-effect waves-light red">
                <i class="material-icons">add</i>
              </a>
            </div>
            <div className="card-content">
              <p className="card-title">
                Rice
                <small>(5 pecies)</small>
                <small className="right">$15</small>
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam voluptate aliquam dolor debitis facere maiores culpa
                exercitationem labore tenetur!
              </p>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img src={burger} alt="burger" />
              <a class="btn-floating halfway-fab waves-effect waves-light red">
                <i class="material-icons">add</i>
              </a>
            </div>
            <div className="card-content">
              <p className="card-title">
                Burger
                <small>(9 pecies)</small>
                <small className="right">$10</small>
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam voluptate aliquam dolor debitis facere maiores culpa
                exercitationem labore tenetur!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
