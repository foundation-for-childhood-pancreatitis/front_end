import React from "react";

//components
import Navigation from "./navigation/Navigation";
import HeroSection from "./hero-section/HeroSection";

const LandingPage = () => {
  return (
    <div className="main-container">
      <Navigation />
      <HeroSection/>
    </div>
  );
};

export default LandingPage;
