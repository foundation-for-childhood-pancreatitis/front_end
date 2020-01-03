import React from 'react';

//components
import Project from "./projects/Projects";
import HeroSection from "./HeroSection/HeroSection";

const LandingPage = () => {
  return (
    <div className="main-container">
      <HeroSection />
      <Project />
    </div>
  );
};

export default LandingPage;
