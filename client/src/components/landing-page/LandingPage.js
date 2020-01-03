import React from "react";

//components
import Navigation from "./navigation/Navigation";
import HeroSection from "./hero-section/HeroSection";
import Project from "./projects/Projects";

const LandingPage = () => {
  return (
    <div className="main-container">
      <Navigation />
      <HeroSection />
      <Project />
    </div>
  );
};

export default LandingPage;
