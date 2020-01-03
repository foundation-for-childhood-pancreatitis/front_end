import React from "react";
import ProfileImage from "./ProfileImage";
import SideNavItem from "./SideNavItem";
import { sidebarIcons, sidebarTexts } from "../../../assets/icons/icons";
import { StyledSidebar } from "./DashBoardLayoutStyles";
import admin from "../../../assets/about-founders/board_shel.jpg";

class SidebarContainer extends React.Component {
  render() {
    return (
          <StyledSidebar>
            <ProfileImage name={"Miss Admin"} image={admin} path="/" />
            <div
              className="nav-items"
              role="presentation"
            >
              <SideNavItem
                text={sidebarTexts.about}
                icon={sidebarIcons.about}
                path="/about"
              />

              <SideNavItem
                text={sidebarTexts.portfolio}
                icon={sidebarIcons.portfolio}
                path="/projects"
              />

            </div>
            <div className="empty-div" />
          </StyledSidebar>
    );
  }
}

export default SidebarContainer;
