import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi"
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left Side Section */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Qalb <br /> Tours & Travels
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">Find a variety of properties that suit you very easilty</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={50} end={100} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Places</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={20} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Services</span>
            </div>
          </div>
        </div>

        {/* Right Side Section */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./mountain1.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero
