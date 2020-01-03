import React from "react";
import textPicture from "../../../assets/home-carousel/hero-text.png";
import { HeroArea } from "./HeroStyles";

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
      </div>
      <div className="information">
        <div className="details">
          <div className="description">
            <svg
              id="nc_icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 24 24"
              class="brz-icon-svg"
              data-href="https://demo.themefuse.com/hope/wp-content/uploads/brizy/10/assets/icons/world.svg#nc_icon"
            >
              <g
                transform="translate(0, 0)"
                class="nc-icon-wrapper"
                fill="none"
              >
                <path
                  data-cap="butt"
                  data-color="color-2"
                  fill="none"
                  stroke="currentColor"
                  vector-effect="non-scaling-stroke"
                  stroke-miterlimit="10"
                  d="M5.704,2.979 c0.694,0.513,1.257,1.164,1.767,2.02C7.917,5.746,8.908,7.826,8,9c-1.027,1.328-4,1.776-4,3c0,0.921,1.304,1.972,2,3 c1.047,1.546,0.571,3.044,0,4c-0.296,0.496-0.769,0.92-1.293,1.234"
                  stroke-linejoin="miter"
                  stroke-linecap="butt"
                ></path>{" "}
                <path
                  data-cap="butt"
                  data-color="color-2"
                  fill="none"
                  stroke="currentColor"
                  vector-effect="non-scaling-stroke"
                  stroke-miterlimit="10"
                  d="M20.668,5.227 C18.509,6.262,15.542,6.961,15,7c-1.045,0.075-1.2-0.784-2-2c-0.6-0.912-2-2.053-2-3c0-0.371,0.036-0.672,0.131-0.966"
                  stroke-linejoin="miter"
                  stroke-linecap="butt"
                ></path>{" "}
                <circle
                  fill="none"
                  stroke="currentColor"
                  vector-effect="non-scaling-stroke"
                  stroke-linecap="square"
                  stroke-miterlimit="10"
                  cx="12"
                  cy="12"
                  r="11"
                  stroke-linejoin="miter"
                ></circle>{" "}
                <path
                  data-cap="butt"
                  data-color="color-2"
                  fill="none"
                  stroke="currentColor"
                  vector-effect="non-scaling-stroke"
                  stroke-miterlimit="10"
                  d="M19.014,12.903 C19.056,15.987,15.042,19.833,13,19c-1.79-0.73-0.527-2.138-0.986-6.097c-0.191-1.646,1.567-3,3.5-3S18.992,11.247,19.014,12.903z"
                  stroke-linejoin="miter"
                  stroke-linecap="butt"
                ></path>
              </g>
            </svg>
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
