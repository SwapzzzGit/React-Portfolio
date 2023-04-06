import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              Your <span>Dreams</span>come
            </h2>
          </div>
          <div className="hide">
            <h2>True.</h2>
          </div>
          <p>
            Contact Us for Any Photography and Videography ideas that you have.
            We have professionals with amazing Skills.
          </p>
          <button>Contact Us</button>
          <div className="image">
            <img src={home1} alt="A guy With a Camera" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
