import React from "react";
import "./Hero.css";
import hand_icon from "../../Assets/hand_icon.png";
import arrow_icon from "../../Assets/arrow.png";
import Hero_image from "../../Assets/hero_image.png";
const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero-left">
        <h2>New Arivals Only</h2>
        <div>
          <div className="Hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Collection</p>
          <p>For Everyone</p>
        </div>
        <div className="Hero-Latest-Button">
          <button>
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
          </button>
        </div>
      </div>
      <div className="Hero-right">
        <img src={Hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
