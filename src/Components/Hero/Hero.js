import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left Side Section */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <h1>
              Discover <br /> Most Suitable <br /> Property
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span>Find a variety of properties that suit you very easilty</span> <br />
            <span>Forget all difficulties in finding a residence for you</span>
          </div>
        </div>

        {/* Right Side Section */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
