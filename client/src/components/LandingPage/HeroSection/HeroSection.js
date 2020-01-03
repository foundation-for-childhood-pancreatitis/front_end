import React from "react";
import textPicture from "../../../assets/home-carousel/hero-text.png";
import { HeroArea } from "./HeroStyles";
import Globe from "./Globe.js";

const HeroSection = () => {
  return (
    <section>
      <HeroArea />
      <div className="hero-img-container">
        <div>
          <figure>
            <img src={textPicture} alt="" />
          </figure>
          <button>Donate for our cause</button>
        </div>
        <div className="wave-container"></div>
      </div>
      <div className="information">
        <div className="details">
          <div className="description">
            <figure className="globe-icon">
              <Globe/>
            </figure>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              temporibus minus sit doloribus!
            </h4>
          </div>

          <div className="ind-info">
            <h4 className="title">We Support Over</h4>
            <h4 className="numbers">128</h4>
          </div>
          <div className="ind-info">
            <h4 className="title">Projects</h4>
            <h4 className="numbers">35</h4>
          </div>
          <div className="ind-info">
            <h4 className="title">Countries</h4>
            <h4 className="numbers">46</h4>
          </div>
          <div className="ind-info">
            <h4 className="title">Volunteers</h4>
            <h4 className="numbers">275</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
