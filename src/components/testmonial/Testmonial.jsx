import React from "react";
import person1 from "../../assets/image/person1.jpeg";
import person2 from "../../assets/image/person2.jpeg";
import person3 from "../../assets/image/person3.jpeg";

const Testmonial = () => {
  return (
    <div className="center">
      <h3>TESTMONIALS</h3>
      <div className="row">
        <div className="col s12 m4">
          <div className="card-panel grey lighten-5 z-depth-1">
            <div className="center-align">
              <img
                src={person1}
                alt="image"
                className="circle responsive-img"
              />
              <p className="black-text">
                <small>Person Name</small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam voluptate aliquam dolor debitis facere maiores culpa
                exercitationem labore tenetur!
              </p>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card-panel grey lighten-5 z-depth-1">
            <div className="center-align">
              <img
                src={person2}
                alt="image"
                className="circle responsive-img"
              />
              <p className="black-text">
                <small>Person Name</small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam voluptate aliquam dolor debitis facere maiores culpa
                exercitationem labore tenetur!
              </p>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card-panel grey lighten-5 z-depth-1">
            <div className="center-align">
              <img
                src={person3}
                alt="image"
                className="circle responsive-img"
              />
              <p className="black-text">
                <small>Person Name</small>
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

export default Testmonial;
