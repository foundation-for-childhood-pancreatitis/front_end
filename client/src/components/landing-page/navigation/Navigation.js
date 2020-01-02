import React from "react";
import { Link } from "react-router-dom";
import { GlobalStyles } from "../../../components/index";
import { NavigationStyles } from "./NavigationStyles";

import hope from "../../../assets/logo/hope.png";
import logo from "../../../assets/logo/logo-main.png";

const Navigation = () => {
  return (
    <div>
      <GlobalStyles />
      <NavigationStyles />
      <header>
        
        <figure className="main-logo">
          <img src={logo} alt="main-logo"/>
        </figure>
       

        <nav className="main-nav" id="nav">
          <ul>
            <li>
              <Link>About</Link>
            </li>
            <li className="dropdown">
              <Link>Projects</Link>
              <ul className="dropdown-list">
                <Link>Projects</Link>
                <div className="divider"></div>
                <Link>Project Details</Link>
              </ul>
            </li>
            <li>
              <Link>Press</Link>
            </li>
            <li>
              {" "}
              <figure className="hope-logo">
                <img src={hope} alt="Logo" />
                
              </figure>
            </li>

            <li>
              <Link>Join Us</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
            <li className="dropdown">
              <Link>Donate</Link>
              <ul className="dropdown-list">
                <Link>Make a Donation</Link>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
