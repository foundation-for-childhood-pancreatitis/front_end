import React from "react";
import { Link } from "react-router-dom";
import { GlobalStyles } from "../../../components/styles/GlobalStyles";
import { ProjectStyles } from "./ProjectStyles";

const Project = () => {
  return (
    <section>
      <GlobalStyles />
      <ProjectStyles />
      <div className="projects-container">
        <div className="title">
          <h2>Featured Projects</h2>
        </div>

        <div className="grid-container">
          <div className="two-cols">
            <div className="content">
              <Link>Haven of Hope Orphanage</Link>
              <h4>Mombasa, Kenya</h4>
            </div>
          </div>
          <div className="last-col">
            <div className="special-content">
              <h3>
                We need some <span>helping hands!</span>
              </h3>
              <button>Join Us</button>
            </div>
          </div>
          <div className="first-col">
            <div className="content">
              <Link>Clean Water</Link>
              <h4>Gafsa, Tunis</h4>
            </div>
          </div>
          <div className="sec-col">
            <div className="content">
              <Link>Home For Children</Link>
              <h4>Mombasa, Kenya</h4>
            </div>
          </div>
          <div className="third-col">
            <div className="content">
              <Link>Orphanage Shelter</Link>
              <h4>Trinidad, Bolivia</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
